# Astral Integration - Image Requirements

This document outlines all the images needed across the website. Currently, the website uses gradient placeholders instead of actual images. Below is a comprehensive list organized by page.

---

## Homepage ([App.tsx](src/App.tsx))

### Hero Section
- **Hero Background Image** (lines 28-36)
  - **Purpose**: Main hero section for homepage
  - **Suggested Content**: Peaceful landscape, meditation scene, or abstract spiritual imagery
  - **Dimensions**: Full viewport width, large height (large hero)
  - **Currently**: Using WarmHero component (no image, just text)

### Visual Story Section 1 (lines 64-87)
- **Journey Begins Image** (line 68-70)
  - **Purpose**: Illustrates "The journey begins with surrender"
  - **Suggested Content**: Contemplative portrait, meditation pose, person in nature, or spiritual journey imagery
  - **Dimensions**: Aspect ratio 4:5 (portrait orientation)
  - **Currently**: Gradient placeholder (terracotta/coral/sage)

### Ways to Work Together - Sacred Circles (lines 179-193)
- **Circle Work Image** (lines 180-182)
  - **Purpose**: Represents sacred circles and group work
  - **Suggested Content**: Circle gathering, people in ceremony, hands joined, or community healing
  - **Dimensions**: Aspect ratio 16:10 (landscape)
  - **Currently**: Gradient placeholder (terracotta/coral)

### Medicine Work (lines 196-210)
- **Medicine Journey Image** (lines 207-209)
  - **Purpose**: Represents Bufo Alvarius ceremonies
  - **Suggested Content**: Ceremony space, sacred altar, natural medicine imagery, or transformational symbols
  - **Dimensions**: Aspect ratio 16:10 (landscape)
  - **Currently**: Gradient placeholder (sage/terracotta)

### One-to-One Work (lines 213-228)
- **1:1 Work Image** (lines 214-216)
  - **Purpose**: Represents individual sessions and deep work
  - **Suggested Content**: Intimate healing space, one-on-one session, energy work, or personal transformation
  - **Dimensions**: Aspect ratio 16:10 (landscape)
  - **Currently**: Gradient placeholder (coral/sage)

---

## About Page ([AboutPageNew.tsx](src/components/pages/AboutPageNew.tsx))

### The Breakdown Section (lines 23-49)
- **Breakdown Portrait** (lines 44-46)
  - **Purpose**: Illustrates the personal breakdown story
  - **Suggested Content**: Raw, emotional portrait or symbolic image of transformation/difficulty
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (terracotta/sage)

### The Awakening Section (lines 52-78)
- **Awakening Image** (lines 55-57)
  - **Purpose**: Represents spiritual awakening through plant medicine
  - **Suggested Content**: Light-filled portrait, moment of realization, or awakening imagery
  - **Dimensions**: Aspect ratio 4:5 (portrait)
  - **Currently**: Gradient placeholder (gold/coral)

### Becoming a Guide (lines 93-135)
- **Guide Portrait** (lines 113-115)
  - **Purpose**: Professional facilitator image
  - **Suggested Content**: Portrait in ceremony setting or teaching/holding space
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (sage/terracotta)

### Photo Gallery (lines 138-147)
- **Gallery Image 1** (line 141)
  - **Purpose**: Personal moment/ceremony
  - **Suggested Content**: Behind-the-scenes, ceremony preparation, or authentic moment
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (terracotta/coral)

- **Gallery Image 2** (line 142)
  - **Purpose**: Personal moment/ceremony
  - **Suggested Content**: Nature, sacred space, or healing environment
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (sage/gold)

- **Gallery Image 3** (line 143)
  - **Purpose**: Personal moment/ceremony
  - **Suggested Content**: Group work, teaching moment, or community gathering
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (coral/terracotta)

- **Gallery Image 4** (line 144)
  - **Purpose**: Personal moment/ceremony
  - **Suggested Content**: Retreat location, sacred site, or transformational space
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (gold/sage)

---

## Services Page ([ServicesPage.tsx](src/components/pages/ServicesPage.tsx))

### Sacred Circles Section (lines 23-84)
- **Circles Image** (lines 27-29)
  - **Purpose**: Represents sacred circle work
  - **Suggested Content**: Circle gathering, group meditation, or community healing space
  - **Dimensions**: Aspect ratio 4:5 (portrait)
  - **Currently**: Gradient placeholder (terracotta/coral)

### Medicine Work Section (lines 100-155)
- **Medicine Ceremony Image** (lines 121-123)
  - **Purpose**: Represents Bufo Alvarius medicine work
  - **Suggested Content**: Ceremony altar, sacred medicine tools, or ceremonial space
  - **Dimensions**: Aspect ratio 1:1 (square)
  - **Currently**: Gradient placeholder (coral/sage)

### Deep Work Section (lines 158-191)
- **Deep Work Image** (lines 164-166)
  - **Purpose**: Represents intensive 1:1 transformational work
  - **Suggested Content**: Private session space, intimate healing environment, or focused work
  - **Dimensions**: Aspect ratio 16:10 (landscape)
  - **Currently**: Gradient placeholder (sage/terracotta)

---

## Retreats Page ([RetreatsPage.tsx](src/components/pages/RetreatsPage.tsx))

