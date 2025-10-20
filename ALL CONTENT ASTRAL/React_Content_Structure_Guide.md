# React/Next.js Content Structure Guide
## AI-Friendly, Easy to Maintain, Scalable

---

## Philosophy

**Keep content separate from code**
- All text, images, and data in dedicated content files
- AI can edit content without touching React components
- Non-developers can update content easily
- Single source of truth for all website copy

**Use simple, readable formats**
- JSON for structured data
- Markdown for long-form content
- TypeScript for type safety
- Clear naming conventions

---

## Recommended Project Structure

```
astral-website/
├── public/
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── testimonials/
│       └── about/
│
├── src/
│   ├── app/                          # Next.js 14 app directory
│   │   ├── page.tsx                  # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── inner-ascend/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   └── CircleCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   │
│   ├── content/                      # 🎯 ALL CONTENT HERE
│   │   ├── site.ts                   # Site-wide config
│   │   ├── navigation.ts             # Menu items
│   │   ├── pages/
│   │   │   ├── home.ts               # Homepage content
│   │   │   ├── about.ts              # About page content
│   │   │   ├── services.ts           # Services content
│   │   │   ├── inner-ascend.ts       # Community content
│   │   │   └── contact.ts            # Contact page content
│   │   ├── offerings/
│   │   │   ├── circles.ts            # All circles data
│   │   │   ├── sessions.ts           # 1:1 sessions data
│   │   │   ├── medicine.ts           # Medicine work data
│   │   │   └── trainings.ts          # Trainings data
│   │   ├── testimonials.ts           # All testimonials
│   │   └── blog/
│   │       └── posts/                # Individual blog posts (markdown)
│   │
│   ├── lib/
│   │   ├── types.ts                  # TypeScript types
│   │   └── utils.ts                  # Utility functions
│   │
│   └── styles/
│       └── globals.css
│
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Content File Structure

### 1. Site Config (`src/content/site.ts`)

```typescript
/**
 * SITE CONFIGURATION
 *
 * Global site settings, branding, and metadata.
 * Update this file to change site-wide information.
 */

export const siteConfig = {
  name: "Astral",
  title: "Astral | Guiding Souls on a Journey of the Self",
  description: "Mentorship, Healing, Medicine Work, and Spiritual Guidance with Astral. Based in Mazunte, Mexico and Barcelona, Spain.",

  // Contact Info
  contact: {
    email: "astral@innerascend.com",
    phone: "+52 XXX XXX XXXX", // Optional
    locations: [
      "Mazunte, Oaxaca, Mexico",
      "Barcelona, Catalunya, Spain"
    ]
  },

  // Social Links
  social: {
    instagram: "https://instagram.com/inner_ascend_dao",
    discord: "https://discord.gg/innerascend",
    facebook: "", // Optional
    youtube: "", // Optional
  },

  // Brand Colors
  brand: {
    colors: {
      primary: "#2C1654",      // Deep Indigo
      secondary: "#D4AF37",    // Gold
      accent: "#9CAF88",       // Sage Green
      neutral: "#F5F5F0",      // Off-White
      dark: "#2D2D2D"          // Charcoal
    }
  },

  // SEO
  seo: {
    keywords: [
      "energy healer",
      "bufo ceremony",
      "medicine integration",
      "spiritual coach",
      "family constellations",
      "men's circle",
      "conscious community"
    ]
  }
}
```

---

### 2. Navigation (`src/content/navigation.ts`)

```typescript
/**
 * NAVIGATION CONFIGURATION
 *
 * Defines all navigation menus, links, and CTAs.
 * Add/remove menu items here.
 */

