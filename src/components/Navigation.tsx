import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-warm-white/95 backdrop-blur-md border-b border-text-primary/5 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className={`text-xl font-serif transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-accent-terracotta via-accent-gold to-accent-coral bg-clip-text text-transparent'
                : 'text-warm-white drop-shadow-lg'
            }`}>
              Astral Integration
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/about" className={`transition-colors text-sm font-medium ${
              isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-warm-white/90 hover:text-white drop-shadow-md'
            }`}>
              About
            </Link>
            <Link to="/services" className={`transition-colors text-sm font-medium ${
              isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-warm-white/90 hover:text-white drop-shadow-md'
            }`}>
              Services
            </Link>
            {/* <Link to="/inner-ascend" className={`transition-colors text-sm font-medium ${
              isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-warm-white/90 hover:text-white drop-shadow-md'
            }`}>
              Community
            </Link> */}
            <Link to="/retreats" className={`transition-colors text-sm font-medium ${
              isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-warm-white/90 hover:text-white drop-shadow-md'
            }`}>
              Retreats
            </Link>
            <Link to="/collaborations" className={`transition-colors text-sm font-medium ${
              isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-warm-white/90 hover:text-white drop-shadow-md'
            }`}>
              Collaborations
            </Link>
            <Link to="/resources" className={`transition-colors text-sm font-medium ${
              isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-warm-white/90 hover:text-white drop-shadow-md'
            }`}>
              Resources
            </Link>
            <Link to="/contact" className={`px-6 py-2 rounded-full font-semibold transition-all ${
              isScrolled
                ? 'bg-accent-gold text-white hover:bg-accent-gold/90 hover:shadow-warm'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm'
            }`}>
              Contact
            </Link>
          </div>

          {/* Right Side: Language + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle - Hidden */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
              className="hidden"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-text-secondary hover:text-accent-gold' : 'text-white hover:text-white/80'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-text-primary/5">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              About
            </Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              Services
            </Link>
            {/* <Link to="/inner-ascend" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              Community
            </Link> */}
            <Link to="/retreats" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              Retreats
            </Link>
            <Link to="/collaborations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              Collaborations
            </Link>
            <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              Resources
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-accent-gold font-semibold">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
