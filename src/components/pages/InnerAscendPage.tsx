import { Link } from 'react-router-dom';
import { Users, Star, Crown } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import WarmHero from '../shared/WarmHero';

export default function InnerAscendPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <WarmHero
        title="Inner Ascend"
        subtitle="Your soul family. Welcome home."
        height="extra-large"
        image="/images/homepage/inner-circle.jpg"
      />

      {/* What Is This - Visual Section */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
                  What is Inner Ascend?
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed italic">
                  It's more than a community. It's a movement.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  A collective of conscious entrepreneurs, healers, artists, and visionaries
                  co-creating the world we want to live in.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  We're building a decentralized economy based on service, value exchange, and contribution.
                  We're healing ourselves and each other. We're creating projects, retreats, and offerings
                  that serve the awakening of humanity.
                </p>
              </div>

              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 to-accent-sage/30 rounded-2xl"></div>
              </div>
            </div>

            {/* Quote */}
            <div className="text-center max-w-3xl mx-auto mt-20">
              <p className="text-2xl md:text-3xl font-serif text-accent-gold italic">
                This is your soul family. Welcome home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Visual Break */}
      <div className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <p className="text-3xl md:text-5xl font-serif text-text-heading leading-relaxed">
              "You can't build the new world alone.<br/>
              But together, we can."
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              How We Gather
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Weekly Calls</h3>
                <p className="text-text-secondary leading-relaxed">
                  Live teachings, channeled transmissions, Q&A, and collective healing sessions.
                  Every week, we come together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Token Economy</h3>
                <p className="text-text-secondary leading-relaxed">
                  Exchange services without money. Trade healing, design, coaching, content, and more.
                  Abundance through contribution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Co-Creation</h3>
                <p className="text-text-secondary leading-relaxed">
                  Launch offerings, events, and businesses together. Share resources and skills.
                  What we build, we build as one.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-accent-gold text-3xl">✦</div>
                <h3 className="text-2xl font-serif text-text-heading">Sacred Container</h3>
                <p className="text-text-secondary leading-relaxed">
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-16">
              Is This For You?
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-accent-gold">This is for you if:</h3>
                <div className="space-y-4 text-text-secondary">
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You're building a conscious business or offering</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You want to collaborate, not compete</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You believe in abundance and value exchange</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You're ready to contribute your gifts</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-accent-gold">This is NOT for you if:</h3>
                <div className="space-y-4 text-text-secondary">
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You're looking for quick fixes without commitment</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You operate from scarcity or competition</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You're not ready to show up authentically</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span>You want to consume without contributing</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to Join - Light Section */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                Three Ways to Participate
              </h2>
              <p className="text-lg text-text-secondary">
                Start where it feels right. Grow as you're called.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Community Tier - Free */}
              <div className="bg-warm-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-accent-sage/20">
                <div className="flex items-center justify-center w-16 h-16 bg-accent-sage/10 rounded-full mb-6 mx-auto">
                  <Users className="w-8 h-8 text-accent-sage" />
                </div>
                <h3 className="text-2xl font-serif text-text-heading mb-2 text-center">Community</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-accent-sage">Free</span>
                </div>
                <p className="text-text-secondary mb-6 text-center leading-relaxed">
                  See if this is your tribe
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sage mt-1">✦</span>
                    <span className="text-text-secondary">Discord access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sage mt-1">✦</span>
                    <span className="text-text-secondary">Monthly open calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-sage mt-1">✦</span>
                    <span className="text-text-secondary">Token exchange marketplace</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="block w-full text-center px-6 py-3 bg-accent-sage/10 text-accent-sage rounded-full hover:bg-accent-sage/20 transition-colors font-medium"
                >
                  Join Free
                </Link>
              </div>

              {/* Active Member */}
              <div className="relative bg-warm-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-accent-gold transform md:-translate-y-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-warm-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="flex items-center justify-center w-16 h-16 bg-accent-gold/10 rounded-full mb-6 mx-auto">
                  <Star className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-2xl font-serif text-text-heading mb-2 text-center">Active Member</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-accent-gold">$111</span>
                  <span className="text-text-tertiary">/month</span>
                </div>
                <p className="text-text-secondary mb-6 text-center leading-relaxed">
                  For those ready to dive in
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span className="text-text-secondary">Everything in Community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span className="text-text-secondary">Weekly live calls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span className="text-text-secondary">Full token economy access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span className="text-text-secondary">Co-creation opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span>
                    <span className="text-text-secondary">Monthly group healing</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="block w-full text-center px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                >
                  Become a Member
                </Link>
              </div>

              {/* Core Circle */}
              <div className="bg-warm-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-accent-terracotta/40">
                <div className="flex items-center justify-center w-16 h-16 bg-accent-terracotta/10 rounded-full mb-6 mx-auto">
                  <Crown className="w-8 h-8 text-accent-terracotta" />
                </div>
                <h3 className="text-2xl font-serif text-text-heading mb-2 text-center">Core Circle</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-accent-terracotta">$333</span>
                  <span className="text-text-tertiary">/month</span>
                </div>
                <p className="text-text-secondary mb-6 text-center leading-relaxed">
                  For leaders and visionaries
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-terracotta mt-1">✦</span>
                    <span className="text-text-secondary">Everything in Active Member</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-terracotta mt-1">✦</span>
                    <span className="text-text-secondary">Mastermind collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-terracotta mt-1">✦</span>
                    <span className="text-text-secondary">1:1 monthly check-ins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-terracotta mt-1">✦</span>
                    <span className="text-text-secondary">Business guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-terracotta mt-1">✦</span>
                    <span className="text-text-secondary">Priority support</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="block w-full text-center px-6 py-3 bg-accent-terracotta/10 text-accent-terracotta rounded-full hover:bg-accent-terracotta/20 transition-colors font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-warm-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                Voices from the Circle
              </h2>
              <p className="text-lg text-text-secondary">
                Hear from members who found their soul family
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-warm-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-accent-gold text-3xl mb-4">"</div>
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  Inner Ascend changed my life. I finally found a community where I can be fully myself.
                  The weekly calls are pure magic, and the connections I've made are irreplaceable.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-accent-gold text-xl">✦</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-heading">Sarah M.</p>
                    <p className="text-sm text-text-tertiary">Healer & Coach</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-warm-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-accent-gold text-3xl mb-4">"</div>
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  The token economy is genius. I've exchanged hundreds of dollars worth of services
                  without spending money. This community truly operates on abundance.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-accent-gold text-xl">✦</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-heading">Marcus L.</p>
                    <p className="text-sm text-text-tertiary">Entrepreneur</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-warm-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                <div className="text-accent-gold text-3xl mb-4">"</div>
                <p className="text-text-secondary leading-relaxed mb-6 italic">
                  I've been in other communities, but none like this. The level of authenticity,
                  depth, and genuine support here is unmatched. This is truly my soul family.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-accent-gold text-xl">✦</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-heading">Elena R.</p>
                    <p className="text-sm text-text-tertiary">Artist & Visionary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Ready to join your soul family?
            </h2>
            <p className="text-xl text-text-secondary">
              Start with the free tier. See if Inner Ascend resonates with your path.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Join the community
              </Link>
              <a
                href="https://discord.gg/innerascend"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium"
              >
                Visit Discord
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
