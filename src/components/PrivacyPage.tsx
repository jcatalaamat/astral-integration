import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="min-h-screen bg-sacred-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif text-indigo-deep mb-6 font-light">
                Privacy Policy
              </h1>
              <p className="text-lg text-indigo-deep/70">
                Last updated: January 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-8">

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Our Commitment to Your Privacy</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    At Astral Integration, we deeply respect your privacy and the sacred nature of the work we do together.
                    This policy outlines how we collect, use, and protect your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-indigo-deep/80">
                    <p><strong>Contact Information:</strong> When you reach out through our contact form or email,
                    we collect your name, email address, and any information you choose to share about your journey and intentions.</p>

                    <p><strong>Session Information:</strong> During sessions and ceremonies, we may keep confidential
                    notes to support your healing journey and provide continuity of care.</p>

                    <p><strong>Website Analytics:</strong> We use basic analytics to understand how visitors use our
                    website, which helps us improve the experience. This data is anonymized and aggregated.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">How We Use Your Information</h2>
                  <div className="space-y-3 text-indigo-deep/80">
                    <p>• To communicate with you about sessions, retreats, and services</p>
                    <p>• To provide personalized healing and support</p>
                    <p>• To send updates about events and offerings (you can unsubscribe anytime)</p>
                    <p>• To improve our website and services</p>
                    <p>• To maintain the safety and integrity of our healing containers</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Confidentiality</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    All personal information shared during sessions, ceremonies, and private communications is held
                    in strict confidence. We do not share, sell, or disclose your personal information to third parties,
                    except as required by law or with your explicit consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Data Security</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    We take appropriate measures to protect your personal information from unauthorized access,
                    alteration, or disclosure. However, no method of transmission over the internet is 100% secure,
                    and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Cookies and Tracking</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    Our website uses minimal cookies for essential functionality and analytics. We do not use
                    tracking cookies for advertising purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Your Rights</h2>
                  <div className="space-y-3 text-indigo-deep/80">
                    <p>You have the right to:</p>
                    <p>• Access the personal information we hold about you</p>
                    <p>• Request correction of inaccurate information</p>
                    <p>• Request deletion of your personal data</p>
                    <p>• Unsubscribe from communications at any time</p>
                    <p>• Ask questions about how we use your information</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Third-Party Services</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    We use EmailJS to process contact form submissions. Their privacy policy can be found at
                    emailjs.com/legal/privacy-policy. We do not share your personal information with any other
                    third-party services without your consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Medical Disclaimer</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    The services offered by Astral Integration are complementary practices and are not a substitute
                    for medical or psychological treatment. Any health information shared is kept confidential and
                    is used solely to ensure your safety during ceremonies and sessions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Changes to This Policy</h2>
                  <p className="text-indigo-deep/80 leading-relaxed">
                    We may update this privacy policy from time to time. Any changes will be posted on this page
                    with an updated "Last Updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif text-indigo-deep mb-4">Contact Us</h2>
                  <p className="text-indigo-deep/80 leading-relaxed mb-4">
                    If you have any questions about this privacy policy or how we handle your information,
                    please contact us:
                  </p>
                  <p className="text-indigo-deep/80">
                    Email: <a href="mailto:hello@astral-integration.com" className="text-sacred-gold hover:underline">hello@astral-integration.com</a>
                  </p>
                </section>

                <div className="pt-8 border-t border-indigo-deep/10 text-center">
                  <Link
                    to="/"
                    className="text-sacred-gold hover:text-indigo-deep transition-colors"
                  >
                    ← Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
