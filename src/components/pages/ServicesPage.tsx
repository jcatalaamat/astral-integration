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
        height="large"
      />

      {/* Sacred Circles - Visual Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="aspect-[4/5] relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 to-accent-coral/20 rounded-2xl"></div>
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
                    <p className="text-sm text-accent-gold">€150-200/month • sliding scale available</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Women's Leadership Circle</h3>
                    <p className="text-text-secondary mb-2">
                      Sacred feminine leadership through storytelling and ancestral healing.
                    </p>
                    <p className="text-sm text-accent-gold">€150/month • sliding scale available</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Creative Mastermind</h3>
                    <p className="text-text-secondary mb-2">
                      For visionaries building conscious businesses. Spiritual guidance meets practical strategy.
                    </p>
                    <p className="text-sm text-accent-gold">€420/month</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Healing Circle</h3>
                    <p className="text-text-secondary mb-2">
                      Monthly community healing ceremony. Energy healing, meditation, and sacred space holding.
                    </p>
                    <p className="text-sm text-accent-gold">Donation-based (suggested €20-50)</p>
                  </div>
                  <div className="border-l-2 border-accent-gold/50 pl-6">
                    <h3 className="text-xl font-serif text-text-heading mb-2">Parenthood Circle</h3>
                    <p className="text-text-secondary mb-2">
                      Support space for conscious fathers navigating parenting, work-life balance, and personal growth.
                    </p>
                    <p className="text-sm text-accent-gold">€100/month</p>
                  </div>
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
          <p className="text-3xl md:text-5xl font-serif text-text-heading text-center leading-tight max-w-4xl mx-auto italic">
            "The medicine doesn't heal you.<br/>
            You heal yourself.<br/>
            The medicine just shows you the way."
          </p>
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

              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/20 to-accent-sage/20 rounded-2xl"></div>
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
          </div>
        </div>
      </div>

      {/* One-to-One Work */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-coral/10"></div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-3 aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-sage/20 to-accent-terracotta/20 rounded-2xl"></div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                  Deep Work
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Sometimes the work requires going deeper. Longer. More intentionally.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  3-month and 6-month journeys for those ready to transform not just their patterns,
                  but their entire relationship with themselves.
                </p>
                <div className="space-y-4 pt-4 text-text-secondary text-sm">
                  <p>• Weekly 1:1 sessions</p>
                  <p>• Energy healing & somatic work</p>
                  <p>• Family constellations</p>
                  <p>• Ongoing support between sessions</p>
                </div>
                <p className="text-accent-gold pt-4">3 months: €888-1,111 | 6 months: €1,200-2,400</p>
                <p className="text-text-secondary/80 text-sm pt-2">Sliding scale • Payment plans available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Single Sessions */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Single Sessions
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Not ready for a full container? Start here.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-serif text-text-heading">Energy Healing</h3>
                <p className="text-text-secondary">
                  90-minute session of deep somatic and energetic work.
                </p>
                <p className="text-accent-gold">€88-111 • sliding scale</p>
              </div>

              <div className="bg-warm-white/80 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-serif text-text-heading">Family Constellations</h3>
                <p className="text-text-secondary">
                  2-hour session to reveal and resolve ancestral patterns.
                </p>
                <p className="text-accent-gold">€120-150 • sliding scale</p>
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
