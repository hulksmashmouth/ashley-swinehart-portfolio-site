import {
  lazy,
  Suspense,
  useMemo,
  useState,
  type ComponentType,
  type FormEvent,
} from 'react'
import styles from './PasswordGate.module.css'

type Props = {
  /** sessionStorage key used to remember a successful unlock for this tab session. */
  storageKey: string
  /** Lowercase hex SHA-256 digest of the expected password. */
  passwordHash: string
  /** Dynamic import for the gated route — only fetched after the password is correct. */
  load: () => Promise<{ default: ComponentType }>
}

async function sha256Hex(text: string) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function PasswordGate({ storageKey, passwordHash, load }: Props) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(storageKey) === '1',
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [checking, setChecking] = useState(false)

  // Only created (and only then does the code-split chunk get fetched)
  // once the password has been verified.
  const GatedContent = useMemo(
    () => (unlocked ? lazy(load) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [unlocked],
  )

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setChecking(true)
    const hash = await sha256Hex(value.trim())
    setChecking(false)

    if (hash === passwordHash) {
      sessionStorage.setItem(storageKey, '1')
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  if (unlocked && GatedContent) {
    return (
      <Suspense fallback={<div className={styles.loading}>Loading…</div>}>
        <GatedContent />
      </Suspense>
    )
  }

  return (
    <div className={styles.gate}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Password protected</p>
        <h1 className={styles.title}>This project is under NDA</h1>
        <p className={styles.hint}>Enter the password to view this case study.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError(false)
            }}
            placeholder="Password"
            autoFocus
            autoComplete="off"
            className={styles.input}
            aria-invalid={error}
          />
          <button type="submit" className={styles.submit} disabled={checking}>
            {checking ? 'Checking…' : 'Unlock'}
          </button>
        </form>

        {error && <p className={styles.error}>Incorrect password.</p>}
      </div>
    </div>
  )
}

export default PasswordGate
