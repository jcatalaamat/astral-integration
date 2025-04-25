import React from 'react';
import { View } from 'react-native';

type GlowEffectProps = {
  children: React.ReactNode;
  color: string;
  intensity?: 'soft' | 'medium' | 'strong';
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

/**
 * GlowEffect component adds a subtle glowing effect around its children
 * Customizable by color, intensity, and size
 */
export default function GlowEffect({ 
  children, 
  color, 
  intensity = 'medium',
  size = 'md'
}: GlowEffectProps) {
  // Map intensity to opacity and blur values
  const intensityMap = {
    soft: { opacity: 0.15, blur: 'blur-md' },
    medium: { opacity: 0.25, blur: 'blur-lg' },
    strong: { opacity: 0.35, blur: 'blur-xl' }
  };
  
  // Map size to dimensions
  const sizeMap = {
    xs: { size: 'w-[110%] h-[110%]' },
    sm: { size: 'w-[120%] h-[120%]' },
    md: { size: 'w-[140%] h-[140%]' },
    lg: { size: 'w-[160%] h-[160%]' }
  };
  
  // Map color to tailwind bg classes
  const colorMap = {
    amber: 'bg-amber-300',
    indigo: 'bg-indigo-300',
    purple: 'bg-purple-300',
    blue: 'bg-blue-300',
    teal: 'bg-teal-300',
    emerald: 'bg-emerald-300',
    rose: 'bg-rose-300'
  };
  
  const { opacity, blur } = intensityMap[intensity];
  const { size: dimensions } = sizeMap[size];
  const bgColor = colorMap[color] || 'bg-amber-300';
  
  return (
    <View className="relative">
      {/* Glow effect layer */}
      <View 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${dimensions} ${blur} ${bgColor} z-0`} 
        style={{ opacity }}
      />
      
      {/* Main content */}
      <View className="relative z-10">
        {children}
      </View>
    </View>
  );
} 