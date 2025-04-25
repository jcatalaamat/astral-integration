import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import '../base.css';

export default function SacredChamberApplication() {
  const [isReady, setIsReady] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intention: '',
    calling: '',
    challenges: '',
    priorWork: '',
    commitment: '',
    questions: ''
  });
  
  useEffect(() => {
    // Simulate loading for ceremonial entrance
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  
  const handleSubmit = () => {
    // Submit application (would connect to backend in production)
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };
  
  const navigateToHome = () => {
    window.location.href = '/';
  };
  
  const navigateToSacredChamber = () => {
    window.location.href = '/sacred-chamber';
  };
  
  const goToNextStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep + 1);
  };
  
  const goToPreviousStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(currentStep - 1);
  };
  
  const steps = [
    {
      title: "Sacred Introduction",
      subtitle: "Establish your energy and intention",
      fields: [
        {
          id: "name",
          label: "Your Sacred Name",
          placeholder: "Enter your full name",
          type: "text"
        },
        {
          id: "email",
          label: "Your Connection Point",
          placeholder: "Enter your email address",
          type: "email"
        },
        {
          id: "intention",
          label: "Your Soul's Intention",
          placeholder: "Share what calls you to the Sacred Chamber...",
          type: "textarea",
          rows: 6
        }
      ]
    },
    {
      title: "The Sacred Call",
      subtitle: "What draws you to this journey",
      fields: [
        {
          id: "calling",
          label: "The Call You Feel",
          placeholder: "Describe what you're feeling called toward at this moment in your journey...",
          type: "textarea",
          rows: 6
        },
        {
          id: "challenges",
          label: "Sacred Challenges",
          placeholder: "What patterns or challenges are you ready to transform?",
          type: "textarea",
          rows: 6
        }
      ]
    },
    {
      title: "Your Sacred Readiness",
      subtitle: "Preparation for the journey ahead",
      fields: [
        {
          id: "priorWork",
          label: "Your Path Thus Far",
          placeholder: "Share any prior inner work, spiritual practices, or transformational experiences...",
          type: "textarea",
          rows: 5
        },
        {
          id: "commitment",
          label: "Your Sacred Commitment",
          placeholder: "How will you honor this container and commit to your transformation?",
          type: "textarea",
          rows: 5
        },
        {
          id: "questions",
          label: "Questions from Your Soul",
          placeholder: "What questions arise as you consider entering the Sacred Chamber?",
          type: "textarea",
          rows: 5
        }
      ]
    }
  ];
  
  const renderForm = () => {
    const currentStepData = steps[currentStep];
    
    return (
      <View className="mb-8">
        <Text className="text-amber-100 text-3xl font-bold text-center mb-2 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {currentStepData.title}
        </Text>
        
        <Text className="text-amber-400/70 text-center italic mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {currentStepData.subtitle}
        </Text>
        
        {currentStepData.fields.map((field, index) => (
          <View 
            key={field.id} 
            className="mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: `${1 + index * 0.2}s` }}
          >
            <Text className="text-amber-100 mb-2">{field.label}</Text>
            {field.type === 'textarea' ? (
              <TextInput
                className="bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white min-h-32"
                placeholder={field.placeholder}
                placeholderTextColor="#9c9c9c"
                multiline
                textAlignVertical="top"
                numberOfLines={field.rows}
                value={formData[field.id]}
                onChangeText={(text) => handleInputChange(field.id, text)}
              />
            ) : (
              <TextInput
                className="bg-stone-800 border border-amber-800/50 rounded-md p-4 text-white"
                placeholder={field.placeholder}
                placeholderTextColor="#9c9c9c"
                keyboardType={field.type === 'email' ? 'email-address' : 'default'}
                value={formData[field.id]}
                onChangeText={(text) => handleInputChange(field.id, text)}
              />
            )}
          </View>
        ))}
        
        <View className="flex-row justify-between mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '1.6s' }}>
          {currentStep > 0 && (
            <TouchableOpacity 
              onPress={goToPreviousStep}
              className="border border-amber-600/50 px-6 py-3 rounded-md flex-row items-center"
            >
              <Text className="text-amber-400 mr-2">←</Text>
              <Text className="text-amber-400">Previous Step</Text>
            </TouchableOpacity>
          )}
          
          <View className="flex-1" />
          
          {currentStep < steps.length - 1 ? (
            <TouchableOpacity 
              onPress={goToNextStep}
              className="bg-gradient-to-r from-amber-800 to-amber-700 px-8 py-3 rounded-md flex-row items-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Text className="text-white">Continue Journey</Text>
              <Text className="text-white ml-2">→</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              onPress={handleSubmit}
              className="bg-gradient-to-r from-amber-700 to-amber-600 px-8 py-3 rounded-md hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <View className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-opacity duration-700" />
              <Text className="text-white font-medium">Send With Intention</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  
  const renderConfirmation = () => {
    return (
      <View className="items-center py-10 opacity-0 animate-fade-up">
        <Text className="text-amber-400 text-6xl mb-6 animate-pulse-slow">✧</Text>
        <Text className="text-amber-100 text-3xl font-bold text-center mb-4 font-serif">
          Your Intention Has Been Received
        </Text>
        <Text className="text-amber-50/80 text-center text-lg mb-8 max-w-md">
          Thank you for your interest in the Sacred Chamber. We will review your application with care and respond within 3 days.
        </Text>
        <Text className="text-amber-200 italic text-center mb-10 font-serif">
          "The journey has already begun."
        </Text>
        <TouchableOpacity 
          onPress={navigateToHome}
          className="bg-stone-800 border border-amber-700/50 px-8 py-3 rounded-md hover:bg-stone-700 transition-all duration-300"
        >
          <Text className="text-amber-100">Return to Sacred Gateway</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const renderProgressIndicator = () => {
    return (
      <View className="flex-row justify-center space-x-2 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        {steps.map((_, index) => (
          <View 
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentStep ? 'bg-amber-500' : index < currentStep ? 'bg-amber-700' : 'bg-stone-700'}`}
          />
        ))}
      </View>
    );
  };

  return (
    <View className={`min-h-screen bg-stone-950 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <View className="border-b border-amber-900/30 bg-stone-950">
        <View className="max-w-5xl mx-auto px-4 py-4 flex-row items-center">
          <TouchableOpacity 
            onPress={navigateToHome}
            className="mr-6"
          >
            <Text className="text-amber-400 font-serif">The Mirror Path</Text>
          </TouchableOpacity>
          
          <View className="h-4 w-px bg-amber-800/30 mr-6" />
          
          <TouchableOpacity onPress={navigateToSacredChamber}>
            <Text className="text-amber-400/70 hover:text-amber-400 transition-colors duration-300">Sacred Chamber</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView className="flex-1">
        <View className="py-16 px-4 relative">
          {/* Enhanced candle flicker effect */}
          <View className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <View 
                key={`flicker-${i}`}
                className="absolute bg-amber-400/40 rounded-full blur-xl animate-pulse-slow"
                style={{
                  width: 10 + Math.random() * 40,
                  height: 10 + Math.random() * 40,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </View>
          
          {/* Background glyph */}
          <View className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <Text className="text-amber-400 text-[400px]">⊛</Text>
          </View>
          
          <View className="max-w-3xl mx-auto relative z-10">
            <View className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Text className="text-center text-amber-300/80 text-sm tracking-widest uppercase">
                Sacred Chamber
              </Text>
            </View>
            
            {!isSubmitted && renderProgressIndicator()}
            
            <View className="border border-amber-800/50 rounded-xl p-10 bg-stone-900/90 relative overflow-hidden shadow-2xl shadow-amber-900/20">
              {/* Soft glow border */}
              <View className="absolute inset-0 -m-1 rounded-xl border border-amber-400/30 blur-sm" />
              
              {/* Gold accent line at top */}
              <View className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/80 to-amber-400/0" />
              
              {isSubmitted ? renderConfirmation() : renderForm()}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 