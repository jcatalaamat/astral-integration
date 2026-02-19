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
    client: 'ShivEnergetics',
    type: 'IPHM-Accredited Reiki Academy — Granada, Spain',
    desc: 'Full academy platform for an internationally accredited Reiki school. Levels 1–9 certification paths, retreat programs in rural Andalusia, student portal, practitioner directory, community hub — replacing a fragmented Wix setup with a unified school.',
    url: null as string | null,
    status: 'Private client',
  },
  {
    client: 'Ozina Camp',
    type: 'Farm Stay & Residency — Mallorca',
    desc: 'Custom platform for a farm stay and artist residency. Stays, land story, residency applications, booking — replacing a fragmented online presence.',
    url: null as string | null,
    status: 'In development',
  },
  {
    client: 'Uria Tsur',
    type: 'Vocal Freedom Facilitator — 18+ Cities',
    desc: 'Touring hub for a vocal facilitator and frontman of Orot Band (33K+ Spotify listeners). Centralized 8 ticket platforms into one event system across Europe and the Americas. Membership portal with 300+ subscribers at €5/mo. Bilingual EN/HE.',
    url: 'https://uriatsur.live',
    status: null as string | null,
  },
  {
    client: 'Mazunte Today',
    type: 'AI-Powered Community Platform — Oaxaca, Mexico',
    desc: 'Live events and community directory for a coastal town. AI-powered event submission (Claude), practitioner directory, classifieds, weekly digest, Stripe-boosted listings. Bilingual EN/ES, SEO-optimized. Used daily by locals and visitors.',
    url: 'https://mazunte.today',
    status: null as string | null,
  },
  {
    client: 'Sacred Counsel',
    type: 'Retreat & Integration — Valle de Bravo, Mexico',
    desc: 'Full platform for a psychedelic retreat center and integration therapy practice. Ayahuasca retreats, private homestays, integration therapy sessions, 21-day metabolic detox — serving facilitators with 20+ years of ceremony experience.',
    url: 'https://sacredcounsel.space',
    status: null as string | null,
  },
  {
    client: 'Proyecto Salvaje',
    type: 'Regenerative Neighborhood — Oaxaca, Mexico',
    desc: 'Platform for a regenerative land community. 10 household lots with natural building requirements, community coordination, land sales from $35K USD. Bioconstruction, permaculture, and off-grid living — rooted in the mountains of Oaxaca.',
    url: 'https://proyectosalvaje.com',
    status: null as string | null,
  },
  {
    client: 'Inner Ascend',
    type: 'Healing Membership & Facilitator School',
    desc: 'Trauma-informed healing membership (€22/mo) with a 12-month curriculum of 97 healing practices, AI healing assistant, guided sessions, and progress tracking. Feeds into a facilitator training pipeline for practitioners ready to lead.',
    url: 'https://inner-ascend.com',
    status: null as string | null,
  },
  {
    client: 'Amakura',
    type: 'Regenerative Living Center — Mazunte, Oaxaca',
    desc: 'Platform for a centro de vida regenerativa. Bioconstruction school, restaurant, natural pool, workshops, and community events. A living laboratory for regenerative culture — not just a storefront, a whole world.',
    url: 'https://amakura.store',
    status: 'In development',
  },
];

const services = [
  { icon: '⚡', title: 'Custom Platforms', desc: 'Your entire business in one place. Bookings, content, community, payments, client journey — all under your brand. Replaces the 5+ tools you\'re duct-taping together.' },
  { icon: '🤖', title: 'AI Assistants & Tools', desc: 'AI trained on your voice and methodology. Answer FAQs, guide clients between sessions, recommend resources, triage to human support. Works on web or WhatsApp. A new revenue stream that serves people when you\'re not available.' },
  { icon: '🎓', title: 'Certification & School Platforms', desc: 'Multi-level training programs with student progression, prerequisites, practice hour logging, peer matching, cohort management, and credentialing. The infrastructure that ThetaHealing, IFS, and yoga teacher trainings all need — built for your modality.' },
  { icon: '🔑', title: 'Membership & Course Platforms', desc: 'Gated communities, tiered content, video lessons, guided practices, progress tracking — all branded to you. Recurring revenue that replaces Patreon, Kajabi, and Circle.' },
  { icon: '🌐', title: 'Websites That Convert', desc: 'Lightning-fast, SEO-optimized, custom-built. Not templates. Designed to reflect your energy and convert visitors into clients.' },
  { icon: '📱', title: 'Cross-Platform Apps', desc: 'Your platform on every device. Clients access their membership, book sessions, journal, and track their journey from their phone. iOS, Android, and web from a single build.' },
];

