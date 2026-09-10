import { Link } from 'react-router-dom'
import { dollyPocket } from '../../data/dollyPocket'
import styles from './ProjectDetail.module.css'

function DollyPocket() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.back}>
        ← All projects
      </Link>

      <div className={styles.head}>
        <h1 className={styles.name}>{dollyPocket.name}</h1>
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

      <h2 className={styles.blockTitle}>Build progress</h2>
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
    </div>
  )
}

export default DollyPocket
