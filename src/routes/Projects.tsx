import { Link } from 'react-router-dom'
import { projectIndex } from '../data/projects'
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <h1>Projects</h1>
      </header>

      <ul className={styles.grid}>
        {projectIndex.map((p) => (
          <li key={p.slug}>
            <Link to={`/projects/${p.slug}`} className={styles.card}>
              <p className={styles.kicker}>{p.kicker}</p>
              <h2 className={styles.name}>{p.name}</h2>
              <p className={styles.blurb}>{p.blurb}</p>
              <span className={styles.meta}>{p.meta}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
