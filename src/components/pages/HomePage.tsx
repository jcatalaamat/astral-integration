import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import PlatformBuilder from '../platform-builder/PlatformBuilder';

// Data
const clientTypes = [
  { icon: '🌿', title: 'Retreat Centers', desc: 'Psychedelic, yoga, wellness' },
  { icon: '🔮', title: 'Coaches & Therapists', desc: 'Integration, somatic, spiritual' },
  { icon: '🎓', title: 'Certification Schools', desc: 'Teacher training, multi-level programs' },
  { icon: '📖', title: 'Course Creators', desc: 'Digital programs, memberships' },
  { icon: '🎙', title: 'Influencers & Creators', desc: 'Wellness, consciousness, lifestyle' },
  { icon: '✦', title: 'Healers & Readers', desc: 'Astrology, energy work, channeling' },
];

const portfolio = [
  {
    client: 'Uria Tsur',
    type: 'Vocal Facilitator & Musician — 18+ Cities',
    desc: 'A vocal facilitator touring 18+ cities was selling tickets across 8 different platforms and losing track of his community. Now everything lives in one place — events, membership, 300+ subscribers — and he focuses on the work.',
    url: 'https://uriatsur.live',
    status: null as string | null,
  },
  {
    client: 'Sacred Counsel',
    type: 'Retreat & Integration — Valle de Bravo, Mexico',
    desc: 'A psychedelic retreat center with 20+ years of ceremony experience needed a digital presence that honored the depth of the work. Retreats, integration therapy, homestays, and metabolic detox — all held in one container.',
    url: 'https://sacredcounsel.space',
    status: null as string | null,
  },
  {
    client: 'Mazunte Today',
    type: 'Community Platform — Oaxaca, Mexico',
    desc: 'A beach town needed a way to know what\'s happening tonight. Now locals and visitors check one place — events, practitioner directory, classifieds — updated daily in English and Spanish.',
    url: 'https://mazunte.today',
    status: null as string | null,
  },
  {
    client: 'Inner Ascend',
    type: 'Healing Membership & Facilitator School',
    desc: 'A trauma-informed healing practice wanted to reach people between sessions. 97 guided practices, an intelligent support system, and a full facilitator training pipeline — all under one roof at €22/mo.',
    url: 'https://inner-ascend.com',
    status: null as string | null,
  },
  {
    client: 'Proyecto Salvaje',
    type: 'Regenerative Neighborhood — Oaxaca, Mexico',
    desc: 'A regenerative neighborhood in the Oaxacan mountains needed more than a real estate page. Land sales, bioconstruction requirements, community coordination — a platform that reflects the vision, not just the lots.',
    url: 'https://proyectosalvaje.com',
    status: null as string | null,
  },
  {
    client: 'Amakura',
    type: 'Regenerative Living Center — Mazunte, Oaxaca',
    desc: 'A regenerative living center — bioconstruction school, restaurant, natural pool, workshops — deserved more than a storefront. A whole world, coming to life.',
    url: 'https://amakura.store',
    status: 'Coming soon',
  },
];


const addOnModules = [
  { title: 'Shop', desc: 'Products, downloads, merch. Stripe payments.', price: 'From $800' },
  { title: 'Stays & Booking', desc: 'Accommodation calendar, availability, payments.', price: 'From $1,200' },
  { title: 'Courses & Membership', desc: 'Video, progress tracking, gated content, subscriptions.', price: 'From $1,000' },
  { title: 'Community', desc: 'Forums, directory, circles, discussions.', price: 'From $800' },
  { title: 'Intelligent Assistant', desc: 'Trained on your methodology. Web + WhatsApp.', price: 'From $1,000' },
  { title: 'Certification System', desc: 'Student levels, prerequisites, practice tracking, credentialing.', price: 'From $1,500' },
  { title: 'Email & CRM', desc: 'Newsletter, sequences, onboarding, contacts.', price: 'From $600' },
  { title: 'Custom', desc: 'Directory, ticketing, intelligent tools — whatever you need.', price: "Let's talk" },
];

