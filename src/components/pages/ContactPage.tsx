import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Full-Screen Opening */}
      <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-cosmic-900/90 via-indigo-deep/80 to-black/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="text-5xl mb-8 text-sacred-gold animate-breathe opacity-60">⊹</div>
              <h1 className="text-5xl md:text-7xl font-serif text-sacred-moon mb-8 font-light">
                Let's Connect
              </h1>
              <p className="text-xl text-sacred-moon/80 font-light">
                Tell me where you are. Tell me what you're looking for.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-cosmic-900/30 backdrop-blur-xl border border-sacred-moon/10 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sacred-moon/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-cosmic-900/50 border border-sacred-moon/20 rounded-lg text-sacred-moon placeholder-sacred-moon/40 focus:outline-none focus:border-sacred-gold/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sacred-moon/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-cosmic-900/50 border border-sacred-moon/20 rounded-lg text-sacred-moon placeholder-sacred-moon/40 focus:outline-none focus:border-sacred-gold/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-sacred-moon/80 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-cosmic-900/50 border border-sacred-moon/20 rounded-lg text-sacred-moon focus:outline-none focus:border-sacred-gold/50 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="1:1 Work">1:1 Deep Work</option>
                    <option value="Sacred Circles">Sacred Circles</option>
                    <option value="Medicine Work">Medicine Journeys</option>
                    <option value="Retreats">Retreats</option>
                    <option value="Inner Ascend">Inner Ascend Community</option>
                    <option value="Trainings">Facilitator Training</option>
                    <option value="General">Just saying hello</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sacred-moon/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cosmic-900/50 border border-sacred-moon/20 rounded-lg text-sacred-moon placeholder-sacred-moon/40 focus:outline-none focus:border-sacred-gold/50 transition-colors resize-none"
                    placeholder="Where are you on your journey? What are you seeking?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-sacred-gold text-cosmic-900 rounded-full font-medium hover:bg-sacred-glow transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : status === 'success' ? (
                    <span>Message sent ✓</span>
                  ) : status === 'error' ? (
                    <span>Error - Please try again</span>
                  ) : (
                    <span>Send message</span>
                  )}
                </button>
              </form>

              {/* Contact Details */}
              <div className="mt-12 pt-12 border-t border-sacred-moon/10 space-y-6 text-center">
                <div>
                  <p className="text-sm text-sacred-moon/60 mb-1">Email</p>
                  <a
                    href="mailto:hello@astral-integration.com"
                    className="text-sacred-gold hover:text-sacred-glow transition-colors"
                  >
                    hello@astral-integration.com
                  </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-sacred-gold mb-1">Mazunte, Mexico</p>
                    <p className="text-sacred-moon/60">Retreats & ceremonies</p>
                  </div>
                  <div>
                    <p className="text-sacred-gold mb-1">Barcelona, Spain</p>
                    <p className="text-sacred-moon/60">1:1 sessions & European retreats</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://instagram.com/astralintegration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sacred-moon/70 hover:text-sacred-gold transition-colors text-sm"
                  >
                    @astralintegration
                  </a>
                </div>

                <p className="text-xs text-sacred-moon/50 italic pt-4">
                  I respond to every message personally. Typically within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
