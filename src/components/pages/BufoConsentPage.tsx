import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface ConsentFormData {
  name: string;
  email: string;
  date: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  agreedToTerms: boolean;
  agreedToRisks: boolean;
  agreedToMedical: boolean;
  agreedToConfidentiality: boolean;
  agreedToMedia: boolean;
  agreedToVoluntary: boolean;
  signature: string;
}

const BufoConsentPage = () => {
  const [formData, setFormData] = useState<ConsentFormData>({
    name: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    emergencyContactName: '',
    emergencyContactPhone: '',
    agreedToTerms: false,
    agreedToRisks: false,
    agreedToMedical: false,
    agreedToConfidentiality: false,
    agreedToMedia: false,
    agreedToVoluntary: false,
    signature: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const allAgreementsChecked =
    formData.agreedToTerms &&
    formData.agreedToRisks &&
    formData.agreedToMedical &&
    formData.agreedToConfidentiality &&
    formData.agreedToMedia &&
    formData.agreedToVoluntary;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allAgreementsChecked || !formData.signature) return;

    setFormStatus('sending');

    const formattedMessage = `
BUFO ALVARIUS CONSENT & WAIVER - SIGNED

=== PARTICIPANT INFORMATION ===
Name: ${formData.name}
Email: ${formData.email}
Date Signed: ${formData.date}

=== EMERGENCY CONTACT ===
Name: ${formData.emergencyContactName}
Phone: ${formData.emergencyContactPhone}

=== AGREEMENTS ACKNOWLEDGED ===
✓ Terms & Nature of Experience: ${formData.agreedToTerms ? 'AGREED' : 'NOT AGREED'}
✓ Risks & Responsibilities: ${formData.agreedToRisks ? 'AGREED' : 'NOT AGREED'}
✓ Medical Disclosure: ${formData.agreedToMedical ? 'AGREED' : 'NOT AGREED'}
✓ Confidentiality: ${formData.agreedToConfidentiality ? 'AGREED' : 'NOT AGREED'}
✓ Media & Recording: ${formData.agreedToMedia ? 'AGREED' : 'NOT AGREED'}
✓ Voluntary Participation: ${formData.agreedToVoluntary ? 'AGREED' : 'NOT AGREED'}

=== DIGITAL SIGNATURE ===
${formData.signature}

=== TIMESTAMP ===
${new Date().toISOString()}
    `;

    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: 'Bufo Consent & Waiver - SIGNED',
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
                Consent Form Received
              </h1>
              <p className="text-xl text-text-secondary mb-4">
                Thank you for completing the consent and waiver.
              </p>
              <p className="text-text-secondary/80 leading-relaxed mb-8">
                Your signed consent has been recorded. I'll be in touch with the next steps for your ceremony preparation, including scheduling your preparation session and confirming location details.
              </p>
              <p className="text-text-secondary/60 italic mb-8">
                Please save a copy of this consent for your records.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
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
      <div className="pt-32 pb-12 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Consent & Liability Waiver
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Bufo Alvarius Ceremony
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Introduction */}
              <div className="bg-accent-terracotta/10 p-6 rounded-xl">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-accent-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-text-heading font-medium mb-2">Please Read Carefully</p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      This document outlines the nature of the Bufo Alvarius ceremony, associated risks, and your rights and responsibilities as a participant. By signing below, you acknowledge that you have read, understood, and agree to all terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1: Nature of Experience */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-text-heading">1. Nature of the Experience</h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    I understand that the Bufo Alvarius ceremony involves the use of 5-MeO-DMT, a naturally occurring psychoactive compound derived from the secretions of the Bufo Alvarius toad. This is a powerful entheogenic substance that can produce profound alterations in consciousness.
                  </p>
                  <p>
                    I understand that this ceremony is offered as a spiritual practice and personal growth experience. It is NOT a medical treatment, therapy, or substitute for professional mental health care.
                  </p>
                  <p>
                    I acknowledge that Astral (the facilitator) is not a medical doctor, psychiatrist, or licensed therapist, and does not diagnose, treat, or claim to cure any medical or psychological condition.
                  </p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-accent-gold/30 text-accent-gold focus:ring-accent-gold"
                  />
                  <span className="text-text-heading text-sm">
                    I have read and understand the nature of the Bufo Alvarius experience
                  </span>
                </label>
              </div>

              {/* Section 2: Risks */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-text-heading">2. Acknowledgment of Risks</h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    I understand that participation in this ceremony carries inherent risks, including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Intense emotional and psychological experiences</li>
                    <li>Temporary loss of motor control and bodily awareness</li>
                    <li>Temporary changes in perception, thought, and sense of self</li>
                    <li>Physical reactions such as nausea, vomiting, changes in heart rate or blood pressure</li>
                    <li>Re-emergence of past traumas or suppressed emotions</li>
                    <li>Rare but possible adverse psychological reactions</li>
                    <li>In extremely rare cases, medical emergencies</li>
                  </ul>
                  <p>
                    I accept full responsibility for my decision to participate and understand that the facilitator cannot guarantee any specific outcome or the absence of adverse effects.
                  </p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToRisks"
                    checked={formData.agreedToRisks}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-accent-gold/30 text-accent-gold focus:ring-accent-gold"
                  />
                  <span className="text-text-heading text-sm">
                    I acknowledge and accept the risks associated with this experience
                  </span>
                </label>
              </div>

              {/* Section 3: Medical Disclosure */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-text-heading">3. Medical Disclosure & Contraindications</h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    I confirm that I have disclosed all relevant medical and psychological information in my screening questionnaire, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>All current medications (especially SSRIs, MAOIs, antidepressants, antipsychotics)</li>
                    <li>Any history of heart conditions, high blood pressure, or cardiovascular issues</li>
                    <li>Any history of psychosis, schizophrenia, bipolar disorder, or psychiatric hospitalization</li>
                    <li>Current pregnancy or possibility of pregnancy</li>
                    <li>Any other physical or mental health conditions</li>
                  </ul>
                  <p>
                    I understand that withholding or falsifying medical information could result in serious harm to myself, and I release the facilitator from any liability resulting from undisclosed conditions.
                  </p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToMedical"
                    checked={formData.agreedToMedical}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-accent-gold/30 text-accent-gold focus:ring-accent-gold"
                  />
                  <span className="text-text-heading text-sm">
                    I confirm that I have truthfully disclosed all medical and psychological information
                  </span>
                </label>
              </div>

              {/* Section 4: Confidentiality */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-text-heading">4. Confidentiality</h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    I understand that my personal information, screening responses, and anything shared during sessions will be held in strict confidence by the facilitator.
                  </p>
                  <p>
                    I also agree to maintain confidentiality regarding:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The identity and personal information of any other participants (if applicable)</li>
                    <li>The specific location of the ceremony space</li>
                    <li>Any personal details shared by the facilitator</li>
                  </ul>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToConfidentiality"
                    checked={formData.agreedToConfidentiality}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-accent-gold/30 text-accent-gold focus:ring-accent-gold"
                  />
                  <span className="text-text-heading text-sm">
                    I agree to maintain confidentiality as described above
                  </span>
                </label>
              </div>

              {/* Section 5: Media */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-text-heading">5. Photography, Recording & Media</h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    I understand that no photography, video, or audio recording is permitted during the ceremony without explicit consent from all parties present.
                  </p>
                  <p>
                    I agree not to record, photograph, or share any media from the ceremony or ceremony space without prior written permission.
                  </p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToMedia"
                    checked={formData.agreedToMedia}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-accent-gold/30 text-accent-gold focus:ring-accent-gold"
                  />
                  <span className="text-text-heading text-sm">
                    I agree to the media and recording policy
                  </span>
                </label>
              </div>

              {/* Section 6: Voluntary Participation & Liability Release */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-4">
                <h2 className="text-xl font-serif text-text-heading">6. Voluntary Participation & Release of Liability</h2>
                <div className="text-sm text-text-secondary leading-relaxed space-y-3">
                  <p>
                    I confirm that my participation in this ceremony is entirely voluntary. I have not been coerced, pressured, or manipulated into participating.
                  </p>
                  <p>
                    I understand that I may withdraw my participation at any time before the ceremony begins. Once the medicine has been administered, the experience must be allowed to complete naturally.
                  </p>
                  <p>
                    <strong>Release of Liability:</strong> To the fullest extent permitted by law, I release, waive, and discharge Astral (the facilitator), and any assistants, from any and all liability, claims, demands, or causes of action that may arise from my participation in this ceremony.
                  </p>
                  <p>
                    This release applies to any injury, illness, damage, or loss—whether physical, psychological, emotional, or material—that may result from my participation, regardless of cause.
                  </p>
                </div>
                <label className="flex items-start gap-3 mt-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToVoluntary"
                    checked={formData.agreedToVoluntary}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-accent-gold/30 text-accent-gold focus:ring-accent-gold"
                  />
                  <span className="text-text-heading text-sm">
                    I confirm my voluntary participation and release of liability
                  </span>
                </label>
              </div>

              {/* Emergency Contact */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-6">
                <h2 className="text-xl font-serif text-text-heading">Emergency Contact</h2>
                <p className="text-sm text-text-secondary">
                  Please provide an emergency contact who can be reached if needed.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Contact Name *</label>
                    <input
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                    />
                  </div>
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Contact Phone *</label>
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                    />
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="bg-warm-cream/50 p-8 rounded-2xl space-y-6">
                <h2 className="text-xl font-serif text-text-heading">Digital Signature</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-heading font-medium mb-2">Full Legal Name *</label>
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
                  <label className="block text-text-heading font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white"
                  />
                </div>
                <div>
                  <label className="block text-text-heading font-medium mb-2">
                    Type your full name as your digital signature *
                  </label>
                  <p className="text-sm text-text-secondary/70 mb-2">
                    By typing your name below, you confirm that you have read, understood, and agree to all terms in this document.
                  </p>
                  <input
                    type="text"
                    name="signature"
                    value={formData.signature}
                    onChange={handleChange}
                    required
                    placeholder="Type your full legal name"
                    className="w-full px-4 py-3 rounded-xl border border-accent-gold/20 focus:border-accent-gold focus:outline-none bg-warm-white font-serif text-lg"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === 'sending' || !allAgreementsChecked || !formData.signature}
                  className="px-12 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Submitting...' : 'Sign & Submit Consent'}
                </button>

                {!allAgreementsChecked && (
                  <p className="mt-4 text-text-secondary/60 text-sm">
                    Please read and agree to all sections above
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

export default BufoConsentPage;
