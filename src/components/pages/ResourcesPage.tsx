import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import WarmHero from '../shared/WarmHero';

type Category = 'all' | 'integration' | 'transformation' | 'advanced' | 'relational';

interface Resource {
  title: string;
  description: string;
  downloadPath: string;
  category: Category;
  pages: number;
  readingTime: number;
  downloads: string;
  icon: string;
  iconColor: string;
}

export default function ResourcesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS integration - replace with your actual EmailJS credentials
      // For now, simulating a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // TODO: Integrate with EmailJS or ConvertKit
      // Example EmailJS call:
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      //   email: email,
      //   message: 'New newsletter signup'
      // }, 'YOUR_PUBLIC_KEY');

      setSubmitStatus('success');
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resources: Resource[] = [
    // Integration & Embodiment (5 guides)
    {
      title: 'Psychedelic Integration',
      description: 'Complete guide for integrating all medicine work - psilocybin, LSD, ayahuasca, MDMA.',
      downloadPath: '/resources/Post_Ceremony_Integration_Workbook.docx',
      category: 'integration',
      pages: 12,
      readingTime: 25,
      downloads: '500+',
      icon: '✦',
      iconColor: 'text-accent-gold'
    },
    {
      title: 'Bufo Integration Companion',
      description: 'Specific guide for integrating 5-MeO-DMT/Bufo journeys and working with the void.',
      downloadPath: '/resources/Bufo_Integration_Companion.docx',
      category: 'integration',
      pages: 10,
      readingTime: 20,
      downloads: '300+',
      icon: '✧',
      iconColor: 'text-accent-terracotta'
    },
    {
      title: 'Somatic Healing & Trauma Release',
      description: 'Body-based practices for releasing stored trauma and returning to embodied presence.',
      downloadPath: '/resources/Somatic_Healing_Trauma_Release.docx',
      category: 'integration',
      pages: 14,
      readingTime: 30,
      downloads: '350+',
      icon: '⊹',
      iconColor: 'text-accent-sage'
    },
    {
      title: 'Building Your Sacred Practice',
      description: 'Create sustainable daily practices for meditation, grounding, and spiritual growth.',
      downloadPath: '/resources/Building_Your_Sacred_Practice.docx',
      category: 'integration',
      pages: 9,
      readingTime: 18,
      downloads: '450+',
      icon: '✦',
      iconColor: 'text-accent-gold'
    },
    {
      title: 'Presence Mentorship Guide',
      description: 'Month-by-month deepening practices and daily presence work for embodied awareness.',
      downloadPath: '/resources/Timeline_Shifting_Meditation.docx',
      category: 'integration',
      pages: 16,
      readingTime: 35,
      downloads: '280+',
      icon: '✧',
      iconColor: 'text-accent-terracotta'
    },

    // Life Work & Transformation (4 guides)
    {
      title: 'Sacred Business Blueprint',
      description: 'Creative path guide to align your offerings with soul purpose and sacred flow.',
      downloadPath: '/resources/Sacred_Business_Blueprint.docx',
      category: 'transformation',
      pages: 11,
      readingTime: 22,
      downloads: '420+',
      icon: '⊹',
      iconColor: 'text-accent-sage'
    },
    {
      title: 'Sacred Rupture Journey',
      description: 'Navigating spiritual emergence and identity dissolution after profound medicine work.',
      downloadPath: '/resources/Sacred_Rupture_Journey.docx',
      category: 'transformation',
      pages: 13,
      readingTime: 28,
      downloads: '260+',
      icon: '✦',
      iconColor: 'text-accent-gold'
    },
    {
      title: 'The Masculine Journey',
      description: 'Men\'s work guide including father wound healing and reclaiming healthy masculine.',
      downloadPath: '/resources/The_Masculine_Journey.docx',
      category: 'transformation',
      pages: 15,
      readingTime: 32,
      downloads: '380+',
      icon: '✧',
      iconColor: 'text-accent-terracotta'
    },
    {
      title: 'The Feminine Journey',
      description: 'Women\'s work including mother wound healing and reclaiming feminine power.',
      downloadPath: '/resources/The_Feminine_Journey.docx',
      category: 'transformation',
      pages: 15,
      readingTime: 32,
      downloads: '400+',
      icon: '⊹',
      iconColor: 'text-accent-sage'
    },

    // Advanced Practices (3 guides)
    {
      title: 'The Void Companion',
      description: 'Working with emptiness, meaninglessness, and the existential void after awakening.',
      downloadPath: '/resources/The_Void_Companion.docx',
      category: 'advanced',
      pages: 12,
      readingTime: 25,
      downloads: '220+',
      icon: '✦',
      iconColor: 'text-accent-gold'
    },
    {
      title: 'Death Practice & Mortality',
      description: 'Contemplating mortality, preparing for death, and living fully in the face of impermanence.',
      downloadPath: '/resources/Death_Practice_Mortality.docx',
      category: 'advanced',
      pages: 10,
      readingTime: 20,
      downloads: '200+',
      icon: '✧',
      iconColor: 'text-accent-terracotta'
    },
    {
      title: 'Grief & Sacred Sorrow',
      description: 'Processing grief, loss, and ancestral sorrow with ceremony and ritual.',
      downloadPath: '/resources/Grief_Sacred_Sorrow.docx',
      category: 'advanced',
      pages: 11,
      readingTime: 22,
      downloads: '240+',
      icon: '⊹',
      iconColor: 'text-accent-sage'
    },

    // Relational & Ancestral (2 guides)
    {
      title: 'Ancestral Healing Guide',
      description: 'Family constellations work to clear inherited patterns and honor your lineage.',
      downloadPath: '/resources/Ancestral_Healing_Guide.docx',
      category: 'relational',
      pages: 13,
      readingTime: 27,
      downloads: '310+',
      icon: '✦',
      iconColor: 'text-accent-gold'
    },
    {
      title: 'Couples & Conscious Partnership',
      description: 'Relationship work for creating conscious, sacred partnerships and navigating conflict.',
      downloadPath: '/resources/Couples_Conscious_Partnership.docx',
      category: 'relational',
      pages: 14,
      readingTime: 30,
      downloads: '340+',
      icon: '✧',
      iconColor: 'text-accent-terracotta'
    }
  ];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  const categories = [
    { id: 'all' as Category, label: 'All Resources', count: resources.length },
    { id: 'integration' as Category, label: 'Integration & Embodiment', count: 5 },
    { id: 'transformation' as Category, label: 'Life Work & Transformation', count: 4 },
    { id: 'advanced' as Category, label: 'Advanced Practices', count: 3 },
    { id: 'relational' as Category, label: 'Relational & Ancestral', count: 2 }
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />
      {/* Hero Section */}
      <WarmHero
        title="Resources"
        subtitle="Teachings, reflections, and tools for your journey."
        height="extra-large"
        image="/images/resources/hero.jpg"
      />

      {/* Newsletter Signup Section */}
      <div className="bg-gradient-to-br from-accent-terracotta/5 via-warm-peach/30 to-accent-sage/5 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
              Get the Full Library + Weekly Integration Practices
            </h2>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              Join 500+ conscious seekers receiving integration wisdom
            </p>

            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-full border-2 border-accent-gold/30 focus:border-accent-gold focus:outline-none text-text-primary placeholder-text-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Access'}
                </button>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <p className="mt-4 text-accent-sage font-medium">
                  Thank you! Check your email for the full library.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-accent-terracotta font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            <p className="text-sm text-text-secondary/60 mt-6 italic">
              Free resources below. Full library and weekly practices via email.
            </p>
          </div>
        </div>
      </div>

      {/* Free Resources Vault */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-text-heading mb-6">
                Integration Tools
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Free resources for your journey
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-accent-gold text-warm-white shadow-lg'
                      : 'bg-warm-white text-text-secondary border border-text-primary/10 hover:border-accent-gold/30 hover:shadow-md'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Resource Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <div
                  key={index}
                  className="group relative bg-warm-white border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30"
                >
                  <div className="space-y-3">
                    {/* Icon with larger size */}
                    <div className={`text-5xl ${resource.iconColor}`}>{resource.icon}</div>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-xs text-text-secondary/70">
                      <span>{resource.pages} pages</span>
                      <span>•</span>
                      <span>{resource.readingTime} min read</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif text-text-heading">{resource.title}</h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {resource.description}
                    </p>

                    {/* Download Stats */}
                    <div className="text-xs text-text-secondary/60 italic">
                      Downloaded {resource.downloads} times
                    </div>

                    {/* Download Link */}
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

            <p className="text-center text-text-secondary mt-12 italic text-sm">
              All resources are freely available for download. May they serve your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials - Visual Section */}
      <div className="bg-warm-cream py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading text-center mb-20">
              Voices From The Journey
            </h2>

            <div className="space-y-16">
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic">
                  "Working with Astral changed my life. Not in a cliché way—in a 'I can't go back to who
                  I was' way. He sees you. Really sees you. And he holds space for whatever needs to emerge."
                </p>
                <p className="text-accent-gold font-medium">— Maria, Barcelona</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic">
                  "The Bufo ceremony was the most profound experience of my life. Astral's preparation,
                  presence, and integration support made me feel completely safe to surrender. I finally
                  understand what 'coming home to myself' means."
                </p>
                <p className="text-accent-gold font-medium">— David, USA</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed italic">
                  "The men's circle gave me permission to feel everything I'd been holding back for decades.
                  To cry. To rage. To laugh. To finally be myself without apology."
                </p>
                <p className="text-accent-gold font-medium">— Carlos, Mexico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Invitation */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-terracotta/10 via-warm-peach to-accent-sage/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-text-heading">
              Ready to begin your journey?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                to="/services"
                onClick={scrollToTop}
                className="px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
              >
                Explore how we work
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="px-10 py-4 border-2 border-accent-gold text-accent-gold rounded-full hover:bg-accent-gold hover:text-warm-white transition-colors font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
