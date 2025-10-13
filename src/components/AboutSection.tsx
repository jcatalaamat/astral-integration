import { Play } from 'lucide-react';

interface AboutSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const AboutSection = ({ translations }: AboutSectionProps) => {
  const t = translations.about;

  return (
    <div id="about" className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-4xl mb-6 text-sacred-gold/50 animate-breathe">⊛</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-sacred-moon">
            Beyond Concepts & Limitations
          </h2>
          <p className="text-xl text-mystic-lavender/70 font-serif italic">
            Meet Jordi
          </p>
        </div>

        <div className="relative">
          {/* Mystical Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-mystic-purple via-mystic-indigo to-mystic-violet rounded-3xl blur-3xl opacity-10 animate-breathe"></div>

          {/* Content Card */}
          <div className="relative bg-cosmic-800/60 backdrop-blur-2xl rounded-3xl border border-mystic-purple/30 p-12 md:p-16">
            {/* Sacred Quote */}
            <div className="mb-12 text-center">
              <div className="text-6xl text-mystic-violet/30 mb-4 font-serif">"</div>
              <blockquote className="text-2xl md:text-3xl text-mystic-lavender/90 font-serif italic leading-relaxed mb-4">
                I am not here to teach you who you are. I'm here to remind you what you've always known.
              </blockquote>
              <div className="text-6xl text-mystic-violet/30 font-serif">"</div>
            </div>

            {/* Description - Powerful & Sacred Blend */}
            <div className="space-y-6 mb-10">
              <p className="text-xl text-mystic-lavender/80 leading-relaxed text-center">
                I see within the body and heart of a person—beyond words, into the layers of mind, heart, and soul.
              </p>
              <p className="text-lg text-mystic-lavender/70 leading-relaxed font-serif text-center">
                Through my own death and rebirth via deep medicine work and shamanic initiation, I've learned to hold space for the most profound transformations.
              </p>
              <p className="text-lg text-mystic-lavender/60 font-serif italic text-center">
                My greatest gift is becoming the space of transformation itself—a loving presence that allows your old self to dissolve and your true essence to emerge.
              </p>
            </div>

            {/* Audio Message Placeholder */}
            <div className="bg-cosmic-900/50 rounded-2xl border border-mystic-purple/20 p-8 hover:border-mystic-purple/40 transition-all group">
              <div className="flex items-center gap-4">
                <button className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-indigo flex items-center justify-center group-hover:scale-105 transition-transform animate-glow">
                  <Play className="w-7 h-7 text-sacred-moon ml-1" fill="currentColor" />
                </button>
                <div className="flex-1">
                  <p className="text-mystic-lavender/90 font-serif mb-1">Listen to my welcome message</p>
                  <div className="text-sm text-mystic-lavender/50">0:30</div>
                </div>
              </div>
            </div>

            {/* Sacred Symbol Divider */}
            <div className="flex justify-center items-center gap-4 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-mystic-purple/50 to-transparent"></div>
              <div className="text-2xl text-sacred-gold/40">☉</div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-mystic-purple/50 to-transparent"></div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="px-8 py-3 bg-mystic-purple/20 backdrop-blur-xl border border-mystic-lavender/30 text-sacred-moon rounded-2xl font-semibold hover:bg-mystic-purple/30 transition-all">
                Discover My Journey
              </button>
            </div>
          </div>
        </div>

        {/* Floating Sacred Symbols */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-1/4 right-1/4 text-4xl text-mystic-violet animate-float">⊹</div>
          <div className="absolute bottom-1/3 left-1/4 text-3xl text-sacred-gold animate-float" style={{animationDelay: '2s'}}>✧</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
