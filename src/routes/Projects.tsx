import styles from './Projects.module.css'

type Project = {
  name: string
  description: string
  href?: string
}

const projects: Project[] = [
  {
    name: 'Example project',
    description: 'Short description of what it is and your role.',
    href: 'https://example.com',
  },
]

function Projects() {
  return (
    <section className={styles.page}>
      <h1>Projects</h1>
      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.name} className={styles.item}>
            <h2 className={styles.name}>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h2>
            <p className={styles.description}>{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
