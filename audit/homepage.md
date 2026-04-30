# audit: / (HomePage)

## verdict: good foundation, but several issues vs makers quality bar

### what works
- rotating word animation in hero is strong brand moment
- "5 doors" section is excellent UX — clear audience routing
- emotional bridge section ("you inspired hundreds of people this weekend") is the strongest copy on the site
- live preview iframes on case studies look premium
- about section with photo + short bio is well placed
- pricing summary (5-15%, 1-12 weeks) is clear

### issues

1. **hero subhead is too vague**
   - current: "We build the digital infrastructure. No upfront. We take a % of what you make."
   - this is fine but generic. the second paragraph ("Send us your messy notes...") is much stronger and should lead.
   - **rewrite hero subhead**: "Send us your messy notes — a voice memo, a screenshot of your Instagram bio. We'll research your work, build your platform, wire your payments, and hand you the keys."
   - move the "no upfront / % of what you make" to a secondary line beneath

2. **"fractional CTO" line at bottom of hero is misplaced**
   - "Former CTO. Senior full-stack engineer. Your long-term technical partner." — this reads like a linkedin headline dropped into a landing page. move to the about section or remove entirely. the hero should be about THEM, not jordi.

3. **"I Build For" section header**
   - current: "Find your starting point."
   - this is ok but passive. 
   - **rewrite**: "Different work. Different architecture." (already used as body text — make it the h2)

4. **5 doors descriptions are too compressed**
   - "Healers, coaches, facilitators running on scattered tools" — good
   - "Directories, events, and local platforms" — too vague for communities. 
   - **rewrite communities**: "The digital backbone for real-world communities — events, directory, classifieds"

5. **how it works section is too long for a homepage**
   - 5 bullet points of text after the 3-step cards is excessive. the dedicated /how-it-works page exists. trim to just the 3 cards + pricing stats + one line + CTA.
   - "Some people call this a fractional CTO. I just call it partnership." — this line is strong, keep it. cut the other 4 bullet points.

6. **"I" vs "We" voice is split**
   - hero: "We build..." / "We take a %..."
   - how it works: "I don't build and disappear. I build, maintain..."
   - about: "I spent a decade..."
   - pick one. recommendation: "I" for the whole site. it's a solo founder studio. "we" sounds like a larger company that doesn't exist.

7. **contact form requires message field** — homepage is general entry point. message shouldn't be required. practitioners/makers pages correctly make it optional.

8. **og url: astralintegration.co** — rebrand incomplete

### copy rewrites

**hero subhead** (replace lines 113-119):
```
Send us your messy notes — a voice memo, a Google Doc, 
a screenshot of your Instagram bio. We'll research your work, 
build your platform, wire your payments, and hand you the keys. 
No upfront cost. We take a % of what you make.
```

**communities door description**:
```
The digital backbone for towns and networks — events, directory, classifieds
```

### structural fixes
- remove the 5 bullet points in how-it-works section (lines 311-315), keep only the "fractional CTO" line
- make message field optional in contact form
- update all astralintegration.co references
