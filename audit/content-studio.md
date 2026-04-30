# audit: /tools/content-studio (ContentStudioLanding + ContentStudioApp)

## verdict: best-built tool page. tailwind refactor already done. BRAND_CONTEXT still needs work.

### what works
- landing page uses shared ToolHero + FeatureGrid components (consistent)
- app uses tailwind classes throughout — this is the refactored version of the old ContentCreator
- freemium model (5 free/day, email unlock for unlimited) via useFreemium hook is smart lead-gen
- example prompts are specific and useful
- content type + pillar selectors are well-designed
- history sidebar with click-to-restore is functional
- AstralBranding component integrated

### issues

1. **BRAND_CONTEXT hardcoded in component** (lines 21-41) — same issue as ContentCreator. this should be in a config file. it also contains:
   - "soul-led businesses" — same register mismatch
   - `Use "I" not "we"` — hasn't been resolved site-wide yet
   - **fix**: move to config, update once voice decision is made

2. **og url: astralintegration.co** — rebrand incomplete (ContentStudioLanding line 15)

3. **emoji icons on content types** — clipboard, carousel, film, phone, lightbulb. inconsistent with emoji-free main site.

4. **old ContentCreator.tsx still exists** — ContentStudioApp is the refactored replacement, but ContentCreator.tsx (with inline styles) is still in the codebase. if it's deprecated, remove it to avoid confusion.

5. **no main site navigation** — only "back" link to landing page. no way to reach /, /work, /pricing.

6. **"Generate Content" button glyph** — uses sparkle character. minor, but adds visual noise vs the clean buttons elsewhere.

7. **unlock modal says "unlock free"** — confusing. user already knows the tool is free. the modal is about exchanging email for unlimited access.
   - **rewrite button**: "get unlimited access"
   - **rewrite modal copy**: "Enter your email and we'll unlock unlimited generations."

8. **no confirmation of what happens with email** — says "no spam" but doesn't say what the email IS used for. privacy gap.

### copy fixes
- update og url domain
- move BRAND_CONTEXT to config
- remove "soul-led" from brand context
- "unlock free" -> "get unlimited access"
- add brief email usage explanation
