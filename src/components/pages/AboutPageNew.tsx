import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import AudioPlayer from '../ui/AudioPlayer';
import Footer from '../Footer';
import WarmHero from '../shared/WarmHero';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <WarmHero
        title="Every healer has their story"
        subtitle="Mine began with a breakdown that became a breakthrough."
        height="large"
      />

      {/* The Breakdown - Image with Text Overlay */}
      <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                The Breakdown
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                <p>
                  For years, I performed. I wore masks. I did what I thought I was supposed to do.
                </p>
                <p>
                  Until my body, my mind, and my soul said: <span className="italic text-accent-gold">NO MORE.</span>
                </p>
                <p className="text-xl text-accent-gold italic">
                  Sometimes we need to completely fall apart to remember who we truly are.
                </p>
              </div>
            </div>

            <div className="aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-accent-terracotta/20 to-accent-sage/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* The Awakening - Light Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5]">
              <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-accent-coral/20 rounded-2xl"></div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                The Awakening
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                <p>
                  Plant medicine showed me who I was beyond the story.
                </p>
                <p className="text-3xl font-serif text-accent-gold italic leading-tight">
                  Nothing. And everything.
                </p>
                <p>
                  I found presence. Consciousness. Love that isn't conditional.
                  The realization that I am already whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Quote */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-terracotta/20 to-accent-coral/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <p className="text-4xl md:text-5xl font-serif text-text-heading text-center leading-tight max-w-5xl mx-auto">
            "Awakening isn't enough.<br/>
            Integration is where the real work happens."
          </p>
        </div>
      </div>

      {/* Becoming a Guide */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                  Becoming a Guide
                </h2>
                <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                  <p>
                    I spent years learning from elders, shamans, therapists, healers. Training in
                    family constellations, somatic therapy, energy healing, Bufo facilitation.
                  </p>
                  <p className="text-xl text-accent-gold">
                    But my greatest teacher has been my own journey—and the thousands of souls
                    I've had the honor to witness.
                  </p>
                </div>
              </div>

              <div className="aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-accent-sage/20 to-accent-terracotta/20 rounded-2xl"></div>
              </div>
            </div>

            {/* Experience Stats - Minimal */}
            <div className="grid md:grid-cols-3 gap-12 text-center mt-24">
              <div>
                <div className="text-6xl font-serif text-accent-gold mb-2">10+</div>
                <div className="text-text-secondary">Years</div>
              </div>
              <div>
                <div className="text-6xl font-serif text-accent-gold mb-2">500+</div>
                <div className="text-text-secondary">Ceremonies</div>
              </div>
              <div>
                <div className="text-6xl font-serif text-accent-gold mb-2">1000+</div>
                <div className="text-text-secondary">Souls Witnessed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Moments */}
      <div className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="aspect-square bg-gradient-to-br from-accent-terracotta/20 to-accent-coral/20 rounded-lg"></div>
            <div className="aspect-square bg-gradient-to-br from-accent-sage/20 to-accent-gold/20 rounded-lg"></div>
            <div className="aspect-square bg-gradient-to-br from-accent-coral/20 to-accent-terracotta/20 rounded-lg"></div>
            <div className="aspect-square bg-gradient-to-br from-accent-gold/20 to-accent-sage/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Personal Quote Section - Sacred Depth */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-coral/15"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="text-4xl text-accent-gold/40 mb-8">⊛</div>
            <blockquote className="text-3xl md:text-5xl font-serif text-text-heading leading-relaxed italic">
              "I am not here to teach you who you are.<br/>
              I'm here to remind you what you've always known."
            </blockquote>
            <div className="text-lg text-text-secondary font-light mb-12">— Jordi</div>

            {/* Audio Player */}
            <div className="flex justify-center pt-8">
              <AudioPlayer duration="0:30" />
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy - Simple */}
      <div className="bg-accent-gold/10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-3xl md:text-4xl font-serif text-text-heading leading-relaxed">
              My work is a crossing between coaching, teaching, energy healing, therapy, and mysticism.
            </p>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              I don't have all the answers. I don't perform miracles. I don't promise instant transformation.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-accent-gold italic">
              What I do is hold space for you to remember who you already are.
            </p>
          </div>
        </div>
      </div>

      {/* What I Offer - Modalities */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-8">
                What I Bring to the Work
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                My approach draws from multiple lineages and modalities, woven together through years
                of training, practice, and direct experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-accent-gold">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Bufo Alvarius Facilitation</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  10+ years experience holding sacred space for 5-MeO-DMT journeys. Trained in trauma-informed
                  facilitation and integration support.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-accent-gold">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Energy Healing</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Shamanic energy work, chakra balancing, cord cutting, entity release. Working with the subtle
                  body to clear what blocks your flow.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-accent-gold">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Family Constellations</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Systemic healing work to reveal and resolve inherited patterns, ancestral trauma, and family
                  dynamics that keep you stuck.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-accent-gold">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Somatic Release</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Trauma lives in the body. We work through breathwork, movement, and presence to release what's
                  been stored in your nervous system.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-accent-gold">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Masculine Embodiment</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Sacred men's work to reclaim authentic power, emotional depth, and presence. Moving from
                  performance to embodiment.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-accent-gold">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Spiritual Business Mentorship</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  For healers and conscious entrepreneurs. Building sustainable practices aligned with soul
                  purpose and universal flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Ethics */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/15"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              How I Work: Values & Ethics
            </h2>

            <div className="space-y-6 leading-relaxed">
              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Consent & Sovereignty</h3>
                <p className="text-sm text-text-secondary">
                  Your body, your choice. Always. I never push, manipulate, or override your boundaries.
                  You're in control of your journey. I'm just here to hold space.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Trauma-Informed</h3>
                <p className="text-sm text-text-secondary">
                  I understand how trauma lives in the nervous system. I work with your body's wisdom, not
                  against it. Healing happens when you feel safe enough to let go.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">No Spiritual Bypassing</h3>
                <p className="text-sm text-text-secondary">
                  We don't skip over the hard stuff with positive thinking or "love and light." Real healing
                  means facing the shadow, feeling the pain, and integrating it all.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Cultural Respect</h3>
                <p className="text-sm text-text-secondary">
                  I honor the indigenous origins of the medicines and practices I work with. This isn't
                  appropriation—it's respectful collaboration with sacred traditions.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Confidentiality</h3>
                <p className="text-sm text-text-secondary">
                  What happens in session stays in session. Your story is yours to tell, not mine. I protect
                  your privacy absolutely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-text-heading">
              Ready to begin your journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/services"
                onClick={scrollToTop}
                className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Explore how we work together
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
