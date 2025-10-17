import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'circles' | 'sessions' | 'medicine' | 'trainings'>('circles');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-900 via-cosmic-800 to-black text-sacred-moon">
      {/* Cosmic aurora background - lighter */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-mystic-purple rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 -right-4 w-[500px] h-[500px] bg-sacred-green rounded-full mix-blend-screen filter blur-3xl animate-breathe" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>

      {/* Sacred geometry overlay */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-6 text-sacred-gold animate-breathe opacity-60">⊹</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
              Work With Me
            </h1>
            <p className="text-xl md:text-2xl text-mystic-lavender/80 mb-8">
              Pathways to transformation, healing, and awakening
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab('circles')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'circles'
                    ? 'bg-gradient-to-r from-mystic-purple to-mystic-indigo text-sacred-moon shadow-lg shadow-mystic-purple/50'
                    : 'bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-mystic-lavender/80 hover:bg-mystic-purple/30'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Circles & Groups</span>
              </button>
              <button
                onClick={() => setActiveTab('sessions')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'sessions'
                    ? 'bg-gradient-to-r from-mystic-purple to-mystic-indigo text-sacred-moon shadow-lg shadow-mystic-purple/50'
                    : 'bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-mystic-lavender/80 hover:bg-mystic-purple/30'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>1:1 Services</span>
              </button>
              <button
                onClick={() => setActiveTab('medicine')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'medicine'
                    ? 'bg-gradient-to-r from-mystic-purple to-mystic-indigo text-sacred-moon shadow-lg shadow-mystic-purple/50'
                    : 'bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-mystic-lavender/80 hover:bg-mystic-purple/30'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                <span>Medicine Work</span>
              </button>
              <button
                onClick={() => setActiveTab('trainings')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'trainings'
                    ? 'bg-gradient-to-r from-mystic-purple to-mystic-indigo text-sacred-moon shadow-lg shadow-mystic-purple/50'
                    : 'bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-mystic-lavender/80 hover:bg-mystic-purple/30'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Trainings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Circles & Groups */}
            {activeTab === 'circles' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Men's Circle */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Men's Circle: Becoming You
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">The Self, The King, The Magician, The Lover</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        A sacred container for men to release anger healthily, meet their higher self and inner child,
                        heal ancestral wounds, and become the self they haven't dared to be.
                      </p>
                      <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Weekly/Bi-weekly calls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Private WhatsApp/Discord group</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Deep emotional healing work</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€150-200</div>
                      <div className="text-mystic-lavender/70 mb-4">/month</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Join Circle
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Women's Circle */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Women's Sacred Leadership Circle
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Astral Integration Storytelling for Women</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        A space for women to step into sacred feminine leadership, practice astral integration through
                        storytelling, and clear ancestral DNA patterns.
                      </p>
                      <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Bi-weekly group calls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Limited to 8-12 women</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Channeling & portal activation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€150</div>
                      <div className="text-mystic-lavender/70 mb-4">/month</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Join Circle
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Creative Mastermind */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Inner Ascend Creative Mastermind
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">For Visionaries, Healers & Conscious Entrepreneurs</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Weekly group container for spiritual business guidance, channeled transformation,
                        daily accountability, and mastermind collaboration.
                      </p>
                      <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Weekly calls + daily WhatsApp community</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Energy scans & group support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Token exchange community</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€420</div>
                      <div className="text-mystic-lavender/70 mb-4">/month</div>
                      <div className="text-sm text-mystic-lavender/60 mb-4">or €4,200/year</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Join Mastermind
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Healing Circle */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Healing Circle
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Open Space for Community Healing</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Monthly donation-based healing ceremony with energy healing, meditation, group intention
                        setting, and sacred space holding.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-sacred-gold mb-2">Donation</div>
                      <div className="text-mystic-lavender/70 mb-4">suggested €20-50</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 1:1 Sessions */}
            {activeTab === 'sessions' && (
              <div className="space-y-8 animate-fadeIn">
                {/* 6-Month Journey */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        6-Month Transformation Journey
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Becoming the Self You Haven't Dared to Be</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Deep transformational work including weekly 1:1 sessions, energy healing, family constellations,
                        medicine integration, somatic bodywork, and ongoing support.
                      </p>
                      <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Weekly 1:1 sessions (24 total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Voxer/WhatsApp support between sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Multiple healing modalities</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€3,600</div>
                      <div className="text-mystic-lavender/70 mb-4">€600/month or €850/month</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 3-Month Intensive */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        3-Month Intensive Program
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Accelerated Healing & Integration</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Focused work on specific trauma, patterns, relationships, business alignment, medicine
                        integration, or spiritual awakening.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€1,800</div>
                      <div className="text-mystic-lavender/70 mb-4">€600/month</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Single Sessions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                    <h4 className="text-xl font-serif font-bold text-mystic-lavender mb-3">
                      Mystery School Energy Healing
                    </h4>
                    <p className="text-mystic-lavender/70 mb-4">
                      Deep energy work, clearing, activation, and soul retrieval.
                    </p>
                    <div className="text-2xl font-bold text-sacred-gold">€120-150</div>
                  </div>

                  <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                    <h4 className="text-xl font-serif font-bold text-mystic-lavender mb-3">
                      Psychic Readings & Scans
                    </h4>
                    <p className="text-mystic-lavender/70 mb-4">
                      Intuitive guidance, energy scans, and channeled messages.
                    </p>
                    <div className="text-2xl font-bold text-sacred-gold">€120</div>
                  </div>

                  <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                    <h4 className="text-xl font-serif font-bold text-mystic-lavender mb-3">
                      Family Constellations
                    </h4>
                    <p className="text-mystic-lavender/70 mb-4">
                      Heal ancestral patterns and family dynamics.
                    </p>
                    <div className="text-2xl font-bold text-sacred-gold">€150</div>
                  </div>

                  <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-2xl p-6">
                    <h4 className="text-xl font-serif font-bold text-mystic-lavender mb-3">
                      Somatic Bodywork
                    </h4>
                    <p className="text-mystic-lavender/70 mb-4">
                      Release trauma stored in the body through touch and presence.
                    </p>
                    <div className="text-2xl font-bold text-sacred-gold">€120</div>
                  </div>
                </div>
              </div>
            )}

            {/* Medicine Work */}
            {activeTab === 'medicine' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="bg-sacred-gold/10 backdrop-blur-xl border border-sacred-gold/30 rounded-3xl p-8 mb-8">
                  <p className="text-mystic-lavender/90 text-center leading-relaxed">
                    <strong className="text-sacred-gold">Sacred Medicine Work:</strong> All medicine work is conducted with the utmost respect,
                    preparation, and safety protocols. Health screening, contraindication review, and informed consent
                    are required. This is not recreational—it is sacred healing work complementary to medical care.
                  </p>
                </div>

                {/* Bufo Ceremonies */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Bufo Alvarius Ceremonies
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Ego Dissolution & Divine Remembrance</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        One-on-one or small group ceremonies with 5-MeO-DMT (Bufo Alvarius toad medicine).
                        Includes preparation sessions, ceremony, and integration support.
                      </p>
                      <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Pre-ceremony preparation & screening</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Sacred ceremony with experienced facilitation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Post-ceremony integration sessions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€300-500</div>
                      <div className="text-mystic-lavender/70 mb-4">/ceremony</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Integration Coaching */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Medicine Integration Coaching
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Making Sense of the Journey</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        For those who've had medicine experiences and need support integrating the insights
                        into daily life. Available for Bufo, ayahuasca, psilocybin, and other plant medicines.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€120</div>
                      <div className="text-mystic-lavender/70 mb-4">/session</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Book Session
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Private Retreats */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Private Medicine Retreats
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Immersive Healing Journeys</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Multi-day private retreats in Mazunte or Barcelona with multiple ceremonies,
                        integration sessions, somatic work, and personalized healing protocols.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€1,500-3,000</div>
                      <div className="text-mystic-lavender/70 mb-4">3-7 days</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Custom Inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trainings */}
            {activeTab === 'trainings' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Bufo Teacher Training */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Bufo Alvarius Facilitator Training
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Sacred Medicine Guardianship</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Comprehensive training for those called to serve as Bufo facilitators. Includes ceremony
                        protocols, safety, energetic preparation, integration support, and ethics.
                      </p>
                      <ul className="space-y-2 text-mystic-lavender/70 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>In-person intensive training</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Hands-on practice & mentorship</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-sacred-gold">✦</span>
                          <span>Ongoing support & supervision</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€5,000</div>
                      <div className="text-mystic-lavender/70 mb-4">6-12 months</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Integration Practitioner */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Integration Practitioner Certification
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Supporting the Psychedelic Renaissance</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Training for therapists, coaches, and healers to support clients with medicine integration.
                        Learn frameworks, protocols, and ethical guidelines.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€2,500</div>
                      <div className="text-mystic-lavender/70 mb-4">3 months</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mystery School Training */}
                <div className="bg-cosmic-900/50 backdrop-blur-xl border border-mystic-lavender/20 rounded-3xl p-8 hover:border-mystic-purple/40 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-mystic-lavender mb-2">
                        Mystery School Energy Healing Training
                      </h3>
                      <p className="text-sacred-gold mb-4 italic">Awakening Your Healing Gifts</p>
                      <p className="text-mystic-lavender/80 mb-4">
                        Learn energy healing, channeling, activation work, and sacred practices from multiple
                        lineages and traditions.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-3xl font-bold text-sacred-gold mb-2">€3,000</div>
                      <div className="text-mystic-lavender/70 mb-4">6 months</div>
                      <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-mystic-purple to-mystic-indigo rounded-full text-sacred-moon font-semibold hover:shadow-lg hover:shadow-mystic-purple/50 transition-all"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-sacred-moon/5 backdrop-blur-xl border-t border-mystic-lavender/20 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 text-mystic-lavender">
                Not Sure Which Path Is Right for You?
              </h2>
              <p className="text-lg text-mystic-lavender/80 mb-8">
                Let's have a conversation about where you are and where you want to go.
                I'll help you find the right approach for your unique journey.
              </p>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet text-sacred-moon rounded-2xl font-semibold hover:shadow-2xl hover:shadow-mystic-purple/50 transition-all"
              >
                <span>Schedule a Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
