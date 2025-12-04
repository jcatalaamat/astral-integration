import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position (only on homepage)
      if (location.pathname === '/') {
        const sections = ['contact', 'resources', 'services', 'about'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
        // If at top, no section is active
        if (window.scrollY < 200) {
          setActiveSection('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);

    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
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

  // Scroll to top
  const scrollToTop = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Helper function to check if section is active
  const isSectionActive = (sectionId: string) => {
    return location.pathname === '/' && activeSection === sectionId;
  };

  // Helper function to get link classes with active state
  const getLinkClasses = (sectionId: string) => {
    const active = isSectionActive(sectionId);
    const baseClasses = 'transition-colors text-sm font-medium relative cursor-pointer';
    const activeIndicator = active ? 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-accent-gold' : '';
    const colorClasses = isScrolled
      ? `text-text-secondary hover:text-accent-gold ${active ? 'text-accent-gold' : ''}`
      : `text-warm-white/90 hover:text-white drop-shadow-md ${active ? 'text-white' : ''}`;
    const focusClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm px-1 -mx-1';

    return `${baseClasses} ${colorClasses} ${activeIndicator} ${focusClasses}`;
  };

  // Helper function for mobile link classes
  const getMobileLinkClasses = (sectionId: string) => {
    const active = isSectionActive(sectionId);
    const baseClasses = 'block py-2 transition-colors cursor-pointer';
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
          <button
            onClick={scrollToTop}
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
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className={getLinkClasses('about')}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={getLinkClasses('services')}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className={getLinkClasses('resources')}
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 ${
                isScrolled
                  ? 'bg-accent-gold text-white hover:bg-accent-gold/90 hover:shadow-warm'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Contact
            </button>
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
            className="lg:hidden py-4 space-y-3 border-t border-text-primary/5 bg-warm-white"
            role="menu"
            aria-label="Mobile navigation"
          >
            <button
              onClick={() => scrollToSection('about')}
              className={getMobileLinkClasses('about')}
              role="menuitem"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={getMobileLinkClasses('services')}
              role="menuitem"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className={getMobileLinkClasses('resources')}
              role="menuitem"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={getMobileLinkClasses('contact')}
              role="menuitem"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
