import { View, TouchableOpacity } from 'react-native';
import React from 'react';

type GradientDirection = 'top' | 'bottom' | 'left' | 'right' | 'br' | 'bl' | 'tr' | 'tl';
type GradientStyle = 'soft' | 'vibrant' | 'muted' | 'neon';
type ColorScheme = 'purple' | 'blue' | 'emerald' | 'amber' | 'rose' | 'indigo';

type GradientCardProps = {
  children?: React.ReactNode;
  direction?: GradientDirection;
  style?: GradientStyle;
  colorScheme?: ColorScheme;
  className?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  onPress?: () => void;
  hoverEffect?: boolean;
};

/**
 * GradientCard component provides beautiful gradient backgrounds
 * with customizable direction, style, and color schemes
 */
export default function GradientCard({
  children,
  direction = 'br',
  style = 'soft',
  colorScheme = 'purple',
  className = '',
  rounded = 'lg',
  onPress,
  hoverEffect = false,
}: GradientCardProps) {
  // Get direction-specific class
  const getDirectionClass = () => {
    switch (direction) {
      case 'top': return 'bg-gradient-to-t';
      case 'bottom': return 'bg-gradient-to-b';
      case 'left': return 'bg-gradient-to-l';
      case 'right': return 'bg-gradient-to-r';
      case 'br': return 'bg-gradient-to-br';
      case 'bl': return 'bg-gradient-to-bl';
      case 'tr': return 'bg-gradient-to-tr';
      case 'tl': return 'bg-gradient-to-tl';
      default: return 'bg-gradient-to-br';
    }
  };

  // Get color scheme classes
  const getColorClass = () => {
    switch (colorScheme) {
      case 'purple':
        return style === 'vibrant' 
          ? 'from-purple-500 to-fuchsia-600'
          : style === 'muted'
            ? 'from-purple-900 to-fuchsia-900'
            : style === 'neon'
              ? 'from-purple-400 to-fuchsia-500'
              : 'from-purple-600 to-fuchsia-700';
      case 'blue':
        return style === 'vibrant'
          ? 'from-blue-400 to-cyan-500'
          : style === 'muted'
            ? 'from-blue-900 to-cyan-900'
            : style === 'neon'
              ? 'from-blue-400 to-cyan-300'
              : 'from-blue-600 to-cyan-700';
      case 'emerald':
        return style === 'vibrant'
          ? 'from-emerald-400 to-teal-500'
          : style === 'muted'
            ? 'from-emerald-900 to-teal-900'
            : style === 'neon'
              ? 'from-emerald-300 to-teal-400'
              : 'from-emerald-600 to-teal-700';
      case 'amber':
        return style === 'vibrant'
          ? 'from-amber-400 to-orange-500'
          : style === 'muted'
            ? 'from-amber-900 to-orange-900'
            : style === 'neon'
              ? 'from-amber-300 to-orange-400'
              : 'from-amber-600 to-orange-700';
      case 'rose':
        return style === 'vibrant'
          ? 'from-rose-400 to-pink-500'
          : style === 'muted'
            ? 'from-rose-900 to-pink-900'
            : style === 'neon'
              ? 'from-rose-300 to-pink-400'
              : 'from-rose-600 to-pink-700';
      case 'indigo':
        return style === 'vibrant'
          ? 'from-indigo-400 to-violet-500'
          : style === 'muted'
            ? 'from-indigo-900 to-violet-900'
            : style === 'neon'
              ? 'from-indigo-300 to-violet-400'
              : 'from-indigo-600 to-violet-700';
      default:
        return 'from-purple-600 to-fuchsia-700';
    }
  };

  // Get rounded class
  const getRoundedClass = () => {
    switch (rounded) {
      case 'sm': return 'rounded-sm';
      case 'md': return 'rounded-md';
      case 'lg': return 'rounded-lg';
      case 'xl': return 'rounded-xl';
      case '2xl': return 'rounded-2xl';
      case 'full': return 'rounded-full';
      default: return 'rounded-lg';
    }
  };

  // Combine all classes
  const cardClasses = `
    ${getDirectionClass()} 
    ${getColorClass()} 
    ${getRoundedClass()} 
    ${hoverEffect ? 'transition-transform hover:scale-105' : ''}
    shadow-lg
    overflow-hidden
    ${className}
  `.trim();

  // Return interactive or static card based on onClick prop
  return onPress ? (
    <TouchableOpacity 
      className={cardClasses}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View className={cardClasses}>
      {children}
    </View>
  );
}