export const navigation = {
  // Main Navigation
  main: [
    { label: "About", href: "/about" },
    {
      label: "Work With Me",
      href: "/services",
      dropdown: [ // Optional dropdown
        { label: "Circles & Groups", href: "/services#circles" },
        { label: "1:1 Sessions", href: "/services#sessions" },
        { label: "Medicine Work", href: "/services#medicine" },
        { label: "Trainings", href: "/services#trainings" }
      ]
    },
    { label: "Inner Ascend", href: "/inner-ascend" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" }
  ],

  // Footer Navigation
  footer: {
    workWithMe: [
      { label: "Circles & Groups", href: "/services#circles" },
      { label: "1:1 Sessions", href: "/services#sessions" },
      { label: "Medicine Work", href: "/services#medicine" },
      { label: "Trainings", href: "/services#trainings" }
    ],
    community: [
      { label: "Inner Ascend", href: "/inner-ascend" },
      { label: "Blog", href: "/blog" },
      { label: "Free Resources", href: "/resources" },
      { label: "Testimonials", href: "/testimonials" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Disclaimers", href: "/disclaimers" }
    ]
  },

  // Call-to-Action Buttons
  ctas: {
    primary: {
      label: "Begin Your Journey",
      href: "/contact"
    },
    secondary: {
      label: "Join Community",
      href: "/inner-ascend"
    }
  }
}
```

---

### 3. Homepage Content (`src/content/pages/home.ts`)

```typescript
/**
 * HOMEPAGE CONTENT
 *
 * All text, headings, and structured data for the homepage.
 * Update this file to change homepage copy.
 */

export const homeContent = {
  // Hero Section
  hero: {
    heading: "GUIDING SOULS ON A JOURNEY OF THE SELF",
    subheading: "Mentorship | Healing | Medicine Work | Awakening",
    cta: {
      label: "Begin Your Journey",
      href: "/contact"
    },
    backgroundImage: "/images/hero/main.jpg",
    backgroundVideo: "/videos/hero-meditation.mp4" // Optional
  },

  // Introduction Section
  introduction: {
    heading: "I'M ASTRAL",
    body: `I guide people to their inner sense of self-realization.

For over a decade, I've held space for thousands of souls navigating the depths of transformation—through energy healing, medicine integration, family constellations, and embodied practices.

My work is a crossing between coaching, teaching, energy healing, therapy, and mysticism. I help you become the self you haven't dared to be.

Based between Mazunte, Mexico and Barcelona, Spain, I work with individuals, groups, and communities ready to shed the old and step into their divine essence.`,
    image: "/images/about/astral-portrait.jpg",
    cta: {
      label: "More About My Journey →",
      href: "/about"
    }
  },

  // Who This Is For
  whoThisIsFor: {
    heading: "THIS WORK IS FOR YOU IF...",
    items: [
      {
        icon: "lotus", // Reference to icon component
        heading: "You're feeling the call to awaken",
        description: "You know there's more. You've been searching, seeking, and you're ready to stop learning ABOUT transformation and start LIVING it."
      },
      {
        icon: "phoenix",
        heading: "You're ready to shed the old",
        description: "Patterns, trauma, conditioning—you're done carrying what isn't yours. You're ready to burn it down and rise new."
      },
      {
        icon: "heart",
        heading: "You want to embody your purpose",
        description: "Not just know it intellectually, but LIVE it. Walk it. Breathe it. You're here to serve something bigger than ego."
      }
    ]
  },

  // Pathways to Transformation
  pathways: {
    heading: "PATHWAYS TO TRANSFORMATION",
    cards: [
      {
        title: "Circles & Groups",
        description: "Join a sacred container for ongoing support, healing, and growth.",
        image: "/images/services/circles.jpg",
        cta: {
          label: "Explore Circles",
          href: "/services#circles"
        }
      },
      {
        title: "1:1 Healing & Coaching",
        description: "Deep, personalized work for those ready for intensive transformation.",
        image: "/images/services/sessions.jpg",
        cta: {
          label: "Book a Session",
          href: "/services#sessions"
        }
      },
      {
        title: "Medicine Work",
        description: "Bufo Alvarius ceremonies and integration support for ego dissolution.",
        image: "/images/services/medicine.jpg",
        cta: {
          label: "Learn About Medicine",
          href: "/services#medicine"
        }
      },
      {
        title: "Trainings & Apprenticeships",
        description: "Become a practitioner, guardian, or deepen your own healing gifts.",
        image: "/images/services/trainings.jpg",
        cta: {
          label: "See Trainings",
          href: "/services#trainings"
        }
      }
    ]
  },

  // Community Section
  community: {
    heading: "JOIN THE INNER ASCEND COMMUNITY",
    description: `A decentralized collective of healers, visionaries, and conscious creators building new earth together.

✨ Weekly group calls & teachings
✨ Token-based service exchange
✨ Global community connection
✨ Collaborative projects & retreats
✨ Your soul family awaits`,
    backgroundImage: "/images/community/cosmic-background.jpg",
    cta: {
      label: "Join the Community (Free)",
      href: "/inner-ascend"
    }
  },

  // Latest Blog Posts (Dynamic - fetched from blog content)
  blog: {
    heading: "REFLECTIONS & TEACHINGS",
    showCount: 3, // How many recent posts to show
    cta: {
      label: "Read More →",
      href: "/blog"
    }
  }
}
```

---

### 4. Services/Offerings (`src/content/offerings/circles.ts`)

```typescript
/**
 * CIRCLES & GROUP PROGRAMS
 *
 * All circle offerings with pricing, descriptions, and details.
 * Each circle is a structured object.
 */

export interface Circle {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  forWhom: string[];
  includes: string[];
  format: string;
  price: {
    amount: number;
    currency: string;
    period: string;
  };
  maxParticipants?: number;
  image: string;
  cta: {
    label: string;
    href: string;
  };
  featured?: boolean;
}

export const circles: Circle[] = [
  {
    id: "mens-circle",
    slug: "mens-circle-becoming-you",
    name: "Men's Circle: Becoming You",
    tagline: "The King, The Magician, The Lover",
    description: "A sacred container for men ready to release anger healthily, meet their higher self, heal ancestral wounds, and embody their divine masculine essence.",
    longDescription: `This isn't therapy. This isn't another men's group. This is a return to your divine essence.

We gather weekly to drop the masks, feel the real emotions, and heal the wounds we've been carrying. This is deep, transformational work for men who are ready to become who they truly are—not who they were told to be.`,
    forWhom: [
      "Release anger healthily & connect to emotions",
      "Meet their higher self & inner child",
      "Heal ancestral wounds through inner constellations",
      "Embody their true divine essence",
      "Transform the past into divinity",
      "Become the self they haven't dared to be"
    ],
    includes: [
      "Weekly live calls (90 minutes)",
      "Private WhatsApp group for daily support",
      "Guided practices & homework",
      "Community accountability",
      "Safe container to express fully"
    ],
    format: "Weekly online calls | 8 spots max",
    price: {
      amount: 150,
      currency: "EUR",
      period: "month"
    },
    maxParticipants: 8,
    image: "/images/circles/mens-circle.jpg",
    cta: {
      label: "Join Men's Circle",
      href: "/contact?service=mens-circle"
    },
    featured: true
  },

  {
    id: "womens-circle",
    slug: "womens-sacred-leadership",
    name: "Women's Sacred Leadership Circle",
    tagline: "Astral Integration Storytelling",
    description: "A space for women to step into sacred feminine leadership, practice channeling, clear ancestral patterns, and awaken to limitless potential.",
    forWhom: [
      "Sacred feminine leadership",
      "Channeling & intuition development",
      "Clearing ancestral DNA patterns",
      "Opening to limitless possibilities",
      "Divine essence embodiment"
    ],
    includes: [
      "Bi-weekly live calls (2 hours)",
      "Private women's circle community",
      "Astral storytelling practices",
      "Channeling & intuition exercises",
      "Sisterhood support"
    ],
    format: "Bi-weekly online | 12 women max",
    price: {
      amount: 150,
      currency: "EUR",
      period: "month"
    },
    maxParticipants: 12,
    image: "/images/circles/womens-circle.jpg",
    cta: {
      label: "Join Women's Circle",
      href: "/contact?service=womens-circle"
    },
    featured: true
  },

  {
    id: "inner-ascend-mastermind",
    slug: "inner-ascend-creative-mastermind",
    name: "Inner Ascend Creative Mastermind",
    tagline: "For Visionaries & Conscious Entrepreneurs",
    description: "Weekly group container for spiritual business guidance, channeled transformation, daily accountability, and mastermind collaboration.",
    forWhom: [
      "Spiritual business guidance & strategy",
      "Channeled transformation & energy support",
      "Daily accountability & container",
      "Token exchange community support",
      "Mastermind collaboration",
      "Unlocking gifts & creating aligned programs"
    ],
    includes: [
      "Weekly mastermind calls (90 min)",
      "Daily WhatsApp community support",
      "Monthly channeled business readings",
      "Access to token exchange network",
      "Co-creation opportunities",
      "Guest expert sessions"
    ],
    format: "Weekly calls + daily community",
    price: {
      amount: 420,
      currency: "EUR",
      period: "month"
    },
    image: "/images/circles/mastermind.jpg",
    cta: {
      label: "Join Mastermind",
      href: "/contact?service=mastermind"
    },
    featured: true
  },

  {
    id: "healing-circle",
    slug: "healing-circle-donation",
    name: "Healing Circle",
    tagline: "Donation-Based Community Gathering",
    description: "Monthly open healing ceremony with energy clearing, meditation, group intentions, and community connection.",
    forWhom: [
      "Energy healing & clearing",
      "Meditation & activation",
      "Group intention setting",
      "Sacred space holding",
      "Community connection"
    ],
    includes: [
      "Monthly 2-hour healing ceremony",
      "Guided meditation",
      "Energy clearing & activation",
      "Community sharing circle",
      "Optional in-person (when available)"
    ],
    format: "Monthly | Online/In-person | Open to all",
    price: {
      amount: 0, // Donation-based
      currency: "EUR",
      period: "donation"
    },
    image: "/images/circles/healing-circle.jpg",
    cta: {
      label: "Join Next Circle",
      href: "/contact?service=healing-circle"
    }
  },

  {
    id: "parenthood-circle",
    slug: "parenthood-circle-conscious-fathers",
    name: "Parenthood Circle",
    tagline: "For Conscious Fathers",
    description: "Support space for fathers navigating conscious parenting, work-life balance, emotional awareness, and partnership dynamics.",
    forWhom: [
      "Conscious parenting",
      "Work-life balance",
      "Emotional awareness",
      "Partnership dynamics",
      "Personal growth while parenting"
    ],
    includes: [
      "Bi-weekly calls (90 min)",
      "Private fathers community",
      "Parenting resources & practices",
      "Peer support & accountability"
    ],
    format: "Bi-weekly online",
    price: {
      amount: 100,
      currency: "EUR",
      period: "month"
    },
    image: "/images/circles/parenthood.jpg",
    cta: {
      label: "Join Fathers Circle",
      href: "/contact?service=parenthood-circle"
    }
  }
]

// Helper to get featured circles
export const getFeaturedCircles = () => circles.filter(c => c.featured)

// Helper to get circle by slug
export const getCircleBySlug = (slug: string) => circles.find(c => c.slug === slug)
```

---

### 5. Testimonials (`src/content/testimonials.ts`)

```typescript
/**
 * TESTIMONIALS
 *
 * Client testimonials and success stories.
 * Add new testimonials here.
 */

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  service: string; // Which service they used
  rating?: number; // 1-5 stars
  quote: string;
  photo?: string;
  featured?: boolean;
  date?: string; // When testimonial was given
}

export const testimonials: Testimonial[] = [
  {
    id: "maria-barcelona",
    name: "Maria",
    location: "Barcelona, Spain",
    service: "6-Month Transformation Journey",
    rating: 5,
    quote: "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who I was' way. He sees you. Really sees you. And he holds space for whatever needs to emerge.",
    photo: "/images/testimonials/maria.jpg",
    featured: true,
    date: "2024-11"
  },

  {
    id: "david-usa",
    name: "David",
    location: "USA",
    service: "Bufo Ceremony",
    rating: 5,
    quote: "The Bufo ceremony was the most profound experience of my life. Astral's preparation, presence, and integration support made me feel completely safe to surrender. I finally understand what 'coming home to myself' means.",
    photo: "/images/testimonials/david.jpg",
    featured: true,
    date: "2024-09"
  },

  {
    id: "jordi-catalunya",
    name: "Jordi",
    location: "Catalunya",
    service: "Men's Circle",
    rating: 5,
    quote: "His men's circle is the only place I can truly be myself without performance or masks. We go deep. We cry. We rage. We heal. Every man should have this.",
    photo: "/images/testimonials/jordi.jpg",
    featured: true,
    date: "2024-10"
  },

  {
    id: "sarah-uk",
    name: "Sarah",
    location: "London, UK",
    service: "Energy Healing Session",
    rating: 5,
    quote: "One session with Astral shifted a pattern I'd been carrying for 30 years. I felt the energy move through my body in ways I didn't know were possible. He's the real deal.",
    featured: false,
    date: "2024-08"
  },

  {
    id: "carlos-mexico",
    name: "Carlos",
    location: "Mazunte, Mexico",
    service: "Integration Coaching",
    rating: 5,
    quote: "After my ayahuasca experience, I was struggling to make sense of everything. Astral helped me integrate the insights and actually embody the changes. His guidance was exactly what I needed.",
    featured: false,
    date: "2024-07"
  }
]

// Helper functions
export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured)
export const getTestimonialsByService = (service: string) =>
  testimonials.filter(t => t.service === service)