const addOnModules = [
  { title: 'Shop', desc: 'Products, downloads, merch. Stripe payments.', price: 'From $800' },
  { title: 'Stays & Booking', desc: 'Accommodation calendar, availability, payments.', price: 'From $1,200' },
  { title: 'Courses & Membership', desc: 'Video, progress tracking, gated content, subscriptions.', price: 'From $1,000' },
  { title: 'Community', desc: 'Forums, directory, circles, discussions.', price: 'From $800' },
  { title: 'AI Assistant', desc: 'Trained on your methodology. Web + WhatsApp.', price: 'From $1,000' },
  { title: 'Certification System', desc: 'Student levels, prerequisites, practice tracking, credentialing.', price: 'From $1,500' },
  { title: 'Email & CRM', desc: 'Newsletter, sequences, onboarding, contacts.', price: 'From $600' },
  { title: 'Custom', desc: 'Directory, ticketing, AI tools — whatever you need.', price: "Let's talk" },
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
  { q: "What about AI — how does that fit into my business?", a: "AI isn't a gimmick here. It's practical. An AI assistant trained on your methodology can support your clients between sessions, answer common questions, guide intake — and free up your time for the work only you can do." },
  { q: 'Can you build me a mobile app?', a: "Yes. I build cross-platform — one codebase that works on iOS, Android, and web. It's an add-on module that makes sense once your core platform is solid." },
  { q: "What makes the School platform different from Kajabi or Teachable?", a: "Kajabi and Teachable are course platforms. They handle video lessons and payments. They don't handle certification levels with prerequisites, practice hour tracking, peer matching, cohort management, or a public directory of your certified practitioners. If you're running a real training program — not just selling a course — you need different infrastructure." },
  { q: "How does the Partnership model work exactly?", a: "I build your platform at reduced or zero upfront cost. In return, I take 8–12% of revenue that's processed through the platform — enrollments, bookings, memberships, purchases. Only transactions on the platform I built. Your other revenue streams, in-person work, and existing channels are 100% yours. There's a 12-month minimum term, and you can buy out the rev share at any time by paying the full project value." },
  { q: "I'm not sure what I need. Can I just talk to someone?", a: "That's what the first call is for. No pitch, no pressure. I'll listen to where you are, what's working, what's not — and tell you honestly what I'd build and whether I'm the right person for it." },
];

const aboutStats = [
  { value: '10+', label: 'Years building software' },
  { value: '2–3', label: 'Weeks to launch' },
  { value: 'CTO', label: 'Former technical lead' },
  { value: '🧠', label: 'Neurodivergent builder' },
  { value: '👨‍👧‍👦', label: 'Father of 2' },
  { value: '📍', label: 'Mazunte, Oaxaca' },
];

