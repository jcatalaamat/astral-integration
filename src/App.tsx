import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
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
import CollaborationsPage from './components/pages/CollaborationsPage';
import LinksPage from './components/pages/LinksPage';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WarmHero from './components/shared/WarmHero';

// Main Landing Page Component
function LandingPage() {
  const [language, setLanguage] = useState<'en' | 'es' | 'ca'>('en');

  const t = language === 'es' ? esTranslations : language === 'ca' ? caTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section with WarmHero component */}
      <WarmHero
        title="Astral Integration"
        subtitle="Guiding souls home to themselves"
        height="large"
      >
        <p className="text-text-secondary/80 font-light italic max-w-2xl mx-auto mb-8">
          For those who hear the call. For those ready to remember.
        </p>

        {/* Language Toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : language === 'es' ? 'ca' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-white/80 backdrop-blur-md border border-text-primary/10 hover:border-accent-gold/30 transition-all"
          >
            <Globe className="w-4 h-4 text-accent-gold" />
            <span className="text-sm font-medium text-text-primary">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'CA'}</span>
          </button>
        </div>
      </WarmHero>

      {/* Who This Is For - Wisdom Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="text-3xl text-accent-gold/40">⊛</div>
            <h2 className="text-3xl md:text-4xl font-serif text-text-heading leading-relaxed">
              This work is for the ones who can no longer pretend
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                For those who've tried everything else. For the seekers who are tired of seeking.
                For the ones who know there's something deeper calling.
              </p>
              <p className="text-text-secondary/80 italic">
                You're not broken. You're not lost. You're initiating.
              </p>
              <p>
                This is for the souls ready to stop performing, stop bypassing, and start remembering
                what they came here to do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Story Section 1 - The Journey Begins */}
      <div className="min-h-[80vh] flex items-center bg-warm-white">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Large Image */}
            <div className="aspect-[4/5] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 via-accent-coral/20 to-accent-sage/20 rounded-2xl"></div>
            </div>

            {/* Minimal Text */}
            <div className="space-y-8">
              <p className="text-4xl md:text-5xl font-serif text-text-heading leading-tight">
                The journey begins with surrender.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                For over a decade, I've walked beside souls navigating the depths of transformation—through
                medicine work, energy healing, and the sacred art of letting go.
              </p>
              <Link to="/about" className="inline-block text-accent-gold hover:text-accent-terracotta transition-colors font-medium">
                My story →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section - Elegant Social Proof */}
      <div className="bg-warm-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-serif text-accent-gold">1,500+</div>
                <div className="text-text-secondary font-light text-lg">Souls awakened</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-serif text-accent-gold">10,000+</div>
                <div className="text-text-secondary font-light text-lg">Healing hours</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-serif text-accent-gold">∞</div>
                <div className="text-text-secondary font-light text-lg">Ancient wisdom lineages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Quote Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 via-warm-peach to-accent-sage/15"></div>
        <div className="relative z-10 w-full px-4 py-24">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-5xl font-serif text-text-heading leading-relaxed mb-8">
              "This work is not about becoming someone new.<br/>
              It's about remembering who you've always been."
            </p>
          </blockquote>
        </div>
      </div>

      {/* The Approach - Philosophy Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-8">
                How This Work Happens
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                This isn't therapy. It isn't coaching. It's something older. Something that can't be rushed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Presence Over Technique</h3>
                <p className="text-text-secondary leading-relaxed">
                  I don't fix you. I hold space for you to remember your own wholeness.
                  The transformation happens in the field between us.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Body. Heart. Soul.</h3>
                <p className="text-text-secondary leading-relaxed">
                  Real healing isn't just mental. We work through the body, honor the heart,
                  and listen to what your soul has been trying to say.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Integration Is Everything</h3>
                <p className="text-text-secondary leading-relaxed">
                  Insight without integration is just spiritual entertainment.
                  We anchor the work into your daily life, your relationships, your reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ways to Work Together - Visual */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Ways to Walk Together
            </h2>

            <div className="space-y-24">
              {/* Circle Work */}
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 aspect-[16/10] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 to-accent-coral/25 rounded-2xl"></div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-3xl font-serif text-text-heading">Sacred Circles</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Join a container of souls committed to growth. Men's circles, women's leadership,
                    and creative masterminds for healers and visionaries.
                  </p>
                  <Link to="/services" className="inline-block text-accent-gold hover:text-accent-terracotta transition-colors">
                    Explore circles →
                  </Link>
                </div>
              </div>

              {/* Medicine Work */}
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-serif text-text-heading">Medicine Journeys</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Bufo Alvarius ceremonies held with reverence and deep preparation. A sacred passage
                    to ego dissolution and divine remembrance.
                  </p>
                  <Link to="/services" className="inline-block text-accent-gold hover:text-accent-terracotta transition-colors">
                    Learn about medicine work →
                  </Link>
                </div>
                <div className="lg:col-span-3 aspect-[16/10] relative order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-sage/20 to-accent-terracotta/20 rounded-2xl"></div>
                </div>
              </div>

              {/* 1:1 Work */}
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 aspect-[16/10] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/20 to-accent-sage/20 rounded-2xl"></div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-3xl font-serif text-text-heading">One-to-One Journeys</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Deep transformational work tailored to your unique path. Energy healing, family
                    constellations, and bespoke mentorship.
                  </p>
                  <Link to="/services" className="inline-block text-accent-gold hover:text-accent-terracotta transition-colors">
                    Discover 1:1 work →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Initiation Process - 4 Stages */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-20">
              <div className="text-4xl text-accent-gold/40 mb-6">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                The Initiation Process
              </h2>
              <p className="text-lg text-text-secondary font-light">
                Every transformation follows the same sacred pattern
              </p>
            </div>

            {/* 4 Stages - Horizontal Flow */}
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {/* Stage 1: Dissolution */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-accent-gold mb-4">⊹</div>
                  <div className="text-2xl font-serif text-text-heading mb-2">1</div>
                  <h3 className="text-xl font-serif text-text-heading">Dissolution</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Release what no longer serves. Clear ancestral patterns, childhood wounds, and energetic debris.
                  </p>
                </div>
                {/* Arrow - hidden on mobile */}
                <div className="hidden md:block absolute top-12 -right-4 text-accent-gold/30 text-2xl">→</div>
              </div>

              {/* Stage 2: Activation */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-accent-gold mb-4">⊛</div>
                  <div className="text-2xl font-serif text-text-heading mb-2">2</div>
                  <h3 className="text-xl font-serif text-text-heading">Activation</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Awaken dormant gifts. Open your channel, activate intuition, remember your cosmic blueprint.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 -right-4 text-accent-gold/30 text-2xl">→</div>
              </div>

              {/* Stage 3: Integration */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-accent-gold mb-4">⊝</div>
                  <div className="text-2xl font-serif text-text-heading mb-2">3</div>
                  <h3 className="text-xl font-serif text-text-heading">Integration</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Embody your truth. Anchor new frequencies, align actions with soul purpose, manifest your vision.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 -right-4 text-accent-gold/30 text-2xl">→</div>
              </div>

              {/* Stage 4: Mastery */}
              <div className="text-center space-y-4">
                <div className="text-4xl text-accent-gold mb-4">✧</div>
                <div className="text-2xl font-serif text-text-heading mb-2">4</div>
                <h3 className="text-xl font-serif text-text-heading">Mastery</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Become the medicine. Step into service, hold space for others, create ripples of transformation.
                </p>
              </div>
            </div>

            {/* Closing Wisdom */}
            <div className="text-center mt-20 max-w-3xl mx-auto">
              <p className="text-lg text-text-secondary leading-relaxed italic">
                This isn't a quick fix. This isn't a weekend workshop. This is the work of a lifetime—
                compressed into the time your soul needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What People Don't Tell You - Truth Section */}
      <div className="bg-gradient-to-b from-warm-white via-warm-cream to-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading mb-8">
                What People Don't Tell You About Transformation
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-12">
                It's not all light. It's not all love. Sometimes it's messy. Sometimes it's uncomfortable.
                And that's exactly where the real work begins.
              </p>
            </div>

            <div className="space-y-8 text-text-secondary leading-relaxed">
              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You might lose people.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  Not everyone can hold space for who you're becoming. And that's okay.
                </p>
              </div>

              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You might question everything.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  Including this work. Including me. That's part of reclaiming your sovereignty.
                </p>
              </div>

              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You might feel worse before you feel better.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  Healing brings things to the surface. That's not a sign it's not working—it's a sign it is.
                </p>
              </div>

              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You will have to do the work.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  I can guide. I can hold. I can witness. But I can't do it for you. No one can.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-text-secondary italic">
                If you're still reading, if this resonates—you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Multiple Voices */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Voices From The Journey
            </h2>

            <div className="space-y-16">
              {/* Testimonial 1 */}
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-text-heading leading-relaxed mb-6 italic">
                  "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who I was'
                  way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
                </p>
                <p className="text-accent-gold text-lg">— Maria, Barcelona</p>
              </div>

              {/* Testimonial 2 */}
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-text-heading leading-relaxed mb-6 italic">
                  "The Bufo ceremony was the most profound experience of my life. Astral's preparation, presence,
                  and integration support made me feel completely safe to surrender. I finally understand what
                  'coming home to myself' means."
                </p>
                <p className="text-accent-gold text-lg">— David, USA</p>
              </div>

              {/* Testimonial 3 */}
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-text-heading leading-relaxed mb-6 italic">
                  "The men's circle gave me permission to feel everything I'd been holding back for decades.
                  To cry. To rage. To laugh. To finally be myself without apology. This work saved my life."
                </p>
                <p className="text-accent-gold text-lg">— Carlos, Mexico</p>
              </div>

              {/* Testimonial 4 */}
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-text-heading leading-relaxed mb-6 italic">
                  "After years of therapy and self-help, I finally found someone who could hold space for the
                  darkness without trying to 'fix' me. Astral helped me integrate my shadow and step into my power."
                </p>
                <p className="text-accent-gold text-lg">— Sofia, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Common Questions */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Questions You Might Have
            </h2>

            <div className="space-y-10">
              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How is this different from therapy or coaching?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Therapy focuses on healing trauma and managing symptoms. Coaching focuses on goals and performance.
                  This work goes deeper—into the soul, the body, the energy field. We're not just healing wounds or
                  achieving goals. We're remembering who you are beyond all the conditioning. It's more shamanic than
                  clinical, more mystical than methodical.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Do I need experience with plant medicine to work with you?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No. While I offer Bufo ceremonies and integration support for those working with plant medicines,
                  many people come to me for energy healing, family constellations, or mentorship without ever touching
                  medicine. The medicine is just one tool. What matters is your readiness to do deep work.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How long does this work take?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  There's no fixed timeline. Some people have breakthrough moments in a single session. Others work with
                  me for months or years. Transformation isn't linear. It's not about "fixing" you in 6 sessions—it's
                  about supporting your unique unfolding for however long it takes. I offer single sessions, 3-month
                  containers, and 6-month deep dives.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Is this work safe? How do you hold space?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Safety is paramount. For medicine work, I do thorough preparation, medical screening, and create a
                  trauma-informed container. For all work, I hold space with presence, not technique. I've trained in
                  energy healing, family constellations, and shamanic practices for over a decade. I work with your
                  nervous system, not against it. And I never push you beyond what you're ready for.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Where are you based? Do you work online or in-person?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I split my time between Barcelona (Spain) and Mazunte (Mexico). I offer both in-person sessions
                  (when I'm in your area or you travel to me) and online sessions via video call. Medicine ceremonies
                  and retreats are always in-person. Energy healing and mentorship work beautifully online.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How do I know if this is right for me?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You'll know. If you've read this far and something inside you says "yes"—that's your signal.
                  Book a discovery call. We'll talk. There's no pressure, no pitch. Just an honest conversation about
                  where you are and whether I'm the right guide for your journey. Trust your intuition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section - Inner Circle */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 via-warm-peach to-accent-coral/15"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-8 text-accent-gold/60 animate-breathe">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Join the Inner Circle
            </h2>
            <p className="text-lg text-text-secondary mb-4 font-light">
              Receive transmissions, integration practices, and soul medicine
            </p>
            <p className="text-sm text-text-secondary/80 mb-12 italic">
              Sacred transmissions 2x monthly
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email portal"
                className="flex-1 px-6 py-4 bg-warm-white/80 border border-text-primary/20 rounded-full text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent-gold text-warm-white rounded-full font-medium hover:bg-accent-terracotta transition-all"
              >
                Enter the Mystery
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Gentle Invitation */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Ready to begin?
            </h2>
            <p className="text-xl text-text-secondary">
              Let's have a conversation about where you are and where you want to go.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
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
        <Route path="/collaborations" element={<CollaborationsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/links" element={<LinksPage />} />
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
