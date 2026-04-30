# audit: /work (WorkPage)

## verdict: solid portfolio page. well structured.

### what works
- filter pills by audience type — excellent UX
- live iframe previews with browser chrome look premium
- challenge > decisions > built structure per case study is the right framework
- fullscreen modal with side panel info is well done
- "the decisions behind the builds" headline frames it as engineering, not marketing

### issues

1. **hero copy is slightly too self-referential**
   - "This is how I think about infrastructure" — ok, but the visitor doesn't care about your thinking process yet. they care about results.
   - **rewrite**: "Each project below: the challenge, the architecture, what was built. Real problems, real decisions, real infrastructure."

2. **CTA at bottom is identical to homepage**
   - "Your work is next." / "If you've created something original..." — this exact copy appears on both pages.
   - **rewrite CTA h2**: "Got a project like these?"
   - keep the body text

3. **no results indicator on filter** — when a filter returns 0 results, the empty state is just "No case studies in this category yet." — add a "clear filter" button or link back to All

4. **case study cards don't show client category** — the pill shows category in the header but not in the card grid on homepage. on /work page the cards do show it inline. consistent.

5. **og url: astralintegration.co** — rebrand

### copy rewrites

**hero body** (replace lines 84-85):
```
Each project: the challenge, the key architecture decisions, 
and what was built. Real problems, custom infrastructure, 
long-term partnership.
```

### structural fixes
- add "clear filter" link to empty state
- update og url
