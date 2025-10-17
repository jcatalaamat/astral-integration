import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Sparkles, Globe, Menu, X } from 'lucide-react';
import './i18n';
import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';
import caTranslations from './translations/ca.json';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import AboutPageNew from './components/pages/AboutPageNew';
import ServicesPage from './components/pages/ServicesPage';
import InnerAscendPage from './components/pages/InnerAscendPage';
import RetreatsPage from './components/pages/RetreatsPage';
import ResourcesPage from './components/pages/ResourcesPage';
import ContactPage from './components/pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
// Removed old section components - now using visual storytelling approach

// Main Landing Page Component
function LandingPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon overflow-hidden relative">
      {/* Cosmic aurora background - dialed down from opacity-20 to opacity-10 */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>

      {/* Sacred geometry overlay - reduced opacity */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
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

        {/* Full-Screen Hero */}
        <div className="h-screen relative flex items-center justify-center">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/40 via-cosmic-900/60 to-sacred-green/30">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-sacred-moon mb-6 animate-fadeIn">
              Astral
            </h1>
            <p className="text-xl md:text-2xl text-sacred-moon/80 font-light tracking-wide">
              Guiding souls home to themselves
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-sacred-moon/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-sacred-moon/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Visual Story Section 1 - The Journey Begins */}
        <div className="min-h-screen flex items-center bg-sacred-cream">
          <div className="container mx-auto px-4 py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Large Image */}
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sacred-green/20 via-indigo-deep/30 to-mystic-purple/20 rounded-2xl"></div>
              </div>

              {/* Minimal Text */}
              <div className="space-y-8">
                <p className="text-5xl md:text-6xl font-serif text-indigo-deep leading-tight">
                  The journey begins with surrender.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  For over a decade, I've walked beside souls navigating the depths of transformation—through
                  medicine work, energy healing, and the sacred art of letting go.
                </p>
                <Link to="/about" className="inline-block text-sacred-green hover:text-indigo-deep transition-colors font-medium">
                  My story →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Quote Section */}
        <div className="relative h-[70vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/30 via-indigo-deep/40 to-sacred-green/20"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <blockquote className="max-w-4xl text-center">
              <p className="text-3xl md:text-5xl font-serif text-sacred-moon leading-relaxed mb-8">
                "This work is not about becoming someone new.<br/>
                It's about remembering who you've always been."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Ways to Work Together - Visual */}
        <div className="bg-sacred-cream py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-indigo-deep text-center mb-20">
                Ways to Walk Together
              </h2>

              <div className="space-y-32">
                {/* Circle Work */}
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                  <div className="lg:col-span-3 aspect-[16/10] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 to-indigo-deep/30 rounded-2xl"></div>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-3xl font-serif text-indigo-deep">Sacred Circles</h3>
                    <p className="text-indigo-deep/70 leading-relaxed">
                      Join a container of souls committed to growth. Men's circles, women's leadership,
                      and creative masterminds for healers and visionaries.
                    </p>
                    <Link to="/services" className="inline-block text-sacred-green hover:text-indigo-deep transition-colors">
                      Explore circles →
                    </Link>
                  </div>
                </div>

                {/* Medicine Work */}
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                  <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
                    <h3 className="text-3xl font-serif text-indigo-deep">Medicine Journeys</h3>
                    <p className="text-indigo-deep/70 leading-relaxed">
                      Bufo Alvarius ceremonies held with reverence and deep preparation. A sacred passage
                      to ego dissolution and divine remembrance.
                    </p>
                    <Link to="/services" className="inline-block text-sacred-green hover:text-indigo-deep transition-colors">
                      Learn about medicine work →
                    </Link>
                  </div>
                  <div className="lg:col-span-3 aspect-[16/10] relative order-1 lg:order-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/30 to-sacred-green/20 rounded-2xl"></div>
                  </div>
                </div>

                {/* 1:1 Work */}
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                  <div className="lg:col-span-3 aspect-[16/10] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sacred-green/20 to-mystic-purple/20 rounded-2xl"></div>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-3xl font-serif text-indigo-deep">One-to-One Journeys</h3>
                    <p className="text-indigo-deep/70 leading-relaxed">
                      Deep transformational work tailored to your unique path. Energy healing, family
                      constellations, and bespoke mentorship.
                    </p>
                    <Link to="/services" className="inline-block text-sacred-green hover:text-indigo-deep transition-colors">
                      Discover 1:1 work →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial - Magazine Style */}
        <div className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-cosmic-900/60 to-black/70"></div>
          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-serif text-sacred-moon leading-relaxed mb-12 italic">
                "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who I was'
                way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
              </p>
              <p className="text-sacred-gold text-lg">— Maria, Barcelona</p>
            </div>
          </div>
        </div>

        {/* Gentle Invitation */}
        <div className="bg-sacred-cream py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
                Ready to begin?
              </h2>
              <p className="text-xl text-indigo-deep/70">
                Let's have a conversation about where you are and where you want to go.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-indigo-deep text-sacred-cream rounded-full hover:bg-indigo-deep/90 transition-colors font-medium text-lg"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

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
                © 2025 Astral Integration. All rights reserved.
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPageNew />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/inner-ascend" element={<InnerAscendPage />} />
        <Route path="/retreats" element={<RetreatsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
