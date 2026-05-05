import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const featurePillars = [
  {
    name: 'A site that feels like the work',
    desc: 'Not Etsy. Not Shopify\'s default. A custom-designed home that breathes the texture of what you make — generous space, slow typography, intentional rhythm. The site is the first impression of the craft.',
  },
  {
    name: 'Your catalog, presented as art',
    desc: 'Each piece gets its own page, its own story, its own pace. Photography, materials, process, price. Not a product grid optimized for conversion — a gallery designed for the right person to find the right piece.',
  },
  {
    name: 'Stripe checkout · no marketplace fees',
    desc: 'Direct sales. You set the price, you keep the brand, you own the relationship. Stripe takes their 2.9%. Etsy keeps 6.5% + listing fees + ad costs. I replace that.',
  },
  {
    name: 'Inventory + custom orders',
    desc: 'Track what\'s available, what\'s reserved, what\'s sold. For bespoke work, a custom-order pathway that begins with a conversation, not a cart.',
  },
  {
    name: 'Newsletter + gentle re-engagement',
    desc: 'When a new collection drops, your people hear about it first. Email capture built in, list grows organically. No Mailchimp template — your voice, your rhythm.',
  },
  {
    name: 'You own everything',
    desc: 'Your code lives in your GitHub. Your domain is in your name. Your customer list is in your database. If we ever part ways, you walk away with the keys. No platform holding your craft hostage.',
  },
];

const realBuilds = [
  { name: 'Mend a Mano', what: 'Bespoke linen + wool robes', url: 'https://mendamano.xyz', vibe: 'Linen texture overlay, earthy palette, custom-order conversation' },
  { name: 'Kura Terra', what: 'Plant-dyed slow fashion', url: 'https://kuraterra.xyz', vibe: 'Earth tones, gallery presentation, process before price' },
  { name: 'Portal Poem', what: 'Writer & poet, long-form work', url: 'https://portalpoem.com', vibe: 'Paper aesthetic, careful typography, reading first' },
];

