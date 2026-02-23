import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const diagnosticItems = [
  'You use Linktree because your site can\'t do what you need',
  'Your course page has no way to enroll',
  'Payment and scheduling are two separate steps',
  'You\'re copy-pasting between 4+ tools every week',
  'Your students ask "where do I sign up?" and you send 3 links',
  'You know your site doesn\'t reflect your work',
];

const whatIBuild = [
  { title: 'One site that IS your platform', desc: 'Not a brochure with a Calendly link. A site where people book, pay, enroll, and access everything — without leaving.' },
  { title: 'Booking + payment in one step', desc: 'No more "click here to book, then go here to pay." One flow, one confirmation, done.' },
  { title: 'Course enrollment that works', desc: 'Your program has a landing page, an enroll button, and a student experience. Not a PDF and a Stripe link.' },
  { title: 'Email capture built in', desc: 'Every visitor who lands on your site has a path to stay connected. No third-party pop-up plugin.' },
  { title: 'Everything under your brand', desc: 'Your domain. Your colors. Your voice. Not Teachable\'s logo. Not Calendly\'s booking page. Yours.' },
];

const relevantWork = [
  {
    client: 'Uria Tsur',
    type: 'Vocal Freedom Facilitator — Touring 18+ Cities',
    desc: 'Was managing events across 8 ticketing platforms, losing audience data, spending hours on admin. Now has one platform: ticketing, membership (300+ subscribers), and a facilitator training course. Bilingual.',
    url: '/work#uria-tsur',
    gradient: 'from-violet-900/25 via-violet-900/5 to-transparent',
    testimonial: {
      quote: 'I was managing tickets on 8 platforms, WhatsApp groups for everything, total chaos. Jordi put it all in one place. Now I just focus on my workshops and the community runs itself.',
      name: 'Uria Tsur',
      role: 'Vocal Facilitator & Musician',
    },
  },
  {
    client: 'Inner Ascend',
    type: 'Healing Membership & Facilitator Pipeline',
    desc: 'A trauma-informed healing practice with a loyal following — but no way to stay with people between ceremonies. Now has a 12-month curriculum of 97 practices, a personalized AI healing assistant, and a pipeline into facilitator training.',
    url: '/work#inner-ascend',
    gradient: 'from-lime-900/25 via-lime-900/5 to-transparent',
    testimonial: null,
  },
];

