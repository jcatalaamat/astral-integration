# Astral Integration Design System

## Design Tokens

### Backgrounds
```
┌─────────────────────────────────────────────────────────────┐
│  LIGHT BACKGROUNDS                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  studio-bg:        #FAF9F7  ████████  Warm off-white        │
│  studio-bgAlt:     #F5F4F2  ████████  Alternating sections  │
│  studio-divider:   #E6E4E1  ████████  Borders & separators  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  DARK BACKGROUNDS                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  studio-dark:       #232323  ████████  Charcoal (not black) │
│  studio-darkAlt:    #2C2C2C  ████████  Form inputs on dark  │
│  studio-darkBorder: #404040  ████████  Borders on dark bg   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Text Colors
```
┌─────────────────────────────────────────────────────────────┐
│  ON LIGHT BACKGROUNDS                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  content-primary:   #1F1F1F  ████████  Headings & body      │
│  content-secondary: #6B6B6B  ████████  Supporting text      │
│  content-tertiary:  #7F7F7F  ████████  Metadata, captions   │
│                               (WCAG AA ~4.6:1)              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ON DARK BACKGROUNDS (opacity ladder)                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  white      (100%)  ████████  Headings                      │
│  white/90          ████████  Body text                      │
│  white/80          ████████  Secondary                      │
│  white/70          ████████  Supporting                     │
│  white/60          ████████  Labels                         │
│  white/50          ████████  Metadata                       │
│  white/40          ████████  Placeholders                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Accent Colors
```
┌─────────────────────────────────────────────────────────────┐
│  accent:      #3F4A5A  ████████  Slate blue (focus states)  │
│  accent-gold: #C9A167  ████████  Gold (rare, bullets only)  │
└─────────────────────────────────────────────────────────────┘

Usage rules:
- Gold: ONLY for the 3 truths in The Situation section
- Slate: Focus states + Diagnosis step border
- No accent links (use underlined text)
```

---

## Section Layout: Light vs Dark

The page uses an intentional rhythm of light and dark sections.
- **Two dark sections only** (The Situation + Contact) create bookends
- **Light sections alternate** between studio-bg and studio-bgAlt
- **Dark = gravity / diagnosis / threshold** (not aesthetic drama)
- **Charcoal (#232323), not black** = grounded, calm, readable

```
┌──────────────────────────────────────────────────┐
│  HERO                                            │
│  bg: studio-bg (#FAF9F7)                         │
│  WHY: Welcoming entry, high legibility           │
│       Establishes tone: calm + professional      │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  THE SITUATION (DARK)                            │
│  bg: studio-dark (#232323)                       │
│  WHY: Creates gravity + authority                │
│       First contrast break after the hero        │
│       Gold accents reserved for 3 truths         │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  WHAT WE DO                                      │
│  bg: studio-bg (#FAF9F7)                         │
│  WHY: Return to light = breathing room           │
│       Keeps the page from feeling heavy          │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  WHO THIS IS FOR                                 │
│  bg: studio-bgAlt (#F5F4F2)                      │
│  WHY: Subtle alternation, not jarring            │
│       Supports list scanning                     │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  HOW WE WORK                                     │
│  bg: studio-bg (#FAF9F7)                         │
│  WHY: Neutral clarity for process                │
│       Diagnosis step gets the only emphasis      │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  LIVING SYSTEMS                                  │
│  bg: studio-bgAlt (#F5F4F2)                      │
│  WHY: Quiet contrast to mark principles          │
│       Prevents monotony without drama            │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  ABOUT                                           │
│  bg: studio-bg (#FAF9F7)                         │
│  WHY: Return to neutral for identity + trust     │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  CONTACT (DARK)                                  │
│  bg: studio-dark (#232323)                       │
│  WHY: Strong ending / anchors the page           │
│       Signals threshold + intentional access     │
│       Form remains fully legible on dark         │
└──────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│  FOOTER                                          │
│  bg: studio-bg (#FAF9F7)                         │
│  WHY: Releases the page back into light          │
│       Keeps the brand from feeling heavy         │
└──────────────────────────────────────────────────┘
```

---

## Contrast Requirements

### Light Sections (bg: #FAF9F7)
| Element | Token | Hex | Contrast |
|---------|-------|-----|----------|
| Headings | content-primary | #1F1F1F | ~16:1 ✓ |
| Body | content-primary | #1F1F1F | ~16:1 ✓ |
| Secondary | content-secondary | #6B6B6B | ~5.5:1 ✓ |
| Tertiary | content-tertiary | #7F7F7F | ~4.6:1 ✓ |

### Dark Sections (bg: #232323)
| Element | Color | Opacity | Contrast |
|---------|-------|---------|----------|
| Headings | white | 100% | ~12:1 ✓ |
| Body | white | 90% | ~11:1 ✓ |
| Secondary | white | 80% | ~9:1 ✓ |
| Supporting | white | 70% | ~8:1 ✓ |
| Labels | white | 60% | ~6:1 ✓ |
| Metadata | white | 50% | ~5:1 ✓ |

---

## Typography Scale

```
display:    3.5rem (56px)  - Hero headline only (1x per page)
h1:         2.5rem (40px)  - Section headings (desktop)
h1-sm:      2rem   (32px)  - Section headings (mobile)
h2:         1.75rem (28px) - Subsection headings
h3:         1.25rem (20px) - Card / step titles
body:       1.0625rem (17px)
body-sm:    0.9375rem (15px)
meta:       0.8125rem (13px)
```

**Rule:** No more than 2 sizes per section (prevents "designed doc" syndrome).

---

## Interactive States

### Button (Dark Section)
```
┌─────────────────────────────────────────────────────────────┐
│  Default:                                                   │
│    bg: white                                                │
│    text: studio-dark (#232323)                              │
├─────────────────────────────────────────────────────────────┤
│  :hover    → bg-white/90    text-studio-dark                │
│  :active   → bg-white/80    text-studio-dark                │
│  :focus    → ring-2 ring-white/50 ring-offset-2             │
│             ring-offset-studio-dark                         │
│  :disabled → opacity-50 cursor-not-allowed                  │
└─────────────────────────────────────────────────────────────┘
```

### Form Inputs (Dark Section)
```
┌─────────────────────────────────────────────────────────────┐
│  Default:                                                   │
│    bg: studio-darkAlt (#2C2C2C)                             │
│    border: studio-darkBorder (#404040)                      │
│    text: white                                              │
│    placeholder: white/40                                    │
├─────────────────────────────────────────────────────────────┤
│  :focus → border-accent (#3F4A5A)                           │
│          ring-2 ring-accent/30                              │
│                                                             │
│  :error → border-red-400                                    │
│          ring-2 ring-red-400/20                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Principles

1. **Warm, not cold** - Off-white (#FAF9F7) feels like paper, not clinical
2. **Charcoal, not black** - #232323 is grounded and calm, not harsh
3. **Contrast through rhythm** - Dark sections create visual breaks
4. **Text legibility** - All text passes WCAG AA requirements
5. **Subtle alternation** - bgAlt (#F5F4F2) provides gentle section separation
6. **Accents are rare** - If accent appears more than once per viewport, it's overused
