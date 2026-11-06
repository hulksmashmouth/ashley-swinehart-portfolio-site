import styles from './Monstera.module.css'

// the den's monstera in its black mid-century planter, as a dim, lamp-lit silhouette.
// Each leaf is one heart-shaped blade with the splits and holes cut out by a mask.

// a leaf pointing up (tip leaning a little right), heart-shaped notch at the base (0, 0)
const LEAF =
  'M0 -6 C -18 14 -66 16 -88 -14 C -110 -46 -104 -96 -70 -126 C -46 -146 -16 -152 4 -156 C 28 -150 70 -138 92 -106 C 114 -72 106 -24 80 0 C 56 18 16 12 0 -6 Z'
const MIDRIB = 'M0 -6 C 2 -60 4 -110 4 -150'

// splits are thin wedges cut in from beyond the edge almost to the midrib, leaving the
// leaf's "fingers"; a row of small holes sits along the midrib
const SPLITS = [-30, -54, -78, -102, -124].map((y, i) => ({ y, rise: 18 + i * 6 }))
const HOLES = [-42, -66, -90, -113].map((y) => ({ x: 22, y }))

function wedge(side: 1 | -1, y: number, rise: number) {
  const ix = 14 * side
  const ox = 140 * side
  const oy = y - rise
  return `M${ix} ${y - 1} L ${ox} ${oy - 8} L ${ox} ${oy + 8} L ${ix} ${y + 1} Z`
}

type Leaf = { x: number; y: number; rotate: number; scale: number; flip?: boolean }

// each leaf hangs off the end of its stem, tip pointing outward and drooping lower the
// further down the plant it is. Listed back to front so the cluster overlaps densely.
const leaves: Leaf[] = [
  { x: 150, y: 392, rotate: -124, scale: 1.05, flip: true },
  { x: 236, y: 402, rotate: 128, scale: 1 },
  { x: 146, y: 262, rotate: -86, scale: 1.25 },
  { x: 244, y: 272, rotate: 92, scale: 1.3, flip: true },
  { x: 176, y: 172, rotate: -28, scale: 1.3 },
  { x: 214, y: 158, rotate: 36, scale: 1.2, flip: true },
  { x: 194, y: 318, rotate: 8, scale: 1.15 },
]

const POT_TOP = 560
const STEM_BASE = { x: 190, y: POT_TOP + 6 }

function leafMask(id: string) {
  return (
    <mask id={id} maskUnits="userSpaceOnUse" x="-150" y="-180" width="300" height="220">
      <path d={LEAF} fill="#fff" />
      {SPLITS.flatMap((sp) => [
        <path key={`r${sp.y}`} d={wedge(1, sp.y, sp.rise)} fill="#000" />,
        <path key={`l${sp.y}`} d={wedge(-1, sp.y, sp.rise)} fill="#000" />,
      ])}
      {HOLES.flatMap((h) => [
        <ellipse key={`hr${h.y}`} cx={h.x} cy={h.y} rx="6" ry="3.5" fill="#000" />,
        <ellipse key={`hl${h.y}`} cx={-h.x} cy={h.y} rx="6" ry="3.5" fill="#000" />,
      ])}
    </mask>
  )
}

type MonsteraProps = { className?: string }

function Monstera({ className }: MonsteraProps) {
  return (
    <svg className={className} viewBox="0 0 380 760" overflow="visible" fill="none" aria-hidden="true">
      <defs>
        {leafMask('monstera-leaf')}
        <linearGradient id="monstera-green" x1="0" y1="-156" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2f4524" />
          <stop offset="100%" stopColor="#152212" />
        </linearGradient>
        <linearGradient id="planter" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d0907" />
          <stop offset="70%" stopColor="#1e1611" />
          <stop offset="100%" stopColor="#0d0907" />
        </linearGradient>
      </defs>

      {/* the whole plant rocks gently from the soil line */}
      <g className={styles.plant} style={{ transformOrigin: `${STEM_BASE.x}px ${STEM_BASE.y}px` }}>
        {/* stems */}
        <g stroke="#1c2a16" strokeWidth="4" strokeLinecap="round">
          {leaves.map((l) => (
            <path
              key={`stem-${l.x}-${l.y}`}
              d={`M${STEM_BASE.x} ${STEM_BASE.y} Q ${(STEM_BASE.x + l.x) / 2} ${(STEM_BASE.y + l.y) / 2 + 40} ${l.x} ${l.y}`}
            />
          ))}
        </g>

        {/* leaves, back to front; each one drifts on its own rhythm, pivoting at its stem */}
        {leaves.map((l, i) => (
          <g
            key={`leaf-${l.x}-${l.y}`}
            transform={`translate(${l.x} ${l.y}) rotate(${l.rotate}) scale(${l.flip ? -l.scale : l.scale} ${l.scale})`}
          >
            <g
              className={styles.leaf}
              style={{ animationDuration: `${5.5 + (i % 3) * 1.3}s`, animationDelay: `${-i * 0.9}s` }}
            >
              <g mask="url(#monstera-leaf)">
                <path d={LEAF} fill="url(#monstera-green)" />
                {/* lamp light catching the upper edge */}
                <path d={LEAF} stroke="rgba(243, 123, 38, 0.4)" strokeWidth="3" />
              </g>
              <path d={MIDRIB} stroke="#3e5a2c" strokeWidth="2.5" />
            </g>
          </g>
        ))}
      </g>

      {/* black mid-century planter on tapered wooden legs */}
      <path d={`M120 ${POT_TOP} L 260 ${POT_TOP} L 248 ${POT_TOP + 120} C 246 ${POT_TOP + 130} 134 ${POT_TOP + 130} 132 ${POT_TOP + 120} Z`} fill="url(#planter)" />
      <path d={`M120 ${POT_TOP} L 260 ${POT_TOP}`} stroke="rgba(243, 123, 38, 0.35)" strokeWidth="2" />
      <g stroke="#5a3418" strokeWidth="7" strokeLinecap="round">
        <path d={`M146 ${POT_TOP + 124} L 132 ${POT_TOP + 196}`} />
        <path d={`M234 ${POT_TOP + 124} L 248 ${POT_TOP + 196}`} />
      </g>
    </svg>
  )
}

export default Monstera
