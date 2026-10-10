// All portfolio content lives here — edit this file to update the site.

export const CAREER_START = new Date(2020, 1, 1); // Feb 2020, first software role

export const yearsOfExperience = () => {
  const ms = Date.now() - CAREER_START.getTime();
  return Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000));
};

export const profile = {
  name: 'Prashant Awasthi',
  firstName: 'Prashant',
  role: 'Lead Software Development Engineer',
  shortRole: 'Lead SDE',
  company: 'FreechargeBiz',
  location: 'Bangalore · Gurugram · Kanpur',
  email: 'itsprashant95@gmail.com',
  phone: '+91-7830929186',
  resume: 'https://drive.google.com/file/d/1DHqh4MRyTNuV_1VYPJZtHDVn6XhKg51G/view',
  linkedin: 'https://www.linkedin.com/in/itsprashant95/',
  github: 'https://github.com/ittsprashant',
  roles: [
    'Lead Software Development Engineer',
    'React & Node specialist',
    'Fintech journey architect',
    'Performance nerd',
    'Mentor to graduate engineers',
  ],
  summary:
    'I lead frontend at FreechargeBiz, where I own the technical architecture of the web platform. I build fast, secure, scalable fintech journeys, from AI-powered document extraction for Axis Bank auto loans to seamless cross-domain SSO through a company demerger.',
};

export const stats = [
  { value: () => `${yearsOfExperience()}+`, label: 'Years building for the web' },
  { value: () => '2x', label: 'User retention on Axis Bank FD journeys' },
  { value: () => '40%', label: 'Smaller bundles via code splitting' },
  { value: () => '30%', label: 'Faster page loads' },
];

