# Astral Integration Design System

## Color Palette

### Backgrounds
```
┌─────────────────────────────────────────────────────────────┐
│  LIGHT BACKGROUNDS                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  studio-bg: #FAF9F7        ████████  Warm off-white         │
│  (Main background)                   Almost paper-like      │
│                                                             │
│  studio-bgAlt: #F5F4F2     ████████  Slightly darker        │
│  (Alternating sections)              Subtle distinction     │
│                                                             │
│  studio-divider: #E6E4E1   ████████  Borders & separators   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  DARK BACKGROUNDS                                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  #232323                   ████████  Charcoal (not black)   │
│  (Dark sections)                     Grounded, calm         │
│                                                             │
│  #2C2C2C                   ████████  Form inputs on dark    │
│  (Input backgrounds)                 Slightly lighter       │
│                                                             │
│  #404040                   ████████  Borders on dark bg     │
│  (Dark borders)                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Text Colors
```
┌─────────────────────────────────────────────────────────────┐
│  ON LIGHT BACKGROUNDS                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  content-heading: #1F1F1F  ████████  Headings, strong text  │
│  content-primary: #1F1F1F  ████████  Body text, emphasis    │
│  content-secondary: #6B6B6B ████████  Supporting text       │
│  content-tertiary: #9A9A9A ████████  Metadata, captions     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ON DARK BACKGROUNDS                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  text-white                ████████  Headings on dark       │
│  text-white/90             ████████  Body text on dark      │
│  text-white/80             ████████  Secondary on dark      │
│  text-white/70             ████████  Supporting on dark     │
│  text-white/60             ████████  Labels on dark         │
│  text-white/50             ████████  Metadata on dark       │
│  text-white/40             ████████  Tertiary on dark       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Accent Colors
```
┌─────────────────────────────────────────────────────────────┐
│  accent: #3F4A5A           ████████  Slate blue             │
│  accent-gold: #C9A167      ████████  Warm gold (bullets)    │
└─────────────────────────────────────────────────────────────┘
```

---

## Page Section Flow

```
┌─────────────────────────────────────────────────────────────┐
│  HERO                                                       │
│  Background: studio-bg (#FAF9F7) - warm off-white           │
│  Text: content-heading (#1F1F1F) - near black               │
│                                                             │
│  ✓ High contrast: dark text on light background             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  THE SITUATION (Dark Section)                               │
│  Background: #232323 - charcoal                             │
│  Text: white, white/90, white/80                            │
│  Bullets: accent-gold (#C9A167)                             │
│                                                             │
│  ✓ Visual contrast break from light sections                │
│  ✓ Creates gravity and authority                            │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  WHAT WE DO                                                 │
│  Background: studio-bg (#FAF9F7) - warm off-white           │
│  Text: content-heading, content-secondary                   │
│                                                             │
│  ✓ Return to light, breathing room                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  WHO THIS IS FOR                                            │
│  Background: studio-bgAlt (#F5F4F2) - slightly darker       │
│  Text: content-heading, content-secondary, content-tertiary │
│                                                             │
│  ✓ Subtle alternation, not jarring                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  HOW WE WORK                                                │
│  Background: studio-bg (#FAF9F7)                            │
│  Text: content-heading, content-secondary                   │
│  Accent: border on diagnosis step                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  LIVING SYSTEMS                                             │
│  Background: studio-bgAlt (#F5F4F2)                         │
│  Text: content-primary, content-secondary                   │
│  Quote border: content-heading (#1F1F1F)                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  ABOUT                                                      │
│  Background: studio-bg (#FAF9F7)                            │
│  Text: content-primary, content-secondary, content-tertiary │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  CONTACT (Dark Section)                                     │
│  Background: #232323 - charcoal                             │
│  Text: white, white/90, white/70, white/60                  │
│  Form inputs: #2C2C2C background                            │
│  Form borders: #404040                                      │
│  Button: white bg, #232323 text                             │
│                                                             │
│  ✓ Strong ending with dark section                          │
│  ✓ Form inputs visible against dark bg                      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  FOOTER                                                     │
│  Background: studio-bg (#FAF9F7)                            │
│  Border: studio-divider (#E6E4E1)                           │
│  Text: content-heading, content-secondary, content-tertiary │
└─────────────────────────────────────────────────────────────┘
```

---

## Contrast Requirements

### Light Sections (bg: #FAF9F7)
| Element | Color | Hex | Contrast Ratio |
|---------|-------|-----|----------------|
| Headings | content-heading | #1F1F1F | ~16:1 ✓ |
| Body | content-primary | #1F1F1F | ~16:1 ✓ |
| Secondary | content-secondary | #6B6B6B | ~5.5:1 ✓ |
| Tertiary | content-tertiary | #9A9A9A | ~3.5:1 ✓ |

### Dark Sections (bg: #232323)
| Element | Color | Opacity | Contrast Ratio |
|---------|-------|---------|----------------|
| Headings | white | 100% | ~12:1 ✓ |
| Body | white | 90% | ~11:1 ✓ |
| Secondary | white | 80% | ~9:1 ✓ |
| Supporting | white | 70% | ~8:1 ✓ |
| Labels | white | 60% | ~6:1 ✓ |
| Metadata | white | 50% | ~5:1 ✓ |

---

## Form Styling on Dark Background

```
┌─────────────────────────────────────────────────────────────┐
│  CONTACT FORM                                               │
│  Section bg: #232323                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Label                     text-white/60                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Input field                                         │   │
│  │  Background: #2C2C2C (slightly lighter than section) │   │
│  │  Border: #404040 (visible but subtle)                │   │
│  │  Text: white                                         │   │
│  │  Placeholder: white/40                               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Button                                              │   │
│  │  Background: white                                   │   │
│  │  Text: #232323 (matches section bg)                  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Typography Scale

```
display:     3.5rem (56px)  - Page title
display-sm:  2.5rem (40px)  - Section headings (mobile)
h1:          2rem   (32px)  - Section headings (desktop)
h2:          1.75rem (28px) - Subsection headings
h3:          1.25rem (20px) - Card titles
body:        1.0625rem (17px) - Body text
body-sm:     0.9375rem (15px) - Secondary body
meta:        0.8125rem (13px) - Labels, metadata
```

---

## Key Principles

1. **Warm, not cold** - Off-white (#FAF9F7) feels like paper, not clinical
2. **Charcoal, not black** - #232323 is grounded and calm, not harsh
3. **Contrast through rhythm** - Dark sections create visual breaks
4. **Text legibility** - All text passes WCAG AA contrast requirements
5. **Subtle alternation** - bgAlt (#F5F4F2) provides gentle section separation
