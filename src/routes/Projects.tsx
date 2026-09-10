import { informativ } from '../data/informativ'
import { dollyPocket } from '../data/dollyPocket'
import styles from './Projects.module.css'

function Informativ() {
  return (
    <section className={styles.project} aria-labelledby="informativ">
      <div className={styles.projectHead}>
        <h2 id="informativ" className={styles.projectName}>
          {informativ.company}
        </h2>
        <p className={styles.kicker}>{informativ.role}</p>
        <p className={styles.summary}>{informativ.summary}</p>
      </div>

      <ol className={styles.caseList}>
        {informativ.caseStudies.map((cs, i) => (
          <li key={cs.slug} className={styles.case}>
            <div className={styles.caseIndex}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className={styles.caseBody}>
              <h3 className={styles.caseName}>{cs.name}</h3>
              <p className={styles.caseSubtitle}>{cs.subtitle}</p>
              <p className={styles.caseOverview}>{cs.overview}</p>

              <ul className={styles.highlights}>
                {cs.highlights.map((h) => (
                  <li key={h.title} className={styles.highlight}>
                    {h.image && (
                      <img
                        className={styles.shot}
                        src={`/${h.image}`}
                        alt={`${cs.name} — ${h.title}`}
                        loading="lazy"
                      />
                    )}
                    <div className={styles.highlightText}>
                      <span className={styles.highlightTitle}>{h.title}</span>
                      <span className={styles.highlightCaption}>{h.caption}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function DollyPocket() {
  return (
    <section className={styles.project} aria-labelledby="dolly-pocket">
      <div className={styles.projectHead}>
        <h2 id="dolly-pocket" className={styles.projectName}>
          {dollyPocket.name}
        </h2>
        <p className={styles.kicker}>{dollyPocket.status}</p>
        <p className={styles.tagline}>{dollyPocket.tagline}</p>
        <p className={styles.summary}>{dollyPocket.overview}</p>
      </div>

      <dl className={styles.specs}>
        {dollyPocket.specs.map((s) => (
          <div key={s.label} className={styles.spec}>
            <dt className={styles.specLabel}>{s.label}</dt>
            <dd className={styles.specValue}>{s.value}</dd>
          </div>
        ))}
      </dl>

      <h3 className={styles.blockTitle}>Build progress</h3>
      <ul className={styles.highlights}>
        {dollyPocket.shots.map((shot) => (
          <li key={shot.title} className={styles.highlight}>
            {shot.image && (
              <img
                className={styles.shot}
                src={`/${shot.image}`}
                alt={`${dollyPocket.name} — ${shot.title}`}
                loading="lazy"
              />
            )}
            <div className={styles.highlightText}>
              <span className={styles.highlightTitle}>{shot.title}</span>
              <span className={styles.highlightCaption}>{shot.caption}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Projects() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <h1>Projects</h1>
      </header>

      <Informativ />
      <DollyPocket />
    </div>
  )
}

export default Projects
