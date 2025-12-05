import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { CheckCircle } from 'lucide-react';

interface ScreeningFormData {
  name: string;
  email: string;
  age: string;
  location: string;
  q1_calling: string;
  q2_medicine_experience: string;
  q3_medical_conditions: string;
  q4_medications: string;
  q5_mental_health_history: string;
  q6_current_state: string;
  q7_life_stress: string;
  q8_intention: string;
  q9_anxiety: string;
  q10_support: string;
  q11_additional: string;
}

const BufoScreeningPage = () => {
  const [formData, setFormData] = useState<ScreeningFormData>({
    name: '',
    email: '',
    age: '',
    location: '',
    q1_calling: '',
    q2_medicine_experience: '',
    q3_medical_conditions: '',
    q4_medications: '',
    q5_mental_health_history: '',
    q6_current_state: '',
    q7_life_stress: '',
    q8_intention: '',
    q9_anxiety: '',
    q10_support: '',
    q11_additional: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Format the screening answers into a readable message
    const formattedMessage = `
BUFO ALVARIUS SCREENING SUBMISSION

=== BASIC INFORMATION ===
Name: ${formData.name}
Email: ${formData.email}
Age: ${formData.age}
Location: ${formData.location}

=== SCREENING QUESTIONS ===

1. What is calling you to this experience right now?
${formData.q1_calling}

2. Have you worked with any plant medicines or psychedelics before?
${formData.q2_medicine_experience}

3. Do you have any medical conditions? (Heart, blood pressure, asthma, neurological)
${formData.q3_medical_conditions}

4. Are you currently taking any medications? (SSRIs, MAOIs, antidepressants, antipsychotics, benzodiazepines)
${formData.q4_medications}

5. Any history of bipolar, schizophrenia, psychosis, or hospitalization?
${formData.q5_mental_health_history}

6. How has your mental/emotional state been in the last 3 months?
${formData.q6_current_state}

7. Are you currently going through major life stress? (breakup, death, trauma, depression)
${formData.q7_life_stress}

8. What is your intention for this journey?
${formData.q8_intention}

9. Have you ever had panic attacks or strong anxiety?
${formData.q9_anxiety}

10. Do you feel grounded and supported in your life right now?
${formData.q10_support}

11. Anything else you'd like to share?
${formData.q11_additional}
    `;

    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Bufo Screening Submission',
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
                Thank You
              </h1>
              <p className="text-xl text-text-secondary mb-4">
                Your screening has been received.
              </p>
              <p className="text-text-secondary/80 leading-relaxed mb-4">
                I'll review your answers carefully and get back to you within 48 hours.
                This is a sacred process, and I take the time to feel into each application with presence and care.
              </p>
              <p className="text-text-secondary/70 leading-relaxed mb-8">
                If we move forward, I'll send you a consent and liability form to complete before we schedule preparation sessions.
              </p>
              <p className="text-text-secondary/60 italic">
                In the meantime, trust your journey.
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
              Bufo Alvarius Screening
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-4">
              Thank you for your interest in this sacred work.
            </p>
            <p className="text-text-secondary/80 leading-relaxed">
              Before we go further, I always begin with a screening to understand your medical background,
              current emotional state, and what's calling you to this journey. This medicine is powerful
              and not for everyone — safety and alignment come first.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Basic Info */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-6">
                <h2 className="text-2xl font-serif text-text-heading mb-4">Basic Information</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Full Name *</label>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="18"
                      className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                    />
                  </div>
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Location (City, Country) *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                    />
                  </div>
                </div>
              </div>

              {/* Screening Questions */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-8">
                <h2 className="text-2xl font-serif text-text-heading mb-4">Screening Questions</h2>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    1. What is calling you to this experience right now? *
                  </label>
                  <textarea
                    name="q1_calling"
                    value={formData.q1_calling}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Share what's drawing you to this work..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    2. Have you worked with any plant medicines or psychedelics before? *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    (Ayahuasca, psilocybin, LSD, MDMA, ketamine, Bufo, etc.)
                  </p>
                  <textarea
                    name="q2_medicine_experience"
                    value={formData.q2_medicine_experience}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="If yes, please describe your experiences..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    3. Do you have any medical conditions? *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    (Heart conditions, high blood pressure, asthma, neurological conditions, etc.)
                  </p>
                  <textarea
                    name="q3_medical_conditions"
                    value={formData.q3_medical_conditions}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Please list any medical conditions or write 'None'..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    4. Are you currently taking any medications? *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    Especially: SSRIs, MAOIs, antidepressants, antipsychotics, benzodiazepines
                  </p>
                  <textarea
                    name="q4_medications"
                    value={formData.q4_medications}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Please list all current medications or write 'None'..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    5. Any history of bipolar, schizophrenia, psychosis, or psychiatric hospitalization? *
                  </label>
                  <textarea
                    name="q5_mental_health_history"
                    value={formData.q5_mental_health_history}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Please share any relevant history or write 'No'..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    6. How has your mental/emotional state been in the last 3 months? *
                  </label>
                  <textarea
                    name="q6_current_state"
                    value={formData.q6_current_state}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Describe your recent emotional and mental state..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    7. Are you currently going through major life stress? *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    (Recent breakup, death of loved one, trauma, depression, job loss, etc.)
                  </p>
                  <textarea
                    name="q7_life_stress"
                    value={formData.q7_life_stress}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Share any significant life events or stressors..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    8. What is your intention for this journey? *
                  </label>
                  <textarea
                    name="q8_intention"
                    value={formData.q8_intention}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="What do you hope to explore, heal, or understand?"
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    9. Have you ever had panic attacks or strong anxiety? *
                  </label>
                  <textarea
                    name="q9_anxiety"
                    value={formData.q9_anxiety}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Describe any history with anxiety or panic..."
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    10. Do you feel grounded and supported in your life right now? *
                  </label>
                  <textarea
                    name="q10_support"
                    value={formData.q10_support}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Do you have a support system? Do you feel stable?"
                  />
                </div>

                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    11. Anything else you'd like to share?
                  </label>
                  <textarea
                    name="q11_additional"
                    value={formData.q11_additional}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white resize-none"
                    placeholder="Any additional context, questions, or things you want me to know..."
                  />
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-accent-terracotta/10 p-6 rounded-xl">
                <p className="text-sm text-text-secondary leading-relaxed">
                  <strong className="text-text-heading">Important:</strong> This screening helps ensure your safety and readiness.
                  Bufo Alvarius is a powerful medicine with real contraindications. Honest answers protect both of us
                  and allow me to guide you properly. All information is kept strictly confidential.
                </p>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="px-12 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Submit Screening'}
                </button>

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

export default BufoScreeningPage;
