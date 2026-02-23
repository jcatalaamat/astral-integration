import { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { caseStudies } from '../../data/caseStudies';

export default function WorkPage() {
  useDocumentMeta({
    title: 'Case Studies — Astral Integration',
    description: 'Detailed case studies: the challenges, architectural decisions, and infrastructure behind each platform. From certification academies to community platforms.',
    ogUrl: 'https://astralintegration.co/work',
  });

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
            Case Studies
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            The decisions behind the builds.
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            Each project below includes the challenge, the key architectural decisions, and what was built. This is how I think about infrastructure — not as a list of features, but as a set of structural choices shaped by the work itself.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-section px-6 md:px-12">
        <div className="max-w-content mx-auto space-y-12">
          {caseStudies.map((study, i) => (
            <article
              key={i}
              id={study.slug}
              className="bg-dark-card border border-border rounded-2xl overflow-hidden reveal"
              ref={addRevealRef}
            >
              {/* Header */}
              <div className={`relative w-full border-b border-border bg-gradient-to-br ${study.gradient} p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4`}>
                <div>
                  <h2 className="font-serif text-h1 font-light">{study.client}</h2>
                  <p className="text-meta uppercase text-gold mt-1">{study.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-meta uppercase text-accent hover:text-content-primary transition-colors"
                    >
                      View Live
                    </a>
                  )}
                  {study.status && (
                    <span className="text-meta uppercase text-content-muted bg-dark-bg/60 backdrop-blur-sm border border-border rounded-full px-3 py-1">
                      {study.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-10 space-y-8">
                <div>
                  <p className="text-meta uppercase text-accent mb-3">The Challenge</p>
                  <p className="text-body-sm text-content-secondary leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <p className="text-meta uppercase text-accent mb-3">Key Decisions</p>
                  <p className="text-body-sm text-content-secondary leading-relaxed">{study.decisions}</p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-meta uppercase text-content-muted mb-3">What Was Built</p>
                  <p className="text-body-sm text-content-primary leading-relaxed">{study.built}</p>
                </div>

                <a
                  href={`/work/${study.slug}`}
                  className="inline-flex items-center gap-2 text-body-sm text-accent hover:text-content-primary transition-colors mt-2"
                >
                  Full case study <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto text-center reveal" ref={addRevealRef}>
          <h2 className="font-serif text-display-sm font-light mb-6">
            Your work is next.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mx-auto mb-10">
            If you've created something original and need a technical partner who thinks in systems — not features — I'd like to hear about it.
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
