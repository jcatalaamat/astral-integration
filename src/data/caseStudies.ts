export type CaseStudyCategory = 'Retreats' | 'Practitioners' | 'Schools' | 'Communities' | 'Organizations' | 'Makers';

export interface CaseStudy {
  slug: string;
  client: string;
  type: string;
  category: CaseStudyCategory;
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
    category: 'Retreats',
    url: 'https://sacredcounsel.space',
    status: null,
    challenge: 'A center with 20+ years of ceremony experience running ayahuasca retreats, integration therapy, private homestays, and a 21-day metabolic detox — each with its own intake process, pricing, and client journey. Five distinct revenue streams, each requiring different booking logic, preparation materials, and follow-up sequences. The platform needed to honor the depth of the work without reducing it to a booking page.',
    decisions: 'The core architectural challenge was modeling five fundamentally different client journeys within a single platform identity. A retreat booking requires screening, preparation guidelines, and capacity management. A homestay is availability-based with seasonal pricing. Integration therapy needs recurring session scheduling with progress notes. The detox program has a fixed 21-day structure with daily check-ins. Each stream needed its own intake flow, payment logic, and communication sequence — while sharing a unified brand experience and client database.',
    built: 'A unified platform with stream-specific intake flows, automated preparation sequences, capacity management per offering type, and a shared client relationship layer. Revenue from retreats, homestays, therapy, and detox programs all flow through one system with offering-specific logic underneath.',
    gradient: 'from-amber-900/25 via-amber-900/5 to-transparent',
  },
  {
    slug: 'mazunte-today',
    client: 'Mazunte Today',
    type: 'Community Platform — Oaxaca, Mexico',
    category: 'Communities',
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
    type: 'Escuela Regenerativa — Zapotal, Oaxaca',
    category: 'Organizations',
    url: 'https://amakura.xyz',
    status: 'In progress',
    challenge: 'A multidisciplinary collective in Zapotal (Santa María Tonameca, Oaxaca) running a school of regenerative agriculture, bioconstruction, and arts & crafts — plus workshops, community events, and a small online store. Each offering was promoted through scattered social media. There was no way for someone discovering one program to find the others, no unified enrollment, no central calendar.',
    decisions: 'The challenge was creating a single digital home for fundamentally different programs — the regenerative agriculture school, bioconstruction trainings, arts & crafts workshops, retail of student-made goods, and ongoing community events — without forcing them into a generic template. Each needed its own presentation logic while sharing the collective\'s identity. The brand needed to feel like the land: earthy, alive, multidisciplinary.',
    built: 'A unified platform bringing together every program and offering — workshop enrollment, course catalogs across disciplines, a small store, and an event calendar — into a single digital home that reflects the collective\'s identity and makes everything discoverable from any entry point.',
    gradient: 'from-emerald-900/25 via-emerald-900/5 to-transparent',
  },
  {
    slug: 'inner-ascend',
    client: 'Inner Ascend',
    type: 'Private Membership for Inner Development',
    category: 'Practitioners',
    url: 'https://inner-ascend.com',
    status: null,
    challenge: 'A practitioner with a coherent methodology for inner development, clarity, and embodied direction — but no quiet, structured space for the people seeking depth over noise. In-person work created loyalty; what was missing was a private container that could hold members between sessions, deliver practices at the right moment, and welcome those ready to become facilitators themselves.',
    decisions: 'The core architectural question was how to model a non-linear inner journey. This isn\'t a course with modules — it\'s a methodology where different practices are appropriate at different stages, and the facilitator needs to be able to customize pathways. We built a curriculum engine that delivers practices based on progression markers, not sequential completion. An AI assistant trained on the methodology\'s language provides guidance between sessions in the same voice the practitioner uses in person. A facilitator pipeline tracks who among the membership has the readiness to train.',
    built: 'A private membership platform delivering progression-based practice over time, a personalized assistant that speaks in the methodology\'s language, journey tracking across the full path, and a pipeline into facilitator training — a quiet, structured space for those seeking depth over noise.',
    gradient: 'from-lime-900/25 via-lime-900/5 to-transparent',
  },
  {
    slug: 'proyecto-salvaje',
    client: 'Proyecto Salvaje',
    type: 'Regenerative Neighborhood — El Zapotal, Oaxaca',
    category: 'Communities',
    url: 'https://proyectosalvaje.com',
    status: null,
    challenge: 'A regenerative neighborhood in El Zapotal, Oaxaca — 10 minutes from Mazunte — offering 750 m² plots on fertile land for families willing to build with natural materials, share infrastructure, and live by community agreements. The challenge was communicating the vision and requirements to attract aligned families — without looking like a real estate listing or an eco-village marketing page. Pricing in three currencies (MXN, EUR, USD) for an international audience.',
    decisions: 'The platform needed to filter before it attracted. Most land community sites try to sell the dream — this one needed to present the reality: natural building requirements, community governance, shared infrastructure responsibilities, and the ecological framework. We structured the information architecture to lead with the land and the values, present the practical requirements clearly, and make plot availability and pricing transparent — so that by the time someone reaches the inquiry form, they\'re already self-selected.',
    built: 'A platform that tells the land story, presents 750 m² plot availability with multi-currency pricing, explains the natural building requirements and community agreements, and handles inquiries — grounded in the ecology of the project, not sales language.',
    gradient: 'from-teal-900/25 via-teal-900/5 to-transparent',
  },
  {
    slug: 'mend-a-mano',
    client: 'Mend a Mano',
    type: 'Textile Artisan — Bespoke Robes & Goods',
    category: 'Makers',
    url: 'https://mendamano.xyz',
    status: null,
    challenge: 'A textile artisan crafting bespoke robes from linen and wool — no digital presence beyond word of mouth. Each garment takes weeks to make, and the work needed a digital home as intentional as the cloth.',
    decisions: 'Off-the-shelf e-commerce templates assume inventory and turnover. This work is the opposite: slow, bespoke, conversation-driven. We chose an editorial approach — process and material first, products second, custom orders through direct contact rather than checkout. Linen texture overlay, earthy palette, generous space.',
    built: 'A site that feels like the cloth: linen-textured, paced, intentional. Product showcase, process storytelling, and a custom-order pathway that begins with a conversation, not a cart.',
    gradient: 'from-orange-900/25 via-orange-900/5 to-transparent',
  },
  {
    slug: 'portal-poem',
    client: 'Portal Poem',
    type: 'Writing Practice — A Portal to the Self',
    category: 'Makers',
    url: 'https://portalpoem.com',
    status: null,
    challenge: 'A writer holding a practice — "writing as the way home." A daily prompt, a blank page, and whatever rises through. There was no quiet platform that matched: no algorithm, no public feed, no infinite scroll. Instagram and Substack flattened the practice into content; what was needed was a portal — for the writer and for anyone who wanted to write alongside her.',
    decisions: 'A blog template would have flattened the work. We treated the site like a paper journal — slow typography, generous whitespace, intentional rhythm. The page invites you to write before it invites you to read. No autoplay, no popups, no algorithmic surfacing. The prompt sits alone on the screen because the act of writing deserves space.',
    built: 'A writing-practice portal: a daily prompt, a private page to write into, and a slow editorial home for the writer\'s own work. Paper aesthetic, careful type, considered whitespace. The site stays out of the way of the practice.',
    gradient: 'from-stone-900/25 via-stone-900/5 to-transparent',
  },
  {
    slug: 'kura-terra',
    client: 'Kura Terra',
    type: 'Plant-Dyed Slow Fashion — Wearable Art',
    category: 'Makers',
    url: 'https://kuraterra.xyz',
    status: null,
    challenge: 'A plant-dyed slow fashion brand creating wearable art from natural pigments. Each piece is unique. The site needed to honor the slowness — not push inventory, not chase conversions, not feel like a shop.',
    decisions: 'We chose to present the collection as art rather than inventory: process and story before price, generous space around each piece, earth tones and natural textures throughout. The buying flow is unhurried — the goal is to find the right person for each piece, not move units.',
    built: 'A site that reads like a gallery: each piece presented as wearable art, the pigment process explained, slow earth-toned design throughout. Buying happens, but it\'s not the centerpiece.',
    gradient: 'from-violet-900/25 via-violet-900/5 to-transparent',
  },
];
