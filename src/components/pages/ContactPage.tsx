import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';
import Footer from '../Footer';

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
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-[60vh] relative flex items-center justify-center bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10">
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="text-5xl mb-8 text-accent-gold/60 animate-breathe">⊹</div>
              <h1 className="text-5xl md:text-6xl font-serif text-text-heading mb-8 font-light">
                Let's Connect
              </h1>
              <p className="text-xl text-text-secondary font-light">
                Tell me where you are. Tell me what you're looking for.
              </p>
            </div>

            {/* Booking Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {/* Sacred Discovery Call */}
              <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-6">
                <div className="space-y-3">
                  <div className="text-2xl text-accent-gold">✦</div>
                  <h3 className="text-xl font-serif text-text-heading">Sacred Discovery Call</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A 30-minute soul connection to explore if we're meant to journey together
                  </p>
                  <div className="pt-2">
                    <span className="text-accent-gold font-medium">Complimentary</span>
                  </div>
                </div>
              </div>

              {/* Quantum Leap Intensive */}
              <div className="bg-warm-white/80 backdrop-blur-md border border-accent-gold/30 rounded-2xl p-6">
                <div className="space-y-3">
                  <div className="text-2xl text-accent-gold">✧</div>
                  <h3 className="text-xl font-serif text-text-heading">Quantum Leap Intensive</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    3-month deep dive transformation container for serious initiates
                  </p>
                  <div className="pt-2">
                    <span className="text-accent-gold font-medium">Premium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Message */}
            <div className="text-center mb-12">
              <p className="text-sm text-text-secondary/80 italic">
                Only 4 soul work spots available this month
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-warm-cream/50 backdrop-blur-md border border-text-primary/10 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-text-primary/20 rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-text-primary/20 rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-warm-white border border-text-primary/20 rounded-lg text-text-primary focus:outline-none focus:border-accent-gold/50 transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="1:1 Work">1:1 Deep Work</option>
                    <option value="Sacred Circles">Sacred Circles</option>
                    <option value="Medicine Work">Medicine Journeys</option>
                    <option value="Retreats">Retreats</option>
                    <option value="Inner Ascend">Inner Ascend Community</option>
                    <option value="Trainings">Facilitator Training</option>
                    <option value="Collaborations">Collaborations</option>
                    <option value="Other">Other / Just Connecting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Tell me about your journey
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-warm-white border border-text-primary/20 rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors resize-none"
                    placeholder="Where are you now? What are you seeking? What's calling you to this work?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message sent ✓' : status === 'error' ? 'Error - please try again' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-center text-accent-gold text-sm">
                    Thank you. I'll respond within 48 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
