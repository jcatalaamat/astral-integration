# audit: /insights/:slug (BlogPostPage)

## verdict: functional blog template. some missing features.

### what works
- back link to /insights
- metadata (category, read time, date) is well formatted
- author card with photo is personal
- next post navigation encourages reading

### issues

1. **content is an array of strings** — each paragraph is a separate string in `post.content[]`. this means no headings, no bold text, no links, no lists within blog posts. for meaningful insights content, this will be too limiting.
   - **fix**: switch to markdown rendering (react-markdown or similar) so blog content can include subheadings, lists, and links

2. **no share buttons** — no way to share on twitter, linkedin, etc. for a professional insights page, this is expected.

3. **no reading progress indicator** — nice-to-have, not critical

4. **CTA is identical to every other page** — "ready to talk?" / "start a conversation"
   - **rewrite**: "have a question about this? reach out." with link to /contact

5. **og url: astralintegration.co** — rebrand

### structural fixes
- add markdown rendering for blog content
- add social share buttons
