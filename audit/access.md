# audit: /access (AccessPage)

## verdict: impressive technical demo. but page identity is confusing.

### what works
- fully interactive prototype with tabs (home, facilitators, classes, journey, dashboard, resources)
- 52 facilitators with real-feeling data, geo coordinates, certifications
- class discovery with type/region filtering
- student journey visualization
- core tools and key concepts content is well structured
- this is the most technically ambitious page on the site

### issues

1. **page purpose is unclear** — is this:
   a. a demo of what astral studio can build for organizations?
   b. an actual prototype for Access Consciousness specifically?
   c. a lead gen tool for the /organizations page?
   
   the page has no hero, no framing, no context. it drops you straight into the app. a first-time visitor clicking from /organizations would be confused about what they're looking at.
   
   **fix**: add a brief header or banner: "architectural prototype — unified infrastructure for a global facilitator network. built as a proof of concept for organizations operating at scale."

2. **access consciousness branding is baked in** — the data references Access Bars, ACAF, CF, BF certifications, Dr. Dain Heer, Gary Douglas by name. this is either:
   - a pitch deck for access consciousness (fine, but then it shouldn't be public)
   - a generic demo (then remove the real names and brands)
   
   having real Access Consciousness leaders and certification names on a public demo page is risky. they might not have consented.
   
   **fix**: either get permission from Access Consciousness, or anonymize the data (use generic names, generic certification levels)

3. **page is ~31,000 tokens** — this is a massive component. it probably loads slow and impacts core web vitals. consider lazy loading or code splitting.

4. **no meta description using useDocumentMeta** — the page uses the hook but check if the description is adequate for SEO. the title is fine.

5. **no CTA at the bottom** — this is a demo page that should convert to a conversation. add a section: "want this for your organization?" with a link to /organizations or /contact

### structural fixes
- add framing header explaining what this is
- anonymize or get permission for real names/brands
- add conversion CTA at bottom
- consider code splitting for performance
