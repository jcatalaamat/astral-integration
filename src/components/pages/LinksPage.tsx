import { Link } from 'react-router-dom';
import LinksHero from '../links/LinksHero';
import ProjectGrid from '../links/ProjectGrid';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAFAF8]/90 border-b border-[#1A1A1A]/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link to="/" className="text-xs font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors uppercase tracking-wider" style={{letterSpacing: '0.1em'}}>
              Astral Integration
            </Link>
            <Link
              to="/"
              className="text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70 transition-colors"
            >
              Back to Main Site
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <LinksHero />

      {/* Links Grid */}
      <ProjectGrid />

      {/* Footer - Clean, minimal */}
      <footer className="bg-[#FAFAF8] border-t border-[#1A1A1A]/5 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center space-y-4">
            {/* Brand */}
            <p className="text-xs text-[#1A1A1A]/50 font-medium uppercase tracking-wider" style={{letterSpacing: '0.12em'}}>
              Astral Integration
            </p>

            {/* Tagline */}
            <p className="text-[11px] text-[#1A1A1A]/35 font-light">
              Founder-led systems work · Limited engagements · By trust & referral
            </p>

            {/* Copyright */}
            <p className="text-[10px] text-[#1A1A1A]/25 pt-2">
              © {new Date().getFullYear()} Jordi Amat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
