import { useEffect } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { buildCategories } from '../../content';

export default function WorkPage() {
  useEffect(() => {
    document.title = 'Work — Astral Integration';
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              What We Build
            </h1>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              The form varies. The principle remains the same.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              Every project we undertake is built on the same foundation: clarity, restraint, and structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* BUILD CATEGORIES */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {buildCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-h3 text-content-primary mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                      <span className="text-accent mt-1.5 text-sm">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How We Build
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Regardless of the format, our work is guided by the same principles:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Build what is necessary, not what is possible',
                'Resist premature productization',
                'Favor clarity over complexity',
                'Design for long-term sustainability',
                'Create systems that support the work without distorting it'
              ].map((principle, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              The best system is often the one that doesn't need to be built yet.
            </p>
          </div>
        </div>
      </section>

      {/* DECISION FRAMEWORK */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What We Actually Build
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Before building anything, we ask:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Does this serve the work as it exists now?',
                'Will this reduce friction or create it?',
                'Is this the simplest way to achieve the goal?',
                "Can this wait until there's more clarity?",
                "What happens if we don't build this?"
              ].map((question, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              These questions filter out most unnecessary systems.
            </p>

            <p className="text-lg text-content-primary font-medium">
              What remains is what actually needs to exist.
            </p>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Real Examples
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              The work varies. Here are some patterns we've built:
            </p>

            <div className="space-y-8 mb-12">
              <div className="py-6 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-3">
                  A practitioner with a website that no longer reflects their work
                </p>
                <p className="text-body text-content-secondary mb-3">
                  We clarified their core offering, rebuilt their digital home, and created a simple booking system.
                </p>
                <p className="text-body-sm text-content-tertiary italic">
                  Result: Clear positioning, easier client flow, less maintenance.
                </p>
              </div>

              <div className="py-6 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-3">
                  A community considering building a membership platform
                </p>
                <p className="text-body text-content-secondary mb-3">
                  We reviewed their work and recommended waiting. They restructured their offerings instead.
                </p>
                <p className="text-body-sm text-content-tertiary italic">
                  Result: Avoided building an unnecessary platform. Saved time and money.
                </p>
              </div>

              <div className="py-6 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-3">
                  An educator with a clear program ready to scale
                </p>
                <p className="text-body text-content-secondary mb-3">
                  We designed and built a custom learning platform with enrollment, content delivery, and participant tracking.
                </p>
                <p className="text-body-sm text-content-tertiary italic">
                  Result: The work scaled without losing coherence.
                </p>
              </div>

              <div className="py-6 border-t border-studio-divider border-b">
                <p className="text-body text-content-primary font-medium mb-3">
                  A studio with multiple offerings and unclear structure
                </p>
                <p className="text-body text-content-secondary mb-3">
                  We consolidated their work into three clear pathways, redesigned their website, and built intake automation.
                </p>
                <p className="text-body-sm text-content-tertiary italic">
                  Result: Less confusion, better client fit, more focused work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Portfolio & Case Studies
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Most of our work is private and built for long-term use, not public showcasing.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              We share detailed case studies and examples upon request for aligned projects.
            </p>

            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              Request Examples
            </a>
          </div>
        </div>
      </section>

      {/* START */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-body text-content-secondary leading-relaxed mb-8">
              The work we build is shaped by the clarity that comes before it.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              If you're not sure what needs to be built, start with a Review.
            </p>

            <a
              href="/review"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              Request a Review
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
