import { Link } from 'react-router-dom'
import { designSystemStarter as ds } from '../../data/designSystemStarter'
import styles from './ProjectDetail.module.css'

function DesignSystemStarter() {
  return (
    <div className={styles.page}>
      <Link to="/projects" className={styles.back}>
        ← All projects
      </Link>

      <div className={styles.head}>
        <h1 className={styles.name}>{ds.name}</h1>
        <p className={styles.kicker}>{ds.kicker}</p>
        <p className={styles.tagline}>{ds.tagline}</p>
        <p className={styles.summary}>{ds.overview}</p>
        <a
          className={styles.repoLink}
          href={ds.repo}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>

      <h2 className={styles.blockTitle}>What&rsquo;s inside</h2>
      <dl className={styles.specs}>
        {ds.packages.map((p) => (
          <div key={p.label} className={styles.spec}>
            <dt className={styles.specLabel}>{p.label}</dt>
            <dd className={styles.specValue}>{p.value}</dd>
          </div>
        ))}
      </dl>

      <h2 className={styles.blockTitle}>How it works</h2>
      <ul className={styles.highlights}>
        {ds.highlights.map((h) => (
          <li key={h.title} className={styles.highlight}>
            <div className={styles.highlightText}>
              <span className={styles.highlightTitle}>{h.title}</span>
              <span className={styles.highlightCaption}>{h.caption}</span>
            </div>
          </li>
        ))}
      </ul>

      <h2 className={styles.blockTitle}>Stack</h2>
      <ul className={styles.tags}>
        {ds.stack.map((s) => (
          <li key={s} className={styles.tag}>
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesignSystemStarter
