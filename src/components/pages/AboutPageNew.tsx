import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

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
    </div>
  );
}
