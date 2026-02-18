import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

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
    type: 'Reiki Academy — Granada, Spain',
    desc: 'Full academy platform for a Reiki Master Teacher with 300+ students. Course paths, retreat bookings, student portal, practitioner directory, community hub.',
  },
  {
    client: 'Ozina Camp',
    type: 'Farm Stay & Residency — Mallorca',
    desc: 'Custom platform for a farm stay and artist residency. Stays, land story, residency applications, booking — replacing a fragmented online presence.',
  },
  {
    client: 'Uria Tsur',
    type: 'Vocal Facilitator — 18+ Cities',
    desc: 'Event booking hub for a facilitator touring across Europe and the Americas. Centralized 8 ticket platforms into one. Membership portal for 300+ subscribers.',
  },
  {
    client: 'Mazunte Today',
    type: 'Community — Oaxaca, Mexico',
    desc: 'Live events board for a coastal town. 60+ venues, event submission, admin approval, bilingual, SEO-optimized. Used daily by locals and visitors.',
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
  { q: 'How much does this actually cost?', a: "Most projects land between $3,000–$5,000 for the core platform, plus add-on modules if you need them. You'll know the exact number before we start. No surprises." },
  { q: 'How long does a project take?', a: "Most platforms launch in 2–3 weeks. Complex builds with multiple add-ons might take 4–5 weeks. I'll give you a timeline upfront and I stick to it." },
  { q: 'Do I need to be technical?', a: "Not at all. I handle everything — design, development, deployment. You focus on your work. I build the systems around it." },
  { q: 'I already have a Wix / Squarespace / Kajabi site. Can you work with it?', a: "I build custom. That means we'll likely replace your current setup with something purpose-built for your business. Your content migrates over, but the platform is new and yours." },
  { q: "Will it feel like my brand — not like a tech product?", a: "That's the entire point. Every build starts with deep research into your world. The result looks and feels like you — not like software." },
  { q: "What about AI — how does that fit into my business?", a: "AI isn't a gimmick here. It's practical. An AI assistant trained on your methodology can support your clients between sessions, answer common questions, guide intake — and free up your time for the work only you can do." },
  { q: 'Can you build me a mobile app?', a: "Yes. I build cross-platform — one codebase that works on iOS, Android, and web. It's an add-on module that makes sense once your core platform is solid." },
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
        <div className="absolute w-[400px] h-[400px] bg-[#4A3AE0] rounded-full blur-[100px] opacity-40 -bottom-[100px] -left-[100px] animate-float" style={{ animationDelay: '-7s' }} />
        <div className="absolute w-[300px] h-[300px] bg-gold rounded-full blur-[100px] opacity-15 top-[30%] left-[10%] animate-float" style={{ animationDelay: '-14s' }} />

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
                className="bg-dark-card border border-border rounded-2xl p-8 hover:border-border-hover hover:-translate-y-1 transition-all"
              >
                <p className="text-meta uppercase text-gold mb-4">{item.type}</p>
                <h3 className="font-serif text-h2 font-light mb-4">{item.client}</h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

      {/* PRICING */}
      <section id="pricing" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Pricing
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Simple and transparent.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            One offer. I research your business, design the whole thing, build it, and launch it. You own everything.
          </p>

          {/* Core Offer */}
          <div className="bg-dark-card border border-accent rounded-2xl p-10 md:p-12 mb-16 relative bg-gradient-to-b from-accent-glow to-dark-card">
            <span className="absolute -top-3 left-8 text-meta uppercase px-4 py-1 bg-accent text-white rounded-full font-semibold">
              Core Offer
            </span>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <h3 className="font-serif text-h2 font-light mb-2">Rebrand & Platform Build</h3>
                <p className="text-body text-content-secondary mb-6">
                  I take your scattered online presence and turn it into one custom-built platform. Bookings, events, services, content, contact — everything your people need, in one place that's yours.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Deep business research & audit',
                    'Brand direction & visual identity',
                    'Custom-built platform (real code, not templates)',
                    'Booking & scheduling system',
                    'Services, events & offerings pages',
                    'Email capture & contact flows',
                    'Mobile-optimized & SEO-ready',
                    '2 weeks post-launch support',
                    'You own the code, the data, the domain',
                    'Delivered in 2–3 weeks',
                  ].map((feature, j) => (
                    <li key={j} className="text-body-sm text-content-secondary pl-6 relative">
                      <span className="absolute left-0 top-1.5 text-accent text-[0.6rem]">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right md:min-w-[200px]">
                <div className="font-serif text-[2.5rem] font-light text-accent leading-tight">
                  $3,000 – $5,000
                </div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block mt-6 px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Add-On Modules */}
          <div className="mb-16">
            <h3 className="font-serif text-h2 font-light mb-2">Add-On Modules</h3>
            <p className="text-body-sm text-content-secondary mb-8">Start with the core. Expand as you grow.</p>
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
            <p className="text-body-sm text-content-secondary mb-8">Stay supported after launch.</p>
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

      {/* ABOUT */}
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
                I didn't start in tech for this space. I started in the work — sitting in ceremony, training in polarity and embodiment, facilitating integration, building community on the land. That's how I know the difference between a booking form and a <strong className="text-content-primary font-medium">sacred container</strong>.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                I saw teachers and healers doing genuinely life-changing work — and then losing students because their systems were held together with WhatsApp groups and spreadsheets. The gap between the quality of their work and the quality of their infrastructure was massive.
              </p>
              <p className="text-body text-content-secondary leading-relaxed mb-8">
                So I built the bridge. I build with AI-powered tools, which means I ship in weeks what agencies quote months for. I understand your world because I live in it.
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

      {/* CONTACT */}
      <section id="contact" className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Contact
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">Tell me about your work.</h2>
            <p className="text-body text-content-secondary mb-10">
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
