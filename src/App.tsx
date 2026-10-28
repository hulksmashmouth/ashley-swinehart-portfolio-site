import { useEffect, useState } from 'react'
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Cosmos from './components/Cosmos'
import { Sparkle } from './components/Sparkle'
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
    <>
      <Cosmos />
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <NavLink to="/" className={styles.brand}>
              <img
                className={styles.monogram}
                src="/brand/monogram.webp"
                alt=""
                width={40}
                height={40}
              />
              <span className={styles.wordmark}>Ash Swinehart</span>
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
          <p className={styles.tagline}>
            Thoughtful design. Smarter systems. Better experiences.
          </p>
          <Sparkle size={12} className={styles.footerStar} />
          <span>© {new Date().getFullYear()} Ashley Swinehart, LLC</span>
        </footer>

        <ScrollRestoration />
      </div>
    </>
  )
}

export default App
