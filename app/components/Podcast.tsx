import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function Podcast() {
  return (
    <View className="w-full py-28 px-4 bg-white relative overflow-hidden parallax-container">
      {/* Decorative background elements */}
      <View className="absolute inset-0 bg-gradient-to-r from-amber-50 to-white parallax-bg" />
      <View className="absolute inset-0 texture-paper" />
      <View className="absolute inset-0 noise-overlay" />
      
      <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl parallax-bg" style={{ transform: 'translateZ(-5px) scale(1.5)' }} />
      
      <View className="absolute inset-0 opacity-[0.03] parallax-bg" style={{ transform: 'translateZ(-4px) scale(1.4)' }}>
        <View className="w-full h-full flex items-center justify-center">
          <Text className="text-amber-900 text-[400px]">♪</Text>
        </View>
      </View>
      
      <View className="max-w-4xl mx-auto flex items-center relative z-10 parallax-content">
        <Text className="text-center text-amber-700 italic mb-2 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Close your eyes. Breathe. Listen.
        </Text>
        
        <Text className="text-3xl font-bold text-center text-stone-800 mb-1 font-serif opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>The Mirror Path Podcast</Text>
        <Text className="text-xl text-amber-700 italic text-center mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>Sacred Voice Drops</Text>
        
        <Text className="text-center text-stone-600 mb-4 max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.9s' }}>
          Tune into sacred guidance between sessions
        </Text>
        
        <Text className="text-center text-amber-700 italic mb-10 max-w-xl opacity-0 animate-fade-up" style={{ animationDelay: '1.1s' }}>
          Your soul knows the sound of truth. These are reminders from beyond the noise.
        </Text>
        
        {/* Podcast Player Mockup */}
        <View className="w-full bg-stone-50/90 rounded-xl p-8 mb-10 border border-stone-200 shadow-sm relative overflow-hidden glassmorphism opacity-0 animate-fade-up" style={{ animationDelay: '1.3s' }}>
          {/* Audio wave background - animated visualization */}
          <View className="absolute inset-0 opacity-10">
            <View className="flex-row h-full items-end justify-around">
              {[...Array(32)].map((_, i) => (
                <View 
                  key={i} 
                  className="bg-gradient-to-t from-amber-700 to-amber-500 w-1.5 rounded-full animate-pulse-slow"
                  style={{ 
                    height: `${20 + Math.sin(i * 0.7) * 15 + Math.cos(i * 0.3) * 10 + Math.random() * 20}%`,
                    animationDelay: `${i * 40}ms`,
                    animationDuration: `${800 + Math.random() * 700}ms`
                  }}
                />
              ))}
            </View>
          </View>
          
          <View className="flex-row items-center mb-8">
            <View className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-300 rounded-md mr-5 flex items-center justify-center shadow-sm">
              <Text className="text-3xl text-amber-800 animate-pulse-slow">🎧</Text>
            </View>
            <View>
              <Text className="font-medium text-lg text-stone-800 mb-1">Latest Episode</Text>
              <Text className="text-stone-700 font-bold font-serif">Embodying Your Highest Self</Text>
            </View>
          </View>
          
          {/* Live waveform animation player */}
          <View className="mb-8 bg-gradient-to-br from-amber-50 to-white rounded-lg p-5 border border-amber-100 relative overflow-hidden">
            <View className="flex-row h-16 items-center">
              {[...Array(50)].map((_, i) => {
                const amplitude = Math.min(0.2 + Math.sin(i * 0.4) * 0.2 + Math.cos(i * 0.5) * 0.3 + Math.sin(i * 0.7) * 0.2, 1);
                return (
                  <View 
                    key={i} 
                    className="bg-gradient-to-t from-amber-600 to-amber-400 mx-0.5 rounded-full animate-pulse-slow"
                    style={{ 
                      height: `${amplitude * 100}%`,
                      width: 3,
                      animationDelay: `${i * 20}ms`,
                      animationDuration: `${800 + Math.random() * 500}ms`
                    }}
                  />
                );
              })}

              {/* Playhead */}
              <View className="absolute left-[30%] top-0 bottom-0 w-px bg-amber-500/50 animate-pulse-slow" />
            </View>

            <View className="flex-row items-center justify-between mt-3">
              <Text className="text-xs text-stone-500">0:58</Text>
              <Text className="text-xs text-stone-500">3:24</Text>
            </View>
          </View>
          
          {/* Auto-playing teaser section with muted by default */}
          <View className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-5 mb-8 border border-amber-100 relative overflow-hidden">
            <View className="absolute top-0 right-0 mt-1 mr-1">
              <Text className="text-xs text-amber-700 px-2 py-0.5 bg-amber-100 rounded-full">
                Autoplay Muted
              </Text>
            </View>
            
            <Text className="text-stone-700 text-sm mb-4 leading-relaxed italic font-serif">
              "In this episode, we explore the subtle difference between who you think you are and who you truly are. I guide you through a meditation to connect with your essential nature..."
            </Text>
            
            <View className="flex-row items-center">
              <TouchableOpacity className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 shadow-sm sacred-glow">
                <Text className="text-white">🔊</Text>
              </TouchableOpacity>
              <Text className="text-amber-700 text-xs">Unmute 15-second preview</Text>
            </View>
          </View>
          
          {/* Player Controls */}
          <View className="flex-row items-center justify-between">
            <View className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 items-center justify-center shadow-sm flex sacred-glow">
              <Text className="text-white text-xl">▶</Text>
            </View>
            
            {/* Progress Bar */}
            <View className="flex-1 h-2 mx-4 bg-stone-200 rounded-full overflow-hidden">
              <View className="bg-gradient-to-r from-amber-600 to-amber-500 h-full w-1/3 animate-shimmer" />
            </View>
            
            <Text className="text-stone-500">12:34</Text>
          </View>
        </View>
        
        <TouchableOpacity className="bg-gradient-to-r from-stone-800 to-stone-700 px-10 py-4 rounded-lg flex-row items-center hover:shadow-lg hover:shadow-stone-400/10 transition-all duration-300 shadow-md sacred-glow opacity-0 animate-fade-up" style={{ animationDelay: '1.5s' }}>
          <Text className="text-white mr-3 font-medium">Listen on Spotify</Text>
          <Text className="text-white text-lg">🎧</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 