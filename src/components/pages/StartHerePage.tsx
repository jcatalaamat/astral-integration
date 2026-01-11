import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { startHereContent } from '../../content';

export default function StartHerePage() {
  useEffect(() => {
    document.title = 'Start Here — Astral Integration';
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              {startHereContent.hero.title}
            </h1>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              {startHereContent.hero.subtitle}
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              {startHereContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* THE REVIEW */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {startHereContent.review.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              {startHereContent.review.description}
            </p>

            <div className="mb-12">
              <p className="text-body-sm text-content-tertiary uppercase tracking-wider mb-4">
                {startHereContent.review.deliverables.headline}
              </p>
              <ul className="space-y-3">
                {startHereContent.review.deliverables.items.map((item, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-body-sm text-content-tertiary uppercase tracking-wider mb-2">
                  {startHereContent.review.timeline.headline}
                </p>
                <p className="text-body text-content-primary">
                  {startHereContent.review.timeline.description}
                </p>
              </div>
              <div>
                <p className="text-body-sm text-content-tertiary uppercase tracking-wider mb-2">
                  {startHereContent.review.investment.headline}
                </p>
                <p className="text-h3 text-content-primary mb-2">
                  {startHereContent.review.investment.price}
                </p>
                <p className="text-body-sm text-content-tertiary">
                  {startHereContent.review.investment.note}
                </p>
              </div>
            </div>

            <Link
              to="/review"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              Request a Review
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-12">
              {startHereContent.process.headline}
            </p>

            <div className="space-y-8">
              {startHereContent.process.steps.map((step, index) => (
                <div key={index} className="py-6 border-t border-studio-divider">
                  <div className="flex gap-4">
                    <span className="text-meta text-accent font-medium">{step.number}</span>
                    <div>
                      <h4 className="text-body text-content-primary font-medium mb-2">
                        {step.title}
                      </h4>
                      <p className="text-body text-content-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {startHereContent.whoFor.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {startHereContent.whoFor.description}
            </p>

            <ul className="space-y-3 mb-12">
              {startHereContent.whoFor.items.map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHO NOT FOR */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {startHereContent.whoNotFor.headline}
            </p>

            <ul className="space-y-0 mb-12">
              {startHereContent.whoNotFor.items.map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {startHereContent.next.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {startHereContent.next.description}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              {startHereContent.next.continuation}
            </p>

            <p className="text-lg text-content-primary font-medium">
              {startHereContent.next.note}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
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
