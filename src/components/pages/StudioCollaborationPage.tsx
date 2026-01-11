import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { studioCollaborationContent } from '../../content';

export default function StudioCollaborationPage() {
  useEffect(() => {
    document.title = 'Studio Collaboration — Astral Integration';
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              {studioCollaborationContent.hero.title}
            </h1>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              {studioCollaborationContent.hero.subtitle}
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              {studioCollaborationContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {studioCollaborationContent.whatItIs.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              {studioCollaborationContent.whatItIs.description}
            </p>

            <p className="text-lg text-content-primary font-medium">
              {studioCollaborationContent.whatItIs.clarification}
            </p>
          </div>
        </div>
      </section>

      {/* WHEN IT APPLIES */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {studioCollaborationContent.whenApplies.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {studioCollaborationContent.whenApplies.description}
            </p>

            <ul className="space-y-3 mb-12">
              {studioCollaborationContent.whenApplies.items.map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT IT LOOKS LIKE */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {studioCollaborationContent.whatItLooksLike.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {studioCollaborationContent.whatItLooksLike.description}
            </p>

            <ul className="space-y-3 mb-12">
              {studioCollaborationContent.whatItLooksLike.items.map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body-sm text-content-tertiary italic">
              {studioCollaborationContent.whatItLooksLike.note}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT IS NOT */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {studioCollaborationContent.whatItIsNot.headline}
            </p>

            <ul className="space-y-0 mb-12">
              {studioCollaborationContent.whatItIsNot.items.map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT STARTS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {studioCollaborationContent.howItStarts.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {studioCollaborationContent.howItStarts.description}
            </p>

            <ul className="space-y-3 mb-12">
              {studioCollaborationContent.howItStarts.items.map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium mb-12">
              {studioCollaborationContent.howItStarts.note}
            </p>

            <Link
              to="/review"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              Request a Review
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
