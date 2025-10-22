import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function ResourcesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      {/* Full-Screen Opening */}
      <div className="h-screen relative flex items-center justify-center bg-gradient-to-br from-warm-peach via-warm-cream to-warm-white">
        <div className="relative z-10 text-center px-4">
          <div className="text-5xl mb-8 text-accent-gold/60 animate-breathe">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-heading mb-8 font-light">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto">
            Teachings, reflections, and tools for your journey.
          </p>
        </div>
      </div>

      {/* Free Resources Vault */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                Integration Tools
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Free resources for your journey
              </p>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Timeline Shifting Meditation */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Presence Mentorship Guide</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Month-by-month deepening practices and daily presence work for embodied awareness.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Timeline_Shifting_Meditation.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Ancestral Healing Guide */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Ancestral Healing Guide</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Family constellations work to clear inherited patterns and honor your lineage.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Ancestral_Healing_Guide.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Post-Ceremony Integration Workbook */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Psychedelic Integration</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Complete guide for integrating all medicine work - psilocybin, LSD, ayahuasca, MDMA.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Post_Ceremony_Integration_Workbook.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Sacred Business Blueprint */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Sacred Business Blueprint</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Creative path guide to align your offerings with soul purpose and sacred flow.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Sacred_Business_Blueprint.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Sacred Rupture Journey */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Sacred Rupture Journey</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Navigating spiritual emergence and identity dissolution after profound medicine work.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Sacred_Rupture_Journey.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Bufo Integration Companion */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Bufo Integration Companion</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Specific guide for integrating 5-MeO-DMT/Bufo journeys and working with the void.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Bufo_Integration_Companion.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* The Masculine Journey */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">The Masculine Journey</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Men's work guide including father wound healing and reclaiming healthy masculine.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/The_Masculine_Journey.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* The Feminine Journey */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">The Feminine Journey</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Women's work including mother wound healing and reclaiming feminine power.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/The_Feminine_Journey.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Building Your Sacred Practice */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Building Your Sacred Practice</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Create sustainable daily practices for meditation, grounding, and spiritual growth.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Building_Your_Sacred_Practice.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* The Void Companion */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">The Void Companion</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Working with emptiness, meaninglessness, and the existential void after awakening.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/The_Void_Companion.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Couples & Conscious Partnership */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Couples & Conscious Partnership</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Relationship work for creating conscious, sacred partnerships and navigating conflict.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Couples_Conscious_Partnership.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Grief & Sacred Sorrow */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Grief & Sacred Sorrow</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Processing grief, loss, and ancestral sorrow with ceremony and ritual.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Grief_Sacred_Sorrow.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Somatic Healing & Trauma Release */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Somatic Healing & Trauma Release</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Body-based practices for releasing stored trauma and returning to embodied presence.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Somatic_Healing_Trauma_Release.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>

              {/* Death Practice & Mortality */}
              <div className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30">
                <div className="space-y-3">
                  <div className="text-3xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Death Practice & Mortality</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    Contemplating mortality, preparing for death, and living fully in the face of impermanence.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/resources/Death_Practice_Mortality.pdf"
                      download
                      className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                    >
                      Download PDF →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-text-secondary mt-12 italic text-sm">
              All resources are freely available for download. May they serve your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Teachings Section */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Recent Writings
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-text-heading mb-3">
                  The Fall of Society: 2025-2100
                </h3>
                <p className="text-text-secondary">
                  What's coming, and how to prepare your soul for the great transition.
                </p>
              </div>

              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-text-heading mb-3">
                  Becoming Love: Ego Dissolution
                </h3>
                <p className="text-text-secondary">
                  What Bufo taught me about surrendering identity and remembering wholeness.
                </p>
              </div>

              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-text-heading mb-3">
                  The Masculine Awakening
                </h3>
                <p className="text-text-secondary">
                  Why men's work is the most important work right now, and what it means to embody sacred masculinity.
                </p>
              </div>
            </div>

            <p className="text-center text-text-secondary mt-16 italic">
              More writings coming soon...
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials - Visual Section */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Voices From The Journey
            </h2>

            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic">
                  "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who
                  I was' way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
                </p>
                <p className="text-accent-gold font-medium">— Maria, Barcelona</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic">
                  "The Bufo ceremony was the most profound experience of my life. Astral's preparation,
                  presence, and integration support made me feel completely safe to surrender. I finally
                  understand what 'coming home to myself' means."
                </p>
                <p className="text-accent-gold font-medium">— David, USA</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic">
                  "The men's circle gave me permission to feel everything I'd been holding back for decades.
                  To cry. To rage. To laugh. To finally be myself without apology."
                </p>
                <p className="text-accent-gold font-medium">— Carlos, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Ready to begin your journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/services"
                onClick={scrollToTop}
                className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Explore how we work
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
