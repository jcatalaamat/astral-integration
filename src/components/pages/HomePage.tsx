import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import SystemsDiagram from '../SystemsDiagram';

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

      {/* HERO — Authority anchor */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-heading mb-6">
              Astral Integration
            </h1>
            <p className="text-h3 md:text-h2 text-content-secondary font-normal mb-12">
              A Living Systems Studio
            </p>

            <p className="text-body md:text-lg text-content-primary leading-relaxed mb-6 max-w-prose">
              We work with founders, leaders, and creators when the way they're operating no longer works.
            </p>
            <p className="text-body text-content-secondary leading-relaxed max-w-prose">
              We step in at moments of growth, transition, or complexity to redesign the underlying human and work systems — so execution becomes clear again.
            </p>
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className="py-section-lg bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
              The Situation
            </p>
            <h2 className="text-h1 md:text-h1 text-content-heading mb-8">
              Why People Come to Us
            </h2>

            <p className="text-body text-content-primary leading-relaxed mb-10">
              Not because they lack vision, talent, or effort — but because the structure around their work no longer fits the reality they're living inside.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                'The structure that once worked no longer fits',
                'Responsibility has concentrated too heavily in one place',
                'Decisions are slow or unclear',
                'Execution feels harder than it should',
                'Tools exist, but don\'t support reality',
                'Life and work have become entangled'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-4">
                  <span className="text-accent mt-1.5 text-sm">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-content-primary leading-relaxed">
              At this stage, pushing harder or adding more tools doesn't help. The system itself needs to change.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="py-section-lg">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
                The Work
              </p>
              <h2 className="text-h1 text-content-heading mb-8">
                What We Do
              </h2>

              <p className="text-body text-content-primary leading-relaxed mb-6">
                We work one level beneath surface problems. Rather than offering advice, coaching, or generic frameworks, we redesign the operating system around people and work.
              </p>
              <p className="text-body text-content-secondary leading-relaxed">
                The outcome is practical and grounded: clarity, momentum, and a system that holds without constant intervention.
              </p>
            </div>

            <div className="md:pt-12">
              <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
                This typically includes
              </p>
              <ul className="space-y-4">
                {[
                  'Roles & ownership',
                  'Decision flow',
                  'Priorities & rhythms',
                  'Tools & systems',
                  'Execution clarity'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-primary py-3 border-b border-studio-divider last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-section-lg bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
            Who We Work With
          </p>
          <h2 className="text-h1 text-content-heading mb-4">
            This Work Is For People Who Already Have Something Real
          </h2>
          <p className="text-body text-content-secondary mb-16 max-w-prose">
            Not starting from scratch — restructuring what exists.
          </p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <h3 className="text-h3 text-content-heading mb-4">Founders</h3>
              <ul className="space-y-2 text-body-sm text-content-secondary">
                <li>Founder-led businesses</li>
                <li>Solo operators</li>
                <li>Small teams in transition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 text-content-heading mb-4">Creators</h3>
              <ul className="space-y-2 text-body-sm text-content-secondary">
                <li>Artists with complex practices</li>
                <li>Creative professionals</li>
                <li>Independent practitioners</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 text-content-heading mb-4">Projects</h3>
              <ul className="space-y-2 text-body-sm text-content-secondary">
                <li>Outgrown original structure</li>
                <li>Restructuring, not starting</li>
                <li>Sustainability over heroics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-section-lg">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
              The Process
            </p>
            <h2 className="text-h1 text-content-heading mb-6">
              How We Work
            </h2>
            <p className="text-body text-content-secondary leading-relaxed">
              Engagements are focused, relational, and hands-on. There are no public programs, funnels, or fixed packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: '01', title: 'Diagnosis', desc: 'Understanding where and why the system stopped working' },
              { num: '02', title: 'Redesign', desc: 'Roles, decision flow, structure, tools' },
              { num: '03', title: 'Stabilisation', desc: 'So the system holds without constant oversight' }
            ].map((step, i) => (
              <div key={i} className="py-8 border-t-2 border-studio-divider">
                <span className="text-meta text-accent font-medium">{step.num}</span>
                <h3 className="text-h3 text-content-heading mt-4 mb-3">{step.title}</h3>
                <p className="text-body-sm text-content-secondary">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-body text-content-primary mt-16 max-w-prose">
            We step in where it matters, do the work, and step back.
          </p>
        </div>
      </section>

      {/* LIVING SYSTEMS — With diagram */}
      <section className="py-section-lg bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
                Philosophy
              </p>
              <h2 className="text-h1 text-content-heading mb-8">
                Living Systems
              </h2>

              <p className="text-body text-content-primary leading-relaxed mb-8">
                We treat organizations and creative practices as living systems, not machines.
              </p>

              <ul className="space-y-4">
                {[
                  'Structure must reflect reality, not theory',
                  'Authority must be explicit to reduce friction',
                  'Systems should lower cognitive load, not increase it',
                  'Good design removes the need for constant firefighting'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-secondary flex items-start gap-4">
                    <span className="text-accent mt-1.5 text-sm">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-body text-content-primary mt-10">
                When structure fits the people inside it, momentum returns naturally.
              </p>
            </div>

            {/* Systems Diagram */}
            <div className="flex justify-center">
              <SystemsDiagram className="w-full max-w-md text-content-secondary opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE STUDIO */}
      <section id="about" className="py-section-lg">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
              The Studio
            </p>
            <h2 className="text-h1 text-content-heading mb-8">
              About Astral Integration
            </h2>

            <p className="text-body text-content-primary leading-relaxed mb-6">
              Founded by a systems architect working at the intersection of people, work, and technology.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-10">
              The studio exists to support moments when growth outpaces structure, complexity breaks coherence, responsibility concentrates too heavily, or execution slows despite effort.
            </p>

            <p className="text-body-sm text-content-tertiary">
              The work is intentionally limited in scope and scale, and happens primarily by trust and referral.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-section-lg bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <h2 className="text-h1 text-content-heading mb-8">
              Working Together
            </h2>

            <p className="text-body text-content-secondary leading-relaxed mb-4">
              If you're exploring working together, reach out with what you're building or holding, where things feel stuck or brittle, and why this moment matters.
            </p>

            <p className="text-body text-content-primary mb-12">
              If it's a fit, we'll define the next step.
            </p>

            {/* Contact Form */}
            {formStatus !== 'success' ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body-sm text-content-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent transition-colors ${
                      formErrors.name ? 'border-red-400' : 'border-studio-divider'
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-1 text-body-sm text-red-500">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-sm text-content-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent transition-colors ${
                      formErrors.email ? 'border-red-400' : 'border-studio-divider'
                    }`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && <p className="mt-1 text-body-sm text-red-500">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm text-content-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white border text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent transition-colors resize-none ${
                      formErrors.message ? 'border-red-400' : 'border-studio-divider'
                    }`}
                    placeholder="What are you building? Where do things feel stuck?"
                  />
                  {formErrors.message && <p className="mt-1 text-body-sm text-red-500">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-8 py-3 bg-content-primary text-white hover:bg-accent transition-colors text-body-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Send'}
                </button>
              </form>
            ) : (
              <div className="py-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <p className="text-body text-content-primary">Message received</p>
                </div>
                <p className="text-body-sm text-content-secondary mb-6">
                  We'll respond within 24-48 hours.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-body-sm text-accent hover:text-accent-hover transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-studio-divider">
              <p className="text-body-sm text-content-tertiary">
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