// A point is either a plain string or { k: 'Lead-in', v: 'detail' }.
export const experience = [
  {
    company: 'FreechargeBiz',
    location: 'Gurugram',
    roles: [
      {
        title: 'Lead Software Development Engineer',
        period: 'May 2026 — Present',
        points: [
          { k: 'AI document processing', v: 'Built an AI-powered document ingestion pipeline for Axis Bank’s Auto Loan journey. Uploaded documents go to an AI model for structured extraction, and the parsed fields are surfaced for review and auto-filled into downstream forms, cutting manual entry time and errors.' },
          { k: 'Demerger auth continuity', v: 'Engineered a cross-domain SSO handoff during the Freecharge–FreechargeBiz demerger. Users are routed to the right Freecharge module, such as mobile recharge, with their session intact and no re-authentication.' },
        ],
      },
      {
        title: 'Senior Software Development Engineer',
        period: 'Jan 2026 — May 2026',
        points: [
          'Led key frontend initiatives during Freecharge’s demerger, owning the complete technical architecture of the FreechargeBiz web platform.',
          'Engineered secure cross-domain journeys between FreechargeBiz and Freecharge for bill payments, recharges, MFI flows and gold loans, keeping the UX seamless and fast throughout a large-scale platform separation.',
        ],
      },
    ],
    tags: ['React', 'Next.js', 'AI integration', 'SSO', 'Architecture'],
  },
  {
    company: 'Freecharge',
    url: 'https://www.freecharge.in/',
    location: 'Gurugram',
    roles: [
      {
        title: 'Senior Software Development Engineer',
        period: 'Jul 2023 — Dec 2025',
        groups: [
          {
            label: 'Axis Bank',
            points: [
              'Led development of Fixed Deposit booking web journeys for Axis Bank in React.',
              'Standardised data security with crypto-js payload encryption, protecting the integrity of transmitted data.',
              'Doubled user retention through strategic UX improvements, directly driving business growth.',
              'Cut page load times by 30% and bundle size by 40% with code splitting, dynamic imports and higher-order components.',
              'Wrote and maintained technical documentation for frontend frameworks and reusable modules.',
            ],
          },
          {
            label: 'Consumer web app',
            points: [
              'Led integration of new BillDesk bill payment categories (Rentals, NPS, Donations, Hospitals, Pathology) with hybrid journeys across Android and iOS through native bridge functions.',
              'Built a reusable, scalable Bill Payments SDK now used by clients such as IKEDA.',
              'Mentored a team of graduate engineers through regular code reviews and frontend best practices.',
            ],
          },
        ],
      },
    ],
    tags: ['React', 'Fintech', 'SDK', 'crypto-js', 'Performance', 'Mentoring'],
  },
  {
    company: 'Extramarks Education',
    url: 'https://www.extramarks.com/',
    location: 'Noida',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Aug 2022 — Jun 2023',
        points: [
          'Mentored juniors through deep dives into React and vanilla JavaScript.',
          'Led major R&D projects to boost web app performance, including converting the app into a PWA with periodic background data sync.',
        ],
      },
      {
        title: 'Software Developer',
        period: 'Jun 2021 — Jul 2022',
        points: [
          { k: 'Student dashboards', v: 'Core team member building the learning app for students and teachers in React.' },
          'Integrated Zoom across web and mobile apps.',
          'Shipped live classes through an Impartus integration.',
        ],
      },
    ],
    tags: ['React', 'PWA', 'EdTech', 'Mentoring'],
  },
  {
    company: 'ParallelDots',
    url: 'https://www.paralleldots.com/',
    location: 'Gurugram',
    roles: [
      {
        title: 'Frontend Developer',
        period: 'Feb 2020 — Jun 2021',
        points: [
          { k: 'Power BI embedded dashboards', v: 'Owned every Power BI embedding for Unilever, Mondelez and Nestlé, built with React, Flask and MSAL.' },
          { k: 'NPD tool', v: 'Built a New Product Detection tool for Ferrero from scratch to recognise and mark products in shelf images.' },
          { k: 'SmartReader', v: 'A text analysis tool: upload a CSV and get sentiment, emotion and keyword analysis.' },
          { k: 'SSO & APIs', v: 'Implemented ParallelDots single sign-on and REST APIs in Flask and SQL for image recognition and text analysis dashboards.' },
          { k: 'Demos & user dashboard', v: 'Built image recognition demos for every new client and the dashboard for AI API users from scratch.' },
          'Revamped the company website for 3x faster load times.',
        ],
      },
    ],
    tags: ['React', 'Python', 'Flask', 'SQL', 'Power BI', 'AI products'],
  },
  {
    company: 'Appfoster',
    location: 'Noida',
    compact: true,
    roles: [
      {
        title: 'Software Engineer Trainee',
        period: 'Dec 2019 — Jan 2020',
        points: [],
      },
    ],
    tags: [],
  },
  {
    company: 'Unilever',
    location: 'Haridwar',
    compact: true,
    roles: [
      {
        title: 'Production Executive',
        period: 'Jul 2018 — Nov 2019',
        points: [
          'Ran and modified production machinery (POSIMAT, ACMA, shrink tunnels, NORDON) to raise line efficiency.',
          'Eliminated coding defects with a consumer-first view of quality, working within World Class Manufacturing (WCM).',
          { k: 'Project Ferrari', v: 'Reduced minor stoppages on line BL-5 and de-bottlenecked pick-and-place cycle time.' },
        ],
      },
    ],
    tags: ['Manufacturing', 'WCM', 'Process improvement'],
  },
];

export const skillGroups = [
  { title: 'Core', items: ['React', 'Next', 'Node', 'Express', 'JavaScript', 'Redux', 'HTML', 'CSS'] },
  { title: 'Craft', items: ['Frontend architecture', 'Performance', 'Code splitting', 'PWA', 'Web security', 'Cross-domain SSO', 'SDK design', 'AI integrations'] },
  { title: 'Also fluent in', items: ['Typescript', 'Python', 'Flask', 'SQL', 'Git', 'GitHub Copilot', 'Kibana', 'Power BI Embedded', 'Technical writing'] },
];

