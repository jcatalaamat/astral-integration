import React, { useState, useEffect } from 'react';
import TextureBackgroundReact from './components/utility/TextureBackgroundReact';
import './base.css';

export default function SacredChamberReact() {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isReady, setIsReady] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Simulate loading for ceremonial entrance
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate header opacity based on scroll position
  const headerOpacity = Math.max(0, Math.min(1, scrollPosition / 200));
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when a section is selected
  const handleMobileNavigation = (section) => {
    navigateToSection(section);
    setMobileMenuOpen(false);
  };
  
  // Ceremonial testimonials from Sacred Chamber graduates
  const testimonials = [
    {
      quote: "The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This isn't coaching—it's remembrance of your divine nature.",
      name: "Elena R.",
      title: "Spiritual Guide",
      journey: "6-month Sacred Chamber Journey"
    },
    {
      quote: "I've worked with spiritual mentors for years, but what Jordi creates in the Sacred Chamber is beyond anything I've experienced. The container itself is medicine.",
      name: "Michael L.",
      title: "Executive & Mystic",
      journey: "Sacred Chamber Graduate"
    },
    {
      quote: "There are moments in the Chamber when time stops, and you feel yourself being rewoven at the soul level. This work reaches places nothing else can touch.",
      name: "Sarah J.",
      title: "Artist & Ceremonialist",
      journey: "3-cycle Sacred Chamber Initiate"
    }
  ];

  // Journey phases within the Sacred Chamber
  const journeyPhases = [
    {
      name: "Sacred Alignment",
      description: "Our journey begins with a profound alignment ritual—setting intentions, creating sacred space, and opening to divine guidance.",
      symbol: "☉",
      duration: "Weeks 1-3"
    },
    {
      name: "Shadow Integration",
      description: "We enter the shadows together, illuminating patterns and reclaiming the wisdom and power hidden within forgotten aspects of self.",
      symbol: "☽",
      duration: "Weeks 4-9"
    },
    {
      name: "Divine Remembrance",
      description: "Reconnection to your sovereign nature and the cosmic wisdom that has always lived within you, awakening dormant gifts.",
      symbol: "✧",
      duration: "Weeks 10-15"
    },
    {
      name: "Sacred Embodiment",
      description: "Integrating insights into lived experience, establishing new patterns, and anchoring your transformation in daily practice.",
      symbol: "⊛",
      duration: "Weeks 16-20"
    }
  ];
  
  // Readiness indicators
  const readinessChecklist = [
    "You've done personal development work but sense a deeper calling",
    "You're ready to move beyond productivity and into presence",
    "You feel drawn to sacred ritual and mystical practice",
    "You're willing to examine shadow aspects with courage and compassion",
    "You sense there's a greater purpose to your existence waiting to unfold",
    "You're prepared to invest time, energy, and resources in your transformation"
  ];
  
  const handleApplyClick = () => {
    // Simulate a ceremonial pause before navigation
    window.scrollTo(0, 0);
    window.location.href = '/sacred-chamber/application';
  };
  
  const navigateToHome = () => {
    window.location.href = '/';
  };
  
  const navigateToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-stone-950 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating navigation header */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerOpacity > 0.1 ? 'backdrop-blur-md bg-stone-950/80' : 'bg-transparent'}`}
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={navigateToHome} className="text-amber-400 font-serif text-xl">
            The Mirror Path
          </button>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex md:flex-row md:space-x-12 md:items-center">
            <button onClick={() => navigateToSection('overview')} className="px-2 py-1">
              <span className={`text-sm ${activeSection === 'overview' ? 'text-amber-400' : 'text-amber-400/70'}`}>Overview</span>
            </button>
            <button onClick={() => navigateToSection('journey')} className="px-2 py-1">
              <span className={`text-sm ${activeSection === 'journey' ? 'text-amber-400' : 'text-amber-400/70'}`}>The Journey</span>
            </button>
            <button onClick={() => navigateToSection('testimonials')} className="px-2 py-1">
              <span className={`text-sm ${activeSection === 'testimonials' ? 'text-amber-400' : 'text-amber-400/70'}`}>Reflections</span>
            </button>
            <button onClick={() => navigateToSection('readiness')} className="px-2 py-1">
              <span className={`text-sm ${activeSection === 'readiness' ? 'text-amber-400' : 'text-amber-400/70'}`}>Your Readiness</span>
            </button>
            
            <button 
              onClick={handleApplyClick}
              className="bg-amber-800/30 border border-amber-500/30 px-4 py-2 rounded-full hover:bg-amber-800/50 transition-all duration-300 group overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-500/10 blur-sm transition-opacity duration-500"></div>
              <span className="text-amber-300 text-sm">Begin My Journey</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden z-50">
            <div className={`w-6 h-0.5 bg-amber-400 mb-1.5 transform transition-transform ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-amber-400 mb-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-amber-400 transform transition-transform ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-stone-950 border-t border-amber-900/30 py-4 px-4 md:hidden">
            <button 
              onClick={() => handleMobileNavigation('overview')}
              className="py-3 border-b border-amber-900/20 w-full text-left"
            >
              <span className={`text-base ${activeSection === 'overview' ? 'text-amber-400' : 'text-amber-400/70'}`}>Overview</span>
            </button>
            
            <button 
              onClick={() => handleMobileNavigation('journey')}
              className="py-3 border-b border-amber-900/20 w-full text-left"
            >
              <span className={`text-base ${activeSection === 'journey' ? 'text-amber-400' : 'text-amber-400/70'}`}>The Journey</span>
            </button>
            
            <button 
              onClick={() => handleMobileNavigation('testimonials')}
              className="py-3 border-b border-amber-900/20 w-full text-left"
            >
              <span className={`text-base ${activeSection === 'testimonials' ? 'text-amber-400' : 'text-amber-400/70'}`}>Reflections</span>
            </button>
            
            <button 
              onClick={() => handleMobileNavigation('readiness')}
              className="py-3 border-b border-amber-900/20 w-full text-left"
            >
              <span className={`text-base ${activeSection === 'readiness' ? 'text-amber-400' : 'text-amber-400/70'}`}>Your Readiness</span>
            </button>
            
            <button 
              onClick={handleApplyClick}
              className="mt-6 bg-amber-800/30 border border-amber-500/30 px-4 py-3 rounded-full flex items-center justify-center w-full"
            >
              <span className="text-amber-300 text-base">Begin My Journey</span>
            </button>
          </div>
        )}
      </div>
    
      <div className="flex-1">
        {/* Hero section with immersive imagery */}
        <div className="h-screen relative overflow-hidden">
          {/* Background sacred image */}
          <div className="absolute inset-0 bg-stone-950">
            {/* Sacred portrait image */}
            <img
              src="/images/sacred-portraits/hero-portrait.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Sacred Chamber Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 to-stone-950"></div>
          </div>
          
          {/* Sacred ambient glow effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow" style={{ animationDuration: '7s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          </div>
          
          {/* Animated sacred symbols and golden shimmer */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <div 
                key={`symbol-${i}`}
                className="absolute animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${15 + Math.random() * 20}s`,
                  animationDelay: `${Math.random() * 10}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                <span className="text-amber-400/30 text-4xl">
                  {['✧', '⊛', '✦', '◯', '☉', '☽'][Math.floor(Math.random() * 6)]}
                </span>
              </div>
            ))}
            
            {/* Golden shimmer particles */}
            {[...Array(40)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                className="absolute bg-amber-400/30 rounded-full blur-sm animate-float"
                style={{
                  width: 1 + Math.random() * 3,
                  height: 1 + Math.random() * 3,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${10 + Math.random() * 20}s`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-5xl px-6 text-center">
              <p className="text-amber-300 text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
                A Sacred Invitation
              </p>
              
              <h1 className="text-amber-100 text-4xl sm:text-5xl md:text-7xl font-bold font-serif mb-4 sm:mb-8">
                The Sacred Chamber
              </h1>
              
              <p className="text-amber-200 text-lg sm:text-xl md:text-2xl italic font-serif mb-6 sm:mb-12 max-w-3xl mx-auto">
                "Not everyone will feel the call. If you do — follow it."
              </p>
              
              <p className="text-amber-50 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
                An intimate 5-month journey of profound transformation through sacred ritual, mystical wisdom, and soul remembrance.
              </p>
              
              <div>
                <button 
                  onClick={() => navigateToSection('overview')}
                  className="bg-gradient-to-r from-amber-800 to-amber-700 px-6 sm:px-10 py-3 sm:py-4 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700"></div>
                  <span className="text-white font-medium text-base sm:text-lg">Enter The Sacred Chamber</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overview Section */}
        <div id="overview" className="py-16 sm:py-24 md:py-32 px-4 relative bg-stone-950">
          <TextureBackgroundReact type="noise" opacity={0.05} className="absolute inset-0">
            <div className="w-full h-full"></div>
          </TextureBackgroundReact>
          
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <p className="text-amber-400 text-base sm:text-lg mb-3 sm:mb-4">The Sacred Chamber is Unlike Any Other Space</p>
              <h2 className="text-amber-100 text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">
                This is Not Coaching. This is Initiation.
              </h2>
              
              <div className="w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6"></div>
              
              <p className="text-amber-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
                Trusted by transformational leaders, healers, and visionaries across the globe.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center mb-8 sm:mb-12">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-amber-700/30 shadow-lg mb-6 md:mb-0 md:mr-8">
                  <img 
                    src="/images/sacred-portraits/initiation-portrait.jpg"
                    className="w-full h-full object-cover"
                    alt="Sacred Guide"
                  />
                </div>
                
                <div className="max-w-xl text-center md:text-left">
                  <p className="text-amber-100 text-lg sm:text-xl italic font-serif mb-2">
                    "The Sacred Chamber is a space of ancient remembrance, where the veils between worlds thin, and you reconnect with the truth of who you are—beyond conditioning, beyond limitation, beyond the stories that have kept you small."
                  </p>
                  <p className="text-amber-400 text-sm font-medium">— Jordi Amat, Sacred Guide</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="bg-stone-900/50 p-5 sm:p-6 rounded-lg border border-amber-900/30">
                <p className="text-amber-400 text-sm mb-3 sm:mb-4">The Container</p>
                <h3 className="text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">A Sacred Vessel for Your Becoming</h3>
                <p className="text-amber-50 leading-relaxed mb-6 sm:mb-8">
                  The Sacred Chamber is an intimate 5-month container that combines ancient wisdom practices, energetic transmission, and personalized ritual work. Limited to just 4 initiates per cycle, this is a space of profound attention and witnessing.
                </p>
                
                <div className="w-16 h-px bg-amber-700 my-4 sm:my-6"></div>
                
                <p className="text-amber-50 italic mb-6 sm:mb-8">
                  We meet in ceremony twice monthly within your private sacred space, complemented by personalized practices, energy work, and voice message support throughout your journey.
                </p>
                
                <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <span className="text-amber-400 text-lg">✦</span>
                    </div>
                    <p className="text-amber-50 flex-1">Bi-monthly sacred ceremonies within your private vessel</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <span className="text-amber-400 text-lg">✧</span>
                    </div>
                    <p className="text-amber-50 flex-1">Personalized practices and energy work</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <span className="text-amber-400 text-lg">⊛</span>
                    </div>
                    <p className="text-amber-50 flex-1">Continuous voice message support throughout</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-900/50 p-5 sm:p-6 rounded-lg border border-amber-900/30 mt-8 md:mt-0">
                <p className="text-amber-400 text-sm mb-3 sm:mb-4">The Invitation</p>
                <h3 className="text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">Who The Chamber Calls</h3>
                <p className="text-amber-50 leading-relaxed mb-4 sm:mb-6">
                  You may be an entrepreneur, healer, artist, or leader feeling called to deeper work. You've done personal development, but sense there's something more sacred waiting. You're ready to shed what no longer serves and step into the fullness of your sovereign power.
                </p>
                
                <div className="w-16 h-px bg-amber-700 my-4 sm:my-6"></div>
                
                <p className="text-amber-300 italic mb-4 sm:mb-8 text-base sm:text-lg">
                  You are being invited into the space beyond performance.
                </p>
                
                <p className="text-amber-50 italic mb-6 sm:mb-8">
                  The Sacred Chamber isn't for everyone. It's for souls ready to commit to their transformation—those who sense they're being called to something greater than what the conventional world offers.
                </p>
                
                <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <span className="text-amber-400 text-lg">☽</span>
                    </div>
                    <p className="text-amber-50 flex-1">You're ready to move beyond productivity and into presence</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <span className="text-amber-400 text-lg">☉</span>
                    </div>
                    <p className="text-amber-50 flex-1">You feel drawn to sacred ritual and mystical practice</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <span className="text-amber-400 text-lg">◯</span>
                    </div>
                    <p className="text-amber-50 flex-1">You sense there's a greater purpose to your existence waiting to unfold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Journey Section */}
        <div id="journey" className="py-16 sm:py-24 md:py-32 px-4 relative bg-stone-900">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>
          
          {/* Sacred geometry background - subtle and luxurious */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <span className="text-amber-400 text-[300px] sm:text-[400px] md:text-[600px]">⊛</span>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <p className="text-amber-400 text-base sm:text-lg mb-3 sm:mb-4">The Transformational Path</p>
              <h2 className="text-amber-100 text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-12">
                Your Sacred Chamber Journey
              </h2>
              
              <div className="w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6 sm:mb-12"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mb-16 sm:mb-20 md:mb-24">
              {journeyPhases.map((phase, index) => (
                <div key={index} className="border border-amber-900/30 rounded-lg p-6 sm:p-8 hover:border-amber-700/50 transition-all duration-500 bg-stone-900/30 hover:bg-stone-900/50">
                  <div className="mb-4 sm:mb-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-900/30 border border-amber-700/30">
                    <span className="text-amber-400 text-xl sm:text-2xl">{phase.symbol}</span>
                  </div>
                  <h3 className="text-amber-100 text-lg sm:text-xl font-serif mb-2 sm:mb-3">{phase.name}</h3>
                  <p className="text-amber-400/70 text-xs sm:text-sm mb-3 sm:mb-4">{phase.duration}</p>
                  <p className="text-amber-50 text-sm sm:text-base leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="text-amber-100 text-xl sm:text-2xl font-serif mb-6 sm:mb-8">What You'll Receive</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-left">
                <div className="bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-lg sm:text-xl">✧</span>
                    </div>
                    <h4 className="text-amber-400 text-base sm:text-lg">Sacred Ceremonies</h4>
                  </div>
                  <p className="text-amber-50 text-sm sm:text-base">10 private ceremonial sessions with personalized rituals and energy work</p>
                </div>
                
                <div className="bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-lg sm:text-xl">⊛</span>
                    </div>
                    <h4 className="text-amber-400 text-base sm:text-lg">Daily Practices</h4>
                  </div>
                  <p className="text-amber-50 text-sm sm:text-base">Custom-crafted rituals, meditations, and embodiment practices</p>
                </div>
                
                <div className="bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-lg sm:text-xl">☉</span>
                    </div>
                    <h4 className="text-amber-400 text-base sm:text-lg">Sacred Connection</h4>
                  </div>
                  <p className="text-amber-50 text-sm sm:text-base">Voice message support and energetic holding throughout your journey</p>
                </div>
                
                <div className="bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-lg sm:text-xl">☽</span>
                    </div>
                    <h4 className="text-amber-400 text-base sm:text-lg">Soul Library</h4>
                  </div>
                  <p className="text-amber-50 text-sm sm:text-base">Access to exclusive teachings, meditations, and wisdom transmissions</p>
                </div>
                
                <div className="bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-lg sm:text-xl">◯</span>
                    </div>
                    <h4 className="text-amber-400 text-base sm:text-lg">Energy Clearings</h4>
                  </div>
                  <p className="text-amber-50 text-sm sm:text-base">Regular energetic clearings and sacred attunements</p>
                </div>
                
                <div className="bg-stone-900/30 p-4 sm:p-6 rounded-lg border border-amber-800/20 mb-4 sm:mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <span className="text-amber-400 text-lg sm:text-xl">✦</span>
                    </div>
                    <h4 className="text-amber-400 text-base sm:text-lg">Completion Ceremony</h4>
                  </div>
                  <p className="text-amber-50 text-sm sm:text-base">Sacred culmination ritual to honor your transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div id="testimonials" className="py-16 sm:py-24 md:py-32 px-4 relative overflow-hidden bg-stone-950">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900"></div>
          
          {/* Floating gold particles */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                className="absolute bg-amber-400/20 rounded-full blur-sm animate-float"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${20 + Math.random() * 40}s`,
                  animationDelay: `${Math.random() * 20}s`,
                }}
              ></div>
            ))}
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-12 sm:mb-16 md:mb-20 text-center">
              <p className="text-amber-400 text-base sm:text-lg mb-3 sm:mb-4">Sacred Reflections</p>
              <h2 className="text-amber-100 text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-12">
                From Those Who've Walked The Path
              </h2>
              
              <div className="w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6 sm:mb-12"></div>
            </div>
            
            {/* Featured testimonial */}
            <div className="mb-12 sm:mb-16 md:mb-20 border-2 border-amber-700/30 rounded-xl p-6 sm:p-8 md:p-12 bg-gradient-to-br from-amber-900/20 to-stone-900/60 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-5 left-6 opacity-20">
                <span className="text-5xl sm:text-7xl md:text-9xl text-amber-400 font-serif">"</span>
              </div>
              
              <div className="absolute bottom-5 right-6 opacity-20">
                <span className="text-5xl sm:text-7xl md:text-9xl text-amber-400 font-serif">"</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-amber-700/30 shadow-xl mx-auto md:mx-0 md:mr-10 relative mb-6 md:mb-0">
                  <img 
                    src="/images/sacred-portraits/testimonial-portrait.jpg"
                    className="w-full h-full object-cover"
                    alt="Testimonial Portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent"></div>
                </div>
                
                <div className="flex-1">
                  <p className="text-amber-200 text-lg sm:text-xl md:text-2xl font-serif italic mb-6 sm:mb-8 leading-relaxed text-center md:text-left">
                    "The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This isn't coaching—it's remembrance of your divine nature."
                  </p>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-amber-600/50 to-amber-400/30 my-4 sm:my-6 mx-auto md:mx-0"></div>
                  
                  <div className="text-center md:text-left">
                    <p className="text-amber-100 font-medium text-base sm:text-lg">Elena R.</p>
                    <p className="text-amber-400">Spiritual Guide & Oracle</p>
                    <p className="text-amber-100 text-sm italic mt-1">— 6-month Sacred Chamber Journey</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other testimonials */}
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              {testimonials.slice(1).map((testimonial, index) => (
                <div 
                  key={index} 
                  className="border border-amber-800/30 rounded-xl p-6 sm:p-8 md:p-10 bg-stone-900/60 relative overflow-hidden"
                >
                  {/* Decorative quote marks */}
                  <div className="absolute top-5 left-6 opacity-10">
                    <span className="text-4xl sm:text-6xl md:text-9xl text-amber-800 font-serif">"</span>
                  </div>
                  
                  <div className="absolute bottom-5 right-6 opacity-10">
                    <span className="text-4xl sm:text-6xl md:text-9xl text-amber-800 font-serif">"</span>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-amber-100 text-lg sm:text-xl md:text-2xl font-serif italic mb-6 sm:mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="w-16 h-px bg-gradient-to-r from-amber-600/50 to-amber-400/30 my-6 sm:my-8"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-700/30 mx-auto sm:mx-0 sm:mr-4 flex items-center justify-center mb-3 sm:mb-0">
                        <span className="text-amber-400 text-lg sm:text-xl">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div className="text-center sm:text-left">
                        <p className="text-amber-100 font-medium">{testimonial.name}</p>
                        <p className="text-amber-400">{testimonial.title}</p>
                        <p className="text-amber-100 text-sm italic">— {testimonial.journey}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Readiness Section */}
        <div id="readiness" className="py-16 sm:py-24 md:py-32 px-4 relative bg-stone-900">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              <div className="bg-stone-900/50 p-6 rounded-lg border border-amber-900/30">
                <p className="text-amber-400 text-base sm:text-lg mb-3 sm:mb-4">The Sacred Call</p>
                <h3 className="text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-8">
                  Is This Your Time?
                </h3>
                
                <p className="text-amber-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8">
                  The Sacred Chamber calls to those ready to transcend limitations and step into their sovereign power. This is not for the casually curious, but for souls committed to transformation.
                </p>
                
                <p className="text-amber-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8">
                  The Sacred Chamber begins at <span className="text-amber-300">$4444</span>. This is a high-level investment of energy, devotion, and presence.
                </p>
                
                <p className="text-amber-50 text-sm sm:text-base leading-relaxed mb-4 sm:mb-8">
                  With just 4 spaces available each cycle, this ensures the depth and attention your journey deserves.
                </p>
                
                <p className="text-amber-200 italic font-serif mb-8 sm:mb-12">
                  "Those who feel the call know it in their bones. There is no convincing needed—only the courage to answer."
                </p>
                
                <button 
                  onClick={handleApplyClick}
                  className="bg-gradient-to-r from-amber-800 to-amber-700 px-6 sm:px-10 py-3 sm:py-5 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700"></div>
                  <span className="text-white font-medium text-base sm:text-lg">Begin Your Sacred Application</span>
                </button>
              </div>
              
              <div className="bg-stone-900/50 p-6 rounded-lg border border-amber-900/30 mt-8 md:mt-0">
                <p className="text-amber-400 text-base sm:text-lg mb-3 sm:mb-4">Signs of Readiness</p>
                <h3 className="text-amber-100 text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-8">
                  You May Be Called If...
                </h3>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {readinessChecklist.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-amber-400 mr-3">✦</span>
                      <p className="text-amber-50 text-sm sm:text-base flex-1">{item}</p>
                    </div>
                  ))}
                </div>
                
                <div className="border border-amber-800/30 rounded-lg p-5 sm:p-8 bg-stone-900/40">
                  <h4 className="text-amber-100 text-base sm:text-lg font-serif mb-3 sm:mb-4">
                    Next Sacred Chamber Cycle
                  </h4>
                  <p className="text-amber-50 text-sm sm:text-base mb-2">
                    <span className="text-amber-400">Applications open:</span> September 15-30
                  </p>
                  <p className="text-amber-50 text-sm sm:text-base mb-2">
                    <span className="text-amber-400">Journey begins:</span> October New Moon
                  </p>
                  <p className="text-amber-50 text-sm sm:text-base mb-2">
                    <span className="text-amber-400">Spaces available:</span> 4 initiates
                  </p>
                  <p className="text-amber-50 text-sm sm:text-base mb-4">
                    <span className="text-amber-400">Application process:</span> Written reflection followed by sacred connection call
                  </p>
                  
                  <button 
                    onClick={() => {}}
                    className="border border-amber-600/30 py-3 rounded-md flex items-center justify-center hover:bg-amber-900/20 transition-all duration-300 w-full"
                  >
                    <span className="text-amber-400 text-sm">Join the Waiting List</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Call to Action */}
        <div className="py-16 sm:py-24 md:py-32 px-4 relative bg-stone-950">
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"></div>
          
          {/* Sacred ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-amber-600/5 blur-3xl"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-amber-300 italic font-serif mb-4 sm:mb-8 text-base sm:text-lg">
              "There is a place within you that already remembers."
            </p>
          
            <h2 className="text-amber-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-10">
              The Chamber Awaits You
            </h2>
            
            <p className="text-amber-100 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
              If you've read this far, you've felt the resonance. Trust the call that brought you here.
            </p>
            
            {/* Sacred bullet summary */}
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <div className="space-y-3 sm:space-y-4 inline-block text-left">
                <div className="flex items-center">
                  <span className="text-amber-400 mr-3 text-base sm:text-xl">⊹</span>
                  <p className="text-amber-100 text-sm sm:text-base">5-month sacred container for profound transformation</p>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-400 mr-3 text-base sm:text-xl">⊛</span>
                  <p className="text-amber-100 text-sm sm:text-base">Bi-monthly ceremonial sessions & continuous support</p>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-400 mr-3 text-base sm:text-xl">✧</span>
                  <p className="text-amber-100 text-sm sm:text-base">Limited to 4 initiates per cycle. By invitation only.</p>
                </div>
              </div>
            </div>
            
            <div>
              <button 
                onClick={handleApplyClick}
                className="bg-gradient-to-r from-amber-700 to-amber-600 px-8 sm:px-12 py-4 sm:py-6 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-700/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-500/20 blur-xl transition-opacity duration-1000"></div>
                <span className="text-white font-medium text-lg sm:text-xl">Begin My Application</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 