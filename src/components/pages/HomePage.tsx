import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';

const CALENDLY_URL = 'https://calendly.com/astral-integration/free-strategy-call';

// Data
const clientTypes = [
  { icon: '🌿', title: 'Retreat Centers', desc: 'Psychedelic, yoga, wellness' },
  { icon: '🔮', title: 'Coaches & Therapists', desc: 'Integration, somatic, spiritual' },
  { icon: '✦', title: 'Astrologers & Readers', desc: 'Birth charts, tarot, channeling' },
  { icon: '🎙', title: 'Influencers & Creators', desc: 'Wellness, consciousness, lifestyle' },
  { icon: '📖', title: 'Course Creators', desc: 'Digital programs, communities' },
];

const services = [
  { icon: '⚡', title: 'Client Journey Platforms', desc: 'Custom portals that guide your clients from first inquiry through onboarding, delivery, and follow-up. Smart intake forms, automated prep sequences, and progress tracking — all in one place.', tag: 'Replaces 5+ Tools' },
  { icon: '🤖', title: 'AI Assistants & Chatbots', desc: '24/7 AI companions trained on your voice and methodology. Answer FAQs, guide journaling, recommend resources, and triage to human support when needed. Works on web or WhatsApp.', tag: 'New Revenue Stream' },
  { icon: '🌐', title: 'Websites That Convert', desc: 'Lightning-fast, SEO-optimized sites that feel premium and aligned. Not template websites — custom-built to reflect your unique energy and convert visitors into clients.', tag: '2-3x More Bookings' },
  { icon: '✉️', title: 'Email & Automation', desc: 'Intelligent email sequences that nurture leads, prepare clients, and re-engage alumni. Set it once, let it run. From lead magnet to booking — fully automated.', tag: 'Runs While You Sleep' },
  { icon: '🔑', title: 'Membership Sites', desc: 'Gated communities, tiered content libraries, courses, and subscriber-only spaces — all under your brand. Recurring revenue that grows while you sleep. Replaces Patreon, Kajabi, and Circle.', tag: 'Recurring Revenue' },
  { icon: '🎓', title: 'Digital Course Platforms', desc: 'Transform your knowledge into a scalable digital product. Video lessons, worksheets, guided practices, progress tracking, and community — all branded to you.', tag: 'Passive Income' },
  { icon: '📱', title: 'Cross-Platform Apps', desc: 'Your platform, available everywhere. Clients access their membership, journal, book sessions, and track their journey — all from their phone. iOS, Android, and web from a single build.', tag: 'Premium Offering' },
  { icon: '📊', title: 'AI Content Systems', desc: 'Content creation pipelines trained on your voice. Blog posts, social media, newsletters, SEO strategy — all consistent, all on-brand, all requiring minimal effort from you.', tag: '10x Your Output' },
];

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your world — your mission, your clients, your pain points. We audit your current systems and identify where the biggest impact lies.' },
  { num: '02', title: 'Strategy & Blueprint', desc: "We design a custom roadmap tailored to your business. No cookie-cutter solutions. You'll see exactly what we'll build, why it matters, and when it ships." },
  { num: '03', title: 'Build & Launch', desc: "We build fast and iterate with you. You'll see progress weekly, give feedback, and watch your vision come to life. Most projects launch in 2-6 weeks." },
  { num: '04', title: 'Grow Together', desc: "Post-launch support, optimizations, and ongoing partnership. As your business evolves, your systems evolve with it. We're in this with you." },
];

