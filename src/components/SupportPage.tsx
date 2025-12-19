import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-cosmic-900/90 via-indigo-deep/80 to-black/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif text-sacred-moon mb-6 font-light">
                Support
              </h1>
              <p className="text-xl text-sacred-moon/80">
                Questions about your journey? We're here to help.
              </p>
            </div>

            <div className="bg-cosmic-900/30 backdrop-blur-xl border border-sacred-moon/10 rounded-2xl p-8 md:p-12 space-y-12">
              {/* Email Support */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-serif text-sacred-moon">Get in Touch</h2>
                <p className="text-sacred-moon/70">
                  For questions about services, bookings, or your journey with us:
                </p>
                <a
                  href="mailto:hello@astralintegration.co"
                  className="inline-block px-8 py-3 bg-sacred-gold text-cosmic-900 rounded-full font-medium hover:bg-sacred-glow transition-all"
                >
                  Email: hello@astralintegration.co
                </a>
              </div>

              {/* Common Questions */}
              <div className="border-t border-sacred-moon/10 pt-12">
                <h2 className="text-2xl font-serif text-sacred-moon mb-8 text-center">
                  Common Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-sacred-gold mb-2">
                      How do I book a session?
                    </h3>
                    <p className="text-sacred-moon/70">
                      Visit our <Link to="/contact" className="text-sacred-gold hover:underline">Contact page</Link> to
                      send us a message about what you're looking for. We'll respond within 24-48 hours to discuss
                      availability and next steps.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-sacred-gold mb-2">
                      What should I expect from a session?
                    </h3>
                    <p className="text-sacred-moon/70">
                      Each session is unique and tailored to your needs. We'll discuss your intentions beforehand
                      and create a safe container for deep transformational work. Sessions may include energy healing,
                      somatic practices, family constellations, or integration support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-sacred-gold mb-2">
                      Is medicine work right for me?
                    </h3>
                    <p className="text-sacred-moon/70">
                      Medicine work is a profound journey that's not for everyone. We require a discovery call
                      and health screening before any ceremony. If you're called to this work, we'll help you
                      determine if it's the right time and prepare you properly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-sacred-gold mb-2">
                      Where are you located?
                    </h3>
                    <p className="text-sacred-moon/70">
                      We offer sessions and retreats in two locations: Mazunte, Mexico (for retreats and ceremonies)
                      and Barcelona, Spain (for 1:1 sessions and European retreats). Remote sessions are also available.
                    </p>
                  </div>

                </div>
              </div>

              {/* Connect */}
              <div className="border-t border-sacred-moon/10 pt-12 text-center space-y-4">
                <h2 className="text-2xl font-serif text-sacred-moon mb-4">Stay Connected</h2>
                <p className="text-sacred-moon/70 mb-6">
                  Follow our journey and daily teachings on Instagram
                </p>
                <a
                  href="https://instagram.com/astralintegration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sacred-gold hover:text-sacred-glow transition-colors"
                >
                  @astralintegration
                </a>
              </div>

              {/* Back Home */}
              <div className="text-center pt-8">
                <Link
                  to="/"
                  className="text-sacred-moon/60 hover:text-sacred-gold transition-colors"
                >
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
