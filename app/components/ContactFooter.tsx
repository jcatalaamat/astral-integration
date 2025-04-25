import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import TextureBackground from './utility/TextureBackground';

export default function ContactFooter() {
  const [messageSent, setMessageSent] = useState(false);
  
  const handleSendMessage = () => {
    // Here you'd handle the actual message sending logic
    setMessageSent(true);
    
    // Reset after 5 seconds for demo purposes
    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };
  
  return (
    <View>
      {/* Contact Section */}
      <View className="w-full py-20 px-4 bg-stone-50 relative overflow-hidden">
        {/* Subtle background texture */}
        <TextureBackground type="paper" opacity={0.07} />
        
        <View className="max-w-4xl mx-auto flex items-center relative z-10">
          <Text className="text-amber-700 text-lg italic mb-2 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Sacred Connection
          </Text>
          
          <Text className="text-3xl font-bold text-center text-stone-800 mb-3 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Ready to Begin Your Journey?
          </Text>
          
          <Text className="text-xl text-center text-stone-600 mb-6 max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            Take the first sacred step toward authentic transformation
          </Text>
          
          <Text className="text-center text-amber-700 italic mb-4 max-w-xl leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            If your heart is stirring, reach out. I will meet you there.
          </Text>
          
          <View className="w-full max-w-md flex flex-col gap-4 mb-8 opacity-0 animate-fade-up bg-white/50 p-8 rounded-xl border border-amber-100/50 shadow-sm" style={{ animationDelay: '1.1s' }}>
            <TextInput 
              placeholder="Your sacred name"
              className="bg-white border border-amber-200/70 rounded-xl px-5 py-3 shadow-sm focus:border-amber-500 transition-all duration-300"
            />
            
            <TextInput 
              placeholder="Where I can reach you"
              className="bg-white border border-amber-200/70 rounded-xl px-5 py-3 shadow-sm focus:border-amber-500 transition-all duration-300"
            />
            
            <View className="w-full relative">
              <TextInput 
                placeholder="What's rising in your heart?"
                multiline
                numberOfLines={5}
                className="bg-white border border-amber-200/70 rounded-xl px-5 py-4 min-h-[120px] shadow-sm focus:border-amber-500 transition-all duration-300"
              />
              <View className="absolute bottom-3 right-3 opacity-30">
                <Text className="text-amber-600 text-lg">✎</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity 
            className="group bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 rounded-xl shadow-sm hover:shadow-lg hover:shadow-amber-200/20 transition-all duration-500 transform hover:-translate-y-0.5 relative overflow-hidden mt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.3s' }}
            onPress={handleSendMessage}
          >
            {/* Message button shimmer effect */}
            <View className="absolute top-0 -left-10 w-20 h-full bg-white/20 transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-52 transition-all duration-1000 ease-in-out" />
            
            {/* Sparkle effects */}
            <View className="absolute top-1 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse" 
              style={{ animationDuration: '2s' }}
            />
            <View className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            
            <Text className="text-white font-medium text-lg">Send With Intention</Text>
          </TouchableOpacity>
          
          {/* Confirmation message */}
          {messageSent && (
            <View className="mt-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Text className="text-amber-700 text-center font-serif italic">
                Thank you. Your message has entered the sacred field.
              </Text>
            </View>
          )}
        </View>
      </View>
      
      {/* Footer */}
      <View className="w-full py-16 px-4 bg-stone-900 relative overflow-hidden">
        {/* Subtle star field in footer */}
        <View className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <View 
              key={`star-${i}`}
              className="absolute w-1 h-1 rounded-full bg-amber-100"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
            />
          ))}
        </View>
        
        <View className="max-w-6xl mx-auto text-center">
          <View className="mb-12">
            <Text className="text-2xl font-bold text-white mb-2 font-serif">The Mirror Path</Text>
            <Text className="text-amber-100/70 italic">Reflect. Remember. Return.</Text>
            <Text className="text-amber-50/60 italic text-sm mt-6 max-w-xl mx-auto">
              May your return be soft, your voice be heard, and your path be lit from within.
            </Text>
          </View>
          
          <View className="flex flex-row justify-center gap-8 flex-wrap mb-12">
            <TouchableOpacity className="group">
              <Text className="text-white hover:text-amber-100 transition-all duration-300">
                Home
                <View className="h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="group">
              <Text className="text-white hover:text-amber-100 transition-all duration-300">
                About
                <View className="h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="group">
              <Text className="text-white hover:text-amber-100 transition-all duration-300">
                Offerings
                <View className="h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="group">
              <Text className="text-white hover:text-amber-100 transition-all duration-300">
                Contact
                <View className="h-px w-0 group-hover:w-full bg-amber-400 mt-1 transition-all duration-500" />
              </Text>
            </TouchableOpacity>
          </View>
          
          <View className="flex flex-row justify-center gap-8 mb-12">
            {[
              { icon: '✧', label: 'Instagram' },
              { icon: '⦿', label: 'Spotify' },
              { icon: '⌘', label: 'Newsletter' }
            ].map((item, index) => (
              <TouchableOpacity 
                key={index} 
                className="group flex flex-col items-center"
              >
                <View className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-amber-900/30 transition-all duration-500 group-hover:shadow-inner group-hover:shadow-amber-700/20">
                  <Text className="text-amber-100/70 group-hover:text-amber-100 text-xl transition-all duration-300 animate-pulse-slow">{item.icon}</Text>
                </View>
                <Text className="text-stone-500 text-xs mt-1">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Closing blessing */}
          <View className="mb-8">
            <Text className="text-amber-400/80 text-center italic font-serif">
              May your path be lit with remembrance.
            </Text>
          </View>
          
          <View className="border-t border-stone-800 pt-8">
            <View>
              <Text className="text-amber-100/60 text-sm text-center mb-2">Awaken. Remember. Embody. You are already home.</Text>
              <Text className="text-stone-400 text-sm">© 2023 Jordi Sacred Coaching. All rights reserved.</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
} 