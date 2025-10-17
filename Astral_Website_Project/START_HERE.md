# 🚀 START HERE: Astral Website Implementation Guide

**Project:** Astral's Healing & Spiritual Services Website
**Client:** Astral (Jordi)
**Date Prepared:** April 6, 2025
**Status:** Ready for Implementation

---

## 📋 Project Overview

This folder contains everything needed to implement Astral's professional website for his healing, coaching, and spiritual services business. All content, design specifications, and technical architecture have been prepared and organized.

**Business Context:**
- Astral is a healer, medicine facilitator, and spiritual guide
- Based in Mazunte, Mexico and Barcelona, Spain
- Offers: circles/groups, 1:1 sessions, medicine work (Bufo), trainings
- Runs "Inner Ascend" - a conscious community/membership
- 10+ years experience, 500+ ceremonies, 1000+ clients

---

## 📁 Folder Structure

```
Astral_Website_Project/
├── START_HERE.md                    ← You are here!
├── 01_Reference_Notes/              ← Original notes (434 files organized)
├── 02_Design_Specs/                 ← Complete design & copy
├── 03_Content_Structure/            ← Technical architecture
└── 04_Implementation_Guide/         ← Step-by-step build guide
```

---

## 🎯 Your Mission

**Build a Next.js 14 website** using the specifications in this folder.

### Tech Stack Specified:
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** File-based (structured in `/src/content/`)
- **Deployment:** Vercel (recommended)

