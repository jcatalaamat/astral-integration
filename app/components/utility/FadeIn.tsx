import React from 'react';
import { View } from 'react-native';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeIn({ 
  children, 
  delay = 300,
  className = ''
}: FadeInProps) {
  return (
    <View 
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: `${delay / 1000}s` }}
    >
      {children}
    </View>
  );
} 