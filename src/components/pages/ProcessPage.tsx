import { useEffect } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { processSteps } from '../../content';

export default function ProcessPage() {
  useEffect(() => {
    document.title = 'Process — Astral Integration';
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              Our Process
            </h1>
            <p className="text-body text-content-secondary mb-12">
              Clarity, structure, execution — in that order
            </p>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              We work in stages, with each step designed to create clarity before commitment.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              This approach prevents unnecessary systems from being built and ensures that execution serves the work, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          {processSteps.map((step, index) => (
            <div key={step.number} className={`max-w-prose ${index < processSteps.length - 1 ? 'mb-20' : ''}`}>
              <div className={`py-10 border-t-2 ${index === 0 ? 'border-content-primary' : 'border-studio-divider'} mb-8`}>
                <span className="text-meta text-accent font-medium">{step.number}</span>
                <h3 className={`${index === 0 ? 'text-h2' : 'text-h3'} text-content-primary mt-5 mb-2`}>
                  {step.title}
                </h3>
                <p className="text-body-sm text-content-tertiary italic">{step.subtitle}</p>
              </div>

              <p className="text-body text-content-secondary leading-relaxed mb-8">
                {step.description}
              </p>

              {step.outcome && (
                <p className="text-body text-content-secondary leading-relaxed mb-8">
                  {step.outcome}
                </p>
              )}

              <ul className="space-y-3 mb-12">
                {step.points.map((point, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-content-primary font-medium">
                {step.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THIS ORDER */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Why This Order
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Most digital work fails because it starts with execution.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Platforms are built before clarity exists. Systems are created to solve problems that haven't been defined. Resources are spent maintaining complexity instead of creating value.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Our process reverses this pattern.
            </p>

            <div className="mb-12">
              <p className="text-body text-content-primary leading-relaxed mb-2">First: understand what exists.</p>
              <p className="text-body text-content-primary leading-relaxed mb-2">Second: define what it should become.</p>
              <p className="text-body text-content-primary leading-relaxed">Third: build only what serves.</p>
            </div>

            <p className="text-lg text-content-primary font-medium">
              This saves time, money, and energy — and creates systems that last.
            </p>
          </div>
        </div>
      </section>

      {/* FLEXIBILITY */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Flexibility
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Not every project moves through all three stages.
            </p>

            <div className="space-y-6 mb-12">
              <div className="py-4 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-2">Review only</p>
                <p className="text-body text-content-secondary">Some projects gain clarity from the Review and move forward independently.</p>
              </div>

              <div className="py-4 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-2">Review + Blueprint</p>
                <p className="text-body text-content-secondary">Others need the Blueprint but choose to build internally or with other partners.</p>
              </div>

              <div className="py-4 border-t border-studio-divider border-b">
                <p className="text-body text-content-primary font-medium mb-2">Full engagement</p>
                <p className="text-body text-content-secondary">Some continue through to execution and long-term collaboration.</p>
              </div>
            </div>

            <p className="text-lg text-content-primary font-medium">
              Each stage stands on its own. Nothing is assumed.
            </p>
          </div>
        </div>
      </section>

      {/* START */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Where to Start
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Most work begins with the Digital Realignment Review.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              It creates the clarity needed for everything that follows — and often prevents unnecessary systems from being built in the first place.
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
