import { useEffect, useState } from 'react'
import { NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { trackPageView } from './analytics'
import Backdrop from './components/Backdrop'
import { CubeLamp } from './components/Lamp'
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

  // the router changes pages without a reload, so each route is reported to GA here
  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <>
      <Backdrop />
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerRow}>
            <NavLink to="/" className={styles.brand}>
              <img
                className={styles.monogram}
                src="/brand/logo-circle.webp"
                alt=""
                width={44}
                height={44}
              />
              <span className={styles.wordmark}>Ash Swinehart</span>
            </NavLink>
            <div className={styles.headerActions}>
              <NavLink
                to="/consulting#book"
                className={styles.bookCta}
                data-track="cta_click"
                data-track-label="header_book_call"
              >
                Book a call
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
          <CubeLamp size={12} className={styles.footerLamp} />
          <span>© {new Date().getFullYear()} Ashley Swinehart, LLC</span>
        </footer>

        <ScrollRestoration />
      </div>
    </>
  )
}

export default App
