interface WarmHeroProps {
  title: string;
  subtitle?: string;
  image?: string; // optional hero image URL
  gradient?: boolean; // use gradient if no image (default true)
  height?: 'small' | 'medium' | 'large' | 'extra-large'; // 50vh, 70vh, 90vh, 100vh
  children?: React.ReactNode; // optional extra content (CTAs, etc.)
}

export default function WarmHero({
  title,
  subtitle,
  image,
  gradient = true,
  height = 'medium',
  children
}: WarmHeroProps) {
  const heightClasses = {
    small: 'min-h-[50vh]',
    medium: 'min-h-[70vh]',
    large: 'min-h-[90vh]',
    'extra-large': 'min-h-screen'
  };

  return (
    <div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background - Image or Gradient */}
      {image ? (
        // Image background
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Warm overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-warm-white/20 via-transparent to-warm-white/40" />
        </div>
      ) : gradient ? (
        // Warm gradient background (default)
        <div className="absolute inset-0 bg-gradient-to-b from-warm-peach via-warm-cream to-warm-white">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4A89F 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
          {/* Soft animated accents */}
          <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-accent-terracotta/10 rounded-full mix-blend-multiply filter blur-3xl animate-breathe" />
          <div className="absolute bottom-0 -right-4 w-[400px] h-[400px] bg-accent-sage/10 rounded-full mix-blend-multiply filter blur-3xl animate-breathe" style={{animationDelay: '3s'}} />
        </div>
      ) : (
        // Solid warm white background
        <div className="absolute inset-0 bg-warm-white" />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-heading mb-6 leading-tight animate-fadeIn">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-light leading-relaxed mb-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            {subtitle}
          </p>
        )}

        {/* Optional children (CTAs, etc.) */}
        {children && (
          <div className="animate-fadeIn" style={{animationDelay: '0.4s'}}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
