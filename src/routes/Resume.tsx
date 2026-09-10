import { resume } from '../data/resume'
import styles from './Resume.module.css'

function Resume() {
  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <h1 className={styles.name}>{resume.name}</h1>
          <p className={styles.title}>{resume.title}</p>
        </div>
        <a className={styles.download} href={`/${resume.pdf}`} download>
          Download PDF
        </a>
      </header>

      <p className={styles.summary}>{resume.summary}</p>

      <ul className={styles.links}>
        {resume.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.jobs}>
          {resume.experience.map((job) => (
            <article key={`${job.org}-${job.role}`} className={styles.job}>
              {job.transitionNote && (
                <p className={styles.transition}>{job.transitionNote}</p>
              )}
              <h3 className={styles.jobRole}>{job.role}</h3>
              <p className={styles.jobMeta}>
                <span className={styles.jobOrg}>{job.org}</span>
                <span className={styles.dot}>·</span>
                <span>
                  {job.start} – {job.end}
                </span>
                {job.location && (
                  <>
                    <span className={styles.dot}>·</span>
                    <span>{job.location}</span>
                  </>
                )}
              </p>
              <ul className={styles.bullets}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal Project</h2>
        <h3 className={styles.jobRole}>{resume.personalProject.name}</h3>
        <p className={styles.projectDesc}>{resume.personalProject.description}</p>
      </section>

      <div className={styles.columns}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul className={styles.plainList}>
            {resume.education.map((e) => (
              <li key={e.degree}>
                <span className={styles.degree}>{e.degree}</span>
                <span className={styles.school}>{e.school}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <ul className={styles.plainList}>
            {resume.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.skills}>
          {resume.skills.map((s) => (
            <li key={s} className={styles.skill}>
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Resume
