import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { trackEvent } from '../analytics'
import BookingEmbed from '../components/BookingEmbed'
import { consulting } from '../data/consulting'
import { questionnaire, SERVICES, type Question, type Section } from '../data/questionnaire'
import styles from './Questionnaire.module.css'

// Submissions go through FormSubmit (formsubmit.co), which emails each response as a
// table. The site is static, so this needs no server. The very first submission sends an
// activation email to the address below; responses arrive once that link is clicked.
const ENDPOINT = `https://formsubmit.co/ajax/${questionnaire.email}`
const DRAFT_KEY = 'client-questionnaire-draft'

type Answers = Record<string, string | string[]>
type Status = 'idle' | 'sending' | 'sent' | 'error'

function loadDraft(): { answers: Answers; other: Record<string, string> } {
  try {
    const raw = localStorage.getItem(DRAFT_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // private mode or a corrupt draft: start fresh
  }
  return { answers: {}, other: {} }
}

/** the website section is skipped for photography-only jobs, and vice versa */
function visibleSections(services: string[]): Section[] {
  const picked = new Set(services)
  const photoOnly = picked.size > 0 && [...picked].every((s) => s === SERVICES.photography)
  const wantsPhoto = picked.size === 0 || picked.has(SERVICES.photography) || picked.has(SERVICES.notSure)
  return questionnaire.sections.filter(
    (s) => !(s.id === 'website' && photoOnly) && !(s.id === 'photography' && !wantsPhoto),
  )
}

function Field({
  q,
  value,
  other,
  onChange,
  onOther,
}: {
  q: Question
  value: string | string[] | undefined
  other: string
  onChange: (v: string | string[]) => void
  onOther: (v: string) => void
}) {
  const id = `q-${q.id}`
  const hintId = q.hint ? `${id}-hint` : undefined
  const label = (
    <>
      {q.label}
      {q.required && <span className={styles.req} aria-hidden="true"> *</span>}
    </>
  )
  const hint = q.hint && (
    <p id={hintId} className={styles.hint}>
      {q.hint}
    </p>
  )

  if (q.type === 'text' || q.type === 'textarea') {
    const common = {
      id,
      name: q.id,
      required: q.required,
      'aria-describedby': hintId,
      value: (value as string) ?? '',
      onChange: (e: { target: { value: string } }) => onChange(e.target.value),
    }
    return (
      <div className={styles.field}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {hint}
        {q.type === 'text' ? (
          <input
            {...common}
            className={styles.input}
            type={q.inputType ?? 'text'}
            autoComplete={q.autoComplete}
          />
        ) : (
          <textarea {...common} className={styles.input} rows={3} />
        )}
      </div>
    )
  }

  const checked = q.type === 'checkbox' ? ((value as string[]) ?? []) : []
  const otherOn = q.type === 'checkbox' && q.other && checked.includes('Other')
  // a "pick up to N" list locks the remaining boxes once N are checked
  const full = q.type === 'checkbox' && q.max !== undefined && checked.length >= q.max
  const options = q.type === 'checkbox' && q.other ? [...q.options, 'Other'] : q.options

  return (
    <fieldset className={styles.field} aria-describedby={hintId}>
      <legend className={styles.label}>{label}</legend>
      {hint}
      <div className={styles.choices}>
        {options.map((opt) => {
          const isOn = q.type === 'checkbox' ? checked.includes(opt) : value === opt
          return (
            <label key={opt} className={styles.choice} data-on={isOn}>
              <input
                type={q.type}
                name={q.id}
                value={opt}
                checked={isOn}
                disabled={q.type === 'checkbox' && full && !isOn}
                onChange={() => {
                  if (q.type === 'radio') return onChange(opt)
                  onChange(isOn ? checked.filter((c) => c !== opt) : [...checked, opt])
                }}
              />
              <span>{opt}</span>
            </label>
          )
        })}
      </div>
      {otherOn && (
        <input
          className={`${styles.input} ${styles.otherInput}`}
          aria-label={`${q.label}: other`}
          placeholder="Tell me more"
          value={other}
          onChange={(e) => onOther(e.target.value)}
        />
      )}
    </fieldset>
  )
}

/** flattens the answers into ordered "label: answer" rows for the email, skipping blanks */
function buildEmail(sections: Section[], answers: Answers, other: Record<string, string>) {
  const rows: Record<string, string> = {}
  sections.forEach((section, i) => {
    for (const q of section.questions) {
      const v = answers[q.id]
      let text = ''
      if (Array.isArray(v)) {
        text = v
          .map((c) => (c === 'Other' && other[q.id]?.trim() ? `Other: ${other[q.id].trim()}` : c))
          .join(', ')
      } else if (v) {
        text = v.trim()
      }
      if (text) rows[`${i + 1}. ${q.label}`] = text
    }
  })
  return rows
}

function Questionnaire() {
  const [draft] = useState(loadDraft)
  const [answers, setAnswers] = useState<Answers>(draft.answers)
  const [other, setOther] = useState<Record<string, string>>(draft.other)
  const [status, setStatus] = useState<Status>('idle')

  const sections = useMemo(
    () => visibleSections((answers.services as string[]) ?? []),
    [answers.services],
  )

  // keep a draft in this browser so a refresh or a closed tab doesn't lose 15 minutes of answers
  useEffect(() => {
    if (status === 'sent') return
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ answers, other }))
    } catch {
      // storage unavailable; the form still works, just without a saved draft
    }
  }, [answers, other, status])

  const set = (id: string) => (v: string | string[]) => setAnswers((a) => ({ ...a, [id]: v }))
  const setOtherFor = (id: string) => (v: string) => setOther((o) => ({ ...o, [id]: v }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // bots fill in the hidden field; people never see it
    if ((e.currentTarget.elements.namedItem('_honey') as HTMLInputElement)?.value) return

    setStatus('sending')
    const name = String(answers.name ?? '').trim()
    const business = String(answers.business ?? '').trim()
    const email = String(answers.email ?? '').trim()

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New client questionnaire: ${business || name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
          ...buildEmail(sections, answers, other),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message)

      setStatus('sent')
      trackEvent('questionnaire_submit')
      try {
        localStorage.removeItem(DRAFT_KEY)
      } catch {
        // nothing to clean up
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    const calLink = consulting.booking.calLink
    const business = String(answers.business ?? '').trim()
    return (
      <div className={styles.page}>
        <section className={styles.done}>
          <p className={styles.eyebrow}>Questionnaire received</p>
          <h1 className={styles.title}>
            Thank <em className={styles.neonWord}>you!</em>
          </h1>
          <p>
            I&rsquo;m looking forward to learning more about your business.{' '}
            {calLink ? 'Last step: pick a time for our free 30-minute call below.' : 'Here’s what happens next:'}
          </p>
          <ol className={styles.steps}>
            {calLink && <li>Book your call below. You&rsquo;ll get a calendar invite right away.</li>}
            <li>
              If you have a logo, photos, or examples you mentioned, email them to{' '}
              <a href={`mailto:${questionnaire.email}`}>{questionnaire.email}</a>.
            </li>
            {questionnaire.nextSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          {!calLink && (
            <div className={styles.ctas}>
              <a className={styles.ctaPrimary} href={`mailto:${questionnaire.email}`}>
                Email me to set up a call
              </a>
            </div>
          )}
        </section>
        {calLink && (
          <section className={styles.bookSection} aria-label="Book your call">
            <div className={styles.booking}>
              <BookingEmbed
                calLink={calLink}
                prefill={{
                  name: String(answers.name ?? '').trim(),
                  email: String(answers.email ?? '').trim(),
                  notes: business ? `New client questionnaire sent for ${business}.` : undefined,
                }}
              />
            </div>
          </section>
        )}
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Ashley Swinehart, LLC</p>
        <h1 className={styles.title}>
          New client <em className={styles.neonWord}>questionnaire</em>
        </h1>
        <p className={styles.intro}>{questionnaire.intro}</p>
        <p className={styles.intro}>{questionnaire.bookingNote}</p>
        <p className={styles.small}>
          Fields marked <span className={styles.req}>*</span> are required. Your answers are saved in
          this browser as you go, so you can come back and finish later.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="_honey" className={styles.honey} tabIndex={-1} autoComplete="off" aria-hidden="true" />

        {sections.map((section, i) => (
          <section key={section.id} className={styles.section} aria-labelledby={`s-${section.id}`}>
            <h2 id={`s-${section.id}`} className={styles.sectionTitle}>
              <span className={styles.num}>{i + 1}</span>
              {section.title}
            </h2>
            {section.intro && <p className={styles.note}>{section.intro}</p>}
            {section.questions.map((q) => (
              <div key={q.id} className={styles.row}>
                {section.groups?.[q.id] && <h3 className={styles.group}>{section.groups[q.id]}</h3>}
                <Field
                  q={q}
                  value={answers[q.id]}
                  other={other[q.id] ?? ''}
                  onChange={set(q.id)}
                  onOther={setOtherFor(q.id)}
                />
              </div>
            ))}
          </section>
        ))}

        <div className={styles.submitBar}>
          <button type="submit" className={styles.ctaPrimary} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send questionnaire'}
          </button>
          {status === 'error' && (
            <p className={styles.error} role="alert">
              Something went wrong sending your answers. They&rsquo;re still saved here, so please try
              again, or email me at <a href={`mailto:${questionnaire.email}`}>{questionnaire.email}</a>.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Questionnaire