```

---

### 6. TypeScript Types (`src/lib/types.ts`)

```typescript
/**
 * TYPESCRIPT TYPES
 *
 * Shared types used across the application.
 * Ensures type safety for all content.
 */

// CTA (Call-to-Action)
export interface CTA {
  label: string;
  href: string;
  style?: 'primary' | 'secondary' | 'outline';
  openInNewTab?: boolean;
}

// Image
export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Price
export interface Price {
  amount: number;
  currency: 'EUR' | 'USD' | 'GBP';
  period?: 'session' | 'month' | 'year' | 'package' | 'donation';
}

// Service (Generic)
export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  image: string | Image;
  price: Price;
  cta: CTA;
  featured?: boolean;
  category: 'circle' | 'session' | 'medicine' | 'training';
}

// Contact Form Submission
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceInterest: string[];
  message: string;
  subscribe?: boolean;
}

// Blog Post (Metadata)
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string[];
  tags: string[];
  featuredImage: string;
  readTime: number; // in minutes
  published: boolean;
}
```

---

## How to Use This Structure

### For You (Non-Developer):
1. **To update text:** Edit the `.ts` files in `src/content/`
2. **To add a new service:** Add object to appropriate array (circles, sessions, etc.)
3. **To change prices:** Update the `price` object in any service
4. **To add testimonials:** Add to `testimonials.ts`
5. **To update contact info:** Edit `site.ts`

### For Claude (AI):
1. **Clear file structure:** AI knows exactly where to find/edit content
2. **Typed data:** TypeScript ensures AI doesn't create invalid structures
3. **Comments:** Every file has clear purpose documentation
4. **Helper functions:** Pre-built functions for common queries
5. **Consistent patterns:** Same structure repeated across all content types

### For Developers:
1. **Separation of concerns:** Content is completely separate from components
2. **Type safety:** Full TypeScript support prevents errors
3. **Easy to test:** Content can be tested independently
4. **CMS-ready:** This structure can easily migrate to Sanity/Contentful later
5. **Performance:** Static content = fast builds and runtime

---

## Example Component Usage

### Using content in a React component:

```typescript
// src/app/page.tsx (Homepage)
import { homeContent } from '@/content/pages/home'
import { circles } from '@/content/offerings/circles'
import { getFeaturedTestimonials } from '@/content/testimonials'