export default function PractitionersPage() {
  useDocumentMeta({
    title: 'For Practitioners — Astral Integration',
    description: 'You have the audience. You deserve the infrastructure. I replace your 6 disconnected tools with one platform — your brand, your domain, everything connected.',
    ogUrl: 'https://astralintegration.co/practitioners',
  });

  const [formData, setFormData] = useState({ name: '', email: '', site: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(diagnosticItems.length).fill(false));
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  const checkedCount = checkedItems.filter(Boolean).length;

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
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      const diagnosticResults = diagnosticItems
        .filter((_, i) => checkedItems[i])
        .map((item) => `  - ${item}`)
        .join('\n');

      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Practitioner Inquiry: ${formData.name}`,
          message: [
            `FROM: /practitioners page`,
            '',
            formData.site ? `CURRENT SITE: ${formData.site}` : '',
            '',
            diagnosticResults ? `DIAGNOSTIC (${checkedCount}/${diagnosticItems.length} checked):\n${diagnosticResults}` : '',
            '',
            formData.message ? `MESSAGE:\n${formData.message}` : '',
          ].filter(Boolean).join('\n'),
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', site: '', message: '' });
      setFormErrors({});
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-content mx-auto">
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            For Practitioners
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            You have the audience.<br />You deserve the <em className="italic gradient-text">infrastructure.</em>
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            You're running your practice on Wix + Stripe + Calendly + Linktree + a prayer. I replace all of it with one platform — your brand, your domain, everything connected.
          </p>
        </div>
      </section>

      {/* The Diagnostic */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Diagnostic
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Is this you?</h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            Check the ones that apply. Be honest.
          </p>

          <div className="space-y-4 max-w-prose mb-10">
            {diagnosticItems.map((item, i) => (
              <label
                key={i}
                className={`flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all ${
                  checkedItems[i]
                    ? 'bg-accent-glow border-accent/30'
                    : 'bg-dark-card border-border hover:border-border-hover'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedItems[i]}
                  onChange={() => {
                    const next = [...checkedItems];
                    next[i] = !next[i];
                    setCheckedItems(next);
                  }}
                  className="mt-1 accent-accent w-4 h-4 flex-shrink-0"
                />
                <span className={`text-body-sm ${checkedItems[i] ? 'text-content-primary' : 'text-content-secondary'}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>

          {checkedCount >= 2 && (
            <div className="bg-dark-card border border-accent/20 rounded-xl p-6 max-w-prose animate-fadeUp">
              <p className="text-body text-content-primary font-medium mb-2">
                {checkedCount} out of {diagnosticItems.length}. Yeah — your infrastructure doesn't match your work.
              </p>
              <p className="text-body-sm text-content-secondary">
                The good news: this is exactly what I fix. Keep reading.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* What I Build */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What I Build
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            One platform. Everything connected.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            I don't add more tools to the pile. I replace the pile with one thing that actually works for what you do.
          </p>

          <div className="space-y-6 max-w-prose">
            {whatIBuild.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="text-body text-content-primary font-medium mb-1">{item.title}</h3>
                  <p className="text-body-sm text-content-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Work */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Practitioners I've Built For
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">
            They were where you are.
          </h2>

          <div className="space-y-8">
            {relevantWork.map((item, i) => (
              <div key={i} className="bg-dark-card border border-border rounded-2xl overflow-hidden">
                <div className={`relative w-full border-b border-border bg-gradient-to-br ${item.gradient} p-6 md:p-8`}>
                  <h3 className="font-serif text-h2 font-light">{item.client}</h3>
                  <p className="text-meta uppercase text-gold mt-1">{item.type}</p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-body-sm text-content-secondary leading-relaxed mb-4">{item.desc}</p>
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
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/work"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              All 8 case studies <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Model
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            I start building before you hit the big time.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            A small upfront investment covers the build — and for the right projects, I start at zero. Then I take a percentage of revenue processed through the platform. I grow when you grow.
          </p>

          <div className="bg-dark-card border border-border rounded-2xl p-8 md:p-10 max-w-prose">
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Upfront', value: '$0 – 1.5K', detail: 'Covers build and research' },
                { label: 'Revenue share', value: '8 – 12%', detail: 'Platform transactions only' },
                { label: 'Timeline', value: '2 – 3 weeks', detail: 'To launch' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-meta uppercase text-content-muted mb-1">{item.label}</p>
                  <p className="font-serif text-h3 font-light text-accent">{item.value}</p>
                  <p className="text-meta text-content-muted mt-1">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border space-y-2">
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Your in-person revenue</strong> — sessions, retreats, anything off-platform — is 100% yours. Always.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">You own everything.</strong> Code, data, domain, content. From day one.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Buyout option.</strong> You can buy out the revenue share at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Let's Talk
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">
              Send me your site. I'll tell you what's broken.
            </h2>
            <p className="text-body text-content-secondary mb-4">
              No cost. No pitch. I'll look at your setup — your site, your tools, your booking flow — and tell you exactly what's working, what's leaking, and what it would take to fix it.
            </p>
            <p className="text-body-sm text-content-muted mb-10">
              Or just tell me about your work and where you're stuck.
            </p>

            {formStatus !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="prac-name" className="block text-body-sm text-content-muted mb-3">Name</label>
                    <input
                      type="text"
                      id="prac-name"
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
                    <label htmlFor="prac-email" className="block text-body-sm text-content-muted mb-3">Email</label>
                    <input
                      type="email"
                      id="prac-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                        formErrors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                      }`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && <p className="mt-2 text-body-sm text-red-400">{formErrors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="prac-site" className="block text-body-sm text-content-muted mb-3">Your current site (optional)</label>
                  <input
                    type="text"
                    id="prac-site"
                    value={formData.site}
                    onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                    className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                    placeholder="yoursite.com or Instagram handle"
                  />
                </div>

                <div>
                  <label htmlFor="prac-message" className="block text-body-sm text-content-muted mb-3">What are you working on?</label>
                  <textarea
                    id="prac-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
                    placeholder="Tell me about your work, your people, and where your current setup is falling short..."
                  />
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
                  I'll look at your setup and get back to you within 24–48 hours.
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
