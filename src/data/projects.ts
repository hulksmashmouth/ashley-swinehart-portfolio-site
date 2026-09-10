export type ProjectCard = {
  slug: string
  name: string
  kicker: string
  blurb: string
  meta: string
}

export const projectIndex: ProjectCard[] = [
  {
    slug: 'informativ',
    name: 'Informativ',
    kicker: 'Product & UX Design',
    blurb:
      'Unifying multiple auto-fintech products into one cohesive platform — the marketing site, a mobile AI assistant, the desking tool, and the core credit compliance app.',
    meta: '4 case studies',
  },
  {
    slug: 'dolly-pocket',
    name: 'Dolly Pocket',
    kicker: 'Personal build',
    blurb:
      'A fully offline AI assistant with Dolly Parton’s voice and a themed UI, built into a cyberdeck inside a vintage Polly Pocket.',
    meta: 'In progress — Nov 2026',
  },
  {
    slug: 'design-system-starter',
    name: 'Design System Starter',
    kicker: 'Starter kit · Design systems',
    blurb:
      'A pnpm monorepo starter kit for a themeable, multi-brand design system — tokens, icons, illustrations, and web components wired together so swapping themes is a data change, not a code change.',
    meta: 'View on GitHub',
  },
]
