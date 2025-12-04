import Navigation from '../Navigation';
import Footer from '../Footer';

// All available resources
const ALL_RESOURCES = [
  {
    title: 'Psychedelic Integration Workbook',
    description: 'Complete guide for integrating all medicine work - psilocybin, LSD, ayahuasca, MDMA.',
    downloadPath: '/resources/Post_Ceremony_Integration_Workbook.docx',
    pages: 12,
    icon: '✦',
    category: 'Medicine Integration'
  },
  {
    title: 'Bufo Integration Companion',
    description: 'Specific guide for integrating 5-MeO-DMT/Bufo journeys and working with the void.',
    downloadPath: '/resources/Bufo_Integration_Companion.docx',
    pages: 10,
    icon: '✧',
    category: 'Medicine Integration'
  },
  {
    title: 'The Void Companion',
    description: 'Navigating ego death, the void space, and returning to form after dissolution.',
    downloadPath: '/resources/The_Void_Companion.docx',
    pages: 11,
    icon: '⊹',
    category: 'Medicine Integration'
  },
  {
    title: 'Ancestral Healing Guide',
    description: 'Family constellations work to clear inherited patterns and honor your lineage.',
    downloadPath: '/resources/Ancestral_Healing_Guide.docx',
    pages: 13,
    icon: '⊛',
    category: 'Family & Lineage'
  },
  {
    title: 'The Masculine Journey',
    description: "Men's work guide including father wound healing and reclaiming healthy masculine.",
    downloadPath: '/resources/The_Masculine_Journey.docx',
    pages: 15,
    icon: '✧',
    category: 'Gender Work'
  },
  {
    title: 'The Feminine Journey',
    description: "Women's work guide for reclaiming the wild feminine and healing mother wounds.",
    downloadPath: '/resources/The_Feminine_Journey.docx',
    pages: 14,
    icon: '✦',
    category: 'Gender Work'
  },
  {
    title: 'Conscious Partnership',
    description: 'Guide for couples navigating conscious relationship and sacred union.',
    downloadPath: '/resources/Couples_Conscious_Partnership.docx',
    pages: 12,
    icon: '⊹',
    category: 'Relationships'
  },
  {
    title: 'Sacred Rupture Journey',
    description: 'Navigating relationship endings, divorce, and heartbreak as initiation.',
    downloadPath: '/resources/Sacred_Rupture_Journey.docx',
    pages: 14,
    icon: '⊛',
    category: 'Relationships'
  },
  {
    title: 'Somatic Healing & Trauma Release',
    description: 'Body-based practices for releasing trauma stored in the nervous system.',
    downloadPath: '/resources/Somatic_Healing_Trauma_Release.docx',
    pages: 11,
    icon: '✦',
    category: 'Body & Healing'
  },
  {
    title: 'Building Your Sacred Practice',
    description: 'Daily rituals, meditation, and spiritual practices for integration.',
    downloadPath: '/resources/Building_Your_Sacred_Practice.docx',
    pages: 13,
    icon: '✧',
    category: 'Daily Practice'
  },
  {
    title: 'Timeline Shifting Meditation',
    description: 'Guided visualization for realigning with your highest timeline.',
    downloadPath: '/resources/Timeline_Shifting_Meditation.docx',
    pages: 8,
    icon: '⊹',
    category: 'Daily Practice'
  },
  {
    title: 'Grief & Sacred Sorrow',
    description: 'Honoring loss, working with grief, and allowing sacred sorrow.',
    downloadPath: '/resources/Grief_Sacred_Sorrow.docx',
    pages: 11,
    icon: '⊛',
    category: 'Shadow Work'
  },
  {
    title: 'Death Practice & Mortality',
    description: 'Memento mori practices for living fully by embracing death.',
    downloadPath: '/resources/Death_Practice_Mortality.docx',
    pages: 10,
    icon: '✦',
    category: 'Shadow Work'
  },
  {
    title: 'Sacred Business Blueprint',
    description: 'Aligning your offerings with soul purpose and creating from wholeness.',
    downloadPath: '/resources/Sacred_Business_Blueprint.docx',
    pages: 12,
    icon: '✧',
    category: 'Purpose & Work'
  }
];

// Group resources by category
const categories = [...new Set(ALL_RESOURCES.map(r => r.category))];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl text-accent-gold/40 mb-6">⊹</div>
            <h1 className="text-5xl md:text-6xl font-serif text-text-heading mb-6">
              Free Integration Tools
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              I believe integration wisdom should be accessible to everyone.
              All {ALL_RESOURCES.length} guides are yours—no email required.
            </p>
          </div>
        </div>
      </div>

      {/* Resources by Category */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {categories.map((category) => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl font-serif text-text-heading mb-8 pb-4 border-b border-text-primary/10">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ALL_RESOURCES.filter(r => r.category === category).map((resource, index) => (
                    <div
                      key={index}
                      className="group relative bg-warm-cream/50 border border-text-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-accent-gold/30"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="text-3xl text-accent-gold">{resource.icon}</div>
                          <div className="text-xs text-text-secondary/70 bg-warm-white px-2 py-1 rounded-full">
                            {resource.pages} pages
                          </div>
                        </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="text-3xl text-accent-gold/40">⊹</div>
            <h2 className="text-3xl font-serif text-text-heading">
              Want personalized guidance?
            </h2>
            <p className="text-text-secondary leading-relaxed">
              These resources are a starting point. If you're ready for deeper work with
              personal support, let's talk.
            </p>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 bg-accent-gold text-warm-white rounded-full hover:bg-accent-terracotta transition-colors font-medium"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
