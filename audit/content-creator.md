# audit: /content-creator (ContentCreator)

## verdict: functional tool app. inline styles break consistency.

### what works
- content type selector (caption, carousel, reel, story, week of ideas) is comprehensive
- pillar selector is smart
- example prompts are helpful and specific
- history sidebar is useful
- copy generation via /api/generate is the right approach

### issues

1. **entirely inline styles** — this component uses zero tailwind classes. every style is a `style={{}}` object. this makes it visually disconnected from the rest of the site and unmaintainable.
   - **fix**: refactor to use the site's tailwind classes (bg-dark-bg, text-content-primary, border-border, etc.)

2. **brand context says "Use 'I' not 'we'"** — but the main site hasn't decided on I vs we yet. once that's resolved, update the BRAND_CONTEXT constant.

3. **"AI-Powered Content for Soul-Led Businesses"** — same "soul-led" issue as /tools
   - **rewrite**: "content tools for astral studio"

4. **emoji icons on content types** — uses clipboard, carousel, film, phone, lightbulb emojis. inconsistent with emoji-free design elsewhere.

5. **no navigation back to main site** — no header links to /, /work, /pricing etc.

6. **BRAND_CONTEXT is hardcoded** — line 14-34. this should be configurable or at least in a separate file, not embedded in the component.

### structural fixes
- refactor inline styles to tailwind
- add navigation header
- move BRAND_CONTEXT to config file
