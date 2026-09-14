import { useEffect, useState } from 'react'
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import styles from './App.module.css'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // close the mobile menu whenever a navigation happens
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <NavLink to="/" className={styles.brand}>
            Ash Swinehart
          </NavLink>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuToggleBars} data-open={menuOpen} />
            <span className={styles.srOnly}>
              {menuOpen ? 'Close menu' : 'Open menu'}
            </span>
          </button>
        </div>

        <nav
          id="site-nav"
          className={styles.nav}
          data-open={menuOpen}
        >
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={navClass}>
            Projects
          </NavLink>
          <NavLink to="/photography" className={navClass}>
            Photography
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

      <ScrollRestoration />
    </div>
  )
}

export default App
