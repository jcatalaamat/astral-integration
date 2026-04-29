export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-linktree-problem',
    title: 'The Linktree Problem',
    subtitle: 'Why linking to six platforms isn\'t a digital strategy',
    date: '2026-02-20',
    readTime: '4 min',
    category: 'Infrastructure',
    excerpt: 'Your Linktree has six links. Each one sends people to a different platform with a different login, a different brand, and a different experience. That\'s not a digital presence — it\'s digital fragmentation.',
    content: [
      'Your Linktree has six links. Calendly for bookings. Teachable for courses. Stripe for payments. A Squarespace website. A WhatsApp group. Maybe a Mailchimp signup form. Each one sends people to a different platform with a different login, a different brand, and a different experience.',
      'That\'s not a digital presence — it\'s digital fragmentation.',
      'Every time someone clicks one of those links, they leave your world and enter someone else\'s. They see Calendly\'s branding, Teachable\'s interface, Stripe\'s checkout page. Your identity dissolves the moment they engage. You\'re paying five different companies monthly fees to collectively offer a worse experience than a single custom platform would.',
      'But the real cost isn\'t the fees. It\'s the data.',
      'Your booking platform doesn\'t know who took your course. Your course platform doesn\'t know who\'s on your email list. Your email list doesn\'t know who attended your retreat. You have no unified view of the people you serve — just fragments scattered across platforms that were never designed to talk to each other.',
      'This matters because the most valuable thing you have isn\'t content or scheduling or payment processing. It\'s the relationship with your people. And that relationship is being held hostage by six different companies, each optimizing for their own metrics, not yours.',
      'The practitioners I work with typically have between 3 and 8 platforms in their stack. The shift isn\'t complicated: it\'s replacing all of them with one custom platform that does exactly what you need, under your brand, with your data, in one place.',
      'The Linktree isn\'t the problem. It\'s the symptom. The problem is that nobody built you a home.',
    ],
  },
  {
    slug: 'six-tools-one-platform',
    title: 'Six Tools, One Platform',
    subtitle: 'What changes when you stop paying rent on other people\'s software',
    date: '2026-02-18',
    readTime: '5 min',
    category: 'Case Study',
    excerpt: 'A teacher running a certification school across Teachable, Calendly, Stripe, WhatsApp, and Google Sheets. Here\'s what happens when we replace all five with one custom platform.',
    content: [
      'A teacher running a certification school with hundreds of students across multiple levels. Their digital infrastructure: Teachable for course delivery. Calendly for session bookings. Stripe for payments. WhatsApp for student communication. Google Sheets for tracking who had completed what level and how many practice hours they\'d logged.',
      'Five platforms. None of them talked to each other. None of them knew it was a certification school with prerequisite levels.',
      'Every time a student completed Level 3, the teacher had to manually check their practice hours in a spreadsheet, verify prerequisites in Teachable, and then send them a WhatsApp message telling them they could enroll in Level 4. If a student asked "what\'s my next step?", the answer required cross-referencing three platforms.',
      'The monthly cost of the five platforms was around $200. The real cost — the hours spent every week on admin instead of teaching — was far higher.',
      'Here\'s what we built: a single platform that understands what a certification school actually is. Course delivery with prerequisite-gated progression, so Level 4 only unlocks when Level 3 and the required practice hours are complete. Student tracking across all levels with practice hour logging. Automatic population of a public practitioner directory when someone reaches certification. Booking for retreat sessions. An AI assistant trained on the methodology.',
      'Five platforms became one. The spreadsheet disappeared. Booking confirmations are automatic. Students see their entire journey — from first course to practitioner certification — in one place.',
      'Monthly platform costs went from $200 across five tools to zero platform fees (the custom platform runs on infrastructure that costs a fraction of what they were paying). More importantly, the hours spent on admin every single week came back.',
      'This isn\'t about technology. It\'s about building infrastructure that matches the work. A certification school needs certification logic — prerequisites, progression tracking, practice hour requirements. Teachable doesn\'t have that because Teachable was built for selling video courses, not running schools.',
      'The tools you\'re paying for were designed for a different kind of business. The question isn\'t which tool to switch to. It\'s whether to stop renting and build a home.',
    ],
  },
  {
    slug: 'catch-them-before-they-scale',
    title: 'Catch Them Before They Scale',
    subtitle: 'Why the best time to build real infrastructure is before you need it',
    date: '2026-02-15',
    readTime: '4 min',
    category: 'Strategy',
    excerpt: 'Most practitioners come to me after they\'re already drowning in admin. But the ones who build early — before the spreadsheets become unmanageable — save themselves years of pain.',
    content: [
      'Most practitioners come to me when something is already breaking. The spreadsheet with 300 student records is getting unwieldy. The booking calendar has double-bookings. The WhatsApp group has 500 members and no structure. The Teachable course doesn\'t track prerequisites. The brand is spread across seven platforms and none of them feel like home.',
      'By that point, there\'s migration pain. Data lives in five different places. Students have logins on three platforms. There\'s a Mailchimp list that\'s half-outdated. Cleaning all of this up and moving it into a unified platform is doable — I do it regularly — but it\'s harder and more expensive than starting clean.',
      'The practitioners who have the smoothest experience are the ones who come before the pain. They have 20 students, not 300. They have a methodology but haven\'t yet crammed it into Teachable. They know they need a booking system but haven\'t yet committed to Calendly. They have a brand vision but haven\'t yet settled for Squarespace.',
      'Starting early doesn\'t mean building everything at once. It means building the right foundation. A custom platform that starts with what you need today — maybe just a website, booking, and a course — but is architecturally designed to grow into what you\'ll need in two years: certification tracking, student progression, practitioner directories, membership portals, AI assistants trained on your methodology.',
      'When you start with Teachable and then outgrow it, you have to migrate. When you start with custom infrastructure, you just build the next room.',
      'The economics work too. No upfront cost — every site custom-built from scratch, scoped to what you actually need. My pricing is structured so my success is tied to yours: I take a small % of revenue (5–15% based on what we build) from dollar one. If you don\'t earn, I don\'t earn. You get infrastructure from day one that would cost $15,000+ if you hired a dev shop later — and we both grow together.',
      'The common mistake is waiting until you "need" a real platform. By then, you\'ve accumulated years of workarounds, your audience expects the current (fragmented) experience, and the migration is more complex. The best time to build real infrastructure is when you\'re small enough that it\'s simple — and ambitious enough to know you won\'t stay small.',
      'Don\'t wait until you\'re drowning. Build the boat while the water\'s calm.',
    ],
  },
];
