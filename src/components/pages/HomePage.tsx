import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

// Homepage highlights — full portfolio lives at /work
const portfolio = [
  {
    client: 'ShivEnergetics',
    type: 'Reiki Academy — Granada, Spain',
    desc: 'A Reiki Master Teacher with 300+ students across 9 certification levels was running her school across five disconnected platforms — Teachable, Calendly, Stripe, WhatsApp, and Google Sheets. Student records lived in spreadsheets. Booking confirmations were manual. There was no single place a student could see their path from first course to practitioner certification.',
    built: 'A unified academy — course delivery, student progression, certification management, practitioner directory, retreat bookings, and an AI assistant trained on the methodology. Five platforms replaced with one.',
    timeline: null,
    testimonial: {
      quote: 'It finally feels like my school, not a patchwork of tools.',
      name: 'Sera Shivnan',
      role: 'Reiki Master Teacher',
    },
    url: null,
    status: 'In progress',
  },
  {
    client: 'Sacred Counsel',
    type: 'Retreat Center & Integration Practice — Valle de Bravo, Mexico',
    desc: 'A center with 20+ years of ceremony experience running ayahuasca retreats, integration therapy, private homestays, and a 21-day metabolic detox — each with its own intake process, pricing, and client journey. The platform needed to honor the depth of the work without reducing it to a booking page.',
    built: 'A unified platform for multiple revenue streams — retreat bookings, homestay reservations, therapy scheduling, detox enrollment — with custom intake flows that respect the gravity of each offering.',
    timeline: null,
    testimonial: null,
    url: 'https://sacredcounsel.space',
    status: null as string | null,
  },
  {
    client: 'Uria Tsur',
    type: 'Vocal Freedom Facilitator — Touring 18+ Cities',
    desc: 'A touring vocal facilitator and frontman of Orot Band (33K+ Spotify listeners) was managing events across 8 ticketing platforms, losing control of audience data, and spending hours weekly on admin. He also needed a membership portal and a training program for singing circle leaders.',
    built: 'A centralized event hub replacing all 8 platforms, a membership portal (300+ subscribers), and a Singing Circle Leaders Course. Bilingual English/Hebrew.',
    timeline: null,
    testimonial: {
      quote: 'I was managing tickets on 8 platforms, WhatsApp groups for everything, total chaos. Jordi put it all in one place. Now I just focus on my workshops and the community runs itself.',
      name: 'Uria Tsur',
      role: 'Vocal Facilitator & Musician',
    },
    url: 'https://uriatsur.live',
    status: null as string | null,
  },
  {
    client: 'Mazunte Today',
    type: 'Community Platform — Oaxaca, Mexico',
    desc: 'A small coastal town in Oaxaca with dozens of practitioners, venues, and events happening every night — and no central place to find any of it. Visitors relied on word of mouth. Locals posted on scattered WhatsApp groups. Nothing connected.',
    built: 'A bilingual community platform: event listings, practitioner directory, classifieds, and a weekly digest — updated daily in English and Spanish. Used by locals and visitors as the go-to source for what\'s happening in town.',
    timeline: null,
    testimonial: null,
    url: 'https://mazunte.today',
    status: null as string | null,
  },
];

// What I Build — clean categories, no emojis
const capabilities = [
  { title: 'Certification & Progression', desc: 'Multi-level training programs, student progression, prerequisite management, credentialing, practitioner directories, cohort tracking.' },
  { title: 'Retreats & Programs', desc: 'Custom booking flows built for how retreats actually work — intake, preparation, capacity, follow-up. Not hotel logic.' },
  { title: 'Membership & Community', desc: 'Recurring access, gated content, member dashboards, progress tracking, community containers — not feeds.' },
  { title: 'Multi-Offering Ecosystems', desc: 'Unified platforms for organizations running fundamentally different offerings — retreats, courses, restaurants, residencies, memberships — under one identity. Each with its own logic, all connected underneath.' },
  { title: 'Events & Touring', desc: 'Centralized ticketing and scheduling for facilitators working across cities, countries, and languages.' },
  { title: 'Directory & Community Platforms', desc: 'Local directories, event listings, practitioner databases, classifieds, bilingual content. Community infrastructure for towns, networks, and organizations — not social media, but a utility people actually use.' },
  { title: 'Commerce', desc: 'Product sales, digital offerings, merchandise — integrated into the ecosystem, not bolted on.' },
  { title: 'AI Assistants', desc: 'Trained on your methodology, your language, your content. Supports your people between sessions. Triages to human support when needed.' },
  { title: 'Facilitator & Network Infrastructure', desc: 'Multi-region facilitator directories, class scheduling across time zones, credential verification, regional coordination, multilingual support. For organizations whose methodology is taught by hundreds — or thousands — of certified facilitators worldwide.' },
];

