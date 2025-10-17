import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon">
      {/* Cosmic aurora background - lighter */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-mystic-indigo rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
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
              The Journey to Here
            </h1>
            <p className="text-xl md:text-2xl text-mystic-lavender/80 mb-8 font-serif italic">
              Every healer has their own awakening.<br />
              Mine began with a breakdown that became a breakthrough.
            </p>
          </div>
        </div>

        {/* Story Section - The Breakdown */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-mystic-lavender">
                  The Breakdown
                </h2>
                <div className="space-y-4 text-mystic-lavender/80 leading-relaxed">
                  <p>
                    For years, I performed. I wore masks. I did what I thought I was supposed to do.
                    Until my body, my mind, and my soul said: NO MORE.
                  </p>
                  <p>
                    The breakdown looked like: psychosis, relationship collapse, identity dissolution,
                    hitting rock bottom. What I didn't know then was that rock bottom would become my foundation.
                  </p>
                  <p className="text-sacred-green italic">
                    Sometimes we need to completely fall apart to remember who we truly are.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-mystic-purple/20 to-mystic-indigo/20 rounded-3xl backdrop-blur-xl border border-mystic-lavender/20 flex items-center justify-center">
                  <div className="text-6xl opacity-40">🌑</div>
                </div>
              </div>
            </div>

            {/* The Awakening */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="aspect-square bg-gradient-to-br from-sacred-gold/20 to-mystic-violet/20 rounded-3xl backdrop-blur-xl border border-mystic-lavender/20 flex items-center justify-center">
                  <div className="text-6xl opacity-40">🌅</div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-mystic-lavender">
                  The Awakening
                </h2>
                <div className="space-y-4 text-mystic-lavender/80 leading-relaxed">
                  <p>
                    Plant medicine showed me who I was beyond the story. Bufo Alvarius dissolved the ego
                    I'd spent decades building. And in that dissolution, I found what I'd been searching for all along:
                  </p>
                  <p className="text-2xl font-serif text-sacred-gold italic">
                    Nothing. And everything.
                  </p>
                  <p>
                    I found presence. Consciousness. Love that isn't conditional. The realization that I am already whole.
                  </p>
                </div>
              </div>
            </div>

            {/* The Work Begins */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-mystic-lavender">
                  Becoming a Guide
                </h2>
                <div className="space-y-4 text-mystic-lavender/80 leading-relaxed">
                  <p>
                    But awakening isn't enough. Integration is where the real work happens.
                  </p>
                  <p>
                    I spent years learning from elders, shamans, therapists, healers. I trained in:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Family Constellations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Somatic Therapy & Bodywork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Energy Healing & Mystery School Practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Bufo Alvarius Facilitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sacred-gold">✦</span>
                      <span>Access Consciousness & Theta Healing</span>
                    </li>
                  </ul>
                  <p className="text-sacred-green italic">
                    But my greatest teacher has been my own journey—and the thousands of souls I've had the honor to witness.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-sacred-green/20 to-mystic-purple/20 rounded-3xl backdrop-blur-xl border border-mystic-lavender/20 flex items-center justify-center">
                  <div className="text-6xl opacity-40">🕉️</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-sacred-moon/5 backdrop-blur-xl border-y border-mystic-lavender/20 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-mystic-lavender">
                  The Journey in Numbers
                </h2>
                <p className="text-mystic-lavender/70">
                  Not as credentials to impress—but as testament to the path walked
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-cosmic-900/50 rounded-2xl border border-mystic-lavender/20">
                  <div className="text-4xl font-bold text-sacred-gold mb-2">10+</div>
                  <div className="text-mystic-lavender/80">Years of Service</div>
                </div>
                <div className="text-center p-6 bg-cosmic-900/50 rounded-2xl border border-mystic-lavender/20">
                  <div className="text-4xl font-bold text-sacred-gold mb-2">500+</div>
                  <div className="text-mystic-lavender/80">Ceremonies Held</div>
                </div>
                <div className="text-center p-6 bg-cosmic-900/50 rounded-2xl border border-mystic-lavender/20">
                  <div className="text-4xl font-bold text-sacred-gold mb-2">1000+</div>
                  <div className="text-mystic-lavender/80">Souls Witnessed</div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-mystic-lavender/80 leading-relaxed mb-6">
                  Based between <span className="text-sacred-gold">Mazunte, Mexico</span> and{' '}
                  <span className="text-sacred-gold">Barcelona, Spain</span>, I work with individuals,
                  groups, and communities ready to shed the old and step into their divine essence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-mystic-lavender">
              My Approach
            </h2>
            <div className="space-y-6 text-lg text-mystic-lavender/80 leading-relaxed">
              <p>
                My work is a crossing between coaching, teaching, energy healing, therapy, and mysticism.
              </p>
              <p>
                I don't have all the answers. I don't perform miracles. I don't promise instant transformation.
              </p>
              <p className="text-xl text-sacred-gold font-serif italic">
                What I do is hold space for you to remember who you already are.
              </p>
              <p>
                I see you. I witness you. I walk beside you as you navigate the depths of your own becoming.
              </p>
              <p className="text-sacred-green">
                This work is not for everyone. It requires courage, commitment, and a willingness to face
                what you've been avoiding. But if you're ready—truly ready—I'm here.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-mystic-purple/20 to-mystic-indigo/20 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-mystic-lavender">
                Ready to Begin?
              </h2>
              <p className="text-lg text-mystic-lavender/80 mb-8">
                Explore the different pathways to work together, or reach out directly to discuss your journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="group px-8 py-4 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet text-sacred-moon rounded-2xl font-semibold hover:shadow-2xl hover:shadow-mystic-purple/50 transition-all flex items-center gap-3"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="px-8 py-4 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-2xl font-semibold hover:bg-mystic-purple/30 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
