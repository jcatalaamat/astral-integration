import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Clock, Instagram, CheckCircle } from 'lucide-react';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import LinksPage from './components/pages/LinksPage';
import ResourcesPage from './components/pages/ResourcesPage';
import BufoScreeningPage from './components/pages/BufoScreeningPage';
import BufoConsentPage from './components/pages/BufoConsentPage';
import BufoContraindicationsPage from './components/pages/BufoContraindicationsPage';
import BookingPage from './components/pages/BookingPage';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WarmHero from './components/shared/WarmHero';

// Real testimonials data with work type labels
const REAL_TESTIMONIALS = [
  {
    quote: "The healings I went through were deep and transformative. Through his practice, he is able to prise issues from the mind and release them through the heart. His compassion and belief allows vulnerability in the unknown, acceptance of ugly realities and enables you to rise above blocks we accumulate along with our lives.",
    name: "Holly",
    workType: "Energy Healing"
  },
  {
    quote: "He helped me shift the vision from the 12 years of marriage I let go of to what I gain by being free. Now there is a beautiful life beyond the separation. A man of great heart specialising in relationships, future readings and much more.",
    name: "Viktoria",
    workType: "Relationship Healing"
  },
  {
    quote: "An amazing presence, great compassion and non-judgement. It was really deep, starting with issues around letting go of the past and ultimately in feelings of rejection. He was able to clear the core beliefs which completely shifted my energy and perspective on my life.",
    name: "Matthew",
    workType: "Core Belief Clearing"
  },
  {
    quote: "I had really deep experiences, both at an emotional and spiritual level. We went to the root of fears about embracing and stepping into my power. I felt secure, held, seen, and fully accepted so I could trust and surrender. I feel so young! Clear and joyful, like a child.",
    name: "Nina",
    workType: "Mentorship"
  },
  {
    quote: "I had a paradigm shift. He helped me unlock and release the family conditioning I have had around my mother for a long time and ultimately the rejection of my inner feminine.",
    name: "Gabriella",
    workType: "Family Constellations"
  },
  {
    quote: "He gave me a gift, by healing wounds that had been present in me since I was a child. We cleared issues that were causing me to have weird dynamics with women. He set me free and I'll never be the same. He made me a man.",
    name: "Jon",
    workType: "Men's Work"
  },
  {
    quote: "We worked on some very old mindsets and beliefs. During the session, I felt a lot of energy shifting inside of me. It felt like deep cleansing, getting rid of all unnecessary imprints. A very smooth but very clear change of energy on a very deep level. I feel I'm boosted full of love and energy.",
    name: "Blanka",
    workType: "Energy Healing"
  },
  {
    quote: "The work was one of the most profound transformations I have ever had. He takes you straight into the subconscious mind so together you find the cause of your limiting beliefs and clear them. This is the healing of the future, in the 5th dimension, working in the quantum field that enables healing to be instantaneous.",
    name: "Hazel",
    workType: "Deep Transformation"
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
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
        subtitle="Deep Transformation • Identity Rebirth • Sacred Medicine"
        height="extra-large"
        image="/images/homepage/hero.jpg"
      >
        <p className="text-xl md:text-2xl text-text-secondary/90 font-serif italic max-w-2xl mx-auto mb-4">
          For those ready to change form.
        </p>
        <p className="text-text-secondary/70 font-light max-w-xl mx-auto mb-4 text-base leading-relaxed">
          Deep transformation — identity, clarity, embodiment,<br className="hidden md:block" />
          and the creation of your next chapter.
        </p>
        <p className="text-text-secondary/60 font-light max-w-lg mx-auto mb-8 text-sm">
          If you're standing at the edge of who you've been, ready to become who you're meant to be — you're in the right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium text-lg shadow-lg"
          >
            Start with Free Discovery Call
          </button>
          <button
            onClick={() => scrollToSection('resources')}
            className="px-8 py-4 border-2 border-accent-gold/60 text-accent-gold rounded-full hover:bg-accent-gold/10 transition-colors font-medium"
          >
            Download Free Integration Guide
          </button>
        </div>
        <p className="text-text-secondary/60 text-sm mt-8">
          Guiding deep transformation since 2015
        </p>
      </WarmHero>

      {/* You May Feel Called - Qualification Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading leading-relaxed">
                This work is for you if...
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
              {/* Called If */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You're ready to let the old identity die — not just heal it, but release it
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You've done the therapy, the books, the practices — and know there's something deeper
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You're navigating a major threshold — awakening, dissolution, creation of your next chapter
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You're a creator, leader, or high-capacity person who knows their potential but can't access it
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You want someone who holds all the layers — spiritual, psychological, somatic, energetic
                  </p>
                </div>
              </div>

              {/* Not For You If */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-text-heading/70 mb-4">This is not for you if...</h3>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/50 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/70 leading-relaxed">
                    You want comfort without transformation
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/50 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/70 leading-relaxed">
                    You're looking for someone to "fix" you or tell you what to do
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/50 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/70 leading-relaxed">
                    You're not ready to meet your shadow honestly
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/50 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/70 leading-relaxed">
                    You're in acute crisis (I'll help you find appropriate support)
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-text-heading font-serif text-xl">
                You're not broken. You're not lost.
              </p>
              <p className="text-accent-gold font-serif text-xl italic">
                You're being restructured.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Who I Am */}
      <div id="about" className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Large Image */}
              <div className="lg:sticky lg:top-24">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/homepage/journey-begins.jpg"
                    alt="Astral Integration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Story + Credentials */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-text-heading leading-tight mb-8">
                    Who I Am
                  </h2>
                  <p className="text-xl text-text-secondary leading-relaxed">
                    I'm Astral. I guide people through transformation.
                  </p>
                </div>

                {/* The Truth */}
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I work with people navigating identity shifts — awakening, dissolution, and the creation of their next chapter.
                  </p>
                  <p>
                    I hold space for what most people avoid: shadow, grief, ego death, the messy middle of becoming. My work goes beyond conversation — it moves through the body, the energy field, the family system.
                  </p>
                  <p>
                    I don't have all the answers. But I know how to sit with you while you find yours.
                  </p>
                </div>

                {/* The Path */}
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    My path wasn't linear. I lived many lives — performer, creator, seeker — until my body finally said <span className="italic">no more.</span> The unraveling began. And with it came truth.
                  </p>
                  <p>
                    Plant medicine cracked me open. But awakening isn't enough. Integration is where insight becomes embodiment. That's the work I now guide others through.
                  </p>
                </div>

                {/* Training as context, not identity */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-text-heading/80">Background & Training</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>500+ hours Kundalini & Yoga • Family Constellations • Access Consciousness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Reiki, Theta Healing & intuitive energy work • Psychedelic integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Bufo Alvarius ceremony — taught by Seri tribe elders in Mexico</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>10+ years of my own breakdowns, ego deaths, and rebuilding</span>
                    </li>
                  </ul>
                </div>

                {/* The real training */}
                <div className="space-y-4 border-l-2 border-accent-gold/40 pl-6">
                  <p className="text-text-secondary leading-relaxed">
                    The certificates show I'm trained and safe. But the real training came from my own dissolution — and the humility of walking others through theirs.
                  </p>
                  <div className="space-y-1 mt-4">
                    <p className="text-text-heading font-serif">I don't lead from above.</p>
                    <p className="text-accent-gold font-serif italic">I walk beside you through the fire.</p>
                  </div>
                </div>
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

      {/* What I Actually Do - Methods Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                What I Actually Do
              </h2>
              <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto leading-relaxed">
                I hold all the layers — spiritual, psychological, somatic, energetic, creative — so you don't need five different practitioners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-xl font-serif text-text-heading">Identity Evolution</h3>
                <p className="text-text-secondary leading-relaxed">
                  Dissolving the outdated identity so you can step into the next one. The you that's been waiting to emerge.
                </p>
              </div>

              <div className="space-y-3 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-xl font-serif text-text-heading">Creative & Vision Activation</h3>
                <p className="text-text-secondary leading-relaxed">
                  Unlocking genius, flow, and your true gifts. Helping you see the real vision you were born to execute — and bring it into form.
                </p>
              </div>

              <div className="space-y-3 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-xl font-serif text-text-heading">Family Constellations</h3>
                <p className="text-text-secondary leading-relaxed">
                  Unraveling invisible dynamics that sabotage leadership, relationships, money flow, creative success, and decision-making.
                </p>
              </div>

              <div className="space-y-3 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-xl font-serif text-text-heading">Energetic & Somatic Work</h3>
                <p className="text-text-secondary leading-relaxed">
                  Opening fields, shifting consciousness, activating intuition, bringing coherence to your internal world.
                </p>
              </div>

              <div className="space-y-3 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-xl font-serif text-text-heading">Shadow & Ego Integration</h3>
                <p className="text-text-secondary leading-relaxed">
                  The part that makes high-performers quantum leap instead of burn out. Meeting what you've avoided, integrating what you've hidden.
                </p>
              </div>

              <div className="space-y-3 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-xl font-serif text-text-heading">Sacred Medicine (Optional)</h3>
                <p className="text-text-secondary leading-relaxed">
                  Bufo Alvarius as an accelerator — only when truly aligned. A catalytic initiation, not the foundation of the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Transformation */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                The Transformation
              </h2>
              <p className="text-lg text-text-secondary/80 font-light">
                Identity death → Clarity → Embodiment → Creation
              </p>
            </div>

            {/* 4 Phases - Clean Timeline */}
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 1</div>
                  <h3 className="text-xl font-serif text-text-heading">Dissolving</h3>
                  <p className="text-sm text-text-secondary/60 mt-1">Weeks 1-4</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed">
                    We meet the old identity — the patterns, protections, and stories that kept you safe but small. This is identity death. It's uncomfortable. It's necessary.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 2</div>
                  <h3 className="text-xl font-serif text-text-heading">Clarity</h3>
                  <p className="text-sm text-text-secondary/60 mt-1">Weeks 4-12</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed">
                    Family systems work. Shadow integration. Energetic clearing. The invisible dynamics that sabotaged you become visible. You see who you actually are without the conditioning.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 3</div>
                  <h3 className="text-xl font-serif text-text-heading">Embodiment</h3>
                  <p className="text-sm text-text-secondary/60 mt-1">Months 3-6</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-2">
                    Awakening is easy. Embodiment is the work.
                  </p>
                  <p className="text-text-secondary/80 leading-relaxed">
                    Your new identity anchors into your body, your relationships, your decisions, your presence. You stop performing who you were taught to be.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 4</div>
                  <h3 className="text-xl font-serif text-text-heading">Creation</h3>
                  <p className="text-sm text-text-secondary/60 mt-1">Months 6+</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed">
                    Now you create from alignment. The next chapter — in work, relationships, purpose, expression — flows from who you've become, not who you were pretending to be.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Reality */}
            <div className="text-center mt-16 space-y-2">
              <p className="text-text-heading font-serif text-lg">
                Real transformation takes 6-12 months.
              </p>
              <p className="text-text-secondary/70 italic">
                I work with fewer people, going deeper, over longer containers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings & Investment Section */}
      <div id="services" className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                Offerings & Investment
              </h2>
              <p className="text-lg text-text-secondary/80">
                Clear, honest, transparent.
              </p>
            </div>

            <div className="space-y-6">
              {/* Free Discovery Call */}
              <div className="p-8 md:p-10 bg-accent-gold/5 border border-accent-gold/20 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Free Discovery Call</h3>
                    <p className="text-text-secondary">30 minutes • €0</p>
                  </div>
                  <a
                    href="https://calendly.com/astral-integration/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Book Free Call
                  </a>
                </div>
                <p className="mt-4 text-text-secondary/80 leading-relaxed">
                  A gentle space to understand your needs and see if we're a good fit. No convincing. No pushing.
                </p>
              </div>

              {/* Single Session */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Single Integration Session</h3>
                    <p className="text-xl text-accent-gold font-medium">€80-140</p>
                    <p className="text-text-secondary/80">60 minutes • Online or in-person</p>
                  </div>
                  <a
                    href="https://calendly.com/astral-integration/single-integration-healing-session-60-min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Book Session
                  </a>
                </div>
                <p className="text-text-secondary/80 leading-relaxed">
                  Perfect for processing a recent ceremony, navigating a transition, energy clearing, or exploring if deeper work is right for you.
                </p>
              </div>

              {/* Ongoing Mentorship */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Ongoing Mentorship</h3>
                    <p className="text-xl text-accent-gold font-medium">€300-500 per cycle</p>
                    <p className="text-text-secondary/80">4 sessions • ~2 months per cycle</p>
                  </div>
                  <a
                    href="https://calendly.com/astral-integration/mentorship-intake-call-30-min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Apply
                  </a>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A gentle, steady container for those who need consistent guidance and inner work — without the intensity of weekly sessions.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-3">
                  Includes: 4x 60-minute sessions • Voice message support • Personalized practices • Integration guidance for medicine work
                </p>
                <p className="text-text-secondary/70 text-sm italic">
                  Best for creative souls, sensitives, and seekers navigating transitions who want steady, loving support as they unfold.
                </p>
              </div>

              {/* Group Ceremonies */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border border-accent-sage/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Group Ceremonies</h3>
                    <p className="text-xl text-accent-gold font-medium">By Application</p>
                    <p className="text-text-secondary/80">Small group medicine work • Curated containers</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Inquire
                  </button>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Intimate group ceremonies for those ready for collective transformation. Either microdose journeys or individual turns within a held container.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-3">
                  The group field amplifies. What moves in one person ripples through all.
                  Small circles only — 4-8 people max. Carefully curated for resonance and readiness.
                </p>
                <p className="text-text-secondary/70 text-sm italic">
                  Prior screening required. Announced to the inner circle first.
                </p>
              </div>

              {/* Bufo Alvarius - Optional Accelerator */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border border-accent-terracotta/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Bufo Alvarius Journey</h3>
                    <p className="text-xl text-accent-gold font-medium">€300-500</p>
                    <p className="text-text-secondary/80">Optional accelerator • By invitation only</p>
                  </div>
                  <Link
                    to="/bufo-screening"
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Apply for Screening
                  </Link>
                </div>
                <div className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    I don't sell Bufo. It's not my business. It's not my core offering. It's an <span className="text-accent-gold">accelerator</span> — used only when the person is ready, the context is right, and the process calls for it.
                  </p>

                  <p className="text-text-secondary/80 text-sm leading-relaxed">
                    Sacred 5-MeO-DMT in the Seri lineage. Ego dissolution. Divine remembrance. This amplifies the transformation I already create naturally — it doesn't replace it.
                  </p>

                  <p className="text-text-secondary/70 text-sm">
                    <strong>Package:</strong> Full screening • Preparation • Ceremony in sacred space • Integration<br/>
                    <strong>Safety:</strong> 50+ ceremonies. Taught by Seri elders. No exceptions on screening.
                  </p>

                  <p className="text-text-secondary/60 text-xs italic">
                    People who want Bufo come through resonance, not marketing. If you're called, apply.
                  </p>

                  <p className="text-text-secondary/50 text-xs">
                    <Link to="/bufo-contraindications" className="text-accent-gold hover:text-accent-terracotta transition-colors underline">
                      View full contraindications
                    </Link>
                    {' '}— SSRIs, bipolar, psychosis, pregnancy, heart conditions
                  </p>
                </div>
              </div>

              {/* Astral Integration Training */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border border-accent-sage/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Astral Integration Training</h3>
                    <p className="text-xl text-accent-gold font-medium">By Application</p>
                    <p className="text-text-secondary/80">8-week online group program</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Inquire
                  </button>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A group training for those learning to hold space and guide transformation.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-3">
                  8 weeks of weekly group calls covering: shadow work, energy healing, family systems,
                  somatic awareness, medicine integration, and the art of presence.
                </p>
                <p className="text-text-secondary/70 text-sm italic">
                  For therapists, coaches, healers, and seekers ready to deepen their practice and serve others.
                </p>
              </div>

              {/* Facilitator Training */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border border-accent-sage/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Facilitator Training</h3>
                    <p className="text-xl text-accent-gold font-medium">By Application</p>
                    <p className="text-text-secondary/80">For those called to hold space for others</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Inquire
                  </button>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A deep apprenticeship for those ready to become facilitators, healers, or guides in their own right.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-3">
                  This is not a weekend certification. It's a transmission — a mentorship that takes you from seeker to space-holder.
                  Integration work, energy healing, or medicine facilitation depending on your path.
                </p>
                <p className="text-text-secondary/70 text-sm italic">
                  Requirements: Prior work with me, readiness assessment, and genuine calling. Not everyone is meant to hold space —
                  we'll explore this honestly together.
                </p>
              </div>

              {/* Retreats */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border border-accent-sage/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Retreats</h3>
                    <p className="text-xl text-accent-gold font-medium">By Invitation</p>
                    <p className="text-text-secondary/80">Immersive experiences in sacred places</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Join Waitlist
                  </button>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Small group retreats in special places around the world — Mazunte, Ibiza, Bali, and beyond.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-3">
                  Deep immersions combining ceremony, integration work, somatic healing, and community.
                  Limited spaces. Announced to the inner circle first.
                </p>
                <p className="text-text-secondary/70 text-sm italic">
                  Get on the list to hear about upcoming retreats before they're public.
                </p>
              </div>

              </div>

            {/* Investment Philosophy */}
            <div className="mt-12 text-center">
              <p className="text-text-secondary/70 italic">
                Sliding scale and payment plans available. If cost is a barrier, reach out.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Truth About This Work */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading mb-4">
                The Truth About This Work
              </h2>
              <p className="text-text-secondary/80 leading-relaxed">
                Identity death is not comfortable. It's not tidy. It's not linear.
              </p>
            </div>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="font-serif text-text-heading">You may lose relationships that were built on the old you.</p>
              <p className="font-serif text-text-heading">You may doubt your identity, your work, your direction.</p>
              <p className="font-serif text-text-heading">You may feel like everything is falling apart.</p>
            </div>

            <div className="text-center mt-12 space-y-2">
              <p className="text-text-heading font-serif">
                This is not a sign something is wrong.
              </p>
              <p className="text-accent-gold font-serif italic">
                It's a sign you're being restructured.
              </p>
            </div>

            <p className="text-center mt-12 text-text-secondary/70 italic">
              If you're still reading, you already know.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/15 via-warm-peach to-accent-sage/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-6">
              What Transformation Sounds Like
            </h2>
            <p className="text-center text-text-secondary/70 mb-20">
              Real words from real people who went through the fire.
            </p>

            <div className="space-y-16">
              {REAL_TESTIMONIALS.slice(0, 4).map((testimonial, index) => (
                <div key={index} className="max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-serif text-text-heading leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-accent-gold text-lg">
                    — {testimonial.name} <span className="text-text-secondary/70 text-sm font-normal">| {testimonial.workType}</span>
                  </p>
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
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                I believe integration wisdom should be accessible to everyone. These guides are yours—no email required.
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

            <div className="text-center space-y-4">
              <a
                href="/resources"
                className="inline-flex items-center text-accent-gold hover:text-accent-terracotta transition-colors font-medium"
              >
                View all 14 free resources →
              </a>
              <p className="text-text-secondary/70 italic text-sm">
                No email required. All guides freely available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Begin CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="/images/homepage/inner-circle.jpg"
            alt="Ready to begin your journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/40 via-warm-peach/50 to-accent-coral/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-8 text-accent-gold/60 animate-breathe">⊹</div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Ready to Begin?
            </h2>
            <p className="text-lg text-text-secondary mb-8 font-light max-w-xl mx-auto">
              If something on this page resonated, let's talk. A free discovery call is the first step—no pressure, no pitch.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-accent-gold text-warm-white rounded-full font-medium text-lg hover:bg-accent-terracotta transition-colors shadow-lg"
            >
              Book Your Free Discovery Call
            </button>
            <p className="text-sm text-text-secondary/70 mt-6 italic">
              30 minutes • Honest conversation • See if we're aligned
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Questions You Probably Have
            </h2>

            <div className="space-y-10">
              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  What exactly do you do?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I guide people through deep transformation — identity shifts, integration after medicine work, family patterns, creative blocks, and the messy middle of becoming. My approach weaves together energy work, family constellations, somatic awareness, and honest conversation. I hold space for what most people avoid.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Who is this for?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Creators, founders, artists, leaders, and high-capacity individuals who have done the work but know there's something deeper. People navigating identity death — awakening, dissolution, creation of their next chapter. Those who are tired of seeking and ready to embody.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Do I need to do plant medicine?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No. Most of my clients never touch medicine. The transformation happens through my presence, the container, the work. Medicine is an optional accelerator — used only when the person is ready, the context is right, and the process calls for it. It amplifies what I already create naturally.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How do I know if you're the right guide?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You'll feel it. If you've read this far and something resonates — that's your signal. Book the discovery call. We'll talk openly. There's no pressure, no pitch. If I'm not the right person, I'll tell you honestly. Part of sovereignty is knowing when something isn't your medicine.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Can you work with people globally?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Yes. Deep transformation work happens online. I work with clients worldwide via video. Medicine ceremonies are in-person in Mazunte, Mexico or select cities by arrangement.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  What if I'm skeptical about "energy work"?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Perfect. You don't need to believe anything. We work with what you can feel in your body — sensation, breath, emotion. Whether you call it "energy" or "nervous system regulation" doesn't matter. Skepticism is healthy. Blind belief isn't required.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  What's the investment?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Single sessions start at €80. Mentorship containers €300-500 per cycle. Deeper transformation containers by application. I work with fewer people, going deeper, over longer timelines. Payment plans available. If cost is a genuine barrier and you're truly called, reach out.
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
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/bufo-screening" element={<BufoScreeningPage />} />
        <Route path="/bufo-consent" element={<BufoConsentPage />} />
        <Route path="/bufo-contraindications" element={<BufoContraindicationsPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
