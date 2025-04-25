import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

type HeroProps = {
  headline?: string;
  headlineAccent?: string;
  subheadline?: string;
  supportingText?: string;
  microText?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
  onCtaPress?: () => void;
};

export default function Hero({
  headline = "Awaken to Your Highest Potential",
  headlineAccent = "",
  subheadline = "Spiritual coaching to guide you to profound inner transformation and authentic living",
  supportingText = "",
  microText = "",
  ctaText = "Enter the Mirror Path",
  ctaLink = "/contact",
  backgroundImage = "/images/sacred-cosmos.jpg",
  alignment = 'center',
  onCtaPress,
}: HeroProps) {
  // Animation states
  const [pulsing, setPulsing] = useState(false);
  const [hoverCTA, setHoverCTA] = useState(false);
  const [fadeComplete, setFadeComplete] = useState(false);
  
  useEffect(() => {
    // Set up the ambient animation interval
    const interval = setInterval(() => {
      setPulsing(prev => !prev);
    }, 2000);
    
    // Set fade complete after a delay
    const fadeTimer = setTimeout(() => {
      setFadeComplete(true);
    }, 2500);
    
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <View className="relative w-full min-h-[100vh] overflow-hidden">
      {/* Background Layers */}
      <View className="absolute inset-0 z-0">
        {/* Base image with overlay */}
        <Image 
          source={{ uri: backgroundImage }} 
          className="absolute inset-0 w-full h-full object-cover"
          resizeMode="cover"
        />
        
        {/* Solid dark background instead of gradient for better text visibility */}
        <View className="absolute inset-0 bg-stone-950/90" />
        
        {/* Noise texture */}
        <View className="absolute inset-0 opacity-20" />
      </View>
      
      {/* Content - increased z-index to ensure visibility */}
      <View className={`relative z-20 px-6 py-24 flex items-${alignment} justify-center h-full w-full max-w-6xl mx-auto`}>
        <View className={`max-w-2xl ${alignment === 'center' ? 'mx-auto text-center' : alignment === 'right' ? 'ml-auto text-right' : 'text-left'}`}>
          {/* Headline with improved contrast */}
          <View className="mb-6">
            <Text className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-bold">
              {headline} {headlineAccent && (
                <Text className="text-amber-400">{headlineAccent}</Text>
              )}
            </Text>
            
            {/* Decorative underline */}
            <View className="w-24 h-1 bg-amber-500 mt-6 mb-8 mx-auto" />
          </View>
          
          {/* Subheadline with improved contrast */}
          <Text className="text-xl md:text-2xl text-white mb-6 font-light leading-relaxed">
            {subheadline}
          </Text>
          
          {/* Supporting text with improved contrast */}
          <Text className="text-lg text-amber-300 mb-6 italic font-medium">
            {supportingText || "This is not self-help. This is sacred remembering."}
          </Text>
          
          {/* Micro text - With luxury fade up */}
          {microText && (
            <Text className="text-sm text-amber-300 mb-8 tracking-wider font-medium">
              {microText}
            </Text>
          )}
          
          {/* CTA Button - With simplified styling for better visibility */}
          <View className="mt-8">
            <View className="relative">
              {/* Glow effect under button - pulsing */}
              <View className={`absolute inset-0 -m-1 rounded-md bg-amber-500/0 ${hoverCTA ? 'bg-amber-500/20 blur-md' : ''} transition-all duration-700`} />
              
              <TouchableOpacity 
                className={`inline-flex items-center px-8 py-4 rounded-md bg-amber-600 text-white hover:shadow-lg hover:shadow-amber-600/40 transition-all duration-500 transform ${hoverCTA ? '-translate-y-1' : ''}`}
                onPress={onCtaPress}
                onMouseEnter={() => setHoverCTA(true)}
                onMouseLeave={() => setHoverCTA(false)}
              >
                <View className="flex-row items-center">
                  <Text className="font-medium text-white text-lg">{ctaText}</Text>
                  <Text className={`ml-2 text-lg ${hoverCTA ? 'translate-x-1' : ''} transition-all duration-300`}>→</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            {/* New poetic microcopy under CTA */}
            <Text className="text-amber-300 text-sm mt-4 italic font-serif">
              This is your first breath back home.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
} 