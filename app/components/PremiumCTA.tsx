import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

type PremiumCTAProps = {
  onApplyNow: () => void;
};

export default function PremiumCTA({ onApplyNow = () => console.log('Apply for Premium') }: PremiumCTAProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intention: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = () => {
    setShowApplicationForm(true);
    onApplyNow();
  };

  const handleSubmitApplication = () => {
    console.log('Application submitted:', formData);
    setSubmitted(true);
    // Here you would typically send this data to your backend
  };

  return (
    <View className="w-full py-28 bg-stone-950 relative overflow-hidden">
      {/* Enhanced background glow effects */}
      <View className="absolute inset-0 opacity-20">
        <View className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-amber-500/30 blur-3xl animate-pulse-slow" style={{ animationDuration: '7s' }} />
        <View className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-500/30 blur-3xl animate-pulse-slow" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </View>
      
      {/* Enhanced candle flicker effect */}
      <View className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <View 
            key={`flicker-${i}`}
            className="absolute bg-amber-400/40 rounded-full blur-xl animate-pulse-slow"
            style={{
              width: 20 + Math.random() * 80,
              height: 20 + Math.random() * 80,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </View>

      <View className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Exclusivity banner at the top */}
        <View className="mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Text className="text-center text-amber-300/80 text-sm tracking-widest uppercase">
            This space is not for everyone — only those who are truly ready
          </Text>
        </View>
      
        {!showApplicationForm ? (
          // Initial CTA view
          <View className="border border-amber-800/50 rounded-xl p-10 bg-stone-900/90 relative overflow-hidden shadow-2xl shadow-amber-900/20 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {/* Enhanced sacred glow border effect */}
            <View className="absolute inset-0 -m-1 rounded-xl border border-amber-400/40 blur-sm animate-pulse-slow" style={{ animationDuration: '4s' }} />
            <View className="absolute inset-0 -m-0.5 rounded-xl border border-amber-400/30 blur-md animate-pulse-slow" style={{ animationDuration: '6s' }} />
            
            {/* Gold accent line at top */}
            <View className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0" />
            
            {/* Background glyph */}
            <View className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              <Text className="text-amber-400 text-[400px]">⊛</Text>
            </View>
            
            <View className="flex items-center">
              {/* Sacred sigil icon above title */}
              <View className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
                <Text className="text-amber-400 text-4xl">☉</Text>
              </View>
            
              {/* Added whispered quote above title */}
              <Text className="text-amber-300/70 text-center text-sm italic mb-6 max-w-md opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                Not everyone will feel the call. If you do — follow it.
              </Text>
              
              <Text className="text-amber-50/80 text-center text-lg italic mb-3 opacity-0 animate-fade-up" style={{ animationDelay: '1.5s' }}>
                For those called not to grow, but to become.
              </Text>
              
              <Text className="text-amber-100 text-4xl md:text-5xl font-bold text-center mb-6 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '1.8s' }}>
                The Sacred Chamber
              </Text>
              
              <Text className="text-amber-50/80 text-xl text-center mb-8 max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '2.1s' }}>
                For those called to a deeper journey. One-on-one mentorship in a sacred container, where true transformation unfolds.
              </Text>
              
              <Text className="text-amber-200 italic text-center mb-10 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '2.4s' }}>
                "This is not coaching. This is initiation."
              </Text>
              
              <View className="relative mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '2.7s' }}>
                <TouchableOpacity 
                  onPress={handleApplyClick}
                  className="bg-gradient-to-r from-amber-700 to-amber-600 px-10 py-5 rounded-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  <View className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-opacity duration-700" />
                  <Text className="text-white font-medium text-lg">Apply for Initiation</Text>
                </TouchableOpacity>
                
                {/* Enhanced exclusivity tag */}
                <View className="absolute -top-3 -right-3 px-3 py-1 bg-amber-900 rounded-full border border-amber-400/50 shadow-lg shadow-amber-900/30">
                  <Text className="text-xs text-amber-100 font-medium">Limited Availability</Text>
                </View>
              </View>
              
              {/* Enhanced Premium Testimonial */}
              <View className="border border-amber-800/30 rounded-lg p-8 max-w-xl bg-stone-900/70 opacity-0 animate-fade-up" style={{ animationDelay: '3.0s' }}>
                <View className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-400 text-lg">
                  <Text>✧</Text>
                </View>
                
                <Text className="text-amber-50/90 italic mb-4 text-center leading-relaxed font-serif">
                  "The Sacred Chamber was the turning point in my journey. What Jordi creates in this space is nothing short of alchemical. It's for those ready to let go of who they've been told they are."
                </Text>
                <Text className="text-amber-200 text-center">— Elena R., Sacred Chamber Graduate</Text>
              </View>
            </View>
          </View>
        ) : (
          // Application form view
          <ScrollView 
            className="border border-amber-800/50 rounded-xl p-8 bg-stone-900/90 relative shadow-2xl shadow-amber-900/20 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
            showsVerticalScrollIndicator={false}
          >
            {/* Soft glow border */}
            <View className="absolute inset-0 -m-1 rounded-xl border border-amber-400/30 blur-sm" />
            
            {/* Gold accent line at top */}
            <View className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0" />
            
            {!submitted ? (
              <>
                {/* Sacred sigil above form */}
                <View className="flex items-center mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
                  <Text className="text-amber-400 text-3xl">☉</Text>
                </View>
              
                <Text className="text-amber-100 text-3xl font-bold text-center mb-2 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                  Sacred Chamber Application
                </Text>
                
                <Text className="text-amber-200/70 text-center italic mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '1.5s' }}>
                  "The path reveals itself to those who are ready to walk it."
                </Text>
                
                <View className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '1.8s' }}>
                  <Text className="text-amber-100 mb-2">Your Sacred Name</Text>
                  <TextInput
                    className="bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white"
                    placeholder="Enter your full name"
                    placeholderTextColor="#9c9c9c"
                    value={formData.name}
                    onChangeText={(text) => setFormData({...formData, name: text})}
                  />
                </View>
                
                <View className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '2.1s' }}>
                  <Text className="text-amber-100 mb-2">Your Connection Point</Text>
                  <TextInput
                    className="bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9c9c9c"
                    keyboardType="email-address"
                    value={formData.email}
                    onChangeText={(text) => setFormData({...formData, email: text})}
                  />
                </View>
                
                <View className="mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '2.4s' }}>
                  <Text className="text-amber-100 mb-2">Your Soul's Intention</Text>
                  <TextInput
                    className="bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white min-h-32"
                    placeholder="Share what calls you to the Sacred Chamber..."
                    placeholderTextColor="#9c9c9c"
                    multiline
                    textAlignVertical="top"
                    value={formData.intention}
                    onChangeText={(text) => setFormData({...formData, intention: text})}
                  />
                </View>
                
                <TouchableOpacity 
                  onPress={handleSubmitApplication}
                  className="bg-gradient-to-r from-amber-700 to-amber-600 py-4 rounded-md w-full mb-4 hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 opacity-0 animate-fade-up"
                  style={{ animationDelay: '2.7s' }}
                >
                  <Text className="text-white font-medium text-center text-lg">Send With Intention</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  onPress={() => setShowApplicationForm(false)}
                  className="py-2 opacity-0 animate-fade-up"
                  style={{ animationDelay: '3.0s' }}
                >
                  <Text className="text-amber-400 text-center">Return to previous page</Text>
                </TouchableOpacity>
              </>
            ) : (
              // Enhanced confirmation view
              <View className="items-center py-10">
                <Text className="text-amber-400 text-6xl mb-6 animate-pulse-slow opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>✧</Text>
                <Text className="text-amber-100 text-3xl font-bold text-center mb-4 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
                  Your Intention Has Been Received
                </Text>
                <Text className="text-amber-50/80 text-center text-lg mb-8 max-w-md opacity-0 animate-fade-up" style={{ animationDelay: '1.4s' }}>
                  Thank you for your interest in the Sacred Chamber. We will review your application with care and respond within 3 days.
                </Text>
                <Text className="text-amber-200 italic text-center mb-10 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '1.7s' }}>
                  "The journey has already begun."
                </Text>
                <TouchableOpacity 
                  onPress={() => {
                    setShowApplicationForm(false);
                    setSubmitted(false);
                  }}
                  className="bg-stone-800 border border-amber-700/50 px-8 py-3 rounded-md hover:bg-stone-700 transition-all duration-300 opacity-0 animate-fade-up"
                  style={{ animationDelay: '2.0s' }}
                >
                  <Text className="text-amber-100">Return to Sacred Gateway</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
} 