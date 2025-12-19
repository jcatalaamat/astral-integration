import { Mail } from 'lucide-react';

export default function LinksHero() {
  return (
    <div className="relative min-h-[40vh] flex flex-col">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F5] to-[#FAFAF8]" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-8">
        {/* Profile Photo */}
        <div className="mb-6 animate-fadeIn">
          <div className="relative">
            <div className="relative w-20 h-20 rounded-full border border-[#1A1A1A]/10 overflow-hidden bg-[#F5F3EF]">
              <img
                src="/jordi-profile.jpg"
                alt="Jordi Amat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1
          className="text-lg md:text-xl text-[#1A1A1A] mb-2 text-center tracking-wide uppercase animate-fadeIn font-medium"
          style={{animationDelay: '0.1s', letterSpacing: '0.12em'}}
        >
          Astral Integration
        </h1>

        {/* Descriptor */}
        <p
          className="text-xs text-[#1A1A1A]/50 mb-4 text-center uppercase tracking-widest animate-fadeIn"
          style={{animationDelay: '0.15s', letterSpacing: '0.15em'}}
        >
          A Living Systems Studio
        </p>

        {/* Role line */}
        <p
          className="text-sm text-[#1A1A1A]/70 mb-3 text-center animate-fadeIn font-light"
          style={{animationDelay: '0.2s'}}
        >
          Founder & Systems Architect
        </p>

        {/* Main statement */}
        <p
          className="text-sm text-[#1A1A1A]/60 mb-6 text-center leading-relaxed max-w-md animate-fadeIn font-light"
          style={{animationDelay: '0.25s'}}
        >
          I work with founders, creators, and small teams when the way they're operating no longer works.
        </p>

        {/* Single contact icon */}
        <div className="animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <a
            href="mailto:hello@astralintegration.com"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-[#1A1A1A]/50 group-hover:text-[#1A1A1A]/80 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
