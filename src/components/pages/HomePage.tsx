import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { caseStudies, CaseStudy } from '../../data/caseStudies';

export default function HomePage() {
  useDocumentMeta({
    title: 'Astral Integration — We take a % of what you make. No upfront. No fees.',
    description: 'We build custom digital infrastructure for artists, creatives, changemakers, practitioners, facilitators, and organizations. No upfront cost — we take a small % of what you make. Aligned partnership from day one.',
    ogUrl: 'https://astralintegration.co/',
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  const rotatingWords = ['practice', 'craft', 'teachings', 'art', 'community', 'business'];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % rotatingWords.length), 2400);
    return () => clearInterval(t);
  }, []);

  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  useEffect(() => {
    if (!activeStudy) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveStudy(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeStudy]);

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

      {/* ═══════ HERO ═══════ */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-accent rounded-full blur-[100px] opacity-40 -top-[200px] -right-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] bg-[#a67b52] rounded-full blur-[100px] opacity-40 -bottom-[100px] -left-[100px] animate-float" style={{ animationDelay: '-7s' }} />
        <div className="absolute w-[300px] h-[300px] bg-gold rounded-full blur-[100px] opacity-15 top-[30%] left-[10%] animate-float" style={{ animationDelay: '-14s' }} />

        <h1 className="font-serif text-display font-light max-w-[900px] relative z-10 animate-fadeUp animate-delay-300">
          Your <em key={wordIndex} className="italic gradient-text inline-block animate-fadeUp">{rotatingWords[wordIndex]}</em><br />deserves infrastructure that matches it.
        </h1>

        <p className="text-body text-content-secondary max-w-[680px] mt-8 relative z-10 animate-fadeUp animate-delay-500">
          We build the digital infrastructure. No upfront. We take a % of what you make.
        </p>

        <p className="text-body text-content-secondary max-w-[680px] mt-5 relative z-10 animate-fadeUp animate-delay-600">
          Send us your messy notes — a voice memo, a Google Doc, a screenshot of your Instagram bio. We'll research your work, build your platform, wire your payments, set up your community, and hand you the keys.
        </p>

        <p className="text-body-sm text-content-muted mt-6 relative z-10 animate-fadeUp animate-delay-700">
          Former CTO. Senior full-stack engineer. Your long-term technical partner.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-12 relative z-10 animate-fadeUp animate-delay-900">
          <a
            href="https://calendly.com/astral-integration/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Book a Call
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

      {/* ═══════ EMOTIONAL BRIDGE ═══════ */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <h2 className="font-serif text-display-sm font-light mb-8 max-w-[700px]">
            You inspired hundreds of people this weekend.
          </h2>
          <div className="max-w-prose space-y-5">
            <p className="text-body text-content-secondary leading-relaxed">
              And then spent the next three days fighting five disconnected tools.
            </p>
            <p className="text-body text-content-muted leading-relaxed">
              Courses in one place.<br />
              Bookings in another.<br />
              Payments somewhere else.<br />
              Community split across WhatsApp and email.
            </p>
            <p className="text-body text-content-primary leading-relaxed font-medium">
              Your practice deserves better. That's when infrastructure becomes strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 5 DOORS ═══════ */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Makers', href: '/makers', desc: 'Artisans, creators, slow-fashion, writers selling craft' },
              { label: 'Practitioners', href: '/practitioners', desc: 'Healers, coaches, facilitators running on scattered tools' },
              { label: 'Schools', href: '/schools', desc: 'Certification programs and structured learning paths' },
              { label: 'Retreats', href: '/retreats', desc: 'Booking, intake, and multi-stream revenue' },
              { label: 'Communities', href: '/communities', desc: 'Directories, events, and local platforms' },
              { label: 'Organizations', href: '/organizations', desc: 'Networks and facilitator infrastructure at scale' },
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

      {/* ═══════ FEATURED WORK ═══════ */}
      <section id="work" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Work
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Selected builds.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Different problems, different architectures. Same principle: original work, custom infrastructure, long-term partnership.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <button
                key={study.slug}
                onClick={() => study.url && setActiveStudy(study)}
                disabled={!study.url}
                className="bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-glow transition-all group text-left flex flex-col disabled:cursor-not-allowed disabled:opacity-70"
              >
                {/* browser frame + live iframe preview */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-border bg-dark-bg">
                  {/* browser chrome */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-dark-bg/95 backdrop-blur border-b border-border flex items-center px-3 gap-2 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-content-muted truncate">
                      {study.url ? new URL(study.url).hostname : 'private portal'}
                    </span>
                  </div>
                  {/* preview iframe — scaled down */}
                  {study.url ? (
                    <div className="absolute top-7 left-0 w-[1280px] h-[800px] origin-top-left pointer-events-none" style={{ transform: 'scale(0.3125)' }}>
                      <iframe
                        src={study.url}
                        title={`${study.client} preview`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts"
                      />
                    </div>
                  ) : (
                    <div className={`absolute inset-0 top-7 bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                      <span className="text-meta uppercase text-content-muted tracking-wider">private portal</span>
                    </div>
                  )}
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/30 transition-all flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <span className="px-4 py-2 bg-accent text-white text-meta uppercase tracking-wider rounded-full">
                      Open preview →
                    </span>
                  </div>
                </div>

                {/* card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-h4 font-light group-hover:text-accent transition-colors">{study.client}</h3>
                  <p className="text-meta uppercase text-gold mt-1 mb-3">{study.category}</p>
                  <p className="text-body-sm text-content-secondary leading-relaxed line-clamp-3 flex-1">{study.challenge}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/work"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Full case study writeups <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS (summary) ═══════ */}
      <section id="how" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How It Works
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Long-term partnership. Aligned from day one.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            I don't build and disappear. I build, maintain, and evolve your platform over years — because my success is tied to yours.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: '01', title: 'We talk.', desc: 'You tell me what you\'re building. I learn the work, the methodology, the people you serve. If it\'s a fit, I send a proposal within days.' },
              { step: '02', title: 'I build.', desc: 'Custom platform, real code, your brand. You see it come together week by week. Most projects launch in 2–6 weeks.' },
              { step: '03', title: 'I stay.', desc: 'This isn\'t a handoff. I remain your technical partner — maintaining, evolving, and scaling your platform as the work grows.' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-body-sm font-medium flex-shrink-0 ${
                    i === 2 ? 'bg-accent text-white' : 'bg-dark-card border border-border text-content-muted'
                  }`}>
                    {item.step}
                  </div>
                </div>
                <div className={`bg-dark-card border rounded-xl p-6 ${i === 2 ? 'border-accent/30' : 'border-border'}`}>
                  <h4 className="font-serif text-h4 mb-3">{item.title}</h4>
                  <p className="text-body-sm text-content-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Upfront cost', value: '$0' },
              { label: 'Revenue share', value: '5–15%' },
              { label: 'Timeline', value: '1–12 weeks' },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-meta uppercase text-content-muted mb-1">{item.label}</p>
                <p className="font-serif text-h2 font-light text-accent">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-content-muted mb-2">Every site is custom-built from scratch. No templates, no themes, no page builders.</p>
          <p className="text-body-sm text-content-muted mb-2">No upfront fees. We build for free, then take a small % of platform revenue from dollar one. Aligned partnership.</p>
          <p className="text-body-sm text-content-muted mb-2">You own everything. Code, data, domain. From day one.</p>
          <p className="text-body-sm text-content-muted mb-2">I stay on as your technical partner. My success is tied to yours.</p>
          <p className="text-body-sm text-content-muted mb-6 italic">Some people call this a fractional CTO. I just call it partnership.</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="/pricing"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Full pricing & FAQ <span aria-hidden="true">&rarr;</span>
            </a>
            <span className="hidden sm:inline text-content-muted">·</span>
            <a
              href="https://calendly.com/astral-integration/free-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Book a call <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT (short) ═══════ */}
      <section id="about" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
            <div className="w-[200px] h-[240px] rounded-2xl border border-border relative overflow-hidden mx-auto md:mx-0">
              <img src="/founder.jpeg" alt="Jordi Amat" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            </div>

            <div>
              <h2 className="font-serif text-h2 font-light mb-4">Jordi Amat.</h2>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Senior full-stack engineer. Former CTO. Access Bars practitioner. I spent a decade building production systems and leading engineering teams. Then I moved to Mazunte and started building for artists, creatives, changemakers, practitioners, facilitators, and organizations — the people and groups doing the most original work.
              </p>
              <a
                href="/about"
                className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
              >
                Full story <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Get in Touch
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">Tell me about your work.</h2>
            <p className="text-body-sm text-content-muted mb-10">
              No pitch. No pressure. Just a conversation about what you need and whether I can help.
            </p>

            {formStatus !== 'success' ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body-sm text-content-muted mb-3">Name</label>
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
                  <label htmlFor="email" className="block text-body-sm text-content-muted mb-3">Email</label>
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
                  <label htmlFor="message" className="block text-body-sm text-content-muted mb-3">What are you working on?</label>
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

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Send Message'}
                  </button>
                  <span className="text-content-muted text-body-sm">or</span>
                  <a
                    href="https://calendly.com/astral-integration/free-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
                  >
                    Book a call directly <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-h2 mb-4">Message received.</h3>
                <p className="text-body text-content-secondary mb-3">I'll get back to you within 24–48 hours.</p>
                <p className="text-body-sm text-content-muted mb-8">Check your inbox for a reply from hello@astralintegration.co</p>
                <button onClick={() => setFormStatus('idle')} className="text-body-sm text-accent hover:underline">
                  Send another message
                </button>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 sm:items-center">
              <p className="text-body-sm text-content-muted">hello@astralintegration.co</p>
              <a
                href="/contact"
                className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
              >
                Full contact page with Calendly <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ═══════ CASE STUDY PREVIEW MODAL ═══════ */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-[100] bg-dark-bg/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeUp"
          onClick={() => setActiveStudy(null)}
        >
          <div
            className="relative w-full max-w-[1400px] h-full max-h-[90vh] bg-dark-card border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={() => setActiveStudy(null)}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark-bg/90 hover:bg-accent border border-border hover:border-accent flex items-center justify-center text-content-secondary hover:text-white transition-all"
            >
              ✕
            </button>

            {/* iframe column */}
            <div className="flex-1 bg-dark-bg flex flex-col min-h-0">
              {/* browser chrome */}
              <div className="h-9 bg-dark-bg border-b border-border flex items-center px-4 gap-2 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-3 text-meta font-mono text-content-muted">
                  {activeStudy.url ? new URL(activeStudy.url).hostname : ''}
                </span>
              </div>
              {activeStudy.url && (
                <iframe
                  src={activeStudy.url}
                  title={activeStudy.client}
                  className="w-full flex-1 border-0 bg-white"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              )}
            </div>

            {/* info column */}
            <div className="md:w-[380px] p-6 md:p-8 overflow-y-auto bg-dark-card border-t md:border-t-0 md:border-l border-border flex-shrink-0">
              <p className="text-meta uppercase text-accent mb-2">{activeStudy.category}</p>
              <h3 className="font-serif text-h2 font-light mb-2">{activeStudy.client}</h3>
              <p className="text-meta uppercase text-gold mb-6">{activeStudy.type}</p>

              <p className="text-body-sm text-content-secondary leading-relaxed mb-6 line-clamp-[12]">{activeStudy.challenge}</p>

              <div className="flex flex-col gap-3">
                <a
                  href={`/work/${activeStudy.slug}`}
                  className="px-6 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow text-center"
                >
                  Read full case study
                </a>
                {activeStudy.url && (
                  <a
                    href={activeStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    Visit live site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <p className="text-meta text-content-muted mt-6">
                Press <kbd className="px-1.5 py-0.5 bg-dark-bg border border-border rounded text-[10px]">Esc</kbd> or click outside to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
