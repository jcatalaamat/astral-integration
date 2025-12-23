import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function HomePage() {
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
          subject: 'Website Inquiry',
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
            <p className="text-body text-content-secondary mb-12">
              Apps and digital systems for real businesses
            </p>

            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              We design and build apps, websites, and digital systems for businesses that already have customers — and need their technology to actually work.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              If people already want what you do, we help you turn that into a clear, usable, scalable digital setup.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What We Do
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              We build:
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Mobile apps (iOS & Android)',
                'Websites and conversion flows',
                'Booking and payment systems',
                'Memberships, programs, and subscriptions',
                'Internal tools and client portals',
                'Automations that remove manual work'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Sometimes that's one app. Sometimes it's web + mobile. Often it's an evolving system built over time.
            </p>

            <p className="text-lg text-content-primary font-medium">
              We don't sell isolated features. We build systems that hold the business together.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN PEOPLE HIRE US */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              When People Hire Us
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              People usually come to us when:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                "They've outgrown basic tools",
                'Their setup feels fragmented',
                "They're doing too much manually",
                "They want an app but don't want a dead, transactional one",
                'They want someone who can think beyond "just build this screen"'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              They don't want more tech.
            </p>
            <p className="text-lg text-content-primary font-medium">
              They want the right tech, built properly.
            </p>
          </div>
        </div>
      </section>

      {/* HOW OUR APPS ARE DIFFERENT */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How Our Apps Are Different
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-6">
              Most apps are:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Built once',
                'Shipped',
                'Forgotten'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-6">
              We design apps to:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Be opened repeatedly',
                'Support real operations',
                'Communicate with users',
                'Grow as the business grows'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              An app isn't the goal.
            </p>
            <p className="text-lg text-content-primary font-medium">
              A working digital system is.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Who This Is For
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              We work with:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Studios (yoga, wellness, movement)',
                'Coaches and educators',
                'Restaurants and physical businesses',
                'Curated brands and service businesses',
                'Founder-led teams with real traction'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              Industry doesn't matter. Having real customers does.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              If you're still validating an idea, we're not a fit.
            </p>
            <p className="text-lg text-content-primary font-medium">
              If you're already operating and things feel messy — we are.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-20">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How We Work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="py-10 border-t-2 border-content-primary">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-4">Understand the business</h3>
              <p className="text-body-sm text-content-secondary">
                We look at what's already working and where things break.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Design the system</h3>
              <p className="text-body-sm text-content-secondary">
                We define what you need now, and what can come later.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Build and evolve</h3>
              <p className="text-body-sm text-content-secondary">
                We ship clean, stable software and stay involved as it grows.
              </p>
            </div>
          </div>

          <p className="text-body text-content-secondary leading-relaxed max-w-prose mb-3">
            No overengineering.
          </p>
          <p className="text-lg text-content-primary font-medium max-w-prose">
            No one-off builds that die after launch.
          </p>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Ways to Work Together
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Depending on the situation, we work through:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Fixed-scope builds',
                'Tiered systems (web → app → platform)',
                'Monthly retainers',
                'Long-term partnerships',
                'Revenue share / percentage models (when aligned)'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              We choose the structure that makes sense — technically and commercially.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ASTRAL INTEGRATION */}
      <section id="about" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Why Astral Integration
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12 max-w-prose">
              Most people don't fail because of bad ideas.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-6 max-w-prose">
              They fail because their systems:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                "Don't scale",
                "Don't connect",
                "Don't adapt",
                "Don't reflect how they actually work"
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              We fix that.
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

            <p className="text-body text-white/70 leading-relaxed mb-8">
              If you want someone who can:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Build the app',
                'Design the system',
                'Think long-term',
                'And stay involved'
              ].map((item, i) => (
                <li key={i} className="text-body text-white/70 flex items-start gap-3">
                  <span className="text-white/40">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-white/90 mb-3">
              Reach out.
            </p>

            <p className="text-body text-white/90 mb-14">
              We'll tell you quickly if it's a fit.
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
                    placeholder="What are you building? Where do things feel stuck?"
                  />
                  {formErrors.message && <p className="mt-2 text-body-sm text-red-400">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-10 py-4 bg-white text-[#232323] hover:bg-white/90 active:bg-white/80 transition-colors text-body font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#232323]"
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Start a conversation'}
                </button>
              </form>
            ) : (
              <div className="py-10">
                <div className="flex items-center gap-3 mb-5">
                  <CheckCircle className="w-5 h-5 text-accent-gold" />
                  <p className="text-body text-white">Message received</p>
                </div>
                <p className="text-body-sm text-white/60 mb-8">
                  We'll respond within 24-48 hours.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-body-sm text-white/70 hover:text-white transition-colors"
                >
                  Send another message
                </button>
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
