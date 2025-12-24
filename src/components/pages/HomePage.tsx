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
              Apps and digital systems, built properly
            </p>

            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              I build apps and digital systems for people whose work already exists and needs a product that can hold it.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              If you already teach, train, run programs, or serve clients, I help you turn that work into something clear, usable, and reliable — an app or system people return to.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section id="services" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What I Build
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              I design and build digital products that sit behind real work.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              That usually means:
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Mobile apps (iOS & Android)',
                'Web apps and dashboards',
                'Training and course platforms',
                'Client portals and internal tools',
                'Lightweight systems that remove manual work'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              Delivered as a coherent product people can use across devices.
            </p>
            <p className="text-lg text-content-primary font-medium">
              The goal is simple: a product that works without constant attention.
            </p>
          </div>
        </div>
      </section>

      {/* A SIMPLE ENTRY POINT */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              A Simple Entry Point
            </p>

            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Training App MVP
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              If you already have a course, program, or training method, I offer a focused build to turn it into a real app.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              This is a contained project with a clear beginning and end.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              You get:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'A branded training app (web + mobile)',
                'Clear structure (program → phases → exercises)',
                'Video, audio, PDF, and text content',
                'Progress tracking and resume',
                'Admin access to manage everything'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Built over a few weeks.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              The outcome is simple:
            </p>
            <p className="text-lg text-content-primary font-medium">
              one place where your program actually lives.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE COME TO ME */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Why People Come to Me
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              People usually reach out when:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'The work is established and ready to be delivered digitally',
                'Delivery feels scattered or heavy',
                'Manual effort keeps accumulating',
                'Existing tools limit how the work is shared',
                'They want something that can support growth'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              They are looking for something that holds.
            </p>
          </div>
        </div>
      </section>

      {/* HOW THE WORK MOVES */}
      <section id="process" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-12">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How the Work Moves
            </p>
            <p className="text-body text-content-secondary leading-relaxed mb-8">
              The work moves in a direct loop.
            </p>
            <p className="text-lg text-content-primary font-medium">
              Build. Ship. Support the sell.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="py-10 border-t-2 border-content-primary">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-4">Build</h3>
              <p className="text-body-sm text-content-secondary">
                We shape what already exists into a clear product.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Ship</h3>
              <p className="text-body-sm text-content-secondary">
                A working app or platform goes live and is used immediately.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Support the sell</h3>
              <p className="text-body-sm text-content-secondary">
                Once the product exists, it becomes easier to explain, deliver, and grow. The product carries the work forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="about" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Who This Is For
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              I work with:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Coaches and educators',
                'Movement, wellness, and training professionals',
                'Studios and small teams',
                'Founder-led businesses with real traction'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              Industry matters less than having real users.
            </p>

            <p className="text-lg text-content-primary font-medium">
              If your work already exists and needs structure, this fits.
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND THE FIRST BUILD */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Beyond the First Build
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              For some people, the first app is the complete solution.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              For others, the system evolves over time through:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'additional tools',
                'deeper integrations',
                'long-term product collaboration'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              Those decisions come after something real is in use.
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
              If you want help turning your work into a clear, usable digital product, reach out.
            </p>

            <p className="text-body text-white/70 leading-relaxed mb-8">
              Tell me:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                "what you're doing",
                'what already works',
                'where things feel heavy or fragile'
              ].map((item, i) => (
                <li key={i} className="text-body text-white/70 flex items-start gap-3">
                  <span className="text-white/40">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-white/90 mb-14">
              I'll tell you directly whether this makes sense.
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
                  I'll respond within 24-48 hours.
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
