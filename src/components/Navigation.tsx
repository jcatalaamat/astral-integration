import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-text-primary/5 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Sparkles className="w-8 h-8 text-accent-gold group-hover:animate-glow transition-all" />
            <span className="text-xl font-serif bg-gradient-to-r from-accent-terracotta via-accent-gold to-accent-coral bg-clip-text text-transparent">
              Astral Integration
            </span>
          </Link>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/about" className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium">
              About
            </Link>
            <Link to="/services" className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium">
              Services
            </Link>
            <Link to="/inner-ascend" className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium">
              Community
            </Link>
            <Link to="/retreats" className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium">
              Retreats
            </Link>
            <Link to="/collaborations" className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium">
              Collaborations
            </Link>
            <Link to="/resources" className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium">
              Resources
            </Link>
            <Link to="/contact" className="px-6 py-2 bg-accent-gold text-white rounded-full font-semibold hover:bg-accent-gold/90 hover:shadow-warm transition-all">
              Contact
            </Link>
          </div>

          {/* Right Side: Language + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-sand/50 border border-accent-gold/20 hover:bg-warm-sand transition-all"
            >
              <Globe className="w-4 h-4 text-accent-gold" />
              <span className="text-sm font-medium text-text-primary">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-accent-gold transition-colors"
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
            <Link to="/inner-ascend" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-text-secondary hover:text-accent-gold transition-colors">
              Community
            </Link>
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
