export type Job = {
  role: string
  org: string
  /** shown in parentheses after the org, e.g. "Avercast at TransImpact" replaces org */
  start: string
  end: string
  location?: string
  bullets: string[]
  /** note rendered between this job and the one above, e.g. a promotion */
  transitionNote?: string
}

export const resume = {
  name: 'Ash Swinehart',
  title: 'UX Engineering Leader',
  pdf: 'ash-swinehart-resume.pdf',
  links: [
    {
      label: 'linkedin.com/in/ashleylswinehart',
      href: 'https://www.linkedin.com/in/ashleylswinehart',
    },
  ],
  summary:
    'I am a UX engineering leader at the intersection of design systems, front-end architecture, and AI-assisted product development. I scale enterprise experience ecosystems across automotive, real estate, and supply chain SaaS — building design systems, token-driven UI architecture, and dev pipelines integrated with AI workflows, backed by deep Angular/TypeScript expertise and leadership of distributed engineering teams.',
  experience: [
    {
      role: 'UX Strategy & Platform Experience Manager',
      org: 'Informativ',
      start: 'Jan 2026',
      end: 'Jul 2026',
      location: 'Frisco, TX',
      bullets: [
        "Owned UX vision and platform experience across Informativ's product portfolio, unifying multiple auto fintech products into one cohesive platform.",
        'Established the design system as core product infrastructure, driving consistency, speed, and quality across teams.',
        'Found a logic issue in the AI assistant before release to production that would have caused audit issues down the road.',
      ],
    },
    {
      role: 'NextGen UX Engineering Manager, Platform',
      org: 'TransImpact',
      start: 'Mar 2025',
      end: 'Jan 2026',
      location: 'Independence, OH',
      bullets: [
        'Ran stand-ups, sprint planning, and releases for a global team.',
        'Led a distributed team of 12 developers building a cross-product design system with StencilJS and custom web components compatible with React and Angular.',
        'Maintained Angular front-end and NestJS middleware repos, bridging a modern component UI to a legacy .NET backend.',
      ],
      transitionNote: 'Promoted from Software Development Manager',
    },
    {
      role: 'Software Development Manager',
      org: 'Avercast at TransImpact',
      start: 'Apr 2024',
      end: 'Mar 2025',
      bullets: [
        'Drove a major UI overhaul grounded in accessibility and usability.',
        'Led a team of 7 developers on the Demand Planning squad (Spotify model), improving forecasting UI accuracy and usability.',
        'Mentored engineers on Angular, web components, and TypeScript best practices.',
      ],
    },
    {
      role: 'Senior Software Engineer IV, UI/UX — Design Systems & Front End',
      org: 'MRI Software',
      start: 'Jun 2021',
      end: 'Apr 2024',
      location: 'Solon, OH',
      bullets: [
        'Built a Stencil-based cross-framework component library used across React and Angular applications.',
        'Directed task delegation, QA, and adoption for the company design system; led onboarding to cut ramp-up time.',
        'Designed UIs in Figma for housing applicant screening and a custom API development IDE.',
      ],
    },
    {
      role: 'Senior Front End Developer',
      org: 'Matco Tools',
      start: 'Jul 2017',
      end: 'Jun 2021',
      location: 'Stow, OH',
      bullets: [
        'Delivered UI for desktop and mobile diagnostic scan tools (Angular, TypeScript) and mobile distributor business software.',
        'Created high-fidelity mockups and prototypes (Adobe XD, Balsamiq) and led modernization of legacy interfaces.',
      ],
    },
  ] satisfies Job[],
  personalProject: {
    name: 'Dolly Pocket',
    description:
      'An AI personal assistant built with Ollama + React Native, housed in a cyberdeck built inside an old Polly Pocket.',
  },
  education: [
    { degree: 'M.S., User Experience Design', school: 'Kent State University' },
    {
      degree: 'B.F.A., Interdisciplinary Arts',
      school: 'Youngstown State University',
    },
  ],
  certifications: [
    'Scrum Master Certified (SMC) — valid through Apr 2027',
    'Microsoft Certified: Azure AI Fundamentals',
    'Microsoft Certified: Azure Fundamentals',
  ],
  skills: [
    'Team Management & Mentorship',
    'Design Systems Architecture',
    'Angular',
    'TypeScript',
    'StencilJS',
    'React',
    'CSS/SCSS',
    'Figma',
    'Storybook',
    'CI/CD',
    'AI-Assisted UX Workflows',
    'Agile/Scrum',
  ],
}
