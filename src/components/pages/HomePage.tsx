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

      {/* HERO — Authority anchor with agency */}
      <section className="min-h-[95vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              Astral Integration
            </h1>

            {/* Signal line - stands alone, carries the emotional peak */}
            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              We redesign systems that no longer hold.
            </p>

            <p className="text-body md:text-lg text-content-primary leading-relaxed mb-10 max-w-prose">
              When growth breaks the structure that once worked, we redesign the operating system around people and work — so execution becomes clear again.
            </p>

            {/* Audience as metadata */}
            <p className="text-body-sm text-content-tertiary">
              For founders, leaders, and creators navigating transition, complexity, or scale.
            </p>
          </div>
        </div>
      </section>

      {/* THE SITUATION — Dark section for visual contrast (pause, not chapter) */}
      <section className="py-24 md:py-28 bg-[#232323]">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-white/50 uppercase tracking-wider mb-6">
              The Situation
            </p>
            <h2 className="text-h1 md:text-display-sm text-white mb-12">
              Why People Come to Us
            </h2>

            <p className="text-body text-white/80 leading-relaxed mb-14">
              Not because they lack vision, talent, or effort — but because the structure around their work no longer fits the reality they're living inside.
            </p>

            {/* 3 irreversible truths - structural, not emotional */}
            <ul className="space-y-6 mb-14">
              {[
                'The structure that worked no longer fits',
                'Responsibility has silently collapsed inward',
                'Execution now depends on heroics instead of structure'
              ].map((item, i) => (
                <li key={i} className="text-lg text-white/90 flex items-start gap-4">
                  <span className="text-accent-gold mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-body text-white font-medium">
              At this stage, pushing harder doesn't help. The system itself needs to change.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — Outcome first, then explanation */}
      <section id="services" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
                The Work
              </p>
              <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
                What We Do
              </h2>

              {/* Outcome first */}
              <p className="text-lg text-content-primary font-medium mb-8">
                We restore clarity, momentum, and structural integrity.
              </p>

              <p className="text-body text-content-secondary leading-relaxed">
                Rather than advice, coaching, or frameworks — we redesign the operating system around people and work until it holds without constant intervention.
              </p>
            </div>

            <div className="md:pt-16">
              <p className="text-meta text-content-tertiary uppercase tracking-wider mb-8">
                This typically includes
              </p>
              <ul className="space-y-0">
                {[
                  'Roles & ownership',
                  'Decision flow',
                  'Priorities & rhythms',
                  'Tools & systems',
                  'Execution clarity'
                ].map((item, i) => (
                  <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR — With exclusion */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
            Who We Work With
          </p>
          <h2 className="text-h1 md:text-display-sm text-content-primary mb-6">
            People Who Already Have Something Real
          </h2>
          <p className="text-body text-content-secondary mb-16 max-w-prose">
            Not starting from scratch — restructuring what exists.
          </p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
            <div>
              <h3 className="text-h3 text-content-primary mb-5">Founders</h3>
              <ul className="space-y-3 text-body-sm text-content-secondary">
                <li>Founder-led businesses</li>
                <li>Solo operators scaling</li>
                <li>Small teams in transition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Creators</h3>
              <ul className="space-y-3 text-body-sm text-content-secondary">
                <li>Artists with complex practices</li>
                <li>Creative professionals</li>
                <li>Independent practitioners</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Projects</h3>
              <ul className="space-y-3 text-body-sm text-content-secondary">
                <li>Outgrown original structure</li>
                <li>Restructuring, not starting</li>
                <li>Sustainability over heroics</li>
              </ul>
            </div>
          </div>

          {/* Exclusion line - lighter, boundary not pitch */}
          <p className="text-body-sm text-content-tertiary/70 border-t border-studio-divider pt-8">
            This is not for early-stage ideation, motivation, or therapy.
          </p>
        </div>
      </section>

      {/* HOW WE WORK — Emphasize diagnosis */}
      <section id="process" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-20">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              The Process
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-8">
              How We Work
            </h2>
            <p className="text-body text-content-secondary leading-relaxed">
              Engagements are focused, relational, and hands-on. There are no public programs, funnels, or fixed packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Diagnosis - emphasized */}
            <div className="py-10 border-t-2 border-content-primary">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-4">Diagnosis</h3>
              <p className="text-body text-content-secondary leading-relaxed">
                Understanding where and why the system stopped working. This is where the real value lives.
              </p>
            </div>

            {/* Redesign */}
            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Redesign</h3>
              <p className="text-body-sm text-content-secondary">
                Roles, decision flow, structure, tools
              </p>
            </div>

            {/* Stabilisation */}
            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Stabilisation</h3>
              <p className="text-body-sm text-content-secondary">
                So the system holds without constant oversight
              </p>
            </div>
          </div>

          <p className="text-lg text-content-primary font-medium mt-20 max-w-prose">
            We step in, redesign what's necessary, and step back.
          </p>
        </div>
      </section>

      {/* LIVING SYSTEMS — With applied example */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
                Philosophy
              </p>
              <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
                Living Systems
              </h2>

              <p className="text-body text-content-primary leading-relaxed mb-10">
                We treat organizations and creative practices as living systems, not machines.
              </p>

              {/* Applied example - emphasized, grounds the philosophy */}
              <p className="text-lg text-content-primary leading-relaxed mb-12 pl-6 border-l-2 border-content-primary">
                When authority is unclear, decisions slow. When decisions slow, responsibility collapses inward.
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

              <p className="text-lg text-content-primary font-medium mt-12">
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

      {/* ABOUT THE STUDIO — With context */}
      <section id="about" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              The Studio
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              About Astral Integration
            </h2>

            <p className="text-body text-content-primary leading-relaxed mb-8">
              Founded by a systems architect working at the intersection of people, work, and technology.
            </p>

            {/* Context line - more active */}
            <p className="text-body text-content-secondary leading-relaxed mb-8">
              The work comes from years designing systems across technology, creative practice, and founder-led organizations.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              The studio exists to support moments when growth outpaces structure, complexity breaks coherence, responsibility concentrates too heavily, or execution slows despite effort.
            </p>

            <p className="text-body-sm text-content-tertiary">
              The work is intentionally limited in scope and scale, and happens primarily by trust and referral.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT — Dark section */}
      <section id="contact" className="py-28 md:py-36 bg-[#232323]">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-white/50 uppercase tracking-wider mb-6">
              Get in Touch
            </p>
            <h2 className="text-h1 md:text-display-sm text-white mb-10">
              Working Together
            </h2>

            <p className="text-body text-white/70 leading-relaxed mb-6">
              If you're exploring working together, reach out with what you're building or holding, where things feel stuck or brittle, and why this moment matters.
            </p>

            <p className="text-body text-white/90 mb-14">
              If it's a fit, we'll define the next step.
            </p>

            {/* Contact Form - styled for dark bg */}
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
