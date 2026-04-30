# audit: /process (ProcessPage)

## verdict: WRONG DESIGN SYSTEM + mostly redundant with /how-it-works.

### critical issue: old design system
- same as /careers — uses studio-bg, content-tertiary, studio-divider
- rectangular buttons, no rounded corners, no reveal animations
- no useDocumentMeta hook
- visually different from every other page on the site

### content issues

1. **redundant with /how-it-works** — both pages describe the same 3-step process (talk > build > stay). the /how-it-works version is better written and uses the current design system. this page adds nothing new.

2. **references "Digital Realignment Review"** — this is an older offering model (review > blueprint > collaboration). the current site uses a simpler model (talk > build > stay). these two models coexist on the site but aren't connected, creating confusion.

3. **no pricing** — the current site leads with "$0 upfront, % rev share." this page has no pricing information at all.

4. **CTA says "Request a Review"** — links to /review, which also uses the old design system. the user lands on two consecutive pages that look nothing like the homepage they came from.

### recommendation
- **remove this page entirely** or redirect to /how-it-works
- the /how-it-works page covers the same content better and in the correct design system
- if the "review > blueprint > collaboration" model is still active, integrate it into /how-it-works as a subsection
