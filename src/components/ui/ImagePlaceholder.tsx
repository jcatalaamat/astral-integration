interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
  overlay?: 'dark' | 'light' | 'gradient' | 'none';
  children?: React.ReactNode;
}

export default function ImagePlaceholder({
  src,
  alt = '',
  className = '',
  overlay = 'dark',
  children
}: ImagePlaceholderProps) {
  const overlayClasses = {
    dark: 'bg-black/40',
    light: 'bg-white/20',
    gradient: 'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
    none: ''
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder background with atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/30 via-cosmic-900/50 to-sacred-green/20">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Actual image when provided */}
      {src && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      )}

      {/* Content */}
      {children && (
        <div className="relative z-10 h-full">
          {children}
        </div>
      )}
    </div>
  );
}