export default function HomePage() {
  const featured = circles.filter(c => c.featured)
  const testimonials = getFeaturedTestimonials()

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>{homeContent.hero.heading}</h1>
        <p>{homeContent.hero.subheading}</p>
        <Button href={homeContent.hero.cta.href}>
          {homeContent.hero.cta.label}
        </Button>
      </section>

      {/* Introduction */}
      <section className="introduction">
        <h2>{homeContent.introduction.heading}</h2>
        <p>{homeContent.introduction.body}</p>
      </section>

      {/* Featured Circles */}
      <section className="circles">
        <h2>Featured Circles</h2>
        <div className="grid">
          {featured.map(circle => (
            <CircleCard key={circle.id} circle={circle} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <TestimonialCarousel testimonials={testimonials} />
      </section>
    </>
  )
}
```

---

## Benefits of This Approach

### ✅ For Content Management:
- **All content in one place** - `src/content/` directory
- **No need to touch components** to update text
- **Easy for AI to parse** and modify
- **Version control friendly** - clear diffs when content changes
- **Can be edited by non-developers**

### ✅ For Development:
- **Type-safe** - TypeScript catches errors
- **DRY** - Reusable content structures
- **Scalable** - Easy to add new services/pages
- **Testable** - Content can be unit tested
- **Migrable** - Easy to move to CMS later

### ✅ For AI (Claude):
- **Clear file purposes** - Each file has one job
- **Documented structure** - Comments explain everything
- **Predictable patterns** - Same structure everywhere
- **Easy to search** - Find content by file name
- **Safe to edit** - Won't break components

---

## Adding New Content Examples

### Add a new circle:
```typescript
// In src/content/offerings/circles.ts
// Just add to the array:

{
  id: "new-circle-id",
  slug: "new-circle-slug",
  name: "New Circle Name",
  tagline: "Catchy tagline",
  description: "Short description...",
  // ... rest of properties
}
```

### Add a new page:
```typescript
// Create src/content/pages/new-page.ts

export const newPageContent = {
  hero: {
    heading: "Page Heading",
    subheading: "Subheading text"
  },
  sections: [
    {
      title: "Section 1",
      body: "Content..."
    }
  ]
}
```

### Update site-wide info:
```typescript
// In src/content/site.ts
export const siteConfig = {
  contact: {
    email: "new-email@domain.com", // Just change here!
    // Updates everywhere automatically
  }
}
```

---

## Maintenance Workflow

### Weekly:
1. Add new testimonials to `testimonials.ts`
2. Update pricing in service files if changed
3. Add blog posts to `content/blog/posts/`

### Monthly:
1. Review all pricing
2. Update featured items
3. Add new services if needed
4. Archive old testimonials

### As Needed:
1. Update about page story
2. Add new service categories
3. Update contact info
3. Change CTAs for campaigns

---

## Migration to CMS (Future)

When ready to move to a CMS like Sanity:

1. **Keep the same structure** - Export from `.ts` to CMS
2. **Use same types** - TypeScript types become CMS schemas
3. **Minimal code changes** - Just change imports from local to CMS
4. **Gradual migration** - Move one content type at a time

Example:
```typescript
// Before (local content):
import { circles } from '@/content/offerings/circles'

// After (CMS):
import { circles } from '@/lib/sanity/queries'
// Components stay the same!
```

---

## Questions for You

Would you like me to:

1. **Create a starter template** with all this set up?
2. **Add more example content files** (sessions, medicine work, etc.)?
3. **Build actual React components** that use this content?
4. **Create a simple CMS admin panel** for editing (no code)?
5. **Show you how to deploy** this on Vercel/Netlify?

This structure is designed to be **AI-friendly** and **easy to maintain** even if you're not a developer. Everything is readable, organized, and well-documented!
