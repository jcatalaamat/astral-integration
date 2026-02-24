import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { caseStudies } from '../../data/caseStudies';

// Show 4 featured case studies on homepage
const featured = caseStudies.slice(0, 4);

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
          Your mastery deserves<br />infrastructure that <em className="italic gradient-text">matches it.</em>
        </h1>

        <p className="text-body text-content-secondary max-w-[640px] mt-8 relative z-10 animate-fadeUp animate-delay-500">
          I build custom digital platforms for schools, practices, retreats, and original work — from first platform to global networks of facilitators and communities.
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

      {/* ═══════ 5 DOORS ═══════ */}
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

          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((study) => (
              <a
                key={study.slug}
                href={`/work/${study.slug}`}
                className="block bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all group"
              >
                <div className={`w-full border-b border-border bg-gradient-to-br ${study.gradient} p-6`}>
                  <h3 className="font-serif text-h3 font-light group-hover:text-accent transition-colors">{study.client}</h3>
                  <p className="text-meta uppercase text-gold mt-1">{study.type}</p>
                </div>
                <div className="p-6">
                  <p className="text-body-sm text-content-secondary leading-relaxed line-clamp-3">{study.challenge}</p>
                  <span className="inline-flex items-center gap-1 text-body-sm text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read case study <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/work"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              All {caseStudies.length} case studies <span aria-hidden="true">&rarr;</span>
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
              { label: 'Platform build', value: 'From $1,500' },
              { label: 'Ongoing partnership', value: 'From $150/mo' },
              { label: 'Timeline', value: '2 – 6 weeks' },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-meta uppercase text-content-muted mb-1">{item.label}</p>
                <p className="font-serif text-h2 font-light text-accent">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-content-muted mb-6">You own everything. Code, data, domain. From day one.</p>

          <a
            href="/how-it-works"
            className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
          >
            How it works & FAQ <span aria-hidden="true">&rarr;</span>
          </a>
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
                Senior full-stack engineer. Former CTO. Access Bars practitioner. I spent a decade building production systems and leading engineering teams. Then I moved to Mazunte and started building for the people doing the most original work in education, healing, and community.
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
    </div>
  );
}
