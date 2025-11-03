import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Helper function to check if link is active
  const isActiveLink = (path: string) => location.pathname === path;

  // Helper function to get link classes with active state
  const getLinkClasses = (path: string) => {
    const active = isActiveLink(path);
    const baseClasses = 'transition-colors text-sm font-medium relative';
    const activeIndicator = active ? 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-accent-gold' : '';
    const colorClasses = isScrolled
      ? `text-text-secondary hover:text-accent-gold ${active ? 'text-accent-gold' : ''}`
      : `text-warm-white/90 hover:text-white drop-shadow-md ${active ? 'text-white' : ''}`;
    const focusClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm px-1 -mx-1';

    return `${baseClasses} ${colorClasses} ${activeIndicator} ${focusClasses}`;
  };

  // Helper function for mobile link classes
  const getMobileLinkClasses = (path: string) => {
    const active = isActiveLink(path);
    const baseClasses = 'block py-2 transition-colors';
    const colorClasses = active ? 'text-accent-gold font-semibold' : 'text-text-secondary hover:text-accent-gold';
    const focusClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm px-2 -mx-2';

    return `${baseClasses} ${colorClasses} ${focusClasses}`;
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-warm-white/95 backdrop-blur-md border-b border-text-primary/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
            aria-label="Astral Integration home"
          >
            <span className={`text-xl font-serif transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-accent-terracotta via-accent-gold to-accent-coral bg-clip-text text-transparent'
                : 'text-warm-white drop-shadow-lg'
            }`}>
              Astral Integration
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/about"
              className={getLinkClasses('/about')}
              aria-current={isActiveLink('/about') ? 'page' : undefined}
            >
              About
            </Link>
            <Link
              to="/services"
              className={getLinkClasses('/services')}
              aria-current={isActiveLink('/services') ? 'page' : undefined}
            >
              Services
            </Link>
            <Link
              to="/inner-ascend"
              className={getLinkClasses('/inner-ascend')}
              aria-current={isActiveLink('/inner-ascend') ? 'page' : undefined}
            >
              Community
            </Link>
            <Link
              to="/retreats"
              className={getLinkClasses('/retreats')}
              aria-current={isActiveLink('/retreats') ? 'page' : undefined}
            >
              Retreats
            </Link>
            <Link
              to="/collaborations"
              className={getLinkClasses('/collaborations')}
              aria-current={isActiveLink('/collaborations') ? 'page' : undefined}
            >
              Collaborations
            </Link>
            <Link
              to="/resources"
              className={getLinkClasses('/resources')}
              aria-current={isActiveLink('/resources') ? 'page' : undefined}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 ${
                isScrolled
                  ? 'bg-accent-gold text-white hover:bg-accent-gold/90 hover:shadow-warm'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm'
              }`}
              aria-current={isActiveLink('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`lg:hidden p-2 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 ${
                isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-white hover:text-white/80'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden py-4 space-y-3 border-t border-text-primary/5"
            role="menu"
            aria-label="Mobile navigation"
          >
            <Link
              to="/about"
              className={getMobileLinkClasses('/about')}
              aria-current={isActiveLink('/about') ? 'page' : undefined}
              role="menuitem"
            >
              About
            </Link>
            <Link
              to="/services"
              className={getMobileLinkClasses('/services')}
              aria-current={isActiveLink('/services') ? 'page' : undefined}
              role="menuitem"
            >
              Services
            </Link>
            <Link
              to="/inner-ascend"
              className={getMobileLinkClasses('/inner-ascend')}
              aria-current={isActiveLink('/inner-ascend') ? 'page' : undefined}
              role="menuitem"
            >
              Community
            </Link>
            <Link
              to="/retreats"
              className={getMobileLinkClasses('/retreats')}
              aria-current={isActiveLink('/retreats') ? 'page' : undefined}
              role="menuitem"
            >
              Retreats
            </Link>
            <Link
              to="/collaborations"
              className={getMobileLinkClasses('/collaborations')}
              aria-current={isActiveLink('/collaborations') ? 'page' : undefined}
              role="menuitem"
            >
              Collaborations
            </Link>
            <Link
              to="/resources"
              className={getMobileLinkClasses('/resources')}
              aria-current={isActiveLink('/resources') ? 'page' : undefined}
              role="menuitem"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={getMobileLinkClasses('/contact')}
              aria-current={isActiveLink('/contact') ? 'page' : undefined}
              role="menuitem"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
