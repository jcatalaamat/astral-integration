import { useEffect } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { aboutContent } from '../../content';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — Astral Integration';
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              About
            </h1>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              {aboutContent.intro.headline}
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              {aboutContent.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* ROLE */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <h2 className="text-h2 md:text-h1 text-content-primary mb-8">
              {aboutContent.role.headline}
            </h2>

            <p className="text-lg text-content-primary font-medium mb-12">
              {aboutContent.role.subheadline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed">
              {aboutContent.role.description}
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {aboutContent.team.headline}
            </p>

            {aboutContent.team.members.map((member, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-h3 text-content-primary mb-2">{member.name}</h3>
                <p className="text-body-sm text-content-tertiary mb-4">{member.role}</p>
                <p className="text-body text-content-secondary leading-relaxed mb-4">
                  {member.description}
                </p>
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-accent hover:text-accent-hover underline"
                >
                  {member.url.replace('https://', '')} →
                </a>
              </div>
            ))}

            <p className="text-body-sm text-content-tertiary italic mt-8">
              {aboutContent.team.note}
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {aboutContent.values.headline}
            </p>

            <ul className="space-y-3 mb-12">
              {aboutContent.values.items.map((value, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW PEOPLE FIND US */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {aboutContent.findUs.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {aboutContent.findUs.description}
            </p>

            <ul className="space-y-3 mb-12">
              {aboutContent.findUs.items.map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              {aboutContent.findUs.note}
            </p>
          </div>
        </div>
      </section>

      {/* START HERE */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-body text-content-secondary leading-relaxed mb-12">
              If your work already exists but your digital presence feels unclear, a Digital Realignment Review is the right place to start.
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