const monthlyPlans = [
  {
    name: 'Maintain',
    price: '$300',
    desc: 'Bug fixes & updates, security monitoring, minor content changes, email support.',
  },
  {
    name: 'Grow',
    price: '$500',
    desc: 'Everything in Maintain + new features, analytics & SEO, priority support.',
  },
  {
    name: 'Partner',
    price: '$800',
    desc: 'Everything in Grow + ongoing development, strategy & direction, dedicated availability.',
  },
];

const faqItems = [
  { q: 'How much does this actually cost?', a: "Platform builds are valued at $3,000–$5,000. School and certification platforms at $5,000–$10,000. Most clients choose the Partnership model — little to no upfront cost, and I take 8–12% of revenue processed through the platform. You'll know the exact terms before we start." },
  { q: 'How long does a project take?', a: "Most platforms launch in 2–3 weeks. School platforms with certification systems take 4–6 weeks. I'll give you a timeline upfront and I stick to it." },
  { q: 'Do I need to be technical?', a: "Not at all. I handle everything — design, development, deployment. You focus on your work. I build the systems around it." },
  { q: 'I already have a Wix / Squarespace / Kajabi site. Can you work with it?', a: "I build custom. That means we'll likely replace your current setup with something purpose-built for your business. Your content migrates over, but the platform is new and yours." },
  { q: "Will it feel like my brand — not like a tech product?", a: "That's the entire point. Every build starts with deep research into your world. The result looks and feels like you — not like software." },
  { q: "What about AI — how does that fit into my practice?", a: "It's practical, not trendy. An intelligent assistant trained on your methodology can support clients between sessions, answer common questions, and guide intake — freeing your time for the work only you can do. It's infrastructure, not a gimmick." },
  { q: 'Can you build me a mobile app?', a: "Yes. I build cross-platform — one codebase that works on iOS, Android, and web. It's an add-on module that makes sense once your core platform is solid." },
  { q: "What makes the School platform different from Kajabi or Teachable?", a: "Kajabi and Teachable are course platforms. They handle video lessons and payments. They don't handle certification levels with prerequisites, practice hour tracking, peer matching, cohort management, or a public directory of your certified practitioners. If you're running a real training program — not just selling a course — you need different infrastructure." },
  { q: "How does the Partnership model work exactly?", a: "I build your platform at reduced or zero upfront cost. In return, I take 8–12% of revenue that's processed through the platform — enrollments, bookings, memberships, purchases. Only transactions on the platform I built. Your other revenue streams, in-person work, and existing channels are 100% yours. There's a 12-month minimum term, and you can buy out the rev share at any time by paying the full project value." },
  { q: "I'm not sure what I need. Can I just talk to someone?", a: "That's what the first call is for. No pitch, no pressure. I'll listen to where you are, what's working, what's not — and tell you honestly what I'd build and whether I'm the right person for it." },
];

const aboutStats = [
  { value: '10+', label: 'Years in software' },
  { value: 'CTO', label: 'Former technical lead' },
  { value: '2–3 wk', label: 'Typical launch' },
  { value: '📍', label: 'Mazunte, Oaxaca' },
];

// Comparison data — single source of truth for desktop & mobile
const comparisonRows = [
  { template: 'Your brand squeezed into their templates', agency: 'Custom design, but generic tech stack', custom: 'Built around your methodology and client journey' },
  { template: '$200–$400/mo in recurring SaaS fees', agency: '$15K–$50K+ upfront, then you\'re on your own', custom: 'Partnership model — I earn when you earn' },
  { template: 'You stitch together 5+ tools yourself', agency: 'Delivered and gone. You maintain it.', custom: 'One platform, one partner, ongoing support' },
  { template: 'Same features as everyone else in your niche', agency: 'Custom features, but no domain expertise', custom: 'AI, certification, community — built for your world' },
  { template: 'Your data lives in their ecosystem', agency: 'You own the code but often can\'t maintain it', custom: 'You own everything. Code, data, domain.' },
  { template: 'Months of DIY setup and configuration', agency: '3–6 months typical timeline', custom: '2–3 weeks to launch' },
];

