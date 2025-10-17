import { Link } from 'react-router-dom';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import Navigation from '../Navigation';

export default function RetreatsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Full-Screen Opening */}
      <div className="h-screen relative flex items-center justify-center">
        <ImagePlaceholder className="absolute inset-0" overlay="dark" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-moon mb-8 font-light">
            Sacred Immersions
          </h1>
          <p className="text-xl md:text-2xl text-sacred-moon/80 font-light max-w-2xl mx-auto">
            Sometimes the deepest work happens when you step away from everything you know.
          </p>
        </div>
      </div>

      {/* What Makes A Retreat Sacred */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
                  What makes a retreat sacred?
                </h2>
                <p className="text-xl text-indigo-deep/80 leading-relaxed italic">
                  It's not the location. It's the container.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  These aren't vacations. They're pilgrimages. Descents. Returns.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  We gather in places where the veil is thin—by the ocean, in the mountains,
                  under expansive skies—to do the work that can't be rushed.
                </p>
              </div>

              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 to-sacred-green/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Quote */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/40 via-cosmic-900/60 to-black/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <p className="text-3xl md:text-5xl font-serif text-sacred-moon text-center leading-tight max-w-4xl mx-auto italic">
            "Transformation doesn't happen on a schedule.<br/>
            It happens when you finally have the space to let go."
          </p>
        </div>
      </div>

      {/* Places We Gather */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
              Places We Gather
            </h2>

            <div className="space-y-32">
              {/* Mazunte */}
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-3 aspect-[16/10] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sacred-green/30 to-mystic-purple/20 rounded-2xl"></div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-3xl font-serif text-indigo-deep">Mazunte, Mexico</h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Pacific coast of Oaxaca. Jungle meets ocean. Sacred beach village where
                    the earth still holds ancient memory.
                  </p>
                  <p className="text-sm text-indigo-deep/60">
                    Ocean ceremonies • Jungle integration • Traditional temazcal
                  </p>
                </div>
              </div>

              {/* Barcelona */}
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-serif text-indigo-deep">Barcelona & Catalunya</h3>
                  <p className="text-indigo-deep/70 leading-relaxed">
                    Mountains, Mediterranean coast, mystical countryside. Ancient wisdom
                    meets modern sanctuary.
                  </p>
                  <p className="text-sm text-indigo-deep/60">
                    Mountain retreats • Mediterranean integration • Cultural immersion
                  </p>
                </div>

                <div className="lg:col-span-3 aspect-[16/10] relative order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/30 to-mystic-violet/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retreat Experiences */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/80 via-indigo-deep/70 to-black/80"></div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon text-center mb-20">
              Retreat Experiences
            </h2>

            <div className="space-y-16">
              {/* Group Transformations */}
              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-sacred-moon">Group Transformations</h3>
                <p className="text-xl text-sacred-moon/80 leading-relaxed italic">
                  5-7 days of deep work with 8-12 souls
                </p>
                <p className="text-sacred-moon/70 leading-relaxed">
                  Medicine ceremonies, energy healing, somatic release, family constellations,
                  integration circles. All meals and accommodation included. Nature immersion
                  and sacred site visits.
                </p>
                <p className="text-sm text-sacred-moon/60">
                  Next retreats: Spring & Fall 2025
                </p>
              </div>

              {/* Private Journeys */}
              <div className="space-y-6 pt-8">
                <h3 className="text-3xl font-serif text-sacred-moon">Private Custom Journeys</h3>
                <p className="text-xl text-sacred-moon/80 leading-relaxed italic">
                  3-14 days, fully tailored to your path
                </p>
                <p className="text-sacred-moon/70 leading-relaxed">
                  Individual or small group (2-4 people). Choose your modalities, design your
                  schedule, set your intentions. Private accommodation and ceremony space.
                  Pre and post-retreat integration.
                </p>
              </div>

              {/* Men's Work */}
              <div className="space-y-6 pt-8">
                <h3 className="text-3xl font-serif text-sacred-moon">Men's Awakening</h3>
                <p className="text-xl text-sacred-moon/80 leading-relaxed italic">
                  The King, The Warrior, The Magician, The Lover
                </p>
                <p className="text-sacred-moon/70 leading-relaxed">
                  5 days of sacred men's work. Brotherhood, emotional release, masculine
                  embodiment. Optional Bufo ceremonies. A journey into authentic power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included - Visual Grid */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
              What Unfolds
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-indigo-deep">Ceremony</h3>
                <p className="text-indigo-deep/70">
                  Sacred medicine journeys held with reverence, preparation, and integration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-indigo-deep">Healing</h3>
                <p className="text-indigo-deep/70">
                  Energy work, somatic release, breathwork, and bodywork to move what's stuck.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-indigo-deep">Integration</h3>
                <p className="text-indigo-deep/70">
                  Daily circles, sharing, journaling, and practices to ground the transformation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-indigo-deep">Nature</h3>
                <p className="text-indigo-deep/70">
                  Beach walks, jungle hikes, mountain silence. Let the land do its part.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-indigo-deep">Nourishment</h3>
                <p className="text-indigo-deep/70">
                  Healthy, intentional meals prepared with care. Food as medicine.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-indigo-deep">Community</h3>
                <p className="text-indigo-deep/70">
                  The container of souls who see you, hold you, and walk beside you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-mystic-purple/40 to-cosmic-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon">
              Is it time?
            </h2>
            <p className="text-xl text-sacred-moon/80">
              If you feel the call to go deeper, let's talk about which retreat
              serves your journey—or design something uniquely yours.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-12 py-4 bg-sacred-cream text-indigo-deep rounded-full hover:bg-sacred-moon transition-colors font-medium"
              >
                Explore retreat options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
