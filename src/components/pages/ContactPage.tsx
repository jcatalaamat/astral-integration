import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Clock, Instagram, ArrowRight, CheckCircle, Home, FileText } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select what you are interested in';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field blur for real-time validation
  const handleBlur = (field: string) => {
    const newErrors: Record<string, string> = { ...errors };

    switch (field) {
      case 'name':
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'subject':
        if (!formData.subject) {
          newErrors.subject = 'Please select what you are interested in';
        } else {
          delete newErrors.subject;
        }
        break;
      case 'message':
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      // TODO: Add reCAPTCHA verification here
      // To enable reCAPTCHA protection:
      // 1. Install: npm install react-google-recaptcha-v3
      // 2. Get reCAPTCHA site key from: https://www.google.com/recaptcha/admin
      // 3. Wrap App with GoogleReCaptchaProvider in main.tsx
      // 4. Use useGoogleReCaptcha hook to get executeRecaptcha
      // 5. Call: const token = await executeRecaptcha('contact_form');
      // 6. Verify token on backend before sending email
      // Example implementation:
      // const { executeRecaptcha } = useGoogleReCaptcha();
      // if (executeRecaptcha) {
      //   const token = await executeRecaptcha('contact_form');
      //   // Verify token with your backend
      // }

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
      setErrors({});
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // Newsletter submission handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
      return;
    }

    setNewsletterStatus('loading');

    try {
      const convertKitApiKey = 'WL4dvqOgWKNB2eq6RLOflQ';
      const convertKitFormId = '8630317';

      const response = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: convertKitApiKey,
          email: newsletterEmail,
          tags: ['astral-integration-contact-page']
        })
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <div className="min-h-[60vh] relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/contact/hero.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/30 via-warm-peach/40 to-accent-sage/30"></div>
        </div>
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

            {/* Contact Details Section */}
            <div className="bg-warm-cream/50 backdrop-blur-md border border-text-primary/10 rounded-2xl p-8 md:p-12 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif text-text-heading mb-2">Get in Touch</h2>
                <p className="text-text-secondary">I'm here to support your journey</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Email</h3>
                    <a
                      href="mailto:hello@astral-integration.com"
                      className="text-text-secondary hover:text-accent-gold transition-colors"
                    >
                      hello@astral-integration.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Response Time</h3>
                    <p className="text-text-secondary">I respond personally within 24-48 hours</p>
                  </div>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Locations</h3>
                    <p className="text-text-secondary">Barcelona, Spain</p>
                    <p className="text-text-secondary">Mazunte, Mexico</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/astralintegration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-gold transition-colors"
                    >
                      @astralintegration
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-warm-cream/50 backdrop-blur-md border border-text-primary/10 rounded-2xl p-8 md:p-12">
              {status !== 'success' ? (
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
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors ${
                        errors.name ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
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
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors ${
                        errors.email ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onBlur={() => handleBlur('subject')}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary focus:outline-none focus:border-accent-gold/50 transition-colors ${
                        errors.subject ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                    >
                      <option value="">Select...</option>
                      <option value="1:1 Work">1:1 Deep Work</option>
                      <option value="Sacred Circles">Sacred Circles</option>
                      <option value="Medicine Work">Medicine Journeys</option>
                      <option value="Trainings">Facilitator Training</option>
                      <option value="Collaborations">Collaborations</option>
                      <option value="Other">Other / Just Connecting</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Tell me about your journey
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onBlur={() => handleBlur('message')}
                      rows={6}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                      placeholder="Where are you now? What are you seeking? What's calling you to this work?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : status === 'error' ? 'Error - please try again' : 'Send Message'}
                  </button>
                </form>
              ) : (
                // Enhanced Success Message
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/10 rounded-full mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-accent-gold" />
                  </div>

                  <h3 className="text-3xl font-serif text-text-heading mb-4">
                    Message Received
                  </h3>

                  <div className="max-w-md mx-auto space-y-4 mb-8">
                    <p className="text-text-secondary">
                      Thank you for reaching out. Your message has been received and I'm excited to connect with you.
                    </p>

                    <div className="bg-accent-gold/5 rounded-lg p-4 border border-accent-gold/20">
                      <div className="flex items-center justify-center gap-2 text-accent-gold mb-2">
                        <Clock className="w-5 h-5" />
                        <span className="font-medium">What happens next?</span>
                      </div>
                      <p className="text-text-secondary text-sm">
                        I personally respond to every message within 24-48 hours. Keep an eye on your inbox for my reply.
                      </p>
                    </div>

                    <p className="text-text-secondary text-sm">
                      In the meantime, feel free to explore my resources or connect with me on Instagram.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                    >
                      <Home className="w-5 h-5" />
                      Return Home
                    </button>
                    <a
                      href="/resources"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-warm-white border border-accent-gold/30 text-accent-gold rounded-full hover:bg-accent-gold/5 transition-colors font-medium"
                    >
                      <FileText className="w-5 h-5" />
                      View Resources
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-warm-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-3xl mb-4 text-accent-gold/60">✧</div>
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading mb-4">
                Stay Connected
              </h2>
              <p className="text-text-secondary">
                Receive inspiration, teachings, and updates on upcoming offerings directly to your inbox.
              </p>
            </div>

            {newsletterStatus !== 'success' ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 bg-warm-white border border-text-primary/20 rounded-full text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {newsletterStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-warm-white/30 border-t-warm-white rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                {newsletterStatus === 'error' && (
                  <p className="text-center text-red-500 text-sm mt-3">
                    Please enter a valid email address
                  </p>
                )}
                <p className="text-center text-text-secondary text-xs mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center max-w-md mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/10 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="text-2xl font-serif text-text-heading mb-2">
                  Welcome to the Circle
                </h3>
                <p className="text-text-secondary">
                  Check your email to confirm your subscription.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