export default function HomePage() {
  useDocumentMeta({
    title: 'Astral Integration — Digital Architecture for Conscious Movements',
    description: 'Custom platforms, websites, and intelligent systems for schools, retreats, and practices in the consciousness space. Independent technical partner. Built by Jordi Amat.',
    ogUrl: 'https://astralintegration.co/',
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [addOnsExpanded, setAddOnsExpanded] = useState(false);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'New Inquiry from Website',
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute w-[600px] h-[600px] bg-accent rounded-full blur-[100px] opacity-40 -top-[200px] -right-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] bg-[#a67b52] rounded-full blur-[100px] opacity-40 -bottom-[100px] -left-[100px] animate-float" style={{ animationDelay: '-7s' }} />
        <div className="absolute w-[300px] h-[300px] bg-gold rounded-full blur-[100px] opacity-15 top-[30%] left-[10%] animate-float" style={{ animationDelay: '-14s' }} />

        {/* Availability badge */}
        <div className="relative z-10 mb-8 animate-fadeUp animate-delay-100">
          <span className="inline-flex items-center gap-2 text-meta uppercase text-content-muted bg-dark-card border border-border rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Accepting 1–2 aligned projects
          </span>
        </div>

        <h1 className="font-serif text-display font-light max-w-[900px] relative z-10 animate-fadeUp animate-delay-300">
          Digital architecture for<br /><em className="italic gradient-text">conscious movements.</em>
        </h1>

        <p className="text-body text-content-secondary max-w-[600px] mt-8 relative z-10 animate-fadeUp animate-delay-500">
          I design and build the digital systems behind serious schools, retreats, and practices — from touring artists to global education communities.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-12 relative z-10 animate-fadeUp animate-delay-700">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Start a Conversation
          </a>
          <a
            href="#work"
            className="px-10 py-4 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all"
          >
            See the Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-content-muted animate-fadeUp animate-delay-1200">
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-scrollPulse" />
          <span className="text-meta uppercase">Scroll</span>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="clients" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Who This Is For
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Teachers, healers, and<br />builders of living systems.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            You changed someone's life last week. Then spent the weekend fighting Calendly and Canva. Your work deserves better infrastructure.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {clientTypes.map((client, i) => (
              <div key={i} className="bg-dark-card p-8 text-center hover:bg-dark-cardHover transition-colors">
                <div className="text-3xl mb-4">{client.icon}</div>
                <h4 className="font-serif text-h4 mb-1">{client.title}</h4>
                <p className="text-body-sm text-content-muted">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Work
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Selected work.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every project starts with deep research into the world it serves — the teaching, the community, the people.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((item, i) => {
              const gradients = [
                'from-amber-900/25 via-amber-900/5 to-transparent',
                'from-violet-900/25 via-violet-900/5 to-transparent',
                'from-sky-900/25 via-sky-900/5 to-transparent',
                'from-rose-900/25 via-rose-900/5 to-transparent',
                'from-lime-900/25 via-lime-900/5 to-transparent',
                'from-orange-900/25 via-orange-900/5 to-transparent',
              ];

              const PreviewContent = () => (
                <div className={`relative w-full h-[180px] border-b border-border bg-gradient-to-br ${gradients[i % gradients.length]} flex items-end p-6`}>
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {item.url && (
                      <span className="text-meta uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        View Live ↗
                      </span>
                    )}
                    {item.status && (
                      <span className="text-meta uppercase text-content-muted bg-dark-bg/60 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-[2rem] md:text-[2.5rem] font-light leading-tight text-content-primary/20 group-hover:text-content-primary/30 transition-colors select-none">
                    {item.client}
                  </h3>
                </div>
              );

              return (
                <div
                  key={i}
                  className="bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-1 transition-all group"
                >
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                      <PreviewContent />
                    </a>
                  ) : (
                    <PreviewContent />
                  )}

                  <div className="p-8">
                    <p className="text-meta uppercase text-gold mb-4">{item.type}</p>
                    <h3 className="font-serif text-h2 font-light mb-4">{item.client}</h3>
                    <p className="text-body-sm text-content-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KIND WORDS — moved up for trust after seeing the work */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-dark-card border border-border rounded-2xl p-8">
              <p className="text-body text-content-secondary leading-relaxed italic mb-6">
                "I was managing tickets on 8 platforms, WhatsApp groups for everything, total chaos. Jordi put it all in one place. Now I just focus on my workshops and the community runs itself."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-glow flex items-center justify-center text-accent font-serif">U</div>
                <div>
                  <p className="text-body-sm text-content-primary font-medium">Uria Tsur</p>
                  <p className="text-body-sm text-content-muted">Vocal Facilitator — 18+ Cities</p>
                </div>
              </footer>
            </blockquote>

            <blockquote className="bg-dark-card border border-border rounded-2xl p-8">
              <p className="text-body text-content-secondary leading-relaxed italic mb-6">
                "My students used to get lost between Teachable and Google Sheets and WhatsApp. Now they log in, see their path, book a retreat, join their cohort — it's actually a school now."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-glow flex items-center justify-center text-accent font-serif">S</div>
                <div>
                  <p className="text-body-sm text-content-primary font-medium">Sera Shivnan</p>
                  <p className="text-body-sm text-content-muted">ShivEnergetics — Granada</p>
                </div>
              </footer>
            </blockquote>

            <blockquote className="bg-dark-card border border-border rounded-2xl p-8">
              <p className="text-body text-content-secondary leading-relaxed italic mb-6">
                "We wanted something that felt like us — the land, the story, the residency — not some template. Jordi got it. It feels like walking onto the farm."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-glow flex items-center justify-center text-accent font-serif">O</div>
                <div>
                  <p className="text-body-sm text-content-primary font-medium">Ozina Camp</p>
                  <p className="text-body-sm text-content-muted">Farm Stay & Residency — Mallorca</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* DEEP CASE STUDY — SHIVENERGETICS */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-[#0d0d14] to-dark-bg">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Case Study
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">From 5 platforms to one.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            How a Reiki Master Teacher in Granada went from scattered tools to a unified academy — and scaled to 300+ students.
          </p>

          {/* Story arc */}
          <div className="bg-dark-card border border-border rounded-2xl overflow-hidden mb-10">
            {/* Header with journey */}
            <div className="p-8 md:p-10 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <h3 className="font-serif text-h2 font-light">ShivEnergetics</h3>
                <span className="text-meta uppercase text-gold bg-gold/10 px-3 py-1 rounded-full w-fit">Reiki Academy — Granada, Spain</span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-meta uppercase text-content-muted mb-1">Before</p>
                  <p className="text-body-sm text-content-secondary">Courses on Teachable. Bookings on Calendly. Payments on Stripe. Community on WhatsApp. Student records in Google Sheets.</p>
                </div>
                <div>
                  <p className="text-meta uppercase text-content-muted mb-1">The Ask</p>
                  <p className="text-body-sm text-content-secondary">"I need one place where my students can find everything — courses, their certification path, bookings, community. It needs to feel like my school, not like software."</p>
                </div>
                <div>
                  <p className="text-meta uppercase text-content-muted mb-1">After</p>
                  <p className="text-body-sm text-content-secondary">A unified academy platform. 300+ students onboarded. Course paths, retreat bookings, practitioner directory, methodology-trained assistant — all under one brand.</p>
                </div>
              </div>
            </div>

            {/* Systems breakdown */}
            <div className="p-8 md:p-10">
              <h4 className="font-serif text-h4 mb-6 text-content-muted">What's live now</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Learning & Certification',
                    items: ['Multi-level Reiki pathways', 'Video course library', 'Student progression tracking', 'Practice hour logging', 'Certificate generation'],
                  },
                  {
                    title: 'Booking & Commerce',
                    items: ['Retreat scheduling & payments', 'Session booking calendar', 'Payment plans & installments', 'Automated invoicing', 'Multi-currency support'],
                  },
                  {
                    title: 'Community & Directory',
                    items: ['Student community hub', 'Cohort discussion spaces', 'Certified practitioner directory', 'Peer matching system', 'Event announcements'],
                  },
                  {
                    title: 'Operations',
                    items: ['AI assistant (methodology-trained)', 'Email sequences & onboarding', 'Admin dashboard', 'Analytics & reporting', 'SEO & bilingual content'],
                  },
                ].map((group, i) => (
                  <div key={i}>
                    <h5 className="text-body-sm text-accent font-medium mb-3">{group.title}</h5>
                    <ul className="space-y-1.5">
                      {group.items.map((item, j) => (
                        <li key={j} className="text-body-sm text-content-muted pl-4 relative">
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="border-t border-border px-8 md:px-10 py-6 flex flex-wrap gap-x-10 gap-y-3">
              {[
                { value: '300+', label: 'Students' },
                { value: '5→1', label: 'Platforms consolidated' },
                { value: '20+', label: 'Systems integrated' },
                { value: '3 weeks', label: 'To launch' },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="font-serif text-h3 font-light text-accent">{stat.value}</span>
                  <span className="text-body-sm text-content-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <blockquote className="bg-dark-card border border-accent/20 rounded-2xl p-8 md:p-10 relative">
            <div className="absolute top-6 left-8 font-serif text-[4rem] text-accent/15 leading-none">"</div>
            <p className="text-body text-content-secondary leading-relaxed italic mb-6 relative z-10 max-w-prose">
              Jordi understood my world before I had to explain it. He took my academy from scattered across 5 platforms to one place where my 300+ students can find everything — courses, bookings, community, their practitioner path. It finally feels like my school, not a patchwork of tools.
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-glow flex items-center justify-center text-accent font-serif">S</div>
              <div>
                <p className="text-body-sm text-content-primary font-medium">ShivEnergetics</p>
                <p className="text-body-sm text-content-muted">Reiki Academy — Granada</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ABOUT — moved up for trust */}
      <section id="about" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            About
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12">Jordi Amat.</h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
            <div className="w-full md:w-[280px] h-[340px] rounded-2xl border border-border relative overflow-hidden">
              <img
                src="/founder.jpeg"
                alt="Jordi Amat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            </div>

            <div>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Senior full-stack architect. 10+ years building production systems. Former CTO. Based in Mazunte, Oaxaca — deep in the world of holistic practice, conscious community, and intentional living.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I didn't start in tech for this space. I started in the work — sitting in ceremony, training in polarity and embodiment with teachers like John Wineland, facilitating integration, building community on the land. That's how I know the difference between a booking form and a <strong className="text-content-primary font-medium">sacred container</strong>.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I kept watching incredible teachers lose students — not because the work wasn't profound, but because their "system" was a WhatsApp group, a Google Sheet, and a prayer.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I'm as interested in protecting transmission as I am in scaling reach. Digital architecture should deepen a teaching — not flatten it.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-8">
                I also build{' '}
                <a href="/tools" className="text-gold hover:underline">free tools</a>
                {' '}for this community — because the people doing this work deserve better infrastructure, even before they're ready for a full platform.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {aboutStats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-serif text-h2 font-light text-accent mb-1">{stat.value}</div>
                    <p className="text-body-sm text-content-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOT JUST USE... */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Why Custom
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Why not just use Kajabi?</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Template platforms work until they don't. Here's what changes when your infrastructure is built around your business — not the other way around.
          </p>

          {/* Desktop comparison grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {/* Column headers */}
            <div className="bg-dark-bg p-8">
              <h4 className="text-body-sm text-content-muted font-medium uppercase tracking-wider mb-2">Template Platforms</h4>
              <p className="text-meta text-content-muted">Kajabi, Squarespace, Wix, Teachable</p>
            </div>
            <div className="bg-dark-bg p-8">
              <h4 className="text-body-sm text-content-muted font-medium uppercase tracking-wider mb-2">Agencies</h4>
              <p className="text-meta text-content-muted">Traditional dev shops & freelancers</p>
            </div>
            <div className="bg-dark-card p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              <h4 className="text-body-sm text-accent font-medium uppercase tracking-wider mb-2">Working With Me</h4>
              <p className="text-meta text-content-muted">Custom architecture, long-term partnership</p>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={`row-${i}`} className="contents">
                <div className="bg-dark-bg p-6"><p className="text-body-sm text-content-muted"><span className="text-content-muted/60 mr-2">—</span>{row.template}</p></div>
                <div className="bg-dark-bg p-6"><p className="text-body-sm text-content-muted"><span className="text-content-muted/60 mr-2">—</span>{row.agency}</p></div>
                <div className="bg-dark-card p-6"><p className="text-body-sm text-content-secondary"><span className="text-accent mr-2">+</span>{row.custom}</p></div>
              </div>
            ))}
          </div>

          {/* Mobile comparison — stacked cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row, i) => (
              <div key={`mobile-row-${i}`} className="bg-dark-card border border-border rounded-xl p-5 space-y-3">
                <div>
                  <p className="text-meta uppercase text-content-muted mb-1">Templates</p>
                  <p className="text-body-sm text-content-muted"><span className="text-content-muted/60 mr-1">—</span> {row.template}</p>
                </div>
                <div>
                  <p className="text-meta uppercase text-content-muted mb-1">Agencies</p>
                  <p className="text-body-sm text-content-muted"><span className="text-content-muted/60 mr-1">—</span> {row.agency}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-meta uppercase text-accent mb-1">Working With Me</p>
                  <p className="text-body-sm text-content-secondary"><span className="text-accent mr-1">+</span> {row.custom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How It Works
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">No mystery. No disappearing act.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Most clients don't start with a $10K project. They start with a conversation — and the relationship grows from there.
          </p>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {[
              {
                step: '01',
                title: 'Platform Builder',
                desc: 'Use the interactive wizard to map out what you need. No signup, no pressure. You get a blueprint in 2 minutes.',
                state: 'Free',
              },
              {
                step: '02',
                title: 'Discovery Call',
                desc: "We talk. I learn your world, audit your current setup, and tell you honestly what I'd build and whether I'm the right fit.",
                state: 'Free',
              },
              {
                step: '03',
                title: 'Design & Build',
                desc: 'Custom blueprint, weekly progress, real code. You see it come together. Launched and running in 2–3 weeks.',
                state: '2–3 weeks',
              },
              {
                step: '04',
                title: 'Grow Together',
                desc: 'I stay. New features, maintenance, strategy. Your platform evolves as your business does. I earn when you earn.',
                state: 'Long-term',
              },
            ].map((item, i) => (
              <div key={i}>
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-body-sm font-medium flex-shrink-0 ${
                    i === 3 ? 'bg-accent text-white' : 'bg-dark-card border border-border text-content-muted'
                  }`}>
                    {item.step}
                  </div>
                  <span className={`text-meta uppercase ${i === 3 ? 'text-accent' : 'text-content-muted'}`}>{item.state}</span>
                </div>

                <div className={`bg-dark-card border rounded-xl p-6 ${
                  i === 3 ? 'border-accent/30' : 'border-border'
                }`}>
                  <h4 className="font-serif text-h4 mb-3">{item.title}</h4>
                  <p className="text-body-sm text-content-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#builder"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#builder')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
            >
              Start With the Platform Builder
            </a>
          </div>
        </div>
      </section>

      {/* PLATFORM BUILDER — moved before Pricing for better funnel */}
      <PlatformBuilder />

      {/* PRICING */}
      <section id="pricing" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Pricing
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Partnership over transactions.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            I don't build and disappear. I stay, maintain, and evolve the system with you — because the work isn't done at launch.
          </p>

          {/* Two Tiers */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Platform Build */}
            <div className="bg-dark-card border border-accent rounded-2xl p-10 relative bg-gradient-to-b from-accent-glow to-dark-card">
              <span className="absolute -top-3 left-8 text-meta uppercase px-4 py-1 bg-accent text-white rounded-full font-semibold">
                Platform Build
              </span>
              <p className="text-body-sm text-content-muted mb-4 mt-2">For practitioners, retreat centers & creators</p>
              <h3 className="font-serif text-h2 font-light mb-4">Platform Build</h3>
              <p className="text-body-sm text-content-secondary mb-6">
                Your scattered online presence becomes one custom-built platform. Bookings, events, services, content — everything your people need, in one place that's yours.
              </p>
              <div className="font-serif text-[2rem] font-light text-accent mb-6">$3,000 – $5,000</div>
              <ul className="space-y-2 mb-8">
                {[
                  'Deep business research & audit',
                  'Brand direction & visual identity',
                  'Custom-built platform (real code, not templates)',
                  'Booking & scheduling system',
                  'Services, events & offerings pages',
                  'Email capture & contact flows',
                  'Mobile-optimized & SEO-ready',
                  'You own the code, the data, the domain',
                  'Delivered in 2–3 weeks',
                ].map((feature, j) => (
                  <li key={j} className="text-body-sm text-content-secondary pl-6 relative">
                    <span className="absolute left-0 top-1.5 text-accent text-[0.6rem]">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-body-sm text-content-muted mb-6">
                <strong className="text-content-primary">How it works:</strong> Pay the full project fee upfront, or choose the Partnership model — reduced upfront cost in exchange for 8–12% of revenue that flows through the platform.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
              >
                Get Started
              </a>
            </div>

            {/* School & Certification */}
            <div className="bg-dark-card border border-gold/40 rounded-2xl p-10 relative bg-gradient-to-b from-gold/5 to-dark-card">
              <span className="absolute -top-3 left-8 text-meta uppercase px-4 py-1 bg-gold text-dark-bg rounded-full font-semibold">
                School Platform
              </span>
              <p className="text-body-sm text-content-muted mb-4 mt-2">For teachers running training programs at scale</p>
              <h3 className="font-serif text-h2 font-light mb-4">School & Certification</h3>
              <p className="text-body-sm text-content-secondary mb-6">
                The full infrastructure for multi-level certification programs — not a course platform, a real school. Student progression, intelligent support, community, credentialing.
              </p>
              <div className="font-serif text-[2rem] font-light text-gold mb-6">$5,000 – $10,000</div>
              <ul className="space-y-2 mb-8">
                {[
                  'Everything in Platform Build',
                  'Multi-level certification pathways with prerequisites',
                  'Student lifecycle & progression tracking',
                  'Cohort management & scheduling',
                  'Practice hour logging & peer matching',
                  'Assessment & credentialing system',
                  'Certified practitioner directory',
                  'Intelligent assistant trained on your methodology',
                  'Community spaces per cohort',
                  'Payment plans & tiered enrollment',
                  '60 days post-launch support',
                  'Delivered in 4–6 weeks',
                ].map((feature, j) => (
                  <li key={j} className="text-body-sm text-content-secondary pl-6 relative">
                    <span className="absolute left-0 top-1.5 text-gold text-[0.6rem]">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-body-sm text-content-muted mb-6">
                <strong className="text-content-primary">How it works:</strong> Pay the full project fee upfront, or choose the Partnership model — I build your school at a fraction of the cost (or free for the right project) in exchange for 8–12% of enrollments.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-8 py-3 bg-gold text-dark-bg rounded-full text-body-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Partnership Model — compact */}
          <div className="bg-dark-card border border-border rounded-2xl p-8 md:p-10 mb-16">
            <h3 className="font-serif text-h3 font-light mb-4">The Partnership Model</h3>
            <p className="text-body-sm text-content-secondary leading-relaxed mb-4">
              Most projects start with <strong className="text-content-primary">$0–$1,500 upfront</strong>. I take 8–12% of revenue processed through the platform — enrollments, bookings, memberships. I'm financially invested in making your platform work, not in sending an invoice and disappearing.
            </p>
            <p className="text-body-sm text-content-muted mb-6">
              The percentage applies only to transactions on the platform I build. Your other revenue, in-person work, and existing channels are entirely yours. 12-month minimum term. You can buy out the rev share at any time.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
            >
              Talk About Partnership
            </a>
          </div>

          {/* Add-On Modules — collapsible */}
          <div className="mb-16">
            <button
              onClick={() => setAddOnsExpanded(!addOnsExpanded)}
              className="w-full flex items-center justify-between mb-4 group"
            >
              <div>
                <h3 className="font-serif text-h2 font-light text-left">Add-On Modules</h3>
                <p className="text-body-sm text-content-secondary text-left mt-1">Start with the core. Expand as you grow.</p>
              </div>
              <span className={`w-8 h-8 rounded-full border border-border flex items-center justify-center text-accent transition-transform ${addOnsExpanded ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${addOnsExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {addOnModules.map((mod, i) => (
                  <div
                    key={i}
                    className="bg-dark-card border border-border rounded-xl p-6 hover:border-border-hover transition-colors"
                  >
                    <h4 className="font-serif text-h4 mb-2">{mod.title}</h4>
                    <p className="text-body-sm text-content-muted mb-3">{mod.desc}</p>
                    <p className="text-body-sm text-gold font-medium">{mod.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monthly Support — compact single row */}
          <div>
            <h3 className="font-serif text-h2 font-light mb-2">Monthly Support</h3>
            <p className="text-body-sm text-content-secondary mb-6">Included in Partnership model. Available separately for upfront projects.</p>
            <div className="flex flex-col md:flex-row gap-4">
              {monthlyPlans.map((plan, i) => (
                <div
                  key={i}
                  className="flex-1 bg-dark-card border border-border rounded-xl px-6 py-5 flex items-center justify-between hover:border-border-hover transition-colors"
                >
                  <div>
                    <h4 className="font-serif text-h4">{plan.name}</h4>
                    <p className="text-body-sm text-content-muted">{plan.desc}</p>
                  </div>
                  <div className="font-serif text-h3 font-light text-accent ml-6 flex-shrink-0">
                    {plan.price}<span className="text-body-sm text-content-muted font-sans">/mo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-section px-6 md:px-12 bg-gradient-to-b from-[#0d0d14] to-dark-bg">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            FAQ
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12">Before you ask</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  openFaq === i ? 'border-accent' : 'border-border hover:border-border-hover'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 bg-dark-card hover:bg-dark-cardHover transition-colors text-left"
                >
                  <h4 className="font-serif text-h4 pr-4">{item.q}</h4>
                  <span className={`w-7 h-7 rounded-full border border-border flex items-center justify-center text-accent flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45 bg-accent-glow' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-body-sm text-content-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Contact
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">Tell me about your work.</h2>
            <p className="text-body text-content-secondary mb-4">
              I read every message myself. If you're not sure what you need yet, that's fine — just tell me what you're working on and we'll figure it out together.
            </p>
            <p className="text-body-sm text-content-muted mb-10">
              Or try the{' '}
              <a
                href="#builder"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#builder')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-accent hover:underline"
              >
                Platform Builder
              </a>{' '}
              above to design your blueprint first.
            </p>

            {formStatus !== 'success' ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body-sm text-content-muted mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                      formErrors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-2 text-body-sm text-red-400">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-sm text-content-muted mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                      formErrors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && <p className="mt-2 text-body-sm text-red-400">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm text-content-muted mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none ${
                      formErrors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="Tell me about your work..."
                  />
                  {formErrors.message && <p className="mt-2 text-body-sm text-red-400">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Get in Touch'}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-h2 mb-4">Message received</h3>
                <p className="text-body text-content-secondary mb-3">
                  I'll respond within 24-48 hours.
                </p>
                <p className="text-body-sm text-content-muted mb-8">
                  Check your inbox for a reply from hello@astralintegration.co
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-body-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-body-sm text-content-muted">
                hello@astralintegration.co
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
