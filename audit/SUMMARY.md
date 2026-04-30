# site audit: master summary

audited: 27 pages/components across astralintegration.co
quality bar: /makers
date: 2026-04-30

---

## top 5 site-wide issues

### 1. CRITICAL: pricing model contradiction
- /pricing shows $2K-$12K build costs AND "$0 upfront" AND rev share percentages on the same page
- /how-it-works says "above $5K/mo" for rev share but /makers says "from dollar one"
- visitor cannot tell what they'll actually pay. this kills conversion.
- **fix**: pick one model. if rev share is the play, lead with $0 upfront + rev share tiers. move build costs to a footnote or remove them. align /pricing and /how-it-works language.
- **time**: 2-3 hours (copy decisions + page rewrites)

### 2. two incompatible design systems coexisting
- 6 pages use the old "studio" design system: /careers, /process, /start-here, /blueprint, /review, /studio-collaboration
- these use studio-bg, studio-divider, content-tertiary, rectangular buttons, raw document.title
- the rest of the site uses: dark-bg, dark-card, accent, rounded corners, serif headings, useDocumentMeta, reveal animations
- /careers is linked from the footer. the other 5 are likely deprecated but still routable.
- **fix**: decide which old pages to keep. /careers and /review have salvageable content — rebuild them in the modern system. deprecate and remove the rest. add redirects or 404.
- **time**: 4-6 hours (2 page rebuilds + route cleanup)

### 3. incomplete rebrand (astral integration -> astral studio)
- og urls still reference astralintegration.co on: /tools/life-os, /tools/content-studio, /insights/:slug, /work/:slug
- footer email says hello@astralintegration.co
- commit 1a4e5eb caught the main pages but missed tools, templates, and meta tags
- **fix**: grep for "astralintegration" across entire codebase and update all references
- **time**: 30-45 minutes

### 4. I/we voice inconsistency
- homepage, about, practitioners use first person ("I build", "my approach")
- tools hub, how-it-works, some CTAs use "we" ("we believe", "our process", "we decided")
- brand context in content studio says "use I not we" but the site hasn't committed
- **fix**: jordi is one person. commit to "I" everywhere except where "astral studio" is the subject ("astral studio builds..." not "we build..."). do one pass across all pages.
- **time**: 1-2 hours

### 5. repetitive CTA copy + AI slop in secondary pages
- 14 of 27 pages end with some variation of "ready to [verb]?" + "book a call" / "start a conversation"
- tools hub has "we believe in giving first" — textbook AI filler
- organizations page uses "at scale" twice, "empowering" once
- **fix**: vary CTAs by page intent. service pages: "send me your site." tool pages: "try it now." portfolio: "see more work." kill all AI-slop phrases.
- **time**: 1-2 hours

---

## priority order to fix pages

### tier 1: fix now (blocks conversion)
| page | issue | time |
|------|-------|------|
| /pricing | pricing model contradiction | 2h |
| /how-it-works | contradicts /pricing, align | 1h |
| footer | wrong email domain, missing links, no privacy policy | 30m |

### tier 2: fix this week (brand consistency)
| page | issue | time |
|------|-------|------|
| homepage | vague hero subhead, I/we split, fractional CTO line | 1.5h |
| /tools | "soul-led" tone, emojis, aggressive CTA | 45m |
| all og urls | rebrand grep + replace | 30m |
| /about | practitioner section too long, audience list repeated 3x | 45m |

### tier 3: fix next (quality improvements)
| page | issue | time |
|------|-------|------|
| /contact | form message not optional, referral field vague | 30m |
| /insights | no category filter, no newsletter signup | 1.5h |
| /insights/:slug | string array content -> markdown | 2h |
| /work/:slug | no visuals on case study page, CTA links to /#contact | 1h |
| content-studio app | BRAND_CONTEXT to config, "soul-led" removal | 30m |
| life-os app | inline styles -> tailwind | 2h |

### tier 4: decide and act (old pages)
| page | action | time |
|------|--------|------|
| /careers | rebuild in modern design system or remove | 2h |
| /review | salvage intake questions, rebuild or remove | 1.5h |
| /process | redundant with /how-it-works. remove, add redirect | 15m |
| /start-here | remove or redirect to homepage | 15m |
| /blueprint | remove or redirect to /how-it-works | 15m |
| /studio-collaboration | remove or redirect to /contact | 15m |
| old ContentCreator.tsx | remove if ContentStudioApp replaces it | 15m |

### tier 5: nice to have
| page | issue | time |
|------|-------|------|
| /practitioners | strong page, minor CTA copy tweak | 15m |
| /schools | strong page, minor level label tweak | 15m |
| /retreats | strong page, consider ayahuasca mention risk | 15m |
| /communities | strong page, bilingual toggle copy | 15m |
| /organizations | remove "at scale" / "empowering", otherwise solid | 15m |
| /access | legal review of real AC names, massive component | 1h |

---

## time estimates

- **tier 1 (conversion blockers)**: ~3.5 hours
- **tier 2 (brand consistency)**: ~3.5 hours
- **tier 3 (quality)**: ~8 hours
- **tier 4 (old page cleanup)**: ~4.5 hours
- **tier 5 (polish)**: ~1.5 hours
- **total**: ~21 hours across all tiers

---

## legal/compliance flags

1. **/access page uses real Access Consciousness facilitator names** — Dr. Dain Heer, Gary Douglas, and ~50 real practitioners with certification levels. if astral studio is not formally affiliated, this is a trademark/IP risk.
2. **no privacy policy anywhere** — forms collect email via emailjs, content-studio collects email for unlock. GDPR/privacy compliance gap.
3. **/retreats mentions ayahuasca** — some payment processors flag this. worth reviewing.

---

## strongest pages (meet or exceed /makers quality bar)

1. /practitioners — interactive diagnostic, real objection handling, specific CTA
2. /schools — student progression visualization, real comparison
3. /retreats — offering stream selector, journey timeline, real comparison
4. /communities — platform layers, bilingual callout, real comparison
5. /makers — the quality bar itself

## weakest pages

1. /pricing — actively hurting conversion with contradictory information
2. /careers — wrong design system, stale content
3. /process — redundant, wrong design system
4. /start-here — wrong design system, references old pricing model
5. /blueprint — wrong design system, references old pricing model
