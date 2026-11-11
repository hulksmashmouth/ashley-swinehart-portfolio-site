import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  linkedInRecommendationsHref,
  recommendations,
  type Recommendation,
} from '../data/recommendations'
import styles from './Recommendations.module.css'

// how long each set of cards stays up before the carousel moves on
const ROTATE_MS = 7000

type CardProps = {
  rec: Recommendation
  onExpandedChange: (expanded: boolean) => void
}

function RecommendationCard({ rec, onExpandedChange }: CardProps) {
  const bodyRef = useRef<HTMLQuoteElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [clamped, setClamped] = useState(false)

  // only offer "Read more" when the clamp is actually hiding text at this card width
  useLayoutEffect(() => {
    const el = bodyRef.current
    if (!el || expanded) return
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1)
    check()
    const observer = new ResizeObserver(check)
    observer.observe(el)
    return () => observer.disconnect()
  }, [expanded])

  const toggle = () => {
    setExpanded(!expanded)
    onExpandedChange(!expanded)
  }

  return (
    <li className={styles.card}>
      <figure className={styles.figure}>
        <span className={styles.mark} aria-hidden="true">
          &ldquo;
        </span>
        <blockquote
          ref={bodyRef}
          className={expanded ? styles.quote : `${styles.quote} ${styles.clamp}`}
        >
          {rec.text.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </blockquote>
        {(clamped || expanded) && (
          <button
            type="button"
            className={styles.more}
            aria-expanded={expanded}
            onClick={toggle}
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
        <figcaption className={styles.caption}>
          <span className={styles.name}>{rec.name}</span>
          <span className={styles.role}>{rec.role}</span>
          <span className={styles.meta}>
            {rec.relationship} · {rec.date}
          </span>
        </figcaption>
      </figure>
    </li>
  )
}

// width of one card plus the gap after it, and how many whole cards fit in view.
// The last card in view has no gap after it, so the gap is added back before dividing.
function measure(track: HTMLElement) {
  const card = track.firstElementChild as HTMLElement | null
  if (!card) return null
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0
  const step = card.offsetWidth + gap
  const perView = Math.max(1, Math.floor((track.clientWidth + gap + 2) / step))
  return { step, perView }
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

type RecommendationsProps = { className?: string }

// LinkedIn recommendations shown like business reviews: a scroll-snapping row that rotates
// on its own, with pause/play and previous/next controls. Rotation holds while someone is
// hovering, focused inside it, or reading an expanded quote, and starts paused for people
// who've asked their device for reduced motion.
function Recommendations({ className }: RecommendationsProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [position, setPosition] = useState({ first: 1, last: 1 })
  const [playing, setPlaying] = useState(() => !prefersReducedMotion())
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [expandedCount, setExpandedCount] = useState(0)
  // bumped on every manual move, so the rotation timer restarts instead of jumping right after
  const [nudge, setNudge] = useState(0)

  const count = recommendations.length

  const update = useCallback(() => {
    const track = trackRef.current
    const m = track && measure(track)
    if (!track || !m) return
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    // at the end the last card may be in view before a whole step has scrolled, so count back from it
    const first = atEnd
      ? Math.max(1, count - m.perView + 1)
      : Math.round(track.scrollLeft / m.step) + 1
    setPosition({ first, last: Math.min(first + m.perView - 1, count) })
  }, [count])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    update()
    track.addEventListener('scroll', update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(track)
    return () => {
      track.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [update])

  // pages by however many cards are fully in view, wrapping around at either end
  const go = useCallback((direction: 1 | -1) => {
    const track = trackRef.current
    const m = track && measure(track)
    if (!track || !m) return
    const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth'
    const atStart = track.scrollLeft <= 1
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    if (direction === 1 && atEnd) track.scrollTo({ left: 0, behavior })
    else if (direction === -1 && atStart) track.scrollTo({ left: track.scrollWidth, behavior })
    else track.scrollBy({ left: direction * m.step * m.perView, behavior })
  }, [])

  const paused = !playing || hovered || focused || expandedCount > 0

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => go(1), ROTATE_MS)
    return () => window.clearInterval(id)
  }, [paused, go, nudge])

  const step = (direction: 1 | -1) => {
    go(direction)
    setNudge((n) => n + 1)
  }

  const range =
    position.first === position.last ? `${position.first}` : `${position.first}–${position.last}`

  return (
    <section
      ref={sectionRef}
      className={className ? `${styles.section} ${className}` : styles.section}
      aria-roledescription="carousel"
      aria-labelledby="recommendations-title"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // keyboard focus only: a mouse click on Play focuses the button too, and shouldn't pause it
      onFocus={(e) => {
        if (e.target.matches(':focus-visible')) setFocused(true)
      }}
      onBlur={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget as Node | null)) setFocused(false)
      }}
    >
      <div className={styles.head}>
        <div>
          <h2 id="recommendations-title" className={styles.title}>
            Kind words
          </h2>
          <p className={styles.sub}>
            {count} recommendations from managers, teammates, and clients on{' '}
            <a
              href={linkedInRecommendationsHref}
              target="_blank"
              rel="noreferrer"
              data-track="contact_click"
              data-track-label="linkedin_recommendations"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className={styles.controls}>
          {/* announce position changes only when the visitor is driving, not on every auto-rotation */}
          <span className={styles.count} aria-live={paused ? 'polite' : 'off'}>
            {range} of {count}
          </span>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause recommendations' : 'Play recommendations'}
            data-track="recommendations_nav"
            data-track-label={playing ? 'pause' : 'play'}
          >
            {playing ? (
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
                <rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="M4 2.2v11.6a.8.8 0 0 0 1.2.7l9-5.8a.8.8 0 0 0 0-1.4l-9-5.8A.8.8 0 0 0 4 2.2Z" fill="currentColor" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(-1)}
            aria-label="Previous recommendations"
            data-track="recommendations_nav"
            data-track-label="previous"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => step(1)}
            aria-label="Next recommendations"
            data-track="recommendations_nav"
            data-track-label="next"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* focusable so keyboard users can scroll it with the arrow keys */}
      <ul
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        aria-label="Recommendations"
        // a swipe restarts the timer so the carousel doesn't move right after someone lets go
        onPointerDown={() => setNudge((n) => n + 1)}
      >
        {recommendations.map((rec) => (
          <RecommendationCard
            key={rec.name}
            rec={rec}
            onExpandedChange={(open) => setExpandedCount((n) => n + (open ? 1 : -1))}
          />
        ))}
      </ul>
    </section>
  )
}

export default Recommendations
