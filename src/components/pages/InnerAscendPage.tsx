import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

export default function InnerAscendPage() {
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
          <div className="text-5xl mb-8 text-sacred-gold animate-breathe opacity-60">⊹</div>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-sacred-moon mb-8">
            Inner Ascend
          </h1>
          <p className="text-2xl md:text-3xl text-sacred-moon/80 font-serif italic font-light max-w-3xl mx-auto">
            A community for visionaries, healers, and awakened souls
          </p>
        </div>
      </div>

      {/* What Is This - Visual Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep">
                  What is Inner Ascend?
                </h2>
                <p className="text-xl text-indigo-deep/80 leading-relaxed italic">
                  It's more than a community. It's a movement.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  A collective of conscious entrepreneurs, healers, artists, and visionaries
                  co-creating the world we want to live in.
                </p>
                <p className="text-lg text-indigo-deep/70 leading-relaxed">
                  We're building a decentralized economy based on service, value exchange, and contribution.
                  We're healing ourselves and each other. We're creating projects, retreats, and offerings
                  that serve the awakening of humanity.
                </p>
              </div>

              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 to-sacred-green/30 rounded-2xl"></div>
              </div>
            </div>

            {/* Quote */}
            <div className="text-center max-w-3xl mx-auto mt-20">
              <p className="text-2xl md:text-3xl font-serif text-sacred-gold italic">
                This is your soul family. Welcome home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Visual Break */}
      <div className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/40 via-mystic-purple/50 to-cosmic-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-3xl md:text-5xl font-serif text-sacred-moon leading-relaxed">
              "You can't build the new world alone.<br/>
              But together, we can."
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep text-center mb-20">
              How We Gather
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-indigo-deep">Weekly Calls</h3>
                <p className="text-indigo-deep/70 leading-relaxed">
                  Live teachings, channeled transmissions, Q&A, and collective healing sessions.
                  Every week, we come together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-indigo-deep">Token Economy</h3>
                <p className="text-indigo-deep/70 leading-relaxed">
                  Exchange services without money. Trade healing, design, coaching, content, and more.
                  Abundance through contribution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-indigo-deep">Co-Creation</h3>
                <p className="text-indigo-deep/70 leading-relaxed">
                  Launch offerings, events, and businesses together. Share resources and skills.
                  What we build, we build as one.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-sacred-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-indigo-deep">Sacred Container</h3>
                <p className="text-indigo-deep/70 leading-relaxed">
                  Daily support, accountability, celebration, and witnessing.
                  A place to be fully seen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Is This For You */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900/80 via-indigo-deep/70 to-black/80"></div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon text-center mb-16">
              Is This For You?
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-sacred-gold">This is for you if:</h3>
                <div className="space-y-4 text-sacred-moon/80">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You're building a conscious business or offering</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You want to collaborate, not compete</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You believe in abundance and value exchange</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You're ready to contribute your gifts</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-sacred-gold">This is NOT for you if:</h3>
                <div className="space-y-4 text-sacred-moon/80">
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You're looking for quick fixes without commitment</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You operate from scarcity or competition</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You're not ready to show up authentically</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-sacred-gold mt-1">✦</span>
                    <span>You want to consume without contributing</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Join - Light Section */}
      <div className="bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-indigo-deep mb-6">
                Three Ways to Participate
              </h2>
              <p className="text-lg text-indigo-deep/70">
                Start where it feels right. Grow as you're called.
              </p>
            </div>

            <div className="space-y-12">
              {/* Community Tier */}
              <div className="border-l-4 border-sacred-green/40 pl-8 py-4">
                <h3 className="text-2xl font-serif text-indigo-deep mb-3">Community (Free)</h3>
                <p className="text-indigo-deep/70 mb-4">
                  Join the Discord, attend monthly open calls, access the token exchange marketplace.
                  See if this is your tribe.
                </p>
              </div>

              {/* Active Member */}
              <div className="border-l-4 border-sacred-gold pl-8 py-4">
                <h3 className="text-2xl font-serif text-indigo-deep mb-3">Active Member</h3>
                <p className="text-indigo-deep/70 mb-4">
                  Weekly calls, token economy access, co-creation opportunities, monthly group healing.
                  For those ready to dive in.
                </p>
              </div>

              {/* Core Circle */}
              <div className="border-l-4 border-mystic-purple/50 pl-8 py-4">
                <h3 className="text-2xl font-serif text-indigo-deep mb-3">Core Circle</h3>
                <p className="text-indigo-deep/70 mb-4">
                  Everything in Active Member plus mastermind collaboration, 1:1 monthly check-ins,
                  business guidance, and priority support. For leaders and visionaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/50 via-mystic-purple/40 to-cosmic-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sacred-moon">
              Ready to join your soul family?
            </h2>
            <p className="text-xl text-sacred-moon/80">
              Start with the free tier. See if Inner Ascend resonates with your path.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 bg-sacred-cream text-indigo-deep rounded-full hover:bg-sacred-moon transition-colors font-medium"
              >
                Join the community
              </Link>
              <a
                href="https://discord.gg/innerascend"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-sacred-cream text-sacred-cream rounded-full hover:bg-sacred-cream hover:text-indigo-deep transition-colors font-medium"
              >
                Visit Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
