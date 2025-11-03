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

      {/* What Partners Say - Testimonials */}
      <div className="bg-warm-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              What Partners Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-warm-cream/60 border-2 border-accent-gold/20 rounded-2xl p-8 space-y-6 hover:border-accent-gold/40 transition-all">
                <div className="text-accent-gold text-3xl">✦</div>
                <blockquote className="text-lg text-text-secondary leading-relaxed italic">
                  "Working with Astral brought such depth and safety to our retreat offerings. His decade
                  of experience with Bufo medicine is evident in every detail—from preparation to integration.
                  Our guests felt truly held through their transformations."
                </blockquote>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Maria Santos</p>
                  <p className="text-sm text-text-secondary">Casa Celestial Retreat Center</p>
                  <p className="text-sm text-text-secondary">Costa Rica</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-warm-cream/60 border-2 border-accent-gold/20 rounded-2xl p-8 space-y-6 hover:border-accent-gold/40 transition-all">
                <div className="text-accent-gold text-3xl">✦</div>
                <blockquote className="text-lg text-text-secondary leading-relaxed italic">
                  "Our men's circle collaboration was powerful beyond words. Astral holds space with such
                  presence and authenticity. He helped us create a container where men could finally drop
                  their armor and do real healing work. Can't wait for our next retreat together."
                </blockquote>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Carlos Mendez</p>
                  <p className="text-sm text-text-secondary">Sacred Embodiment Facilitator</p>
                  <p className="text-sm text-text-secondary">Barcelona, Spain</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-warm-cream/60 border-2 border-accent-gold/20 rounded-2xl p-8 space-y-6 hover:border-accent-gold/40 transition-all">
                <div className="text-accent-gold text-3xl">✦</div>
                <blockquote className="text-lg text-text-secondary leading-relaxed italic">
                  "Astral's integration workshops transformed how our community relates to plant medicine.
                  He brings both spiritual depth and practical tools. His collaborative spirit made the
                  whole process feel aligned and easeful. True partnership."
                </blockquote>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-medium text-text-heading">Sofia Ramirez</p>
                  <p className="text-sm text-text-secondary">Community Leader</p>
                  <p className="text-sm text-text-secondary">Tulum, Mexico</p>
                </div>
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
              {/* Collaboration 1 */}
              <div className="bg-warm-white/60 border-l-4 border-accent-gold/40 rounded-r-xl pl-8 pr-6 py-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-accent-terracotta text-2xl">⊹</div>
                  <h3 className="text-xl font-serif text-text-heading">
                    Transformational Retreats - Mazunte, Mexico
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Multi-day transformational retreats combining Bufo ceremonies, integration circles,
                  energy healing, and ocean-based practices.
                </p>
                <div className="flex flex-wrap gap-4 pt-3 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>40+ participants served</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>7-day immersions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>2023-2024</span>
                  </div>
                </div>
              </div>

              {/* Collaboration 2 */}
              <div className="bg-warm-white/60 border-l-4 border-accent-gold/40 rounded-r-xl pl-8 pr-6 py-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-accent-terracotta text-2xl">⊹</div>
                  <h3 className="text-xl font-serif text-text-heading">
                    Sacred Masculinity Workshops - Barcelona, Spain
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Co-facilitated men's circles and weekend intensives focused on embodiment, emotional
                  release, and authentic power. Deep dive into masculine healing and shadow work.
                </p>
                <div className="flex flex-wrap gap-4 pt-3 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>25 men per workshop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>Weekend intensives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>Ongoing series 2024</span>
                  </div>
                </div>
              </div>

              {/* Collaboration 3 */}
              <div className="bg-warm-white/60 border-l-4 border-accent-gold/40 rounded-r-xl pl-8 pr-6 py-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-accent-terracotta text-2xl">⊹</div>
                  <h3 className="text-xl font-serif text-text-heading">
                    Integration Programs for Ayahuasca Communities - Tulum, Mexico
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Post-ceremony integration workshops and ongoing support for communities working
                  with plant medicines. Created structured frameworks for sustainable integration practices.
                </p>
                <div className="flex flex-wrap gap-4 pt-3 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>60+ community members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>Monthly workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>2023-Present</span>
                  </div>
                </div>
              </div>

              {/* Collaboration 4 */}
              <div className="bg-warm-white/60 border-l-4 border-accent-gold/40 rounded-r-xl pl-8 pr-6 py-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-accent-terracotta text-2xl">⊹</div>
                  <h3 className="text-xl font-serif text-text-heading">
                    Spiritual Business Training for Healers
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Teaching conscious entrepreneurs how to build sustainable practices while staying
                  aligned with soul purpose. Business strategy meets spiritual integrity.
                </p>
                <div className="flex flex-wrap gap-4 pt-3 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>50+ healers trained</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>6-week programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>International cohorts</span>
                  </div>
                </div>
              </div>

              {/* Collaboration 5 */}
              <div className="bg-warm-white/60 border-l-4 border-accent-gold/40 rounded-r-xl pl-8 pr-6 py-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-accent-terracotta text-2xl">⊹</div>
                  <h3 className="text-xl font-serif text-text-heading">
                    Guest Facilitation Residencies - Costa Rica
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  Multi-week residencies at retreat centers offering Bufo ceremonies, private healing
                  sessions, and transformational workshops for international guests.
                </p>
                <div className="flex flex-wrap gap-4 pt-3 text-sm text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>35+ ceremony participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>2-4 week residencies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent-gold">✦</span>
                    <span>2024</span>
                  </div>
                </div>
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

      {/* Partnership FAQ */}
      <div className="bg-warm-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              Partnership Questions
            </h2>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-warm-cream/50 border-l-4 border-accent-gold/30 rounded-r-xl pl-8 pr-6 py-6 space-y-3">
                <h3 className="text-xl font-serif text-text-heading flex items-center gap-3">
                  <span className="text-accent-gold text-2xl">✧</span>
                  How are fees structured?
                </h3>
                <p className="text-text-secondary leading-relaxed pl-8">
                  Fees depend on the collaboration type and scope. For retreats, I typically work on a revenue-share
                  model (40-60% depending on responsibilities). For workshops and guest facilitation, we can discuss
                  flat fees or per-participant rates. I'm flexible and value-driven—let's find what feels aligned for both of us.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-warm-cream/50 border-l-4 border-accent-gold/30 rounded-r-xl pl-8 pr-6 py-6 space-y-3">
                <h3 className="text-xl font-serif text-text-heading flex items-center gap-3">
                  <span className="text-accent-gold text-2xl">✧</span>
                  What's the typical timeline from inquiry to launch?
                </h3>
                <p className="text-text-secondary leading-relaxed pl-8">
                  For retreat collaborations, I recommend 3-6 months lead time for proper planning, marketing, and
                  container design. Workshops can be organized with 4-8 weeks notice. Guest residencies need 2-3 months
                  advance planning. Rush timelines are possible for the right collaboration, but sacred work thrives with spaciousness.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-warm-cream/50 border-l-4 border-accent-gold/30 rounded-r-xl pl-8 pr-6 py-6 space-y-3">
                <h3 className="text-xl font-serif text-text-heading flex items-center gap-3">
                  <span className="text-accent-gold text-2xl">✧</span>
                  What support do you provide for marketing?
                </h3>
                <p className="text-text-secondary leading-relaxed pl-8">
                  I actively promote collaborations through my email list, social media, and community network. I'll provide
                  content, photography, and messaging support. For retreat partnerships, I typically handle 40-50% of marketing
                  efforts. I bring my audience; you bring yours. Together we create momentum.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-warm-cream/50 border-l-4 border-accent-gold/30 rounded-r-xl pl-8 pr-6 py-6 space-y-3">
                <h3 className="text-xl font-serif text-text-heading flex items-center gap-3">
                  <span className="text-accent-gold text-2xl">✧</span>
                  Can we have a video call before committing?
                </h3>
                <p className="text-text-secondary leading-relaxed pl-8">
                  Absolutely. I never collaborate without a real conversation first. We'll start with a discovery call to feel into
                  alignment, discuss vision, and see if our energies match. No commitment required—just authentic exploration.
                  If it's a yes, we move forward. If not, no hard feelings.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-warm-cream/50 border-l-4 border-accent-gold/30 rounded-r-xl pl-8 pr-6 py-6 space-y-3">
                <h3 className="text-xl font-serif text-text-heading flex items-center gap-3">
                  <span className="text-accent-gold text-2xl">✧</span>
                  What's your cancellation policy?
                </h3>
                <p className="text-text-secondary leading-relaxed pl-8">
                  Life happens. For retreats, cancellations 60+ days out incur no penalty. 30-60 days: we split any unrecoverable
                  costs. Under 30 days: I retain 50% of agreed fees to honor time invested and opportunities declined. For workshops,
                  14-day notice is appreciated. I approach cancellations with compassion and fairness.
                </p>
              </div>

              {/* FAQ 6 */}
              <div className="bg-warm-cream/50 border-l-4 border-accent-gold/30 rounded-r-xl pl-8 pr-6 py-6 space-y-3">
                <h3 className="text-xl font-serif text-text-heading flex items-center gap-3">
                  <span className="text-accent-gold text-2xl">✧</span>
                  Do you have insurance and liability coverage?
                </h3>
                <p className="text-text-secondary leading-relaxed pl-8">
                  Yes. I carry professional liability insurance for facilitation work. I also require all participants to sign
                  comprehensive waivers and health screenings before ceremony work. Safety, legal compliance, and ethical practice
                  are non-negotiables. I can provide documentation upon request.
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-4xl text-accent-gold/60">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Ready to Explore a Collaboration?
            </h2>

            {/* Urgency Banner */}
            <div className="inline-block bg-accent-terracotta/10 border border-accent-terracotta/30 rounded-full px-6 py-2">
              <p className="text-accent-terracotta font-medium">
                Now Booking 2025 Collaborations
              </p>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Tell me about your vision. Share what you're creating. Let's see if our medicine
              is meant to weave together.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-12 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Start the Conversation
              </Link>
            </div>

            {/* Contact Options */}
            <div className="pt-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {/* Email */}
                <div className="bg-warm-white/60 rounded-xl p-6 space-y-2 border border-accent-gold/10">
                  <div className="text-accent-gold text-2xl">✦</div>
                  <h3 className="font-serif text-text-heading">Email</h3>
                  <a
                    href="mailto:collaborate@astralspirit.com"
                    className="text-accent-terracotta hover:text-accent-gold transition-colors text-sm break-all"
                  >
                    collaborate@astralspirit.com
                  </a>
                  <p className="text-xs text-text-secondary">
                    Response within 48 hours
                  </p>
                </div>

                {/* Contact Form */}
                <div className="bg-warm-white/60 rounded-xl p-6 space-y-2 border border-accent-gold/10">
                  <div className="text-accent-gold text-2xl">✦</div>
                  <h3 className="font-serif text-text-heading">Contact Form</h3>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="text-accent-terracotta hover:text-accent-gold transition-colors text-sm inline-block"
                  >
                    Send a message
                  </Link>
                  <p className="text-xs text-text-secondary">
                    Include "Collaboration" in subject
                  </p>
                </div>

                {/* Calendar Booking */}
                <div className="bg-warm-white/60 rounded-xl p-6 space-y-2 border border-accent-gold/10">
                  <div className="text-accent-gold text-2xl">✦</div>
                  <h3 className="font-serif text-text-heading">Discovery Call</h3>
                  <a
                    href="https://calendly.com/astralspirit/collaboration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-terracotta hover:text-accent-gold transition-colors text-sm inline-block"
                  >
                    Book a call
                  </a>
                  <p className="text-xs text-text-secondary">
                    30-minute alignment call
                  </p>
                </div>
              </div>

              {/* Response Time Expectation */}
              <div className="pt-6 max-w-2xl mx-auto">
                <p className="text-sm text-text-secondary italic">
                  I personally respond to every collaboration inquiry. Expect a reply within 24-48 hours.
                  If you don't hear back, check your spam folder or reach out again—the universe might be testing our connection.
                </p>
              </div>
            </div>

            {/* What to Include */}
            <div className="pt-12 max-w-2xl mx-auto">
              <div className="bg-warm-white/40 border border-accent-gold/20 rounded-2xl p-8 text-left space-y-4">
                <h3 className="text-lg font-serif text-text-heading text-center mb-4">
                  In Your Message, Please Share:
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✧</span>
                    <span>What type of collaboration you're envisioning (retreat, workshop, residency, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✧</span>
                    <span>Your location or where you'd like to collaborate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✧</span>
                    <span>Proposed timeline or dates (even if flexible)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✧</span>
                    <span>Your vision for the collaboration and who you're serving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✧</span>
                    <span>Why you feel called to work together (this matters most)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
