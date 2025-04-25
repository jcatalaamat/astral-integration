import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import TextureBackground from './utility/TextureBackground';

type SacredPortraitProps = {
  headline?: string;
  supportingText?: string;
  imagePath?: string;
  secondaryImagePath?: string;
  alignment?: 'left' | 'right';
};

export default function SacredPortrait({
  headline = "This Is Not Coaching",
  supportingText = "This is soul remembrance. A sacred invitation to witness yourself through the mirror of divine presence.",
  imagePath = "/images/sacred-portraits/main-portrait.jpg",
  secondaryImagePath = "/images/sacred-portraits/secondary-portrait.jpg",
  alignment = 'left'
}: SacredPortraitProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <View className="w-full py-24 px-4 relative overflow-hidden bg-stone-50">
      {/* Background texture */}
      <TextureBackground type="paper" opacity={0.07} className="absolute inset-0">
        <View />
      </TextureBackground>
      
      {/* Sacred subtle watermark */}
      <View className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <Text className="text-[300px] text-amber-800 leading-none">✧</Text>
      </View>
      
      <View className={`max-w-6xl mx-auto flex flex-col ${alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
        {/* Sacred portrait image */}
        <View className="md:w-1/2 relative">
          <View 
            className={`relative transition-all duration-500 ${isHovered ? 'scale-[1.02]' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main portrait */}
            <View className="bg-stone-50 p-3 shadow-xl rounded-sm rotate-1">
              <Image 
                source={{ uri: imagePath }}
                className="w-full aspect-[3/4] object-cover rounded-sm"
                resizeMode="cover"
              />
            </View>
            
            {/* Secondary portrait */}
            {secondaryImagePath && (
              <View className="absolute -bottom-10 -right-10 w-32 h-32 bg-stone-50 p-2 shadow-xl rounded-sm -rotate-3 z-20">
                <Image 
                  source={{ uri: secondaryImagePath }}
                  className="w-full h-full object-cover rounded-sm"
                  resizeMode="cover"
                />
              </View>
            )}
            
            {/* Decorative elements */}
            <View className={`absolute top-5 ${alignment === 'left' ? 'right-5' : 'left-5'} w-20 h-20 border-2 border-amber-300/20 rounded-full -z-10`} />
            <View className={`absolute -bottom-8 ${alignment === 'left' ? '-left-8' : '-right-8'} w-36 h-36 border-2 border-amber-300/20 rounded-full -z-10`} />
          </View>
        </View>
        
        {/* Sacred text */}
        <View className="md:w-1/2">
          <Text className="text-amber-700 font-serif text-3xl mb-6">
            {headline}
          </Text>
          
          <View className="w-16 h-px bg-amber-300 mb-8" />
          
          <Text className="text-stone-700 text-xl leading-relaxed mb-6 font-serif">
            {supportingText}
          </Text>
          
          <Text className="text-amber-600 italic">
            Your journey begins with one sacred step.
          </Text>
        </View>
      </View>
    </View>
  );
} 