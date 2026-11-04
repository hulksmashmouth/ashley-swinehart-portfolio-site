import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

type BookingEmbedProps = {
  calLink: string
  className?: string
}

// inline Cal.com scheduler; Cal.com checks and writes to the connected iCloud calendar
function BookingEmbed({ calLink, className }: BookingEmbedProps) {
  useEffect(() => {
    getCalApi().then((cal) => {
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#8f6680' },
          dark: { 'cal-brand': '#c396ad' },
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
