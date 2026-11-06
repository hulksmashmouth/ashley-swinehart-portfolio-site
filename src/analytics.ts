// Google Analytics 4 (gtag.js). Everything here is a no-op until a measurement ID is set,
// so the site behaves the same with analytics off.
//
// GA4's enhanced measurement (on by default in the GA property) already records scrolls,
// outbound link clicks, and file downloads like the résumé PDF. This module adds page
// views for client-side route changes and a few custom events for the site's key actions.

// GA4 measurement ID, e.g. 'G-XXXXXXXXXX' (Admin → Data streams → your web stream)
export const GA_MEASUREMENT_ID = 'G-2JQG1C0ZZR'

type Params = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let started = false

export function initAnalytics() {
  // skip `npm run dev` so local testing doesn't show up as site traffic
  if (started || !GA_MEASUREMENT_ID || import.meta.env.DEV || typeof window === 'undefined') return
  started = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  // page views are sent by trackPageView on each route change instead, so the first
  // load isn't counted twice
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  // any element with data-track="event_name" (and optional data-track-label) reports
  // a click, so tracking a new button is just an attribute in the markup
  document.addEventListener('click', (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]')
    if (!el) return
    trackEvent(el.dataset.track!, { label: el.dataset.trackLabel })
  })
}

export function trackPageView(path: string) {
  if (!started) return
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name: string, params: Params = {}) {
  if (!started) return
  window.gtag?.('event', name, params)
}
