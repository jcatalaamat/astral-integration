# audit: /start-here (StartHerePage)

## verdict: WRONG DESIGN SYSTEM + conflicts with current pricing model.

### critical issue: old design system
- studio-bg, content-tertiary, studio-divider — same as careers, process
- no useDocumentMeta hook
- visually jarring if navigating from any modern page

### content issues

1. **references "Digital Realignment Review" as the entry point** — the current site's entry point is "book a call" (calendly) or "send a message" (contact form). this page routes users to a paid review (€450) which contradicts the "$0 upfront" positioning everywhere else.

2. **content loaded from `../../content` module** — all text is in a separate content file (startHereContent). this makes it harder to audit inline. but the structure (hero > review > process > who for > who not for > what's next) is a valid sales page structure.

3. **CTA links to /review** — which is also in the old design system. creates a chain of visually inconsistent pages.

4. **no connection to audience pages** — the current site has 6 audience doors (makers, practitioners, schools, retreats, communities, organizations). this page doesn't reference any of them.

### recommendation
- **remove this page** or redirect to homepage
- the homepage now serves the "start here" function with the 5-doors section
- if the review offering is still active, add it as a section on /how-it-works rather than maintaining a separate page in the old design
