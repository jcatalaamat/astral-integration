interface TransformationStagesProps {
  language: 'en' | 'es' | 'ca';
  translations: any;
}

const TransformationStages = ({}: TransformationStagesProps) => {

  const stages = [
    {
      number: 1,
      phase: 'Dissolution',
      description: 'Release what no longer serves. Clear ancestral patterns, childhood wounds, and energetic debris.',
      gradient: 'from-sacred-gold to-mystic-lavender',
      icon: '⊹'
    },
    {
      number: 2,
      phase: 'Activation',
      description: 'Awaken dormant gifts. Open your channel, activate intuition, remember your cosmic blueprint.',
      gradient: 'from-mystic-lavender to-mystic-indigo',
      icon: '⊛'
    },
    {
      number: 3,
      phase: 'Integration',
      description: 'Embody your truth. Anchor new frequencies, align actions with soul purpose, manifest your vision.',
      gradient: 'from-mystic-indigo to-mystic-violet',
      icon: '⊝'
    },
    {
      number: 4,
      phase: 'Mastery',
      description: 'Become the medicine. Step into service, hold space for others, create ripples of transformation.',
      gradient: 'from-mystic-violet to-sacred-gold',
      icon: '✧'
    }
  ];

  return (
    <div id="transformation" className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-sacred-moon">
            The Initiation Process
          </h2>
        </div>

        {/* Stages Grid */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-sacred-gold via-mystic-lavender via-mystic-indigo to-mystic-violet opacity-30 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Stage Card */}
                <div className="group relative">
                  {/* Mystical Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stage.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500 animate-breathe`}></div>

                  {/* Card Content */}
                  <div className="relative bg-cosmic-800/60 backdrop-blur-xl rounded-3xl border border-mystic-purple/30 p-8 hover:border-mystic-purple/50 transition-all h-full">
                    {/* Decorative Icon */}
                    <div className="text-center mb-4 text-3xl text-mystic-violet/30 animate-float">
                      {stage.icon}
                    </div>

                    {/* Stage Number Circle */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${stage.gradient} flex items-center justify-center animate-glow`}>
                        <span className="text-sacred-moon font-bold text-3xl">{stage.number}</span>
                        {/* Pulsing Ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${stage.gradient} animate-ping opacity-20`}></div>
                      </div>
                    </div>

                    {/* Phase Name */}
                    <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent`}>
                      {stage.phase}
                    </h3>

                    {/* Description */}
                    <p className="text-mystic-lavender/70 text-center leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Between Stages (Desktop) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <div className="text-2xl text-mystic-violet/40 animate-pulse">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Floating Sacred Geometry Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-mystic-purple rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-sacred-gold rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-mystic-violet rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default TransformationStages;
