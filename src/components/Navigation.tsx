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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'About', path: '/about' },
    { label: 'Start Here', path: '/start-here' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-studio-bg/98 backdrop-blur-sm border-b border-studio-divider'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-content-primary text-body font-medium hover:text-content-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              aria-label="Astral Integration home"
            >
              Astral Integration
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-body-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-content-primary font-medium'
                      : 'text-content-secondary hover:text-content-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`text-body-sm transition-colors ${
                  isActive('/contact')
                    ? 'text-content-primary font-medium'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                Contact
              </Link>
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
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className="fixed top-16 left-0 right-0 z-50 md:hidden"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="bg-studio-bg border-b border-studio-divider shadow-lg">
              <div className="max-w-content mx-auto px-6 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block w-full text-left py-4 text-body transition-colors border-b border-studio-divider ${
                      isActive(item.path)
                        ? 'text-content-primary font-medium'
                        : 'text-content-primary hover:text-accent'
                    }`}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full text-left py-4 text-body text-content-primary hover:text-accent transition-colors"
                  role="menuitem"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
