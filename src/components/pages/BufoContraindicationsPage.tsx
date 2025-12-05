import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { AlertTriangle, Heart, Brain, Pill, ShieldAlert, HelpCircle } from 'lucide-react';

const BufoContraindicationsPage = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-accent-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldAlert className="w-8 h-8 text-accent-terracotta" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Bufo Alvarius Contraindications
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-4">
              Safety is sacred. This page outlines who should NOT participate in Bufo Alvarius ceremonies.
            </p>
            <p className="text-text-secondary/80 leading-relaxed">
              5-MeO-DMT is a powerful medicine. These contraindications exist to protect your life and wellbeing.
              Please read carefully and honestly assess your situation.
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-accent-terracotta/10 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-accent-terracotta flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-medium text-text-heading mb-2">
                  This is not optional guidance
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  These contraindications are absolute. If any apply to you, I cannot facilitate a ceremony for you.
                  This is not rejection—it's protection. Some conditions can be life-threatening when combined with 5-MeO-DMT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Medications Section */}
            <div className="bg-warm-cream/50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                  <Pill className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-2xl font-serif text-text-heading">Medication Contraindications</h2>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                The following medications interact dangerously with 5-MeO-DMT and must be discontinued
                for a specific period before ceremony. <strong>Never stop medications without consulting your prescribing doctor.</strong>
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-lg font-medium text-text-heading mb-2">
                    Absolute Contraindications (Cannot participate)
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>MAOIs</strong> (Monoamine Oxidase Inhibitors) - Including Nardil, Parnate, Marplan, and Ayahuasca/Harmaline. Minimum 14 days off required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>SSRIs</strong> (Selective Serotonin Reuptake Inhibitors) - Prozac, Zoloft, Lexapro, Celexa, Paxil, etc. Minimum 2-6 weeks off required depending on medication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>SNRIs</strong> (Serotonin-Norepinephrine Reuptake Inhibitors) - Effexor, Cymbalta, Pristiq. Minimum 2-4 weeks off required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Tricyclic Antidepressants</strong> - Amitriptyline, Nortriptyline, Imipramine. Minimum 2 weeks off required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Lithium</strong> - Extremely dangerous combination. Cannot participate.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Tramadol</strong> - Risk of serotonin syndrome. Minimum 1 week off required.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-medium text-text-heading mb-2">
                    Requires Assessment & Tapering Plan
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Benzodiazepines</strong> - Xanax, Valium, Klonopin, Ativan. May reduce effectiveness and require tapering plan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Antipsychotics</strong> - Seroquel, Risperdal, Abilify. Contraindicated; requires psychiatric consultation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Blood Pressure Medications</strong> - Some interactions possible. Requires case-by-case evaluation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>St. John's Wort</strong> - Natural SSRI. Minimum 2 weeks off required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>5-HTP</strong> - Serotonin precursor. Minimum 1 week off required.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-warm-white rounded-xl">
                <p className="text-text-secondary/80 text-sm leading-relaxed">
                  <strong>Important:</strong> This is not a complete list. Always disclose ALL medications, supplements, and substances
                  during screening. When in doubt, we discuss it together.
                </p>
              </div>
            </div>

            {/* Cardiovascular Section */}
            <div className="bg-warm-cream/50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-2xl font-serif text-text-heading">Cardiovascular Conditions</h2>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                5-MeO-DMT causes temporary but significant increases in heart rate and blood pressure.
                The following conditions are absolute contraindications:
              </p>

              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Heart disease</strong> - Including coronary artery disease, heart failure, cardiomyopathy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Uncontrolled high blood pressure</strong> - Hypertension that is not well-managed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>History of heart attack or stroke</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Arrhythmias</strong> - Irregular heartbeat, atrial fibrillation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Aneurysms</strong> - Brain or aortic aneurysms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Blood clotting disorders</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Recent surgery</strong> - Within the last 6 months</span>
                </li>
              </ul>
            </div>

            {/* Psychiatric Section */}
            <div className="bg-warm-cream/50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-2xl font-serif text-text-heading">Psychiatric & Neurological Conditions</h2>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                5-MeO-DMT is a powerful psychedelic that can destabilize vulnerable mental states.
                The following conditions are contraindicated:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-lg font-medium text-text-heading mb-2">
                    Absolute Contraindications
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Schizophrenia</strong> - Personal or strong family history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Psychotic disorders</strong> - Any history of psychosis, psychotic breaks, or delusional thinking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Bipolar disorder</strong> - Type I or II, especially with manic episodes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Severe personality disorders</strong> - Borderline, antisocial, or schizotypal personality disorder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Active suicidal ideation</strong> - Current suicidal thoughts or recent attempt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Psychiatric hospitalization</strong> - Within the last year</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-lg font-medium text-text-heading mb-2">
                    Requires Careful Assessment
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Severe depression</strong> - Currently in a severe depressive episode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Severe anxiety disorders</strong> - Unmanaged panic disorder or severe PTSD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Dissociative disorders</strong> - DID or severe dissociation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Recent major trauma</strong> - Within the last 6 months</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-lg font-medium text-text-heading mb-2">
                    Neurological Contraindications
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Epilepsy or seizure disorders</strong> - Any history of seizures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Brain tumors or lesions</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Traumatic brain injury</strong> - Recent or severe TBI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Conditions */}
            <div className="bg-warm-cream/50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-2xl font-serif text-text-heading">Other Contraindications</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-text-heading mb-3">Pregnancy & Nursing</h3>
                  <p className="text-text-secondary leading-relaxed">
                    <strong>Absolute contraindication.</strong> 5-MeO-DMT should never be taken during pregnancy or while breastfeeding.
                    The effects on fetal development are unknown and potentially harmful.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-heading mb-3">Respiratory Conditions</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Severe asthma</strong> - Uncontrolled or requiring daily steroids</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>COPD</strong> - Chronic obstructive pulmonary disease</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Sleep apnea</strong> - Severe or untreated</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-heading mb-3">Other Medical Conditions</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Glaucoma</strong> - 5-MeO-DMT increases intraocular pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Liver or kidney disease</strong> - Severe impairment affecting metabolism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Diabetes</strong> - Uncontrolled or insulin-dependent (requires assessment)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-heading mb-3">Substance Use</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>Active addiction</strong> - Currently in active substance abuse (alcohol, opioids, stimulants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Recent psychedelic use</strong> - Wait at least 2 weeks between psychedelic experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Cannabis</strong> - Abstain for at least 24-48 hours before ceremony</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span><strong>Alcohol</strong> - Abstain for at least 48 hours before ceremony</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-text-heading mb-3">Age Requirements</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Participants must be at least <strong>21 years old</strong>. The brain continues developing until approximately age 25,
                    and powerful psychedelics are not recommended for developing minds.
                  </p>
                </div>
              </div>
            </div>

            {/* Questions Section */}
            <div className="bg-accent-gold/10 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-accent-gold" />
                </div>
                <h2 className="text-2xl font-serif text-text-heading">Questions?</h2>
              </div>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  <strong>If you're unsure whether a condition applies to you</strong> — ask. It's always better to discuss
                  than to assume. Some conditions require individual assessment rather than automatic exclusion.
                </p>
                <p>
                  <strong>If you have a contraindication</strong> — this doesn't mean you can't do deep healing work.
                  I offer integration sessions, energy healing, family constellations, and mentorship that don't involve medicine.
                </p>
                <p>
                  <strong>If you're on medications</strong> — never stop medications without consulting your prescribing doctor first.
                  We can discuss a safe tapering timeline together, but medical supervision is essential.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <p className="text-text-secondary/80 italic">
                If you've read through this page and believe you're a safe candidate for Bufo Alvarius ceremony,
                the next step is the screening questionnaire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/bufo-screening"
                  className="px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                >
                  Begin Screening
                </Link>
                <Link
                  to="/#contact"
                  className="px-8 py-4 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium"
                >
                  Ask a Question
                </Link>
              </div>

              <p className="text-text-secondary/60 text-sm">
                All screening information is kept strictly confidential.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BufoContraindicationsPage;
