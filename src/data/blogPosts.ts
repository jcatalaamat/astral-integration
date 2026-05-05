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
    slug: 'the-studio-is-small-on-purpose',
    title: 'The studio is small on purpose',
    subtitle: 'Why one builder beats six engineers — and the trade-offs that come with it',
    date: '2026-05-05',
    readTime: '5 min',
    category: 'Positioning',
    excerpt: 'Astral Studio is one person. Not because I haven\'t scaled — because scaling would break what makes this work. Here\'s what "small on purpose" actually means and what it costs you when you sign up for it.',
    content: [
      'Astral Studio is one person. That\'s a strategic choice, not a stage I\'m moving past. Most weeks I get asked when I\'ll hire — when there will be a team, an agency, a "real" company. The honest answer is: probably not, and definitely not for the reasons you\'re imagining.',
      'Here\'s what the math looks like from the inside.',
      'When I take on a school with multiple cohorts and a certification path, I\'m holding the entire system in my head. The pricing logic, the prerequisite enforcement, the cohort scheduling, the AI substrate trained on the founder\'s teaching, the way the brand voice changes between the public site and the member portal. All of it. The architecture is consistent because there\'s one architect.',
      'When you hire an agency, that consistency disappears. The strategist scopes the project, the project manager runs standups, three engineers split the work, the senior reviews PRs but didn\'t hear the founder\'s explanation of why this lineage matters. The deliverable looks like a website. It doesn\'t feel like the work.',
      '"Small on purpose" means I take on a handful of engagements at a time. Usually 3-5 active. Each one gets weekly contact and continuous architectural attention. When something breaks at 11pm on a Tuesday, the same person who built it fixes it. The same person who shipped your platform is the one writing your AI prompts six months later.',
      'The economics work because of the rev-share model. I get paid when the platform earns. That aligns me with the long-term success of the work, not with billing more hours. An agency that bills $200K up front has zero financial incentive to come back six months later and improve the AI substrate. I have every incentive — because that\'s when the platform starts compounding revenue, and I get a share of it.',
      'But there are trade-offs you should know about before signing up.',
      '**Capacity.** I take on a handful of engagements at a time. If you message me in March and I\'m at capacity, you\'re waiting until June. I won\'t squeeze you in by hiring a junior to "help." That breaks the model.',
      '**Speed of execution vs. team scaling.** A 6-week build with one person is a 6-week build. With four engineers, it could theoretically be 2 weeks — except in practice, the coordination overhead on a project this small eats the savings, and the architecture still has to be unified by someone. The shape of the work matches the shape of the studio.',
      '**Bus factor.** This is the question every serious buyer asks: "what if Jordi disappears?" The honest answer is on the FAQ page. Code in your GitHub from day one, standard tools any senior engineer can pick up, the architecture is what you\'re paying for, not access to me. But I won\'t pretend the bus factor is zero. It\'s lower than an agency where institutional knowledge lives in three engineers who change roles every 18 months. But it\'s not zero.',
      '**No "growing the team" path.** If your project succeeds enormously and you want to scale up to a 50-person engineering org, that won\'t come from me. At that point you\'re hiring an in-house team, and I become the technical advisor or the original architect, not the operator. That transition is part of the model, not a failure of it.',
      'The studio is small on purpose because the work I do well requires holding the whole system in one head. The day I scale to "team of six," the work changes shape — and the kind of clients I serve well don\'t need a team of six. They need a builder who understood their work the first time and is still building for them three years later.',
      'There\'s a version of this argument that sounds like artisan-romance — "I do the work myself because craft." That\'s not what I mean. I mean: this is the only structure that produces the result. A school with a coherent platform built around its specific lineage. A retreat center with infrastructure that holds the depth of the work. A maker with a slow-shop that doesn\'t feel like Shopify. These don\'t come from teams. They come from one person who got close enough to the work to understand it.',
      'If you\'re looking for an agency, there are good ones. If you\'re looking for a senior builder who will sit with your work, learn your lineage, and ship infrastructure that compounds over years — the studio is small on purpose, and that\'s probably why we\'re a good fit.',
    ],
  },
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
      'The economics work too. Every site is custom-built from scratch, scoped to what you actually need — not a templated platform you outgrow in a year. Engagements are shaped to the work, not a tier menu.',
      'The common mistake is waiting until you "need" a real platform. By then, you\'ve accumulated years of workarounds, your audience expects the current (fragmented) experience, and the migration is more complex. The best time to build real infrastructure is when you\'re small enough that it\'s simple — and ambitious enough to know you won\'t stay small.',
      'Don\'t wait until you\'re drowning. Build the boat while the water\'s calm.',
    ],
  },
];
