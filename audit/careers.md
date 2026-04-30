# audit: /careers (CareersPage)

## verdict: WRONG DESIGN SYSTEM. needs full redesign to match current site.

### critical issue: old design system
- uses `bg-studio-bg` instead of `bg-dark-bg`
- uses `text-content-tertiary` instead of `text-content-muted`
- uses `border-studio-divider` instead of `border-border`
- rectangular buttons instead of rounded-full pills
- no serif headings, no reveal animations, no accent line decorators
- no useDocumentMeta hook — uses raw document.title
- visually this page looks like a completely different website

### issues beyond design

1. **"Notion workspace (source of truth)"** — naming internal tools on a public hiring page feels premature for a studio this size

2. **compensation is vague** — "Founding role with %-based upside. Long-term orientation." — what does this mean? equity? rev share? be more specific or remove.

3. **4 roles listed but no clear traction signal** — listing "founding" roles implies the company is very early. combined with the "what we don't offer" section (no full-time employment, no hourly work), this reads as "we can't afford to pay you but we want your best work." honest, but not compelling.

4. **no social proof** — no mention of existing clients, revenue, or traction. a careers page for a studio that hasn't proven product-market fit should at least link to the portfolio.

5. **"Ambassadors & Connectors" role** — "cash-based percentage per engagement or referral" — this is an affiliate program, not a role. rename or move to a separate page.

### recommendation
- redesign this page using the current dark theme + accent system
- add useDocumentMeta
- add portfolio/work links as social proof
- tighten role descriptions
- be more specific about compensation or remove the vague "%-based upside"
