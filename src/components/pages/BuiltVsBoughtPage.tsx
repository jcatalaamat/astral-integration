import { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const alternatives = [
  {
    audience: 'Practitioners',
    name: 'Squarespace + Calendly + Stripe',
    intro: 'The patchwork stack most practitioners are on. Five tools held together with duct tape. Works — until your work outgrows it.',
    limits: [
      'Can\'t share state — your client books on Calendly, pays on Stripe, fills the form on Typeform, and you stitch it together by hand',
      'Intake forms can\'t be tied to specific session types',
      'No client history view — you scroll through email to remember what Maya said last time',
      'Payment plans, deposits, and refunds are an ordeal',
      'No AI trained on your work — every reply is from scratch',
      'You don\'t own the customer relationship — the platform owns the list',
    ],
    closer: 'Five tools held together with duct tape. I build the one tool — the one that knows your work.',
  },
  {
    audience: 'Schools',
    name: 'Teachable / Thinkific',
    intro: 'Course platforms. Your school isn\'t a course — it\'s a multi-level certification system with prerequisites, practice hours, and a practitioner pipeline.',
    limits: [
      'Can\'t enforce prerequisites between levels — students can access any content they pay for',
      'Can\'t track practice hours toward certification thresholds',
      'No automatic practitioner directory when someone graduates',
      'Can\'t manage cohorts with different start dates at the same level',
      'Can\'t train an AI assistant on your specific methodology',
      'No student progression dashboard across all levels',
    ],
    closer: 'Teachable was built for digital courses. Your school needs school infrastructure.',
  },
  {
    audience: 'Retreats',
    name: 'Booking.com / Airbnb / Squarespace booking',
    intro: 'Built to fill rooms. Your retreats are an arc — discovery, intake, preparation, experience, integration. Not a hotel stay.',
    limits: [
      'Generic booking grid instead of an offering with its own story and flow',
      'No intake per offering type — a 7-day retreat needs different questions than a 1-night homestay',
      'No prep sequences, no integration follow-ups, no membership invitation',
      'Capacity, room assignments, and currency mix all leave the platform — back to a spreadsheet',
      'You pay 15-20% commission to keep someone else\'s booking infrastructure',
      'The platform owns the guest, not you',
    ],
    closer: 'Booking.com fills rooms. You\'re running a relationship from inquiry to integration.',
  },
  {
    audience: 'Communities',
    name: 'Facebook groups / Mighty Networks / Discord',
    intro: 'Free, fast, familiar. Also leaky. Your members, your relationships, your reach — all owned by someone else.',
    limits: [
      'You don\'t own the member list — Meta owns it, Discord owns it',
      'Algorithmic feeds bury anything that doesn\'t generate engagement',
      'No real event RSVPs that connect to a calendar',
      'No facilitator directory, language toggle, or location filter — none are native',
      'Ads next to your content',
      'People delete Facebook every six months and your community goes with them',
    ],
    closer: 'Free isn\'t free when the platform owns the relationship. Build on land you own.',
  },
  {
    audience: 'Makers',
    name: 'Shopify / Etsy / Big Cartel',
    intro: 'Built for fast-moving consumer goods. Your craft moves at a different speed.',
    limits: [
      'Product pages prioritize "buy now" — your craft needs "process first"',
      'No native edition data, material origin, dye batch — the things that make the piece what it is',
      'Waitlist UX is a third-party plugin, not a primitive',
      'Inventory model assumes scale — you make 12 a year',
      'The store still looks like a Shopify store, no matter the theme',
      'You can\'t hold a 2,000-word essay next to a $400 piece without it feeling clumsy',
    ],
    closer: 'Shopify sells more, faster. Your work sells less, slower, and worth more. Different infrastructure.',
  },
  {
    audience: 'Organizations',
    name: 'A custom build by an agency',
    intro: 'For large networks, the alternative isn\'t templates — it\'s six engineers and twelve months. Real custom infrastructure costs $200K+ and takes a year before anyone uses it.',
    limits: [
      'Six-figure budget before a single user signs in',
      'Six engineers managing a project nobody fully understands',
      'A team that doesn\'t understand the work, just the spec',
      'Quarterly steering committees instead of weekly progress',
      'Twelve months of meetings before the first feature lands',
      'And when it ships, the codebase belongs to the agency, not you',
    ],
    closer: 'You don\'t need an agency. You need a senior builder who has done this five times before.',
  },
];

export default function BuiltVsBoughtPage() {
  useDocumentMeta({
    title: 'Built vs Bought — Astral Studio',
    description: 'Squarespace is $60 a month. Astral is $0 a month and 15% of revenue for 18 months. The cheaper option depends on what you\'re actually buying.',
    ogUrl: 'https://astralstudio.io/built-vs-bought',
  });

  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
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
          <p className="mono-tag text-saffron-dp mb-8 tracking-[0.32em] text-[10px]">Built vs bought</p>
          <h1 className="serif font-light leading-[0.95] tracking-tight max-w-[1100px]" style={{ fontSize: 'clamp(44px, 6.5vw, 110px)' }}>
            $60 a month. <em className="em-accent">$0 a month.</em><br />
            Which is cheaper?
          </h1>
          <p className="text-body md:text-lg text-ink-2 max-w-[640px] mt-10 leading-relaxed">
            Squarespace charges $60 every month — even on the months you make $0. Astral charges $0 monthly and 15% of revenue for 18 months. The math is different than you think.
          </p>
        </div>
      </section>

      {/* THE FLIP MATH */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The flip
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            What you stop paying. What you start keeping.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            A solo therapist running on Squarespace + Calendly + Stripe. €333/hour. Spending ~10 hours a month on platform admin — vendor research, integration glue, payment troubleshooting, "why isn't this syncing." Real numbers:
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px]">
            <div className="bg-cream border border-rule p-6" style={{ borderRadius: '14px' }}>
              <p className="mono-tag text-[10px] text-mute mb-3">Squarespace stack</p>
              <div className="space-y-2 text-sm text-ink-2">
                <div className="flex justify-between"><span>Platform fees</span><span>€60/mo</span></div>
                <div className="flex justify-between"><span>Admin time · 10 hrs × €333</span><span>€3,330/mo</span></div>
              </div>
              <div className="border-t border-rule mt-4 pt-3 flex justify-between items-baseline">
                <span className="text-sm text-ink font-medium">Real cost</span>
                <span className="serif text-2xl text-ink"><em className="em-accent not-italic">€3,390</em><span className="text-mute text-sm">/mo</span></span>
              </div>
            </div>

            <div className="bg-cream border border-saffron-dp/40 p-6 shadow-card" style={{ borderRadius: '14px' }}>
              <p className="mono-tag text-[10px] text-saffron-dp mb-3">Astral · €5K monthly revenue</p>
              <div className="space-y-2 text-sm text-ink-2">
                <div className="flex justify-between"><span>Platform fees</span><span>€0/mo</span></div>
                <div className="flex justify-between"><span>15% of €5K revenue</span><span>€750/mo</span></div>
                <div className="flex justify-between"><span>Admin time · ~0 hrs</span><span>€0/mo</span></div>
              </div>
              <div className="border-t border-rule mt-4 pt-3 flex justify-between items-baseline">
                <span className="text-sm text-ink font-medium">Real cost</span>
                <span className="serif text-2xl text-ink"><em className="em-accent not-italic">€750</em><span className="text-mute text-sm">/mo</span></span>
              </div>
            </div>
          </div>

          <p className="text-body-sm text-content-muted max-w-prose mt-10">
            Squarespace charges you for being a platform. Astral charges you only when the platform earns. The difference is what you stop doing — vendor research, template fights, integration glue, the "why isn't this syncing" panic — and start doing instead. Sessions. Writing. Teaching. Your craft.
          </p>
        </div>
      </section>

      {/* THE 6 ALTERNATIVES */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Compared honestly
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Six alternatives. <em className="em-accent not-italic">Six different limits.</em>
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Every audience compares to something different. Here's what each off-the-shelf alternative can't do — and why custom infrastructure changes the shape of the work.
          </p>

          <div className="space-y-12 max-w-prose">
            {alternatives.map((a, i) => (
              <div key={i} className="border-t border-rule pt-10">
                <p className="mono-tag text-[10px] text-saffron-dp mb-3">{a.audience}</p>
                <h3 className="font-serif text-h2 font-light mb-3">"Why not <em className="em-accent not-italic">{a.name}</em>?"</h3>
                <p className="text-body-sm text-content-secondary mb-6">{a.intro}</p>
                <div className="space-y-2.5">
                  {a.limits.map((l, k) => (
                    <div key={k} className="flex items-start gap-3">
                      <span className="text-accent text-body-sm mt-0.5 flex-shrink-0">&times;</span>
                      <p className="text-body-sm text-content-secondary leading-relaxed">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="text-body-sm text-content-primary font-medium mt-6 italic">{a.closer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN SQUARESPACE IS THE RIGHT ANSWER */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="grid md:grid-cols-2 gap-12 max-w-[1100px]">
            <div>
              <p className="text-meta uppercase text-content-muted mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-content-muted" />
                Honest
              </p>
              <h2 className="font-serif text-h1 font-light mb-4">
                When Squarespace is the right answer.
              </h2>
              <ul className="space-y-3 text-body-sm text-content-secondary">
                <li>· Solo creator, single product</li>
                <li>· Low average revenue per customer</li>
                <li>· Side income, not your main work</li>
                <li>· You already have plenty of time on your hands</li>
                <li>· The tool stack isn't actually slowing you down</li>
              </ul>
              <p className="text-body-sm text-content-primary font-medium mt-6">
                If that's you — Squarespace is great. Don't oversell yourself a platform you don't need.
              </p>
            </div>
            <div>
              <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-accent" />
                When Astral makes sense
              </p>
              <h2 className="font-serif text-h1 font-light mb-4">
                When the math flips.
              </h2>
              <ul className="space-y-3 text-body-sm text-content-secondary">
                <li>· Multiple revenue streams (sessions, retreats, products, memberships)</li>
                <li>· Real revenue — €3K+ a month, growing</li>
                <li>· Time = money — every hour on admin is an hour not earning</li>
                <li>· You are the bottleneck — the work scales only if the platform does</li>
                <li>· Your work has structure that no template can hold</li>
              </ul>
              <p className="text-body-sm text-content-primary font-medium mt-6">
                If that's you — Squarespace is a tax. The platform you need is the one built around how you actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal text-center" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 inline-flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What you're actually buying
            <span className="w-8 h-px bg-accent" />
          </p>
          <h2 className="font-serif font-light mx-auto max-w-[900px]" style={{ fontSize: 'clamp(36px, 5vw, 78px)', lineHeight: 1.05 }}>
            The architecture. <em className="em-accent">Not the template.</em>
          </h2>
          <p className="text-body md:text-lg text-content-secondary max-w-prose mx-auto mt-8 leading-relaxed">
            The architecture is what makes the AI possible, the rev share possible, the long-term partnership possible. Templates can't do that. They were built for someone else.
          </p>
          <div className="mt-12">
            <a
              href="https://calendly.com/astral-integration/free-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-jugat saffron"
            >
              Book a 20-min call →
            </a>
          </div>
          <p className="mono-tag text-[10px] text-mute mt-6 tracking-[0.18em]">
            See if astral fits your shape · no pitch
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
