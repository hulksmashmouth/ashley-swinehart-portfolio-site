// the den's neon sign: a pink cat asleep on a rainbow, traced tube-for-tube from a photo
// of the real sign. Every tube is drawn twice — a blurred colored glow and a hot core —
// the way real neon reads on a wall.

type TubeSpec = { d: string; glow: string; core: string }

const PINK = { glow: '#ff4fc8', core: '#ffd9f3' }
const RED = { glow: '#ff3b30', core: '#ff8a7a' }
const ORANGE = { glow: '#ff7a1f', core: '#ffb27a' }
const YELLOW = { glow: '#ffc400', core: '#fff07a' }
const WHITE = { glow: '#fff6e8', core: '#ffffff' }
const TEAL = { glow: '#1fe0c8', core: '#b8fff4' }
const MAGENTA = { glow: '#ff3fb8', core: '#ffc4ea' }

const tubes: TubeSpec[] = [
  // rainbow, top to bottom. Red and yellow break around the paws; white, teal, and
  // magenta run the full length.
  { ...RED, d: 'M212 552 C 240 520 300 482 430 446' },
  { ...RED, d: 'M920 434 C 1010 428 1110 396 1168 336 C 1186 316 1196 292 1200 266' },
  { ...ORANGE, d: 'M652 412 L 734 428' },
  { ...YELLOW, d: 'M176 660 C 210 610 270 552 360 520 C 410 504 460 494 500 488' },
  { ...YELLOW, d: 'M656 462 L 750 480' },
  { ...YELLOW, d: 'M920 490 C 1040 482 1170 452 1228 380 C 1246 356 1254 324 1256 296' },
  { ...WHITE, d: 'M206 704 C 250 640 330 586 450 548 C 560 520 700 518 900 524 C 1040 526 1180 500 1262 420 C 1294 388 1316 360 1326 330' },
  { ...TEAL, d: 'M202 770 C 250 706 340 646 470 604 C 560 580 660 572 800 574 C 940 576 1080 566 1180 532 C 1270 500 1340 440 1370 356' },
  { ...MAGENTA, d: 'M242 814 C 290 754 380 696 540 644 C 640 622 760 626 900 630 C 1040 632 1180 604 1280 554 C 1350 516 1400 450 1414 376' },

  // the cat: one tube from the tucked front paw, around the tail loop, over the back
  // and ears, down to the cheek
  {
    ...PINK,
    d: 'M510 320 C 560 340 612 380 626 420 C 636 452 618 486 594 490 C 560 492 520 462 480 446 C 420 428 330 424 250 420 C 190 414 130 380 86 340 C 58 312 62 270 92 262 C 130 254 180 290 230 322 C 266 342 302 336 322 302 C 344 262 356 206 384 162 C 412 120 452 98 500 98 C 570 100 640 132 700 178 C 724 196 740 214 756 214 C 784 214 800 160 824 108 C 836 84 850 70 862 72 C 878 76 894 112 908 140 C 916 156 930 152 952 144 C 990 132 1030 136 1050 152 C 1068 166 1072 196 1086 208 C 1098 216 1110 190 1126 186 C 1146 182 1166 186 1172 206 C 1178 226 1170 252 1158 268',
  },
  // second paw, a lopsided U
  { ...PINK, d: 'M728 368 C 744 420 768 480 796 516 C 816 540 846 552 872 540 C 896 526 900 486 890 446 C 882 414 866 384 848 364' },
  // closed eyes
  { ...PINK, d: 'M862 256 L 928 268' },
  { ...PINK, d: 'M998 284 L 1084 298' },
]

// the clear acrylic backing the tubes are mounted on
const backing =
  'M36 300 C 20 228 110 212 196 238 C 262 256 296 168 352 104 C 412 46 520 70 620 104 C 700 132 754 150 806 66 C 838 22 886 30 916 86 C 980 92 1056 100 1102 136 C 1200 146 1300 176 1398 254 C 1452 302 1446 384 1406 446 C 1346 566 1198 646 1000 664 C 800 682 600 652 452 702 C 336 742 264 858 210 842 C 150 804 128 722 168 642 C 188 562 168 502 178 470 C 102 420 44 378 36 300 Z'

type NeonCatProps = { className?: string }

function NeonCat({ className }: NeonCatProps) {
  return (
    <svg className={className} viewBox="0 20 1460 860" fill="none" aria-hidden="true">
      <defs>
        <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="soft" />
          <feGaussianBlur stdDeviation="26" in="SourceGraphic" result="wide" />
          <feMerge>
            <feMergeNode in="wide" />
            <feMergeNode in="wide" />
            <feMergeNode in="soft" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d={backing} stroke="rgba(190, 150, 255, 0.45)" strokeWidth="4" />

      <g strokeLinecap="round" strokeLinejoin="round">
        {tubes.map((t) => (
          <path key={`glow-${t.d}`} d={t.d} stroke={t.glow} strokeWidth="34" filter="url(#neon-glow)" />
        ))}
        {tubes.map((t) => (
          <path key={`core-${t.d}`} d={t.d} stroke={t.core} strokeWidth="18" />
        ))}
      </g>
    </svg>
  )
}

export default NeonCat
