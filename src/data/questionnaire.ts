// The new-client questionnaire, mirrored from "New Client Questionnaire.docx".
// Each question's `label` doubles as its row label in the email, so keep labels short
// and put any longer guidance in `hint`.

export type Question = {
  id: string
  label: string
  hint?: string
  required?: boolean
} & (
  | { type: 'text'; inputType?: 'text' | 'email' | 'tel' | 'url'; autoComplete?: string }
  | { type: 'textarea' }
  | { type: 'checkbox'; options: string[]; other?: boolean; max?: number }
  | { type: 'radio'; options: string[] }
)

export type Section = {
  id: string
  title: string
  intro?: string
  questions: Question[]
  /** sub-headings inside a section, keyed by the id of the question they sit above */
  groups?: Record<string, string>
}

export const SERVICES = {
  website: 'New website',
  redesign: 'Redesign of an existing website',
  photography: 'Photography for my website',
  maintenance: 'Ongoing website updates and maintenance',
  branding: 'Logo or branding help',
  notSure: "Not sure yet, I'd like a recommendation",
} as const

export const questionnaire = {
  email: 'ash.swinehart.dev@gmail.com',
  intro:
    "Thanks for reaching out! This questionnaire helps me understand your business, your goals, and what you need from a website and/or photography. Answer what you can; if you're unsure about something, just write “not sure” and we'll figure it out together on our call. It takes about 15 to 20 minutes.",
  nextSteps: [
    "I'll review your answers and we'll schedule a free 30-minute call to talk through your goals.",
    "Within a few days of our call, you'll receive a proposal with scope, timeline, and pricing.",
  ],
  sections: [
    {
      id: 'about',
      title: 'About you and your business',
      questions: [
        { id: 'name', label: 'Your name and title', type: 'text', required: true, autoComplete: 'name' },
        { id: 'business', label: 'Business name', type: 'text', required: true, autoComplete: 'organization' },
        { id: 'email', label: 'Email', type: 'text', inputType: 'email', required: true, autoComplete: 'email' },
        { id: 'phone', label: 'Phone', type: 'text', inputType: 'tel', autoComplete: 'tel' },
        { id: 'contactPref', label: 'Best way and time to reach you', type: 'text' },
        { id: 'area', label: 'Business address or service area', type: 'text' },
        { id: 'website', label: 'Website (if you have one)', type: 'text', inputType: 'url', autoComplete: 'url' },
        { id: 'social', label: 'Social media links', type: 'textarea' },
        { id: 'referral', label: 'How did you hear about me?', type: 'text' },
        { id: 'whatYouDo', label: 'What does your business do?', hint: 'A few sentences is plenty.', type: 'textarea' },
        { id: 'size', label: 'How long in business, and team size', hint: 'How long have you been in business, and how many people work with you?', type: 'text' },
        { id: 'different', label: 'What makes you different', hint: 'What makes you different from your competitors? Why do customers choose you?', type: 'textarea' },
        { id: 'competitors', label: 'Main competitors', hint: '2 or 3 names or websites.', type: 'textarea' },
      ],
    },
    {
      id: 'goals',
      title: 'Goals and audience',
      questions: [
        { id: 'prompting', label: "What's prompting this project now", hint: 'New business, outdated site, rebrand, not getting enough leads, etc.', type: 'textarea' },
        {
          id: 'visitorActions',
          label: 'Top 3 things visitors should do',
          hint: 'Pick up to 3.',
          type: 'checkbox',
          max: 3,
          other: true,
          options: [
            'Call or email you',
            'Request a quote',
            'Book an appointment',
            'Buy online',
            'Visit your location',
            'Learn about your services',
            'Sign up for a newsletter',
          ],
        },
        { id: 'idealCustomers', label: 'Ideal customers', hint: 'Age, location, type of business, what they care about.', type: 'textarea' },
        { id: 'faq', label: 'Questions customers ask most often', type: 'textarea' },
        { id: 'success', label: 'What success looks like in 6 to 12 months', type: 'textarea' },
      ],
    },
    {
      id: 'services',
      title: "Services you're interested in",
      questions: [
        {
          id: 'services',
          label: 'Services',
          hint: 'Check everything that applies.',
          type: 'checkbox',
          options: Object.values(SERVICES),
        },
      ],
    },
    {
      id: 'website',
      title: 'Website details',
      intro: 'Skip anything that doesn’t apply.',
      groups: { domain: 'Your current setup', pages: 'Pages and features', copy: 'Content', updates: 'After launch' },
      questions: [
        { id: 'domain', label: 'Domain name and registrar', hint: 'Do you own a domain name (e.g. yourbusiness.com)? If so, where is it registered (GoDaddy, Squarespace, Google, etc.)?', type: 'text' },
        { id: 'hosting', label: 'Current hosting', hint: 'Do you have website hosting now? Who with?', type: 'text' },
        { id: 'currentSite', label: "Current site: what works, what doesn't", type: 'textarea' },
        { id: 'logins', label: 'Access to domain, hosting, and site logins', type: 'radio', options: ['Yes', 'Some', 'No', 'Not sure'] },
        {
          id: 'pages',
          label: 'Pages needed',
          type: 'checkbox',
          other: true,
          options: ['Home', 'About', 'Services', 'Portfolio or gallery', 'Testimonials or reviews', 'FAQ', 'Contact', 'Blog or news', 'Team'],
        },
        {
          id: 'features',
          label: 'Helpful features',
          type: 'checkbox',
          other: true,
          options: [
            'Contact or quote request form',
            'Online booking or scheduling',
            'Online store or payments',
            'Photo gallery',
            'Google Map',
            'Social media links or feeds',
            'Newsletter signup',
            'Google reviews',
          ],
        },
        { id: 'tools', label: 'Tools to connect', hint: 'Scheduling, email marketing, invoicing, POS, etc.', type: 'textarea' },
        { id: 'copy', label: 'Who will write the site text', type: 'radio', options: ['I will', "I'd like help writing it", 'A mix'] },
        { id: 'existingPhotos', label: 'Existing photos', type: 'radio', options: ['Yes, professional', 'Yes, phone photos', 'No, I need new photos'] },
        { id: 'inspiration', label: 'Websites you like', hint: 'List 2 or 3 sites (any industry) and what you like about them.', type: 'textarea' },
        {
          id: 'updates',
          label: 'Handling updates after launch',
          type: 'radio',
          options: ['I want to make simple updates myself', "I'd like you to handle updates (monthly plan)", 'Not sure yet'],
        },
      ],
    },
    {
      id: 'brand',
      title: 'Brand and style',
      questions: [
        { id: 'logo', label: 'Do you have a logo?', type: 'radio', options: ['Yes', 'No', 'Yes, but it needs updating'] },
        { id: 'brandColors', label: 'Brand colors or fonts', type: 'textarea' },
        { id: 'feelWords', label: '3 to 5 words for how people should feel', hint: 'e.g. trustworthy, friendly, high-end, playful, local, modern.', type: 'text' },
        { id: 'avoid', label: 'Anything you definitely do NOT want', hint: "Colors, styles, a look your competitor has.", type: 'textarea' },
      ],
    },
    {
      id: 'photography',
      title: 'Photography details',
      questions: [
        {
          id: 'subjects',
          label: 'What should be photographed',
          type: 'checkbox',
          other: true,
          options: [
            'Headshots or team photos',
            'Products',
            'Your work (projects, before and after)',
            'Your space (storefront, office, interior)',
            'Behind the scenes or people at work',
            'Food or menu items',
          ],
        },
        { id: 'quantity', label: 'How many people, products, or locations', type: 'text' },
        { id: 'location', label: 'Shoot location(s)', hint: 'Where will the shoot take place? Is there more than one location?', type: 'textarea' },
        { id: 'timing', label: 'Best days or times', hint: 'Business hours, before opening, specific lighting, etc.', type: 'text' },
        {
          id: 'photoUse',
          label: 'Where else the photos will be used',
          type: 'checkbox',
          other: true,
          options: ['Social media', 'Google Business Profile', 'Print (flyers, signs)', 'Ads'],
        },
        { id: 'photoStyle', label: 'Photo style you like', hint: 'Feel free to share examples or links.', type: 'textarea' },
        { id: 'releases', label: 'Customers or staff in photos', hint: 'Will customers or staff appear? If so, can they sign a simple photo release?', type: 'textarea' },
      ],
    },
    {
      id: 'budget',
      title: 'Budget, timeline, and decisions',
      questions: [
        {
          id: 'budget',
          label: 'Budget range',
          type: 'radio',
          options: ['Under $1,000', '$1,000 to $2,500', '$2,500 to $5,000', '$5,000+', "Not sure, I'd like options"],
        },
        { id: 'deadline', label: 'Deadline and what’s driving it', hint: 'Is there a date you need this done by? An event or season driving it?', type: 'textarea' },
        { id: 'decisionMakers', label: 'Who approves the work', hint: 'Who will make final decisions? Will anyone else need to review it?', type: 'textarea' },
        { id: 'involvement', label: 'How involved you’d like to be', type: 'radio', options: ['Very hands-on', 'Check in at key milestones', 'Mostly hands-off'] },
      ],
    },
    {
      id: 'else',
      title: 'Anything else?',
      questions: [
        { id: 'anythingElse', label: 'Anything else I should know', hint: 'About your business or this project.', type: 'textarea' },
      ],
    },
  ] satisfies Section[] as Section[],
}
