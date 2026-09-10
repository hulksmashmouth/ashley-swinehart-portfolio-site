export type Service = {
  title: string
  description: string
}

export const consulting = {
  entity: 'Ashley Swinehart, LLC',
  available: true,
  intro:
    'I take on B2B contract work through Ashley Swinehart, LLC — a one-person consultancy for teams that need senior UX engineering and design systems help without adding headcount.',
  services: [
    {
      title: 'Design System Architecture & Build-Out',
      description:
        'Token-driven UI architecture and cross-framework component libraries (Web Components / StencilJS) that run in React and Angular, with Storybook documentation and an adoption plan so the system actually gets used.',
    },
    {
      title: 'Front-End Architecture & Modernization',
      description:
        'Angular and TypeScript front-ends, incremental modernization of legacy interfaces, and bridging modern component UIs to existing backends without a rewrite.',
    },
    {
      title: 'UX Engineering (Design to Code)',
      description:
        'Figma-to-production implementation, high-fidelity prototypes, and accessibility- and usability-driven UI overhauls — design decisions that survive contact with real code.',
    },
    {
      title: 'AI-Assisted Product Development',
      description:
        'Integrating LLM and AI workflows into products and dev pipelines, and reviewing AI features for correctness and audit or compliance risk before they ship.',
    },
    {
      title: 'Fractional UX Engineering Leadership',
      description:
        'Standing up or steadying a distributed front-end or design-system team: sprint planning, releases, and mentoring engineers on Angular, web components, and TypeScript.',
    },
    {
      title: 'Design System Strategy & Audits',
      description:
        'Assessing an existing design system as product infrastructure — finding the consistency, speed, and quality gaps, and laying out a roadmap to close them.',
    },
  ] satisfies Service[],
  engagements: [
    'Project-based (defined scope and deliverables)',
    'Fractional / retainer (ongoing hours each month)',
    'Advisory (reviews, architecture guidance, team coaching)',
  ],
  contact: {
    label: 'linkedin.com/in/ashleylswinehart',
    href: 'https://www.linkedin.com/in/ashleylswinehart',
  },
}
