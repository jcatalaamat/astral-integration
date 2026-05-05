import { useEffect, useRef, useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const process = [
  {
    step: '01',
    title: 'I learn your work.',
    desc: 'You tell me what you\'re building — or what you\'ve already built — and where it needs to go. I learn the methodology, the people you serve, the way you actually teach.',
    details: [
      'A 30–60 minute conversation about your work, your people, and your current setup',
      'I research your space — what exists, what\'s missing, what the architecture needs to look like',
      'If it\'s a fit, I send a proposal within a few days: scope, timeline, deal shape',
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
      'Iterative — I adjust as we go based on what we learn',
      'You\'re involved in key decisions but never managing a developer',
    ],
  },
  {
    step: '03',
    title: 'I hand you the keys.',
    desc: 'You own the code, the data, the domain. Whether I stay on after launch is a conversation, not a contract.',
    details: [
      'You own everything from day one — code, data, domain, content',
      'Some clients keep me on for ongoing maintenance and new feature work',
      'Some take the keys and run it themselves',
      'Either is fine. The work shapes the relationship, not the other way around',
    ],
  },
];

const faqs = [
  {
    q: 'How does pricing work?',
    a: 'Every engagement is shaped to the work. A practitioner launching her first booking flow needs different scope than a school with hundreds of students across multiple certifications. After our first conversation, I send a clear proposal with the deal shape that fits — fixed-fee audit, project build, or ongoing partnership.',
  },
  {
    q: 'Do I own the code and data?',
    a: 'Yes. From day one. Your code, your data, your domain, your content. Everything is yours. If I stay on as your technical partner I maintain and develop it. If you take the keys, you keep them.',
  },
  {
    q: 'What platform or tech stack do you use?',
    a: 'Every project is custom-built with modern web technologies — typically React, TypeScript, and Node.js, with the specific architecture shaped by what the work needs. No WordPress. No Squarespace. No templates. Real code, built for your specific requirements.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most platforms launch in 2–6 weeks depending on scope. You see progress weekly throughout — your platform taking shape in real time.',
  },
  {
    q: 'What happens after launch?',
    a: 'Up to you. Some clients keep me on for ongoing maintenance and new feature work as the practice scales. Some take the keys and run it themselves. The work shapes the relationship, not the other way around.',
  },
  {
    q: 'How is this different from hiring a web developer?',
    a: 'A developer builds what you spec and leaves. I learn your work, make architectural decisions based on deep understanding, and stay as long as the work calls for it. I\'m not filling tickets — I\'m building the infrastructure that lets your work scale without fragmenting across six tools.',
  },
];

export default function HowItWorksPage() {
  useDocumentMeta({
    title: 'How it works — Astral Studio',
    description: 'How an engagement runs: I learn your work, I build the platform, I hand you the keys. Process, FAQ, what to expect.',
    ogUrl: 'https://astralstudio.io/how-it-works',
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
            I learn your work.<br />I build it. I hand you the <em className="italic gradient-text">keys.</em>
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            Three phases. Most projects launch in 2–6 weeks. What happens after launch is a conversation, not a contract.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
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

      {/* FAQ */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
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
