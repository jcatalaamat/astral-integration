import React from 'react';
import { View, Text } from 'react-native';
import TextureBackground from './utility/TextureBackground';

export default function QuoteDivider() {
  return (
    <View className="w-full py-24 bg-gradient-to-br from-stone-50 via-amber-50/50 to-stone-50 relative overflow-hidden">
      {/* Background texture */}
      <TextureBackground type="paper" opacity={0.1} />
      
      <View className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <View className="flex items-center justify-center mb-10">
          <View className="w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mb-10" />
          <Text className="text-amber-600 text-4xl">⊹</Text>
          <View className="w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mt-10" />
        </View>
        
        <View className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Text className="text-3xl text-stone-800 font-serif italic mb-6">
            "You are not broken. You are awakening."
          </Text>
        </View>
        
        <View className="opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <Text className="text-amber-700 text-lg font-serif">
            Every journey begins with a single sacred step
          </Text>
        </View>
      </View>
    </View>
  );
} 