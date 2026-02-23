import { useEffect, useRef, useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const process = [
  {
    step: '01',
    title: 'We talk.',
    desc: 'You tell me what you\'re building — or what you\'ve already built — and where it needs to go. I learn the work, the methodology, the people you serve. I assess whether this is a partnership I want to invest in.',
    details: [
      'A 30–60 minute conversation about your work, your people, and your current setup',
      'I research your space — what exists, what\'s missing, what the architecture needs to look like',
      'If it\'s a fit, I send you a partnership proposal within a few days: scope, timeline, pricing',
      'Not every project is the right fit. But stage isn\'t the filter — the work is',
    ],
  },
  {
    step: '02',
    title: 'I build.',
    desc: 'Custom platform, real code, your brand. You see it come together week by week. Most projects launch in 2–6 weeks depending on scope.',
    details: [
      'Weekly progress updates — you see the platform taking shape in real time',
      'Your content, your logic, your brand. I handle the engineering',
      'Iterative — we adjust as we go based on what we learn',
      'You\'re involved in key decisions but never managing a developer',
    ],
  },
  {
    step: '03',
    title: 'I stay.',
    desc: 'This isn\'t a handoff. I remain your technical partner — maintaining, evolving, and scaling your platform as the work grows.',
    details: [
      'Ongoing maintenance, updates, and feature development',
      'New offerings, new revenue streams, new stages of growth — the infrastructure adapts',
      'I\'m financially invested in the platform\'s success through revenue share',
      'You always have a senior engineer who knows your system inside and out',
    ],
  },
];

const tiers = [
  {
    name: 'Solo Practitioner',
    who: 'Healers, coaches, facilitators, artists with an audience and no real platform',
    upfront: '$0 – 1.5K',
    share: '8 – 12%',
    timeline: '2 – 3 weeks',
    includes: [
      'Custom website with your brand',
      'Booking + payment in one flow',
      'Course or program enrollment',
      'Email capture and client management',
      'Mobile responsive',
    ],
    highlight: false,
  },
  {
    name: 'School or Academy',
    who: 'Multi-level certification programs, training schools, structured educational pathways',
    upfront: '$1K – 3K',
    share: '8 – 12%',
    timeline: '3 – 5 weeks',
    includes: [
      'Everything in Solo Practitioner',
      'Multi-level certification system with prerequisites',
      'Student progression tracking',
      'Practice hour logging',
      'Practitioner directory',
      'AI assistant trained on your methodology',
    ],
    highlight: true,
  },
  {
    name: 'Organization',
    who: 'Retreat centers, multi-offering ecosystems, networks with complex infrastructure needs',
    upfront: 'Scoped per project',
    share: 'Negotiated',
    timeline: '4 – 8 weeks',
    includes: [
      'Everything in School or Academy',
      'Multi-stream revenue management',
      'Regional coordination and multi-language support',
      'Facilitator networks and directory infrastructure',
      'Custom intake flows per offering type',
      'Enterprise-level architecture',
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: 'What does "revenue share on platform transactions" mean?',
    a: 'If someone books, enrolls, or pays through your platform, I take a percentage of that transaction. Revenue from your in-person work, existing channels, or anything that doesn\'t flow through the platform is 100% yours. Always.',
  },
  {
    q: 'Can I buy out the revenue share?',
    a: 'Yes. At any time after the minimum 12-month term, you can buy out the revenue share by paying the agreed platform value. You then own everything outright with no ongoing percentage.',
  },
  {
    q: 'What if I\'m just starting and don\'t have revenue yet?',
    a: 'That\'s exactly who the $0 upfront option is for. If I believe in the work and the person, I\'ll build the platform at zero upfront cost. The revenue share kicks in when you start processing transactions. I\'m betting on you.',
  },
  {
    q: 'Do I own the code and data?',
    a: 'Yes. From day one. Your code, your data, your domain, your content. Everything is yours. I maintain and develop it as your technical partner, but you own it all.',
  },
  {
    q: 'What platform or tech stack do you use?',
    a: 'Every project is custom-built with modern web technologies — typically React, TypeScript, and Node.js with the specific architecture shaped by what the work needs. No WordPress. No Squarespace. No templates. Real code, built for your specific requirements.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most platforms launch in 2–6 weeks. Solo practitioner sites are typically 2–3 weeks. Schools and academies run 3–5 weeks. Complex multi-offering ecosystems can take 4–8 weeks. You see progress weekly throughout.',
  },
  {
    q: 'What happens after launch?',
    a: 'I stay. The revenue share model means I\'m invested in your platform\'s long-term success. I handle maintenance, feature development, and scaling. When your work grows — new offerings, new markets, new needs — the infrastructure grows with it.',
  },
  {
    q: 'How is this different from hiring a web developer?',
    a: 'A developer builds what you spec and leaves. I learn your work, make architectural decisions based on deep understanding, and stay as a long-term partner. I\'m not filling tickets — I\'m building the infrastructure that allows your work to scale without fragmentation.',
  },
];

export default function HowItWorksPage() {
  useDocumentMeta({
    title: 'How It Works — Astral Integration',
    description: 'The partnership model: how I build, what it costs, and how the long-term relationship works. Revenue-share pricing, project tiers, and frequently asked questions.',
    ogUrl: 'https://astralintegration.co/how-it-works',
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
            How It Works
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            Long-term partnership.<br />Aligned from <em className="italic gradient-text">day one.</em>
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            I don't build and disappear. I build, maintain, and evolve your platform over years — because I'm financially invested in its success and structurally committed to its growth.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Process
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">
            Three phases. One partnership.
          </h2>

          <div className="space-y-8">
            {process.map((item, i) => (
              <div key={i} className={`bg-dark-card border rounded-2xl p-8 md:p-10 ${i === 2 ? 'border-accent/30' : 'border-border'}`}>
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-body-sm font-medium flex-shrink-0 ${
                    i === 2 ? 'bg-accent text-white' : 'bg-dark-bg border border-border text-content-muted'
                  }`}>
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-h2 font-light mb-3">{item.title}</h3>
                    <p className="text-body text-content-secondary mb-6">{item.desc}</p>
                    <ul className="space-y-3">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-body-sm text-content-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Pricing
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            The model.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            A small upfront investment covers initial research and build — and for the right projects, I start at zero. From there, I take a percentage of revenue processed through the platform. My success is directly tied to yours.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-dark-card border rounded-2xl p-8 flex flex-col ${
                  tier.highlight ? 'border-accent/40 ring-1 ring-accent/20' : 'border-border'
                }`}
              >
                <h3 className="font-serif text-h3 mb-2">{tier.name}</h3>
                <p className="text-body-sm text-content-muted mb-6">{tier.who}</p>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-meta uppercase text-content-muted mb-1">Upfront</p>
                    <p className="font-serif text-h3 font-light text-accent">{tier.upfront}</p>
                  </div>
                  <div>
                    <p className="text-meta uppercase text-content-muted mb-1">Revenue Share</p>
                    <p className="font-serif text-h3 font-light text-accent">{tier.share}</p>
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
              </div>
            ))}
          </div>

          <div className="bg-dark-card border border-border rounded-2xl p-8 md:p-10 max-w-prose">
            <h3 className="font-serif text-h3 mb-4">The fine print (it's short)</h3>
            <div className="space-y-3">
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Your other revenue</strong> — in-person work, existing channels, anything off-platform — is 100% yours. Always.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">You own everything.</strong> Code, data, domain, content. From day one.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Buyout option.</strong> You can buy out the revenue share at any time by paying the agreed platform value.
              </p>
              <p className="text-body-sm text-content-muted">
                <strong className="text-content-secondary">Minimum term:</strong> 12 months. After that, continue or buy out.
              </p>
              <p className="text-body-sm text-content-muted mt-4">
                The goal is alignment, not transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
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
            Ready to talk?
          </h2>
          <p className="text-body text-content-secondary max-w-prose mx-auto mb-10">
            No pitch. No pressure. Tell me about your work and let's figure out if this is the right fit.
          </p>
          <a
            href="/#contact"
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
