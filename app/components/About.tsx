import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import TextureBackground from './utility/TextureBackground';

type AboutProps = {
  headline?: string;
  quoteText?: string;
  bio?: string;
  ctaText?: string;
  onCtaPress?: () => void;
  portraitImage?: string;
};

export default function About({
  headline = "Meet Jordi",
  quoteText = "I am not here to teach you who you are. I'm here to remind you what you've always known.",
  bio = "I walk beside those in transformation — not to lead, but to reflect their deepest clarity. With over a decade of experience in spiritual guidance and soul work, I create a sacred container where your authentic self can emerge and flourish.",
  ctaText = "Walk With Me",
  onCtaPress,
  portraitImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
}: AboutProps) {
  // State for hover effects
  const [quoteHovered, setQuoteHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  
  return (
    <View className="w-full flex flex-col md:flex-row py-28 px-4 bg-stone-50 relative overflow-hidden">
      {/* Simplified background with solid color */}
      <View className="absolute inset-0 bg-stone-50" />
      
      <View className="md:w-1/2 p-8 md:p-12 relative z-20">
        <Text className="text-3xl font-semibold text-stone-800 mb-8 font-serif">{headline}</Text>
        
        {/* Enhanced quote with hover effect and improved visibility */}
        <View 
          className="relative mb-8"
          onMouseEnter={() => setQuoteHovered(true)}
          onMouseLeave={() => setQuoteHovered(false)}
        >
          <View className={`absolute -left-4 -top-4 text-4xl text-amber-700 transition-all duration-700 ${quoteHovered ? 'scale-125 -translate-x-1 -translate-y-1' : ''}`}>
            <Text className="font-serif">❝</Text>
          </View>
          
          <Text className="text-amber-700 italic mb-0 text-xl pl-2 leading-relaxed font-medium">
            {quoteText}
          </Text>
          
          <View className={`absolute -right-4 bottom-0 text-4xl text-amber-700 transition-all duration-700 ${quoteHovered ? 'scale-125 translate-x-1 translate-y-1' : ''}`}>
            <Text className="font-serif">❞</Text>
          </View>
        </View>
        
        <Text className="text-lg text-stone-800 mb-10 leading-relaxed">{bio}</Text>
        
        <Text className="text-amber-700 italic mb-6 text-lg font-serif font-medium">
          Guide. Mirror. Oracle. I walk with you in the unseen.
        </Text>
        
        {/* Signature below the bio */}
        <View className="mb-10">
          <Image 
            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cursive_Writing_Signature_example.svg/2560px-Cursive_Writing_Signature_example.svg.png" }}
            className="h-14 w-48 opacity-80 object-contain"
            resizeMode="contain"
          />
        </View>
        
        {/* Audio message preview - simplified */}
        <View className="mb-12 flex flex-row items-center p-5 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md">
          <View className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center mr-4 shadow-md">
            <Text className="text-white text-lg">▶</Text>
          </View>
          <View>
            <Text className="text-stone-700 font-medium mb-1">Listen to my welcome message</Text>
            <View className="flex-row items-center">
              <View className="h-1.5 w-36 bg-stone-200 rounded-full overflow-hidden">
                <View className="bg-amber-400 h-full w-1/4" />
              </View>
              <Text className="text-xs text-stone-500 ml-2">0:30</Text>
            </View>
          </View>
        </View>
        
        {onCtaPress && (
          <TouchableOpacity 
            onPress={onCtaPress}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            className={`relative bg-transparent border border-amber-700 px-7 py-3 rounded-md self-start transition-all duration-500 text-center mt-6 overflow-hidden ${buttonHovered ? 'bg-amber-50 shadow-md' : ''}`}
          >
            <Text className="text-amber-700 font-medium">{ctaText}</Text>
            
            {/* Underline animation on hover */}
            <View className={`absolute bottom-0 left-0 h-0.5 bg-amber-600 transition-all duration-500 ${buttonHovered ? 'w-full' : 'w-0'}`} />
          </TouchableOpacity>
        )}
      </View>
      
      <View className="md:w-1/2 aspect-square md:aspect-auto md:h-auto rounded-2xl overflow-hidden flex items-center justify-center relative z-10">
        {/* Portrait with simplified effects */}
        <View className="relative">
          <View className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
            {/* Actual portrait image */}
            <Image 
              source={{ uri: portraitImage }}
              className="absolute inset-0 w-full h-full object-cover"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
} 