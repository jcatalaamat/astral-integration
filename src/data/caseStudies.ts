export interface CaseStudy {
  slug: string;
  client: string;
  type: string;
  url: string | null;
  status: string | null;
  challenge: string;
  decisions: string;
  built: string;
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sacred-counsel',
    client: 'Sacred Counsel',
    type: 'Retreat Center & Integration Practice — Valle de Bravo, Mexico',
    url: 'https://sacredcounsel.space',
    status: null,
    challenge: 'A center with 20+ years of ceremony experience running ayahuasca retreats, integration therapy, private homestays, and a 21-day metabolic detox — each with its own intake process, pricing, and client journey. Five distinct revenue streams, each requiring different booking logic, preparation materials, and follow-up sequences. The platform needed to honor the depth of the work without reducing it to a booking page.',
    decisions: 'The core architectural challenge was modeling five fundamentally different client journeys within a single platform identity. A retreat booking requires screening, preparation guidelines, and capacity management. A homestay is availability-based with seasonal pricing. Integration therapy needs recurring session scheduling with progress notes. The detox program has a fixed 21-day structure with daily check-ins. Each stream needed its own intake flow, payment logic, and communication sequence — while sharing a unified brand experience and client database.',
    built: 'A unified platform with stream-specific intake flows, automated preparation sequences, capacity management per offering type, and a shared client relationship layer. Revenue from retreats, homestays, therapy, and detox programs all flow through one system with offering-specific logic underneath.',
    gradient: 'from-amber-900/25 via-amber-900/5 to-transparent',
  },
  {
    slug: 'uria-tsur',
    client: 'Uria Tsur',
    type: 'Vocal Freedom Facilitator — Touring 18+ Cities',
    url: 'https://uriatsur.live',
    status: null,
    challenge: 'A touring vocal facilitator and frontman of Orot Band (33K+ Spotify listeners) was managing events across 8 ticketing platforms — Eventbrite, Universe, Fienta, and five others — losing control of audience data, paying platform fees on every transaction, and spending hours weekly on admin. He also needed a membership portal for 300+ subscribers and a training program for singing circle leaders across multiple countries.',
    decisions: 'The key decision was whether to aggregate the existing platforms or replace them entirely. We chose replacement: a centralized event system that handles ticketing, capacity, and attendee data across all 18+ cities. The membership layer needed to support recurring access, gated video content, and community features without the overhead of a separate platform. The Singing Circle Leaders Course required cohort management, application screening, and multilingual support (English/Hebrew) — essentially a certification pipeline built into the same ecosystem.',
    built: 'A centralized event hub replacing all 8 platforms with unified ticketing, audience data ownership, and zero per-transaction platform fees. A membership portal with 300+ subscribers, gated content, and community features. A Singing Circle Leaders Course with application flow, cohort management, and bilingual delivery. All under one roof, one login, one brand.',
    gradient: 'from-violet-900/25 via-violet-900/5 to-transparent',
  },
  {
    slug: 'shivenergetics',
    client: 'ShivEnergetics',
    type: 'Reiki Academy — Granada, Spain',
    url: null,
    status: 'In progress',
    challenge: 'A Reiki Master Teacher with 300+ students across 9 certification levels was running her school across five disconnected platforms — Teachable for courses, Calendly for bookings, Stripe for payments, WhatsApp for communication, and Google Sheets for student records. There was no single place a student could see their path from first course to practitioner certification. Booking confirmations were manual. Student progression was tracked in spreadsheets.',
    decisions: 'The challenge wasn\'t just consolidating five platforms — it was designing a student journey architecture that could handle 9 certification levels with prerequisite dependencies, where a student\'s progression through Level 3 unlocks Level 4, practice hours accumulate toward certification, and completed certifications automatically populate a public practitioner directory. The system needed to work for a student on day one and a practitioner three years in. We also built an AI assistant trained on the Reiki methodology — not a generic chatbot, but one that understands energy work terminology, can guide students through practice questions, and triages complex inquiries to the teacher.',
    built: 'A unified academy platform — course delivery with prerequisite-gated progression, student tracking across 9 certification levels, practice hour logging, automatic practitioner directory population upon certification, retreat bookings, and an AI assistant trained on the methodology. Five platforms replaced with one.',
    gradient: 'from-sky-900/25 via-sky-900/5 to-transparent',
  },
  {
    slug: 'mazunte-today',
    client: 'Mazunte Today',
    type: 'Community Platform — Oaxaca, Mexico',
    url: 'https://mazunte.today',
    status: null,
    challenge: 'A small coastal town in Oaxaca with dozens of practitioners, venues, and events happening every night — and no central place to find any of it. Visitors relied on word of mouth. Locals posted on scattered WhatsApp groups. Business owners had no affordable way to maintain an online presence. Event information was fragmented across Instagram stories, Facebook groups, and handwritten signs.',
    decisions: 'The platform needed to serve three distinct user types simultaneously: visitors looking for what\'s happening tonight, practitioners and businesses needing affordable digital presence, and community members wanting a local marketplace. The architectural choice was a directory-first model with event listings layered on top — not a social network, not a marketplace, but a community utility. Bilingual from day one (English/Spanish) because the town is roughly split. Daily content updates rather than user-generated content to maintain quality and accuracy.',
    built: 'A bilingual community platform: event listings updated daily, practitioner and business directory, classifieds, and a weekly digest — in English and Spanish. Used by locals and visitors as the go-to source for what\'s happening in town.',
    gradient: 'from-rose-900/25 via-rose-900/5 to-transparent',
  },
  {
    slug: 'amakura',
    client: 'Amakura',
    type: 'Centro de Vida Regenerativa — Mazunte, Oaxaca',
    url: 'https://amakura.store',
    status: 'In progress',
    challenge: 'A regenerative living center running a bioconstruction school, restaurant, natural pool, workshops, and community events — all under one roof but with no unified digital layer. Each offering was promoted separately through social media and word of mouth. There was no way for someone discovering the restaurant to learn about the bioconstruction school, or for a workshop participant to see what else was available.',
    decisions: 'The challenge was creating a single digital home for fundamentally different offering types — educational programs (the school), hospitality (the restaurant and pool), events (workshops and community gatherings), and retail — without forcing them into a generic template. Each needed its own presentation logic while sharing a unified identity and cross-promoting the others. The brand needed to feel like the place itself: warm, grounded, and alive.',
    built: 'A unified platform bringing together all offerings — workshop enrollment, restaurant presence, event listings, and the bioconstruction school — into a single digital home that reflects the center\'s identity and makes everything discoverable from any entry point.',
    gradient: 'from-emerald-900/25 via-emerald-900/5 to-transparent',
  },
  {
    slug: 'inner-ascend',
    client: 'Inner Ascend',
    type: 'Healing Membership & Facilitator Pipeline',
    url: 'https://inner-ascend.com',
    status: null,
    challenge: 'A trauma-informed healing practice with a loyal following from in-person sessions — but no way to stay with people between ceremonies, and no structured path for experienced participants who wanted to become facilitators themselves. The knowledge existed as a coherent methodology with 97 distinct practices. The container didn\'t exist.',
    decisions: 'The core architectural question was how to model a non-linear healing journey. This isn\'t a course with modules — it\'s a methodology where different practices are appropriate at different stages of someone\'s process, and the facilitator needs to be able to customize pathways. We built a curriculum engine that delivers practices based on progression markers, not just sequential completion. The AI assistant was critical here: trained on the methodology\'s language and framework, it provides guidance between sessions using the same terminology and approach the practitioner uses in person. The facilitator pipeline adds another layer — tracking who among the membership has the experience and readiness to train as facilitators.',
    built: 'A membership platform delivering a 12-month curriculum of 97 practices with progression-based (not sequential) delivery, a personalized healing assistant that speaks in the methodology\'s language, progress tracking across the full journey, and a pipeline into facilitator training — turning a practice into a school.',
    gradient: 'from-lime-900/25 via-lime-900/5 to-transparent',
  },
  {
    slug: 'ozina-camp',
    client: 'Ozina Camp',
    type: 'Eco Farm Stay & Artist Residency — Mallorca',
    url: null,
    status: 'In progress',
    challenge: 'An eco-farm, artist residency, and natural building school on the land in Mallorca. Off-the-shelf booking sites (Airbnb, Booking.com) couldn\'t represent what the place actually is — and took significant commissions on every stay. The residency program required an application process, not a booking widget. The natural building school needed enrollment, not tickets.',
    decisions: 'Three distinct booking/application models under one brand: farm stays (availability-based with seasonal pricing), artist residencies (application-based with portfolio review), and natural building courses (enrollment-based with prerequisites). Each needed its own flow while sharing availability data — a residency occupies the same physical space as a farm stay. The platform needed to tell the land story first and handle transactions second.',
    built: 'Direct bookings replacing platform commissions, the land story told properly, and residency applications with portfolio review — in a platform that feels like walking onto the farm.',
    gradient: 'from-orange-900/25 via-orange-900/5 to-transparent',
  },
  {
    slug: 'proyecto-salvaje',
    client: 'Proyecto Salvaje',
    type: 'Regenerative Land Community — Sierra Sur, Oaxaca',
    url: 'https://proyectosalvaje.com',
    status: null,
    challenge: 'A regenerative land project in the mountains of Oaxaca offering 10 household lots with natural building requirements, shared infrastructure, and community governance. The challenge was communicating the vision and requirements to attract aligned families — without looking like a real estate listing or an eco-village marketing page. The project has specific natural building requirements, community agreements, and a governance model that needed to be understood before anyone inquired.',
    decisions: 'The platform needed to filter before it attracted. Most land community sites try to sell the dream — this one needed to present the reality: natural building requirements, community governance expectations, shared infrastructure responsibilities, and the ecological framework. We structured the information architecture to lead with the land and the values, present the practical requirements clearly, and make lot availability transparent — so that by the time someone reaches the inquiry form, they\'re already self-selected.',
    built: 'A platform that tells the land story, presents lot availability, explains the natural building requirements and community agreements, and handles inquiries — grounded in the ecology of the project, not sales language.',
    gradient: 'from-teal-900/25 via-teal-900/5 to-transparent',
  },
];
