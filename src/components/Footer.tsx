import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
                Psychic Alignment • Identity Rebirth • Energetic Transformation
              </p>
            </div>

            {/* Explore Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Explore</h4>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-text-secondary hover:text-accent-gold transition-colors text-sm text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-text-secondary hover:text-accent-gold transition-colors text-sm text-left"
                >
                  Services
                </button>
                <Link to="/resources" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Resources
                </Link>
              </nav>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">More</h4>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-text-secondary hover:text-accent-gold transition-colors text-sm text-left"
                >
                  Contact
                </button>
                <Link to="/links" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                  Links
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

          {/* Important Information - Legal Disclaimers */}
          <div className="border-t border-text-primary/10 pt-8 mb-8">
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-6">Important Information</h4>
            <div className="grid md:grid-cols-2 gap-6 text-xs text-text-tertiary leading-relaxed">
              <div>
                <p className="font-medium text-text-secondary mb-1">Medical Disclaimer</p>
                <p>
                  This work is not a substitute for medical or psychiatric treatment. If you're experiencing mental health crisis, please contact appropriate emergency services.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-secondary mb-1">Medicine Work Legal Status</p>
                <p>
                  Bufo Alvarius ceremonies are conducted in Mazunte, Mexico, where this practice is legally permitted. Participants are responsible for understanding laws in their jurisdiction.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-secondary mb-1">Confidentiality</p>
                <p>
                  All sessions are confidential. Information shared remains private unless there is risk of harm to self or others.
                </p>
              </div>
              <div>
                <p className="font-medium text-text-secondary mb-1">Consent & Boundaries</p>
                <p>
                  This work is consensual and collaborative. You can pause or stop at any time. Your sovereignty is honored.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-text-primary/10 mb-8"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-text-tertiary text-sm text-center md:text-left">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                © 2026 Astral Integration
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