### Design Aesthetic:
- **Style:** Mystical Minimalism
- **Colors:** Deep Indigo (#2C1654), Gold (#D4AF37), Sage Green (#9CAF88)
- **Vibe:** Clean, spacious, cosmic elements, sacred geometry
- **Fonts:** Cormorant Garamond (headings), Inter (body)

---

## 📚 What's Included

### 1️⃣ Reference Notes (`01_Reference_Notes/`)
**What it is:** 434 organized notes from Astral's Apple Notes covering:
- Business ideas & offerings
- Spiritual teachings & practices
- Client work & testimonials
- Personal reflections
- Technical projects

**How to use it:**
- Reference for authentic voice/tone
- Additional content ideas
- Understanding Astral's work deeply
- Finding testimonial content
- Creating blog posts

**Key folders:**
- `Spiritual & Healing/` - Core offerings
- `Business & Projects/` - Service descriptions
- `Personal & Reflections/` - Authentic voice

---

### 2️⃣ Design Specifications (`02_Design_Specs/`)

#### `Website_Design_Concept.md`
**Complete website design including:**
- ✅ Page-by-page structure (Homepage, About, Services, etc.)
- ✅ Complete copy for every section
- ✅ Design aesthetic (colors, typography, imagery)
- ✅ Layout descriptions
- ✅ SEO strategy
- ✅ Mobile considerations
- ✅ Conversion optimization
- ✅ Navigation structure

**Pages Specified:**
1. Homepage - Hero, intro, pathways, testimonials, community
2. About - Story, credentials, journey
3. Work With Me - All services (circles, sessions, medicine, trainings)
4. Inner Ascend - Community membership page
5. Retreats - Upcoming retreat offerings
6. Resources - Blog, free meditations, testimonials
7. Contact - Form and connection info

#### `Astral_Offerings_Services_2025.md`
**Complete service catalog including:**
- ✅ 5 Circles & Group Programs (with pricing)
- ✅ 10+ 1:1 Service offerings
- ✅ 4 Ceremony & Medicine Work offerings
- ✅ 4 Training programs
- ✅ Community membership tiers
- ✅ 20 ready-to-post promotional social media posts
- ✅ Complete pricing tables
- ✅ Legal disclaimers

**Use this for:**
- Populating service pages
- Creating service cards/components
- Pricing information
- Social media content
- Marketing materials

---

### 3️⃣ Content Structure (`03_Content_Structure/`)

#### `React_Content_Structure_Guide.md`
**Complete technical architecture including:**
- ✅ Folder structure for Next.js project
- ✅ Content organization strategy (all content in `/src/content/`)
- ✅ TypeScript interfaces for all data types
- ✅ Example content files with real data
- ✅ Component usage examples
- ✅ Helper functions for content queries
- ✅ Maintenance workflow

**Key Files to Create:**
```
src/content/
├── site.ts              # Site config, contact info, social links
├── navigation.ts        # All menus and navigation
├── pages/
│   ├── home.ts          # Homepage content
│   ├── about.ts         # About page content
│   └── services.ts      # Services page content
├── offerings/
│   ├── circles.ts       # All circle offerings
│   ├── sessions.ts      # 1:1 session offerings
│   ├── medicine.ts      # Medicine work offerings
│   └── trainings.ts     # Training programs
└── testimonials.ts      # Client testimonials
```

**Why This Structure:**
- Content separated from components
- Easy for AI to maintain
- Non-developers can update content
- Type-safe with TypeScript
- CMS-ready (future migration)

---

### 4️⃣ Implementation Guide (`04_Implementation_Guide/`)

#### `IMPLEMENTATION_STEPS.md`
**Step-by-step build instructions** (you'll create this as you go)

---

## 🏗️ Implementation Steps

### Phase 1: Project Setup (30 min)
1. **Initialize Next.js project:**
   ```bash
   npx create-next-app@latest astral-website --typescript --tailwind --app
   cd astral-website
   ```

2. **Set up folder structure:**
   ```bash
   mkdir -p src/{components,content,lib}
   mkdir -p src/components/{layout,sections,ui}
   mkdir -p src/content/{pages,offerings}
   mkdir -p public/images/{hero,services,testimonials,about}
   ```

3. **Install additional dependencies:**
   ```bash
   npm install clsx tailwind-merge
   npm install @tailwindcss/typography
   npm install framer-motion  # For animations (optional)
   npm install react-icons    # For icons
   ```

4. **Configure Tailwind with custom colors:**
   - Update `tailwind.config.js` with brand colors from design specs
   - Add custom fonts (Google Fonts: Cormorant Garamond, Inter)

---

### Phase 2: Content Files (1-2 hours)
**Create all content files in `src/content/` following the structure guide:**

1. **Start with `site.ts`** - Site-wide configuration
2. **Create `navigation.ts`** - All menus
3. **Create `pages/home.ts`** - Homepage content
4. **Create `offerings/circles.ts`** - Circles data
5. **Create `offerings/sessions.ts`** - 1:1 sessions data
6. **Create `offerings/medicine.ts`** - Medicine work data
7. **Create `offerings/trainings.ts`** - Training programs data
8. **Create `testimonials.ts`** - Testimonial data
9. **Create `lib/types.ts`** - TypeScript types

**All content is available in:**
- `02_Design_Specs/Astral_Offerings_Services_2025.md`
- `02_Design_Specs/Website_Design_Concept.md`

---

### Phase 3: Core Components (2-3 hours)
**Build reusable UI components:**

1. **Layout Components:**
   - `Header.tsx` - Navigation bar (with mobile menu)
   - `Footer.tsx` - Footer with links, social, contact
   - `Navigation.tsx` - Menu system

2. **UI Components:**
   - `Button.tsx` - Primary/secondary/outline variants
   - `Card.tsx` - Reusable card component
   - `Section.tsx` - Section wrapper with padding/spacing
   - `Container.tsx` - Content container

3. **Section Components:**
   - `Hero.tsx` - Hero section with image/video background
   - `ServiceCard.tsx` - Display service offerings
   - `TestimonialCard.tsx` - Testimonial display
   - `CircleCard.tsx` - Circle offering card
   - `PriceCard.tsx` - Pricing display

**Reference:**
- Design specs in `02_Design_Specs/Website_Design_Concept.md`
- Component usage examples in `03_Content_Structure/React_Content_Structure_Guide.md`

---

### Phase 4: Pages (3-4 hours)
**Build all pages using content files:**

1. **Homepage** (`app/page.tsx`)
   - Hero section
   - Introduction
   - Who this is for (3 columns)
   - Pathways to transformation (4 cards)
   - Testimonials carousel
   - Community section
   - Latest blog posts

2. **About Page** (`app/about/page.tsx`)
   - Hero with personal photo
   - Story sections (breakdown → awakening → becoming guide)
   - Credentials/experience
   - CTA to work together

3. **Services Page** (`app/services/page.tsx`)
   - Hero
   - Tabbed/sectioned layout:
     - Circles & Groups
     - 1:1 Sessions
     - Medicine Work
     - Trainings
   - Each service as card with details

4. **Inner Ascend Page** (`app/inner-ascend/page.tsx`)
   - Community overview
   - Membership tiers
   - Benefits
   - Vision section
   - Join CTA

5. **Contact Page** (`app/contact/page.tsx`)
   - Contact form
   - Contact information
   - Locations
   - Response time expectations

6. **Additional Pages:**
   - Retreats
   - Resources/Blog
   - Testimonials (full page)
   - Privacy/Terms/Disclaimers

**All page copy is in:** `02_Design_Specs/Website_Design_Concept.md`

---

### Phase 5: Styling & Polish (2-3 hours)
1. **Implement design system:**
   - Custom Tailwind classes
   - Typography scale
   - Spacing system
   - Color palette
   - Responsive breakpoints

2. **Add animations:**
   - Smooth scrolling
   - Fade-in on scroll
   - Hover effects
   - Page transitions

3. **Optimize images:**
   - Use Next.js Image component
   - Placeholder images initially
   - WebP format
   - Lazy loading

4. **Mobile responsiveness:**
   - Test all pages on mobile
   - Mobile menu
   - Touch-friendly buttons
   - Readable typography

---

### Phase 6: Features & Integrations (2-3 hours)
1. **Contact Form:**
   - Form validation
   - Email integration (Resend, SendGrid, or Formspree)
   - Success/error states
   - Auto-response

2. **Booking Integration:**
   - Calendly embed OR
   - Cal.com integration OR
   - Custom booking system

3. **Email Signup:**
   - Newsletter form
   - ConvertKit/Mailchimp integration
   - Free meditation download incentive

4. **Analytics:**
   - Google Analytics
   - Facebook Pixel (optional)
   - Conversion tracking

---

### Phase 7: SEO & Performance (1-2 hours)
1. **SEO Optimization:**
   - Meta tags on all pages
   - Open Graph images
   - Structured data (JSON-LD)
   - Sitemap.xml
   - Robots.txt

2. **Performance:**
   - Lighthouse score >90
   - Fast page loads (<3 seconds)
   - Code splitting
   - Image optimization

3. **Accessibility:**
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation
   - Alt text on images
   - Color contrast compliance

---

### Phase 8: Testing & Deployment (1-2 hours)
1. **Testing:**
   - All pages load correctly
   - All links work
   - Forms submit properly
   - Mobile responsive
   - Cross-browser testing

2. **Deployment:**
   - Deploy to Vercel
   - Set up custom domain
   - Configure environment variables
   - Test production build

3. **Post-Launch:**
   - Submit to Google Search Console
   - Set up Google Analytics
   - Test all integrations
   - Monitor errors (Sentry optional)

---

## 📊 Timeline Estimate

| Phase | Estimated Time | Priority |
|-------|---------------|----------|
| Project Setup | 30 min | 🔴 Critical |
| Content Files | 1-2 hours | 🔴 Critical |
| Core Components | 2-3 hours | 🔴 Critical |
| Pages | 3-4 hours | 🔴 Critical |
| Styling & Polish | 2-3 hours | 🟡 High |
| Features | 2-3 hours | 🟡 High |
| SEO & Performance | 1-2 hours | 🟢 Medium |
| Testing & Deployment | 1-2 hours | 🔴 Critical |
| **TOTAL** | **12-20 hours** | |

**MVP can be done in 8-10 hours** (skip animations, advanced features)

---

## 🎨 Design Assets Needed

### Images Required:
The client will need to provide:
- **Hero image/video** - Meditation or nature scene
- **Portrait photo** - Professional but warm
- **Service images** - Circles, ceremonies, sessions
- **Testimonial photos** - Client photos (optional, can use initials)
- **Community image** - Group gathering or cosmic imagery
- **About page images** - Personal journey photos

### Temporary Solution:
- Use placeholder images initially
- Unsplash/Pexels for nature/spiritual imagery
- Generate placeholders with text

### Icon Set:
- React Icons library (already specified)
- Custom icons for services (can use simple emoji initially)

---

## 💡 Important Notes

### Content Voice & Tone:
Astral's voice is:
- **Authentic & vulnerable** - Shares his own journey
- **Mystical but grounded** - Spiritual without being "woo"
- **Direct & honest** - No fake guru energy
- **Warm & inviting** - Makes people feel safe
- **Respectful of medicine** - Sacred, not recreational

**Reference:** Read through `01_Reference_Notes/Personal & Reflections/` for authentic voice

### Medicine Work Disclaimer:
**IMPORTANT:** All pages mentioning Bufo/medicine work MUST include:
- Health screening requirements
- Contraindications
- "Not recreational" language
- "Complementary to medical care" disclaimer
- Informed consent emphasis

**See:** `02_Design_Specs/Astral_Offerings_Services_2025.md` for exact legal disclaimers

### Pricing Display:
- All prices in EUR (€)
- Show payment plans where applicable
- "Donation-based" for healing circle
- Range pricing for retreats (€1,500-3,000)
- Clear "Investment:" labels (not just "Price:")

---

## 🔧 Technical Decisions Made

### Why Next.js 14:
- Server components for performance
- Built-in SEO optimization
- Image optimization
- Easy deployment to Vercel
- Great developer experience

### Why File-Based Content:
- Easy for AI to maintain
- No database needed
- Version controlled
- Can migrate to CMS later
- Fast builds

### Why TypeScript:
- Type safety prevents errors
- Better developer experience
- Self-documenting code
- AI can work with it easily

### Why Tailwind CSS:
- Fast development
- Consistent design system
- Small bundle size
- Easy to customize
- Great with Next.js

---

## 📝 Client Preferences

Based on notes analysis:
1. **Community-focused** - Inner Ascend is important
2. **Decentralization** - Mentions blockchain, tokens, DAOs
3. **Conscious business** - Service over profit mindset
4. **Multiple locations** - Mazunte & Barcelona
5. **Men's work** - Special focus on masculine healing
6. **Medicine integration** - Not just ceremonies, integration too
7. **Authentic** - Real, vulnerable, not performative

---

## 🚨 Common Pitfalls to Avoid

1. **Don't make it too "corporate"** - This is spiritual work, keep it warm
2. **Don't skip mobile** - Many users will browse on phone
3. **Don't forget disclaimers** - Medicine work has legal requirements
4. **Don't over-engineer** - Start simple, iterate later
5. **Don't use fake content** - All content is provided, use it!
6. **Don't skip accessibility** - Screen readers, keyboard nav matter
7. **Don't ignore performance** - Fast load times = better conversion

---

## ✅ Success Criteria

The website is ready to launch when:
- [ ] All pages load and display correctly
- [ ] Contact form works and sends emails
- [ ] Mobile responsive on all pages
- [ ] Load time under 3 seconds
- [ ] All links work (no 404s)
- [ ] SEO meta tags on all pages
- [ ] Booking system integrated
- [ ] Testimonials display correctly
- [ ] Services clearly presented with pricing
- [ ] Legal disclaimers in place
- [ ] Analytics tracking installed
- [ ] Deployed to production URL

---

## 📞 Questions to Ask Client

Before you start, confirm:
1. **Domain name** - What URL should this be deployed to?
2. **Contact email** - Which email should forms send to?
3. **Booking system** - Calendly? Cal.com? Custom?
4. **Photos available** - Do you have professional photos ready?
5. **Priority pages** - Which pages do you need first (MVP)?
6. **Payment processing** - Stripe? PayPal? Or just contact form for now?
7. **Languages** - English only? Or Spanish/Catalan too?
8. **Blog requirement** - Do you want blog functionality now or later?

---

## 📖 How to Use This Folder

### For the Next AI Session:
1. **Read this file first** - Understand the full context
2. **Review design specs** - `02_Design_Specs/Website_Design_Concept.md`
3. **Study content structure** - `03_Content_Structure/React_Content_Structure_Guide.md`
4. **Reference notes** - Browse `01_Reference_Notes/` for voice/tone
5. **Ask clarifying questions** - Get any missing information
6. **Start building** - Follow implementation steps above

### For Human Developer:
- Everything is documented and ready
- Follow the phases in order
- Reference materials are organized
- All copy is written
- Structure is defined
- Just need to code it!

### For Astral (Client):
- Share this entire folder with next Claude session
- Tell Claude: "Build the website using the specs in this folder"
- Provide any missing information (domain, photos, etc.)
- Review builds at each phase

---

## 🎯 Next Steps

**To start building:**

1. **Initialize project** as described in Phase 1
2. **Set up content files** from Phase 2
3. **Build components** from Phase 3
4. **Create pages** from Phase 4
5. **Deploy** and iterate

**Recommended approach:**
- Build MVP first (Phases 1-4)
- Get client feedback
- Add polish (Phases 5-7)
- Deploy and optimize (Phase 8)

---

## 📚 Additional Resources

### Helpful Links:
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript Handbook: https://www.typescriptlang.org/docs
- React Icons: https://react-icons.github.io/react-icons
- Vercel Deployment: https://vercel.com/docs

### Design Inspiration:
- Spiritual/healing websites with modern design
- Minimal, spacious layouts
- Cosmic/sacred geometry elements
- Professional coaching sites

---

## 🙏 Final Notes

This is a **complete, ready-to-implement** project. All the hard work of:
- Content organization (434 notes analyzed)
- Service structuring (20+ offerings defined)
- Copy writing (every page written)
- Design decisions (colors, fonts, layout)
- Technical architecture (folder structure, types, patterns)

**...has been done.**

Your job is to **bring it to life in code**.

The client's work is meaningful - helping people heal, transform, and awaken. Build something worthy of that mission.

Good luck! 🚀

---

**Questions?** Review the other markdown files in this folder.
**Need clarification?** Ask the client (Astral).
**Ready to build?** Start with Phase 1!

---

*Prepared by Claude (Anthropic) on April 6, 2025*
*Project: Astral Website Implementation*
*Status: Ready for Development*
