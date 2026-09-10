import { consulting } from '../data/consulting'
import styles from './Consulting.module.css'

function Consulting() {
  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <h1 className={styles.title}>Consulting</h1>
        {consulting.available && (
          <span className={styles.badge}>Available for hire</span>
        )}
      </header>

      <p className={styles.intro}>{consulting.intro}</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <ul className={styles.services}>
          {consulting.services.map((s) => (
            <li key={s.title} className={styles.service}>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How engagements work</h2>
        <ul className={styles.engagements}>
          {consulting.engagements.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>Work together</h2>
        <p>
          {consulting.entity} is taking on new clients. The fastest way to start
          a conversation is a message on{' '}
          <a href={consulting.contact.href} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default Consulting
