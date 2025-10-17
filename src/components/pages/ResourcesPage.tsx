import { Link } from 'react-router-dom';
import { BookOpen, Heart, Download } from 'lucide-react';

export default function ResourcesPage() {

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
              Resources & Teachings
            </h1>
            <p className="text-xl md:text-2xl text-mystic-lavender/80 mb-8">
              Free tools, reflections, and wisdom for your journey
            </p>
          </div>
        </div>

        {/* Free Meditations */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-12 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-mystic-purple/30 to-sacred-gold/30 rounded-full flex items-center justify-center">
                    <Download className="w-12 h-12 text-sacred-gold" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-serif font-bold mb-4 text-mystic-lavender">
                    Free Guided Meditations
                  </h2>
                  <p className="text-mystic-lavender/80 mb-6">
                    Download a collection of guided meditations for grounding, healing, and awakening.
                    Perfect for daily practice or integration work.
                  </p>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="inline-block px-8 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                  >
                    Download Free Pack
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog/Teachings Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-12 text-center text-mystic-lavender">
                Recent Teachings & Reflections
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Blog Post 1 */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl overflow-hidden hover:border-mystic-purple/40 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-mystic-purple/20 to-mystic-indigo/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-sacred-gold opacity-40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                      The Fall of Society: 2025-2100
                    </h3>
                    <p className="text-mystic-lavender/70 text-sm mb-4">
                      What's coming, and how to prepare your soul for the great transition.
                    </p>
                    <button className="text-sacred-gold hover:text-sacred-glow transition-colors text-sm font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl overflow-hidden hover:border-mystic-purple/40 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-sacred-gold/20 to-mystic-violet/20 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-sacred-gold opacity-40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                      Becoming Love: Ego Dissolution
                    </h3>
                    <p className="text-mystic-lavender/70 text-sm mb-4">
                      What Bufo taught me about surrendering identity and remembering wholeness.
                    </p>
                    <button className="text-sacred-gold hover:text-sacred-glow transition-colors text-sm font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>

                {/* Blog Post 3 */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl overflow-hidden hover:border-mystic-purple/40 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-mystic-indigo/20 to-sacred-green/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-sacred-gold opacity-40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                      The Masculine Awakening
                    </h3>
                    <p className="text-mystic-lavender/70 text-sm mb-4">
                      Why men's work is the most important work right now, and what it means to be a king.
                    </p>
                    <button className="text-sacred-gold hover:text-sacred-glow transition-colors text-sm font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Preview */}
            <div className="bg-sacred-moon/5 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-12">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-mystic-lavender">
                Transformation Stories
              </h2>
              <div className="space-y-8 mb-8">
                <div className="text-center">
                  <p className="text-lg text-mystic-lavender/80 italic mb-4">
                    "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who
                    I was' way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
                  </p>
                  <p className="text-sacred-gold font-semibold">— Maria, Barcelona</p>
                </div>
                <div className="text-center">
                  <p className="text-lg text-mystic-lavender/80 italic mb-4">
                    "The Bufo ceremony was the most profound experience of my life. Astral's preparation,
                    presence, and integration support made me feel completely safe to surrender. I finally
                    understand what 'coming home to myself' means."
                  </p>
                  <p className="text-sacred-gold font-semibold">— David, USA</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-mystic-lavender/70 mb-4">
                  Read more stories from souls who've walked this path
                </p>
                <button className="text-sacred-gold hover:text-sacred-glow transition-colors font-semibold">
                  View All Testimonials →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
