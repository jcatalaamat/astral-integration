# audit: /work/:slug (CaseStudyPage)

## verdict: clean template page. works well.

### what works
- gradient hero per case study is distinctive
- back link to /work is well placed
- challenge > decisions > built structure matches /work page
- prev/next navigation is smooth
- CTA at bottom is appropriate

### issues

1. **content is all single paragraphs** — challenge, decisions, and built are each rendered as one `<p>` tag. for longer case studies, this will become a wall of text. consider supporting markdown or at least paragraph breaks within each section.

2. **no screenshots or visuals** — the case study page has no images, no iframe previews, no mockups. it's text-only. the /work page has live previews, but the dedicated case study page doesn't. this is a missed opportunity.
   - **fix**: add the live iframe preview (or at least a screenshot) to the case study hero

3. **CTA links to /#contact** — should link to /contact for cleaner navigation

4. **og url: astralintegration.co** — rebrand

### copy fixes
- CTA href: `/#contact` → `/contact`
