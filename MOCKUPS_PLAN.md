# Audience-page mockups + audit fixes — plan

date: 2026-05-05  
branch: `audience-mockups` (off main, not pushed)  
no push to origin until vetted in person.

## why

two parallel audits surfaced the same shortlist. the home page already has 6 hi-fi UI mockups (bookings / payments / memberships / automations / ai / ownership). every audience page funnels generic copy into a generic CTA without showing what the buyer would actually receive. the mockups translate the abstract "i build for you" into a concrete screenshot of *her* system.

## scope

1. one hi-fi UI mockup per audience page — same jugat aesthetic as home (cream card, browser chrome, saffron-dp accents, shadow-card, ~360px tall).
2. audit fixes that ship in the same branch (small, copy-only):
   - kill "thriving" from home hero — restore "I turn your practice into a business."
   - fix `we`/`us` slips on `/makers` → first-person.
   - replace generic "Let's Talk" CTAs on the 6 audience pages with audience-specific honest CTAs in the spirit of "send me your messy notes."

larger structural items (pricing page, FAQ, testimonials retrofit, comparison pages, per-audience pre-screen forms) are **out of scope** — separate branch after this lands.

## per-page mockup spec

each mockup sits after the "is this you?" diagnostic, before the case study section. uses the same browser-chrome wrapper as `HomePage.tsx` lines 296–304. body min-height 360px. saffron accents on selected/active state.

### 1. `/practitioners` — unified dashboard
- replaces: 5 open browser tabs (calendly, stripe, mailerlite, notion, gdocs).
- screen content: single-pane dashboard with 4 columns or stacked rows:
  - today's sessions (3 entries · client name · time · session type)
  - intake forms received (2 pending review)
  - payments this week ($1,840 collected · 1 outstanding)
  - one client note pinned ("Maya — week 3 sadhana check-in")
- tag line under: "one tab. five tools."

### 2. `/schools` — cohort + curriculum tracker
- replaces: spreadsheet tracking student progress across modules.
- screen content:
  - cohort header: "Sangat 2026 — Cohort 03"
  - module progress: 7 modules, 4 complete (saffron filled), 3 ahead
  - student stats: 27 active · 8 certified · 2 paused
  - upcoming: "Module 5 cohort call · Sun 11 May · 14 confirmed"
- tag line: "students moving through your curriculum, in your structure."

### 3. `/retreats` — booking pipeline
- replaces: airtable + stripe + email + spreadsheet for room assignments.
- screen content:
  - retreat header: "Sound Healing · Mazunte · Sept 12-19"
  - capacity bar: 12/16 booked
  - deposits collected: $6,000 of $36,000
  - intake forms: 9/12 returned (saffron checkmarks · 3 pending)
  - rooms: 5 single, 4 double, 1 triple — assigned
  - currency mix: $4,200 USD · MX$32,400 · €600
- tag line: "every guest, every payment, every form — one view."

### 4. `/communities` — directory + event grid
- replaces: facebook groups + google sheets + word of mouth.
- screen content:
  - location filter: "Mazunte · 25km" (active saffron pill)
  - facilitator cards: 3 visible profiles (avatar · name · modality · next event)
  - event grid: 5 upcoming events with dates + spots remaining
  - "12 events near you this week"
- tag line: "your tribe, mapped."

### 5. `/makers` — slow-shop product page
- replaces: shopify (too transactional) + instagram DMs + paypal.
- screen content:
  - product image placeholder (single piece)
  - title: "Linen wrap · indigo dye · 2026 batch"
  - "1 of 12 · made by hand"
  - story expandable: "the mordant takes 4 days..."
  - waitlist (not buy now): "join waitlist · next batch ships November"
  - email field + saffron CTA "save my spot"
- tag line: "your craft, sold the way it was made."

### 6. `/organizations` — multi-tenant facilitator network
- replaces: $200K agency + 6-12 month timeline.
- screen content:
  - admin header: "1,247 facilitators · 38 regions"
  - search + filter row: modality · region · language · active
  - 4 facilitator rows with status pills (active / pending / under review)
  - moderation queue: "3 profiles pending review"
  - export to CSV button (saffron)
- tag line: "directory at scale. moderated. yours."

## order of work

1. write this plan + commit (no push). `commit 1`.
2. audit fixes — kill "thriving", fix makers we/us, swap audience CTAs. `commit 2`.
3. practitioners mockup → vet visually before the rest. `commit 3`.
4. schools, retreats, communities, makers, organizations — one commit per audience. `commits 4–8`.
5. local build + visual smoke test (curl + grep for known strings). no deploy yet.
6. wait for jordi's greenlight before push + rsync.

## conventions

- token names already used on home: `bg-cream`, `border-rule`, `bg-bg-2`, `text-saffron-dp`, `shadow-card`, `mono-tag`, `serif`, `em-accent`. reuse, don't introduce new tokens.
- borderRadius: `14px` outer card, `8px` inner cards, `6px` rows, `2px` progress bars (matches home).
- mockup body: `p-5 min-h-[360px]`.
- browser chrome: 3 dots + mono-tag breadcrumb (`{audience} · {feature}`).
- no images. all SVG/CSS/glyph.

## not doing in this branch

- pricing page (separate branch — needs jordi input on tier copy).
- testimonials retrofit (needs jordi to source 3-5 quotes).
- comparison pages (`/vs/agency` etc.) — needs positioning sign-off.
- per-audience pre-screen forms — needs intake schema design.
- legal/security pages — table-stakes but separate sweep.
