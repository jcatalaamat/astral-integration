import { useState, useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { caseStudies, CaseStudy, CaseStudyCategory } from '../../data/caseStudies';
import PreviewFrame from '../PreviewFrame';

const filters: Array<{ label: string; value: CaseStudyCategory | 'All' }> = [
  { label: 'All', value: 'All' },
  { label: 'Makers', value: 'Makers' },
  { label: 'Practitioners', value: 'Practitioners' },
  { label: 'Schools', value: 'Schools' },
  { label: 'Retreats', value: 'Retreats' },
  { label: 'Communities', value: 'Communities' },
  { label: 'Organizations', value: 'Organizations' },
];

export default function WorkPage() {
  useDocumentMeta({
    title: 'Selected builds — Astral Studio',
    description: 'Detailed case studies: the challenges, architectural decisions, and infrastructure behind each platform. From makers to retreat centers to community platforms.',
    ogUrl: 'https://astralstudio.io/work',
  });

  const [activeFilter, setActiveFilter] = useState<CaseStudyCategory | 'All'>('All');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!activeStudy) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveStudy(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeStudy]);

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

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((s) => s.category === activeFilter);

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
          <p className="text-body text-content-secondary max-w-prose mb-12">
            Each project below includes the challenge, the key architectural decisions, and what was built. This is how I think about infrastructure — not as a list of features, but as a set of structural choices shaped by the work itself.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2 rounded-full text-body-sm font-medium transition-all ${
                  activeFilter === f.value
                    ? 'bg-accent text-white'
                    : 'bg-dark-card border border-border text-content-muted hover:border-border-hover hover:text-content-secondary'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-section px-6 md:px-12">
        <div className="max-w-content mx-auto space-y-12">
          {filtered.map((study) => (
            <article
              key={study.slug}
              id={study.slug}
              className="bg-dark-card border border-border rounded-2xl overflow-hidden reveal hover:border-accent/30 transition-colors"
              ref={addRevealRef}
            >
              {/* Live preview header — click to open modal */}
              {study.url ? (
                <button
                  onClick={() => setActiveStudy(study)}
                  className="block w-full group"
                  aria-label={`Open ${study.client} preview`}
                >
                  <PreviewFrame
                    url={study.url}
                    className="aspect-[16/9] md:aspect-[21/9] border-b border-border"
                    hoverHint="Open live preview →"
                  />
                </button>
              ) : (
                <div className={`w-full aspect-[21/9] border-b border-border bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                  <span className="text-meta uppercase text-content-muted tracking-wider">private portal</span>
                </div>
              )}

              {/* Header */}
              <div className="px-6 md:px-10 pt-6 md:pt-10 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="font-serif text-h1 font-light">{study.client}</h2>
                  <p className="text-meta uppercase text-gold mt-1">{study.type}</p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-meta uppercase text-content-muted bg-dark-bg/40 border border-border rounded-full px-3 py-1">
                    {study.category}
                  </span>
                  {study.url && (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-meta uppercase text-accent hover:text-content-primary transition-colors"
                    >
                      View Live ↗
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
              <div className="px-6 md:px-10 pb-6 md:pb-10 space-y-8">
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

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body text-content-muted">No case studies in this category yet.</p>
            </div>
          )}
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
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />

      {/* ═══════ CASE STUDY PREVIEW MODAL ═══════ */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-[100] bg-dark-bg/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeUp"
          onClick={() => setActiveStudy(null)}
        >
          <div
            className="relative w-full max-w-[1400px] h-full max-h-[90vh] bg-dark-card border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStudy(null)}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark-bg/90 hover:bg-accent border border-border hover:border-accent flex items-center justify-center text-content-secondary hover:text-white transition-all"
            >
              ✕
            </button>

            <div className="flex-1 bg-dark-bg flex flex-col min-h-0">
              <div className="h-9 bg-dark-bg border-b border-border flex items-center px-4 gap-2 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-3 text-meta font-mono text-content-muted">
                  {activeStudy.url ? new URL(activeStudy.url).hostname : ''}
                </span>
              </div>
              {activeStudy.url && (
                <iframe
                  src={activeStudy.url}
                  title={activeStudy.client}
                  className="w-full flex-1 border-0 bg-white"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              )}
            </div>

            <div className="md:w-[380px] p-6 md:p-8 overflow-y-auto bg-dark-card border-t md:border-t-0 md:border-l border-border flex-shrink-0">
              <p className="text-meta uppercase text-accent mb-2">{activeStudy.category}</p>
              <h3 className="font-serif text-h2 font-light mb-2">{activeStudy.client}</h3>
              <p className="text-meta uppercase text-gold mb-6">{activeStudy.type}</p>

              <p className="text-body-sm text-content-secondary leading-relaxed mb-6">{activeStudy.challenge}</p>

              <div className="flex flex-col gap-3">
                <a
                  href={`/work/${activeStudy.slug}`}
                  className="px-6 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow text-center"
                >
                  Read full case study
                </a>
                {activeStudy.url && (
                  <a
                    href={activeStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    Visit live site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <p className="text-meta text-content-muted mt-6">
                Press <kbd className="px-1.5 py-0.5 bg-dark-bg border border-border rounded text-[10px]">Esc</kbd> or click outside to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
