import { Link } from 'react-router-dom';
import LinksHero from '../links/LinksHero';
import ProjectGrid from '../links/ProjectGrid';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-studio-bg">
      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-studio-bg/95 backdrop-blur-sm border-b border-studio-divider">
        <div className="max-w-[680px] mx-auto px-6">
          <div className="flex items-center justify-end h-14">
            <Link
              to="/"
              className="text-meta text-content-tertiary hover:text-content-secondary transition-colors"
            >
              Visit studio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <LinksHero />

      {/* Links */}
      <ProjectGrid />

      {/* Footer */}
      <footer className="border-t border-studio-divider py-10">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <p className="text-meta text-content-tertiary">
            © 2026 Astral Integration
          </p>
        </div>
      </footer>
    </div>
  );
}
