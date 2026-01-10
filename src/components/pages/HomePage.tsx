import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Astral Integration — Digital realignment for work already in motion';
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Digital Realignment Review Request',
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-studio-bg font-sans">
      <Navigation />

      {/* HERO */}
      <section className="min-h-[95vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              Astral Integration
            </h1>
            <p className="text-body text-content-secondary mb-6">
              Digital realignment for work already in motion
            </p>
            <p className="text-body text-content-tertiary mb-12">
              and selective studio collaboration when alignment is strong
            </p>

            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              We help people and organizations translate existing work into clear, functional digital systems.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              That means clarifying what the work is today, how people encounter it, and how it is best supported digitally — so the systems around it feel coherent, usable, and true to its substance.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section id="services" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What This Is
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Many projects reach a point where effort is no longer the constraint.
            </p>

            <div className="mb-12">
              <p className="text-body text-content-primary leading-relaxed mb-2">The work exists.</p>
              <p className="text-body text-content-primary leading-relaxed mb-2">The value is real.</p>
              <p className="text-body text-content-primary leading-relaxed">But the digital expression no longer matches the work — or the work is being pushed into a form it isn't ready for.</p>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Today, it is easy to build quickly. Platforms, products, and systems can be engineered before clarity is established.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              When this happens, digital form begins to lead the work instead of supporting it.
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Offerings become inflated or unclear',
                'Platforms are built to solve problems that don\'t yet exist',
                'Systems add complexity instead of reducing it',
                'Energy goes into maintaining structure rather than doing the work itself'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              Our role is to bring clarity, restraint, and structure back into alignment — so the digital form supports the work without overextending it or distorting it.
            </p>
          </div>
        </div>
      </section>

      {/* OUR ROLE */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Our Role
            </p>

            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              We step in as a clarifying layer.
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              We read what already exists, identify what matters now, and help it take a form that makes sense to others.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              We also help projects resist unnecessary productization. Not every body of work needs a platform, an application, or a system simply because it is now possible to build one.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              In some cases, this work continues beyond realignment — evolving into a longer-term studio partnership where we remain involved in building, operating, or shaping the system over time.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              This work focuses on answering a small set of essential questions:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'What is the work now?',
                'How should people encounter it?',
                'What is the simplest, most accurate way to offer it?',
                'What needs to be built — and what should not be built yet?'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              Once these questions are clear, building becomes straightforward.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Our Process
            </p>
          </div>

          {/* Step 1: Digital Realignment Review */}
          <div className="max-w-prose mb-20">
            <div className="py-10 border-t-2 border-content-primary mb-8">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-2">Digital Realignment Review</h3>
              <p className="text-body-sm text-content-tertiary italic">Orientation before action</p>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              We review your existing digital presence: website, offerings, tools, structure, language, and flow.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              You receive a grounded diagnosis that clarifies:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'what the work is currently communicating',
                'where meaning or value is unclear',
                'how people are likely interpreting or missing it',
                'where structure does not support intention',
                'what the work is ready to become next'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              This creates clarity before decisions are made — and often prevents unnecessary platforms, products, or systems from being built prematurely.
            </p>
          </div>

          {/* Step 2: Offering & Realignment Blueprint */}
          <div className="max-w-prose mb-20">
            <div className="py-10 border-t-2 border-studio-divider mb-8">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-2">Offering & Realignment Blueprint</h3>
              <p className="text-body-sm text-content-tertiary italic">From essence to form</p>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              For projects that move forward, we create a clear blueprint that defines:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'the core offering or set of offerings',
                'the central value people connect with',
                'language that reflects the work accurately',
                'the appropriate format (service, product, program, platform)',
                'how people enter, engage, and deepen',
                'a realistic sequence for building and delivery'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              This blueprint stands on its own and can be used independently.
            </p>
          </div>

          {/* Step 3: Selective Build & Implementation */}
          <div className="max-w-prose">
            <div className="py-10 border-t-2 border-studio-divider mb-8">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-2">Selective Build & Implementation</h3>
              <p className="text-body-sm text-content-tertiary italic">Only what serves</p>
            </div>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              With clarity in place, we selectively design and build the digital systems that support the work cleanly.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              This may include:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'websites and digital homes',
                'offering and access flows',
                'booking, payment, and onboarding systems',
                'program, content, or membership platforms',
                'client or user portals',
                'internal tools and dashboards',
                'custom digital products or applications',
                'automation that reduces friction and maintenance'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              We build what is necessary — and often decide not to build at all until the work is ready.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What We Build
            </p>

            <p className="text-lg text-content-primary font-medium">
              The form varies. The principle remains the same.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Digital Homes */}
            <div>
              <h3 className="text-h3 text-content-primary mb-6">Digital Homes</h3>
              <ul className="space-y-3">
                {[
                  'clear, grounded websites',
                  'thoughtful content hierarchy',
                  'simple navigation and flows',
                  'design that supports understanding'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offer Structures */}
            <div>
              <h3 className="text-h3 text-content-primary mb-6">Offer Structures</h3>
              <ul className="space-y-3">
                {[
                  'single or layered offerings',
                  'clear entry points and natural progression',
                  'formats that match the work',
                  'systems that allow engagement without pressure'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms & Products */}
            <div>
              <h3 className="text-h3 text-content-primary mb-6">Platforms & Products</h3>
              <ul className="space-y-3">
                {[
                  'programs and learning environments',
                  'memberships and libraries',
                  'applications and tools',
                  'scalable systems built with intention'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operational Systems */}
            <div>
              <h3 className="text-h3 text-content-primary mb-6">Operational Systems</h3>
              <ul className="space-y-3">
                {[
                  'booking and scheduling',
                  'payments and subscriptions',
                  'onboarding and follow-up',
                  'integrations and automation'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INCUBATION & COLLABORATION */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Incubation & Collaboration
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Some projects extend beyond defined client work.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              When alignment is strong and the work has long-term potential, we occasionally engage as a studio partner — contributing clarity, system design, and execution over time, sometimes through shared ownership or ongoing collaboration.
            </p>

            <p className="text-lg text-content-primary font-medium">
              These engagements are intentional and built on shared direction.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="about" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Who This Is For
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              This work is for people and teams who:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'already have something real in motion',
                'feel unclear about how to present or offer it',
                'want their digital presence to reflect substance',
                'value clarity over constant iteration',
                'are willing to make deliberate decisions'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* HOW PEOPLE FIND US */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How People Find Us
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Most work arrives through:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'referrals',
                'introductions',
                'shared projects',
                'trusted connections'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              If someone pointed you here, that context matters.
            </p>
          </div>
        </div>
      </section>

      {/* START HERE */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Start Here
            </p>

            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Digital Realignment Review
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              If you're unsure what your offering truly is — or how it should be expressed and supported — this is the place to begin.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              You'll receive:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'clear articulation',
                'grounded direction',
                'a practical next step'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/review"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              Request a Digital Realignment Review
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Digital systems are extensions of thought, intention, and structure.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              When they are aligned, work becomes easier — for the people building it and the people engaging with it.
            </p>

            <div className="mb-12">
              <p className="text-body text-content-primary leading-relaxed mb-2">The website is not the work.</p>
              <p className="text-body text-content-primary leading-relaxed">It is where the work becomes accessible.</p>
            </div>

            <p className="text-lg text-content-primary font-medium">
              If this resonates, we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 md:py-36 bg-[#232323]">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-white/50 uppercase tracking-wider mb-6">
              Get in Touch
            </p>

            <p className="text-body text-white/70 leading-relaxed mb-10">
              Request a Digital Realignment Review or reach out to start a conversation.
            </p>

            <p className="text-body text-white/70 leading-relaxed mb-8">
              Tell us:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'what your work is',
                'where clarity feels missing',
                "what you're hoping to resolve"
              ].map((item, i) => (
                <li key={i} className="text-body text-white/70 flex items-start gap-3">
                  <span className="text-white/40">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-white/90 mb-14">
              We'll respond directly and thoughtfully.
            </p>

            {/* Contact Form */}
            {formStatus !== 'success' ? (
              <form onSubmit={handleContactSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-body-sm text-white/60 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-5 py-4 bg-[#2C2C2C] border text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                      formErrors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-[#404040]'
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-2 text-body-sm text-red-400">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-sm text-white/60 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-5 py-4 bg-[#2C2C2C] border text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                      formErrors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-[#404040]'
                    }`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && <p className="mt-2 text-body-sm text-red-400">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm text-white/60 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-5 py-4 bg-[#2C2C2C] border text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none ${
                      formErrors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-[#404040]'
                    }`}
                    placeholder="What is your work? Where does clarity feel missing?"
                  />
                  {formErrors.message && <p className="mt-2 text-body-sm text-red-400">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-10 py-4 bg-white text-[#232323] hover:bg-white/90 active:bg-white/80 transition-colors text-body font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#232323]"
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Request a Review'}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-6" />
                <h3 className="text-h2 text-white mb-4">Message received</h3>
                <p className="text-body text-white/70 mb-3">
                  We'll respond within 24-48 hours.
                </p>
                <p className="text-body-sm text-white/50">
                  Check your inbox for a reply from hello@astralintegration.co
                </p>
              </div>
            )}

            <div className="mt-20 pt-10 border-t border-[#404040]">
              <p className="text-body-sm text-white/40">
                hello@astralintegration.co
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
