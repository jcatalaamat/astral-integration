import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-cream border-t border-text-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-accent-gold">Astral Integration</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Guiding souls home to themselves through sacred medicine, energy healing, and transformational mentorship.
              </p>
            </div>

            {/* Explore Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Explore</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/about" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  About
                </Link>
                <Link to="/services" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Services
                </Link>
                <Link to="/retreats" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Retreats
                </Link>
                <Link to="/collaborations" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Collaborations
                </Link>
                <Link to="/inner-ascend" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Community
                </Link>
              </nav>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Resources</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/resources" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Free Downloads
                </Link>
                <Link to="/contact" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Contact
                </Link>
                <Link to="/support" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Support
                </Link>
                <Link to="/privacy" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Privacy
                </Link>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Connect</h4>
              <div className="space-y-3">
                <a
                  href="mailto:hello@astral-integration.com"
                  className="block text-text-secondary hover:text-accent-gold transition-colors text-sm"
                >
                  hello@astral-integration.com
                </a>
                <a
                  href="https://instagram.com/astralintegration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-accent-gold transition-colors text-sm"
                >
                  @astralintegration
                </a>
                <div className="text-text-secondary text-sm">
                  <p>Barcelona, Spain</p>
                  <p>Mazunte, Mexico</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-text-primary/10 mb-8"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-text-tertiary text-sm text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                © {new Date().getFullYear()} Astral Integration
                <span className="text-accent-gold/40">⊹</span>
                All rights reserved
              </p>
            </div>

            <div className="text-text-tertiary text-xs italic text-center md:text-right">
              <p className="flex items-center gap-2 justify-center md:justify-end">
                Made with <Heart className="w-3 h-3 text-accent-gold/60 fill-accent-gold/60" /> for seekers & initiates
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
