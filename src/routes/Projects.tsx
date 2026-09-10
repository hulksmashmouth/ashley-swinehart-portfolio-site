import { informativ } from '../data/informativ'
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <h1>Projects</h1>
      </header>

      <section className={styles.company} aria-labelledby="informativ">
        <div className={styles.companyHead}>
          <h2 id="informativ" className={styles.companyName}>
            {informativ.company}
          </h2>
          <p className={styles.role}>{informativ.role}</p>
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
                      <span className={styles.highlightTitle}>{h.title}</span>
                      <span className={styles.highlightCaption}>{h.caption}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Projects
