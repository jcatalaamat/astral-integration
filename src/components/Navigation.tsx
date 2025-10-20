import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cosmic-900/50 border-b border-mystic-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
            <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
              Astral Integration
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/about" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
              About
            </Link>
            <Link to="/services" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
              Services
            </Link>
            <Link to="/inner-ascend" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
              Community
            </Link>
            <Link to="/retreats" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
              Retreats
            </Link>
            <Link to="/collaborations" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
              Collaborations
            </Link>
            <Link to="/resources" className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all">
              Contact
            </Link>
          </div>

          {/* Right Side: Language + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 hover:bg-mystic-purple/30 transition-all"
            >
              <Globe className="w-4 h-4 text-sacred-gold" />
              <span className="text-sm font-medium text-sacred-moon">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-mystic-lavender hover:text-sacred-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-mystic-purple/20">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
              About
            </Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
              Services
            </Link>
            <Link to="/inner-ascend" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
              Community
            </Link>
            <Link to="/retreats" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
              Retreats
            </Link>
            <Link to="/collaborations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
              Collaborations
            </Link>
            <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-mystic-lavender/80 hover:text-sacred-gold transition-colors">
              Resources
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sacred-gold font-semibold">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
