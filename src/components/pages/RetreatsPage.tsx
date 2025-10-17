import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function RetreatsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon">
      {/* Cosmic aurora background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
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
            <div className="text-4xl mb-6 text-sacred-gold animate-breathe opacity-60">⊹</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
              Immersive Retreats
            </h1>
            <p className="text-xl md:text-2xl text-mystic-lavender/80 mb-8">
              Deep transformation in sacred locations
            </p>
          </div>
        </div>

        {/* Locations Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-mystic-lavender">
              Retreat Locations
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Mazunte */}
              <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-mystic-purple/20 to-sacred-green/20 flex items-center justify-center">
                  <div className="text-7xl opacity-40">🌊</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sacred-gold mb-4">
                    <MapPin className="w-5 h-5" />
                    <h3 className="text-2xl font-serif font-bold">Mazunte, Mexico</h3>
                  </div>
                  <p className="text-mystic-lavender/80 mb-4">
                    Nestled on the Pacific coast of Oaxaca, Mazunte is a sacred beach village perfect for
                    deep inner work. Surrounded by jungle, ocean, and ancient energy.
                  </p>
                  <ul className="space-y-2 text-mystic-lavender/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Ocean ceremonies & beach meditation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Jungle integration walks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Traditional temazcal sweat lodge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Sustainable community living</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Barcelona */}
              <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-mystic-indigo/20 to-mystic-violet/20 flex items-center justify-center">
                  <div className="text-7xl opacity-40">🏔️</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sacred-gold mb-4">
                    <MapPin className="w-5 h-5" />
                    <h3 className="text-2xl font-serif font-bold">Barcelona & Catalunya</h3>
                  </div>
                  <p className="text-mystic-lavender/80 mb-4">
                    Mountains, Mediterranean coast, and mystical Catalan countryside. Retreats held in
                    sacred spaces combining ancient wisdom with modern comfort.
                  </p>
                  <ul className="space-y-2 text-mystic-lavender/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Mountain retreat centers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Mediterranean integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Cultural immersion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Urban/nature balance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Retreat Offerings */}
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-mystic-lavender">
              Retreat Offerings
            </h2>
            <div className="space-y-8">
              {/* Group Retreats */}
              <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                      Group Transformation Retreats
                    </h3>
                    <p className="text-sacred-gold mb-4 italic">5-7 Days of Deep Work</p>
                    <p className="text-mystic-lavender/80 mb-4">
                      Immersive group retreats combining medicine ceremonies, energy healing, somatic work,
                      family constellations, and integration practices. Maximum 8-12 participants.
                    </p>
                    <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Multiple Bufo ceremonies with integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Daily group healing & sharing circles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Somatic & breathwork sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Nature immersion & sacred site visits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>All meals, accommodation & transport included</span>
                      </li>
                    </ul>
                    <div className="flex items-center gap-3 text-mystic-lavender/70 mt-4">
                      <Calendar className="w-5 h-5 text-sacred-gold" />
                      <span>Next retreats: Spring & Fall 2025</span>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-sacred-gold mb-2">€1,500-2,500</div>
                    <div className="text-mystic-lavender/70 mb-4">per person</div>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>

              {/* Private Retreats */}
              <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                      Private Custom Retreats
                    </h3>
                    <p className="text-sacred-gold mb-4 italic">Bespoke Healing Journeys</p>
                    <p className="text-mystic-lavender/80 mb-4">
                      Fully customized private retreats for individuals or small groups (2-4 people).
                      Design your own journey with chosen modalities, practices, and schedule.
                    </p>
                    <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Tailored to your specific needs & intentions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Flexible duration (3-14 days)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Private accommodation & ceremony space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Exclusive 1:1 or small group attention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Pre & post-retreat integration support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-sacred-gold mb-2">€2,000+</div>
                    <div className="text-mystic-lavender/70 mb-4">custom pricing</div>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              {/* Men's Retreat */}
              <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                      Men's Awakening Retreat
                    </h3>
                    <p className="text-sacred-gold mb-4 italic">The King, The Warrior, The Magician, The Lover</p>
                    <p className="text-mystic-lavender/80 mb-4">
                      Sacred men's work combining ceremony, brotherhood, emotional release, and masculine
                      embodiment practices. A journey into authentic masculinity.
                    </p>
                    <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Men-only sacred container</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Emotional release & anger work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Brotherhood bonding & vulnerability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sacred-gold">✦</span>
                        <span>Optional Bufo ceremonies</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold text-sacred-gold mb-2">€1,800</div>
                    <div className="text-mystic-lavender/70 mb-4">5 days</div>
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                    >
                      Join Waitlist
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-sacred-moon/5 backdrop-blur-xl border-t border-mystic-lavender/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-mystic-lavender">
                Ready for Deep Transformation?
              </h2>
              <p className="text-lg text-mystic-lavender/80 mb-8">
                Retreats are powerful containers for breakthrough. Let's discuss which retreat is
                right for your journey, or design a custom experience together.
              </p>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet text-sacred-moon rounded-2xl font-semibold hover:shadow-2xl hover:shadow-mystic-purple/50 transition-all"
              >
                <span>Discuss Retreat Options</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
