type SparkleProps = {
  size?: number
  className?: string
}

// four-point star from the brand banners
export function Sparkle({ size = 16, className }: SparkleProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-1 -1 2 2"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M0 -1C0.1 -0.1 0.1 -0.1 1 0C0.1 0.1 0.1 0.1 0 1C-0.1 0.1 -0.1 0.1 -1 0C-0.1 -0.1 -0.1 -0.1 0 -1Z"
      />
    </svg>
  )
}

// hairline — star — hairline, as under the wordmark
export function SparkleDivider({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span />
      <Sparkle size={18} />
      <span />
    </div>
  )
}
