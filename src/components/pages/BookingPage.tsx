import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { CheckCircle } from 'lucide-react';

type ServiceType = 'discovery' | 'single' | 'mentorship';

interface BookingFormData {
  name: string;
  email: string;
  service: ServiceType | '';
  timezone: string;
  availability: string;
  about: string;
  questions: string;
}

const SERVICE_OPTIONS = [
  {
    id: 'discovery' as ServiceType,
    title: 'Free Discovery Call',
    price: '€0',
    duration: '30 minutes',
    description: 'A gentle space to understand your needs and see if we\'re a good fit.'
  },
  {
    id: 'single' as ServiceType,
    title: 'Single Integration Session',
    price: '€80-150',
    duration: '60 minutes',
    description: 'Processing a ceremony, navigating a transition, energy clearing, or exploring deeper work.'
  },
  {
    id: 'mentorship' as ServiceType,
    title: '3-Month Mentorship Container',
    price: '€800-1,200',
    duration: '12 sessions',
    description: 'The container where real transformation happens. Includes voice support and personalized practices.'
  }
];

const BookingPage = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    service: '',
    timezone: '',
    availability: '',
    about: '',
    questions: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceSelect = (serviceId: ServiceType) => {
    setFormData(prev => ({
      ...prev,
      service: serviceId
    }));
  };

  const selectedService = SERVICE_OPTIONS.find(s => s.id === formData.service);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) return;

    setFormStatus('sending');

    const formattedMessage = `
BOOKING REQUEST

=== SERVICE ===
${selectedService?.title}
${selectedService?.price} • ${selectedService?.duration}

=== CONTACT INFO ===
Name: ${formData.name}
Email: ${formData.email}
Timezone: ${formData.timezone}

=== AVAILABILITY ===
${formData.availability}

=== ABOUT YOU ===
${formData.about}

=== QUESTIONS ===
${formData.questions || 'None'}
    `;

    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Booking Request: ${selectedService?.title}`,
          message: formattedMessage,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="min-h-screen bg-warm-white">
        <Navigation />
        <div className="pt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-accent-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-accent-sage" />
              </div>
              <h1 className="text-4xl font-serif text-text-heading mb-6">
                Request Received
              </h1>
              <p className="text-xl text-text-secondary mb-4">
                Thank you for reaching out.
              </p>
              <p className="text-text-secondary/80 leading-relaxed mb-8">
                I'll review your request and get back to you within 24-48 hours to confirm your booking or suggest available times.
              </p>
              <a
                href="/"
                className="inline-block mt-8 px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Book a Session
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Select a service, share your availability, and I'll get back to you to confirm.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Service Selection */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-text-heading">1. Choose Your Service</h2>
                <div className="space-y-4">
                  {SERVICE_OPTIONS.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.service === service.id
                          ? 'border-accent-gold bg-accent-gold/5'
                          : 'border-accent-gold/20 bg-warm-cream/30 hover:border-accent-gold/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-text-heading">{service.title}</h3>
                          <p className="text-accent-gold font-medium">{service.price}</p>
                          <p className="text-sm text-text-secondary/70">{service.duration}</p>
                          <p className="text-sm text-text-secondary mt-2">{service.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          formData.service === service.id
                            ? 'border-accent-gold bg-accent-gold'
                            : 'border-accent-gold/30'
                        }`}>
                          {formData.service === service.id && (
                            <div className="w-2 h-2 bg-warm-white rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-6">
                <h2 className="text-2xl font-serif text-text-heading">2. Your Details</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                    />
                  </div>
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">Your Timezone *</label>
                  <input
                    type="text"
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. CET (Barcelona), GMT (London), CST (Mexico City)"
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-6">
                <h2 className="text-2xl font-serif text-text-heading">3. Availability</h2>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    When are you generally available? *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    Share days and times that work for you (e.g. "Weekday mornings, Tuesday/Thursday afternoons")
                  </p>
                  <textarea
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="I'm available..."
                  />
                </div>
              </div>

              {/* About You */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-6">
                <h2 className="text-2xl font-serif text-text-heading">4. A Little About You</h2>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    What brings you to this work? *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    A brief sense of where you are and what you're hoping to explore
                  </p>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Share a bit about yourself and what's calling you to this work..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    Any questions for me?
                  </label>
                  <textarea
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Optional"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending' || !formData.service}
                  className="px-12 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Request Booking'}
                </button>

                {!formData.service && (
                  <p className="mt-4 text-text-secondary/60 text-sm">
                    Please select a service above
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="mt-4 text-red-600">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </div>

            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
