# audit: /pricing (PricingPage)

## verdict: critical page with a major contradiction. needs urgent fix.

### what works
- 4-tier structure (boutique, service, membership, systems) is clear
- each tier has audience, includes list, and timeline
- "non-negotiables" section (you own everything, real code, no lock-in) is strong
- FAQ is comprehensive and well written
- "something bigger in mind?" escape hatch for custom projects is smart

### CRITICAL ISSUES

1. **pricing contradiction — "no upfront" vs actual build costs**
   - the hero says: "We take a % of what you make. No upfront. No fees."
   - but the tiers show: Boutique $2,000 / Service $5,000 / Membership $8,000 / Systems $12,000 as "build" costs
   - and each card also shows "$0 Upfront"
   - these directly contradict. which is it?
   
   if the build costs are the VALUE of the build (what they'd normally pay) but you're waiving it, say so:
   - **rewrite tier header**: show "Value: $8,000" as a struck-through number above "$0 Upfront" to communicate the waived cost
   
   if the build costs ARE charged, the hero is lying and needs to change immediately:
   - **rewrite hero**: "We build first and take a % of what you make. Your investment is aligned with your tier."

   **this is the single most important fix on the entire site. a pricing page that contradicts itself kills trust.**

2. **"Revenue-Aligned Option" section is confusing**
   - this section (lines 303-334) describes "part of my compensation tied to revenue" — but that's... the entire pricing model already? the rev share IS the compensation. this section reads like a different pricing model being introduced halfway through the page.
   - **recommendation**: remove this section entirely, or clarify that it's an ALTERNATIVE to the standard model for specific cases

3. **FAQ says "There's really no upfront cost? Right."** — but the tiers show build costs. see issue #1.

4. **FAQ says "a small % of revenue from dollar one"** — but the how-it-works page says "Above $5K/mo". pick one.

5. **no comparison to alternatives** — the audience pages compare to Etsy, Teachable, Airbnb etc. the pricing page should include a quick "what you'd pay elsewhere" comparison. even a single line: "A comparable custom build typically costs $15K-50K upfront + $500-2K/month retainer."

6. **og url: astralintegration.co** — rebrand

### structural fixes
- URGENT: resolve the upfront cost contradiction
- remove or rewrite the Revenue-Aligned Option section  
- add "what this replaces" cost comparison
- ensure FAQ answers match actual pricing model
