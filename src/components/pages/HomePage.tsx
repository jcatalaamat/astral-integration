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
            <p className="text-body text-content-secondary mb-8">
              A Living Systems Studio
            </p>

            <p className="text-h1 md:text-display-sm text-content-primary font-medium mb-16 max-w-2xl">
              We redesign systems that no longer hold — and help them take form in the world.
            </p>

            <p className="text-body-sm text-content-tertiary">
              For founders, creators, and real-world practices whose work has outgrown the structure, tools, or digital layer that once supported it.
            </p>
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className="py-24 md:py-28 bg-[#232323]">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-white/50 uppercase tracking-wider mb-6">
              The Situation
            </p>
            <h2 className="text-h1 md:text-display-sm text-white mb-12">
              When the Work Is Real — but the System Isn't Holding
            </h2>

            <p className="text-body text-white/80 leading-relaxed mb-14">
              People don't come here because they lack vision, talent, or effort.
            </p>

            <p className="text-body text-white/80 leading-relaxed mb-14">
              They come because something real already exists — a business, a creative practice, a restaurant, a body of work — and the structure around it no longer fits the reality it has grown into.
            </p>

            <p className="text-body text-white/70 leading-relaxed mb-6">
              Often this shows up as:
            </p>

            <ul className="space-y-6 mb-14">
              {[
                'Responsibility silently collapsing into one person',
                'Decisions slowing or becoming emotionally loaded',
                'Digital tools, websites, or systems feeling brittle or misaligned',
                'Execution requiring constant heroics instead of flow'
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

      {/* WHAT WE DO */}
      <section id="services" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose mb-16">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              The Work
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              What We Do
            </h2>

            <p className="text-lg text-content-primary font-medium mb-8">
              Astral Integration steps in to restore clarity, coherence, and structural integrity.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-10">
              We don't offer advice, coaching, or generic frameworks. We redesign the operating system around people and work — until it holds without constant intervention.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-6">
              In practice, this often includes:
            </p>

            <ul className="space-y-0 mb-12">
              {[
                'Clarifying roles, ownership, and authority',
                'Redesigning decision flow and execution rhythms',
                'Simplifying tools and reducing cognitive load',
                'Designing and assembling the digital layer when it is structurally relevant — websites, apps, tools, content systems',
                'Coordinating the right collaborators (designers, developers, photographers, specialists) when needed'
              ].map((item, i) => (
                <li key={i} className="text-body text-content-primary py-4 border-b border-studio-divider last:border-b-0">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium">
              The goal is not polish or optimisation. The goal is a system that fits reality and can carry the work forward.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
            Who We Work With
          </p>
          <h2 className="text-h1 md:text-display-sm text-content-primary mb-6">
            People Who Already Have Something Real
          </h2>
          <p className="text-body text-content-secondary mb-16 max-w-prose">
            This is not for early-stage ideation, motivation, or therapy.
          </p>

          <p className="text-body text-content-secondary mb-12 max-w-prose">
            We work with people and practices that already exist — and need to be restructured, not invented.
          </p>

          <p className="text-body text-content-secondary mb-10 max-w-prose">
            This often includes:
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-12">
            <div>
              <h3 className="text-h3 text-content-primary mb-5">Founders & founder-led businesses</h3>
              <p className="text-body-sm text-content-secondary">
                When growth, complexity, or responsibility has outpaced structure.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Creators & artists</h3>
              <p className="text-body-sm text-content-secondary">
                Whose work is strong, but whose digital presence, systems, or presentation no longer reflects its quality.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Independent operators & small teams</h3>
              <p className="text-body-sm text-content-secondary">
                In transition, scale, or redefinition.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-content-primary mb-5">Real-world practices</h3>
              <p className="text-body-sm text-content-secondary">
                Such as studios, restaurants, or spaces where the lived experience is strong, but the digital layer is weak, fragmented, or misaligned.
              </p>
            </div>
          </div>

          <p className="text-body text-content-primary font-medium max-w-prose">
            The common thread is not industry — it's that the work is alive, but the system around it is no longer supporting it.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
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
            {/* Diagnosis */}
            <div className="py-10 border-t-2 border-content-primary">
              <span className="text-meta text-accent font-medium">01</span>
              <h3 className="text-h2 text-content-primary mt-5 mb-4">Diagnosis</h3>
              <p className="text-body text-content-secondary leading-relaxed mb-6">
                We understand where and why the system stopped working.
              </p>
              <p className="text-body-sm text-content-primary">
                This is where most of the value lives.
              </p>
            </div>

            {/* Redesign */}
            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">02</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Redesign</h3>
              <p className="text-body-sm text-content-secondary">
                Roles, authority, decision flow, tools, and — when needed — digital infrastructure.
              </p>
            </div>

            {/* Stabilisation */}
            <div className="py-10 border-t-2 border-studio-divider">
              <span className="text-meta text-accent font-medium">03</span>
              <h3 className="text-h3 text-content-primary mt-5 mb-4">Stabilisation</h3>
              <p className="text-body-sm text-content-secondary">
                So the system holds without constant oversight.
              </p>
            </div>
          </div>

          <p className="text-lg text-content-primary font-medium mt-20 max-w-prose">
            We step in, redesign what's necessary, and step back.
          </p>
        </div>
      </section>

      {/* LIVING SYSTEMS */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Philosophy
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Living Systems, Not Machines
            </h2>

            <p className="text-body text-content-primary leading-relaxed mb-10">
              We treat organizations and creative practices as living systems of people, authority, decisions, and tools.
            </p>

            {/* Applied example */}
            <p className="text-lg text-content-primary leading-relaxed mb-12 pl-6 border-l-2 border-content-primary">
              When authority is unclear, decisions slow. When decisions slow, responsibility collapses inward. When structure doesn't reflect reality, friction multiplies.
            </p>

            <p className="text-body text-content-secondary mb-6">
              We work by a few simple principles:
            </p>

            <ul className="space-y-4 mb-12">
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

            <p className="text-lg text-content-primary font-medium">
              When structure fits the people inside it, momentum returns naturally.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT THE STUDIO */}
      <section id="about" className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              About the Studio
            </p>
            <h2 className="text-h1 md:text-display-sm text-content-primary mb-10">
              Astral Integration
            </h2>

            <p className="text-body text-content-primary leading-relaxed mb-8">
              Astral Integration was founded by a systems architect working at the intersection of people, work, and technology.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              The work is shaped by years designing systems across founder-led organizations, creative practices, and technology — and by stepping into moments where growth, change, or complexity broke coherence.
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-12">
              The studio exists to support inflection points — moments when something real needs to be reorganized so it can continue evolving.
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
