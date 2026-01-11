import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { contactContent } from '../../content';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Astral Integration';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
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
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
      <section className="min-h-[60vh] flex items-center">
        <div className="max-w-content mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-content-primary mb-8">
              {contactContent.hero.title}
            </h1>

            <p className="text-h2 md:text-h1 text-content-primary font-medium mb-12 max-w-2xl">
              {contactContent.hero.subtitle}
            </p>

            <p className="text-body text-content-secondary leading-relaxed max-w-prose">
              {contactContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-28 md:py-36 bg-studio-bgAlt">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              {contactContent.form.headline}
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              {contactContent.form.description}
            </p>

            <ul className="space-y-3 mb-12">
              {contactContent.form.prompts.map((prompt, i) => (
                <li key={i} className="text-body text-content-secondary flex items-start gap-3">
                  <span className="text-accent mt-1.5 text-sm">·</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-content-primary font-medium mb-12">
              {contactContent.form.note}
            </p>

            {formStatus !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-body-sm text-content-tertiary mb-3">
                      {contactContent.form.fields.name.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-5 py-4 bg-studio-bg border text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                        formErrors.name ? 'border-red-400' : 'border-studio-divider'
                      }`}
                      placeholder={contactContent.form.fields.name.placeholder}
                    />
                    {formErrors.name && <p className="mt-2 text-body-sm text-red-400">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-body-sm text-content-tertiary mb-3">
                      {contactContent.form.fields.email.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-5 py-4 bg-studio-bg border text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                        formErrors.email ? 'border-red-400' : 'border-studio-divider'
                      }`}
                      placeholder={contactContent.form.fields.email.placeholder}
                    />
                    {formErrors.email && <p className="mt-2 text-body-sm text-red-400">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-body-sm text-content-tertiary mb-3">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 bg-studio-bg border border-studio-divider text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-body-sm text-content-tertiary mb-3">
                    {contactContent.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className={`w-full px-5 py-4 bg-studio-bg border text-content-primary placeholder-content-tertiary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none ${
                      formErrors.message ? 'border-red-400' : 'border-studio-divider'
                    }`}
                    placeholder={contactContent.form.fields.message.placeholder}
                  />
                  {formErrors.message && <p className="mt-2 text-body-sm text-red-400">{formErrors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-content-primary/50 focus:ring-offset-2 focus:ring-offset-studio-bgAlt"
                >
                  {formStatus === 'sending' ? contactContent.form.sending : formStatus === 'error' ? 'Error - try again' : contactContent.form.submit}
                </button>
              </form>
            ) : (
              <div className="py-16 px-8 bg-studio-bg border border-studio-divider text-center">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-6" />
                <h3 className="text-h2 text-content-primary mb-4">{contactContent.form.success.title}</h3>
                <p className="text-body text-content-secondary mb-3">
                  {contactContent.form.success.description}
                </p>
                <p className="text-body-sm text-content-tertiary">
                  {contactContent.form.success.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="py-28 md:py-36">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-prose">
            <p className="text-meta text-content-tertiary uppercase tracking-wider mb-6">
              Email Directly
            </p>

            <p className="text-body text-content-secondary leading-relaxed mb-8">
              Prefer email? Reach out directly at:
            </p>

            <a
              href="mailto:hello@astralintegration.co"
              className="inline-block px-10 py-4 bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 transition-colors text-body font-medium"
            >
              hello@astralintegration.co
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
