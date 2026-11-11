export type Plan = {
  name: string
  kicker?: string
  price: string
  /** shown after the price, e.g. "/ month" */
  per?: string
  meta?: string
  bestFor?: string
  features: string[]
  featured?: boolean
}

export type AddOn = {
  name: string
  price: string
}

export type Step = {
  title: string
  description: string
}

// mirrors the printable small-business pricing sheet — keep the two in step when prices change
export const pricing = {
  intro:
    'Custom websites for Northeast Ohio small businesses, starting at $500. Fixed prices quoted up front, with no surprise invoices.',
  included: [
    'A custom design built around your brand, not a stock template',
    'Mobile-friendly layouts tested on phones, tablets, and desktops',
    'Basic search setup so customers find you on Google, plus a Google Maps listing and link',
    'A secure site (SSL) with a contact form that sends straight to your inbox',
    'A short training session so you can update hours, menus, and specials yourself',
    '30 days of free fixes after launch',
  ],
  packagesNote: 'Main Street is the right fit for most local businesses.',
  packages: [
    {
      name: 'One-Page Site',
      kicker: 'Quick start',
      price: '$500',
      meta: '1 page · about 1 week',
      bestFor: 'Food trucks, side businesses, getting online fast',
      features: [
        'One scrolling page with your story, hours, and location',
        'Map, contact button, and social links',
        'Built from your existing logo, photos, and text',
        '1 round of revisions',
      ],
    },
    {
      name: 'Starter',
      price: '$1,500',
      meta: 'Up to 3 pages · about 2 weeks',
      bestFor: 'New businesses and first full websites',
      features: [
        'Home, about or services, and contact pages',
        'Hours, location, and social links',
        '2 rounds of revisions',
      ],
    },
    {
      name: 'Main Street',
      kicker: 'Most popular',
      price: '$2,800',
      meta: 'Up to 6 pages · 3 to 4 weeks',
      bestFor: 'Restaurants, bars, salons, shops, contractors',
      features: [
        'Everything in Starter',
        'Menu or services pages',
        'Photo gallery and reviews',
        'Events or specials section',
        'Visitor tracking (Google Analytics)',
        '2 rounds of revisions',
      ],
      featured: true,
    },
    {
      name: 'Growth',
      price: '$4,500',
      meta: 'Up to 10 pages · 5 to 6 weeks',
      bestFor: 'Businesses taking bookings or orders online',
      features: [
        'Everything in Main Street',
        'Online booking or ordering setup',
        'Blog or events calendar',
        'Email signup form',
        'Help writing page text',
        '3 rounds of revisions',
      ],
    },
  ] satisfies Plan[],
  discounts: [
    {
      label: 'Redesigns',
      text: 'of an existing site are priced at the matching package, plus the “Moving from an existing site” add-on.',
    },
    { label: 'Nonprofits', text: 'receive 10% off any website package.' },
  ],
  addOns: [
    { name: 'Extra page', price: '$200' },
    {
      name: 'Moving from an existing site: content, redirects so you keep your Google rankings, and domain transfer',
      price: '$150–$300',
    },
    { name: 'Online store, up to 25 products', price: '$1,200' },
    { name: 'Online booking or scheduling setup', price: '$300' },
    { name: 'Page text written for you, per page', price: '$150' },
    { name: 'Logo and basic brand colors', price: '$500' },
    { name: 'Google Business Profile setup or cleanup', price: '$150' },
    { name: 'Rush delivery, half the usual timeline', price: '+25%' },
  ] satisfies AddOn[],
  hourly: {
    name: 'Hourly work and small changes',
    description: 'Updates, fixes, and anything outside a package',
    price: '$100',
    per: '/hr',
  },
  stepsNote: 'Most sites launch within 1 to 6 weeks.',
  steps: [
    {
      title: 'Free 30-minute call.',
      description: 'We talk through your business, your goals, and which package fits.',
    },
    {
      title: 'Written quote and deposit.',
      description:
        'You get a fixed-price quote, valid for 30 days. A 50% deposit reserves your spot.',
    },
    {
      title: 'Design and build.',
      description:
        'You review the design and request changes within your package’s revision rounds.',
    },
    {
      title: 'Launch.',
      description:
        'The remaining 50% is due before the site goes live. Growth projects can split payments 40% / 30% / 30%.',
    },
    {
      title: 'After launch.',
      description: 'Fixes are free for 30 days, and you can start a care plan anytime.',
    },
  ] satisfies Step[],
  provide:
    'Your logo, photos, menu or service list, business hours, and access to your current domain or website if you have one. Content delays can push back the launch date.',
  carePlansNote:
    'Required for sites I host, starting with Essentials. Hosting it yourself? I’ll hand the site over at launch, and a plan is optional. All plans are month to month, with no long-term contract.',
  carePlans: [
    {
      name: 'Essentials',
      price: '$50',
      per: '/ month',
      features: [
        'Hosting and security certificate (SSL)',
        'Daily backups',
        'Software and security updates',
        'Uptime monitoring',
      ],
    },
    {
      name: 'Standard',
      price: '$100',
      per: '/ month',
      features: [
        'Everything in Essentials',
        'Up to 1 hour of changes a month (menus, hours, photos, specials)',
        'Monthly site check',
      ],
      featured: true,
    },
    {
      name: 'Plus',
      price: '$150',
      per: '/ month',
      features: [
        'Everything in Standard',
        'Up to 3 hours of changes a month',
        'Same-day help with urgent issues',
        'Quarterly search and speed check',
      ],
    },
  ] satisfies Plan[],
  carePlanTerms: [
    'Third-party services like your domain, store platform, booking software, and business email are set up in your name and billed to you directly.',
    'You own your domain name (usually about $20 a year), your content, and your site. Unused hours don’t roll over.',
  ],
  corporate: {
    title: 'Corporate and product teams',
    text: 'Pricing for corporate clients is project-based. UX engineering, design systems, and front-end work are quoted per project after a call about scope, timeline, and deliverables.',
  },
  email: 'ash.swinehart.dev@gmail.com',
}
