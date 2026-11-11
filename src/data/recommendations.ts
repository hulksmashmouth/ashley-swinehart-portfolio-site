export type Recommendation = {
  name: string
  /** their LinkedIn headline, shortened to the role, without where they work */
  role: string
  /** how they worked with Ash, as LinkedIn describes it */
  relationship: string
  date: string
  /** quoted verbatim from LinkedIn, one entry per paragraph */
  text: string[]
}

export const linkedInRecommendationsHref =
  'https://www.linkedin.com/in/ashleylswinehart'

// LinkedIn recommendations, newest first
export const recommendations: Recommendation[] = [
  {
    name: 'Larry Ray',
    role: 'Department Chair, Computer Science and Information Systems',
    relationship: 'Managed Ash directly',
    date: 'November 2026',
    text: [
      'I highly recommend Ashley Swinehart as a UX/UI developer. She provided the IT department at Stark State College with sharp market insights that directly shaped our curriculum, helping us pinpoint the exact tech stacks and design frameworks students need today. Her ability to synthesize real-world tech trends into intuitive, high-impact strategies makes her an asset to any team!',
    ],
  },
  {
    name: 'Nicolette Cobb',
    role: 'Technical Product Manager (CSPO | CSM)',
    relationship: 'Worked with Ash on different teams',
    date: 'September 2026',
    text: [
      'Working with Ashley has been an absolute pleasure. She brings together the rare combination of creative UX design talent and strong front end development skills, which means she doesn’t just imagine great user experiences — she makes them real.',
      'I’ve seen Ash take complex problems and turn them into simple, elegant solutions that users love. When redesigning a product flow by assisting with a feature from scratch, her work always makes a noticeable impact.',
      'What really sets Ash apart, though, is who she is as a teammate. She’s incredibly friendly, approachable, and genuinely fun to work with. Her positivity lifts the team, and collaborative spirit makes every project smoother and more enjoyable.',
      'If you’re looking for someone who can deliver outstanding design and development work while being a joy to have on the team, I can’t recommend Ashley highly enough.',
    ],
  },
  {
    name: 'Daniel Montelione',
    role: 'Product Owner | CSPO',
    relationship: 'Worked with Ash on the same team',
    date: 'July 2026',
    text: [
      'I worked with Ash as a Product Owner on the NextGen UX team at TransImpact. During this time Ash showcased not only her technical abilities, but also her ability to lead teams, and work hand in hand with product. She was a reliable counterpart who was easy to work with. Her leadership in driving the technical direction of our new Design System was integral to the team’s success in addition to her contributions to product discussions. The Design System she spearheaded is a huge part of our company’s UX foundation today. Without her leadership the Design System would not have been as successful as it has been.',
    ],
  },
  {
    name: 'Aaron Durkee',
    role: 'Sr Director, Product',
    relationship: 'Managed Ash directly',
    date: 'July 2026',
    text: [
      'I had the pleasure of working with Ashley Swinehart at Informativ, where she reported directly to me and led our UX Strategy & Platform Experience efforts.',
      'Ashley is an exceptional teammate and leader who brings together a rare combination of UX design, front-end engineering, product thinking, and QA expertise. She’s exactly the kind of cross-functional talent that thrives in today’s AI-powered product teams—able to move quickly from concept to prototype to delivered customer value without sacrificing quality or user experience.',
      'Beyond her technical skills, Ashley is collaborative, creative, and relentlessly focused on solving the right problems for customers. She elevates the people around her and consistently delivers meaningful results. I would welcome the opportunity to work with Ashley again and highly recommend her to any organization looking to accelerate product innovation.',
    ],
  },
  {
    name: 'Christina Wofford',
    role: 'B2B Marketing Leader',
    relationship: 'Senior to Ash, didn’t manage Ash directly',
    date: 'July 2026',
    text: [
      'I’ve had the pleasure of working with Ash, and I can confidently say she’s an exceptional UX engineering leader.',
      'What sets her apart is her ability to balance creativity with strategy. She has a deep respect for an established brand, understanding that great user experiences strengthen a company’s identity rather than reinvent it unnecessarily. Her design decisions are rooted in customer insights, analytics, usability research, and industry best practices not personal preferences or trends.',
      'She leads with collaboration, earns the trust of cross-functional teams, and consistently delivers experiences that are intuitive, scalable, and aligned with business goals.',
      'Any organization looking for a UX leader who combines data-driven decision-making, strong technical and design expertise, and thoughtful leadership would be fortunate to have her on their team. I highly recommend Ash!',
    ],
  },
  {
    name: 'Andrew Vaughan',
    role: 'VP, Global Head of Engineering',
    relationship: 'Managed Ash directly',
    date: 'October 2025',
    text: [
      'I had the pleasure of managing Ash during her time as an Engineering Manager at TransImpact. She’s a determined and thoughtful leader who puts real effort into driving execution and supporting her team. Ash developed significantly while rallying a complex onshore and offshore delivery team to meet goals in a challenging environment.',
      'Over the months we worked together, I saw her develop rapidly, developing confidence in her leadership and the ability to keep teams aligned and productive. Ash brings persistence, care, and follow-through to the projects she takes on.',
    ],
  },
  {
    name: 'Austin Earl',
    role: 'Full Stack Software Engineer',
    relationship: 'Reported to Ash directly',
    date: 'November 2024',
    text: [
      'Ashley is one of the best managers that I have seen in my time working. She makes sure that her workers are well kept care of and tries her best to make sure that we have our voices heard. She is a kind person and will try her best to better any company that she is at. Her work ethic is off the charts, yet she doesn’t have unreal expectations. She has a broad understand of software development, and that allows her to make sure that goals are achievable and on time! If you are given the chance to hire Ashley, do not miss out on this opportunity!',
    ],
  },
  {
    name: 'Stefan Maritz',
    role: 'Helping you Build and Scale your Tech Product',
    relationship: 'Worked with Ash on different teams',
    date: 'April 2024',
    text: [
      'I’ve had the privilege of working alongside Ashley, whose technical insight and design experience are unparalleled. Her ability to effectively communicate complex concepts and build strong relationships sets her apart as a leader in her field.',
    ],
  },
  {
    name: 'Ciera Blanks',
    role: 'Recruiting Operations',
    relationship: 'Ash was Ciera’s client',
    date: 'December 2023',
    text: [
      'I had the pleasure of collaborating with Ashley during a recent webinar where she shared invaluable insights into the ever-evolving landscape of software engineering and tech, as well as her own career journey. She showcased a deep understanding of the subject matter and also engaged our audience of students with a clear, concise, and approachable style that resonated with attendees at various levels of expertise.',
      'Moreover, Ashley went above and beyond by actively mentoring and providing constructive feedback to our students on their final project demos at 2U’s Demo Day this month. She demonstrated a genuine passion for guiding aspiring software engineers, offering mentorship that was not only technically sound but also inspiring.',
      'I wholeheartedly recommend Ashley for any endeavor where expertise, mentorship, and a commitment to fostering growth and learning are valued. She has proven to be an exceptional asset to our community, and I am confident Ashley will continue to make significant contributions wherever she applies her talents.',
    ],
  },
  {
    name: 'Dylan Johnson',
    role: 'Quality Assurance Analyst',
    relationship: 'Ash was senior to Dylan',
    date: 'January 2023',
    text: [
      'Ashley is a phenomenal front end and UI/UX developer that constantly proves she is skillful at their craft and a value to any team. I met Ashley through another peer at MRI Software and I immediately grew admiration for her as she is skilled in a position I wanted to be in, front end development. Upon learning my interest in front end, Ashley offered me a chance to work with her on one of the multiple teams she was helping. In my experience of working on the same team with Ashley, she has demonstrated vast knowledge on any frontend language, concept, or framework I have seen her utilize. Their experience in delivering the best user experience and designing masterful web pages with tools I have seen her use, such as JavaScript, HTML/CSS, Kendo, and Angular, made her the perfect person to ask any questions related to the task at hand or ask for help on any related problem that proved difficult. Ashley’s expertise was not just shown with their knowledge but their availability as well, since many people from many different teams asked her for assistance. To assure she could help everyone that need it but also make sure that she could make progress on her own task, she scheduled a time slot where you could ask for help or ask any questions. This use of time management allowed her to still have time for their work but also having the ability to assist others. I do not think of Ashley as just a peer but also as a mentor, as she helped me continue to hone my skills in front end development and gave me any advice I may have needed. No matter what path Ashley chooses, she will continue to be valuable to any team, company, or person she works with.',
    ],
  },
  {
    name: 'Sarra M. Mohn',
    role: 'President and Owner',
    relationship: 'Senior to Ash, didn’t manage Ash directly',
    date: 'October 2021',
    text: [
      'Ashley puts light in a dark room. She brings knowledgeable input and break-through questions to any meeting I ever attended with her. Her skills go way beyond her impressive education and work history. She has talent to bring people together, instinctively knows when to lead, understands when to join the team, wisdom to know when to take a step back in the process and try again, and a beautiful heart that knows when others need inspiration. These aren’t things you can teach someone and they made all the difference in my time working with Ashley. I’ve worked with incredibly talented professionals, artists and educators in my career, and she stands out. If I had to assemble a dream team for literally any project, she would be on my list.',
    ],
  },
  {
    name: 'Sindhu B',
    role: 'Software Engineer',
    relationship: 'Worked with Ash on the same team',
    date: 'April 2021',
    text: [
      'I have worked with Ashley at Matco Tools for almost 2 years. She does such an amazing job, she shows great attention to details and is really passionate about her work. In terms of professionalism, ethics and attentiveness she is unbeatable. I really loved working with her. I don’t have any hesitation in saying that she would be doing a really good job at her work.',
    ],
  },
  {
    name: 'Valerie Myers',
    role: 'Business Systems Lead',
    relationship: 'Senior to Ash, didn’t manage Ash directly',
    date: 'February 2021',
    text: [
      'I have known Ashley for almost seven years now. I met Ashley when she started teaching at Stark State and taking over some of my classes. I was immediately impressed with her - such a desire to learn and grow and she is forever curious, a trait not many have. She took my teaching materials, understood them, and made them even better. She has a keen eye for the end-user experience - she took a dashboard I made for students, expanded it, and made it much easier to use. I highly recommend Ashley - you are lucky to have found her!',
    ],
  },
  {
    name: 'Benjamin King',
    role: 'CloudOps Engineer',
    relationship: 'Managed Ash directly',
    date: 'February 2021',
    text: [
      'While on my team at Matco Tools, Ashley consistently demonstrated herself as a hard-working, capable and flexible individual. She was always willing and able to step out of her comfort zone to learn new and different skills in order to help serve the team. Upon joining, Ashley was able to quickly make contributions with her eye for design. Over time, she grew to contribute in more functional areas of the company’s web and mobile apps, making her a very versatile asset to the team. Ashley’s contributions and positive attitude were recognized by individuals throughout the company. It was a pleasure to have worked with her.',
    ],
  },
]
