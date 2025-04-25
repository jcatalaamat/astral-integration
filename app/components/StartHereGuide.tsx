import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextureBackground from './utility/TextureBackground';
import GlowEffect from './utility/GlowEffect';

type StartHereGuideProps = {
  onClarityCallPress?: () => void;
  onMirrorPathPress?: () => void;
};

export default function StartHereGuide({ onClarityCallPress, onMirrorPathPress }: StartHereGuideProps) {
  const [hoverCard1, setHoverCard1] = useState(false);
  const [hoverCard2, setHoverCard2] = useState(false);
  
  return (
    <View className="w-full py-24 relative overflow-hidden">
      {/* Background texture */}
      <View className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-stone-50 to-amber-50/50" />
      <TextureBackground type="paper" opacity={0.1} className="absolute inset-0">
        <View />
      </TextureBackground>
      
      <View className="max-w-6xl mx-auto px-4 relative z-10">
        <View className="flex items-center justify-center mb-6">
          <Text className="text-amber-700 text-lg font-serif italic opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Begin Your Journey
          </Text>
          <Text className="text-3xl font-bold text-stone-800 font-serif text-center mb-2 max-w-xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Start Here
          </Text>
          
          {/* Small glyph icon divider under title */}
          <View className="flex items-center justify-center mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Text className="text-amber-600 text-2xl">✧ ✦ ✧</Text>
          </View>
          
          <View className="w-24 h-px bg-amber-500/50 my-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }} />
        </View>
        
        {/* Added guiding line above */}
        <Text className="text-center text-amber-700 italic max-w-xl mx-auto mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          Not sure where to begin? Here's your first sacred step.
        </Text>
        
        <View className="text-center max-w-3xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <Text className="text-xl text-stone-700 mb-6">
            New to the work? Start with a Clarity Call or Soul Session.
          </Text>
          <Text className="text-stone-600">
            The path of transformation begins with a single step. Choose an entry point that feels aligned with your current needs.
          </Text>
        </View>
        
        {/* Path Options with soft glowing box */}
        <View className="flex-row flex-wrap justify-center gap-6 mt-8 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
          {/* Card 1 with soft glow */}
          <View className="relative w-full md:w-[330px]">
            {hoverCard1 && (
              <View className="absolute -inset-2">
                <View className="absolute inset-0 bg-amber-300/10 rounded-3xl blur-lg" />
              </View>
            )}
            <TouchableOpacity 
              className={`bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-8 rounded-2xl ${hoverCard1 ? 'shadow-lg shadow-amber-200/40' : 'shadow-md'} w-full hover:translate-y-[-2px] transition-all duration-500 flex items-center relative z-10`}
              onPress={onClarityCallPress}
              onMouseEnter={() => setHoverCard1(true)}
              onMouseLeave={() => setHoverCard1(false)}
            >
              <View className="mr-6 bg-amber-200/50 p-4 rounded-full">
                <Text className="text-3xl text-amber-700">✧</Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-stone-800 mb-1">Explore Clarity Call</Text>
                <Text className="text-stone-600 text-sm">A perfect first step to illuminate your path</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          {/* Card 2 with soft glow */}
          <View className="relative w-full md:w-[330px]">
            {hoverCard2 && (
              <View className="absolute -inset-2">
                <View className="absolute inset-0 bg-amber-300/10 rounded-3xl blur-lg" />
              </View>
            )}
            <TouchableOpacity 
              className={`bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-8 rounded-2xl ${hoverCard2 ? 'shadow-lg shadow-amber-200/40' : 'shadow-md'} w-full hover:translate-y-[-2px] transition-all duration-500 flex items-center relative z-10`}
              onPress={onMirrorPathPress}
              onMouseEnter={() => setHoverCard2(true)}
              onMouseLeave={() => setHoverCard2(false)}
            >
              <View className="mr-6 bg-amber-200/50 p-4 rounded-full">
                <Text className="text-3xl text-amber-700">⊹</Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-stone-800 mb-1">Learn About Mirror Path</Text>
                <Text className="text-stone-600 text-sm">Discover the transformative journey</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Ornamental divider */}
        <View className="flex items-center justify-center mt-16 opacity-0 animate-fade-up" style={{ animationDelay: '1.3s' }}>
          <View className="flex-row items-center w-full max-w-sm">
            <View className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-300/50" />
            <Text className="mx-4 text-amber-600 text-lg">✦</Text>
            <View className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-300/50" />
          </View>
        </View>
      </View>
    </View>
  );
} 