import React from 'react';
import { View, Text } from 'react-native';

export default function GradientTest() {
  return (
    <View className="p-6">
      <Text className="mb-4 text-lg font-bold">Gradient Tests</Text>
      
      {/* Standard gradient */}
      <View className="h-20 w-full bg-gradient-to-r from-amber-500 to-amber-700 mb-4 rounded-lg">
        <Text className="text-white p-2">Standard gradient</Text>
      </View>
      
      {/* Gradient with opacity */}
      <View className="h-20 w-full bg-gradient-to-b from-stone-900/20 via-stone-900/60 to-stone-900/85 mb-4 rounded-lg">
        <Text className="text-white p-2">Gradient with opacity</Text>
      </View>
      
      {/* Simple color with opacity */}
      <View className="h-20 w-full bg-amber-500/50 mb-4 rounded-lg">
        <Text className="text-white p-2">Color with opacity</Text>
      </View>
    </View>
  );
} 