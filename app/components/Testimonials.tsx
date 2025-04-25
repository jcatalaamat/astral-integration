import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TextureBackground from './utility/TextureBackground';
import { useState, useRef } from 'react';

type TestimonialProps = {
  quote: string;
  name: string;
  title?: string;
  journey?: string;
  hasAudio?: boolean;
  featured?: boolean;
};

function Testimonial({ quote, name, title, journey, hasAudio = false, featured = false }: TestimonialProps) {
  return (
    <View className={`
      ${featured 
        ? 'bg-gradient-to-b from-amber-50/90 via-stone-50/90 to-amber-50/80 border-amber-200' 
        : 'bg-gradient-to-r from-stone-50/90 to-amber-50/80 border-amber-100'} 
      rounded-2xl p-8 md:p-12 mb-6 md:mb-0 shadow-sm border transition-all duration-500 relative overflow-hidden
      ${featured ? 'hover:shadow-lg hover:border-amber-300' : 'hover:shadow-md hover:border-amber-200'}
    `}>
      {/* Decorative quote mark background - top left */}
      <View className="absolute top-5 left-6 opacity-10">
        <Text className="text-9xl text-amber-800 font-serif">"</Text>
      </View>
      
      {/* Decorative quote mark background - bottom right */}
      <View className="absolute bottom-5 right-6 opacity-10">
        <Text className="text-9xl text-amber-800 font-serif">"</Text>
      </View>
      
      {/* Subtle texture overlay */}
      <View className="absolute inset-0 bg-amber-50/10" />
      
      <View className="relative z-10">
        <Text className="text-amber-700 text-3xl mb-3 font-serif">"</Text>
        <Text className={`text-stone-700 mb-6 italic leading-relaxed ${featured ? 'text-xl' : 'text-lg'} font-serif`}>{quote}</Text>
        
        {/* Gold line divider */}
        <View className="w-16 h-px bg-gradient-to-r from-amber-300 to-amber-200 my-6" />
        
        <View className="flex-row items-center mt-4">
          <View className={`${featured ? 'w-14 h-14' : 'w-12 h-12'} rounded-full bg-gradient-to-br from-amber-100 to-amber-200 mr-4 flex items-center justify-center shadow-sm overflow-hidden`}>
            <Text className="text-amber-800 text-base font-medium">{name.charAt(0)}</Text>
          </View>
          <View className="flex-1">
            <Text className={`font-medium text-stone-800 ${featured ? 'text-lg' : ''}`}>{name}</Text>
            {title && <Text className="text-sm text-amber-700 italic">{title}</Text>}
            {journey && (
              <Text className="text-sm text-stone-600 mt-1 font-serif italic">— {journey}</Text>
            )}
          </View>
          
          {hasAudio && (
            <TouchableOpacity className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors duration-300">
              <Text className="text-amber-800 text-xs">▶</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef(null);
  
  const featuredTestimonial = {
    id: '1',
    quote: "Working with Jordi completely transformed my relationship with myself. The Mirror Path helped me see patterns I'd been blind to for decades. This journey feels like coming home to my true nature, embracing both light and shadow aspects of myself with compassion and wisdom.",
    name: "Sophia M.",
    title: "Life Coach",
    journey: "Ceremony Seeker, 8-month journey",
    featured: true
  };
  
  const testimonials = [
    {
      id: '2',
      quote: "I was skeptical at first, but the energy work in our sessions created tangible shifts in my life. I feel more aligned and purposeful than I have in years.",
      name: "James R.",
      title: "Entrepreneur",
      journey: "Soul Session Graduate"
    },
    {
      id: '3',
      quote: "The sacred container Jordi creates is unlike anything I've experienced before. Deep, transformative work happens naturally in that space of reverence.",
      name: "Alexis T.",
      title: "Artist",
      journey: "Mirror Path Explorer"
    },
    {
      id: '4',
      quote: "I've worked with many coaches, but Jordi's approach balances the spiritual with the practical in a way that created lasting change for me.",
      name: "Michael K.",
      title: "Executive",
      journey: "Clarity Call to Deep Work",
      hasAudio: true
    },
    {
      id: '5',
      quote: "The sacred rituals and practices helped me embody the lessons we uncovered. This wasn't just talk therapy—it was soul remembrance.",
      name: "Elena J.",
      title: "Therapist",
      journey: "Sacred Immersion Day"
    }
  ];

  // Handle scroll events to detect active slide
  const handleScroll = (event) => {
    const slideSize = 336;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / slideSize);
    setActiveSlide(index);
  };

  return (
    <View className="w-full py-28 px-4 relative overflow-hidden">
      {/* Background with subtle texture */}
      <View className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-50" />
      <TextureBackground type="grain" opacity={0.1} className="absolute inset-0">
        <View className="w-full h-full" />
      </TextureBackground>
      <TextureBackground type="noise" opacity={0.05} className="absolute inset-0">
        <View className="w-full h-full" />
      </TextureBackground>
      
      {/* Sacred symbol background watermark */}
      <View className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-[0.03]">
        <Text className="text-[300px] text-amber-800 leading-none">✧</Text>
      </View>
      
      <View className="max-w-6xl mx-auto relative z-10">
        <View className="opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Text className="text-center text-amber-700 italic mb-2 font-serif">What Others Have Found Inside The Mirror</Text>
        </View>
        
        <View className="opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <Text className="text-3xl font-bold text-center text-stone-800 mb-3 font-serif">Words from Those Who've Walked the Path</Text>
        </View>
        
        <View className="opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <Text className="text-xl text-center text-stone-600 mb-12 max-w-3xl mx-auto font-serif italic">
            The journey is different for everyone, but transformation is always possible
          </Text>
        </View>
        
        {/* Featured Testimonial - elegant box */}
        <View className="mb-16 opacity-0 animate-fade-up max-w-4xl mx-auto shadow-lg rounded-2xl" style={{ animationDelay: '0.9s' }}>
          <Testimonial
            quote={featuredTestimonial.quote}
            name={featuredTestimonial.name}
            title={featuredTestimonial.title}
            journey={featuredTestimonial.journey}
            featured={true}
          />
        </View>
        
        {/* Gold divider */}
        <View className="w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }} />
        
        {/* Testimonials Carousel */}
        <View className="relative">
          <ScrollView 
            ref={scrollViewRef}
            horizontal 
            showsHorizontalScrollIndicator={false} 
            className="pb-8"
            decelerationRate="fast"
            snapToInterval={336}
            snapToAlignment="center"
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
          >
            {testimonials.map((testimonial, index) => (
              <View 
                key={testimonial.id}
                className="w-80 mr-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${1.3 + index * 0.2}s` }}
              >
                <Testimonial
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  journey={testimonial.journey}
                  hasAudio={testimonial.hasAudio}
                />
              </View>
            ))}
          </ScrollView>
          
          {/* Carousel Navigation Dots */}
          <View className="flex-row justify-center mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '1.9s' }}>
            {testimonials.map((_, index) => (
              <TouchableOpacity 
                key={index}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({ x: index * 336, animated: true });
                  setActiveSlide(index);
                }}
                className={`w-2 h-2 rounded-full mx-1 ${activeSlide === index ? 'bg-amber-500' : 'bg-amber-200'}`}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
} 