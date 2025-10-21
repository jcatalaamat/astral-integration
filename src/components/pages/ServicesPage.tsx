import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function ServicesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Full-Screen Opening */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/80 via-indigo-deep/70 to-black/90">
          {/* Cosmic aurora background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
            <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-sacred-moon mb-8 font-light">
            Ways We Walk Together
          </h1>
          <p className="text-xl md:text-2xl text-sacred-moon/80 font-light max-w-2xl mx-auto">
            Each path is unique. Each journey unfolds in its own time.
          </p>
        </div>
      </div>

      {/* Sacred Circles - Visual Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="aspect-[4/5] relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/30 to-mystic-purple/20 rounded-2xl"></div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
                  Sacred Circles
                </h2>
                <p className="text-xl text-indigo-deep/80 leading-relaxed">
                  You don't have to walk alone.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  These are containers held for those ready to be witnessed, to witness others,
                  and to remember they are not alone in their becoming.
                </p>
                <div className="space-y-6 pt-4">
                  <div className="border-l-2 border-sacred-green/50 pl-6">
                    <h3 className="text-xl font-serif text-indigo-deep mb-2">Men's Circle</h3>
                    <p className="text-indigo-deep/70 mb-2">
                      A space for men to release, heal, and step into their fullness.
                      The Self. The King. The Magician. The Lover.
                    </p>
                    <p className="text-sm text-sacred-gold">€150-200/month • sliding scale available</p>
                  </div>
                  <div className="border-l-2 border-sacred-green/50 pl-6">
                    <h3 className="text-xl font-serif text-indigo-deep mb-2">Women's Leadership Circle</h3>
                    <p className="text-indigo-deep/70 mb-2">
                      Sacred feminine leadership through storytelling and ancestral healing.
                    </p>
                    <p className="text-sm text-sacred-gold">€150/month • sliding scale available</p>
                  </div>
                  <div className="border-l-2 border-sacred-green/50 pl-6">
                    <h3 className="text-xl font-serif text-indigo-deep mb-2">Creative Mastermind</h3>
                    <p className="text-indigo-deep/70 mb-2">
                      For visionaries building conscious businesses. Spiritual guidance meets practical strategy.
                    </p>
                    <p className="text-sm text-sacred-gold">€420/month</p>
                  </div>
                  <div className="border-l-2 border-sacred-green/50 pl-6">
                    <h3 className="text-xl font-serif text-indigo-deep mb-2">Healing Circle</h3>
                    <p className="text-indigo-deep/70 mb-2">
                      Monthly community healing ceremony. Energy healing, meditation, and sacred space holding.
                    </p>
                    <p className="text-sm text-sacred-gold">Donation-based (suggested €20-50)</p>
                  </div>
                  <div className="border-l-2 border-sacred-green/50 pl-6">
                    <h3 className="text-xl font-serif text-indigo-deep mb-2">Parenthood Circle</h3>
                    <p className="text-indigo-deep/70 mb-2">
                      Support space for conscious fathers navigating parenting, work-life balance, and personal growth.
                    </p>
                    <p className="text-sm text-sacred-gold">€100/month</p>
                  </div>
                </div>
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
            "The medicine doesn't heal you.<br/>
            You heal yourself.<br/>
            The medicine just shows you the way."
          </p>
        </div>
      </div>

      {/* Medicine Work - Visual Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
                  Medicine Journeys
                </h2>
                <p className="text-xl text-indigo-deep/80 leading-relaxed italic">
                  This work is not for everyone. And that's okay.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  Bufo Alvarius ceremonies are held with deep reverence, preparation, and care.
                  This is ego dissolution. Divine remembrance. A return to what you've always been.
                </p>
                <p className="text-base text-indigo-deep/60 leading-relaxed">
                  All medicine work includes screening, preparation sessions, and integration support.
                  This is sacred healing work—not recreation.
                </p>
              </div>

              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 to-sacred-green/30 rounded-2xl"></div>
              </div>
            </div>

            {/* Medicine Options - Minimalist */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="text-center space-y-3">
                <div className="text-sacred-gold text-2xl mb-2">✦</div>
                <h3 className="text-lg font-serif text-indigo-deep">Preparation & Ceremony</h3>
                <p className="text-sm text-indigo-deep/70 mb-2">
                  Includes preparation sessions, ceremony, and post-care
                </p>
                <p className="text-xs text-sacred-gold">By application • discussed after preparation</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-sacred-gold text-2xl mb-2">✦</div>
                <h3 className="text-lg font-serif text-indigo-deep">Integration Support</h3>
                <p className="text-sm text-indigo-deep/70 mb-2">
                  Making sense of what you've seen
                </p>
                <p className="text-xs text-sacred-gold">€88-111/session • sliding scale</p>
              </div>
              <div className="text-center space-y-3">
                <div className="text-sacred-gold text-2xl mb-2">✦</div>
                <h3 className="text-lg font-serif text-indigo-deep">Integration Package</h3>
                <p className="text-sm text-indigo-deep/70 mb-2">
                  4 sessions for sustained support
                </p>
                <p className="text-xs text-sacred-gold">€300-400 • sliding scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One-to-One Work */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/80 via-indigo-deep/60 to-black/80"></div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-3 aspect-[16/10] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sacred-green/20 to-mystic-purple/30 rounded-2xl"></div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon">
                  Deep Work
                </h2>
                <p className="text-lg text-sacred-moon/80 leading-relaxed">
                  Sometimes the work requires going deeper. Longer. More intentionally.
                </p>
                <p className="text-sacred-moon/70 leading-relaxed">
                  3-month and 6-month journeys for those ready to transform not just their patterns,
                  but their entire relationship with themselves.
                </p>
                <div className="space-y-4 pt-4 text-sacred-moon/60 text-sm">
                  <p>• Weekly 1:1 sessions</p>
                  <p>• Energy healing & somatic work</p>
                  <p>• Family constellations</p>
                  <p>• Ongoing support between sessions</p>
                </div>
                <p className="text-sacred-gold pt-4">3 months: €888-1,111 | 6 months: €1,200-2,400</p>
                <p className="text-sacred-moon/60 text-sm pt-2">Sliding scale • Payment plans available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Healing Sessions - Light Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep mb-6">
                Single Sessions
              </h2>
              <p className="text-lg text-indigo-deep/70 max-w-2xl mx-auto">
                Not everyone needs a 6-month journey. Sometimes one session is exactly what's needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-indigo-deep">Energy Healing</h3>
                <p className="text-indigo-deep/70">
                  Mystery School energy work, clearing, activation, and soul retrieval.
                </p>
                <p className="text-sm text-sacred-gold">€88-150 • sliding scale</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-indigo-deep">Psychic Readings</h3>
                <p className="text-indigo-deep/70">
                  Intuitive guidance, energy scans, and channeled messages.
                </p>
                <p className="text-sm text-sacred-gold">€88-120 • sliding scale</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-indigo-deep">Family Constellations</h3>
                <p className="text-indigo-deep/70">
                  Heal ancestral patterns and family dynamics that run deeper than this lifetime.
                </p>
                <p className="text-sm text-sacred-gold">€88-150 • sliding scale</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-indigo-deep">Somatic Bodywork</h3>
                <p className="text-indigo-deep/70">
                  Release trauma stored in the body through presence and touch.
                </p>
                <p className="text-sm text-sacred-gold">€88-150 • sliding scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trainings Section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-mystic-purple/40 to-cosmic-900/70"></div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon mb-6">
                For Those Called to Serve
              </h2>
              <p className="text-xl text-sacred-moon/80 leading-relaxed">
                If you feel called to hold space for others, to facilitate transformation,
                to become a guardian of sacred medicine—there is training.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="text-sacred-gold text-3xl">✧</div>
                <h3 className="text-lg font-serif text-sacred-moon">Bufo Facilitator Training</h3>
                <p className="text-sm text-sacred-moon/70 mb-2">
                  Learn to hold sacred Bufo ceremonies with reverence and skill
                </p>
                <p className="text-xs text-sacred-gold">€3,000-5,000</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-sacred-gold text-3xl">✧</div>
                <h3 className="text-lg font-serif text-sacred-moon">Integration Practitioner</h3>
                <p className="text-sm text-sacred-moon/70 mb-2">
                  Support clients through medicine integration
                </p>
                <p className="text-xs text-sacred-gold">€2,000-2,500</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-sacred-gold text-3xl">✧</div>
                <h3 className="text-lg font-serif text-sacred-moon">Energy Healing Training</h3>
                <p className="text-sm text-sacred-moon/70 mb-2">
                  Awaken and develop your natural healing abilities
                </p>
                <p className="text-xs text-sacred-gold">€3,000-6,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
              Where do you want to go?
            </h2>
            <p className="text-xl text-indigo-deep/70">
              Let's have a conversation. I'll help you find the path that feels right.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 bg-indigo-deep text-sacred-cream rounded-full hover:bg-indigo-deep/90 transition-colors font-medium"
              >
                Start a conversation
              </Link>
              <Link
                to="/inner-ascend"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-indigo-deep text-indigo-deep rounded-full hover:bg-indigo-deep hover:text-sacred-cream transition-colors font-medium"
              >
                Explore community
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