export const sphereTags = [
  'React', 'Next', 'JavaScript', 'Redux', 'HTML', 'CSS', 'PWA', 'SSO',
  'Node', 'Express', 'Python', 'Flask', 'SQL', 'Git', 'Copilot', 'Kibana', 'crypto-js', 'Power BI',
];

export const projects = [
  {
    name: 'Go For Vaccine',
    blurb: 'Notifies you the moment COVID-19 vaccination slots open up near you. Built with Abhishek Agarwal during the 2021 rush, when every minute mattered.',
    tags: ['React', 'Public API', 'Notifications'],
    links: [
      { label: 'Live', href: 'https://go-for-vaccine.netlify.app/' },
      { label: 'Code', href: 'https://github.com/ittsprashant/go_for_vaccine' },
    ],
    accent: 'green',
  },
  {
    name: 'redM',
    blurb: 'Volunteered to build the website for redM, an organisation working to prevent sex trafficking and help survivors rebuild their lives.',
    tags: ['Pro bono', 'Web'],
    links: [{ label: 'Live', href: 'https://www.joinredm.com/' }],
    accent: 'orange',
  },
  {
    name: 'Styx Biotechnologies',
    blurb: 'Designing, developing and maintaining the web presence for a biotech company.',
    tags: ['Freelance', 'Web'],
    links: [{ label: 'Live', href: 'https://www.styxbiotechnologies.com/' }],
    accent: 'blue',
  },
  {
    name: 'Ask Anna',
    blurb: 'A spooky party game: ask Anna anything and she answers. Inspired by the classic "Peter Answers" prank.',
    tags: ['React', 'Game'],
    links: [
      { label: 'Live', href: 'https://askanna.netlify.app/' },
      { label: 'Code', href: 'https://github.com/ittsprashant/ask_anna' },
      { label: 'How to play', href: 'https://www.makeuseof.com/tag/peter-work-code-prank/' },
    ],
    accent: 'violet',
  },
  {
    name: 'Wordle',
    blurb: 'My take on the five-letter word game that took over everyone’s mornings.',
    tags: ['React', 'Game'],
    links: [
      { label: 'Live', href: 'https://prashants-wordle.netlify.app/' },
      { label: 'Code', href: 'https://github.com/ittsprashant/wordle' },
    ],
    accent: 'green',
  },
  {
    name: 'gooddeed.tech',
    blurb: 'A platform for sharing good deeds and inspiring others to pay it forward. Built with Amit Misra in 2020.',
    tags: ['Side project', 'Community'],
    links: [],
    accent: 'blue',
  },
];

export const beyond = {
  education: [
    {
      school: 'Krishna Institute of Engineering & Technology, Ghaziabad',
      degree: 'B.Tech, Instrumentation Engineering',
      period: '2014 — 2018',
      note: 'First Division with Honours',
    },
    {
      school: 'Mercy Memorial School',
      degree: 'Senior Secondary (CISCE)',
      period: 'Until 2013',
      note: 'Maths, Physics, Chemistry, Biotechnology',
    },
  ],
  hardware: [
    { title: 'Advanced Home Security', when: '2017 — 2018', text: 'An Arduino-based security system with PIR motion and MQ-6 gas sensors and a keypad-controlled solenoid lock, installed in a college lab.' },
  ],
  awards: [
    { title: 'PLC Championship', where: 'Technex ’16, IIT (BHU)', place: '1st · Zonal' },
    { title: 'Rangmanch, theatre', where: 'Epoque, KIET', place: '2nd · Institute' },
    { title: 'Literary Quiz', where: 'Quizzinga, KIET', place: '2nd · Department' },
    { title: 'Creative Writing', where: 'KIET', place: '3rd · Department' },
  ],
  certifications: [
    'Python Data Structures · Udemy',
    'Introduction to Programming Using Python · Udemy',
    'Verified International Academic Qualifications · WES',
    'PLC · Technex, IIT (BHU)',
    'Haptics · Robokart',
  ],
  languages: ['English', 'Hindi'],
};
