import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const whoIHelpLinks = [
  { label: 'Makers', href: '/makers' },
  { label: 'Practitioners', href: '/practitioners' },
  { label: 'Schools', href: '/schools' },
  { label: 'Retreats', href: '/retreats' },
  { label: 'Communities', href: '/communities' },
  { label: 'Organizations', href: '/organizations' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  const workHref = isHome ? '#work' : '/work';
  const howHref = isHome ? '#how' : '/how-it-works';
  const contactHref = isHome ? '#contact' : '/contact';

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 ${
          isScrolled || mobileMenuOpen
            ? 'glass border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="font-serif text-2xl font-light tracking-wide text-content-primary"
          >
            Astral <em className="italic text-accent">Studio</em>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Who I Help dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-nav uppercase text-content-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Who I Help
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-52 bg-dark-card border border-border rounded-xl shadow-xl overflow-hidden">
                  {whoIHelpLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-3 text-body-sm text-content-secondary hover:text-accent hover:bg-dark-bg/50 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={workHref}
              onClick={(e) => handleNavClick(e, workHref)}
              className="text-nav uppercase text-content-secondary hover:text-accent transition-colors"
            >
              Work
            </a>

            <a
              href={howHref}
              onClick={(e) => handleNavClick(e, howHref)}
              className="text-nav uppercase text-content-secondary hover:text-accent transition-colors"
            >
              How It Works
            </a>

            <a
              href="/about"
              className="text-nav uppercase text-content-secondary hover:text-accent transition-colors"
            >
              About
            </a>

            <a
              href="/insights"
              className="text-nav uppercase text-content-secondary hover:text-accent transition-colors"
            >
              Insights
            </a>

            <a
              href={contactHref}
              onClick={(e) => handleNavClick(e, contactHref)}
              className="text-nav uppercase px-6 py-2.5 border border-accent rounded-full text-accent hover:bg-accent hover:text-white transition-all hover:shadow-glow"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 -mr-2 text-content-secondary hover:text-content-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-dark-bg/80 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className="fixed top-[72px] left-0 right-0 z-50 md:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="bg-dark-card border-b border-border">
              <div className="max-w-content mx-auto px-6 py-4">
                {/* Who I Help section */}
                <p className="text-meta uppercase text-content-muted py-3">Who I Help</p>
                {whoIHelpLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 pl-4 text-body-sm text-content-secondary hover:text-accent transition-colors"
                    role="menuitem"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="border-t border-border mt-2 pt-2">
                  <a
                    href={workHref}
                    onClick={(e) => { handleNavClick(e, workHref); setMobileMenuOpen(false); }}
                    className="block py-4 text-body text-content-primary hover:text-accent transition-colors"
                    role="menuitem"
                  >
                    Work
                  </a>
                  <a
                    href={howHref}
                    onClick={(e) => { handleNavClick(e, howHref); setMobileMenuOpen(false); }}
                    className="block py-4 text-body text-content-primary hover:text-accent transition-colors"
                    role="menuitem"
                  >
                    How It Works
                  </a>
                  <a
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 text-body text-content-primary hover:text-accent transition-colors"
                    role="menuitem"
                  >
                    About
                  </a>
                  <a
                    href="/insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 text-body text-content-primary hover:text-accent transition-colors"
                    role="menuitem"
                  >
                    Insights
                  </a>
                  <a
                    href={contactHref}
                    onClick={(e) => { handleNavClick(e, contactHref); setMobileMenuOpen(false); }}
                    className="block py-4 text-body text-accent font-medium"
                    role="menuitem"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
