import { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

type Tool = { name: string; desc: string };
type Group = { eyebrow: string; title: string; tools: Tool[] };

const groups: Group[] = [
  {
    eyebrow: 'Payments',
    title: 'Money in, money out.',
    tools: [
      { name: 'Stripe', desc: 'The default. Subscriptions, one-time, deposits, payment plans, refunds, multi-currency.' },
      { name: 'Stripe Connect', desc: 'For multi-party platforms — facilitator networks, marketplaces, schools paying out to teachers.' },
      { name: 'Square', desc: 'When a client insists. Less ergonomic than Stripe but works.' },
      { name: 'Manual / wire', desc: 'For high-touch retreats where the deposit conversation matters more than the checkout flow.' },
    ],
  },
  {
    eyebrow: 'Bookings + scheduling',
    title: 'Time as a primitive.',
    tools: [
      { name: 'Calendly', desc: 'Initial booking flow during early phases. Eventually replaced by native bookings tied to your client database.' },
      { name: 'Native bookings', desc: 'Custom-built into the platform — type-aware (75-min session vs 7-day retreat), capacity-aware, intake-tied.' },
      { name: 'Google / Apple / Outlook calendar', desc: 'Two-way sync. Bookings land on your real calendar; busy times block the public booking page automatically.' },
    ],
  },
  {
    eyebrow: 'Email + messaging',
    title: 'Reaching your people.',
    tools: [
      { name: 'Resend', desc: 'Transactional + bulk email. Default for most clients. Clean API, clean deliverability.' },
      { name: 'Mailerlite / ConvertKit', desc: 'When you want a marketing-grade interface for sequences. We integrate, but the data still lives in your database.' },
      { name: 'Twilio', desc: 'SMS for OTP, appointment reminders, retreat-day logistics.' },
      { name: 'WhatsApp Business API', desc: 'For markets where WhatsApp is the email — Latin America, India, parts of Europe.' },
    ],
  },
  {
    eyebrow: 'AI models',
    title: 'The substrate.',
    tools: [
      { name: 'OpenAI', desc: 'GPT-4-class for general fine-tuning. Fast, cheap per request, broad capability.' },
      { name: 'Anthropic (Claude)', desc: 'For nuance — careful answers, longer context, lineage-specific work where tone matters more than speed.' },
      { name: 'Local (Ollama)', desc: 'For data-sensitive work — therapy, medical, legal. Self-hosted, no third-party data exposure.' },
      { name: 'Vector stores', desc: 'pgvector or Pinecone for retrieval. Your training corpus stays under your control.' },
    ],
  },
  {
    eyebrow: 'Code + hosting',
    title: 'Where it all runs.',
    tools: [
      { name: 'GitHub', desc: 'Code lives in a repo in your account. Deploy keys are yours. You can fire me and any senior engineer can pick it up.' },
      { name: 'Hetzner', desc: 'EU-based hosting. Strong privacy posture, sane pricing, no surprise bills.' },
      { name: 'Vercel', desc: 'When the project is mostly frontend with edge needs. Less control than Hetzner but instant global CDN.' },
      { name: 'Caddy / nginx', desc: 'Reverse proxy + automatic HTTPS. Set up once, runs forever.' },
    ],
  },
  {
    eyebrow: 'Storage + media',
    title: 'Files, video, backups.',
    tools: [
      { name: 'Hetzner Object Storage', desc: 'S3-compatible, EU-based, cheap. Default for backups + media.' },
      { name: 'Cloudflare R2', desc: 'When egress matters — public images, media downloads, retreat photo galleries.' },
      { name: 'Mux / Cloudflare Stream', desc: 'Video on demand for course content, dharma talks, recorded sessions.' },
    ],
  },
  {
    eyebrow: 'Analytics',
    title: 'Privacy-first only.',
    tools: [
      { name: 'Plausible', desc: 'Lightweight, GDPR-compliant, no cookie banner needed. Default for marketing pages.' },
      { name: 'PostHog (self-hosted)', desc: 'For product analytics inside the platform — feature usage, funnel analysis. Self-hosted so the data stays yours.' },
      { name: '— not Google Analytics', desc: 'By default. Google Analytics ties your visitors\' data to ad profiles. Available on request, not the default.' },
    ],
  },
  {
    eyebrow: 'Community + notifications',
    title: 'Talking to humans.',
    tools: [
      { name: 'Discord / Slack / Telegram', desc: 'Notifications + community spaces. Webhook-based, easy to integrate. None of these own your member list.' },
      { name: 'Native member areas', desc: 'For deeper community work — directories, event RSVPs, threaded discussions tied to your member identity, not a platform identity.' },
    ],
  },
];

export default function IntegrationsPage() {
  useDocumentMeta({
    title: 'Integrations — Astral Studio',
    description: 'The tools astral integrates with — Stripe, Calendly, Resend, OpenAI, Anthropic, Hetzner, GitHub, and more. Whatever the work needs.',
    ogUrl: 'https://astralstudio.io/integrations',
  });

  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navigation />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-content mx-auto">
          <p className="mono-tag text-saffron-dp mb-8 tracking-[0.32em] text-[10px]">Integrations</p>
          <h1 className="serif font-light leading-[0.95] tracking-tight max-w-[1100px]" style={{ fontSize: 'clamp(44px, 6.5vw, 110px)' }}>
            Whatever the <em className="em-accent">work needs.</em>
          </h1>
          <p className="text-body md:text-lg text-ink-2 max-w-[640px] mt-10 leading-relaxed">
            The tools astral typically integrates with. These are the most common, not the only options. Missing your stack? Ask — I'll integrate with whatever the work calls for.
          </p>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={gi} className={`py-section px-6 md:px-12 ${gi % 2 === 0 ? 'bg-bg-2' : ''}`}>
          <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              {g.eyebrow}
            </p>
            <h2 className="font-serif text-display-sm font-light mb-12 max-w-prose">
              {g.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 max-w-[1000px]">
              {g.tools.map((t, ti) => (
                <div key={ti} className="bg-cream border border-rule p-5 md:p-6" style={{ borderRadius: '12px' }}>
                  <p className="serif text-h4 text-ink mb-2">{t.name}</p>
                  <p className="text-body-sm text-ink-2 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CLOSING */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal text-center" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 inline-flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Don't see your tool
            <span className="w-8 h-px bg-accent" />
          </p>
          <h2 className="font-serif font-light mx-auto max-w-[800px]" style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1.05 }}>
            Whatever the work <em className="em-accent">needs.</em>
          </h2>
          <p className="text-body text-content-secondary max-w-prose mx-auto mt-8 leading-relaxed">
            If your existing stack uses something not on this list — Notion, Airtable, HubSpot, Zapier, your own internal tool — that's normal. I integrate with whatever holds your work today and either keep it or replace it depending on what the architecture calls for.
          </p>
          <div className="mt-12">
            <a href="/contact" className="btn-jugat saffron">Tell me what's on your screen →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