export default function HomePage() {
  useDocumentMeta({
    title: 'Astral Integration — Your mastery deserves infrastructure that matches it.',
    description: 'Senior engineer and former CTO building custom digital infrastructure for schools, practices, and original work — from first platform to global scale. Long-term technical partnership.',
    ogUrl: 'https://astralintegration.co/',
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
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

      {/* ════════════════════════════════════════════════
          1. HERO
          ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute w-[600px] h-[600px] bg-accent rounded-full blur-[100px] opacity-40 -top-[200px] -right-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] bg-[#a67b52] rounded-full blur-[100px] opacity-40 -bottom-[100px] -left-[100px] animate-float" style={{ animationDelay: '-7s' }} />
        <div className="absolute w-[300px] h-[300px] bg-gold rounded-full blur-[100px] opacity-15 top-[30%] left-[10%] animate-float" style={{ animationDelay: '-14s' }} />

        <h1 className="font-serif text-display font-light max-w-[900px] relative z-10 animate-fadeUp animate-delay-300">
          Your mastery deserves<br />infrastructure that <em className="italic gradient-text">matches it.</em>
        </h1>

        <p className="text-body text-content-secondary max-w-[640px] mt-8 relative z-10 animate-fadeUp animate-delay-500">
          I build custom digital infrastructure for schools, practices, retreats, and original work — from first platform to global networks of facilitators and communities across languages and borders.
        </p>

        <p className="text-body-sm text-content-muted mt-6 relative z-10 animate-fadeUp animate-delay-700">
          Senior engineer. Former CTO. Long-term technical partner.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-12 relative z-10 animate-fadeUp animate-delay-900">
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
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all"
          >
            See the Work
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          1b. QUICK ROUTES — for visitors who already know what they need
          ════════════════════════════════════════════════ */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            I Build For
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Find your starting point.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            Different work, different architecture. If you already know what you need, start here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: 'Practitioners', href: '/practitioners', desc: 'Healers, coaches, facilitators running on scattered tools' },
              { label: 'Schools', href: '/work/shivenergetics', desc: 'Certification programs and structured learning paths' },
              { label: 'Retreats', href: '/work/sacred-counsel', desc: 'Booking, intake, and multi-stream revenue' },
              { label: 'Communities', href: '/work/mazunte-today', desc: 'Directories, events, and local platforms' },
              { label: 'Organizations', href: '/#contact', desc: 'Networks and facilitator infrastructure at scale' },
            ].map((door) => (
              <a
                key={door.label}
                href={door.href}
                className="group bg-dark-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:bg-dark-cardHover transition-all"
              >
                <p className="font-serif text-h4 group-hover:text-accent transition-colors mb-2">{door.label}</p>
                <p className="text-meta text-content-muted leading-relaxed mb-3">{door.desc}</p>
                <span className="text-meta text-accent opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. THE REALITY
          ════════════════════════════════════════════════ */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Reality
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12 max-w-[700px]">
            You didn't build this to spend your weekends fighting software.
          </h2>

          <div className="space-y-6 max-w-prose">
            <p className="text-body text-content-secondary leading-relaxed">
              You created something real — a certification program, a healing practice, a retreat, a school, a body of work that changes people's lives. And then the admin ate you alive.
            </p>
            <p className="text-body text-content-secondary leading-relaxed">
              Courses on Teachable. Bookings on Calendly. Payments on Stripe. Community on WhatsApp. Student records in a Google Sheet you're terrified to lose. A website on Squarespace that doesn't do half of what you need. Email sequences in Mailchimp that nobody's maintaining.
            </p>
            <p className="text-body text-content-secondary leading-relaxed">
              None of these tools were built for what you actually do. They were built for internet marketers selling digital products. You're running a living practice — certification pathways, retreat logistics, client journeys that span months, communities that need containers, not feeds.
            </p>
            <p className="text-body text-content-secondary leading-relaxed">
              So your students can't find their next step. You're copy-pasting between five platforms every week. People ask "where do I sign up?" and you send them three different links. Your brand feels like a patchwork of other companies' products. And the deeper your work gets, the less your infrastructure can hold it.
            </p>
            <p className="text-body text-content-secondary leading-relaxed">
              Or maybe you're not there yet. Maybe the work lives in rooms, on land, in direct relationships — and the question isn't how to fix what's broken but how to build the digital layer for the first time without diluting what you've created.
            </p>
            <p className="text-body text-content-primary leading-relaxed font-medium">
              Either way, what you've mastered deserves better than this.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. WHAT I BUILD
          ════════════════════════════════════════════════ */}
      <section id="services" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What I Build
          </p>
          <h2 className="font-serif text-display-sm font-light mb-6">
            One platform. Built around your work.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every project is different. A Reiki academy with nine certification levels needs different architecture than an eco-farm stay with artist residencies, and both look nothing like a ceramicist launching her first online shop. But the principle is the same: your work deserves a single, cohesive digital home — not a stack of tools that were designed for someone else.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-10">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-dark-card p-8 hover:bg-dark-cardHover transition-colors"
              >
                <h3 className="font-serif text-h3 mb-3">{cap.title}</h3>
                <p className="text-body-sm text-content-secondary">{cap.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-content-muted max-w-prose">
            Everything connects. Student data flows into certification tracking. Retreat participants enter the membership. Event attendees join the ecosystem. One platform, one login, one experience that belongs to you. You don't need all of this on day one. We start with what matters most and build from there.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. THE WORK (Portfolio + inline testimonials)
          ════════════════════════════════════════════════ */}
      <section id="work" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Work
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Selected builds.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            A Reiki academy with nine certification levels. A retreat center with five revenue streams. A touring facilitator across 18 cities. A community platform for an entire town. Different problems, different architectures. Same principle: original work, custom infrastructure, long-term partnership.
          </p>

          <div className="space-y-8">
            {portfolio.map((item, i) => {
              const gradients = [
                'from-amber-900/25 via-amber-900/5 to-transparent',
                'from-violet-900/25 via-violet-900/5 to-transparent',
                'from-sky-900/25 via-sky-900/5 to-transparent',
                'from-rose-900/25 via-rose-900/5 to-transparent',
                'from-lime-900/25 via-lime-900/5 to-transparent',
                'from-orange-900/25 via-orange-900/5 to-transparent',
                'from-emerald-900/25 via-emerald-900/5 to-transparent',
                'from-teal-900/25 via-teal-900/5 to-transparent',
              ];

              return (
                <div
                  key={i}
                  className="bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-border-hover transition-all group"
                >
                  {/* Header band */}
                  <div className={`relative w-full border-b border-border bg-gradient-to-br ${gradients[i % gradients.length]} p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4`}>
                    <div>
                      <h3 className="font-serif text-h2 font-light">{item.client}</h3>
                      <p className="text-meta uppercase text-gold mt-1">{item.type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-meta uppercase text-accent hover:text-content-primary transition-colors"
                        >
                          View Live
                        </a>
                      )}
                      {item.status && (
                        <span className="text-meta uppercase text-content-muted bg-dark-bg/60 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-8">
                    <p className="text-body-sm text-content-secondary leading-relaxed mb-4">{item.desc}</p>

                    {item.built && (
                      <div className="mb-4">
                        <p className="text-meta uppercase text-content-muted mb-2">Built</p>
                        <p className="text-body-sm text-content-secondary leading-relaxed">{item.built}</p>
                      </div>
                    )}

                    {item.timeline && (
                      <p className="text-meta text-accent mb-4">{item.timeline}</p>
                    )}

                    {item.testimonial && (
                      <blockquote className="mt-6 pt-6 border-t border-border">
                        <p className="text-body-sm text-content-secondary italic leading-relaxed mb-3">
                          "{item.testimonial.quote}"
                        </p>
                        <footer className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-accent-glow flex items-center justify-center text-accent font-serif text-xs">
                            {item.testimonial.name[0]}
                          </div>
                          <div>
                            <span className="text-meta text-content-primary">{item.testimonial.name}</span>
                            <span className="text-meta text-content-muted ml-2">{item.testimonial.role}</span>
                          </div>
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-12 text-body-sm text-content-muted max-w-prose">
            The platforms above serve communities from dozens to hundreds. The architecture behind them is designed to scale to thousands — facilitator networks across countries, certification systems spanning multiple languages, student journeys that cross borders. If your organization operates at that level, the conversation starts differently, but the principles are the same.
          </p>

          <div className="mt-8 text-center">
            <a
              href="/work"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              All 8 case studies <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5. HOW IT WORKS
          ════════════════════════════════════════════════ */}
      <section id="how" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How It Works
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Long-term partnership. Aligned from day one.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            I don't build and disappear. I build, maintain, and evolve your platform over years — because I'm financially invested in its success and structurally committed to its growth.
          </p>

          {/* Process steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '01',
                title: 'We talk.',
                desc: 'You tell me what you\'re building — or what you\'ve already built — and where it needs to go. I learn the work, the methodology, the people you serve. I assess whether this is a partnership I want to invest in. Not every project is the right fit. But stage isn\'t the filter — the work is.',
              },
              {
                step: '02',
                title: 'I build.',
                desc: 'Custom platform, real code, your brand. You see it come together week by week. Most projects launch in 2–6 weeks depending on scope. You\'re involved throughout — this is your world, your content, your logic. I handle the engineering.',
              },
              {
                step: '03',
                title: 'I stay.',
                desc: 'This isn\'t a handoff. I remain your technical partner — maintaining, evolving, and scaling your platform as the work grows. New features, new offerings, new stages of growth. The infrastructure adapts because I\'m still here.',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-body-sm font-medium flex-shrink-0 ${
                    i === 2 ? 'bg-accent text-white' : 'bg-dark-card border border-border text-content-muted'
                  }`}>
                    {item.step}
                  </div>
                </div>
                <div className={`bg-dark-card border rounded-xl p-6 ${
                  i === 2 ? 'border-accent/30' : 'border-border'
                }`}>
                  <h4 className="font-serif text-h4 mb-3">{item.title}</h4>
                  <p className="text-body-sm text-content-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The model */}
          <div className="bg-dark-card border border-border rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-h2 font-light mb-2">The model</h3>
            <p className="text-body text-content-secondary mb-8">
              A small upfront investment covers initial research and build — and for the right projects, I start at zero. From there, I take a percentage of revenue processed through the platform — so my success is directly tied to yours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Upfront', value: '$0 – 1.5K', detail: 'Covers build and research' },
                { label: 'Revenue share', value: '8 – 12%', detail: 'Platform transactions, negotiated per partnership' },
                { label: 'Timeline', value: '2 – 6 weeks', detail: 'To launch' },
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-meta uppercase text-content-muted mb-1">{item.label}</p>
                  <p className="font-serif text-h2 font-light text-accent">{item.value}</p>
                  <p className="text-meta text-content-muted mt-1">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border space-y-2">
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Your other revenue</strong> — in-person work, existing channels, anything off-platform — is 100% yours. Always.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">You own everything.</strong> Code, data, domain, content. From day one.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Buyout option.</strong> You can buy out the revenue share at any time by paying the agreed platform value.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Minimum term:</strong> 12 months. After that, continue or buy out.
              </p>
              <p className="text-body-sm text-content-muted mt-4">
                For larger organizations with existing infrastructure and complex requirements, the partnership model is scoped differently. <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-accent hover:text-content-primary transition-colors">Let's talk.</a>
              </p>
              <p className="text-body-sm text-content-muted mt-4">
                The goal is alignment, not transactions.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/how-it-works"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Full pricing, tiers & FAQ <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          6. ABOUT
          ════════════════════════════════════════════════ */}
      <section id="about" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
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
                Senior full-stack engineer. Over a decade building production systems. Former CTO. Based in Mazunte, a small town on the coast of Oaxaca, Mexico.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I spent years leading engineering teams, making architecture decisions, and shipping platforms from zero to scale. Then I stepped into a different world — ceremony spaces, healing practices, teaching lineages, land-based communities. Not as a visitor. As a participant.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                What I found is that the people doing the most serious work in education, wellness, and community are either running their digital lives on tools that were never designed for them — or they have no digital infrastructure at all. A certification program crammed into Teachable. A ceramicist selling through Instagram DMs. A facilitator with a global following and no system to hold it. A retreat center whose online presence doesn't begin to reflect what happens in the room.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I understand this world because I live in it. I know why a certification has prerequisite levels, why a retreat booking isn't a hotel reservation, why a facilitator training needs cohort management, why the container matters as much online as it does in person. I build from the inside.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                What makes me fast: I pair senior engineering experience with AI-augmented development. I deliver at the speed of a team with the consistency of a single technical vision.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-8">
                What makes me different: I'm not building websites. I'm building the infrastructure that allows serious work to grow without fragmentation or loss of integrity. Whether you're launching from zero or restructuring something that's already serving hundreds — or thousands — I'm the technical partner who stays.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {[
                  { value: '10+', label: 'Years shipping software' },
                  { value: '8', label: 'Platforms built' },
                  { value: '2–6 wk', label: 'Average delivery' },
                  { value: 'Mazunte', label: 'Oaxaca, Mexico' },
                ].map((stat, i) => (
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

      {/* ════════════════════════════════════════════════
          7. CTA / CONTACT
          ════════════════════════════════════════════════ */}
      <section id="contact" className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Get in Touch
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">Tell me about your work.</h2>
            <p className="text-body text-content-secondary mb-4">
              I take on a small number of partnerships at a time. If you've created something original — or you're ready to — and you need a technical partner who builds with you for the long haul, I'd like to hear about it.
            </p>
            <p className="text-body-sm text-content-muted mb-10">
              No pitch. No pressure. Just a conversation about what you need and whether I can help.
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
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none ${
                      formErrors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="Tell me about your work, your people, and what you're trying to build..."
                  />
                  {formErrors.message && <p className="mt-2 text-body-sm text-red-400">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-h2 mb-4">Message received.</h3>
                <p className="text-body text-content-secondary mb-3">
                  I'll get back to you within 24–48 hours.
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
