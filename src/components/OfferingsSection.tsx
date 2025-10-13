import { Sparkles, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';

interface OfferingsSectionProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const OfferingsSection = ({ translations }: OfferingsSectionProps) => {
  const t = translations.offerings;

  const offerings = [
    {
      key: 'soulWork',
      icon: Sparkles,
      gradient: 'from-sacred-gold via-mystic-lavender to-mystic-purple',
      shadowColor: 'shadow-mystic-purple/50'
    },
    {
      key: 'integration',
      icon: Heart,
      gradient: 'from-mystic-lavender via-mystic-indigo to-mystic-violet',
      shadowColor: 'shadow-mystic-indigo/50'
    },
    {
      key: 'entrepreneur',
      icon: Zap,
      gradient: 'from-mystic-indigo via-mystic-violet to-mystic-purple',
      shadowColor: 'shadow-mystic-violet/50'
    }
  ];

  return (
    <div id="offerings" className="container mx-auto px-4 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-mystic-lavender via-sacred-gold to-mystic-violet bg-clip-text text-transparent">
            Sacred Pathways to Liberation
          </h2>
          <p className="text-xl text-mystic-lavender/70 max-w-2xl mx-auto">
            Choose your initiation
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            const offeringData = t[offering.key];

            return (
              <div key={offering.key} className="group relative">
                {/* Mystical Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${offering.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500 animate-breathe`}></div>

                {/* Card */}
                <div className="relative h-full bg-cosmic-800/60 backdrop-blur-xl rounded-3xl border border-mystic-purple/30 p-8 hover:border-mystic-purple/50 transition-all">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${offering.gradient} rounded-2xl mb-6 group-hover:scale-105 transition-transform animate-glow`}>
                    <Icon className="w-8 h-8 text-sacred-moon" />
                  </div>

                  {/* Tagline */}
                  <div className="text-sm text-mystic-lavender/50 uppercase tracking-wider mb-2 font-serif">
                    {offeringData.tagline}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif mb-4 text-sacred-moon">
                    {offeringData.title}
                  </h3>

                  {/* Description */}
                  <p className="text-mystic-lavender/70 mb-6 leading-relaxed font-serif">
                    {offeringData.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-8">
                    {offeringData.includes.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-sacred-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-mystic-lavender/80 font-serif">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-mystic-purple/20">
                    <span className={`text-lg font-semibold font-serif bg-gradient-to-r ${offering.gradient} bg-clip-text text-transparent`}>
                      {offeringData.price}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full group/btn px-6 py-4 bg-gradient-to-r ${offering.gradient} text-sacred-moon rounded-2xl font-serif hover:shadow-2xl ${offering.shadowColor} transition-all flex items-center justify-center gap-2 animate-breathe`}>
                    <span>{offeringData.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
