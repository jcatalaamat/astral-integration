import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Clock, Instagram, CheckCircle } from 'lucide-react';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import LinksPage from './components/pages/LinksPage';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WarmHero from './components/shared/WarmHero';

// Real testimonials data (abstracted from original)
const REAL_TESTIMONIALS = [
  {
    quote: "The healings I went through were deep and transformative. Through his practice, he is able to prise issues from the mind and release them through the heart. His compassion and belief allows vulnerability in the unknown, acceptance of ugly realities and enables you to rise above blocks we accumulate along with our lives.",
    name: "Holly"
  },
  {
    quote: "He helped me shift the vision from the 12 years of marriage I let go of to what I gain by being free. Now there is a beautiful life beyond the separation. A man of great heart specialising in relationships, future readings and much more.",
    name: "Viktoria"
  },
  {
    quote: "An amazing presence, great compassion and non-judgement. It was really deep, starting with issues around letting go of the past and ultimately in feelings of rejection. He was able to clear the core beliefs which completely shifted my energy and perspective on my life.",
    name: "Matthew"
  },
  {
    quote: "I had really deep experiences, both at an emotional and spiritual level. We went to the root of fears about embracing and stepping into my power. I felt secure, held, seen, and fully accepted so I could trust and surrender. I feel so young! Clear and joyful, like a child.",
    name: "Nina"
  },
  {
    quote: "I had a paradigm shift. He helped me unlock and release the family conditioning I have had around my mother for a long time and ultimately the rejection of my inner feminine.",
    name: "Gabriella"
  },
  {
    quote: "He gave me a gift, by healing wounds that had been present in me since I was a child. We cleared issues that were causing me to have weird dynamics with women. He set me free and I'll never be the same. He made me a man.",
    name: "Jon"
  },
  {
    quote: "We worked on some very old mindsets and beliefs. During the session, I felt a lot of energy shifting inside of me. It felt like deep cleansing, getting rid of all unnecessary imprints. A very smooth but very clear change of energy on a very deep level. I feel I'm boosted full of love and energy.",
    name: "Blanka"
  },
  {
    quote: "The work was one of the most profound transformations I have ever had. He takes you straight into the subconscious mind so together you find the cause of your limiting beliefs and clear them. This is the healing of the future, in the 5th dimension, working in the quantum field that enables healing to be instantaneous.",
    name: "Hazel"
  }
];

// Resources data
const FEATURED_RESOURCES = [
  {
    title: 'Psychedelic Integration',
    description: 'Complete guide for integrating all medicine work - psilocybin, LSD, ayahuasca, MDMA.',
    downloadPath: '/resources/Post_Ceremony_Integration_Workbook.docx',
    pages: 12,
    icon: '✦'
  },
  {
    title: 'Bufo Integration Companion',
    description: 'Specific guide for integrating 5-MeO-DMT/Bufo journeys and working with the void.',
    downloadPath: '/resources/Bufo_Integration_Companion.docx',
    pages: 10,
    icon: '✧'
  },
  {
    title: 'Ancestral Healing Guide',
    description: 'Family constellations work to clear inherited patterns and honor your lineage.',
    downloadPath: '/resources/Ancestral_Healing_Guide.docx',
    pages: 13,
    icon: '⊹'
  },
  {
    title: 'The Masculine Journey',
    description: "Men's work guide including father wound healing and reclaiming healthy masculine.",
    downloadPath: '/resources/The_Masculine_Journey.docx',
    pages: 15,
    icon: '✧'
  }
];

