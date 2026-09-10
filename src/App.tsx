import { NavLink, Outlet } from 'react-router-dom'
import styles from './App.module.css'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link

function App() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          Ash Swinehart
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={navClass}>
            Resume
          </NavLink>
          <NavLink to="/consulting" className={navClass}>
            Consulting
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Ash Swinehart</span>
      </footer>
    </div>
  )
}

export default App
