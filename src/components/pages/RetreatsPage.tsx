import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import WarmHero from '../shared/WarmHero';

export default function RetreatsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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

      {/* Upcoming Retreats 2025 */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-6">
              Upcoming Retreats 2025
            </h2>
            <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
              Join us for transformative journeys in sacred locations. Spaces are intentionally limited to create intimate, powerful containers for deep work.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mazunte May */}
              <div className="bg-warm-cream rounded-2xl overflow-hidden border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/retreats/mazunte.jpg"
                    alt="Mazunte Retreat"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-terracotta text-warm-white px-4 py-2 rounded-full text-sm font-medium">
                    6 spots left
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-sm text-accent-gold font-medium uppercase tracking-wide">
                    Group Transformation
                  </div>
                  <h3 className="text-2xl font-serif text-text-heading">
                    May 15-21, 2025
                  </h3>
                  <p className="text-lg text-text-secondary">
                    Mazunte, Mexico
                  </p>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    7 days of deep ceremony and integration on the Pacific coast. Ocean ceremonies, jungle temazcal, sacred medicine work.
                  </p>
                  <div className="pt-4 border-t border-accent-gold/20">
                    <div className="text-2xl font-serif text-text-heading mb-4">
                      €1,800
                    </div>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="block text-center px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Men's Awakening */}
              <div className="bg-warm-cream rounded-2xl overflow-hidden border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/retreats/mazunte.jpg"
                    alt="Men's Retreat"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-terracotta text-warm-white px-4 py-2 rounded-full text-sm font-medium">
                    8 spots left
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-sm text-accent-gold font-medium uppercase tracking-wide">
                    Men's Awakening
                  </div>
                  <h3 className="text-2xl font-serif text-text-heading">
                    June 5-9, 2025
                  </h3>
                  <p className="text-lg text-text-secondary">
                    Mazunte, Mexico
                  </p>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    5 days of sacred masculine work. Brotherhood, emotional release, embodiment. Optional Bufo ceremonies.
                  </p>
                  <div className="pt-4 border-t border-accent-gold/20">
                    <div className="text-2xl font-serif text-text-heading mb-4">
                      €1,400
                    </div>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="block text-center px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Barcelona September */}
              <div className="bg-warm-cream rounded-2xl overflow-hidden border-2 border-accent-gold/20 hover:border-accent-gold/40 transition-all">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/retreats/barcelona.jpg"
                    alt="Barcelona Retreat"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent-terracotta text-warm-white px-4 py-2 rounded-full text-sm font-medium">
                    4 spots left
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-sm text-accent-gold font-medium uppercase tracking-wide">
                    Group Transformation
                  </div>
                  <h3 className="text-2xl font-serif text-text-heading">
                    Sept 10-16, 2025
                  </h3>
                  <p className="text-lg text-text-secondary">
                    Barcelona, Spain
                  </p>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    6 days in the Catalan mountains. Medicine ceremonies, energy healing, Mediterranean integration walks.
                  </p>
                  <div className="pt-4 border-t border-accent-gold/20">
                    <div className="text-2xl font-serif text-text-heading mb-4">
                      €2,200
                    </div>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="block text-center px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-text-secondary/80 italic">
                All retreats include accommodation, meals, ceremonies, and facilitation. Payment plans and sliding scale available.
              </p>
            </div>
          </div>
        </div>
      </div>

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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <blockquote className="text-3xl md:text-5xl font-serif text-text-heading text-center leading-relaxed max-w-4xl mx-auto italic">
            "Transformation doesn't happen on a schedule.<br/>
            It happens when you finally have the space to let go."
          </blockquote>
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

      {/* Retreat Comparison Table */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-6">
              Retreat Experiences
            </h2>
            <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
              Three different paths, each designed for specific intentions and readiness
            </p>

            <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-accent-gold/10 border-b border-accent-gold/20">
                <div className="text-lg font-serif text-text-heading"></div>
                <div className="text-center">
                  <h3 className="text-xl font-serif text-text-heading mb-2">Group Transformation</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-serif text-text-heading mb-2">Men's Awakening</h3>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-serif text-text-heading mb-2">Private Journey</h3>
                </div>
              </div>

              {/* Duration */}
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-warm-cream">
                <div className="font-medium text-text-heading">Duration</div>
                <div className="text-center text-text-secondary">5-7 days</div>
                <div className="text-center text-text-secondary">5 days</div>
                <div className="text-center text-text-secondary">3-14 days</div>
              </div>

              {/* Group Size */}
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-warm-cream">
                <div className="font-medium text-text-heading">Group Size</div>
                <div className="text-center text-text-secondary">8-12 people</div>
                <div className="text-center text-text-secondary">8-10 men</div>
                <div className="text-center text-text-secondary">1-4 people</div>
              </div>

              {/* Price Range */}
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-warm-cream">
                <div className="font-medium text-text-heading">Investment</div>
                <div className="text-center text-text-secondary">€1,800-2,200</div>
                <div className="text-center text-text-secondary">€1,400</div>
                <div className="text-center text-text-secondary">From €3,000</div>
              </div>

              {/* Best For */}
              <div className="grid grid-cols-4 gap-4 p-6">
                <div className="font-medium text-text-heading">Best For</div>
                <div className="text-center text-text-secondary text-sm">
                  Those seeking community healing and witnessing
                </div>
                <div className="text-center text-text-secondary text-sm">
                  Men ready to reclaim authentic masculine power
                </div>
                <div className="text-center text-text-secondary text-sm">
                  Those needing deep individual work or custom pacing
                </div>
              </div>
            </div>

            {/* Additional Retreat Details */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-text-heading">Group Transformations</h3>
                <p className="text-text-secondary leading-relaxed">
                  Medicine ceremonies, energy healing, somatic release, family constellations,
                  integration circles. All meals and accommodation included. Nature immersion
                  and sacred site visits.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-text-heading">Men's Awakening</h3>
                <p className="text-text-secondary leading-relaxed">
                  Brotherhood, emotional release, masculine embodiment. Work with the archetypes:
                  The King, The Warrior, The Magician, The Lover. Optional Bufo ceremonies.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-text-heading">Private Journeys</h3>
                <p className="text-text-secondary leading-relaxed">
                  Fully customized to your path. Choose your modalities, design your schedule,
                  set your intentions. Private accommodation and ceremony space. Pre and post-retreat integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Facilitator */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              Your Facilitator
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                <img
                  src="/images/retreats/sacred-container.jpg"
                  alt="Facilitator"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-text-heading">Nina Astral</h3>
                <p className="text-xl text-text-secondary italic">
                  Holding space for transformation since 2016
                </p>

                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    With over 8 years of experience facilitating sacred medicine journeys, I bring together
                    training in somatic therapy, trauma-informed care, and ancestral healing practices.
                  </p>

                  <p>
                    My path has been shaped by deep apprenticeship with indigenous medicine keepers in Mexico
                    and Peru, rigorous training in Family Constellations and Systemic Work, and extensive study
                    in nervous system regulation and somatic psychology.
                  </p>

                  <p>
                    I've sat in over 200 ceremonies and guided hundreds of souls through their transformational
                    journeys. My approach centers safety, consent, and honoring each person's unique process.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <div className="text-accent-gold text-2xl">✦</div>
                    <h4 className="font-serif text-text-heading">Trauma-Informed</h4>
                    <p className="text-sm text-text-secondary">
                      Certified in trauma-sensitive facilitation and somatic experiencing
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-accent-gold text-2xl">✦</div>
                    <h4 className="font-serif text-text-heading">Apprenticeship</h4>
                    <p className="text-sm text-text-secondary">
                      Trained by indigenous curanderos in traditional ceremony protocols
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-accent-gold text-2xl">✦</div>
                    <h4 className="font-serif text-text-heading">Safety First</h4>
                    <p className="text-sm text-text-secondary">
                      Medical screening, preparation protocols, 24/7 support during retreats
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-accent-gold text-2xl">✦</div>
                    <h4 className="font-serif text-text-heading">Integration Expert</h4>
                    <p className="text-sm text-text-secondary">
                      Specialized training in helping you anchor insights into daily life
                    </p>
                  </div>
                </div>
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
                <p className="text-text-secondary leading-relaxed">
                  Sacred medicine journeys held with reverence, preparation, and integration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Healing</h3>
                <p className="text-text-secondary leading-relaxed">
                  Energy work, somatic release, breathwork, and bodywork to move what's stuck.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Integration</h3>
                <p className="text-text-secondary leading-relaxed">
                  Daily circles, journaling, nature walks. Making sense of what arises.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Nourishment</h3>
                <p className="text-text-secondary leading-relaxed">
                  Farm-to-table organic meals prepared with intention. Feeding body and soul.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Community</h3>
                <p className="text-text-secondary leading-relaxed">
                  Witness and be witnessed. You're not alone in this journey.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-xl font-serif text-text-heading">Sacred Space</h3>
                <p className="text-text-secondary leading-relaxed">
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
                <p className="text-text-secondary leading-relaxed">
                  €1,200-2,200 depending on location and duration
                </p>
                <p className="text-sm text-text-secondary/80">
                  Includes all ceremonies, meals, accommodation, and facilitation. Limited sliding scale spots available.
                </p>
              </div>

              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4">
                <h3 className="text-2xl font-serif text-text-heading">Private Retreats</h3>
                <p className="text-text-secondary leading-relaxed">
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

      {/* Testimonials */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-6">
              Voices from the Journey
            </h2>
            <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
              What happens when you say yes to transformation
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-warm-cream rounded-2xl p-8 border-2 border-accent-gold/20 space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "This retreat changed the entire trajectory of my life. I came feeling broken and left
                  feeling whole. Nina held such a safe container for me to finally feel all the grief
                  I'd been carrying for years."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Sarah M.</p>
                  <p className="text-sm text-text-secondary">Berlin, Germany</p>
                  <p className="text-sm text-accent-gold">Mazunte Group Retreat 2024</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-warm-cream rounded-2xl p-8 border-2 border-accent-gold/20 space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "I've been to several retreats before, but this was different. The depth of care,
                  the attention to integration, the quality of facilitation—Nina is the real deal.
                  I felt truly seen and held."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Marcus T.</p>
                  <p className="text-sm text-text-secondary">Amsterdam, Netherlands</p>
                  <p className="text-sm text-accent-gold">Barcelona Group Retreat 2023</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-warm-cream rounded-2xl p-8 border-2 border-accent-gold/20 space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "The Men's Awakening retreat was exactly what I needed. Being in circle with other men,
                  dropping the masks, feeling my power without the armor—life-changing doesn't even
                  begin to describe it."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">David R.</p>
                  <p className="text-sm text-text-secondary">London, UK</p>
                  <p className="text-sm text-accent-gold">Men's Awakening 2024</p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-warm-cream rounded-2xl p-8 border-2 border-accent-gold/20 space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "I was terrified before my first ceremony. Nina's preparation work and the safety
                  of the container made all the difference. She guided me through the most profound
                  healing experience of my life with such grace and wisdom."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Elena P.</p>
                  <p className="text-sm text-text-secondary">Barcelona, Spain</p>
                  <p className="text-sm text-accent-gold">Private Journey 2024</p>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-warm-cream rounded-2xl p-8 border-2 border-accent-gold/20 space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "The integration support after the retreat was incredible. Nina didn't just facilitate
                  ceremonies and disappear—she truly cared about how we anchored the work into our
                  daily lives. That ongoing care made all the difference."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">James K.</p>
                  <p className="text-sm text-text-secondary">San Francisco, USA</p>
                  <p className="text-sm text-accent-gold">Mazunte Group Retreat 2023</p>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-warm-cream rounded-2xl p-8 border-2 border-accent-gold/20 space-y-4">
                <div className="text-accent-gold text-3xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "I came to the retreat at a complete crossroads in my life. The medicine showed me
                  what I needed to see, and Nina helped me make sense of it all. Six months later,
                  I've completely transformed my career and relationships. Forever grateful."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Sophia L.</p>
                  <p className="text-sm text-text-secondary">Paris, France</p>
                  <p className="text-sm text-accent-gold">Barcelona Group Retreat 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-text-secondary text-center mb-16">
              Everything you need to know before your journey
            </p>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(0)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-warm-cream/30 transition-colors"
                >
                  <span className="text-lg font-serif text-text-heading pr-8">
                    What if I've never done medicine work before?
                  </span>
                  <span className="text-accent-gold text-2xl flex-shrink-0">
                    {openFaqIndex === 0 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 0 && (
                  <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                    <p className="mb-4">
                      First-timers are absolutely welcome. In fact, many participants come with no prior
                      experience. We include thorough preparation sessions before the retreat to help you
                      understand what to expect, address any fears, and prepare your nervous system.
                    </p>
                    <p>
                      During the retreat, you'll receive continuous support and guidance. The medicine work
                      is always optional—you can participate at the level that feels right for you. Some
                      people start with smaller doses or choose to sit in ceremony without taking medicine,
                      simply holding space and witnessing.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-warm-cream/30 transition-colors"
                >
                  <span className="text-lg font-serif text-text-heading pr-8">
                    What's the physical activity level?
                  </span>
                  <span className="text-accent-gold text-2xl flex-shrink-0">
                    {openFaqIndex === 1 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 1 && (
                  <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                    <p className="mb-4">
                      Retreats are designed to be accessible for most fitness levels. Activities include
                      gentle walks in nature, light yoga or stretching, and optional swimming or beach time.
                    </p>
                    <p>
                      The focus is on inner work rather than physical challenge. That said, some venues
                      involve stairs or walking on uneven terrain. If you have specific mobility concerns,
                      let us know during the application process so we can ensure the location works for you.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-warm-cream/30 transition-colors"
                >
                  <span className="text-lg font-serif text-text-heading pr-8">
                    What's included in the price?
                  </span>
                  <span className="text-accent-gold text-2xl flex-shrink-0">
                    {openFaqIndex === 2 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 2 && (
                  <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                    <p className="mb-4">
                      Group retreat prices include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>All accommodation (shared or private room options)</li>
                      <li>Three organic, locally-sourced meals daily</li>
                      <li>All ceremony facilitation and medicines</li>
                      <li>Daily integration circles and processing sessions</li>
                      <li>Energy healing, bodywork, or somatic sessions</li>
                      <li>Pre-retreat preparation calls (2 sessions)</li>
                      <li>Post-retreat integration support (2 sessions)</li>
                      <li>Access to ceremony space, meditation areas, and nature</li>
                    </ul>
                    <p>
                      Not included: Travel to/from the retreat location, personal expenses, travel insurance,
                      and optional add-ons like private healing sessions.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-warm-cream/30 transition-colors"
                >
                  <span className="text-lg font-serif text-text-heading pr-8">
                    What are the health and screening requirements?
                  </span>
                  <span className="text-accent-gold text-2xl flex-shrink-0">
                    {openFaqIndex === 3 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 3 && (
                  <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                    <p className="mb-4">
                      Safety is paramount. All participants complete a detailed health screening questionnaire
                      before acceptance. This includes mental and physical health history, current medications,
                      and past trauma or psychiatric conditions.
                    </p>
                    <p className="mb-4">
                      Certain conditions may make medicine work inadvisable, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Current use of SSRIs or MAOIs (must be discontinued with doctor approval)</li>
                      <li>Severe heart conditions or uncontrolled high blood pressure</li>
                      <li>Active psychosis, schizophrenia, or bipolar disorder</li>
                      <li>Pregnancy or breastfeeding</li>
                      <li>Recent major surgery or unstable medical conditions</li>
                    </ul>
                    <p>
                      We review each application individually and may request clearance from your healthcare
                      provider. This isn't about exclusion—it's about ensuring your safety and readiness.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(4)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-warm-cream/30 transition-colors"
                >
                  <span className="text-lg font-serif text-text-heading pr-8">
                    What's your cancellation policy?
                  </span>
                  <span className="text-accent-gold text-2xl flex-shrink-0">
                    {openFaqIndex === 4 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 4 && (
                  <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                    <p className="mb-4">
                      We understand that life happens. Here's our cancellation policy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>60+ days before: Full refund minus €200 administrative fee</li>
                      <li>30-59 days before: 50% refund</li>
                      <li>Less than 30 days: No refund, but you can transfer to another retreat date</li>
                    </ul>
                    <p className="mb-4">
                      We hold limited spots to maintain intimacy, so last-minute cancellations significantly
                      impact the retreat. We strongly recommend travel insurance that covers cancellations.
                    </p>
                    <p>
                      If you need to cancel due to a medical emergency or serious life event, we'll work
                      with you on a case-by-case basis.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-warm-white/90 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(5)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-warm-cream/30 transition-colors"
                >
                  <span className="text-lg font-serif text-text-heading pr-8">
                    How do I get there? What about travel logistics?
                  </span>
                  <span className="text-accent-gold text-2xl flex-shrink-0">
                    {openFaqIndex === 5 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 5 && (
                  <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                    <p className="mb-4">
                      Once you're accepted, we provide detailed travel information including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Nearest airports and recommended flights</li>
                      <li>Ground transportation options (shuttles, taxis, car rentals)</li>
                      <li>Specific directions to the retreat location</li>
                      <li>Recommended arrival and departure times</li>
                      <li>Visa requirements if applicable</li>
                    </ul>
                    <p className="mb-4">
                      For Mazunte retreats, most participants fly into Huatulco or Puerto Escondido (Mexico)
                      and take a shuttle or taxi. For Barcelona retreats, fly into Barcelona-El Prat Airport
                      with ground transport to the mountain venue.
                    </p>
                    <p>
                      We coordinate group arrivals when possible and can arrange shared shuttles to reduce costs.
                      Full details are provided 6-8 weeks before the retreat start date.
                    </p>
                  </div>
                )}
              </div>
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
                  <p className="text-text-secondary leading-relaxed">
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
                  <p className="text-text-secondary leading-relaxed">
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
                  <p className="text-text-secondary leading-relaxed">
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
                  <p className="text-text-secondary leading-relaxed">
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
