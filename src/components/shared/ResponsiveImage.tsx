import React, { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  aspectRatio?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  aspectRatio
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useOptimized, setUseOptimized] = useState(true);

  // Extract filename without extension
  const getBaseName = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, '');
  };

  const baseName = getBaseName(src);
  const optimizedPath = `/images/optimized/${baseName}`;

  // If optimized images fail to load, fall back to original
  if (!useOptimized) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className={`w-full h-full object-cover ${className}`}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    );
  }

  return (
    <picture className={className}>
      {/* WebP sources for different screen sizes */}
      <source
        media="(max-width: 640px)"
        srcSet={`${optimizedPath}-mobile.webp`}
        type="image/webp"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${optimizedPath}-tablet.webp`}
        type="image/webp"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${optimizedPath}-desktop.webp`}
        type="image/webp"
      />

      {/* JPG fallback sources */}
      <source
        media="(max-width: 640px)"
        srcSet={`${optimizedPath}-mobile.jpg`}
        type="image/jpeg"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={`${optimizedPath}-tablet.jpg`}
        type="image/jpeg"
      />
      <source
        media="(min-width: 1025px)"
        srcSet={`${optimizedPath}-desktop.jpg`}
        type="image/jpeg"
      />

      {/* Final fallback to original image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          console.warn(`Failed to load optimized image, falling back to original: ${src}`);
          setUseOptimized(false);
        }}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    </picture>
  );
};

export default ResponsiveImage;
