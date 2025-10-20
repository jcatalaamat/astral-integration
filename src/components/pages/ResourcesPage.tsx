import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

export default function ResourcesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Full-Screen Opening */}
      <div className="h-screen relative flex items-center justify-center bg-gradient-to-br from-cosmic-900/90 via-indigo-deep/80 to-black/90">
        <div className="relative z-10 text-center px-4">
          <div className="text-5xl mb-8 text-sacred-gold animate-breathe opacity-60">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-moon mb-8 font-light">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-sacred-moon/80 font-light max-w-2xl mx-auto">
            Teachings, reflections, and tools for your journey.
          </p>
        </div>
      </div>

      {/* Free Resources Vault */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep mb-6">
                Integration Tools
              </h2>
              <p className="text-xl text-indigo-deep/70 leading-relaxed">
                Free resources for your journey
              </p>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Timeline Shifting Meditation */}
              <div className="group relative bg-white border border-indigo-deep/10 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-sacred-gold/30">
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">✦</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">Timeline Shifting Meditation</h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    A guided journey to realign with your highest timeline and shift your reality.
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-flex items-center text-sacred-green hover:text-indigo-deep transition-colors font-medium"
                    >
                      Request PDF →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Ancestral Healing Guide */}
              <div className="group relative bg-white border border-indigo-deep/10 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-sacred-gold/30">
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">✦</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">Ancestral Healing Guide</h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Practices to clear inherited patterns and honor your lineage.
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-flex items-center text-sacred-green hover:text-indigo-deep transition-colors font-medium"
                    >
                      Request PDF →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Post-Ceremony Integration Workbook */}
              <div className="group relative bg-white border border-indigo-deep/10 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-sacred-gold/30">
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">✦</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">Post-Ceremony Integration Workbook</h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Tools to ground your medicine journey insights into embodied wisdom.
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-flex items-center text-sacred-green hover:text-indigo-deep transition-colors font-medium"
                    >
                      Request PDF →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sacred Business Blueprint */}
              <div className="group relative bg-white border border-indigo-deep/10 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-sacred-gold/30">
                <div className="space-y-4">
                  <div className="text-4xl text-sacred-gold">✦</div>
                  <h3 className="text-2xl font-serif text-indigo-deep">Sacred Business Blueprint</h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Align your offerings with soul purpose and universal flow.
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-flex items-center text-sacred-green hover:text-indigo-deep transition-colors font-medium"
                    >
                      Request PDF →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-indigo-deep/60 mt-12 italic text-sm">
              Request any or all resources via the contact form. They'll be sent to your inbox within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Teachings Section */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/30 via-cosmic-900/50 to-black/60"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon text-center mb-20">
              Recent Writings
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-sacred-gold/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-sacred-moon mb-3">
                  The Fall of Society: 2025-2100
                </h3>
                <p className="text-sacred-moon/70">
                  What's coming, and how to prepare your soul for the great transition.
                </p>
              </div>

              <div className="border-l-4 border-sacred-gold/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-sacred-moon mb-3">
                  Becoming Love: Ego Dissolution
                </h3>
                <p className="text-sacred-moon/70">
                  What Bufo taught me about surrendering identity and remembering wholeness.
                </p>
              </div>

              <div className="border-l-4 border-sacred-gold/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-sacred-moon mb-3">
                  The Masculine Awakening
                </h3>
                <p className="text-sacred-moon/70">
                  Why men's work is the most important work right now, and what it means to embody sacred masculinity.
                </p>
              </div>
            </div>

            <p className="text-center text-sacred-moon/60 mt-16 italic">
              More writings coming soon...
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials - Visual Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
              Voices From The Journey
            </h2>

            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-indigo-deep/80 leading-relaxed italic">
                  "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who
                  I was' way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
                </p>
                <p className="text-sacred-gold font-medium">— Maria, Barcelona</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-indigo-deep/80 leading-relaxed italic">
                  "The Bufo ceremony was the most profound experience of my life. Astral's preparation,
                  presence, and integration support made me feel completely safe to surrender. I finally
                  understand what 'coming home to myself' means."
                </p>
                <p className="text-sacred-gold font-medium">— David, USA</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-indigo-deep/80 leading-relaxed italic">
                  "The men's circle gave me permission to feel everything I'd been holding back for decades.
                  To cry. To rage. To laugh. To finally be myself without apology."
                </p>
                <p className="text-sacred-gold font-medium">— Carlos, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-mystic-purple/40 to-cosmic-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon">
              Ready to begin your journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/services"
                onClick={scrollToTop}
                className="px-10 py-4 bg-sacred-cream text-indigo-deep rounded-full hover:bg-sacred-moon transition-colors font-medium"
              >
                Explore how we work
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-sacred-cream text-sacred-cream rounded-full hover:bg-sacred-cream hover:text-indigo-deep transition-colors font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
