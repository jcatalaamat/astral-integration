import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import TextureBackground from './utility/TextureBackground';
import GlowEffect from './utility/GlowEffect';
import React, { useState } from 'react';

type OfferProps = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: 'light' | 'deep' | 'premium';
  details?: string;
  icon?: string;
  glyph?: string;
  buttonText?: string;
};

type BookingCardProps = {
  offer: OfferProps;
  onBook: (id: string) => void;
};

function BookingCard({ offer, onBook }: BookingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Category styling
  const categoryColors = {
    light: 'bg-amber-50 border-amber-200',
    deep: 'bg-amber-100 border-amber-300',
    premium: 'bg-gradient-to-br from-amber-100 to-amber-200 border-amber-400 shadow-lg shadow-amber-200/20'
  };

  const categoryLabels = {
    light: 'Light',
    deep: 'Deep',
    premium: 'Premium'
  };
  
  // Choose button text based on the offering
  const getButtonText = () => {
    if (offer.buttonText) return offer.buttonText;
    
    switch(offer.id) {
      case 'clarity-call': return 'Step In';
      case 'soul-session': return 'Begin Session';
      case 'mirror-path-journey': return 'Enter Path';
      case 'energy-clearing': return 'Reserve';
      case 'sacred-immersion': return 'Experience';
      default: return 'Reserve Session';
    }
  };
  
  // Background based on category with texture
  const cardBackground = offer.category === 'premium' 
    ? 'bg-gradient-to-b from-amber-50 to-amber-100 border-amber-200' 
    : offer.category === 'deep' 
      ? 'bg-gradient-to-b from-stone-50 to-amber-50 border-amber-100'
      : 'bg-gradient-to-b from-stone-100 to-stone-50 border-stone-200';
  
  // Text colors based on category
  const titleColor = 'text-stone-800';
  const descriptionColor = 'text-stone-600';
  const detailsColor = 'text-stone-500';
  const priceColor = 'text-amber-800';
  
  // Button text
  const buttonText = getButtonText();
  
  return (
    <View 
      className={`h-full rounded-2xl shadow-md relative overflow-visible ${cardBackground} ${isHovered ? 'shadow-xl scale-[1.02]' : 'shadow-md'} transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Badge - positioned outside card border */}
      <View className="absolute -top-3 right-4 px-4 py-1.5 rounded-full shadow-md z-10" style={{ backgroundColor: offer.category === 'light' ? '#fef3c7' : offer.category === 'deep' ? '#fde68a' : '#fbbf24' }}>
        <Text className="text-xs font-medium text-amber-800">{categoryLabels[offer.category]}</Text>
      </View>
      
      {/* Texture overlay */}
      <View className="absolute inset-0 opacity-30 overflow-hidden rounded-2xl">
        <View className="w-full h-full bg-texture-paper" />
      </View>
      
      {/* Sacred Symbol Overlay */}
      <View className={`absolute top-3 right-3 ${isHovered ? 'opacity-40' : 'opacity-20'} transition-opacity duration-500`}>
        <Text className="text-4xl text-amber-800 animate-pulse-slow" style={{ animationDuration: '5s' }}>{offer.icon || '⊹'}</Text>
      </View>
      
      {/* Glow effect on hover */}
      {isHovered && (
        <View className="absolute inset-0 bg-gradient-to-t from-amber-200/10 to-transparent rounded-2xl" />
      )}
      
      <View className="p-10 pt-12 h-full flex flex-col">
        {/* Title with glyph */}
        <View className="flex-row items-center mb-2">
          <Text className={`text-2xl font-semibold ${titleColor} font-serif`}>{offer.title}</Text>
          {offer.glyph && (
            <Text className="ml-2 text-amber-700 text-lg">{offer.glyph}</Text>
          )}
        </View>
        
        <Text className={`mb-4 ${detailsColor}`}>{offer.details}</Text>
        <Text className={`mb-6 flex-grow ${descriptionColor}`}>{offer.description}</Text>
        
        <View className="flex-row justify-between items-center">
          <Text className={`text-2xl font-bold ${priceColor}`}>{offer.price}</Text>
          <TouchableOpacity 
            onPress={() => onBook(offer.id)}
            className={`${isHovered ? 'bg-gradient-to-r from-amber-500 to-amber-700 translate-y-[-2px] shadow-lg shadow-amber-700/20' : 'bg-gradient-to-r from-amber-600 to-amber-800'} py-2 px-6 rounded-lg transition-all duration-500 overflow-hidden relative group`}
          >
            <View className="absolute inset-0 bg-amber-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            <Text className="text-white font-semibold relative z-10">{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function BookingMenu() {
  const offers = [
    {
      id: 'clarity-call',
      title: 'Clarity Call',
      price: '$75',
      description: '45-minute call to identify where you are on your path and what\'s needed next.',
      category: 'light' as const,
      details: 'Perfect starting point for new clients',
      icon: '✧',
      glyph: '✦'
    },
    {
      id: 'soul-session',
      title: 'Soul Session',
      price: '$150',
      description: '90-minute deep dive session to clear blocks and reconnect with your essence.',
      category: 'deep' as const,
      details: 'Includes post-session integration practices',
      icon: '⊛',
      glyph: '☽'
    },
    {
      id: 'mirror-path-journey',
      title: 'Mirror Path Journey',
      price: '$450/month',
      description: '3-month container with weekly sessions and personalized practices.',
      category: 'premium' as const,
      details: 'Includes rituals, integration practices, and voice message support',
      icon: '⊹',
      glyph: '☉'
    },
    {
      id: 'energy-clearing',
      title: 'Energy Clearing',
      price: '$95',
      description: 'Remote energy work session to release stagnant patterns and restore flow.',
      category: 'light' as const,
      icon: '⊕',
      glyph: '⚯'
    },
    {
      id: 'sacred-immersion',
      title: 'Sacred Immersion Day',
      price: '$350',
      description: 'Full-day virtual retreat with multiple modalities for profound shifts.',
      category: 'deep' as const,
      details: 'Includes preparation ritual and follow-up integration call',
      icon: '❋',
      glyph: '⚛'
    }
  ];

  const handleBookOffer = (id: string) => {
    console.log(`Booking offer: ${id}`);
  };

  return (
    <View className="w-full py-28 px-4 relative overflow-hidden">
      {/* Background layers */}
      <View className="absolute inset-0 bg-gradient-to-b from-white to-amber-50" />
      <TextureBackground type="grain" opacity={0.1} className="absolute inset-0" />
      <TextureBackground type="noise" opacity={0.05} className="absolute inset-0" />
      
      {/* Sacred symbols background */}
      <View className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
        <Text className="text-[400px] text-amber-800 leading-none">⊛</Text>
      </View>
      
      {/* Sacred brushstroke divider - before premium section */}
      <View className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      
      <View className="max-w-6xl mx-auto relative z-10">
        <Text className="text-3xl font-bold text-center text-stone-800 mb-3 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>Sacred Sessions</Text>
        <Text className="text-xl text-center text-stone-600 mb-4 max-w-3xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          Choose the offering that resonates with your current needs and journey
        </Text>
        
        <Text className="text-center text-amber-700 italic mb-10 max-w-xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          These aren't sessions. They're mirrors of who you're becoming.
        </Text>
        
        {/* Start Here Guidance */}
        <View className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-12 max-w-2xl mx-auto glassmorphism opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          <Text className="text-center text-stone-700 font-medium mb-2">Start where your soul feels the call. These are sacred invitations, not transactions.</Text>
          <Text className="text-center text-stone-600">
            If you're new to this work, start with a Clarity Call or Energy Clearing to identify where you are and where you're ready to go.
          </Text>
        </View>
        
        {/* Category Labels */}
        <View className="flex flex-row justify-center gap-10 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
          <View className="items-center">
            <View className="w-4 h-4 rounded-full bg-amber-200 mb-2 animate-pulse-slow" />
            <Text className="text-sm text-stone-600">Light</Text>
          </View>
          <View className="items-center">
            <View className="w-4 h-4 rounded-full bg-amber-300 mb-2 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <Text className="text-sm text-stone-600">Deep</Text>
          </View>
          <View className="items-center">
            <View className="w-4 h-4 rounded-full bg-amber-400 mb-2 animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <Text className="text-sm text-stone-600">Premium</Text>
          </View>
        </View>
        
        {/* Responsive Grid with fixed margins */}
        <View className="flex-col md:flex-row flex-wrap -mx-4 mb-8">
          {offers.map((offer, index) => (
            <View 
              key={offer.id} 
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 opacity-0 animate-fade-up"
              style={{ animationDelay: `${1.3 + index * 0.2}s` }}
            >
              <BookingCard offer={offer} onBook={handleBookOffer} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
} 