import React from 'react';
import { View } from 'react-native';

type TextureBackgroundProps = {
  children?: React.ReactNode;
  type?: 'noise' | 'grain' | 'subtle' | 'marble' | 'paper' | 'sacred';
  color?: string;
  opacity?: number;
  className?: string;
};

/**
 * TextureBackground adds a subtle texture to its container
 * Used to create depth and visual interest in backgrounds
 */
export default function TextureBackground({ 
  children, 
  type = 'subtle',
  color = 'slate',
  opacity = 0.15,
  className = ''
}: TextureBackgroundProps) {
  // Get texture classes based on type
  const getTextureClass = () => {
    switch (type) {
      case 'noise': return 'bg-noise-pattern';
      case 'grain': return 'bg-grain-pattern';
      case 'marble': return 'bg-marble-pattern';
      case 'paper': return 'bg-texture-paper';
      case 'sacred': return 'bg-sacred-pattern';
      case 'subtle':
      default: return 'bg-subtle-texture';
    }
  };
  
  // Get color classes based on color prop
  const getColorClass = () => {
    switch (color) {
      case 'slate': return 'bg-slate-900';
      case 'amber': return 'bg-amber-950';
      case 'indigo': return 'bg-indigo-950';
      case 'purple': return 'bg-purple-950';
      case 'emerald': return 'bg-emerald-950';
      default: return 'bg-slate-900';
    }
  };
  
  return (
    <View className={`relative ${className}`}>
      {/* Texture overlay */}
      <View 
        className={`absolute inset-0 ${getColorClass()} ${getTextureClass()}`}
        style={{ opacity }}
      />
      
      {/* Content layer */}
      {children && (
        <View className="relative z-10">
          {children}
        </View>
      )}
    </View>
  );
} 