// Main Landing Page Component
function LandingPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;

    setNewsletterStatus('loading');

    try {
      const convertKitApiKey = (import.meta as any).env.VITE_CONVERTKIT_API_KEY || 'WL4dvqOgWKNB2eq6RLOflQ';
      const convertKitFormId = (import.meta as any).env.VITE_CONVERTKIT_FORM_ID || '8630317';

      const response = await fetch(`https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: convertKitApiKey,
          email: newsletterEmail,
          tags: ['astral-integration-newsletter', 'homepage-signup']
        })
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    }
  };

  // Contact form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.subject) newErrors.subject = 'Please select what you are interested in';
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
          subject: formData.subject,
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

  // Smooth scroll function for anchor links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section with WarmHero component */}
      <WarmHero
        title="Astral Integration"
        subtitle="Guiding souls home to themselves"
        height="extra-large"
        image="/images/homepage/hero.jpg"
      >
        <p className="text-text-secondary/80 font-light italic max-w-2xl mx-auto mb-8">
          For those who hear the call. For those ready to remember.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg shadow-lg"
          >
            Start Your Discovery Call
          </button>
        </div>
      </WarmHero>

      {/* Who This Is For - Wisdom Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="text-3xl text-accent-gold/40">⊛</div>
            <h2 className="text-3xl md:text-4xl font-serif text-text-heading leading-relaxed">
              This work is for the ones who can no longer pretend
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg max-w-3xl mx-auto">
              <p>
                For those who've tried everything else. For the seekers who are tired of seeking.
                For the ones who know there's something deeper calling.
              </p>
              <p className="text-text-secondary/80 italic">
                You're not broken. You're not lost. You're initiating.
              </p>
              <p>
                This is for the souls ready to stop performing, stop bypassing, and start remembering
                what they came here to do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="min-h-[80vh] flex items-center bg-warm-white">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Large Image */}
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
              <img
                src="/images/homepage/journey-begins.jpg"
                alt="The journey begins with surrender"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story Text */}
            <div className="space-y-8">
              <p className="text-4xl md:text-5xl font-serif text-text-heading leading-tight">
                The journey begins with surrender.
              </p>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  For years, I performed. I wore masks. I did what I thought I was supposed to do.
                  Until my body, my mind, and my soul said: <span className="italic text-accent-gold">NO MORE.</span>
                </p>
                <p>
                  Plant medicine showed me who I was beyond the story. Nothing. And everything.
                  I found presence. Consciousness. Love that isn't conditional.
                </p>
                <p className="text-xl text-accent-gold italic">
                  Awakening isn't enough. Integration is where the real work happens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Quote Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/20 via-warm-peach to-accent-sage/15"></div>
        <div className="relative z-10 w-full px-4 py-24">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-5xl font-serif text-text-heading leading-relaxed mb-8">
              "This work is not about becoming someone new.<br/>
              It's about remembering who you've always been."
            </p>
          </blockquote>
        </div>
      </div>

      {/* The Approach - Philosophy Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-8">
                How This Work Happens
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                This isn't therapy. It isn't coaching. It's something older. Something that can't be rushed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Presence Over Technique</h3>
                <p className="text-text-secondary leading-relaxed">
                  I don't fix you. I hold space for you to remember your own wholeness.
                  The transformation happens in the field between us.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Body. Heart. Soul.</h3>
                <p className="text-text-secondary leading-relaxed">
                  Real healing isn't just mental. We work through the body, honor the heart,
                  and listen to what your soul has been trying to say.
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-accent-gold text-3xl">✧</div>
                <h3 className="text-xl font-serif text-text-heading">Integration Is Everything</h3>
                <p className="text-text-secondary leading-relaxed">
                  Insight without integration is just spiritual entertainment.
                  We anchor the work into your daily life, your relationships, your reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Initiation Process - 4 Stages */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-20">
              <div className="text-4xl text-accent-gold/40 mb-6">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                The Initiation Process
              </h2>
              <p className="text-lg text-text-secondary font-light">
                Every transformation follows the same sacred pattern
              </p>
            </div>

            {/* 4 Stages - Horizontal Flow */}
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {/* Stage 1: Dissolution */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-accent-gold mb-4">⊹</div>
                  <div className="text-2xl font-serif text-text-heading mb-2">1</div>
                  <h3 className="text-xl font-serif text-text-heading">Dissolution</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Release what no longer serves. Clear ancestral patterns, childhood wounds, and energetic debris.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 -right-4 text-accent-gold/30 text-2xl">→</div>
              </div>

              {/* Stage 2: Activation */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-accent-gold mb-4">⊛</div>
                  <div className="text-2xl font-serif text-text-heading mb-2">2</div>
                  <h3 className="text-xl font-serif text-text-heading">Activation</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Awaken dormant gifts. Open your channel, activate intuition, remember your cosmic blueprint.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 -right-4 text-accent-gold/30 text-2xl">→</div>
              </div>

              {/* Stage 3: Integration */}
              <div className="relative">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-accent-gold mb-4">⊝</div>
                  <div className="text-2xl font-serif text-text-heading mb-2">3</div>
                  <h3 className="text-xl font-serif text-text-heading">Integration</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Embody your truth. Anchor new frequencies, align actions with soul purpose, manifest your vision.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 -right-4 text-accent-gold/30 text-2xl">→</div>
              </div>

              {/* Stage 4: Mastery */}
              <div className="text-center space-y-4">
                <div className="text-4xl text-accent-gold mb-4">✧</div>
                <div className="text-2xl font-serif text-text-heading mb-2">4</div>
                <h3 className="text-xl font-serif text-text-heading">Mastery</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Become the medicine. Step into service, hold space for others, create ripples of transformation.
                </p>
              </div>
            </div>

            {/* Closing Wisdom */}
            <div className="text-center mt-20 max-w-3xl mx-auto">
              <p className="text-lg text-text-secondary leading-relaxed italic">
                This isn't a quick fix. This isn't a weekend workshop. This is the work of a lifetime—
                compressed into the time your soul needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Ways to Walk Together
            </h2>

            <div className="space-y-24">
              {/* Circle Work */}
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 aspect-[16/10] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/homepage/circles.jpg"
                    alt="Sacred Circles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-3xl font-serif text-text-heading">Sacred Circles</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Join a container of souls committed to growth. Men's circles, women's leadership,
                    and creative masterminds for healers and visionaries.
                  </p>
                  <p className="text-sm text-accent-gold">€100-200/month • sliding scale available</p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-accent-gold hover:text-accent-terracotta transition-colors"
                  >
                    Get in touch to join →
                  </button>
                </div>
              </div>

              {/* Medicine Work */}
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-serif text-text-heading">Medicine Journeys</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Bufo Alvarius ceremonies held with reverence and deep preparation. A sacred passage
                    to ego dissolution and divine remembrance.
                  </p>
                  <p className="text-sm text-text-secondary/80 leading-relaxed">
                    All medicine work includes screening, preparation sessions, and integration support.
                    This is sacred healing work—not recreation.
                  </p>
                  <p className="text-sm text-accent-gold">By application • discussed after preparation</p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-accent-gold hover:text-accent-terracotta transition-colors"
                  >
                    Apply for screening →
                  </button>
                </div>
                <div className="lg:col-span-3 aspect-[16/10] relative order-1 lg:order-2 overflow-hidden rounded-2xl">
                  <img
                    src="/images/homepage/medicine.jpg"
                    alt="Medicine Journeys"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 1:1 Work */}
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 aspect-[16/10] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/homepage/one-to-one.jpg"
                    alt="One-to-One Journeys"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-3xl font-serif text-text-heading">One-to-One Journeys</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Deep transformational work tailored to your unique path. Energy healing, family
                    constellations, psychic services, and bespoke mentorship.
                  </p>
                  <div className="space-y-1">
                    <p className="text-sm text-accent-gold">Single session: €88-150 • sliding scale</p>
                    <p className="text-sm text-accent-gold">4-session package: €300-400</p>
                    <p className="text-sm text-accent-gold">3-month intensive: €1,800-2,500</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-accent-gold hover:text-accent-terracotta transition-colors"
                  >
                    Book a discovery call →
                  </button>
                </div>
              </div>
            </div>

            {/* Investment Philosophy */}
            <div className="mt-20 max-w-3xl mx-auto text-center space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                I believe this work should be accessible. All offerings include sliding scale options.
                If you're genuinely called to this work but cost is a barrier, reach out.
              </p>
              <p className="text-text-secondary/80 italic">
                Money is energy. I trust you to know what's right for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What People Don't Tell You - Truth Section */}
      <div className="bg-gradient-to-b from-warm-white via-warm-cream to-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading mb-8">
                What People Don't Tell You About Transformation
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-12">
                It's not all light. It's not all love. Sometimes it's messy. Sometimes it's uncomfortable.
                And that's exactly where the real work begins.
              </p>
            </div>

            <div className="space-y-8 text-text-secondary leading-relaxed">
              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You might lose people.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  Not everyone can hold space for who you're becoming. And that's okay.
                </p>
              </div>

              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You might question everything.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  Including this work. Including me. That's part of reclaiming your sovereignty.
                </p>
              </div>

              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You might feel worse before you feel better.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  Healing brings things to the surface. That's not a sign it's not working—it's a sign it is.
                </p>
              </div>

              <div className="border-l-2 border-accent-gold/40 pl-6">
                <p className="mb-2">
                  <span className="font-serif text-text-heading text-lg">You will have to do the work.</span>
                </p>
                <p className="text-sm text-text-secondary/80">
                  I can guide. I can hold. I can witness. But I can't do it for you. No one can.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-text-secondary italic">
                If you're still reading, if this resonates—you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Real Voices */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Voices From The Journey
            </h2>

            <div className="space-y-16">
              {REAL_TESTIMONIALS.slice(0, 4).map((testimonial, index) => (
                <div key={index} className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-text-heading leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-accent-gold text-lg">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div id="resources" className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                Free Integration Tools
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Resources for your journey
              </p>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {FEATURED_RESOURCES.map((resource, index) => (
                <div
                  key={index}
                  className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30"
                >
                  <div className="space-y-3">
                    <div className="text-4xl text-accent-gold">{resource.icon}</div>
                    <div className="text-xs text-text-secondary/70">{resource.pages} pages</div>
                    <h3 className="text-lg font-serif text-text-heading">{resource.title}</h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {resource.description}
                    </p>
                    <div className="pt-2">
                      <a
                        href={resource.downloadPath}
                        download
                        className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium text-sm"
                      >
                        Download Guide →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-text-secondary italic text-sm">
              All resources are freely available for download. May they serve your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section - Inner Circle */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="/images/homepage/inner-circle.jpg"
            alt="Join the Inner Circle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/40 via-warm-peach/50 to-accent-coral/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-8 text-accent-gold/60 animate-breathe">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Join the Inner Circle
            </h2>
            <p className="text-lg text-text-secondary mb-4 font-light">
              Receive transmissions, integration practices, and soul medicine
            </p>
            <p className="text-sm text-text-secondary/80 mb-12 italic">
              Sacred transmissions 2x monthly
            </p>

            {/* Newsletter Form */}
            {newsletterStatus === 'success' ? (
              <div className="max-w-lg mx-auto text-center bg-warm-white/90 backdrop-blur-md border border-accent-gold/30 rounded-2xl p-6">
                <div className="text-3xl text-accent-gold mb-3">✓</div>
                <h3 className="text-xl font-serif text-text-heading mb-2">
                  Welcome to the Circle
                </h3>
                <p className="text-sm text-text-secondary">
                  Check your email to confirm your subscription
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email portal"
                  required
                  className="flex-1 px-6 py-4 bg-warm-white/80 border border-text-primary/20 rounded-full text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-8 py-4 bg-accent-gold text-warm-white rounded-full font-medium hover:bg-accent-terracotta transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Enter the Mystery'}
                </button>
              </form>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-center text-accent-terracotta text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Questions You Might Have
            </h2>

            <div className="space-y-10">
              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How is this different from therapy or coaching?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  This work goes deeper—into the soul, the body, the energy field. We're not just healing wounds or
                  achieving goals. We're remembering who you are beyond all the conditioning. It's more shamanic than
                  clinical, more mystical than methodical.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Do I need experience with plant medicine?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No. Many people come for energy healing, family constellations, or mentorship without ever touching
                  medicine. The medicine is just one tool. What matters is your readiness to do deep work.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Where are you based?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I split my time between Barcelona (Spain) and Mazunte (Mexico). I offer both in-person and online sessions.
                  Medicine ceremonies are always in-person. Energy healing and mentorship work beautifully online.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How do I know if this is right for me?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You'll know. If you've read this far and something inside you says "yes"—that's your signal.
                  Book a discovery call. We'll talk. There's no pressure, no pitch. Just an honest conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="text-5xl mb-8 text-accent-gold/60 animate-breathe">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                Let's Connect
              </h2>
              <p className="text-xl text-text-secondary font-light">
                Tell me where you are. Tell me what you're looking for.
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Email</h3>
                    <a href="mailto:hello@astral-integration.com" className="text-text-secondary hover:text-accent-gold transition-colors">
                      hello@astral-integration.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Response Time</h3>
                    <p className="text-text-secondary">I respond personally within 24-48 hours</p>
                  </div>
                </div>

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

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-1">Instagram</h3>
                    <a href="https://instagram.com/astralintegration" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-gold transition-colors">
                      @astralintegration
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-warm-white/80 backdrop-blur-md border border-text-primary/10 rounded-2xl p-8 md:p-12">
              {formStatus !== 'success' ? (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors ${
                        formErrors.name ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                      placeholder="Your name"
                    />
                    {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
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
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors ${
                        formErrors.email ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                      What are you interested in?
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary focus:outline-none focus:border-accent-gold/50 transition-colors ${
                        formErrors.subject ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                    >
                      <option value="">Select...</option>
                      <option value="1:1 Work">1:1 Deep Work</option>
                      <option value="Sacred Circles">Sacred Circles</option>
                      <option value="Medicine Work">Medicine Journeys</option>
                      <option value="Other">Other / Just Connecting</option>
                    </select>
                    {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Tell me about your journey
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className={`w-full px-4 py-3 bg-warm-white border rounded-lg text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors resize-none ${
                        formErrors.message ? 'border-red-400' : 'border-text-primary/20'
                      }`}
                      placeholder="Where are you now? What are you seeking? What's calling you to this work?"
                    />
                    {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - please try again' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold/10 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-accent-gold" />
                  </div>
                  <h3 className="text-3xl font-serif text-text-heading mb-4">Message Received</h3>
                  <p className="text-text-secondary mb-6">
                    Thank you for reaching out. I'll respond personally within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

// Event Route Component
function EventRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <EventPreview eventId={id || ''} language={language} />;
}

// Place Route Component
function PlaceRoute() {
  const { id } = useParams<{ id: string }>();
  const [language] = useState<'en' | 'es'>('en');

  return <PlacePreview placeId={id || ''} language={language} />;
}

// Main App with Routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
