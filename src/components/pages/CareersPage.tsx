import { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { careersContent as C } from '../../content/careers';

export default function CareersPage() {
  useDocumentMeta({
    title: 'Careers & Collaboration — Astral Studio',
    description: 'A studio forming its core. Most collaborations are rev-share or equity, not salary — ambassadors, connectors, closing partners, and founding collaborators, built on alignment.',
    ogUrl: 'https://astralstudio.io/careers',
  });

  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);
  const addRef = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-content mx-auto">
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />{C.hero.title}
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            A studio <em className="italic gradient-text">forming its core.</em>
          </h1>
          <p className="text-body text-content-secondary max-w-prose mb-4">{C.hero.subtitle}</p>
          <p className="text-body text-content-secondary max-w-prose">{C.hero.description}</p>
        </div>
      </section>

      {/* How we work */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4"><span className="w-8 h-px bg-accent" />{C.howWeWork.headline}</p>
          <ul className="space-y-4 max-w-prose mb-8">
            {C.howWeWork.items.map((it, i) => (
              <li key={i} className="text-body text-content-primary flex gap-3"><span className="text-accent">—</span>{it}</li>
            ))}
          </ul>
          <p className="text-body-sm text-content-muted max-w-prose italic">{C.howWeWork.note}</p>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4"><span className="w-8 h-px bg-accent" />{C.whoWereLookingFor.headline}</p>
          <p className="text-body text-content-secondary mb-6">{C.whoWereLookingFor.description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {C.whoWereLookingFor.items.map((it, i) => (
              <span key={i} className="px-4 py-2 bg-dark-card border border-border rounded-full text-body-sm text-content-primary">{it}</span>
            ))}
          </div>
          <p className="text-body-sm text-content-muted max-w-prose italic">{C.whoWereLookingFor.note}</p>
        </div>
      </section>

      {/* Roles */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4"><span className="w-8 h-px bg-accent" />Open roles</p>
          <h2 className="font-serif text-display-sm font-light mb-12">Built on alignment, not headcount.</h2>
          <div className="space-y-6">
            {C.roles.map((r, i) => (
              <div key={i} className={`bg-dark-card border rounded-2xl p-6 md:p-8 ${('featured' in r && r.featured) ? 'border-accent/30 ring-1 ring-accent/20' : 'border-border'}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-serif text-h3">{r.title}</h3>
                  <span className="text-meta uppercase text-accent">{r.type}</span>
                </div>
                <p className="text-body-sm text-content-secondary mb-5">{r.focus}</p>
                <p className="text-meta uppercase text-content-muted mb-3">What you'd do</p>
                <ul className="space-y-2 mb-5">
                  {r.responsibilities.map((x, k) => (
                    <li key={k} className="text-body-sm text-content-primary flex gap-3"><span className="text-accent">·</span>{x}</li>
                  ))}
                </ul>
                {'suits' in r && r.suits && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {r.suits.map((s, k) => (<span key={k} className="px-3 py-1 bg-dark-bg border border-border rounded-full text-meta text-content-muted">{s}</span>))}
                  </div>
                )}
                <p className="text-meta uppercase text-accent mb-2">Compensation</p>
                <p className="text-body-sm text-content-primary leading-relaxed">{r.compensation}</p>
                {'note' in r && r.note && <p className="text-body-sm text-content-muted mt-3 italic">{r.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't offer */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4"><span className="w-8 h-px bg-accent" />{C.whatWeDontOffer.headline}</p>
          <ul className="space-y-3 max-w-prose">
            {C.whatWeDontOffer.items.map((it, i) => (<li key={i} className="text-body text-content-secondary flex gap-3"><span className="text-content-muted">×</span>{it}</li>))}
          </ul>
        </div>
      </section>

      {/* How to reach out */}
      <section className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal max-w-prose" ref={addRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4"><span className="w-8 h-px bg-accent" />{C.howToReachOut.headline}</p>
          <p className="text-body text-content-secondary mb-5">{C.howToReachOut.description}</p>
          <ul className="space-y-2 mb-8">
            {C.howToReachOut.items.map((it, i) => (<li key={i} className="text-body-sm text-content-primary flex gap-3"><span className="text-accent">·</span>{it}</li>))}
          </ul>
          <a href="mailto:hello@astralstudio.io?subject=Collaboration%20%E2%80%94%20Astral%20Studio" className="inline-block px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow">Reach out</a>
          <p className="text-body-sm text-content-muted mt-5 italic">{C.howToReachOut.note} For ambassadors &amp; closing partners, see <a href="https://jordiamat.com/ambassadors" className="text-accent hover:underline">the Ambassadors program</a>.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