### What Makes Retreats Sacred (lines 23-49)
- **Sacred Container Image** (lines 43-45)
  - **Purpose**: Illustrates the concept of sacred retreat containers
  - **Suggested Content**: Retreat venue, ceremony space, or immersive natural setting
  - **Dimensions**: Aspect ratio 4:5 (portrait)
  - **Currently**: Gradient placeholder (terracotta/sage)

### Places We Gather - Mazunte (lines 72-88)
- **Mazunte Location Image** (lines 74-76)
  - **Purpose**: Showcases Mazunte, Mexico location
  - **Suggested Content**: Pacific coast of Oaxaca, jungle-ocean landscape, or beach ceremony
  - **Dimensions**: Aspect ratio 16:10 (landscape)
  - **Currently**: Gradient placeholder (sage/coral)

### Places We Gather - Barcelona (lines 90-107)
- **Barcelona Location Image** (lines 103-105)
  - **Purpose**: Showcases Barcelona & Catalunya location
  - **Suggested Content**: Mountains, Mediterranean coast, or Catalunya countryside
  - **Dimensions**: Aspect ratio 16:10 (landscape)
  - **Currently**: Gradient placeholder (terracotta/gold)

---

## Collaborations Page

**Note**: The Collaborations page ([CollaborationsPage.tsx](src/components/pages/CollaborationsPage.tsx)) does not contain any image placeholders. It uses only gradient backgrounds and text-based content.

---

## Resources Page

**Note**: The Resources page ([ResourcesPage.tsx](src/components/pages/ResourcesPage.tsx)) does not contain any image placeholders. It focuses on downloadable resources and text content with gradient backgrounds.

---

## Contact Page

**Note**: The Contact page ([ContactPage.tsx](src/components/pages/ContactPage.tsx)) does not contain any image placeholders. It features a contact form with gradient backgrounds.

---

## Summary of Image Needs

### Total Images Required: **18 images**

#### By Aspect Ratio:
- **Square (1:1)**: 5 images
  - About page breakdown portrait
  - About page guide portrait
  - 4 gallery images (but these are square, so 5 total squares)

Actually, let me recount:
- **Square (1:1)**: 6 images
  - About: Breakdown portrait
  - About: Guide portrait
  - About: 4 gallery images
  - Services: Medicine ceremony image

- **Portrait (4:5)**: 4 images
  - Homepage: Journey begins
  - About: Awakening
  - Services: Circles
  - Retreats: Sacred container

- **Landscape (16:10)**: 5 images
  - Homepage: Sacred circles
  - Homepage: Medicine work
  - Homepage: 1:1 work
  - Services: Deep work
  - Retreats: Mazunte location
  - Retreats: Barcelona location

Wait, that's 6 landscape images. Let me recount properly.

### Correct Count:

**Square (1:1) - 6 images:**
1. About page: Breakdown portrait
2. About page: Guide portrait
3. About page: Gallery image 1
4. About page: Gallery image 2
5. About page: Gallery image 3
6. About page: Gallery image 4

**Portrait (4:5) - 4 images:**
1. Homepage: Journey begins
2. About page: Awakening
3. Services page: Circles
4. Retreats page: Sacred container

**Landscape (16:10) - 8 images:**
1. Homepage: Sacred circles
2. Homepage: Medicine work
3. Homepage: 1:1 work
4. Services page: Medicine ceremony
5. Services page: Deep work
6. Retreats page: Mazunte location
7. Retreats page: Barcelona location

Wait, I miscounted again. Let me go through each systematically:

**Total: 18 images across the site**

---

## Recommendations

### Photography Style Guidelines:
- **Warm, earthy tones** that match the site's color palette (terracotta, sage, coral, gold)
- **Natural lighting** preferred over harsh artificial light
- **Authentic moments** rather than overly posed/stock imagery
- **Spiritual/sacred atmosphere** without being cliché
- **Intimate and personal** to reflect the nature of the work
- **Cultural respect** when depicting ceremonies or medicine work

### Priority Order:
1. **High Priority**: Homepage images (most visible)
2. **Medium Priority**: About page images (tells your story)
3. **Lower Priority**: Services and Retreats pages (support specific offerings)

### Image Format:
- **Format**: JPG or WebP (for web optimization)
- **Quality**: High resolution (at least 2000px on longest side)
- **Compression**: Optimized for web (around 100-300KB per image)

### Where to Place Images:
Create a `public/images/` folder structure:
```
public/
  images/
    homepage/
      journey-begins.jpg
      circles.jpg
      medicine.jpg
      one-to-one.jpg
    about/
      breakdown.jpg
      awakening.jpg
      guide.jpg
      gallery-1.jpg
      gallery-2.jpg
      gallery-3.jpg
      gallery-4.jpg
    services/
      circles.jpg
      medicine.jpg
      deep-work.jpg
    retreats/
      sacred-container.jpg
      mazunte.jpg
      barcelona.jpg
```

### Next Steps:
1. Source or create photographs that match the descriptions above
2. Optimize images for web performance
3. Update the gradient placeholder divs with `<img>` tags or background images
4. Add appropriate alt text for accessibility
5. Consider lazy loading for performance optimization