const faqItems = [
  { q: 'How much does this actually cost?', a: "Quick wins and audits start at $1,500. Full system builds (website + platform + automation) range from $8K-$20K. Ongoing partnerships run $3-5K/month. Every project starts with a free strategy call where we scope exactly what you need — no surprises." },
  { q: 'How long does a project take?', a: "Quick wins and audits: 1-2 weeks. Website builds: 3-4 weeks. Full system builds (website + platform + automation): 4-8 weeks. You'll see progress every week and give feedback throughout — it's collaborative, not a black box." },
  { q: 'Do I need to be technical?', a: "Not at all. That's the entire point. If you can use Instagram, you can use what we build. Everything is designed to be intuitive and low-maintenance. We handle all the technical complexity so you never have to think about it." },
  { q: 'I already have a Wix / Squarespace / Kajabi site. Can you work with it?', a: "We can optimize what you have (that's the Spark tier), or we can migrate you to a custom-built platform that's faster, ranks higher on Google, and actually converts visitors into clients. Most of our clients see a 2-3x improvement in bookings after migrating off template builders." },
  { q: "Will it feel like my brand — not like a tech product?", a: "That's non-negotiable for us. Everything we build reflects your voice, your energy, and your values. We don't do cookie-cutter templates or corporate design. Your clients should feel like they're in your space — not on a software platform." },
  { q: 'What happens after launch?', a: "Every Growth project includes 60 days of post-launch support. After that, you can continue with a monthly Scale partnership for ongoing optimization, new features, and strategy — or fly solo with everything fully documented and handed over. Nothing is locked behind us." },
  { q: 'Can you build me a mobile app?', a: "Yes — and it's not as expensive as you think. We use a cross-platform framework that builds iOS, Android, and web from a single codebase, which means you get a native app experience at a fraction of the cost of traditional app development. This is typically part of our Scale tier." },
  { q: "I'm not sure what I need. Can I just talk to someone?", a: "That's exactly what the free strategy call is for. We'll look at your current setup, understand your goals, and tell you — honestly — what will have the biggest impact. Sometimes the answer is \"you don't need us yet.\" We'd rather earn your trust than your money." },
];

