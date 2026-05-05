# Comparison sections + consolidated page — plan

date: 2026-05-05  
branch: `comparisons` (off main, not pushed)

## why

every audience page needs to handle the "$60 squarespace vs $10k custom" comparison directly. 3 of 6 already do this:
- `/schools` → "Why not Teachable?"
- `/retreats` → "Why not Booking.com?"
- `/organizations` → "Why not build custom?"

3 don't:
- `/practitioners` — buyer compares to Squarespace + Calendly + Stripe stack
- `/makers` — buyer compares to Shopify (or Etsy)
- `/communities` — buyer compares to Facebook groups (or Mighty Networks)

without this on every page, the buyer lands, can't compare, and bounces.

## scope

1. add 3 inline "why not X?" sections to practitioners / makers / communities. same shape as existing 3 (eyebrow "The Honest Question" + h2 "Why not [X]?" + intro + 6 bullet limitations + closing line).
2. add a single consolidated page at `/built-vs-bought` that covers all 6 alternatives in one place. SEO-targetable. linkable from emails. addresses the "are you sure $10k is worth it?" objection head-on.
3. add `/built-vs-bought` to footer nav (not main nav — keep main nav clean).

## per-page comparisons

### `/practitioners` — "Why not Squarespace + Calendly + Stripe?"
the patchwork stack most practitioners are on. 6 limitations:
- can't share state — your client books on Calendly, pays on Stripe, fills the form on Typeform, and you stitch it together by hand
- intake forms can't be tied to specific session types
- no client history view — you scroll through email to remember what Maya said last time
- payment plans are hard, deposits are harder, refunds are an ordeal
- no AI trained on your work — every reply is from scratch
- you don't own the customer list — Squarespace owns the relationship layer

closing: "These are five tools held together with duct tape. I build the one tool."

### `/makers` — "Why not Shopify?"
shopify is built for fast-moving consumer goods. your craft moves at a different speed. 6 limitations:
- product pages prioritize "buy now" — your craft needs "process first"
- no story-first product pages with material/process/edition data
- waitlist UX is bolted on, not native
- inventory model assumes scale — you make 12 a year
- the storefront looks like every other shopify store
- you can't easily put a 2,000-word essay next to a $400 piece

closing: "Shopify sells more, faster. Your work sells less, slower, and worth more. Different infrastructure."

### `/communities` — "Why not a Facebook group?"
facebook groups are free. they also leak. 6 limitations:
- you don't own the member list — meta owns it
- algorithmic feed buries posts that don't generate engagement
- no event RSVPs that connect to a real calendar
- no facilitator directory, no language toggle, no location filter
- ads next to your content
- people cancel facebook every six months and lose their connection to your community

closing: "Free isn't free when the platform owns the relationship. Build on land you own."

## consolidated page — `/built-vs-bought`

structure:
- hero: "$60 a month vs $10k once. Here's what changes."
- intro paragraph: positioning the comparison directly. acknowledge the price gap. frame the question correctly.
- 6 sections, one per alternative:
  - Squarespace + Calendly + Stripe (practitioners)
  - Shopify / Etsy (makers)
  - Teachable / Thinkific (schools)
  - Booking.com / Airbnb (retreats)
  - Facebook groups / Mighty Networks (communities)
  - Custom-built by an agency ($200K+) (organizations)
- closing: "What you're really buying is the architecture. The architecture is what makes the AI possible, the rev share possible, the long-term partnership possible. Templates can't do that."
- single CTA at the end: "Send me your messy notes" → contact

## order of work

1. plan + commit (this file). `commit 1`.
2. practitioners comparison section. `commit 2`.
3. makers comparison section. `commit 3`.
4. communities comparison section. `commit 4`.
5. `/built-vs-bought` page + route + footer link. `commit 5`.
6. local build + smoke test. no push yet.
7. on greenlight: merge to main + push + rebuild + rsync.

## conventions

- match existing comparison section pattern (eyebrow + h2 + intro + 6 × bullets + closer)
- keep audience-page comparisons inline at the same insertion point as the existing 3 (after "What it looks like" mockup, before case study)
- consolidated page uses jugat tokens (cream/saffron/indigo) like home + how-it-works
- no images, all type+SVG

## not doing

- breaking out into 6 separate `/vs/X` pages — overkill, low SEO yield, not worth the maintenance
- updating the existing 3 comparison sections — they work, leave them
- adding "compare to" tables — bullet × pattern is more honest, less marketing-deck
