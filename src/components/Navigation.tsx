import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/astral-integration/free-strategy-call';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

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

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

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
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-2xl font-light tracking-wide text-content-primary"
          >
            Astral <em className="italic text-accent">Integration</em>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-nav uppercase text-content-secondary hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nav uppercase px-6 py-2.5 border border-accent rounded-full text-accent hover:bg-accent hover:text-white transition-all hover:shadow-glow"
            >
              Book a Call
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
            className="fixed top-[72px] left-0 right-0 z-50 md:hidden"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="bg-dark-card border-b border-border">
              <div className="max-w-content mx-auto px-6 py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-4 text-body text-content-primary hover:text-accent transition-colors border-b border-border"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-4 text-body text-accent font-medium"
                  role="menuitem"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
