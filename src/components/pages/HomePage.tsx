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
              Systems Architecture & Digital Integration Studio
            </p>

            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              We help founders, creators, and real-world businesses redesign and implement systems when what once worked no longer does.
            </p>

            <p className="text-body text-content-secondary leading-relaxed max-w-prose">
              When growth, complexity, or change breaks execution, we step in to realign structure, decisions, and digital infrastructure — and make the system actually work again.
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
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Systems Work at Moments of Structural Change
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              Astral Integration works at moments where businesses and practices have outgrown their existing systems.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-6">
              This includes:
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Diagnosing where execution, decisions, or responsibility are breaking down',
                'Redesigning roles, ownership, and operating structure',
                'Designing and building the digital layer when needed: websites, apps, internal tools, chatbots, booking/ordering/content systems',
                'Coordinating specialists (developers, designers, photographers, etc.) to ensure proper execution'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              We don't just advise. We design and implement until the system holds.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
            Who We Work With
          </p>
          <h2 className="text-h1 md:text-display-sm text-content-primary mb-6">
            People Who Already Have Something Real
          </h2>

          <p className="text-body text-content-secondary mb-16 max-w-prose">
            We work with people who already have something real.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12">
            <div>
              <h3 className="text-h3 text-content-primary mb-5">Founders & founder-led companies</h3>
              <p className="text-body-sm text-content-secondary">
                When growth or complexity has outpaced existing structure.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Creators & artists</h3>
              <p className="text-body-sm text-content-secondary">
                With growing practices that need proper systems and digital presence.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Restaurants, wineries, and physical businesses</h3>
              <p className="text-body-sm text-content-secondary">
                Where the experience is strong but systems and digital infrastructure are weak.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Small teams in transition or scale</h3>
              <p className="text-body-sm text-content-secondary">
                Navigating structural change or growth inflection points.
              </p>
            </div>
          </div>

          <p className="text-body text-content-primary font-medium max-w-prose">
            The common thread is simple: the business works — but the system around it doesn't anymore.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-20">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How We Work
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-8">
              System-Level Intervention
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="py-10 border-t-2 border-content-primary">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-4">Diagnosis</h3>
              <p className="text-body-sm text-content-secondary">
                We identify where the current system no longer matches reality.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">System Redesign</h3>
              <p className="text-body-sm text-content-secondary">
                Structure, roles, decisions, tools, and digital architecture.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Implementation & Stabilisation</h3>
              <p className="text-body-sm text-content-secondary">
                We build, integrate, and coordinate until execution is clear and stable.
              </p>
            </div>
          </div>

          <p className="text-lg text-content-primary font-medium max-w-prose">
            Then we step back.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              About the Studio
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Astral Integration
            </h2>

            <p className="text-body text-content-primary leading-relaxed mb-8">
              Founded by a systems architect working at the intersection of people, work, and technology.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              The work is shaped by years designing and implementing systems across founder-led organizations, creative practices, and technology — stepping in at moments where growth, change, or complexity broke coherence.
            </p>

            <p className="text-body-sm text-content-tertiary">
              The work is intentionally limited in scope and scale, and happens primarily by trust and referral.
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
            <h2 className="text-h1 md:text-display-sm text-white mb-10">
              Working Together
            </h2>

            <p className="text-body text-white/70 leading-relaxed mb-3">
              If you're exploring working together, reach out with:
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "what you're building or holding",
                'where things feel stuck, brittle, or overloaded',
                'why this moment matters now'
              ].map((item, i) => (
                <li key={i} className="text-body text-white/70 flex items-start gap-3">
                  <span className="text-white/40">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-white/90 mb-14">
              If it's a fit, we'll define the next step.
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