export default function HomePage() {
  useDocumentMeta({
    title: 'Astral Integration — Your whole world, one platform.',
    description: 'AI-powered platforms, websites, and tools for healers, coaches, retreat centers, and creators. Built by Jordi Amat.',
    ogUrl: 'https://astralintegration.co/',
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
            Taking on 2 new projects
          </span>
        </div>

        <h1 className="font-serif text-display font-light max-w-[900px] relative z-10 animate-fadeUp animate-delay-300">
          Your whole world,<br />one <em className="italic gradient-text">platform.</em>
        </h1>

        <p className="text-body text-content-secondary max-w-[600px] mt-8 relative z-10 animate-fadeUp animate-delay-500">
          Custom AI-powered platforms for practitioners, facilitators, healing schools, and conscious businesses. Bookings, content, community, certification tracking, payments — designed and built in weeks, not months.
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
            Get in Touch
          </a>
          <a
            href="#work"
            className="px-10 py-4 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all"
          >
            See the Work
          </a>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 animate-fadeUp animate-delay-900">
          {[
            { value: '10+', label: 'Years shipping software' },
            { value: '10+', label: 'Platforms built' },
            { value: '500+', label: 'Users served' },
            { value: '2–3 wk', label: 'Average delivery' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-h2 font-light text-accent mb-1">{stat.value}</div>
              <p className="text-meta uppercase text-content-muted">{stat.label}</p>
            </div>
          ))}
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
            Built for people who are<br />great at their craft.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            You shouldn't have to choose between doing transformational work and having a business that runs smoothly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 border border-border rounded-2xl overflow-hidden">
            {clientTypes.map((client, i) => (
              <div key={i} className="bg-dark-card p-8 text-center hover:bg-dark-cardHover transition-colors border-r border-b border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(4)]:border-r-0 md:[&:nth-child(4)]:border-r md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(6)]:border-r-0">
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
          <h2 className="font-serif text-display-sm font-light mb-4">Recent builds.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every project starts with deep research. I learn the business before I write a line of code.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((item, i) => (
              <div
                key={i}
                className="bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-1 transition-all group"
              >
                {/* Site preview */}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-[200px] overflow-hidden bg-dark-bg border-b border-border cursor-pointer"
                  >
                    <iframe
                      src={item.url}
                      title={`${item.client} preview`}
                      className="absolute top-0 left-0 w-[1280px] h-[800px] origin-top-left pointer-events-none"
                      style={{ transform: 'scale(0.25)' }}
                      loading="lazy"
                      sandbox="allow-same-origin"
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 right-3 text-meta uppercase text-accent bg-dark-card/80 backdrop-blur-sm border border-border rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit ↗
                    </div>
                  </a>
                ) : (
                  <div className="w-full h-[200px] bg-dark-bg border-b border-border flex items-center justify-center">
                    <span className="text-meta uppercase text-content-muted tracking-wider">{item.status || 'Coming soon'}</span>
                  </div>
                )}

                {/* Card content */}
                <div className="p-8">
                  <p className="text-meta uppercase text-gold mb-4">{item.type}</p>
                  <h3 className="font-serif text-h2 font-light mb-4">{item.client}</h3>
                  <p className="text-body-sm text-content-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
                  <p className="text-body-sm text-content-secondary">A unified academy platform. 300+ students onboarded. Course paths, retreat bookings, practitioner directory, AI assistant — all under one brand.</p>
                </div>
              </div>
            </div>

            {/* Systems breakdown */}
            <div className="p-8 md:p-10">
              <h4 className="font-serif text-h4 mb-6 text-content-muted">What's running in production</h4>
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            </div>

            <div>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Senior full-stack engineer, 10+ years building production applications. Former CTO. Based in Mazunte, Oaxaca — deep in the world of holistic practice, conscious community, and intentional living.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I didn't start in tech for this space. I started in the work — sitting in ceremony, training in polarity and embodiment with teachers like John Wineland, facilitating integration, building community on the land. That's how I know the difference between a booking form and a <strong className="text-content-primary font-medium">sacred container</strong>.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I saw teachers and healers doing genuinely life-changing work — and then losing students because their systems were held together with WhatsApp groups and spreadsheets. The gap between the quality of their work and the quality of their infrastructure was massive.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                So I built the bridge. I build with AI-powered tools, which means I ship in weeks what agencies quote months for. I understand your world because I live in it.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-8">
                I also build{' '}
                <a href="/tools" className="text-gold hover:underline">free tools</a>
                {' '}for this community — because the people doing this work deserve better infrastructure, even before they're ready for a full platform.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
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

      {/* WHAT I BUILD */}
      <section id="services" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What I Build
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Technology that feels like<br />an extension of your care.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every system is designed around your clients' journey — not around software features.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-dark-card border border-border rounded-2xl p-8 hover:border-border-hover hover:bg-dark-cardHover hover:-translate-y-1 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center text-xl mb-6">
                  {service.icon}
                </div>
                <h3 className="font-serif text-h3 mb-3">{service.title}</h3>
                <p className="text-body-sm text-content-secondary">{service.desc}</p>
              </div>
            ))}
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
              <h4 className="text-body-sm text-accent font-medium uppercase tracking-wider mb-2">Astral Integration</h4>
              <p className="text-meta text-content-muted">Custom platform, partnership model</p>
            </div>

            {[
              { template: 'Your brand squeezed into their templates', agency: 'Custom design, but generic tech stack', custom: 'Built around your methodology and client journey' },
              { template: '$200–$400/mo in recurring SaaS fees', agency: '$15K–$50K+ upfront, then you\'re on your own', custom: 'Partnership model — I earn when you earn' },
              { template: 'You stitch together 5+ tools yourself', agency: 'Delivered and gone. You maintain it.', custom: 'One platform, one partner, ongoing support' },
              { template: 'Same features as everyone else in your niche', agency: 'Custom features, but no domain expertise', custom: 'AI, certification, community — built for your world' },
              { template: 'Your data lives in their ecosystem', agency: 'You own the code but often can\'t maintain it', custom: 'You own everything. Code, data, domain.' },
              { template: 'Months of DIY setup and configuration', agency: '3–6 months typical timeline', custom: '2–3 weeks to launch' },
            ].map((row, i) => (
              <div key={`row-${i}`} className="contents">
                <div className="bg-dark-bg p-6"><p className="text-body-sm text-content-muted"><span className="text-content-muted/60 mr-2">—</span>{row.template}</p></div>
                <div className="bg-dark-bg p-6"><p className="text-body-sm text-content-muted"><span className="text-content-muted/60 mr-2">—</span>{row.agency}</p></div>
                <div className="bg-dark-card p-6"><p className="text-body-sm text-content-secondary"><span className="text-accent mr-2">+</span>{row.custom}</p></div>
              </div>
            ))}
          </div>

          {/* Mobile comparison — stacked cards */}
          <div className="md:hidden space-y-4">
            {[
              { template: 'Your brand squeezed into their templates', agency: 'Custom design, but generic tech stack', custom: 'Built around your methodology and client journey' },
              { template: '$200–$400/mo in recurring SaaS fees', agency: '$15K–$50K+ upfront, then you\'re on your own', custom: 'Partnership model — I earn when you earn' },
              { template: 'You stitch together 5+ tools yourself', agency: 'Delivered and gone. You maintain it.', custom: 'One platform, one partner, ongoing support' },
              { template: 'Same features as everyone else in your niche', agency: 'Custom features, but no domain expertise', custom: 'AI, certification, community — built for your world' },
              { template: 'Your data lives in their ecosystem', agency: 'You own the code but often can\'t maintain it', custom: 'You own everything. Code, data, domain.' },
              { template: 'Months of DIY setup and configuration', agency: '3–6 months typical timeline', custom: '2–3 weeks to launch' },
            ].map((row, i) => (
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
                  <p className="text-meta uppercase text-accent mb-1">Astral Integration</p>
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

      {/* PRICING */}
      <section id="pricing" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Pricing
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Built for partnership, not invoices.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            I don't just build your platform and disappear. I build it, maintain it, and grow with you — because I only win when you do.
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
                The full infrastructure for multi-level certification programs — not a course platform, a real school. Student progression, AI support, community, credentialing.
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
                  'AI assistant trained on your methodology',
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

          {/* Partnership Model */}
          <div className="bg-dark-card border border-border rounded-2xl p-10 md:p-12 mb-16">
            <h3 className="font-serif text-h2 font-light mb-2">The Partnership Model</h3>
            <p className="text-body text-content-secondary mb-10">Most of my clients choose this. Here's why it works:</p>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="font-serif text-h4 text-accent mb-4">For you:</h4>
                <ul className="space-y-3">
                  {[
                    'Little to no upfront cost — the barrier is almost zero',
                    'Platform built to the same standard as a $10K project',
                    "I'm financially invested in your success — I only earn when you earn",
                    'Ongoing development, support, and improvements included',
                    'You own your content, your brand, your students',
                  ].map((item, i) => (
                    <li key={i} className="text-body-sm text-content-secondary pl-6 relative">
                      <span className="absolute left-0 top-1.5 text-accent text-[0.6rem]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-h4 text-accent mb-4">For me:</h4>
                <ul className="space-y-3">
                  {[
                    'I build platforms I believe in',
                    '8–12% of revenue processed through the platform',
                    'Long-term partnership, not a one-time invoice',
                    "I'm incentivized to make your platform convert, retain, and grow",
                  ].map((item, i) => (
                    <li key={i} className="text-body-sm text-content-secondary pl-6 relative">
                      <span className="absolute left-0 top-1.5 text-accent text-[0.6rem]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-dark-bg rounded-xl p-8 mb-8">
              <h4 className="font-serif text-h4 mb-4">What 10% actually looks like:</h4>
              <div className="space-y-3 text-body-sm text-content-secondary">
                <p>A $3,000 certification with 20 students = $60K revenue → <strong className="text-content-primary">$6,000 to me</strong></p>
                <p>A $200/mo membership with 50 members = $10K/mo → <strong className="text-content-primary">$1,000/mo to me</strong></p>
                <p>A $50 workshop with 100 signups = $5K → <strong className="text-content-primary">$500 to me</strong></p>
              </div>
              <p className="text-body-sm text-content-muted mt-4">Transparent. Simple. Aligned.</p>
            </div>

            <p className="text-body-sm text-content-muted">
              The percentage applies only to transactions processed through the platform I build. Revenue from other channels, in-person work, or existing systems is yours entirely.
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block mt-8 px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
            >
              Let's Talk About Partnership
            </a>
          </div>

          {/* Add-On Modules */}
          <div className="mb-16">
            <h3 className="font-serif text-h2 font-light mb-2">Add-On Modules</h3>
            <p className="text-body-sm text-content-secondary mb-8">Start with the core. Expand as you grow. Add-ons follow the same model — built into the project scope or added for a small upfront fee.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Monthly Support */}
          <div>
            <h3 className="font-serif text-h2 font-light mb-2">Monthly Support</h3>
            <p className="text-body-sm text-content-secondary mb-8">Stay supported after launch. Included in Partnership model. Available separately for upfront projects.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {monthlyPlans.map((plan, i) => (
                <div
                  key={i}
                  className="bg-dark-card border border-border rounded-2xl p-8 hover:border-border-hover transition-colors"
                >
                  <h4 className="font-serif text-h3 mb-1">{plan.name}</h4>
                  <div className="font-serif text-[2rem] font-light text-accent mb-4">
                    {plan.price}<span className="text-body-sm text-content-muted font-sans">/mo</span>
                  </div>
                  <p className="text-body-sm text-content-secondary">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KIND WORDS */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Kind Words
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">What they say.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-dark-card border border-border rounded-2xl p-8">
              <p className="text-body text-content-secondary leading-relaxed italic mb-6">
                "He centralized 8 ticket platforms into one hub and built a membership portal for my community. I went from spending hours on admin to focusing on my work."
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
                "We needed a booking system that could handle tours across 4 European cities, multiple languages, and dozens of art historians. Jordi built it in weeks — and now he runs our entire tech operation."
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
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[300px]' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-body-sm text-content-secondary leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM BUILDER */}
      <PlatformBuilder />

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
              No pitch. No pressure. Just a conversation about what you need and whether I can help.
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
                <p className="text-body-sm text-content-muted">
                  Check your inbox for a reply from hello@astralintegration.co
                </p>
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
