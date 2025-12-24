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
              Apps and digital systems for work that already exists
            </p>

            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              I help people turn their work into clear, usable digital products — apps, platforms, and systems that people actually use.
            </p>

            <p className="text-body text-content-primary leading-relaxed max-w-prose">
              If you already have clients, students, or customers, I help you package what you do into something that works reliably in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="services" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              What I Do
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              I design and build apps and digital systems for people whose work has outgrown scattered tools, folders, and half-working platforms.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              That often includes:
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Mobile apps (iOS & Android)',
                'Web apps and dashboards',
                'Training and course platforms',
                'Client portals and internal tools',
                'Simple automations that remove manual work'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              Sometimes it's one app. Sometimes it's web + mobile.
            </p>
            <p className="text-lg text-content-primary font-medium">
              Always built to be used, not just launched.
            </p>
          </div>
        </div>
      </section>

      {/* A SIMPLE WAY TO START */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              A Simple Way to Start
            </p>

            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Training App MVP
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              If you already have a course, program, or training method, I offer a focused build to turn it into a real app.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              This is a fixed, contained project — not an open-ended platform build.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              What this looks like:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'A branded training app (web + mobile)',
                'Program → phases → exercises',
                'Video, audio, PDF, and text content',
                'Progress tracking and resume',
                'Admin access to manage your content'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              The goal is simple:
            </p>
            <p className="text-lg text-content-primary font-medium">
              one place where your program actually lives and works.
            </p>
          </div>
        </div>
      </section>

      {/* WHEN PEOPLE COME TO ME */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              When People Come to Me
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              People usually reach out when:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Their work is real, but the tech around it is messy',
                "They're tired of duct-taped tools and platforms",
                'They want an app, not a bloated "platform"',
                "They don't want to manage developers or infrastructure",
                'They want something that holds up over time'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              They don't need more features.
            </p>
            <p className="text-lg text-content-primary font-medium">
              They need something that works.
            </p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section id="process" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-20">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              How I Work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="py-10 border-t-2 border-content-primary">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-4">Understand the work</h3>
              <p className="text-body-sm text-content-secondary">
                We start with what already exists — not ideas, not hypotheticals.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Define the right scope</h3>
              <p className="text-body-sm text-content-secondary">
                What's needed now, and what can come later.
              </p>
            </div>

            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Build and deliver</h3>
              <p className="text-body-sm text-content-secondary">
                Clean, stable software that can be used immediately.
              </p>
            </div>
          </div>

          <p className="text-body text-content-secondary leading-relaxed max-w-prose mb-3">
            No overengineering. No endless builds.
          </p>
          <p className="text-lg text-content-primary font-medium max-w-prose">
            No tech for tech's sake.
          </p>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="about" className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Who I Work With
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
              Industry doesn't matter. Having real users does.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-3">
              If you're still validating an idea, I'm not a fit.
            </p>
            <p className="text-lg text-content-primary font-medium">
              If your work already exists and needs structure, I am.
            </p>
          </div>
        </div>
      </section>

      {/* BEYOND THE MVP */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Beyond the MVP
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              For some clients, the first app is just the start.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              I also work on:
            </p>

            <ul className="space-y-3 mb-12">
              {[
                'Evolving systems over time',
                'Adding new tools and integrations',
                'Long-term product partnerships',
                'Fixed projects or ongoing support'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              We choose the structure that fits the work — not the other way around.
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
                'where things feel messy or limiting'
              ].map((item, i) => (
                <li key={i} className="text-body text-white/70 flex items-start gap-3">
                  <span className="text-white/40">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-white/90 mb-14">
              I'll tell you quickly if it's a fit.
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
