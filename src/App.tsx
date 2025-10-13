import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Sparkles, Globe, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import caTranslations from './translations/ca.json';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import OfferingsSection from './components/OfferingsSection';
import TransformationStages from './components/TransformationStages';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ResourcesSection from './components/ResourcesSection';
import NewsletterSection from './components/NewsletterSection';

// Main Landing Page Component
function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15), transparent 40%)`
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon overflow-hidden relative">
      {/* Cosmic aurora background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-mystic-indigo rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-mystic-violet rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
      </div>

      {/* Mystical spotlight effect */}
      <div className="fixed inset-0 pointer-events-none" style={spotlightStyle}></div>

      {/* Sacred geometry overlay */}
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sacred-gold rounded-full animate-float opacity-40" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-mystic-lavender rounded-full animate-float opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-sacred-glow rounded-full animate-float opacity-35" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cosmic-900/50 border-b border-mystic-purple/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
                <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
                  Astral Integration
                </span>
              </div>

              {/* Nav Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('offerings')} className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
                  Sacred Work
                </button>
                <button onClick={() => scrollToSection('transformation')} className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
                  The Journey
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors">
                  Transformations
                </button>
                <button onClick={() => scrollToSection('booking')} className="px-6 py-2 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all animate-breathe">
                  Work With Me
                </button>
              </div>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 hover:bg-mystic-purple/30 transition-all"
              >
                <Globe className="w-4 h-4 text-sacred-gold" />
                <span className="text-sm font-medium text-sacred-moon">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Sacred Symbol */}
            <div className="text-5xl mb-8 text-sacred-gold animate-breathe opacity-60">⊹</div>

            {/* Main Headline - Bold Transformation */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="inline-block animate-fadeIn bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent animate-shimmer" style={{
                backgroundSize: '200% auto'
              }}>
                Timeline Shift Into Your Highest Self
              </span>
            </h1>

            {/* Subtitle - Powerful */}
            <p className="text-2xl md:text-3xl text-mystic-lavender/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              Soul realignment for initiates ready to transcend limitations and become game changers
            </p>

            {/* Sacred Message - Soft Wisdom */}
            <div className="text-base text-mystic-lavender/60 mb-4 font-serif italic">
              1:1 Mentorship • Soul Work • Integration
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center gap-4 my-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-mystic-purple/50 to-transparent"></div>
              <div className="text-xl text-sacred-gold/40">✧</div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-mystic-purple/50 to-transparent"></div>
            </div>

            {/* Gentle Sacred Message */}
            <p className="text-sm text-mystic-lavender/50 mb-2 font-serif italic">
              This is not self-help. This is soul remembrance.
            </p>
            <p className="text-sm text-mystic-lavender/40 mb-12 font-serif">
              Your journey begins with one sacred step.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection('booking')}
                className="group px-8 py-4 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet text-sacred-moon rounded-2xl font-semibold hover:shadow-2xl hover:shadow-mystic-purple/50 transition-all flex items-center gap-3 animate-breathe"
              >
                <span>Begin Your Initiation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('offerings')}
                className="px-8 py-4 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-2xl font-semibold hover:bg-mystic-purple/30 transition-all"
              >
                Explore Soul Work
              </button>
            </div>

            {/* Gentle Closing */}
            <div className="text-xs text-mystic-lavender/40 font-serif italic">
              This is your first breath back home.
            </div>
          </div>
        </div>

        {/* All Sections */}
        <OfferingsSection language={language} translations={t} />
        <TransformationStages language={language} translations={t} />
        <AboutSection language={language} translations={t} />
        <TestimonialsSection language={language} translations={t} />
        <BookingSection language={language} translations={t} />
        <ResourcesSection language={language} translations={t} />
        <NewsletterSection language={language} translations={t} />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-20 border-t border-mystic-purple/20">
          <div className="max-w-6xl mx-auto">
            {/* Sacred Symbol */}
            <div className="text-center mb-12">
              <div className="text-4xl text-sacred-gold/40 animate-breathe mb-8">⊹</div>
            </div>

            <div className="text-center space-y-6 mb-12">
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-mystic-violet animate-glow" />
                <span className="text-xl font-serif bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
                  Astral Integration
                </span>
              </div>

              {/* Sacred Blessing */}
              <div className="space-y-3 mb-8">
                <p className="text-lg text-mystic-lavender/80 font-serif italic">
                  The Mirror Path
                </p>
                <p className="text-base text-mystic-lavender/60 font-serif">
                  Reflect. Remember. Return.
                </p>
              </div>

              {/* Sacred Divider */}
              <div className="flex justify-center items-center gap-4 my-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-mystic-purple/50 to-transparent"></div>
                <div className="text-xl text-sacred-gold/40">✧</div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-mystic-purple/50 to-transparent"></div>
              </div>

              {/* Email */}
              <p className="text-sm">
                <a href={`mailto:${t.footer.email}`} className="text-mystic-lavender/70 hover:text-sacred-gold transition-colors font-serif">
                  {t.footer.email}
                </a>
              </p>

              {/* Social */}
              <div className="flex items-center justify-center gap-6 text-sm">
                <a href={`https://instagram.com/${t.footer.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-mystic-lavender/60 hover:text-mystic-violet transition-colors font-serif">
                  Instagram
                </a>
                <span className="text-mystic-purple/40">•</span>
                <a href={`https://${t.footer.social.bio}`} target="_blank" rel="noopener noreferrer" className="text-mystic-lavender/60 hover:text-mystic-violet transition-colors font-serif">
                  Bio Link
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-center gap-6 text-sm mb-8">
              <Link to="/support" className="text-mystic-lavender/50 hover:text-sacred-gold transition-colors font-serif">
                Support
              </Link>
              <span className="text-mystic-purple/40">•</span>
              <Link to="/privacy" className="text-mystic-lavender/50 hover:text-sacred-gold transition-colors font-serif">
                Privacy
              </Link>
            </div>

            {/* Sacred Closing Blessing */}
            <div className="text-center space-y-4 mb-8">
              <p className="text-base text-mystic-lavender/70 font-serif italic">
                May your return be soft, your voice be heard, and your path be lit from within.
              </p>
              <p className="text-sm text-mystic-lavender/50 font-serif">
                May your path be lit with remembrance.
              </p>
            </div>

            {/* Final Blessing */}
            <div className="text-center space-y-2">
              <p className="text-sm text-mystic-lavender/60 font-serif">
                Awaken. Remember. Embody. You are already home.
              </p>
              <p className="text-xs text-mystic-lavender/40 mt-4">
                © 2023 Jordi Sacred Coaching. All rights reserved.
              </p>
            </div>

            {/* Bottom Symbol */}
            <div className="text-center mt-12">
              <div className="text-2xl text-mystic-violet/30 animate-breathe">☉</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
