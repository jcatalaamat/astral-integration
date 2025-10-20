import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import AudioPlayer from '../ui/AudioPlayer';
import Footer from '../Footer';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Full-Screen Opening */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-cosmic-900/60 to-sacred-green/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-moon mb-8 font-light">
            Every healer has their story
          </h1>
          <p className="text-xl md:text-2xl text-sacred-moon/80 font-light">
            Mine began with a breakdown that became a breakthrough.
          </p>
        </div>
      </div>

      {/* The Breakdown - Image with Text Overlay */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-indigo-deep/60 to-black/80"></div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-serif text-sacred-moon">
                The Breakdown
              </h2>
              <div className="space-y-6 text-sacred-moon/80 leading-relaxed text-lg">
                <p>
                  For years, I performed. I wore masks. I did what I thought I was supposed to do.
                </p>
                <p>
                  Until my body, my mind, and my soul said: <span className="italic text-sacred-gold">NO MORE.</span>
                </p>
                <p className="text-xl text-sacred-green italic">
                  Sometimes we need to completely fall apart to remember who we truly are.
                </p>
              </div>
            </div>

            <div className="aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-black/40 to-indigo-deep/60 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* The Awakening - Light Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5]">
              <div className="w-full h-full bg-gradient-to-br from-sacred-gold/30 to-mystic-purple/20 rounded-2xl"></div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-serif text-indigo-deep">
                The Awakening
              </h2>
              <div className="space-y-6 text-indigo-deep/80 leading-relaxed text-lg">
                <p>
                  Plant medicine showed me who I was beyond the story.
                </p>
                <p className="text-3xl font-serif text-sacred-gold italic leading-tight">
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
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/40 to-indigo-deep/40"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 container mx-auto px-4">
          <p className="text-4xl md:text-6xl font-serif text-sacred-moon text-center leading-tight max-w-5xl mx-auto">
            "Awakening isn't enough.<br/>
            Integration is where the real work happens."
          </p>
        </div>
      </div>

      {/* Becoming a Guide */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-6xl font-serif text-indigo-deep">
                  Becoming a Guide
                </h2>
                <div className="space-y-6 text-indigo-deep/80 leading-relaxed text-lg">
                  <p>
                    I spent years learning from elders, shamans, therapists, healers. Training in
                    family constellations, somatic therapy, energy healing, Bufo facilitation.
                  </p>
                  <p className="text-xl text-sacred-green">
                    But my greatest teacher has been my own journey—and the thousands of souls
                    I've had the honor to witness.
                  </p>
                </div>
              </div>

              <div className="aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-sacred-green/30 to-indigo-deep/20 rounded-2xl"></div>
              </div>
            </div>

            {/* Experience Stats - Minimal */}
            <div className="grid md:grid-cols-3 gap-12 text-center mt-32">
              <div>
                <div className="text-6xl font-serif text-sacred-gold mb-2">10+</div>
                <div className="text-indigo-deep/70">Years</div>
              </div>
              <div>
                <div className="text-6xl font-serif text-sacred-gold mb-2">500+</div>
                <div className="text-indigo-deep/70">Ceremonies</div>
              </div>
              <div>
                <div className="text-6xl font-serif text-sacred-gold mb-2">1000+</div>
                <div className="text-indigo-deep/70">Souls Witnessed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Moments */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <div className="aspect-square bg-gradient-to-br from-indigo-deep/30 to-mystic-purple/20 rounded-lg"></div>
            <div className="aspect-square bg-gradient-to-br from-sacred-green/20 to-sacred-gold/20 rounded-lg"></div>
            <div className="aspect-square bg-gradient-to-br from-mystic-purple/20 to-indigo-deep/30 rounded-lg"></div>
            <div className="aspect-square bg-gradient-to-br from-sacred-gold/30 to-sacred-green/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Personal Quote Section - Sacred Depth */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/40 via-indigo-deep/50 to-cosmic-900/70"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="text-4xl text-sacred-gold/40 mb-8">⊛</div>
            <blockquote className="text-3xl md:text-5xl font-serif text-sacred-moon leading-relaxed italic">
              "I am not here to teach you who you are.<br/>
              I'm here to remind you what you've always known."
            </blockquote>
            <div className="text-lg text-sacred-moon/60 font-light mb-12">— Jordi</div>

            {/* Audio Player */}
            <div className="flex justify-center pt-8">
              <AudioPlayer duration="0:30" />
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy - Simple */}
      <div className="bg-indigo-deep text-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-3xl md:text-4xl font-serif leading-relaxed">
              My work is a crossing between coaching, teaching, energy healing, therapy, and mysticism.
            </p>
            <p className="text-xl md:text-2xl text-sacred-moon/70 leading-relaxed">
              I don't have all the answers. I don't perform miracles. I don't promise instant transformation.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-sacred-gold italic">
              What I do is hold space for you to remember who you already are.
            </p>
          </div>
        </div>
      </div>

      {/* What I Offer - Modalities */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep mb-8">
                What I Bring to the Work
              </h2>
              <p className="text-xl text-indigo-deep/70 max-w-3xl mx-auto leading-relaxed">
                My approach draws from multiple lineages and modalities, woven together through years
                of training, practice, and direct experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-sacred-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-sacred-gold">✧</div>
                <h3 className="text-xl font-serif text-indigo-deep">Bufo Alvarius Facilitation</h3>
                <p className="text-indigo-deep/70 leading-relaxed text-sm">
                  10+ years experience holding sacred space for 5-MeO-DMT journeys. Trained in trauma-informed
                  facilitation and integration support.
                </p>
              </div>

              <div className="bg-sacred-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-sacred-gold">✧</div>
                <h3 className="text-xl font-serif text-indigo-deep">Energy Healing</h3>
                <p className="text-indigo-deep/70 leading-relaxed text-sm">
                  Shamanic energy work, chakra balancing, cord cutting, entity release. Working with the subtle
                  body to clear what blocks your flow.
                </p>
              </div>

              <div className="bg-sacred-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-sacred-gold">✧</div>
                <h3 className="text-xl font-serif text-indigo-deep">Family Constellations</h3>
                <p className="text-indigo-deep/70 leading-relaxed text-sm">
                  Systemic healing work to reveal and resolve inherited patterns, ancestral trauma, and family
                  dynamics that keep you stuck.
                </p>
              </div>

              <div className="bg-sacred-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-sacred-gold">✧</div>
                <h3 className="text-xl font-serif text-indigo-deep">Somatic Release</h3>
                <p className="text-indigo-deep/70 leading-relaxed text-sm">
                  Trauma lives in the body. We work through breathwork, movement, and presence to release what's
                  been stored in your nervous system.
                </p>
              </div>

              <div className="bg-sacred-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-sacred-gold">✧</div>
                <h3 className="text-xl font-serif text-indigo-deep">Masculine Embodiment</h3>
                <p className="text-indigo-deep/70 leading-relaxed text-sm">
                  Sacred men's work to reclaim authentic power, emotional depth, and presence. Moving from
                  performance to embodiment.
                </p>
              </div>

              <div className="bg-sacred-cream/50 rounded-2xl p-8 space-y-4">
                <div className="text-3xl text-sacred-gold">✧</div>
                <h3 className="text-xl font-serif text-indigo-deep">Spiritual Business Mentorship</h3>
                <p className="text-indigo-deep/70 leading-relaxed text-sm">
                  For healers and conscious entrepreneurs. Building sustainable practices aligned with soul
                  purpose and universal flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Ethics */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/40 via-cosmic-900/60 to-black/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon text-center mb-16">
              How I Work: Values & Ethics
            </h2>

            <div className="space-y-8 text-sacred-moon/70 leading-relaxed">
              <div className="bg-cosmic-900/20 backdrop-blur-xl border border-sacred-moon/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-sacred-moon mb-3">Consent & Sovereignty</h3>
                <p className="text-sm">
                  Your body, your choice. Always. I never push, manipulate, or override your boundaries.
                  You're in control of your journey. I'm just here to hold space.
                </p>
              </div>

              <div className="bg-cosmic-900/20 backdrop-blur-xl border border-sacred-moon/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-sacred-moon mb-3">Trauma-Informed</h3>
                <p className="text-sm">
                  I understand how trauma lives in the nervous system. I work with your body's wisdom, not
                  against it. Healing happens when you feel safe enough to let go.
                </p>
              </div>

              <div className="bg-cosmic-900/20 backdrop-blur-xl border border-sacred-moon/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-sacred-moon mb-3">No Spiritual Bypassing</h3>
                <p className="text-sm">
                  We don't skip over the hard stuff with positive thinking or "love and light." Real healing
                  means facing the shadow, feeling the pain, and integrating it all.
                </p>
              </div>

              <div className="bg-cosmic-900/20 backdrop-blur-xl border border-sacred-moon/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-sacred-moon mb-3">Cultural Respect</h3>
                <p className="text-sm">
                  I honor the indigenous origins of the medicines and practices I work with. This isn't
                  appropriation—it's respectful collaboration with sacred traditions.
                </p>
              </div>

              <div className="bg-cosmic-900/20 backdrop-blur-xl border border-sacred-moon/20 rounded-2xl p-6">
                <h3 className="text-xl font-serif text-sacred-moon mb-3">Confidentiality</h3>
                <p className="text-sm">
                  What happens in session stays in session. Your story is yours to tell, not mine. I protect
                  your privacy absolutely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-indigo-deep">
              Ready to begin your journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/services"
                onClick={scrollToTop}
                className="px-10 py-4 bg-indigo-deep text-sacred-cream rounded-full hover:bg-indigo-deep/90 transition-colors font-medium"
              >
                Explore how we work together
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-indigo-deep text-indigo-deep rounded-full hover:bg-indigo-deep hover:text-sacred-cream transition-colors font-medium"
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
