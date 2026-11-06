import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

type BookingEmbedProps = {
  calLink: string
  className?: string
}

// Cal.com's own color tokens, mapped onto the den palette. The embed runs in an iframe,
// so these are plain values rather than var(--…) references to the site's tokens.
const denTheme = {
  'cal-bg': '#2a1409',
  'cal-bg-muted': '#24110a',
  'cal-bg-subtle': '#341a0c',
  'cal-bg-emphasis': '#4a2410',
  'cal-bg-inverted': '#fff6ea',
  'cal-border': 'rgba(243, 123, 38, 0.28)',
  'cal-border-subtle': 'rgba(243, 123, 38, 0.16)',
  'cal-border-emphasis': 'rgba(243, 123, 38, 0.5)',
  'cal-border-booker': 'rgba(243, 123, 38, 0.28)',
  'cal-text': '#f3e3cc',
  'cal-text-emphasis': '#fff6ea',
  'cal-text-subtle': '#dcc3a2',
  'cal-text-muted': '#b89c7c',
  'cal-text-inverted': '#1c0e07',
  'cal-brand': '#f37b26',
  'cal-brand-emphasis': '#e2431f',
  'cal-brand-text': '#1c0e07',
}

// inline Cal.com scheduler; Cal.com checks and writes to the connected iCloud calendar
function BookingEmbed({ calLink, className }: BookingEmbedProps) {
  useEffect(() => {
    getCalApi().then((cal) => {
      cal('ui', {
        theme: 'dark',
        // the site is dark-only, so light gets the same palette in case Cal falls back to it
        cssVarsPerTheme: {
          light: denTheme,
          dark: denTheme,
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })
  }, [])

  return (
    <Cal
      className={className}
      calLink={calLink}
      config={{ theme: 'dark', layout: 'month_view' }}
      style={{ width: '100%', height: '100%', overflow: 'auto' }}
    />
  )
}

export default BookingEmbed
