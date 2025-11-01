import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function CollaborationsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Full-Screen Opening */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/collaborations/hero.jpg"
            alt="Collaborations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-warm-peach/40 via-warm-cream/60 to-accent-sage/30"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="text-5xl mb-8 text-accent-gold/80 animate-breathe">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif text-text-heading mb-8 font-light">
            Collaborations
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto">
            Let's create something sacred together
          </p>
        </div>
      </div>

      {/* The Vision */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Co-Creating Transformation
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              I believe the most powerful work happens when we unite our medicine.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              If you're a healer, facilitator, retreat center, or conscious entrepreneur who feels the call
              to collaborate—I'm listening. Let's explore how our paths might weave together.
            </p>
          </div>
        </div>
      </div>

      {/* What I Offer for Collaboration */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              What I Bring to the Table
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Medicine Facilitation */}
              <div className="bg-warm-white/80 backdrop-blur-xl border border-text-primary/10 rounded-2xl p-8 space-y-6">
                <div className="text-accent-gold text-4xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Bufo Alvarius Medicine Facilitation</h3>
                <p className="text-text-secondary leading-relaxed">
                  Over a decade of experience holding sacred space for 5-MeO-DMT journeys. I bring preparation,
                  presence, integration support, and deep reverence for the medicine.
                </p>
                <ul className="space-y-3 text-text-secondary">
                  <li>• Pre-ceremony preparation and screening</li>
                  <li>• Safe, trauma-informed facilitation</li>
                  <li>• Post-ceremony integration support</li>
                  <li>• Group and private ceremony formats</li>
                </ul>
              </div>

              {/* Teaching & Workshops */}
              <div className="bg-warm-white/80 backdrop-blur-xl border border-text-primary/10 rounded-2xl p-8 space-y-6">
                <div className="text-accent-gold text-4xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Workshops & Teachings</h3>
                <p className="text-text-secondary leading-relaxed">
                  I offer experiential workshops on integration, energy healing, masculine embodiment,
                  and spiritual business. Tailored to your audience and container.
                </p>
                <ul className="space-y-3 text-text-secondary">
                  <li>• Integration after plant medicine</li>
                  <li>• Energy healing & somatic release</li>
                  <li>• Sacred masculinity & men's work</li>
                  <li>• Spiritual entrepreneurship</li>
                </ul>
              </div>

              {/* Retreat Co-Facilitation */}
              <div className="bg-warm-white/80 backdrop-blur-xl border border-text-primary/10 rounded-2xl p-8 space-y-6">
                <div className="text-accent-gold text-4xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Retreat Co-Facilitation</h3>
                <p className="text-text-secondary leading-relaxed">
                  Let's design transformational retreats together. I bring ceremony, healing sessions,
                  integration circles, and deep presence to multi-day immersions.
                </p>
                <ul className="space-y-3 text-text-secondary">
                  <li>• 3-14 day retreat formats</li>
                  <li>• Custom program design</li>
                  <li>• Ceremony + integration containers</li>
                  <li>• Healing sessions & energy work</li>
                </ul>
              </div>

              {/* Guest Facilitation */}
              <div className="bg-warm-white/80 backdrop-blur-xl border border-text-primary/10 rounded-2xl p-8 space-y-6">
                <div className="text-accent-gold text-4xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Guest Facilitation at Your Center</h3>
                <p className="text-text-secondary leading-relaxed">
                  If you run a retreat center, healing space, or conscious community—I'm available for
                  guest facilitation residencies. Bring medicine work and transformational offerings to your space.
                </p>
                <ul className="space-y-3 text-text-secondary">
                  <li>• 1-4 week residencies</li>
                  <li>• Medicine ceremonies for your community</li>
                  <li>• Workshops and teachings</li>
                  <li>• Private sessions for guests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who I Collaborate With */}
      <div className="bg-warm-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              Who I Love Working With
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Retreat Centers</h3>
                <p className="text-text-secondary leading-relaxed">
                  Centers in Mexico, Spain, Costa Rica, and beyond looking to offer medicine work
                  and transformational programming.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Healers & Facilitators</h3>
                <p className="text-text-secondary leading-relaxed">
                  Conscious practitioners who want to co-create retreats, workshops, or offer
                  medicine work to their communities.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Conscious Communities</h3>
                <p className="text-text-secondary leading-relaxed">
                  Intentional communities, co-living spaces, and transformation-focused groups
                  seeking ceremony and integration support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-3xl md:text-5xl font-serif text-text-heading leading-relaxed italic">
              "The most sacred work happens when healers come together—not in competition,
              but in collaboration. Not to build empires, but to serve transformation."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Past Collaborations */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              Past Collaborations
            </h2>

            <div className="space-y-12">
              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-text-heading mb-2">
                  Retreat Centers in Mazunte, Mexico
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Multi-day transformational retreats combining Bufo ceremonies, integration circles,
                  energy healing, and ocean-based practices.
                </p>
              </div>

              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-text-heading mb-2">
                  Sacred Masculinity Workshops (Barcelona)
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Co-facilitated men's circles and weekend intensives focused on embodiment, emotional
                  release, and authentic power.
                </p>
              </div>

              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-text-heading mb-2">
                  Integration Programs for Ayahuasca Communities
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Post-ceremony integration workshops and ongoing support for communities working
                  with plant medicines.
                </p>
              </div>

              <div className="border-l-4 border-accent-gold/40 pl-8 py-4">
                <h3 className="text-xl font-serif text-text-heading mb-2">
                  Spiritual Business Training for Healers
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Teaching conscious entrepreneurs how to build sustainable practices while staying
                  aligned with soul purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Can Work Together */}
      <div className="bg-warm-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-12">
              How We Can Work Together
            </h2>

            <div className="space-y-8">
              <div className="bg-warm-cream/50 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-text-heading mb-4">1. Discovery Call</h3>
                <p className="text-text-secondary leading-relaxed">
                  We start with a conversation. No pitches, no pressure—just an exploration of whether
                  our visions align and what we might create together.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-text-heading mb-4">2. Co-Design</h3>
                <p className="text-text-secondary leading-relaxed">
                  If it's a yes, we design the container together. What's the vision? Who are we serving?
                  What medicine wants to come through? We make it sacred from the start.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-text-heading mb-4">3. Aligned Action</h3>
                <p className="text-text-secondary leading-relaxed">
                  I handle my side—facilitation, ceremony, integration, content. You handle yours—venue,
                  logistics, marketing, or whatever gifts you bring. We trust the process.
                </p>
              </div>

              <div className="bg-warm-cream/50 rounded-2xl p-8">
                <h3 className="text-xl font-serif text-text-heading mb-4">4. We Show Up & Serve</h3>
                <p className="text-text-secondary leading-relaxed">
                  When it's time, we hold the container together. Presence over perfection. Service over ego.
                  Transformation over transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I'm NOT Looking For */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-text-heading text-center mb-12">
              What I'm NOT Looking For
            </h2>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                ✗ Transactional partnerships where it's just about the money
              </p>
              <p className="text-lg">
                ✗ Spaces that don't honor the medicine or prioritize participant safety
              </p>
              <p className="text-lg">
                ✗ "Spiritual tourism" vibes that commodify sacred practices
              </p>
              <p className="text-lg">
                ✗ Collaborations where we're not aligned on values, ethics, or vision
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-text-secondary italic">
                I'd rather say no than compromise the integrity of the work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="text-4xl text-accent-gold/60">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Ready to Explore a Collaboration?
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Tell me about your vision. Share what you're creating. Let's see if our medicine
              is meant to weave together.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-12 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg"
              >
                Start the conversation
              </Link>
            </div>
            <p className="text-sm text-text-secondary italic">
              Please include "Collaboration" in your message subject
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
