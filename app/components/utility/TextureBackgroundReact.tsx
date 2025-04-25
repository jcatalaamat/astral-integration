import React from 'react';

type TextureBackgroundReactProps = {
  children: React.ReactNode;
  type: 'paper' | 'linen' | 'grain' | 'noise';
  opacity?: number;
  className?: string;
};

/**
 * TextureBackgroundReact component adds subtle texture overlays to sections
 * using standard React/HTML elements
 */
export default function TextureBackgroundReact({ 
  children, 
  type,
  opacity = 0.1,
  className = ''
}: TextureBackgroundReactProps) {
  // Get texture class based on type
  const getTextureClass = () => {
    switch (type) {
      case 'paper': return 'texture-paper';
      case 'linen': return 'texture-linen';
      case 'grain': return 'texture-grain';
      case 'noise': return 'noise-overlay';
      default: return 'noise-overlay';
    }
  };
  
  return (
    <div className={`relative ${className}`}>
      {children}
      <div 
        className={`absolute inset-0 ${getTextureClass()}`}
        style={{ opacity }}
      ></div>
    </div>
  );
} 