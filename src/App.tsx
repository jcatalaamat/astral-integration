import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
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
        subtitle="Psychic Alignment • Identity Rebirth • Energetic Transformation"
        height="extra-large"
        image="/images/homepage/hero.jpg"
      >
        <p className="text-xl md:text-2xl text-text-secondary/90 font-serif italic max-w-2xl mx-auto mb-4">
          For those ready to hear the truth, see their path, and step into who they're meant to become.
        </p>
        <p className="text-text-secondary/70 font-light max-w-xl mx-auto mb-4 text-base leading-relaxed">
          This is not gentle guidance. This is alignment.
        </p>
        <p className="text-text-secondary/60 font-light max-w-lg mx-auto mb-8 text-sm">
          If you're standing at the threshold — no longer who you were, not yet who you're becoming — this is the work that carries you across.
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
                    I'm Astral. A psychic oracle, a guide through transformation, and a facilitator of alignment.
                  </p>
                </div>

                {/* The Truth */}
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I work with people navigating identity shifts — awakening, dissolution, rebirth, and the creation of their next chapter. My work blends psychic truth, energetic diagnostics, somatic awareness, family systems, and sacred medicine when appropriate.
                  </p>
                  <p>
                    I hear what others can't. I see timelines, patterns, and trajectories hidden beneath your conscious story. I map the energetic architecture of your system and realign you with the life you are meant to live.
                  </p>
                </div>

                {/* The Path */}
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    My own journey wasn't linear. It was an unraveling — many initiations, ego deaths, and rebirths that stripped me down to what was real.
                  </p>
                  <p>
                    Medicine cracked me open. Integration taught me how to live. This is the wisdom I now offer those walking through their own fire.
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

      {/* What Makes This Work Different */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                What Makes This Work Different
              </h2>
              <p className="text-lg text-text-secondary/80">
                Most healing gives you insight. Most coaching gives you action steps.<br/>
                <span className="text-accent-gold">This work gives you truth. Alignment. Rebirth.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-lg font-serif text-text-heading mb-2">Psychic Hearing</h3>
                <p className="text-text-secondary text-sm">Direct truth transmission — what your soul knows but your mind avoids</p>
              </div>
              <div className="p-6 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-lg font-serif text-text-heading mb-2">Timeline Mapping</h3>
                <p className="text-text-secondary text-sm">Reading consequences and future paths before they unfold</p>
              </div>
              <div className="p-6 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-lg font-serif text-text-heading mb-2">Energetic Diagnostics</h3>
                <p className="text-text-secondary text-sm">Locating the block beneath the block, the pattern beneath the pattern</p>
              </div>
              <div className="p-6 bg-warm-cream/50 rounded-2xl">
                <h3 className="text-lg font-serif text-text-heading mb-2">Strategic Clarity</h3>
                <p className="text-text-secondary text-sm">Real-world alignment for your next chapter — decisions, relationships, direction</p>
              </div>
              <div className="p-6 bg-warm-cream/50 rounded-2xl md:col-span-2">
                <h3 className="text-lg font-serif text-text-heading mb-2">Ceremonial Grounding</h3>
                <p className="text-text-secondary text-sm">Shadow work, ego death, emotional release — when the process calls for it</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-text-secondary/70 italic">
                It's not therapy. It's not coaching. It's not "just" energy work.<br/>
                <span className="text-text-heading font-serif">It's transformation through alignment.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Happens in a Session */}
      <div className="bg-warm-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                What Happens in a Session
              </h2>
              <p className="text-lg text-text-secondary/80 max-w-2xl mx-auto leading-relaxed">
                60-75 minutes of psychic, energetic, and strategic realignment.
              </p>
            </div>

            {/* 5-Step Process */}
            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-warm-cream/50 rounded-2xl items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold font-serif text-xl">1</div>
                <div>
                  <h3 className="text-xl font-serif text-text-heading mb-2">The Hearing</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I listen deeply to your field. I hear the truth underneath your surface story. I reveal what is actually going on. This alone can change your life.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-warm-cream/50 rounded-2xl items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold font-serif text-xl">2</div>
                <div>
                  <h3 className="text-xl font-serif text-text-heading mb-2">The Seeing</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I read your current timeline — where your choices are leading, what will repeat, where your destiny is misaligned, which path is opening, what happens if you don't change.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-warm-cream/50 rounded-2xl items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold font-serif text-xl">3</div>
                <div>
                  <h3 className="text-xl font-serif text-text-heading mb-2">The Mapping</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I scan your system — blocks, fears, leaks, cords, ancestral patterns, ego distortions, unintegrated experiences. I map your energetic architecture and show you why you feel stuck.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-warm-cream/50 rounded-2xl items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold font-serif text-xl">4</div>
                <div>
                  <h3 className="text-xl font-serif text-text-heading mb-2">The Alignment</h3>
                  <p className="text-text-secondary leading-relaxed">
                    I realign your intentions, relationships, identity, direction, choices, spiritual posture. This is where the shift happens.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-warm-cream/50 rounded-2xl items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold font-serif text-xl">5</div>
                <div>
                  <h3 className="text-xl font-serif text-text-heading mb-2">The Integration</h3>
                  <p className="text-text-secondary leading-relaxed">
                    You receive your next 3-5 steps, what to stop doing, what to begin, what to release, how to hold the new alignment. This is what makes the work real and applicable.
                  </p>
                </div>
              </div>
            </div>

            {/* After Session */}
            <div className="mt-12 p-8 bg-accent-gold/5 border border-accent-gold/20 rounded-2xl text-center">
              <h3 className="text-xl font-serif text-text-heading mb-4">After Your Session</h3>
              <p className="text-text-secondary leading-relaxed">
                You receive a voice-note summary with your main truths, timeline insights, next steps, energetic recommendations, and integration practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Pillars */}
      <div className="bg-warm-cream py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-4">
                The 4 Pillars
              </h2>
              <p className="text-lg text-text-secondary/80 font-light">
                How I work. What makes this different.
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="space-y-6">
              {/* Pillar 1 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Pillar 1</div>
                  <h3 className="text-xl font-serif text-text-heading">Psychic Truth</h3>
                  <p className="text-sm text-accent-gold/80 mt-1 italic">The Oracle</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-3">
                    I hear what others can't. Direct truth transmission. Reading the unspoken. Revealing root causes instantly.
                  </p>
                  <p className="text-text-secondary/70 text-sm italic">
                    "I show you what your soul already knows but your mind avoids."
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Pillar 2</div>
                  <h3 className="text-xl font-serif text-text-heading">Timelines & Alignment</h3>
                  <p className="text-sm text-accent-gold/80 mt-1 italic">Destiny Mapping</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-3">
                    I see consequences before they unfold. Timeline shifts, upcoming openings, collapse points, patterns that will repeat. The path of least suffering. The path of greatest expansion.
                  </p>
                  <p className="text-text-secondary/70 text-sm italic">
                    "I align your choices, relationships, and direction with the life you're meant to live."
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Pillar 3</div>
                  <h3 className="text-xl font-serif text-text-heading">Energetic Diagnostics</h3>
                  <p className="text-sm text-accent-gold/80 mt-1 italic">The Healing Layer</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-3">
                    I scan your system and locate energetic architecture. The block beneath the block. Trauma loops. Relational entanglements. Ancestral imprints. Places where your energy leaks.
                  </p>
                  <p className="text-text-secondary/70 text-sm italic">
                    "I help you release the energetic patterns keeping you stuck."
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="grid md:grid-cols-4 gap-6 items-start p-8 bg-warm-white rounded-2xl">
                <div className="md:col-span-1">
                  <div className="text-accent-gold text-sm font-medium uppercase tracking-wider mb-2">Pillar 4</div>
                  <h3 className="text-xl font-serif text-text-heading">Strategic Clarity</h3>
                  <p className="text-sm text-accent-gold/80 mt-1 italic">Spirit + Strategy</p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Helping founders see their next move. Identifying misaligned decisions. Showing you which relationships to keep or leave. Guiding creators into their actual purpose.
                  </p>
                  <p className="text-text-secondary/70 text-sm italic">
                    "I translate your spiritual alignment into real-world decisions."
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom message */}
            <div className="text-center mt-16 space-y-2">
              <p className="text-text-heading font-serif text-lg">
                You get the insight AND the practical direction.
              </p>
              <p className="text-text-secondary/70 italic">
                Not just guidance. A plan aligned with truth.
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

              {/* Astral Alignment Session */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl border-2 border-accent-gold/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <div className="text-xs text-accent-gold font-medium uppercase tracking-wider mb-1">Signature Offer</div>
                    <h3 className="text-2xl font-serif text-text-heading">Astral Alignment Session</h3>
                    <p className="text-xl text-accent-gold font-medium">€250-400</p>
                    <p className="text-text-secondary/80">60-75 minutes • Online or in-person</p>
                  </div>
                  <a
                    href="https://calendly.com/astral-integration/astral-alignment-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Book Session
                  </a>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A complete psychic, energetic, and strategic realignment. The Hearing, The Seeing, The Mapping, The Alignment, The Integration — all in one session.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed mb-3">
                  Includes: Full session + voice-note summary with your main truths, timeline insights, next steps, and integration practices.
                </p>
                <p className="text-text-secondary/70 text-sm italic">
                  All paths begin here. All other work is invitation-only.
                </p>
              </div>

              {/* Astral Alignment Follow-Up */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">Astral Alignment Follow-Up</h3>
                    <p className="text-xl text-accent-gold font-medium">€120-180</p>
                    <p className="text-text-secondary/80">30-40 minutes • Online or in-person</p>
                  </div>
                  <a
                    href="https://calendly.com/astral-integration/alignment-follow-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Book Follow-Up
                  </a>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A short psychic recalibration for continued alignment. Perfect for those wanting clarity without the full session.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed">
                  Includes: Brief psychic hearing • Timeline update • Energetic scan • 2-3 key shifts + next steps
                </p>
              </div>

              {/* The Astral Map */}
              <div className="p-8 md:p-10 bg-warm-cream/50 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif text-text-heading">The Astral Map</h3>
                    <p className="text-xl text-accent-gold font-medium">€180-250</p>
                    <p className="text-text-secondary/80">Psychic reading • 7-day delivery • No live call required</p>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium whitespace-nowrap inline-block text-center"
                  >
                    Order Your Map
                  </button>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A deep psychic and energetic reading of your life, path, patterns, and next chapter — delivered as a 15-20 minute voice note.
                </p>
                <p className="text-text-secondary/80 text-sm leading-relaxed">
                  Includes: Your current timeline • Your biggest block • Your energetic architecture • What's ending • What's beginning • Your next 3-5 steps
                </p>
              </div>

              </div>

          </div>
        </div>
      </div>

      {/* Invitation-Only Work */}
      <div className="bg-gradient-to-b from-warm-cream to-warm-peach/30 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-text-heading mb-4">
                Invitation-Only Work
              </h2>
              <p className="text-xl text-accent-gold font-serif italic mb-6">
                For those called into deeper transformation.
              </p>
              <p className="text-text-secondary/80 leading-relaxed max-w-2xl mx-auto">
                Not all work happens through single sessions. Some processes require a longer field, a deeper container, or a more specific kind of guidance. These offerings are not publicly bookable — they open only through resonance, readiness, and after an Alignment Session.
              </p>
            </div>

            {/* Offerings Grid */}
            <div className="space-y-8">
              {/* Founder Oracle Consulting */}
              <div className="p-8 bg-warm-white/60 rounded-2xl border border-accent-gold/10">
                <h3 className="text-2xl font-serif text-text-heading mb-3">Founder Oracle Consulting</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  High-level strategic and spiritual counsel for founders, creators, and leaders. I read the energetic architecture of your business, partnerships, decisions, and trajectory — and realign you with the path that actually expands you.
                </p>
                <p className="text-text-secondary/70 text-sm">
                  Pattern diagnosis • Leadership alignment • Relationship dynamics • Directional clarity • Vision activation
                </p>
                <p className="text-accent-gold/80 text-sm mt-4 italic">By application only.</p>
              </div>

              {/* Deep Transformation Containers */}
              <div className="p-8 bg-warm-white/60 rounded-2xl border border-accent-gold/10">
                <h3 className="text-2xl font-serif text-text-heading mb-3">Deep Transformation Containers</h3>
                <p className="text-text-secondary/70 text-sm mb-3">1–3 months</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  For those in a threshold moment: identity dissolution, rebirth, major life shifts, spiritual awakenings, relationship endings, creative pivots. A private Oracle-style container with ongoing guidance.
                </p>
                <p className="text-text-secondary/70 text-sm">
                  Alignment sessions • Ongoing energetic + strategic guidance • Voice-message support • Structural recalibration
                </p>
                <p className="text-accent-gold/80 text-sm mt-4 italic">Opens when the process calls for it.</p>
              </div>

              {/* Medicine Integration */}
              <div className="p-8 bg-warm-white/60 rounded-2xl border border-accent-gold/10">
                <h3 className="text-2xl font-serif text-text-heading mb-3">Medicine Integration</h3>
                <p className="text-text-secondary/70 text-sm mb-3">Non-drug process</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  For people navigating intense spiritual openings, ego dissolution, or after-effects of plant medicine — without needing to take anything new. A spiritual restructuring process.
                </p>
                <p className="text-text-secondary/70 text-sm">
                  Energetic stabilization • Identity reconstruction • Shadow integration • Nervous system coherence • Timeline recalibration
                </p>
              </div>

              {/* Private Plant Medicine Work */}
              <div className="p-8 bg-warm-white/60 rounded-2xl border border-accent-gold/10">
                <h3 className="text-2xl font-serif text-text-heading mb-3">Private Plant Medicine Work</h3>
                <p className="text-text-secondary/70 text-sm mb-3">By invitation only</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Bufo Alvarius and other sacred modalities are not services. They are accelerators — used only when the alignment is exact. Available only after an Alignment Session, when your system is ready, and when the work calls for it.
                </p>
                <p className="text-text-secondary/70 text-sm">
                  Includes preparation, ceremony, and integration.
                </p>
              </div>

              {/* Retreats & Immersions */}
              <div className="p-8 bg-warm-white/60 rounded-2xl border border-accent-gold/10">
                <h3 className="text-2xl font-serif text-text-heading mb-3">Retreats & Immersions</h3>
                <p className="text-text-secondary/70 text-sm mb-3">Waitlist only</p>
                <p className="text-text-secondary leading-relaxed">
                  Small, curated containers in sacred places. Deep work for groups of 4–8. Announced privately to the inner circle first.
                </p>
              </div>
            </div>

            {/* Closing CTA */}
            <div className="text-center mt-16">
              <p className="text-text-heading font-serif text-lg mb-6">
                If any of this calls you, begin with an Alignment Session.
              </p>
              <p className="text-accent-gold font-serif italic">
                All deeper paths open from there.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-8 px-8 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Book Discovery Call
              </button>
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
                  I offer psychic alignment sessions — a blend of clairaudient insight, timeline reading, energetic diagnostics, and strategic clarity. I hear what others can't, see where your path is leading, map the invisible architecture beneath your challenges, and give you both the truth and the practical next steps.
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
                  Yes. Alignment sessions happen online via video. I work with clients worldwide. In-person sessions available in Barcelona and Mazunte.
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
                  Astral Alignment Sessions are €250-400. Follow-Up Sessions €120-180. The Astral Map (psychic reading) €180-250. If you feel deeply called but need an adjustment, reach out. Alignment always finds a way.
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
