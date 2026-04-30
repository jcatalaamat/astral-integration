# audit: /tools/life-os (LifeOSLanding + LifeOSApp)

## verdict: nicely built standalone tool. inline styles on the app break consistency.

### what works
- landing page uses shared ToolHero + FeatureGrid components (consistent with other tool landings)
- 3-step "how it works" is clear and useful
- app is genuinely functional: localStorage persistence, categories, priority, mobile sidebar, edit-in-place
- "nothing here. quiet mind." empty state is good tone
- greeting changes by time of day — nice touch
- AstralBranding component at bottom of app

### issues

1. **app is entirely inline styles** — same problem as old ContentCreator. zero tailwind classes in LifeOSApp.tsx. visually disconnected, hard to maintain.
   - **fix**: refactor to tailwind tokens (bg-dark-bg, text-content-primary, border-border, etc.)

2. **og url: astralintegration.co** — rebrand incomplete (LifeOSLanding line 15)

3. **description says "soul-led humans"** — same register mismatch as /tools page. nobody else on the site uses "soul-led."
   - **rewrite**: "A simple, beautiful task manager. Organize your life across 6 key areas. Free, offline, your data stays local."

4. **emoji icons on categories** — inbox uses lightning bolt, ideas uses sparkle, home uses house glyph. the rest of the site is emoji-free.
   - **fix**: replace with simple text glyphs or the accent-colored dots used elsewhere

5. **no navigation to main site** — the app only has "back to info" link to the landing page. no way to reach /, /work, /pricing.

6. **landing page mini preview is hardcoded** — the "see it in action" section shows 3 static items instead of embedding the actual app. not a bug, but the preview could link to the app more prominently.

7. **localStorage-only persistence** — acceptable for a free tool, but no warning that clearing browser data loses everything. add a one-line note like "your data lives in this browser only."

### copy fixes
- remove "soul-led" from description
- update og url domain
- add data persistence disclaimer
