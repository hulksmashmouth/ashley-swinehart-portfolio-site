import { Sparkle } from './Sparkle'
import styles from './Cosmos.module.css'

// fixed, decorative backdrop: the orbit arcs and sparkles from the brand banners
const sparkles = [
  { top: '14%', left: '6%', size: 14, tone: 'gold', delay: '0s' },
  { top: '9%', left: '78%', size: 12, tone: 'gold', delay: '1.6s' },
  { top: '38%', left: '94%', size: 16, tone: 'rose', delay: '0.8s' },
  { top: '62%', left: '3%', size: 10, tone: 'rose', delay: '2.4s' },
  { top: '84%', left: '88%', size: 13, tone: 'gold', delay: '3.2s' },
  { top: '92%', left: '22%', size: 9, tone: 'gold', delay: '1.2s' },
] as const

function Cosmos() {
  return (
    <div className={styles.cosmos} aria-hidden="true">
      <svg className={styles.topRight} viewBox="0 0 600 420" fill="none">
        <circle cx="560" cy="-60" r="300" className={styles.orbit} />
        <circle cx="380" cy="-420" r="560" className={styles.dotted} />
        <circle cx="291" cy="108" r="5" className={styles.goldDot} />
      </svg>

      <svg className={styles.bottomLeft} viewBox="0 0 600 460" fill="none">
        <circle cx="-40" cy="560" r="360" className={styles.orbit} />
        <ellipse
          cx="210"
          cy="300"
          rx="300"
          ry="110"
          transform="rotate(-24 210 300)"
          className={styles.orbitFaint}
        />
        <circle cx="-120" cy="720" r="520" className={styles.dotted} />
        <circle cx="96" cy="258" r="6" className={styles.moon} />
      </svg>

      {sparkles.map((s) => (
        <span
          key={`${s.top}-${s.left}`}
          className={styles.sparkle}
          data-tone={s.tone}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <Sparkle size={s.size} />
        </span>
      ))}
    </div>
  )
}

export default Cosmos
