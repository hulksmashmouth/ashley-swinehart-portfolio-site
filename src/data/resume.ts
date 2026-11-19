export type Job = {
  role: string
  org: string
  /** shown in parentheses after the org, e.g. "Avercast at TransImpact" replaces org */
  start: string
  end: string
  location?: string
  /** optional one-line overview shown above the bullets */
  description?: string
  bullets: string[]
  /** note rendered between this job and the one above, e.g. a promotion */
  transitionNote?: string
}

export const resume = {
  name: 'Ash Swinehart',
  title: 'Engineering Leader',
  pdf: 'ash-swinehart-resume.pdf',
  links: [
    {
      label: 'ash.swinehart.dev@gmail.com',
      href: 'mailto:ash.swinehart.dev@gmail.com',
    },
    {
      label: 'linkedin.com/in/ashleylswinehart',
      href: 'https://www.linkedin.com/in/ashleylswinehart',
    },
  ],
  summary:
    'Engineering Manager with 13+ years in software engineering and 3+ years leading full-stack teams of up to 12 engineers. A hands-on player-coach who owns delivery, sets technical direction across the stack, and raises code quality through standards, reviews, and mentorship. Unified a team split across two contracting firms, took on a second team mid-transition, and shipped code used by hundreds of thousands of users. Certified ScrumMaster with an M.S. in UX Design.',
  experience: [
    {
      role: 'Founder & Principal Consultant',
      org: 'Ashley Swinehart, LLC',
      start: 'Sep 2026',
      end: 'Present',
      location: 'Akron, OH',
      bullets: [
        'Lead client engagements end to end, from discovery and scoping through design, build, and launch.',
        'Design and build custom websites and web applications, owning architecture, UX, and deployment.',
        'Provide design system assessments and technical/UX reviews, using AI-assisted design-to-code workflows (Figma MCP, Claude Code) to shorten delivery.',
      ],
    },
    {
      role: 'UX Strategy & Platform Experience Manager',
      org: 'Informativ',
      start: 'Jan 2026',
      end: 'Jul 2026',
      location: 'Frisco, TX',
      bullets: [
        'Owned UX strategy for a company formed from three merged organizations, working to unify 5 auto fintech products into one platform.',
        'Established the design system as core product infrastructure and built an AI-assisted Figma-to-code workflow with Claude Code and Figma MCP.',
        'Caught a data-integrity flaw in an AI chatbot design and redesigned it per field, protecting the compliance audit trail.',
      ],
    },
    {
      role: 'Engineering Manager, NextGen UX - Platform',
      org: 'TransImpact',
      start: 'Mar 2025',
      end: 'Jan 2026',
      location: 'Independence, OH',
      bullets: [
        'Led a 12-developer full-stack team (Angular, NestJS, StencilJS) modernizing the product on top of legacy .NET services with no backend rewrite.',
        'Unified a team staffed from two rival contracting firms into one respectful, productive squad.',
        'Expanded scope to lead the GenAI team after the VP of Engineering left, keeping both teams delivering.',
        'Architected the API service layer as a standalone package so a planned GraphQL migration would not require front-end rework.',
      ],
      transitionNote: 'Promoted from Software Development Manager',
    },
    {
      role: 'Software Development Manager',
      org: 'Avercast at TransImpact',
      start: 'Apr 2024',
      end: 'Mar 2025',
      bullets: [
        'Player-coach for a 7-developer full-stack squad in Demand Planning (Spotify model), delivering features end to end.',
        'Delivered an interactive Power BI dashboard adopted by 4 teams, and led an accessibility-focused UI overhaul.',
        'Improved velocity through detailed estimates and subtask breakdowns, and raised code quality through reviews and coaching.',
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
  ] satisfies Job[] as Job[],
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
    'Certified ScrumMaster (CSM) — valid through Apr 2027',
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
