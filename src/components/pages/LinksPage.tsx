import { Link } from 'react-router-dom';
import LinksHero from '../links/LinksHero';
import ProjectGrid from '../links/ProjectGrid';
import LinksNewsletter from '../links/LinksNewsletter';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAFAF8]/90 border-b border-[#1A1A1A]/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-sm font-serif text-[#1A1A1A] hover:text-[#C9A167] transition-colors">
              Astral Integration
            </Link>
            <Link
              to="/"
              className="text-xs uppercase tracking-wider text-[#1A1A1A]/50 hover:text-[#C9A167] transition-colors"
              style={{letterSpacing: '0.1em'}}
            >
              Back to Main Site
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <LinksHero />

      {/* Projects List */}
      <ProjectGrid />

      {/* Newsletter Section */}
      <LinksNewsletter />

      {/* Footer */}
      <footer className="bg-white border-t border-[#1A1A1A]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo/Name */}
            <div>
              <Link to="/" className="text-lg font-serif text-[#1A1A1A] hover:text-[#C9A167] transition-colors">
                Astral Integration
              </Link>
            </div>

            {/* Tagline */}
            <p className="text-sm text-[#1A1A1A]/50 font-light max-w-2xl mx-auto leading-relaxed">
              Building conscious technology & holding space for human transformation
            </p>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-wider" style={{letterSpacing: '0.1em'}}>
              <Link to="/support" className="text-[#1A1A1A]/40 hover:text-[#C9A167] transition-colors">
                Support
              </Link>
              <span className="text-[#1A1A1A]/20">•</span>
              <Link to="/privacy" className="text-[#1A1A1A]/40 hover:text-[#C9A167] transition-colors">
                Privacy
              </Link>
              <span className="text-[#1A1A1A]/20">•</span>
              <Link to="/contact" className="text-[#1A1A1A]/40 hover:text-[#C9A167] transition-colors">
                Contact
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[#1A1A1A]/30">
              © 2025 Jordi Amat. All rights reserved.
            </p>

            {/* Blessing */}
            <p className="text-xs text-[#1A1A1A]/40 italic">
              Made with consciousness • Powered by love
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
