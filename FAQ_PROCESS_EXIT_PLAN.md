# FAQ + process detail + exit clause — plan

date: 2026-05-05  
branch: `faq-process-exit` (off main, not pushed)

## why

three trust gaps the IA audit flagged. all draftable now, no blockers.

1. no proper FAQ — answers to timeline / ownership / bus factor / why one builder / data / exit terms are scattered or missing.
2. `/how-it-works` is too high-level — buyers want a week-by-week with deliverables and owners.
3. one-builder = the #1 hesitation. needs an explicit "what if jordi stops" answer.

## scope

1. `/faq` — new dedicated page. ~18 Q&A across 5 sections. JSON-LD FAQPage schema for google rich snippets.
2. expand `/how-it-works` with a week-by-week timeline section between "How an engagement runs" and the FAQ.
3. add an explicit "exit clause" section to `/how-it-works` (and a Q&A on /faq).
4. add /faq to footer + main nav.

## /faq sections

### General
- who astral is for
- what astral actually builds
- why one builder vs an agency
- what makes this different from a freelancer

### Money
- how pricing works ($0 setup · $0/mo · 15% × 18 months)
- what counts as "revenue" for the rev share
- what if I make $0 in a given month
- what if I make a lot more than expected
- can I negotiate the rev share down

### Process
- how long does a project take
- what's expected of me during the build
- what tech stack
- what if scope changes mid-build

### Ownership
- do I own the code
- do I own the data
- do I own the AI model + training data
- can I take the platform elsewhere

### Continuity / exit
- what if jordi stops building
- what's documented
- can someone else maintain it
- how do I export everything if we part ways

### Data + security (light — full /security comes later)
- where is data hosted
- backup cadence
- GDPR compliance

## /how-it-works expansion

after the existing 3-phase summary, add a "Week by week" section. table-style:

| week | what happens | deliverable | who owns |
|------|--------------|-------------|----------|
| 1 | discovery + research + proposal | scoped proposal, deal shape, timeline | jordi |
| 2 | architecture + content modeling | data schema, page map, brand tokens | jordi (you review) |
| 3 | core build — bookings, payments, auth | working booking flow, stripe integration | jordi |
| 4 | the work-specific layer — your unique logic | features unique to your offering | jordi (you review) |
| 5 | AI substrate + automations | trained model, automation flows | jordi |
| 6 | launch + handoff | live platform, repo access, docs | both |

then exit clause section (also a Q&A on /faq).

## exit clause section content

honest, direct, concrete. addresses bus-factor head-on.

> **What if I stop building?**
>
> Your code lives in your github from day one. Your domain is in your name. Your data is in your database, on a server you own. The AI model is yours, the training data is yours, the customer list is yours. If I disappear tomorrow, any senior full-stack engineer can pick up the codebase — it's standard React + TypeScript + Node, documented as I build, no proprietary lock-in.
>
> What you're paying for is not access to me — it's the architecture I build. The rev share is 18 months because that's how long it takes for the platform to outearn the build. After that, we keep working together because the work calls for it, not because you're locked in.

## conventions

- /faq uses jugat tokens (cream/saffron/indigo)
- accordion for each Q (closed by default)
- JSON-LD schema in document head via inline script tag at page top
- exit clause section has its own eyebrow + h2, distinct visual weight

## order of work

1. plan + commit (this file). `commit 1`.
2. /faq page + route + prerender + footer + nav. `commit 2`.
3. /how-it-works week-by-week section. `commit 3`.
4. /how-it-works exit clause section. `commit 4`.
5. local build + smoke test.
6. on greenlight: merge + push + rsync.

## not doing

- /security — needs you to confirm hosting, backup cadence, GDPR specifics. separate branch.
- /legal/* (terms, privacy, data-handling) — needs lawyer review. separate.
- testimonials retrofit — needs you to source quotes.
- /access rename — leave for later sweep.
- about-page AI cadence rewrite + practitioners "Be honest" + organizations prototype URL — small audit-fix sweep, separate.
