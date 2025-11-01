import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import WarmHero from '../shared/WarmHero';

export default function RetreatsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <WarmHero
        title="Sacred Immersions"
        subtitle="Sometimes the deepest work happens when you step away from everything you know."
        height="extra-large"
        image="/images/retreats/hero.jpg"
      />

      {/* What Makes A Retreat Sacred */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                  What makes a retreat sacred?
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed italic">
                  It's not the location. It's the container.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  These aren't vacations. They're pilgrimages. Descents. Returns.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We gather in places where the veil is thin—by the ocean, in the mountains,
                  under expansive skies—to do the work that can't be rushed.
                </p>
              </div>

              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img
                  src="/images/retreats/sacred-container.jpg"
                  alt="Sacred Container"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Quote */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-coral/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <p className="text-3xl md:text-5xl font-serif text-text-heading text-center leading-tight max-w-4xl mx-auto italic">
            "Transformation doesn't happen on a schedule.<br/>
            It happens when you finally have the space to let go."
          </p>
        </div>
      </div>

      {/* Places We Gather */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Places We Gather
            </h2>

            <div className="space-y-24">
              {/* Mazunte */}
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-3 aspect-[16/10] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/retreats/mazunte.jpg"
                    alt="Mazunte, Mexico"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-3xl font-serif text-text-heading">Mazunte, Mexico</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Pacific coast of Oaxaca. Jungle meets ocean. Sacred beach village where
                    the earth still holds ancient memory.
                  </p>
                  <p className="text-sm text-text-secondary/80">
                    Ocean ceremonies • Jungle integration • Traditional temazcal
                  </p>
                </div>
              </div>

              {/* Barcelona */}
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-serif text-text-heading">Barcelona & Catalunya</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Mountains, Mediterranean coast, mystical countryside. Ancient wisdom
                    meets modern sanctuary.
                  </p>
                  <p className="text-sm text-text-secondary/80">
                    Mountain retreats • Mediterranean integration • Cultural immersion
                  </p>
                </div>

                <div className="lg:col-span-3 aspect-[16/10] relative order-1 lg:order-2 overflow-hidden rounded-2xl">
                  <img
                    src="/images/retreats/barcelona.jpg"
                    alt="Barcelona & Catalunya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retreat Experiences */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Retreat Experiences
            </h2>

            <div className="space-y-16">
              {/* Group Transformations */}
              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-text-heading">Group Transformations</h3>
                <p className="text-xl text-text-secondary leading-relaxed italic">
                  5-7 days of deep work with 8-12 souls
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Medicine ceremonies, energy healing, somatic release, family constellations,
                  integration circles. All meals and accommodation included. Nature immersion
                  and sacred site visits.
                </p>
                <p className="text-sm text-text-secondary/80">
                  Next retreats: Spring & Fall 2025
                </p>
              </div>

              {/* Private Journeys */}
              <div className="space-y-6 pt-8">
                <h3 className="text-3xl font-serif text-text-heading">Private Custom Journeys</h3>
                <p className="text-xl text-text-secondary leading-relaxed italic">
                  3-14 days, fully tailored to your path
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Individual or small group (2-4 people). Choose your modalities, design your
                  schedule, set your intentions. Private accommodation and ceremony space.
                  Pre and post-retreat integration.
                </p>
              </div>

              {/* Men's Work */}
              <div className="space-y-6 pt-8">
                <h3 className="text-3xl font-serif text-text-heading">Men's Awakening</h3>
                <p className="text-xl text-text-secondary leading-relaxed italic">
                  The King, The Warrior, The Magician, The Lover
                </p>
                <p className="text-text-secondary leading-relaxed">
                  5 days of sacred men's work. Brotherhood, emotional release, masculine
                  embodiment. Optional Bufo ceremonies. A journey into authentic power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included - Visual Grid */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              What Unfolds
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Ceremony</h3>
                <p className="text-text-secondary">
                  Sacred medicine journeys held with reverence, preparation, and integration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Healing</h3>
                <p className="text-text-secondary">
                  Energy work, somatic release, breathwork, and bodywork to move what's stuck.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Integration</h3>
                <p className="text-text-secondary">
                  Daily circles, journaling, nature walks. Making sense of what arises.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Nourishment</h3>
                <p className="text-text-secondary">
                  Farm-to-table organic meals prepared with intention. Feeding body and soul.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Community</h3>
                <p className="text-text-secondary">
                  Witness and be witnessed. You're not alone in this journey.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Sacred Space</h3>
                <p className="text-text-secondary">
                  Ceremony altars, meditation areas, ocean/mountain access. Beauty matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-12">
              Investment
            </h2>

            <div className="space-y-8">
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-serif text-text-heading">Group Retreats</h3>
                <p className="text-text-secondary">
                  €1,200-2,200 depending on location and duration
                </p>
                <p className="text-sm text-text-secondary/80">
                  Includes all ceremonies, meals, accommodation, and facilitation. Limited sliding scale spots available.
                </p>
              </div>

              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-serif text-text-heading">Private Retreats</h3>
                <p className="text-text-secondary">
                  Custom pricing based on duration, location, and group size
                </p>
                <p className="text-sm text-text-secondary/80">
                  Minimum 3 days. Starting from €3,000 for individual journeys.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-text-secondary/80 italic">
                Payment plans available. This work should be accessible to those truly called.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-12">
              How to Join
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-serif">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-text-heading mb-2">Initial Call</h3>
                  <p className="text-text-secondary">
                    We'll have a conversation about where you are, what you're seeking, and whether
                    this retreat feels aligned.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-serif">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-text-heading mb-2">Preparation</h3>
                  <p className="text-text-secondary">
                    1-2 preparation sessions to set intentions, address questions, and prepare your
                    nervous system for the work ahead.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-serif">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-text-heading mb-2">The Journey</h3>
                  <p className="text-text-secondary">
                    Full immersion. Surrender. Trust the process. Let the container hold you.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-serif">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-serif text-text-heading mb-2">Integration</h3>
                  <p className="text-text-secondary">
                    Post-retreat support to help anchor the insights and navigate re-entry into
                    daily life.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Express interest
              </Link>
              <p className="text-sm text-text-secondary/80">
                Currently accepting applications for 2025 retreats
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
