import { useState, useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const tiers = [
  {
    name: 'Boutique',
    who: 'For makers & artisans.',
    desc: 'You make beautiful things. Your work needs a digital home that honors the craft — not a template, not a marketplace fee, not a generic shop.',
    monthly: '5% rev share',
    timeline: '1–2 weeks',
    includes: [
      'Custom-designed site',
      'Product catalog · showcase',
      'Inventory tracking',
      'Stripe checkout',
      'Order management',
      'Mobile responsive · SEO',
      'Hosting · SSL · backups',
      '30-day bug warranty post-launch',
    ],
    audience: 'Textile artisans, ceramicists, plant dyers, slow-fashion brands, bespoke makers, writers selling print work.',
    highlight: false,
  },
  {
    name: 'Service',
    who: 'For solo practitioners & facilitators.',
    desc: 'You teach, heal, hold space. Your bookings, payments, and brand should live in one place that feels like you — not five tools that don\'t talk.',
    monthly: '8% rev share',
    timeline: '2–3 weeks',
    includes: [
      'Everything in Boutique',
      'Booking calendar (1:1 + group)',
      'Pre-session intake forms',
      'Email automation (confirmations, reminders)',
      'Testimonials · press · lineage',
      'Multi-offering pages (sessions, workshops, retreats)',
      'Direct partnership channel (no support tickets)',
    ],
    audience: 'Yoga teachers, healers, coaches, breathwork facilitators, sound facilitators, integration therapists, touring teachers.',
    highlight: false,
  },
  {
    name: 'Membership',
    who: 'For schools, retreat centers, communities.',
    desc: 'Your work has students, members, retreats. People come back. The platform needs to remember them, host their journey, and grow with them.',
    monthly: '12% rev share',
    timeline: '4–6 weeks',
    includes: [
      'Everything in Service',
      'Member login · portal',
      'Recurring subscription billing',
      'Gated content',
      'Courses · curriculum delivery',
      'Community space (forum, threads)',
      'Member directory',
      'Drip sequences (onboarding, re-engagement)',
      'Multi-stream revenue routing',
    ],
    audience: 'Retreat centers, certification schools, ceremony houses, multi-program teachers, women\'s circles, men\'s groups.',
    highlight: true,
  },
  {
    name: 'Systems',
    who: 'For multi-program organizations & networks.',
    desc: 'Your methodology is taught by hundreds. Multiple languages, regions, programs. The infrastructure needs to match the scale of the work.',
    monthly: '15% rev share',
    timeline: '6–12 weeks',
    includes: [
      'Everything in Membership',
      'Multilingual (2+ languages)',
      'AI assistant trained on your methodology',
      'Certification + progression tracking',
      'Public practitioner directory (auto-populated)',
      'Custom workflows + automations',
      'API integrations to existing tools',
      'Advanced analytics + dashboards',
      'Multi-region / sub-brand support',
      'CTO-level technical leadership',
    ],
    audience: 'Lineage organizations, global certification programs, methodology networks (Mariana Harpreet, Jugat Guru, KRI, 3HO scale).',
    highlight: false,
  },
];

const universals = [
  { bold: 'You own everything.', rest: 'Code, data, domain, content. From day one. Always.' },
  { bold: 'Real code.', rest: 'Custom-built platform, not templates or no-code tools you\'ll outgrow.' },
  { bold: 'Managed hosting.', rest: 'I handle servers, uptime, security, SSL, backups.' },
  { bold: 'Ongoing maintenance.', rest: 'Bug fixes, updates, and platform health.' },
  { bold: 'Direct access to me.', rest: 'Not a support ticket system. Not a junior dev.' },
  { bold: 'No lock-in.', rest: 'If you want to leave, you take everything with you.' },
];

const faqs = [
  {
    q: 'There\'s really no upfront cost?',
    a: 'Right. I build your platform at no cost to you. I only earn when your platform earns — a small % of revenue from dollar one. If your platform never earns, I never earn. I\'m betting on your success alongside you.',
  },
  {
    q: 'How does the revenue share actually work?',
    a: 'Each month you send me a Stripe export of platform revenue. I invoice the agreed % on the prior month\'s gross. Refunds, processing fees, and taxes are deducted before the share is calculated. Audit rights once a year. All financials stay confidential.',
  },
  {
    q: 'What counts as "platform revenue"?',
    a: 'Revenue collected through the platform I built — bookings, course sales, retreat deposits, memberships, products. I don\'t take a share of in-person work that doesn\'t flow through the platform, or pre-existing offerings that weren\'t migrated to it.',
  },
  {
    q: 'What if I\'m just starting out and don\'t have revenue yet?',
    a: 'Perfect. I build now, you grow into it. My share scales with your revenue — small at the start, meaningful when you scale. I want you to grow as fast as possible, because I grow with you.',
  },
  {
    q: 'Can I upgrade tiers later?',
    a: 'Yes. Most partnerships start at one tier and grow. A practitioner offering 1:1 sessions (Service) might launch a retreat series and move to Membership. The rev share follows the build — when I add new features, the share goes up only on revenue from those features, not retroactively.',
  },
  {
    q: 'How long is the partnership?',
    a: 'The rev share term is 24 months from launch. After that, month-to-month with 60-day notice. During the initial term, mutual exit only — except in cases of breach or platform shutdown.',
  },
  {
    q: 'What if I want to buy out the rev share later?',
    a: 'Possible — typically 6–12 months of average rev share paid as a lump sum. I negotiate fairly. The point isn\'t to lock you in; it\'s to align incentives long enough that the partnership pays off for both sides.',
  },
  {
    q: 'What does "you own everything" actually mean?',
    a: 'The code lives in your GitHub (or I transfer it). The domain is in your name. The database is on your infrastructure. The Stripe / payment accounts are yours. If our partnership ends tomorrow, you walk away with a fully functional platform and zero dependencies on me. No lock-in. Ever.',
  },
];

export default function PricingPage() {
  useDocumentMeta({
    title: 'Pricing — Astral Studio',
    description: 'I take a % of what you make. No upfront cost. Four tiers — Boutique 5%, Service 8%, Membership 12%, Systems 15% — based on what I build. You own everything from day one.',
    ogUrl: 'https://astralstudio.io/pricing',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-content mx-auto">
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Pricing
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            I take a % of what you make. <em className="italic gradient-text">No upfront cost.</em>
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            I build your platform and stay alongside you. A small % of your revenue — from dollar one. When you make money, I make money. Aligned partnership.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-body text-content-secondary leading-relaxed mb-5">
              How this actually works:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-dark-card border border-border rounded-xl p-6">
                <p className="text-body text-content-primary font-medium mb-1">1. I build it. No cost to you.</p>
                <p className="text-body-sm text-content-secondary">Custom platform, real code, your brand. Ships in 1–12 weeks depending on scope. You own everything from day one — code, data, domain.</p>
              </div>
              <div className="bg-dark-card border border-border rounded-xl p-6">
                <p className="text-body text-content-primary font-medium mb-1">2. I take a small % of what you make.</p>
                <p className="text-body-sm text-content-secondary">Revenue from your platform — from dollar one. Your wins are my wins. The bigger you grow, the more we both earn.</p>
              </div>
              <div className="bg-dark-card border border-border rounded-xl p-6">
                <p className="text-body text-content-primary font-medium mb-1">3. I stay alongside you.</p>
                <p className="text-body-sm text-content-secondary">Maintenance, new features, technical leadership — included. Not a handoff. A partnership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-dark-card border rounded-2xl p-8 flex flex-col ${
                  tier.highlight ? 'border-accent/40 ring-1 ring-accent/20' : 'border-border'
                }`}
              >
                <h3 className="font-serif text-h2 font-light mb-2">{tier.name}</h3>
                <p className="text-body-sm text-accent font-medium mb-3">{tier.who}</p>
                <p className="text-body-sm text-content-muted mb-8">{tier.desc}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-meta uppercase text-content-muted mb-1">Upfront</p>
                    <p className="font-serif text-h3 font-light text-content-secondary">$0</p>
                  </div>
                  <div>
                    <p className="text-meta uppercase text-content-muted mb-1">Revenue share</p>
                    <p className="font-serif text-h2 font-light text-accent">{tier.monthly}</p>
                  </div>
                  <div>
                    <p className="text-meta uppercase text-content-muted mb-1">Timeline</p>
                    <p className="text-body-sm text-content-secondary">{tier.timeline}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex-1">
                  <p className="text-meta uppercase text-content-muted mb-4">Includes</p>
                  <ul className="space-y-2">
                    {tier.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-body-sm text-content-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-meta text-content-muted">{tier.audience}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Beyond Enterprise */}
          <div className="bg-dark-card border border-border rounded-2xl p-8 md:p-10 max-w-prose">
            <h3 className="font-serif text-h3 mb-3">Something bigger in mind?</h3>
            <p className="text-body-sm text-content-secondary mb-6">
              If your project doesn't fit neatly into a tier — multiple platforms, complex migrations, unusual technical challenges, or you're not sure what you need yet — let's just talk. I'll assess the full picture and send a clear proposal.
            </p>
            <a
              href="/contact"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Start a conversation <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* What Every Tier Includes */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Every Partnership
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12">
            Non-negotiables.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {universals.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-body-sm text-content-secondary">
                  <strong className="text-content-primary">{item.bold}</strong> {item.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            FAQ
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">
            Common questions.
          </h2>

          <div className="max-w-prose space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-card/50 transition-colors"
                >
                  <span className="text-body-sm text-content-primary font-medium pr-4">{faq.q}</span>
                  <span className={`text-content-muted flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-body-sm text-content-secondary leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto text-center reveal" ref={addRevealRef}>
          <h2 className="font-serif text-display-sm font-light mb-6">
            Send me your project.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mx-auto mb-10">
            I take on 3–5 partnerships at a time. Tell me about your work and I'll send a clear proposal — scope, timeline, and the rev share that fits.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
