export type CaseStudyHighlight = {
  title: string
  caption: string
}

export type CaseStudy = {
  slug: string
  name: string
  subtitle: string
  overview: string
  highlights: CaseStudyHighlight[]
}

export const informativ = {
  company: 'Informativ',
  role: 'Product & UX Design',
  summary:
    'Four projects, four different problems. A marketing site that needed one voice, a support team that needed fewer calls, a desk that needed to move faster, and a core product that needed room to grow into something bigger.',
  caseStudies: [
    {
      slug: 'marketing-website-redesign',
      name: 'Marketing Website Redesign',
      subtitle: 'informativ.com, homepage through footer',
      overview:
        'The old site tried to explain five different products in five different voices, and it showed. My job on this redesign was to make it obvious, in one scroll, that Informativ is one platform, not five things bolted together. I rebuilt the navigation around what a dealer is actually trying to do (credit, compliance, fraud, deal tools) instead of our internal team names, and I made sure the trust signals — the dealership count, the fraud dollars saved, the uptime — show up right when someone’s deciding whether to book a demo.',
      highlights: [
        {
          title: 'The homepage hero',
          caption:
            'The line I wanted every visitor to read first: one platform for credit, fraud prevention, compliance, and smarter deals.',
        },
        {
          title: 'The product grid',
          caption:
            'Six products explained in plain language instead of jargon, grouped by what a dealer is trying to get done.',
        },
        {
          title: 'By the numbers',
          caption:
            'Proof before pitch: dealership count, fraud dollars prevented, and uptime, right where a skeptical visitor looks for it.',
        },
        {
          title: 'Company updates',
          caption:
            'Insight cards that keep the site feeling current instead of like a brochure nobody has touched in a year.',
        },
        {
          title: 'Product landing pages',
          caption:
            'Each product got its own landing page and its own voice, while staying visually part of the same family.',
        },
        {
          title: 'The value section',
          caption:
            '“Turn every shopper into a qualified opportunity,” the plain-English case for why a product matters.',
        },
        {
          title: 'The footer',
          caption:
            'Every link a visitor could want, and one last, low-pressure chance to book a demo.',
        },
      ],
    },
    {
      slug: 'ivy-mobile-ai-assistant',
      name: 'Ivy, Mobile AI Assistant',
      subtitle: 'In-app help for license scans, account issues, and prequalification',
      overview:
        'Ivy started because our support team kept getting the same handful of questions: how do I scan a license, how do I reset my password, how do I request a prequalification without calling anyone. I built Ivy to answer those right inside the app, before a phone call is even on the table. The name is a small piece of brand craft too — it’s the first and last letters of Informativ, short enough to feel like you’re texting a person instead of talking to a bot.',
      highlights: [
        {
          title: 'Security settings',
          caption:
            'Ivy needed a home inside a screen people already trust with sensitive information.',
        },
        {
          title: 'Meet Ivy',
          caption:
            'The assistant opens with the three questions people actually ask most, instead of a blank chat box.',
        },
        {
          title: 'Chat history',
          caption:
            'Past conversations, saved and searchable, so nobody has to explain the same problem twice.',
        },
      ],
    },
    {
      slug: 'smartpencil-desking',
      name: 'SmartPencil Desking',
      subtitle: 'Pricing, incentives, fees, and payments in one screen',
      overview:
        'SmartPencil is the screen a desk manager lives in while a buyer is sitting across the table from them. Pricing, trade value, incentives, fees, loan versus lease — all of it has to live in one place, because nobody wants a customer waiting while someone digs through five tabs. I focused the redesign on the three numbers people actually look at first: the monthly payment, what’s due at signing, and the profit on the deal. Everything else supports those.',
      highlights: [
        {
          title: 'Loan vs. lease',
          caption:
            'Both options laid out side by side, with the stronger payment flagged automatically.',
        },
        {
          title: 'The fee breakdown',
          caption:
            'Tax, title, license, and dealer fees, spelled out in full instead of buried in a tooltip.',
        },
        {
          title: 'Custom incentives',
          caption:
            'Adding a one-off incentive without ever losing sight of the running total.',
        },
      ],
    },
    {
      slug: 'credit-compliance-platform',
      name: 'Credit Compliance Platform',
      subtitle: 'The dealer-facing app for pipeline, STIPs, and compliance',
      overview:
        'This one is the company’s bread and butter, so I couldn’t just make it prettier — I had to make it work harder. The old interface was dense and a little intimidating if you weren’t already an expert. I cleaned it up without stripping out the detail power users depend on, and I designed it with an eye toward something bigger we’re building toward: one app, with different views depending on who’s logged in, so a desk manager, a salesperson, an Informativ admin, and a car buyer can all use the same platform and only ever see what’s relevant to them.',
      highlights: [
        {
          title: 'The dealer dashboard',
          caption:
            'Active deals, what needs attention, and how far along the pipeline is, all at a glance.',
        },
        {
          title: 'STIPs status',
          caption:
            'Every open request across the dealership, sorted by what is still missing.',
        },
        {
          title: 'Requesting STIPs by text',
          caption:
            'A secure link plus a PIN the customer can read back over the phone.',
        },
        {
          title: 'The same request by email',
          caption: 'Same links, same tracking, just a different inbox.',
        },
        {
          title: 'Digital Showroom',
          caption:
            'Starting a deal from the floor with the right paperwork already queued up.',
        },
        {
          title: 'Compliance and disclosures',
          caption: 'The checklist required before credit ever gets pulled.',
        },
        {
          title: 'Ask Ivy, compliance edition',
          caption:
            'Sitting right on top of the workflow instead of living in a separate tab somewhere.',
        },
        {
          title: 'Ask Ivy in action',
          caption:
            'A credit report comes back with an OFAC hit, and Ivy walks through what happens next.',
        },
      ],
    },
  ] satisfies CaseStudy[],
}