export default function MakersPage() {
  useDocumentMeta({
    title: 'For makers — Astral Studio',
    description: 'I build the shop your craft deserves. Custom site, inventory, Stripe checkout, order management, brand voice. Built around your work, not a template.',
    ogUrl: 'https://astralstudio.io/makers',
  });

  const [formData, setFormData] = useState({ name: '', email: '', site: '', message: '' });
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
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          subject: `Maker / Artisan Inquiry: ${formData.name}`,
          message: [
            `FROM: /makers page`,
            '',
            formData.site ? `CURRENT PRESENCE: ${formData.site}` : '',
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
            For Makers & Artisans
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            I build the <em className="italic gradient-text">shop</em><br />your craft deserves.
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            Custom site, inventory, Stripe checkout, order management, the brand voice your work actually has. Built around what you make, not a template.
          </p>
        </div>
      </section>

      {/* The Problem with marketplaces */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Problem
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12 max-w-[700px]">
            Marketplaces flatten the craft.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-[900px]">
            {[
              { where: 'Etsy', what: '6.5% transaction fee + listing fees + ad costs. Your work next to mass-produced lookalikes. Their algorithm decides who sees you.' },
              { where: 'Shopify default', what: 'Built for high-velocity e-commerce. Your bespoke piece treated like a SKU. Theme that looks like everyone else\'s.' },
              { where: 'Instagram only', what: 'No checkout, no inventory, no email list, no archive. The platform owns the relationship — you rent the audience.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-border rounded-xl p-6">
                <p className="text-body text-content-primary font-medium mb-3">{item.where}</p>
                <p className="text-body-sm text-content-secondary">{item.what}</p>
              </div>
            ))}
          </div>

          <p className="text-body text-content-primary font-medium mt-12 max-w-prose">
            Slow craft needs slow infrastructure. A site that doesn't rush. A pace that matches the work. Buying that begins with finding the right piece, not pushing through a funnel.
          </p>
        </div>
      </section>

      {/* What I build */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What I Build
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            A site that reads like a gallery.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Not a shop. A digital home for the craft — process, materials, pieces, story. Buying happens; it just isn't the centerpiece.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px]">
            {featurePillars.map((pillar, i) => (
              <div key={i} className="bg-dark-card border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-serif text-sm font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-h4 text-content-primary">{pillar.name}</h3>
                </div>
                <p className="text-body-sm text-content-secondary leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it looks like — UI mockup */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What it looks like
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Slow shop. <em className="em-accent not-italic">Story first.</em>
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            A product page that doesn't feel like Shopify. Process before price. Waitlist instead of buy-now-pay-now. The pace of the work, on the page.
          </p>

          <div className="relative max-w-[480px] mx-auto bg-cream border border-rule overflow-hidden shadow-card" style={{ borderRadius: '14px' }}>
            <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-rule bg-bg-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rule-str" />
              <span className="w-2.5 h-2.5 rounded-full bg-rule-str opacity-60" />
              <span className="w-2.5 h-2.5 rounded-full bg-rule-str opacity-40" />
              <span className="ml-3 mono-tag text-[9px] text-mute">your-craft.com · linen wrap</span>
            </div>
            <div className="p-5 space-y-5 min-h-[420px]">
              {/* product "image" — paper-textured placeholder */}
              <div className="aspect-[4/3] bg-bg-3 border border-rule grid place-items-center relative overflow-hidden" style={{ borderRadius: '8px' }}>
                <div className="absolute inset-0 opacity-40" style={{ background: 'repeating-linear-gradient(45deg, transparent 0, transparent 6px, rgba(178,97,26,0.04) 6px, rgba(178,97,26,0.04) 7px)' }} />
                <span className="serif text-3xl text-saffron-dp/40 italic relative">indigo</span>
              </div>

              {/* title + edition */}
              <div>
                <p className="serif text-xl text-ink leading-tight">Linen wrap · indigo dye</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="mono-tag text-[9px] text-saffron-dp">1 of 12 · made by hand</span>
                  <span className="w-1 h-1 rounded-full bg-mute" />
                  <span className="mono-tag text-[9px] text-mute">2026 batch</span>
                </div>
              </div>

              {/* expandable story */}
              <div className="border border-rule p-3" style={{ borderRadius: '8px' }}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="mono-tag text-[8px] text-saffron-dp">The process</p>
                  <span className="text-saffron-dp text-xs">−</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  The mordant takes four days. Linen rinsed, dipped, dried, dipped again. Indigo deepens with air, not heat. Each piece holds its own gradient — no two finish the same.
                </p>
              </div>

              {/* waitlist (not buy now) */}
              <div className="bg-bg-2 border border-rule p-3" style={{ borderRadius: '8px' }}>
                <p className="mono-tag text-[8px] text-saffron-dp mb-1.5">Next batch ships November</p>
                <p className="text-xs text-ink mb-2.5">Join the waitlist · no charge until ready</p>
                <div className="flex gap-1.5">
                  <input type="text" placeholder="your@email.com" className="flex-1 px-2.5 py-2 border border-rule text-[11px] text-ink-2 bg-cream" style={{ borderRadius: '6px' }} readOnly />
                  <button className="btn-jugat saffron text-[11px] px-3 py-2">Save my spot →</button>
                </div>
              </div>

              <p className="mono-tag text-[8px] text-mute text-center pt-1">Your craft · sold the way it was made.</p>
            </div>
          </div>
        </div>
      </section>

      {/* "Why not Shopify?" — inline comparison */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Honest Question
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            "Why not Shopify?"
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-8">
            Shopify is built for fast-moving consumer goods. Your craft moves at a different speed. Different infrastructure for a different rhythm. Here's what Shopify can't do:
          </p>
          <div className="max-w-prose space-y-3">
            {[
              'Lead with story — every product page prioritizes "buy now," your craft needs "process first"',
              'Show edition data, material origin, dye batch, mordant time — the things that make the piece what it is',
              'Run a real waitlist — it\'s a third-party plugin, not a native primitive',
              'Adapt to a 12-piece-a-year inventory model — the system assumes scale',
              'Look like anything but Shopify — even with a custom theme, the bones show',
              'Hold a 2,000-word essay next to a $400 piece without it feeling clumsy',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent text-body-sm mt-0.5 flex-shrink-0">&times;</span>
                <p className="text-body-sm text-content-secondary">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-content-primary font-medium mt-8 max-w-prose">
            Shopify sells more, faster. Your work sells less, slower, and worth more. Different infrastructure.
          </p>
        </div>
      </section>

      {/* Real builds */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Real Builds
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">
            Three makers. Three textures.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {realBuilds.map((build, i) => (
              <a
                key={i}
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-all"
              >
                <h3 className="font-serif text-h3 font-light group-hover:text-accent transition-colors mb-2">{build.name}</h3>
                <p className="text-meta uppercase text-gold mb-4">{build.what}</p>
                <p className="text-body-sm text-content-secondary leading-relaxed mb-4">{build.vibe}</p>
                <span className="text-meta text-accent inline-flex items-center gap-1">
                  Visit site <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How engagements start */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How to start
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Every engagement is shaped to the work.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-8">
            You own the code, your customers, your domain. From day one. No marketplace fee, no monthly subscription, no platform tax.
          </p>
          <a
            href="https://calendly.com/astral-integration/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Book a call
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Get in Touch
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">Send me your instagram and a photo of one piece.</h2>
            <p className="text-body-sm text-content-muted mb-10">
              No pitch. Just a conversation about your work and whether I can build the right home for it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-body-sm text-content-muted mb-3">Your name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${formErrors.name ? 'border-red-500/40' : 'border-border'}`}
                  placeholder="Your name"
                />
                {formErrors.name && <p className="text-meta text-red-400 mt-2">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-body-sm text-content-muted mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${formErrors.email ? 'border-red-500/40' : 'border-border'}`}
                  placeholder="your@email.com"
                />
                {formErrors.email && <p className="text-meta text-red-400 mt-2">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="site" className="block text-body-sm text-content-muted mb-3">Where your work lives now (optional)</label>
                <input
                  type="text"
                  id="site"
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                  className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                  placeholder="Etsy shop, Instagram, or 'nowhere yet'"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-body-sm text-content-muted mb-3">What do you make?</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none"
                  placeholder="Tell me about your craft, materials, process — whatever feels true."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  {formStatus === 'sending' ? 'Sending…' : formStatus === 'success' ? <><CheckCircle className="w-4 h-4" /> Sent</> : 'Send Message'}
                </button>
                <span className="text-content-muted text-body-sm">or</span>
                <a
                  href="https://calendly.com/astral-integration/free-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
                >
                  Book a call directly <span aria-hidden="true">→</span>
                </a>
              </div>
              {formStatus === 'error' && <p className="text-meta text-red-400">Something went wrong. Try again or email hello@astralstudio.io directly.</p>}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
