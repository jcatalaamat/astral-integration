# audit: /how-it-works (HowItWorksPage)

## verdict: functional but redundant. most of this content exists on the homepage already.

### what works
- 3-phase structure (we talk, I build, I stay) is clear
- bullet details under each phase are helpful
- FAQ accordion is well implemented
- investment section layout (4 cards) is clean

### issues

1. **this page is largely redundant with the homepage how-it-works section** — the homepage already has the 3 steps, pricing stats, and a CTA. this dedicated page adds details and FAQ, but a first-time visitor will see the same content twice if they navigate from homepage to this page.
   - **recommendation**: either make this page significantly different from the homepage version (add client testimonials, timeline mockup, or video), or remove the homepage how-it-works section and just link here.

2. **investment section says "Above $5K/mo"** — line 46: `{ label: 'Revenue share', value: '5-15%', note: 'Above $5K/mo · scoped to scope' }`. this $5K/mo threshold doesn't appear anywhere else on the site. is there a minimum revenue threshold before the rev share kicks in? the pricing page says "from dollar one." these contradict.
   - **fix**: remove "Above $5K/mo" or explain the threshold clearly

3. **"scoped to scope"** — this phrase appears on multiple pages and means nothing. it's filler.
   - **rewrite**: "based on what we build" or "matched to project complexity"

4. **FAQ answers are long** — each answer is a full paragraph. for a FAQ, shorter is better. trim each to 2-3 sentences max.

5. **CTA links to /#contact** — this creates a full page navigation + scroll. consider linking to /contact instead for a cleaner experience.

6. **"The model." as an h2** — too terse. doesn't communicate anything.
   - **rewrite**: "What it costs."

7. **og url: astralintegration.co** — rebrand

### copy fixes
- remove "Above $5K/mo" from investment card
- "scoped to scope" → "based on what we build"  
- "The model." → "What it costs."
- trim FAQ answers to 2-3 sentences each
