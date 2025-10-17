import { Link } from 'react-router-dom';
import { Users, Sparkles, ArrowRight, Globe, Heart, Zap } from 'lucide-react';

export default function InnerAscendPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon">
      {/* Cosmic aurora background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>

      {/* Sacred geometry overlay */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-8 text-sacred-gold animate-breathe opacity-60">⊹</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
              Inner Ascend
            </h1>
            <p className="text-2xl md:text-3xl text-mystic-lavender/80 mb-8 font-serif italic">
              A Conscious Community for Visionaries, Healers & Awakened Souls
            </p>
            <p className="text-lg text-mystic-lavender/70 mb-12 max-w-2xl mx-auto">
              Join a decentralized collective of creators building new earth together through
              collaboration, token exchange, and sacred co-creation.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-mystic-purple/20 to-mystic-indigo/20 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-12 mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center text-mystic-lavender">
                What Is Inner Ascend?
              </h2>
              <div className="space-y-4 text-lg text-mystic-lavender/80 leading-relaxed">
                <p>
                  Inner Ascend is more than a community—it's a movement. A collective of conscious entrepreneurs,
                  healers, artists, and visionaries co-creating the world we want to live in.
                </p>
                <p>
                  We're building a decentralized economy based on service, value exchange, and contribution.
                  We're healing ourselves and each other. We're creating projects, retreats, and offerings
                  that serve the awakening of humanity.
                </p>
                <p className="text-sacred-gold italic text-xl text-center pt-4">
                  This is your soul family. Welcome home.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-mystic-lavender">
                Community Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Weekly Group Calls
                      </h3>
                      <p className="text-mystic-lavender/70">
                        Live teachings, channeled transmissions, Q&A, and collective healing sessions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Token Economy
                      </h3>
                      <p className="text-mystic-lavender/70">
                        Exchange services without money. Trade healing, design, coaching, content, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Globe className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Global Network
                      </h3>
                      <p className="text-mystic-lavender/70">
                        Connect with conscious creators worldwide. Collaborate on projects and retreats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Sacred Container
                      </h3>
                      <p className="text-mystic-lavender/70">
                        Daily support, accountability, celebration, and witnessing from your soul family.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Co-Creation Projects
                      </h3>
                      <p className="text-mystic-lavender/70">
                        Launch offerings, events, and businesses together. Share resources and skills.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Exclusive Access
                      </h3>
                      <p className="text-mystic-lavender/70">
                        Early access to retreats, trainings, ceremonies, and special events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Tiers */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-mystic-lavender">
                Membership Options
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Free Tier */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-3">
                    Community
                  </h3>
                  <div className="text-4xl font-bold text-sacred-gold mb-4">Free</div>
                  <ul className="space-y-3 text-mystic-lavender/70 text-sm mb-6">
                    <li>Access to Discord community</li>
                    <li>Monthly open calls</li>
                    <li>Token exchange marketplace</li>
                    <li>Event announcements</li>
                  </ul>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="block px-6 py-3 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-full font-semibold hover:bg-mystic-purple/30 transition-all"
                  >
                    Join Free
                  </Link>
                </div>

                {/* Active Tier */}
                <div className="bg-gradient-to-br from-mystic-purple/30 to-mystic-indigo/30 backdrop-blur-xl border-2 border-sacred-gold/50 rounded-2xl p-8 text-center transform scale-105">
                  <div className="text-sm font-semibold text-sacred-gold mb-2">MOST POPULAR</div>
                  <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-3">
                    Active Member
                  </h3>
                  <div className="text-4xl font-bold text-sacred-gold mb-4">€150</div>
                  <div className="text-mystic-lavender/70 text-sm mb-6">/month</div>
                  <ul className="space-y-3 text-mystic-lavender/80 text-sm mb-6">
                    <li>All Community benefits</li>
                    <li>Weekly group calls</li>
                    <li>Token economy access</li>
                    <li>Co-creation opportunities</li>
                    <li>1 monthly group healing</li>
                  </ul>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo text-sacred-moon rounded-full font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                  >
                    Join Now
                  </Link>
                </div>

                {/* Core Tier */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-3">
                    Core Circle
                  </h3>
                  <div className="text-4xl font-bold text-sacred-gold mb-4">€420</div>
                  <div className="text-mystic-lavender/70 text-sm mb-6">/month</div>
                  <ul className="space-y-3 text-mystic-lavender/70 text-sm mb-6">
                    <li>All Active Member benefits</li>
                    <li>Mastermind collaboration</li>
                    <li>1:1 monthly check-in</li>
                    <li>Business guidance</li>
                    <li>Priority support</li>
                  </ul>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="block px-6 py-3 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-full font-semibold hover:bg-mystic-purple/30 transition-all"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="bg-sacred-moon/5 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-12 mb-16">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-mystic-lavender">
                Is Inner Ascend For You?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-mystic-lavender/80">
                <div>
                  <h3 className="text-xl font-semibold text-sacred-gold mb-4">This is for you if:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You're building a conscious business or offering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You want to collaborate, not compete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You believe in abundance and value exchange</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You're ready to contribute your gifts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sacred-gold mb-4">This is NOT for you if:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You're just looking for free resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You want quick fixes without commitment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You operate from scarcity or competition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>You're not ready to show up authentically</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-mystic-lavender">
                Ready to Join Your Soul Family?
              </h2>
              <p className="text-lg text-mystic-lavender/80 mb-8 max-w-2xl mx-auto">
                Start with our free community tier and see if Inner Ascend resonates with your path.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group px-8 py-4 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet text-sacred-moon rounded-2xl font-semibold hover:shadow-2xl hover:shadow-mystic-purple/50 transition-all flex items-center gap-3"
                >
                  <span>Join the Community</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://discord.gg/innerascend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-2xl font-semibold hover:bg-mystic-purple/30 transition-all"
                >
                  Visit Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
