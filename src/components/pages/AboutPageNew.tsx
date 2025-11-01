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
        height="extra-large"
        image="/images/about/hero.jpg"
      />

      {/* The Breakdown - Image with Text Overlay */}
      <div className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                The Breakdown
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
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

            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="/images/about/breakdown.jpg"
                alt="The Breakdown"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Awakening - Light Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/about/awakening.jpg"
                alt="The Awakening"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                The Awakening
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-coral/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <blockquote className="text-3xl md:text-5xl font-serif text-text-heading text-center leading-relaxed max-w-5xl mx-auto italic">
            "Awakening isn't enough.<br/>
            Integration is where the real work happens."
          </blockquote>
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
                <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                  <p>
                    I spent years learning from elders, shamans, therapists, healers. Training in
                    family constellations, somatic therapy, energy healing, Bufo facilitation.
                  </p>
                  <p className="text-xl text-accent-gold italic">
                    But my greatest teacher has been my own journey—and the thousands of souls
                    I've had the honor to witness.
                  </p>
                </div>
              </div>

              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/images/about/guide.jpg"
                  alt="Becoming a Guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Experience Stats - Minimal */}
            <div className="grid md:grid-cols-3 gap-12 text-center mt-24">
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-serif text-accent-gold">10+</div>
                <div className="text-text-secondary font-light text-lg">Years</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-serif text-accent-gold">500+</div>
                <div className="text-text-secondary font-light text-lg">Ceremonies</div>
              </div>
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-serif text-accent-gold">1000+</div>
                <div className="text-text-secondary font-light text-lg">Souls Witnessed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Moments */}
      <div className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/about/gallery-1.jpg"
                alt="Gallery moment 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/about/gallery-2.jpg"
                alt="Gallery moment 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/about/gallery-3.jpg"
                alt="Gallery moment 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/images/about/gallery-4.jpg"
                alt="Gallery moment 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-3xl md:text-4xl font-serif text-text-heading leading-relaxed">
              My work is a crossing between coaching, teaching, energy healing, therapy, and mysticism.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
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
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                What I Bring to the Work
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                My approach draws from multiple lineages and modalities, woven together through years
                of training, practice, and direct experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Bufo Alvarius Facilitation</h3>
                <p className="text-text-secondary leading-relaxed">
                  10+ years experience holding sacred space for 5-MeO-DMT journeys. Trained in trauma-informed
                  facilitation and integration support.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Energy Healing</h3>
                <p className="text-text-secondary leading-relaxed">
                  Shamanic energy work, chakra balancing, cord cutting, entity release. Working with the subtle
                  body to clear what blocks your flow.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Family Constellations</h3>
                <p className="text-text-secondary leading-relaxed">
                  Systemic healing work to reveal and resolve inherited patterns, ancestral trauma, and family
                  dynamics that keep you stuck.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Somatic Release</h3>
                <p className="text-text-secondary leading-relaxed">
                  Trauma lives in the body. We work through breathwork, movement, and presence to release what's
                  been stored in your nervous system.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Masculine Embodiment</h3>
                <p className="text-text-secondary leading-relaxed">
                  Sacred men's work to reclaim authentic power, emotional depth, and presence. Moving from
                  performance to embodiment.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Spiritual Business Mentorship</h3>
                <p className="text-text-secondary leading-relaxed">
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              How I Work: Values & Ethics
            </h2>

            <div className="space-y-6">
              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Consent & Sovereignty</h3>
                <p className="text-text-secondary leading-relaxed">
                  Your body, your choice. Always. I never push, manipulate, or override your boundaries.
                  You're in control of your journey. I'm just here to hold space.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Trauma-Informed</h3>
                <p className="text-text-secondary leading-relaxed">
                  I understand how trauma lives in the nervous system. I work with your body's wisdom, not
                  against it. Healing happens when you feel safe enough to let go.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">No Spiritual Bypassing</h3>
                <p className="text-text-secondary leading-relaxed">
                  We don't skip over the hard stuff with positive thinking or "love and light." Real healing
                  means facing the shadow, feeling the pain, and integrating it all.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Cultural Respect</h3>
                <p className="text-text-secondary leading-relaxed">
                  I honor the indigenous origins of the medicines and practices I work with. This isn't
                  appropriation—it's respectful collaboration with sacred traditions.
                </p>
              </div>

              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-text-heading mb-3">Confidentiality</h3>
                <p className="text-text-secondary leading-relaxed">
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