const pricingTiers = [
  {
    name: 'Spark',
    subtitle: 'Quick wins that make an immediate difference',
    price: '$1,500 – $3K',
    period: '/ project',
    features: [
      'Full website & systems audit',
      'Critical fixes & optimizations',
      'FAQ page & directory listings',
      'Scheduling & booking setup',
      'Email sequence templates',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    subtitle: 'The full system build for scaling up',
    price: '$8K – $20K',
    period: '/ project',
    features: [
      'Custom website (design + development)',
      'Client journey platform',
      'Full email automation system',
      'AI chatbot or assistant',
      'Membership site or course platform',
      'SEO & content strategy',
      '60 days post-launch support',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    subtitle: 'Ongoing partnership for sustained growth',
    price: '$3 – 5K',
    period: '/ month',
    features: [
      'Everything in Growth',
      'Digital course platform',
      'Cross-platform mobile app',
      'AI content pipeline',
      'Continuous optimization',
      'Priority support & strategy calls',
      'New features built monthly',
    ],
    featured: false,
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.title = 'Astral Integration — Growth Systems for Soul-Led Businesses';
  }, []);

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
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleLeadSubmit = async () => {
    if (!leadEmail || !leadEmail.includes('@')) return;
    setLeadStatus('sending');
    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: 'Lead Magnet Signup',
          from_email: leadEmail,
          subject: 'New Lead: Tech Checklist Download',
          message: `New lead signed up for the Soul-Led Business Tech Checklist.\n\nEmail: ${leadEmail}`,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setLeadStatus('success');
      setLeadEmail('');
    } catch (error) {
      setLeadStatus('error');
      setTimeout(() => setLeadStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute w-[600px] h-[600px] bg-accent rounded-full blur-[100px] opacity-40 -top-[200px] -right-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] bg-[#4A3AE0] rounded-full blur-[100px] opacity-40 -bottom-[100px] -left-[100px] animate-float" style={{ animationDelay: '-7s' }} />
        <div className="absolute w-[300px] h-[300px] bg-gold rounded-full blur-[100px] opacity-15 top-[30%] left-[10%] animate-float" style={{ animationDelay: '-14s' }} />

        <p className="text-meta uppercase text-accent mb-8 relative z-10 animate-fadeUp animate-delay-300">
          Growth Systems for Soul-Led Businesses
        </p>

        <h1 className="font-serif text-display font-light max-w-[900px] relative z-10 animate-fadeUp animate-delay-500">
          You change lives.<br />We build the <em className="italic gradient-text">systems.</em>
        </h1>

        <p className="text-body text-content-secondary max-w-[540px] mt-8 relative z-10 animate-fadeUp animate-delay-700">
          AI-powered platforms, websites, and automations for healers, coaches, retreat centers, and creators who are ready to scale without losing their soul.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-12 relative z-10 animate-fadeUp animate-delay-900">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#work"
            className="px-10 py-4 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all"
          >
            See Our Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-content-muted animate-fadeUp animate-delay-1200">
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-scrollPulse" />
          <span className="text-meta uppercase">Scroll</span>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="clients" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Who We Serve
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Built for people who are<br />great at their craft
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            You shouldn't have to choose between doing meaningful work and having a business that runs smoothly. We build the bridge.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 border border-border rounded-2xl overflow-hidden">
            {clientTypes.map((client, i) => (
              <div key={i} className="bg-dark-card p-8 text-center hover:bg-dark-cardHover transition-colors border-r border-b border-border last:border-r-0 md:[&:nth-child(5)]:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(4)]:border-r-0 md:[&:nth-child(4)]:border-r">
                <div className="text-3xl mb-4">{client.icon}</div>
                <h4 className="font-serif text-h4 mb-1">{client.title}</h4>
                <p className="text-body-sm text-content-muted">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What We Build
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Technology that feels like<br />an extension of your care
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every system we build is designed around your clients' journey — not around software features.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-body-sm text-content-secondary mb-4">{service.desc}</p>
                <span className="inline-block text-meta uppercase text-gold bg-gold-soft px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How It Works
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">
            Simple. Aligned. <em className="italic text-accent">Effective.</em>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i}>
                <div className="font-serif text-[4rem] font-light text-accent opacity-30 leading-none mb-4">
                  {step.num}
                </div>
                <h4 className="font-serif text-h4 mb-3">{step.title}</h4>
                <p className="text-body-sm text-content-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Investment
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Choose your level</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every engagement starts with a free strategy call. No pressure, no contracts — just clarity on what will move the needle for your business.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-dark-card border rounded-2xl p-10 flex flex-col transition-all hover:-translate-y-1 relative ${
                  tier.featured
                    ? 'border-accent bg-gradient-to-b from-accent-glow to-dark-card'
                    : 'border-border hover:border-border-hover'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-meta uppercase px-4 py-1 bg-accent text-white rounded-full font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-h2 mb-1">{tier.name}</h3>
                <p className="text-body-sm text-content-muted mb-6">{tier.subtitle}</p>
                <div className="font-serif text-[2rem] font-light text-accent mb-8 pb-8 border-b border-border">
                  {tier.price} <span className="text-body-sm text-content-muted font-sans">{tier.period}</span>
                </div>
                <ul className="flex-1 mb-8 space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="text-body-sm text-content-secondary pl-6 relative">
                      <span className="absolute left-0 top-1.5 text-accent text-[0.6rem]">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 rounded-full text-body-sm font-medium transition-all ${
                    tier.featured
                      ? 'bg-accent text-white btn-glow'
                      : 'bg-transparent border border-border text-content-secondary hover:border-border-hover hover:text-content-primary'
                  }`}
                >
                  {tier.featured ? 'Book a Call' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="work" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Our Work
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">Real audits. Real results.</h2>

          <div className="bg-gradient-to-br from-accent-glow to-gold-soft border border-border rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="font-serif text-h2 font-light mb-4">
                Psychedelic Retreat Center — Full Business Audit
              </h3>
              <p className="text-body text-content-secondary mb-6">
                Deep-scanned an established retreat center's entire digital presence, identified 12+ operational pain points, and designed a complete AI-powered growth roadmap — from client journey platform to integration chatbot to custom website rebuild.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
              >
                Request the Full Case Study
              </a>
            </div>
            <div className="flex gap-8 md:gap-12">
              <div className="text-center">
                <div className="font-serif text-[2.5rem] font-light text-accent">15+</div>
                <div className="text-meta uppercase text-content-muted mt-1">Hours / Week<br />Saved</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-[2.5rem] font-light text-accent">2-3x</div>
                <div className="text-meta uppercase text-content-muted mt-1">Booking<br />Potential</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-[2.5rem] font-light text-accent">$36K</div>
                <div className="text-meta uppercase text-content-muted mt-1">New Recurring<br />Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-section px-6 md:px-12 bg-gradient-to-b from-[#0d0d14] to-dark-bg">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            About
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12">The person behind the systems</h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
            <div className="w-full md:w-[280px] h-[340px] rounded-2xl border border-border relative overflow-hidden">
              <img
                src="/founder.jpeg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            </div>

            <div>
              <h3 className="font-serif text-h2 font-light mb-6">I didn't start in tech. I started in the work.</h3>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Before I wrote a line of code for this space, I was <em className="text-content-primary">in</em> it — sitting in ceremony, working with plant medicine, navigating the messy and beautiful process of integration. That's how I know the difference between a booking form and a <strong className="text-content-primary font-medium">sacred container</strong>.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I saw healers, facilitators, and coaches doing genuinely life-changing work — and then losing clients because their website was broken, their intake process was a mess, and they were drowning in manual admin. The gap between the quality of their work and the quality of their systems was massive.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                So I built the bridge. <strong className="text-content-primary font-medium">Astral Integration</strong> exists to give soul-led businesses the same caliber of technology that venture-backed startups have — without the corporate energy, without the jargon, and without losing what makes your work sacred.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-8">
                I build with modern tools — AI, cross-platform frameworks, custom automation — but the approach is deeply human. Every system I create starts with one question: <strong className="text-content-primary font-medium">how does this serve your clients better?</strong>
              </p>

              <div className="flex flex-col md:flex-row gap-8 pt-8 border-t border-border">
                <div className="flex-1">
                  <h5 className="text-meta uppercase text-accent mb-2">Stack</h5>
                  <p className="text-body-sm text-content-secondary">Next.js, React Native, Tamagui, Supabase, AI/LLMs, Stripe</p>
                </div>
                <div className="flex-1">
                  <h5 className="text-meta uppercase text-accent mb-2">Approach</h5>
                  <p className="text-body-sm text-content-secondary">Strategy first. Build fast. Iterate with you. Never generic.</p>
                </div>
                <div className="flex-1">
                  <h5 className="text-meta uppercase text-accent mb-2">Vibe</h5>
                  <p className="text-body-sm text-content-secondary">Your fractional CTO — not a freelancer, not an agency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Questions
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Before you ask</h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            The questions we hear most often from healers, coaches, and creators.
          </p>

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

      {/* TESTIMONIAL */}
      <section className="py-section px-6 md:px-12 text-center">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Kind Words
            <span className="w-8 h-px bg-accent" />
          </p>
          <blockquote className="font-serif text-display-sm font-light italic max-w-[750px] mx-auto mt-12 mb-8 relative">
            <span className="absolute -top-12 -left-8 font-serif text-[8rem] text-accent opacity-20">"</span>
            They understood our world before we even had to explain it. The systems they built feel like a natural extension of the care we provide to our clients.
          </blockquote>
          <p className="text-body-sm text-content-muted tracking-wider">
            <strong className="text-content-secondary font-medium">— Retreat Facilitator</strong> · Valle de Bravo, Mexico
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-br from-accent-glow/50 to-gold-soft/30 border-y border-border text-center">
        <div className="max-w-[600px] mx-auto reveal" ref={addRevealRef}>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Free: The Soul-Led<br />Business Tech Checklist
          </h2>
          <p className="text-body text-content-secondary mb-8">
            21 things to audit in your website, booking system, and client experience — with specific fixes you can make this week. No fluff, no upsell pitch.
          </p>

          <div className="flex flex-col md:flex-row gap-3 max-w-[480px] mx-auto">
            <input
              type="email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="Your best email"
              className="flex-1 px-6 py-4 bg-dark-card border border-border rounded-full text-content-primary placeholder-content-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={handleLeadSubmit}
              disabled={leadStatus === 'sending'}
              className={`px-8 py-4 rounded-full text-body-sm font-medium whitespace-nowrap transition-all btn-glow ${
                leadStatus === 'success' ? 'bg-green-600 text-white' :
                leadStatus === 'error' ? 'bg-red-600 text-white' :
                leadStatus === 'sending' ? 'bg-accent/70 text-white cursor-wait' :
                'bg-accent text-white'
              }`}
            >
              {leadStatus === 'success' ? 'Check your inbox ✦' :
               leadStatus === 'sending' ? 'Sending...' :
               leadStatus === 'error' ? 'Try again' : 'Send It'}
            </button>
          </div>
          <p className="text-meta text-content-muted mt-4">
            No spam. Unsubscribe anytime. Just one useful thing in your inbox.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-accent rounded-full blur-[150px] opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-content mx-auto relative z-10 reveal" ref={addRevealRef}>
          <h2 className="font-serif text-display font-light mb-6">
            Ready to scale<br />with <em className="italic text-accent">soul?</em>
          </h2>
          <p className="text-body text-content-secondary max-w-[500px] mx-auto mb-12">
            Book a free 30-minute strategy call. We'll audit your current setup, identify your biggest opportunities, and map out exactly what to build first.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-accent text-white rounded-full text-body font-medium btn-glow"
          >
            Book Your Free Call →
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Get in Touch
            </p>
            <p className="text-body text-content-secondary mb-10">
              Prefer email? Send us a message and we'll get back to you within 24-48 hours.
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
                    placeholder="Tell us about your project..."
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
                <h3 className="font-serif text-h2 mb-4">Message received</h3>
                <p className="text-body text-content-secondary mb-3">
                  We'll respond within 24-48 hours.
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
