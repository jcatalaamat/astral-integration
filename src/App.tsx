import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Clock, Instagram, CheckCircle } from 'lucide-react';
import EventPreview from './components/EventPreview';
import PlacePreview from './components/PlacePreview';
import LinksPage from './components/pages/LinksPage';
import ResourcesPage from './components/pages/ResourcesPage';
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
        subtitle="Plant Medicine Integration • Energy Healing • Transformational Mentorship"
        height="extra-large"
        image="/images/homepage/hero.jpg"
      >
        <p className="text-text-secondary/80 font-light max-w-2xl mx-auto mb-8 text-lg">
          For those navigating awakening, transition, or the space between who you were and who you're becoming.
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
          Based in Barcelona & Mazunte • Facilitating since 2018
        </p>
      </WarmHero>

      {/* You Might Be Ready If - Qualification Section */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-3xl text-accent-gold/40 mb-6">⊛</div>
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading leading-relaxed">
                You Might Be Ready If:
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
              {/* Ready If */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You've had a powerful medicine experience and don't know how to integrate it into your daily life
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You're navigating a major transition: relationship ending, career shift, loss, or spiritual awakening
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You've done therapy, read the books, tried the practices—and something still feels incomplete
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You're successful on paper but empty inside, and the mask is getting heavier
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent-gold text-xl flex-shrink-0">✓</span>
                  <p className="text-text-secondary leading-relaxed">
                    You're ready to stop seeking and start embodying
                  </p>
                </div>
              </div>

              {/* Not For You If */}
              <div className="space-y-6">
                <h3 className="text-xl font-serif text-text-heading mb-4">This Work Is NOT For You If:</h3>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/60 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/80 leading-relaxed">
                    You're looking for a quick fix or someone to do the work for you
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/60 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/80 leading-relaxed">
                    You're not ready to face uncomfortable truths
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/60 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/80 leading-relaxed">
                    You want symptom relief without addressing root causes
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-text-secondary/60 text-xl flex-shrink-0">✗</span>
                  <p className="text-text-secondary/80 leading-relaxed">
                    You're in acute mental health crisis (I'll help you find appropriate support)
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-text-secondary/80 italic text-lg">
              You're not broken. You're not lost. You're initiating.
            </p>
          </div>
        </div>
      </div>

      {/* About Section - My Path to This Work */}
      <div id="about" className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Large Image */}
              <div className="lg:sticky lg:top-24">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/homepage/journey-begins.jpg"
                    alt="Jordi - Astral Integration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Story + Credentials */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-text-heading leading-tight mb-8">
                    My Path to This Work
                  </h2>
                  <p className="text-xl text-text-secondary mb-6">
                    I'm Jordi, and I've been guiding transformational journeys since 2018.
                  </p>
                </div>

                {/* My Background */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-text-heading">My Background</h3>
                  <div className="space-y-4 text-text-secondary leading-relaxed">
                    <p>
                      My path here wasn't linear. I spent years performing, wearing masks, doing what I thought I was supposed to do. Until my body said: <span className="italic text-accent-gold">no more.</span>
                    </p>
                    <p>
                      Plant medicine showed me who I was beyond the story. The void. Pure presence. Love without conditions. But awakening isn't enough—integration is where the real work happens.
                    </p>
                  </div>
                </div>

                {/* My Training */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-text-heading">My Training</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>500+ hours Kundalini & Yoga Teacher Training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Family Constellations Practitioner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Access Consciousness Facilitator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Psychedelic Integration Specialist</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Mediumship & energy healing training (Reiki, Theta Healing)</span>
                    </li>
                  </ul>
                </div>

                {/* Medicine Work Lineage */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-text-heading">Medicine Work Lineage</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I've been honored to learn Bufo Alvarius ceremony from elders of the Seri tribe in Mexico. Over 50+ ceremonies facilitated. I've also sat in ayahuasca ceremonies and walked through my own initiations with plant medicines.
                  </p>
                </div>

                {/* Why I Share This */}
                <div className="space-y-4 border-l-2 border-accent-gold/40 pl-6">
                  <h3 className="text-xl font-serif text-text-heading">Why I Share This</h3>
                  <p className="text-text-secondary leading-relaxed">
                    The certifications represent thousands of hours learning to hold space safely. But the real training has been my own breakdowns, ego deaths, and the humility of guiding others through theirs.
                  </p>
                  <p className="text-text-secondary/80 italic">
                    I don't lead from above. I walk beside you. Because I know this territory from the inside.
                  </p>
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

      {/* How We Actually Work - Methods Section */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-8">
                How We Actually Work
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                I blend ancient wisdom with practical integration. Here's what that looks like:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-4 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-2xl font-serif text-text-heading">Family Constellations</h3>
                <p className="text-text-secondary leading-relaxed">
                  We map your family system to reveal inherited patterns, ancestral trauma, and blocked energy. This work brings hidden dynamics into awareness so you can finally break free from patterns that aren't even yours.
                </p>
              </div>

              <div className="space-y-4 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-2xl font-serif text-text-heading">Energy Healing & Somatic Work</h3>
                <p className="text-text-secondary leading-relaxed">
                  Using Access Consciousness, Kundalini practices, and intuitive energy work, we release what's stuck in your body. Not just talking about trauma—moving it through and out.
                </p>
              </div>

              <div className="space-y-4 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-2xl font-serif text-text-heading">Medicine Integration</h3>
                <p className="text-text-secondary leading-relaxed">
                  Whether you've done ayahuasca, Bufo, psilocybin, or other medicines, integration is where insight becomes transformation. We anchor your experiences into your actual life, relationships, and choices.
                </p>
              </div>

              <div className="space-y-4 p-8 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-2xl font-serif text-text-heading">Mentorship & Shadow Work</h3>
                <p className="text-text-secondary leading-relaxed">
                  The ongoing container where we work with your patterns, blocks, relationships, and life purpose. This is where the real integration happens—in the day-to-day.
                </p>
              </div>
            </div>

            <p className="text-center mt-12 text-text-secondary/80 italic">
              Every session is different because every person arrives with different needs. I follow what wants to emerge, not a script.
            </p>
          </div>
        </div>
      </div>

      {/* The Journey - What to Actually Expect */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <div className="text-4xl text-accent-gold/40 mb-6">⊹</div>
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                The Journey
              </h2>
              <p className="text-lg text-text-secondary font-light">
                What to actually expect when we work together
              </p>
            </div>

            {/* 4 Phases - Vertical Timeline */}
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 1</div>
                  <h3 className="text-2xl font-serif text-text-heading">Discovery</h3>
                  <p className="text-sm text-text-secondary/70 mt-1">First 1-2 Sessions</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed">
                    We talk honestly about where you are and what you need. I assess if I'm the right guide for your journey. No pressure, no pitch.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 2</div>
                  <h3 className="text-2xl font-serif text-text-heading">Deep Work</h3>
                  <p className="text-sm text-text-secondary/70 mt-1">Weeks 2-8</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    This is where we do the heavy lifting:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Clear ancestral patterns and childhood wounds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Work with family constellations or energy healing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Process medicine experiences if relevant</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>Address what's blocking your expression</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 3</div>
                  <h3 className="text-2xl font-serif text-text-heading">Integration</h3>
                  <p className="text-sm text-text-secondary/70 mt-1">Months 2-6</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Insights are just the beginning. We anchor the shifts into your daily life:
                  </p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>How you relate to yourself and others</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>How you show up in your work and purpose</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-gold">•</span>
                      <span>How you navigate challenges without old patterns</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Phase 4</div>
                  <h3 className="text-2xl font-serif text-text-heading">Embodiment</h3>
                  <p className="text-sm text-text-secondary/70 mt-1">Ongoing</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed">
                    You become the medicine. You hold space for your own process. You step into service and leadership in your own way.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Reality */}
            <div className="text-center mt-16 p-8 border border-accent-gold/20 rounded-2xl">
              <p className="text-lg text-text-heading font-serif mb-2">
                Real transformation takes 3-12 months minimum.
              </p>
              <p className="text-text-secondary">
                Anyone promising faster is selling you spiritual entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Investment Section */}
      <div id="services" className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                Services & Investment
              </h2>
              <p className="text-lg text-text-secondary">
                Clear offerings with transparent pricing
              </p>
            </div>

            <div className="space-y-8">
              {/* Free Discovery Call */}
              <div className="p-8 md:p-10 bg-accent-gold/5 border-2 border-accent-gold/30 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2">
                    <div className="text-accent-gold text-sm font-medium uppercase tracking-wider">Start Here</div>
                    <h3 className="text-3xl font-serif text-text-heading">Free Discovery Call</h3>
                    <p className="text-text-secondary">30 minutes • No cost</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium whitespace-nowrap"
                  >
                    Book Free Call
                  </button>
                </div>
                <p className="mt-6 text-text-secondary leading-relaxed">
                  Let's talk honestly about where you are and whether this work is right for you. We'll discuss your current situation, my approach, and whether we're energetically aligned. No pressure, no pitch.
                </p>
              </div>

              {/* Single Session */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif text-text-heading">Single Integration Session</h3>
                    <p className="text-xl text-accent-gold font-medium">€180</p>
                    <p className="text-text-secondary">90 minutes • Online or in-person</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap"
                  >
                    Book Session
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="font-medium text-text-heading">Best For:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-text-secondary">
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Integrating a recent medicine journey</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Processing a specific life transition</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Energy healing for a particular block</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Trying out the work before committing</li>
                  </ul>
                </div>
              </div>

              {/* 3-Month Mentorship */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif text-text-heading">3-Month Mentorship Container</h3>
                    <p className="text-xl text-accent-gold font-medium">€1,800 <span className="text-base text-text-secondary font-normal">(€150/session)</span></p>
                    <p className="text-text-secondary">12 sessions • Payment plans available</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap"
                  >
                    Apply for Mentorship
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="font-medium text-text-heading">Best For:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-text-secondary">
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Deep transformational work that requires time</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Ongoing support through major life transition</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Clearing family patterns and ancestral trauma</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Embodying your purpose and authentic expression</li>
                  </ul>
                  <p className="font-medium text-text-heading mt-4">What's Included:</p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>12x 90-minute sessions (weekly or bi-weekly)</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Voice message support between sessions</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Personalized practices and integration tools</li>
                  </ul>
                  <p className="text-text-secondary/80 italic mt-4">
                    This is the container where real change happens. Not just insight—embodiment.
                  </p>
                </div>
              </div>

              {/* Bufo Ceremony */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border border-accent-terracotta/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif text-text-heading">Bufo Alvarius Ceremony</h3>
                    <p className="text-xl text-accent-gold font-medium">€2,500</p>
                    <p className="text-text-secondary">Full day + preparation & integration</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap"
                  >
                    Apply for Screening
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    Sacred 5-MeO-DMT medicine facilitated in the tradition taught to me by Seri tribe elders. This is ego death. Divine remembrance. The void. It's not recreational—it's one of the most powerful medicines on Earth.
                  </p>
                  <p className="font-medium text-text-heading">What's Included:</p>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Medical & psychological screening (required)</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>2 preparation sessions (set intention, assess readiness)</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>Ceremony in sacred space with full support</li>
                    <li className="flex items-start gap-2"><span className="text-accent-gold">•</span>3 integration sessions to anchor the experience</li>
                  </ul>
                  <div className="mt-6 p-4 bg-warm-white rounded-xl">
                    <p className="font-medium text-text-heading mb-2">Who Should NOT Participate:</p>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-text-secondary">
                      <li className="flex items-start gap-2"><span className="text-text-secondary/60">✗</span>Heart conditions, high blood pressure</li>
                      <li className="flex items-start gap-2"><span className="text-text-secondary/60">✗</span>Currently on SSRIs, MAOIs, or psychiatric meds</li>
                      <li className="flex items-start gap-2"><span className="text-text-secondary/60">✗</span>History of psychosis, schizophrenia, bipolar</li>
                      <li className="flex items-start gap-2"><span className="text-text-secondary/60">✗</span>Pregnancy</li>
                    </ul>
                  </div>
                  <p className="text-sm text-text-secondary/80">
                    <strong>Location:</strong> Mazunte, Mexico (ceremony must be in-person)<br/>
                    <strong>Safety Record:</strong> 50+ ceremonies facilitated with full preparation and integration. Every person is screened. No exceptions.
                  </p>
                </div>
              </div>

              {/* Sacred Circles - Coming Soon */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="space-y-2">
                    <div className="text-accent-gold/70 text-sm font-medium uppercase tracking-wider">Coming 2026</div>
                    <h3 className="text-3xl font-serif text-text-heading">Sacred Circles</h3>
                    <p className="text-text-secondary">Group containers for deeper collective work</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap"
                  >
                    Express Interest
                  </button>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  I'm gathering circles in Barcelona, online, and Mazunte for men's work, women's leadership, and creative activation. If you're interested in group containers, let me know.
                </p>
                <div className="grid md:grid-cols-3 gap-6 opacity-80">
                  <div className="space-y-2">
                    <h4 className="font-medium text-text-heading">Men's Circle</h4>
                    <p className="text-sm text-text-secondary">Barcelona</p>
                    <p className="text-sm text-text-secondary">Shadow work, vulnerability, healthy masculine</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-text-heading">Women's Leadership</h4>
                    <p className="text-sm text-text-secondary">Online</p>
                    <p className="text-sm text-text-secondary">Stepping into power and purpose</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-text-heading">Creative Activators</h4>
                    <p className="text-sm text-text-secondary">Mazunte</p>
                    <p className="text-sm text-text-secondary">For healers, artists, visionaries</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary/70 italic mt-6">
                  Mention your interest in the discovery call or contact form—I'll reach out when circles begin.
                </p>
              </div>
            </div>

            {/* Investment Philosophy */}
            <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed">
                I believe this work should be accessible. Sliding scale and payment plans available for those who need it.
              </p>
              <p className="text-text-secondary/80 italic">
                If you're genuinely called to this work but cost is a barrier, reach out. Let's talk.
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
                  How is this different from therapy or coaching?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Therapy works with your mind and behavior. This work goes deeper—into the body, the energy field, the soul, the family system. We're not just healing wounds or managing symptoms. We're clearing patterns at their root and remembering who you are beyond all conditioning. Think: shamanic meets therapeutic, but grounded in practical integration.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Do I need experience with plant medicine?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No. About 60% of my clients have never touched medicine. Many come for family constellations, energy healing, or mentorship work. The medicine ceremonies are just one tool. What matters is your readiness to do deep work.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Is the Bufo ceremony safe?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  When properly facilitated with screening and preparation—yes. I've learned from indigenous elders and facilitated 50+ ceremonies safely. Every participant goes through medical screening, psychological assessment, 2 preparation sessions, ceremony with full support, and 3 integration sessions. However, this medicine is contraindicated with certain medications and conditions. I never bypass safety protocols.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  How do I know if you're the right guide?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  You'll feel it. If you've read this far and something resonates—that's your signal. Book the discovery call. We'll talk openly. There's no pressure, no pitch. If I'm not the right person, I'll tell you honestly and point you toward someone who is. Part of sovereignty is knowing when something isn't your medicine.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Can you work with people outside Spain/Mexico?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Yes. Energy healing, integration sessions, and mentorship work beautifully online. I work with clients globally via video. Medicine ceremonies must be in-person in Mazunte, Mexico.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  What if I'm skeptical about "energy work"?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Perfect. You don't need to believe anything. We work with what you can feel in your body—sensation, breath, emotion. Whether you call it "energy" or "nervous system regulation" doesn't matter. The experience is the same. Skepticism is healthy. Blind belief isn't required.
                </p>
              </div>

              <div className="border-b border-text-primary/10 pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  Do you offer payment plans?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Yes, for 3-month mentorship and ceremonies. We can discuss during the discovery call. I believe this work should be accessible—if you're genuinely called but cost is a barrier, reach out.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="text-2xl font-serif text-text-heading mb-4">
                  What's your cancellation policy?
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  <strong>Discovery call:</strong> Cancel anytime, no charge.<br/>
                  <strong>Single sessions:</strong> 48-hour cancellation notice for full refund.<br/>
                  <strong>Mentorship containers:</strong> Non-refundable after first session, but sessions can be rescheduled.<br/>
                  <strong>Medicine ceremonies:</strong> 50% deposit required. Full refund if you don't pass medical screening. Otherwise deposits are non-refundable due to preparation involved.
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
        <Route path="/event/:id" element={<EventRoute />} />
        <Route path="/place/:id" element={<PlaceRoute />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
