import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function BlueprintPage() {
  useEffect(() => {
    document.title = 'Realignment Blueprint — Astral Integration';
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              Realignment Blueprint
            </h1>
            <p className="text-body text-content-secondary mb-12">
              Turning clarity into a coherent structure
            </p>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              The Realignment Blueprint is for projects that already have substance, but need a clear form.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              It takes the insight from the Digital Realignment Review and translates it into a build-ready structure — so decisions stop looping and the work can move forward cleanly.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What This Is
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              The Blueprint is a focused design phase.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              It defines:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'what the work actually is',
                'how it should be offered',
                'how people should encounter it',
                'what needs to exist digitally',
                'what does not'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium mb-12">
              It removes ambiguity before execution.
            </p>

            <div>
              <p className="text-body text-content-secondary leading-relaxed mb-2">This is not branding.</p>
              <p className="text-body text-content-secondary leading-relaxed mb-2">It is not a deck.</p>
              <p className="text-body text-content-secondary leading-relaxed mb-8">It is not a strategy document designed to impress.</p>
              <p className="text-lg text-content-primary font-medium">It is a map you can actually use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE BLUEPRINT CLARIFIES */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What the Blueprint Clarifies
            </p>

            <p className="text-body text-content-secondary leading-relaxed">
              By the end of this process, you will have clarity on:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl">
            {/* The core offering */}
            <div>
              <h3 className="text-h3 text-content-primary mb-4">The core offering</h3>
              <ul className="space-y-2">
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what you are truly offering now</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>how many offers should exist (often fewer than expected)</span>
                </li>
              </ul>
            </div>

            {/* The selling point */}
            <div>
              <h3 className="text-h3 text-content-primary mb-4">The selling point</h3>
              <ul className="space-y-2">
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what people actually respond to</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what differentiates this work without exaggeration</span>
                </li>
              </ul>
            </div>

            {/* The format */}
            <div>
              <h3 className="text-h3 text-content-primary mb-4">The format</h3>
              <ul className="space-y-2">
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>service, product, program, platform, or hybrid</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what matches the work and your capacity</span>
                </li>
              </ul>
            </div>

            {/* The pathway */}
            <div>
              <h3 className="text-h3 text-content-primary mb-4">The pathway</h3>
              <ul className="space-y-2">
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>how people enter</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>how they deepen</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>where boundaries are needed</span>
                </li>
              </ul>
            </div>

            {/* The digital structure */}
            <div>
              <h3 className="text-h3 text-content-primary mb-4">The digital structure</h3>
              <ul className="space-y-2">
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what systems are required</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what can be removed</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what should wait</span>
                </li>
              </ul>
            </div>

            {/* The sequence */}
            <div>
              <h3 className="text-h3 text-content-primary mb-4">The sequence</h3>
              <ul className="space-y-2">
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what to build first</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what comes later</span>
                </li>
                <li className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>what should not be built at all</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How It Works
            </p>
          </div>

          {/* Step 1 */}
          <div className="max-w-prose mb-20">
            <div className="py-10 border-t-2 border-content-primary mb-8">
              <span className="text-meta text-accent font-medium">Step 1</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-2">Grounded Alignment Call</h3>
              <p className="text-body-sm text-content-tertiary italic">Optional, short</p>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              A single focused conversation to:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'align on what emerged in the Review',
                'clarify constraints',
                'confirm direction'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body-sm text-content-tertiary italic">
              (Only included if useful. Not every Blueprint needs it.)
            </p>
          </div>

          {/* Step 2 */}
          <div className="max-w-prose mb-20">
            <div className="py-10 border-t-2 border-studio-divider mb-8">
              <span className="text-meta text-accent font-medium">Step 2</span>
              <h3 className="text-h3 text-content-primary mt-5">Blueprint Design</h3>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              I design the structure asynchronously.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              This includes:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'offering definition',
                'language refinement',
                'system logic',
                'user journey',
                'build sequence'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <p className="text-body text-content-primary leading-relaxed mb-2">No rush.</p>
              <p className="text-body text-content-primary leading-relaxed mb-2">No iteration loops.</p>
              <p className="text-body text-content-primary leading-relaxed">Just clean thinking.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="max-w-prose">
            <div className="py-10 border-t-2 border-studio-divider mb-8">
              <span className="text-meta text-accent font-medium">Step 3</span>
              <h3 className="text-h3 text-content-primary mt-5">Blueprint Delivery</h3>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              You receive the Blueprint as a clear, usable artifact.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              Delivered as:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'a written document',
                'diagrams / structure maps (when helpful)',
                'or a Loom walkthrough explaining decisions'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              The goal is comprehension, not volume.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What You Receive
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              You walk away with:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'a clearly named offering (or offerings)',
                'language you can use immediately',
                'a coherent digital structure',
                'a prioritized build plan',
                'decision clarity'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              Whether you build with me or not, this stands on its own.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What This Is Not
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Not execution',
                'Not ongoing consulting',
                'Not a sales funnel design',
                'Not growth hacking'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              It is structural clarity.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Who This Is For
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              The Realignment Blueprint is right if:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'the Review surfaced real potential',
                "you're tired of guessing what to build",
                'you want your offering to feel accurate',
                "you're ready to commit to clarity"
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRACTICAL DETAILS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Practical Details
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Timeline: 1–2 weeks',
                'Asynchronous by default',
                'One defined scope',
                'One clear outcome'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-h2 text-content-primary font-medium">
              €2,500
            </p>
            <p className="text-body-sm text-content-tertiary">
              Following a completed Review.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT COMES NEXT */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What Comes Next
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              After the Blueprint, there are three clean paths:
            </p>

            <div className="space-y-8 mb-12">
              <div className="py-6 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-2">1. You build independently</p>
                <p className="text-body text-content-secondary">The Blueprint supports this fully.</p>
              </div>

              <div className="py-6 border-t border-studio-divider">
                <p className="text-body text-content-primary font-medium mb-2">2. Selective build with the studio</p>
                <p className="text-body text-content-secondary">Only what aligns.</p>
              </div>

              <div className="py-6 border-t border-studio-divider border-b">
                <p className="text-body text-content-primary font-medium mb-2">3. Longer-term collaboration / incubation</p>
                <p className="text-body text-content-secondary">Rare, intentional, defined.</p>
              </div>
            </div>

            <p className="text-lg text-content-primary font-medium">
              Nothing is assumed.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-body text-content-secondary leading-relaxed mb-12">
              The Blueprint exists so you don't spend months building the wrong thing carefully.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Clarity saves time, money, and energy.
            </p>

            <p className="text-lg text-content-primary font-medium mb-16">
              If the Review created momentum, this is the natural next step.
            </p>

            <Link
              to="/review"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              Start with a Review
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
