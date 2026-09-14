export type ProjectCard = {
  slug: string
  name: string
  kicker: string
  blurb: string
  meta: string
  /** Path under /public, plus its intrinsic size so the card can reserve space before it loads. */
  image?: string
  imageWidth?: number
  imageHeight?: number
  tags?: string[]
}

export const projectIndex: ProjectCard[] = [
  {
    slug: 'informativ',
    name: 'Informativ',
    kicker: 'Product & UX Design',
    blurb:
      'Unifying multiple auto-fintech products into one cohesive platform — the marketing site, a mobile AI assistant, the desking tool, and the core credit compliance app.',
    meta: '4 case studies · 🔒 Password protected',
    image: 'informativ/marketing-1.webp',
    imageWidth: 1276,
    imageHeight: 743,
    tags: ['UX Design', 'Design Systems', 'Fintech'],
  },
  {
    slug: 'dolly-pocket',
    name: 'Dolly Pocket',
    kicker: 'Personal build',
    blurb:
      'A fully offline AI assistant with Dolly Parton’s voice and a themed UI, built into a cyberdeck inside a vintage Polly Pocket.',
    meta: 'In progress — Oct 2026',
    image: 'dolly-pocket/parts-pile.webp',
    imageWidth: 1024,
    imageHeight: 768,
    tags: ['Raspberry Pi 5', 'Ollama', 'React Native'],
  },
  {
    slug: 'design-system-starter',
    name: 'Design System Starter',
    kicker: 'Starter kit · Design systems',
    blurb:
      'A pnpm monorepo starter kit for a themeable, multi-brand design system — tokens, icons, illustrations, and web components wired together so swapping themes is a data change, not a code change.',
    meta: 'View on GitHub',
    tags: ['Stencil', 'Style Dictionary', 'TypeScript'],
  },
]
