import { useState } from 'react';
import { Mail, MapPin, Instagram, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'public_key' // Replace with your EmailJS public key
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
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon">
      {/* Cosmic aurora background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>

      {/* Sacred geometry overlay */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-6 text-sacred-gold animate-breathe opacity-60">⊹</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-mystic-lavender/80 mb-8">
              Ready to begin your journey? Reach out and let's explore what's possible.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8">
                <h2 className="text-2xl font-serif font-bold text-mystic-lavender mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-mystic-lavender/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-cosmic-900/70 border border-mystic-lavender/30 rounded-lg text-sacred-moon placeholder-mystic-lavender/40 focus:outline-none focus:border-mystic-purple/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-mystic-lavender/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-cosmic-900/70 border border-mystic-lavender/30 rounded-lg text-sacred-moon placeholder-mystic-lavender/40 focus:outline-none focus:border-mystic-purple/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-mystic-lavender/80 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-cosmic-900/70 border border-mystic-lavender/30 rounded-lg text-sacred-moon focus:outline-none focus:border-mystic-purple/50 transition-colors"
                    >
                      <option value="">Select a topic...</option>
                      <option value="1:1 Sessions">1:1 Sessions</option>
                      <option value="Circles & Groups">Circles & Groups</option>
                      <option value="Medicine Work">Medicine Work</option>
                      <option value="Retreats">Retreats</option>
                      <option value="Trainings">Trainings</option>
                      <option value="Inner Ascend">Inner Ascend Community</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-mystic-lavender/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-cosmic-900/70 border border-mystic-lavender/30 rounded-lg text-sacred-moon placeholder-mystic-lavender/40 focus:outline-none focus:border-mystic-purple/50 transition-colors resize-none"
                      placeholder="Tell me about where you are and what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet text-sacred-moon rounded-2xl font-semibold hover:shadow-2xl hover:shadow-mystic-purple/50 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>Sending...</span>
                    ) : status === 'success' ? (
                      <span>Message Sent! ✓</span>
                    ) : status === 'error' ? (
                      <span>Error - Please try again</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Email */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:astral@innerascend.com"
                        className="text-mystic-lavender/80 hover:text-sacred-gold transition-colors"
                      >
                        astral@innerascend.com
                      </a>
                      <p className="text-mystic-lavender/60 text-sm mt-2">
                        I typically respond within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Locations
                      </h3>
                      <div className="space-y-2 text-mystic-lavender/80">
                        <div>
                          <div className="font-semibold text-sacred-gold">Mazunte, Mexico</div>
                          <div className="text-sm text-mystic-lavender/60">
                            Primary location for retreats & ceremonies
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="font-semibold text-sacred-gold">Barcelona, Spain</div>
                          <div className="text-sm text-mystic-lavender/60">
                            Available for 1:1 sessions & European retreats
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <Instagram className="w-6 h-6 text-sacred-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-mystic-lavender mb-2">
                        Follow the Journey
                      </h3>
                      <a
                        href="https://instagram.com/inner_ascend_dao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mystic-lavender/80 hover:text-sacred-gold transition-colors"
                      >
                        @inner_ascend_dao
                      </a>
                      <p className="text-mystic-lavender/60 text-sm mt-2">
                        Daily teachings, updates, and community connection
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-sacred-gold/10 backdrop-blur-xl border border-sacred-gold/30 rounded-2xl p-6">
                  <p className="text-mystic-lavender/90 leading-relaxed text-sm">
                    <strong className="text-sacred-gold">A note on response time:</strong> I hold space for
                    many souls and balance my time between sessions, ceremonies, and community. I read every
                    message personally and respond thoughtfully. If it's urgent, please mention that in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
