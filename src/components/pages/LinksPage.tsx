import { Link } from 'react-router-dom';
import LinksHero from '../links/LinksHero';
import ProjectGrid from '../links/ProjectGrid';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#1A1A1A]/5">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-end h-12">
            <Link
              to="/"
              className="text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A]/60 transition-colors"
            >
              Main Site
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <LinksHero />

      {/* Links */}
      <ProjectGrid />

      {/* Footer - Minimal */}
      <footer className="border-t border-[#1A1A1A]/5 py-8">
        <div className="max-w-md mx-auto px-4 text-center">
          <p className="text-[10px] text-[#1A1A1A]/30">
            © 2026 Astral Integration
          </p>
        </div>
      </footer>
    </div>
  );
}
