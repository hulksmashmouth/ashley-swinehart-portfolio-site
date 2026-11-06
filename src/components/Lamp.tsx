type LampProps = {
  size?: number
  className?: string
}

// the orange cube lamp from the den: a glowing white circle cut into an orange shade
export function CubeLamp({ size = 16, className }: LampProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.25}
      viewBox="0 0 16 20"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0.5" y="0.5" width="15" height="19" rx="1.5" fill="var(--orange)" />
      <circle cx="8" cy="8.5" r="4.6" fill="#fff4dc" />
    </svg>
  )
}

// hairline — lamp — hairline
export function LampDivider({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span />
      <CubeLamp size={14} />
      <span />
    </div>
  )
}
