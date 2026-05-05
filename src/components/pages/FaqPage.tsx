import { useEffect, useRef, useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

type QA = { q: string; a: string };
type Section = { eyebrow: string; title: string; intro?: string; items: QA[] };

const sections: Section[] = [
  {
    eyebrow: 'General',
    title: 'Who, what, why.',
    items: [
      {
        q: 'Who is Astral Studio for?',
        a: 'Practitioners, makers, schools, retreats, communities, and small organizations who already have real revenue or a real practice but are running the backend on duct tape — Squarespace + Calendly + Stripe + a Google Sheet that breaks every quarter. The throughline: your work has structure, and the platform you\'re using doesn\'t hold it.',
      },
      {
        q: 'What does Astral actually build?',
        a: 'Custom platforms. Bookings, payments, memberships, automations, and an AI substrate trained on your work. Not a template, not a SaaS reseller. Real code, designed around how you actually teach, sell, or run retreats — and maintained for as long as you\'re working.',
      },
      {
        q: 'Why one builder instead of an agency?',
        a: 'Because agencies sell time. I sell architecture. An agency assigns three junior developers and a project manager and charges $200K because that\'s how the business works. I\'ve built this kind of platform five times before — I know what the architecture should look like before we start. One senior builder with deep context outperforms a team of strangers managing a Jira board.',
      },
      {
        q: 'How is this different from hiring a freelancer?',
        a: 'A freelancer builds what you spec and leaves. I learn your work, make architectural decisions based on understanding the domain, and stay as long as the work calls for it. The rev-share model means I\'m financially aligned with the platform succeeding — not with billing more hours.',
      },
    ],
  },
  {
    eyebrow: 'Money',
    title: 'How pricing works.',
    items: [
      {
        q: 'What does an engagement cost?',
        a: 'The default deal: $0 setup, $0 monthly, 15% of revenue for 18 months. No cap. After the 18 months, the rev share ends. The platform is yours, free and clear, from then on.',
      },
      {
        q: 'What counts as "revenue" for the rev share?',
        a: 'Gross revenue passing through the platform — bookings, memberships, product sales, retreat deposits, anything that gets paid through your Stripe account. Refunds are netted out. Off-platform revenue (cash payments, separate stripe accounts) is not counted.',
      },
      {
        q: 'What if I make $0 in a given month?',
        a: 'Then you pay $0 that month. That\'s the entire point. Squarespace charges you $60/mo whether you make money or not. Astral charges only when the platform earns. Months when the work is quiet, the cost is quiet too.',
      },
      {
        q: 'What if the platform makes a lot more than expected?',
        a: 'Then I make more, you make more, and we both win. There\'s no cap because if your revenue is ten times what we projected, the architecture is doing its job — and that\'s exactly what the rev-share model is supposed to reward. If it ever feels misaligned, we can talk about restructuring. The rev share is 18 months, not forever.',
      },
      {
        q: 'Can I negotiate the rev share down?',
        a: 'Yes. The 15% × 18 months is the anchor offer with $0 upfront. If you want a lower percentage, we can add a flat retainer to balance it out. Some clients prefer "predictable flat" — $15K + $700/mo, no rev share. Some want to own outright — $25K + $1.5K/mo. The deal shape follows the work and the relationship.',
      },
    ],
  },
  {
    eyebrow: 'Process',
    title: 'What it actually takes.',
    items: [
      {
        q: 'How long does a project take?',
        a: 'Most platforms launch in 2–6 weeks depending on scope. A practitioner with a single booking flow ships faster than a school with cohorts, certifications, and a facilitator directory. You see weekly progress throughout — the platform takes shape in real time, not after a six-month silence.',
      },
      {
        q: 'What\'s expected of me during the build?',
        a: 'A 30–60 minute kickoff conversation. Honest answers about your work and your current setup. A handful of decisions on copy, brand tokens, and content priorities. Reviews on what I ship each week. You\'re involved in key decisions — never managing a developer.',
      },
      {
        q: 'What tech stack do you use?',
        a: 'Modern, standard, no exotic frameworks. Typically React + TypeScript on the frontend, Node + Postgres on the backend, Stripe for payments. The architecture is shaped by what the work needs — but no WordPress, no Squarespace, no template-on-template stack.',
      },
      {
        q: 'What if scope changes mid-build?',
        a: 'Scope changes are the rule, not the exception. The proposal frames the initial shape — but as you see the platform come together, you\'ll see things you didn\'t know to ask for. Small additions land in the same engagement. Larger pivots become a conversation about scope, timeline, or a follow-on phase.',
      },
    ],
  },
  {
    eyebrow: 'Ownership',
    title: 'What\'s yours.',
    items: [
      {
        q: 'Do I own the code?',
        a: 'Yes. From day one. The repo is in your GitHub account, the deploy keys are yours, the domain is in your name. If we ever part ways, you walk away with the keys.',
      },
      {
        q: 'Do I own the data?',
        a: 'Yes. Your customer list, your bookings, your content — all in your database, on a server in your name. No platform owns the relationship.',
      },
      {
        q: 'Do I own the AI model and the training data?',
        a: 'Yes. The model is trained on your content, fine-tuned for your work, and stored in your account. If you stop working with me, the AI doesn\'t leave. It\'s not a subscription to my AI — it\'s your model, on your infrastructure.',
      },
      {
        q: 'Can I take the platform somewhere else?',
        a: 'Yes. The codebase is standard React + TypeScript + Node — any senior full-stack engineer can pick it up. There\'s no proprietary lock-in, no astral-only dependencies, no SaaS billing you can\'t cancel. Standard tools you can hire for anywhere.',
      },
    ],
  },
  {
    eyebrow: 'Continuity',
    title: 'What if I stop building.',
    items: [
      {
        q: 'What if Jordi gets hit by a bus?',
        a: 'Honest answer: the platform keeps running. Your code is in your GitHub, your domain is in your name, your data is in your database, your AI is on your infrastructure. The codebase is standard, well-documented, and any senior engineer can pick it up the next day. The architecture is what you\'re paying for — not access to me.',
      },
      {
        q: 'What\'s documented?',
        a: 'A README at the root, comments through any non-obvious logic, a runbook for deploys, and a data schema diagram. I document as I build — not as a separate project at the end. The goal is for someone else to pick it up cold and ship a feature within a week.',
      },
      {
        q: 'How do I export everything if we part ways?',
        a: 'You don\'t need to export — you already have it. Code in your GitHub. Data in your database. Domain in your name. The "export" is just keeping doing what you\'re doing. If you want a clean handoff to a new engineer, I write a transition doc and walk them through the architecture in a paid handoff session. No drama, no lock-in.',
      },
      {
        q: 'Why 18 months on the rev share?',
        a: 'Because that\'s how long it usually takes for the platform to outearn the build. Less than 18 months and the rev share doesn\'t cover the time invested. More than 18 months and you\'re paying me for work I did long ago. After month 18, the rev share ends and the platform is yours — full stop.',
      },
    ],
  },
  {
    eyebrow: 'Data + security',
    title: 'Where things live.',
    items: [
      {
        q: 'Where is my data hosted?',
        a: 'On a server in your name — typically Hetzner (EU) or a comparable provider. You hold the credentials. No data lives on my infrastructure unless you specifically ask for shared hosting. For organization-tier engagements with stricter compliance requirements, we can discuss data-residency specifics on the call.',
      },
      {
        q: 'How are backups handled?',
        a: 'Daily automated database backups, weekly full snapshots, retention configurable by you. Backups go to your own S3 bucket (or equivalent). If something breaks, the rollback is in minutes, not hours.',
      },
      {
        q: 'Is the platform GDPR compliant?',
        a: 'Yes — for the standard cases. EU data residency, user-initiated data export, account deletion, cookie consent, and a privacy policy template. For specialized compliance (HIPAA, SOC 2, etc.) we discuss requirements during scoping.',
      },
    ],
  },
];

export default function FaqPage() {
  useDocumentMeta({
    title: 'FAQ — Astral Studio',
    description: 'How pricing works. What you own. What happens if I stop building. The honest answers serious buyers ask before signing.',
    ogUrl: 'https://astralstudio.io/faq',
  });

  // JSON-LD FAQPage schema for google rich snippets
  useEffect(() => {
    const id = 'faq-jsonld';
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    const allQAs = sections.flatMap((s) => s.items);
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allQAs.map((qa) => ({
        '@type': 'Question',
        name: qa.q,
        acceptedAnswer: { '@type': 'Answer', text: qa.a },
      })),
    });
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  const [openKey, setOpenKey] = useState<string | null>(null);
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
          <p className="mono-tag text-saffron-dp mb-8 tracking-[0.32em] text-[10px]">FAQ</p>
          <h1 className="serif font-light leading-[0.95] tracking-tight max-w-[1100px]" style={{ fontSize: 'clamp(44px, 6.5vw, 110px)' }}>
            The honest <em className="em-accent">answers</em>.
          </h1>
          <p className="text-body md:text-lg text-ink-2 max-w-[640px] mt-10 leading-relaxed">
            Pricing, ownership, timeline, what happens if I stop building. The questions serious buyers ask before signing — answered directly.
          </p>
        </div>
      </section>

      {sections.map((section, si) => (
        <section
          key={si}
          className={`py-section px-6 md:px-12 ${si % 2 === 0 ? 'bg-bg-2' : ''}`}
        >
          <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              {section.eyebrow}
            </p>
            <h2 className="font-serif text-display-sm font-light mb-12 max-w-prose">
              {section.title}
            </h2>

            <div className="max-w-prose space-y-3">
              {section.items.map((qa, qi) => {
                const key = `${si}-${qi}`;
                const open = openKey === key;
                return (
                  <div
                    key={key}
                    className={`bg-cream border ${open ? 'border-saffron-dp/40' : 'border-rule'} overflow-hidden transition-colors`}
                    style={{ borderRadius: '12px' }}
                  >
                    <button
                      onClick={() => setOpenKey(open ? null : key)}
                      className="w-full px-5 md:px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-bg-2/40 transition-colors"
                      aria-expanded={open}
                    >
                      <span className="serif text-h4 md:text-h3 text-ink leading-tight">{qa.q}</span>
                      <span className={`text-saffron-dp text-xl font-light leading-none flex-shrink-0 mt-1 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {open && (
                      <div className="px-5 md:px-6 pb-5 pt-1">
                        <p className="text-body-sm text-content-secondary leading-relaxed">{qa.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CLOSING CTA */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal text-center" ref={addRevealRef}>
          <h2 className="font-serif font-light mx-auto max-w-[800px]" style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1.05 }}>
            Question not <em className="em-accent">here?</em>
          </h2>
          <p className="text-body text-content-secondary max-w-prose mx-auto mt-6 leading-relaxed">
            Send me a note. I read every one. If it's a question other buyers should see the answer to, it ends up on this page.
          </p>
          <div className="mt-10">
            <a href="/contact" className="btn-jugat saffron">Send me a note →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
