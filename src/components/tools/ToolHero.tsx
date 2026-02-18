import { Link } from 'react-router-dom';
import { Tool } from '../../config/tools';

interface ToolHeroProps {
  tool: Tool;
}

export default function ToolHero({ tool }: ToolHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-12 pt-24 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-float"
        style={{ background: tool.theme.primary }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float"
        style={{ background: tool.theme.accent, animationDelay: '-7s' }}
      />

      <div className="relative z-10 max-w-content mx-auto text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-2xl text-5xl mb-8 animate-fadeUp"
          style={{
            background: tool.theme.primaryGlow,
            boxShadow: `0 0 60px ${tool.theme.primaryGlow}`,
          }}
        >
          {tool.icon}
        </div>

        {/* Name */}
        <h1
          className="font-serif text-display mb-4 animate-fadeUp animate-delay-100"
          style={{ color: tool.theme.primary }}
        >
          {tool.name}
        </h1>

        {/* Tagline */}
        <p className="text-h2 text-content-secondary mb-6 animate-fadeUp animate-delay-200">
          {tool.tagline}
        </p>

        {/* Description */}
        <p className="text-body text-content-muted max-w-prose mx-auto mb-10 animate-fadeUp animate-delay-300">
          {tool.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeUp animate-delay-500">
          <Link
            to={tool.appPath}
            className="px-8 py-4 rounded-full text-white font-medium transition-all btn-tool-glow hover:scale-105"
            style={{ background: tool.theme.primary }}
          >
            Launch Tool — It's Free
          </Link>
          <a
            href="#features"
            className="px-8 py-4 rounded-full border border-border text-content-secondary hover:border-border-hover hover:text-content-primary transition-all"
          >
            See Features
          </a>
        </div>

        {/* Free badge */}
        <p className="mt-8 text-body-sm text-content-muted animate-fadeUp animate-delay-700">
          No sign-up required • Works offline • Your data stays local
        </p>
      </div>
    </section>
  );
}
