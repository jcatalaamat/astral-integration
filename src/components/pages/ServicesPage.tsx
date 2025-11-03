import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import WarmHero from '../shared/WarmHero';

export default function ServicesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <WarmHero
        title="Ways We Walk Together"
        subtitle="Each path is unique. Each journey unfolds in its own time."
        height="extra-large"
        image="/images/services/hero.jpg"
      />

      {/* Sacred Circles - Visual Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="aspect-[4/5] relative order-2 lg:order-1 overflow-hidden rounded-2xl">
                <img
                  src="/images/services/sacred-circles.jpg"
                  alt="Sacred Circles"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                  Sacred Circles
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed">
                  You don't have to walk alone.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  These are containers held for those ready to be witnessed, to witness others,
                  and to remember they are not alone in their becoming.
                </p>
                <div className="space-y-6 pt-4">
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Men's Circle</h3>
                    <p className="text-text-secondary mb-2">
                      A space for men to release, heal, and step into their fullness.
                      The Self. The King. The Magician. The Lover.
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-2">
                      Weekly/bi-weekly calls • 8-12 men • Deep transformation work
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-3 italic">
                      Who this is for: Men ready to release anger healthily, heal ancestral wounds, and embody their divine essence
                    </p>
                    <p className="text-sm text-accent-gold">€150-200/month • sliding scale available</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Women's Leadership Circle</h3>
                    <p className="text-text-secondary mb-2">
                      Sacred feminine leadership through storytelling and ancestral healing.
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-2">
                      Bi-weekly group calls • Limited to 8-12 women
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-3 italic">
                      Who this is for: Women ready to awaken their channeling portal, clear ancestral patterns, and step into leadership
                    </p>
                    <p className="text-sm text-accent-gold">€150/month • sliding scale available</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Creative Mastermind</h3>
                    <p className="text-text-secondary mb-2">
                      For visionaries building conscious businesses. Spiritual guidance meets practical strategy.
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-2">
                      Weekly calls + daily WhatsApp community support
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-3 italic">
                      Who this is for: Healers, entrepreneurs, and conscious creators ready to unlock their gifts and build aligned programs
                    </p>
                    <p className="text-sm text-accent-gold">€420/month</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Healing Circle</h3>
                    <p className="text-text-secondary mb-2">
                      Monthly community healing ceremony. Energy healing, meditation, and sacred space holding.
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-3 italic">
                      Who this is for: Anyone seeking community healing and connection
                    </p>
                    <p className="text-sm text-accent-gold">Donation-based (suggested €20-50)</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Parenthood Circle</h3>
                    <p className="text-text-secondary mb-2">
                      Support space for conscious fathers navigating parenting, work-life balance, and personal growth.
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-2">
                      Bi-weekly online sessions
                    </p>
                    <p className="text-sm text-text-secondary/80 mb-3 italic">
                      Who this is for: Fathers ready to deepen emotional awareness while balancing family and personal growth
                    </p>
                    <p className="text-sm text-accent-gold">€100/month</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="inline-block px-8 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                  >
                    Join the Next Circle →
                  </Link>
                  <p className="text-sm text-accent-gold/80 mt-3">Limited spots available</p>
                </div>
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
            "The medicine doesn't heal you.<br/>
            You heal yourself.<br/>
            The medicine just shows you the way."
          </blockquote>
        </div>
      </div>

      {/* Medicine Work - Visual Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                  Medicine Journeys
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed italic">
                  This work is not for everyone. And that's okay.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Bufo Alvarius ceremonies are held with deep reverence, preparation, and care.
                  This is ego dissolution. Divine remembrance. A return to what you've always been.
                </p>
                <p className="text-base text-text-secondary/80 leading-relaxed">
                  All medicine work includes screening, preparation sessions, and integration support.
                  This is sacred healing work—not recreation.
                </p>
              </div>

              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img
                  src="/images/services/medicine-journeys.jpg"
                  alt="Medicine Journeys"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Medicine Options - Minimalist */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="text-center space-y-3">
                <div className="text-accent-gold text-2xl mb-2">✦</div>
                <h3 className="text-lg font-serif text-text-heading">Preparation & Ceremony</h3>
                <p className="text-sm text-text-secondary mb-2">
                  Includes preparation sessions, ceremony, and post-care
                </p>
                <p className="text-xs text-accent-gold">By application • discussed after preparation</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-accent-gold text-2xl mb-2">✦</div>
                <h3 className="text-lg font-serif text-text-heading">Integration Support</h3>
                <p className="text-sm text-text-secondary mb-2">
                  Making sense of what you've seen
                </p>
                <p className="text-xs text-accent-gold">€88-111/session • sliding scale</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-accent-gold text-2xl mb-2">✦</div>
                <h3 className="text-lg font-serif text-text-heading">Integration Package</h3>
                <p className="text-sm text-text-secondary mb-2">
                  4 sessions for sustained support
                </p>
                <p className="text-xs text-accent-gold">€300-400 • sliding scale</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-8 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Apply for Screening →
              </Link>
              <p className="text-sm text-accent-gold/80 mt-3">Health screening required • Limited availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Programs */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                Premium Transformation Programs
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                For those ready to transform not just their patterns, but their entire relationship with themselves.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 6-Month Journey */}
              <div className="bg-warm-cream rounded-2xl p-10 space-y-6">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-3xl font-serif text-text-heading">6-Month Transformation Journey</h3>
                <p className="text-lg text-text-secondary italic">
                  Becoming the Self You Haven't Dared to Be
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Deep transformational work for those ready to completely shift their reality.
                  This is not a quick fix—this is profound, lasting change.
                </p>
                <div className="space-y-3 text-text-secondary">
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Weekly 1:1 sessions
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Energy healing & clearings
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Family constellations work
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Medicine integration (if applicable)
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Somatic bodywork
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Channeled transmissions
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Voxer/WhatsApp support between sessions
                  </p>
                </div>
                <div className="pt-4 border-t border-accent-gold/30">
                  <p className="text-accent-gold text-lg font-medium">€3,600-5,100</p>
                  <p className="text-sm text-text-secondary/80">Payment plans available • Sliding scale</p>
                </div>
                <p className="text-sm text-text-secondary/80 italic">
                  Best for: Those ready for deep transformation across all areas of life
                </p>
              </div>

              {/* 3-Month Intensive */}
              <div className="bg-warm-cream rounded-2xl p-10 space-y-6">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-3xl font-serif text-text-heading">3-Month Intensive Program</h3>
                <p className="text-lg text-text-secondary italic">
                  Accelerated Healing & Integration
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Focused, intensive work on a specific area of your life.
                  Perfect for those with clear intention and readiness to go deep, fast.
                </p>
                <div className="space-y-3 text-text-secondary">
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Weekly 1:1 sessions
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Targeted work on specific trauma or pattern
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Relationship healing & alignment
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Business & purpose alignment
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Medicine integration support
                  </p>
                  <p className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    Spiritual awakening guidance
                  </p>
                </div>
                <div className="pt-4 border-t border-accent-gold/30">
                  <p className="text-accent-gold text-lg font-medium">€1,800-2,500</p>
                  <p className="text-sm text-text-secondary/80">Payment plans available • Sliding scale</p>
                </div>
                <p className="text-sm text-text-secondary/80 italic">
                  Best for: Those with clear intention ready for accelerated transformation
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg"
              >
                Book Discovery Call →
              </Link>
              <p className="text-sm text-accent-gold/80 mt-3">Limited spots available • 3 openings for Q2 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Single Sessions */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                Single Sessions & Specialized Services
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Not ready for a full container? Start here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mystery School Session */}
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4 border border-accent-gold/20">
                <div className="text-accent-gold text-xl">⊹</div>
                <h3 className="text-xl font-serif text-text-heading">Mystery School Session</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Deep energy healing that shifts belief systems at the root. Experience clearing,
                  emotional release, and transformation in 60 minutes.
                </p>
                <p className="text-accent-gold font-medium">€120-150</p>
                <p className="text-xs text-text-secondary/70">Package of 4: €500 (save €100)</p>
              </div>

              {/* Psychic & Intuitive Services */}
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4 border border-accent-gold/20">
                <div className="text-accent-gold text-xl">⊹</div>
                <h3 className="text-xl font-serif text-text-heading">Psychic & Intuitive Services</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Medical intuitive body scans, psychic readings, ancestral healing,
                  soul blueprint channeling, and spiritual guidance.
                </p>
                <p className="text-accent-gold font-medium">€120</p>
                <p className="text-xs text-text-secondary/70">60-minute session</p>
              </div>

              {/* Family Constellations */}
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4 border border-accent-gold/20">
                <div className="text-accent-gold text-xl">⊹</div>
                <h3 className="text-xl font-serif text-text-heading">Family Constellations</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Reveal and resolve ancestral patterns affecting relationships,
                  money, health, and repeating cycles.
                </p>
                <p className="text-accent-gold font-medium">€150</p>
                <p className="text-xs text-text-secondary/70">2-hour session • sliding scale</p>
              </div>

              {/* Relationship Coaching */}
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4 border border-accent-gold/20">
                <div className="text-accent-gold text-xl">⊹</div>
                <h3 className="text-xl font-serif text-text-heading">Relationship Coaching</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Work on your relationship with yourself first, then partnerships,
                  heartbreak healing, sacred union, and family dynamics.
                </p>
                <p className="text-accent-gold font-medium">€120</p>
                <p className="text-xs text-text-secondary/70">Per session</p>
              </div>

              {/* Somatic Energy Healing */}
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4 border border-accent-gold/20">
                <div className="text-accent-gold text-xl">⊹</div>
                <h3 className="text-xl font-serif text-text-heading">Somatic Energy Healing</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Trauma-informed bodywork combining bio-energy, emotional release,
                  breathwork, and embodiment practices.
                </p>
                <p className="text-accent-gold font-medium">€120-150</p>
                <p className="text-xs text-text-secondary/70">90-minute session • sliding scale</p>
              </div>

              {/* Spiritual Business Coaching */}
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4 border border-accent-gold/20">
                <div className="text-accent-gold text-xl">⊹</div>
                <h3 className="text-xl font-serif text-text-heading">Spiritual Business Coaching</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  For conscious entrepreneurs merging spiritual insight with practical strategy.
                  Scale with soul intact.
                </p>
                <p className="text-accent-gold font-medium">€150</p>
                <p className="text-xs text-text-secondary/70">Or €420/month for 4 sessions</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-block px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Book a Session →
              </Link>
              <p className="text-sm text-accent-gold/80 mt-3">Flexible scheduling • Sliding scale available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                Voices from the Journey
              </h2>
              <p className="text-xl text-text-secondary">
                What others have experienced
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-warm-cream border-2 border-accent-gold/20 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-2xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "The 6-month journey didn't just change my life—it showed me who I've always been beneath the trauma.
                  I finally feel at home in my own skin."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-serif text-text-heading">Marcus</p>
                  <p className="text-sm text-text-secondary/70">6-Month Transformation Journey</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-warm-cream border-2 border-accent-gold/20 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-2xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "After years of trying different healing modalities, the Mystery School sessions gave me
                  breakthroughs I didn't think were possible. The depth of this work is unmatched."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-serif text-text-heading">Sophia</p>
                  <p className="text-sm text-text-secondary/70">Mystery School Sessions</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-warm-cream border-2 border-accent-gold/20 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-2xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "The Men's Circle gave me permission to feel everything I'd been suppressing for decades.
                  I'm finally showing up as a whole human, not just the parts others wanted to see."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-serif text-text-heading">David</p>
                  <p className="text-sm text-text-secondary/70">Men's Circle</p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-warm-cream border-2 border-accent-gold/20 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-2xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "The Bufo ceremony was the most profound spiritual experience of my life.
                  The preparation and integration support made it safe to completely surrender."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-serif text-text-heading">Elena</p>
                  <p className="text-sm text-text-secondary/70">Medicine Journey</p>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-warm-cream border-2 border-accent-gold/20 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-2xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "Family constellations revealed patterns I'd been unconsciously living out for my entire life.
                  One session shifted what therapy couldn't touch in years."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-serif text-text-heading">James</p>
                  <p className="text-sm text-text-secondary/70">Family Constellations</p>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-warm-cream border-2 border-accent-gold/20 rounded-2xl p-8 space-y-4">
                <div className="text-accent-gold text-2xl">✦</div>
                <p className="text-text-secondary leading-relaxed italic">
                  "The Women's Circle isn't just support—it's alchemy. I've stepped into a version of myself
                  I didn't know existed. This is sacred sisterhood at its finest."
                </p>
                <div className="pt-4 border-t border-accent-gold/20">
                  <p className="font-serif text-text-heading">Maya</p>
                  <p className="text-sm text-text-secondary/70">Women's Leadership Circle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Philosophy */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-text-heading">
              On Investment
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              I believe this work should be accessible. All offerings include sliding scale options.
              If you're genuinely called to this work but cost is a barrier, reach out.
            </p>
            <p className="text-text-secondary/80 italic">
              Money is energy. I trust you to know what's right for you.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-serif text-text-heading">
              Ready to begin?
            </h2>
            <p className="text-xl text-text-secondary">
              Let's have a conversation about what path feels right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Schedule a discovery call
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium"
              >
                Learn more about my approach
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
