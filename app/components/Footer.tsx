import { View, Text, TouchableOpacity } from 'react-native';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <View className="w-full bg-stone-950 relative overflow-hidden">
      {/* Sacred geometry background pattern with improved layout */}
      <View className="absolute inset-0 opacity-5 pointer-events-none">
        <View className="absolute inset-0 bg-sacred-altar opacity-5" />
        <View className="absolute inset-0 noise-overlay" />
        <View className="flex flex-wrap">
          {[...Array(30)].map((_, i) => (
            <View 
              key={i} 
              className="w-20 h-20 flex items-center justify-center"
              style={{ 
                transform: [`rotate(${i * 12}deg)`], 
                opacity: 0.2 + (i % 3) * 0.1 
              }}
            >
              <Text className="text-amber-400 text-2xl animate-pulse-slow" style={{ animationDelay: `${i * 200}ms` }}>
                {i % 3 === 0 ? '⊛' : i % 3 === 1 ? '⊹' : '⊝'}
              </Text>
            </View>
          ))}
        </View>
      </View>
      
      {/* Enhanced golden line separator with glow */}
      <View className="w-full relative">
        <View className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm" />
        <View className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/80 to-transparent" />
      </View>
      
      <View className="max-w-6xl mx-auto px-4 py-24">
        {/* Top section with navigation and contact */}
        <View className="flex-row flex-wrap justify-between mb-20">
          {/* Logo and brand section with animation */}
          <View className="mb-10 md:mb-0 max-w-xs opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Text className="text-amber-400 font-serif text-3xl mb-4 animate-float">Astral</Text>
            <Text className="text-amber-50/80 mb-6">A sacred journey to your authentic self through spiritually-informed coaching and healing experiences.</Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors sacred-glow">
                <Text className="text-amber-400">✧</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors sacred-glow">
                <Text className="text-amber-400">♫</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors sacred-glow">
                <Text className="text-amber-400">❋</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Navigation columns with staggered animation */}
          <View className="mb-10 md:mb-0 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Text className="text-amber-400 font-medium text-lg mb-5 font-serif">Path</Text>
            <View className="space-y-4">
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">About</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Mirror Path</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Podcast</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Client Reflections</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="mb-10 md:mb-0 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Text className="text-amber-400 font-medium text-lg mb-5 font-serif">Offerings</Text>
            <View className="space-y-4">
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">1:1 Sessions</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Workshops</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Group Journeys</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Free Resources</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View className="mb-10 md:mb-0 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Text className="text-amber-400 font-medium text-lg mb-5 font-serif">Connect</Text>
            <View className="space-y-4">
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Book a Session</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">hello@astral.com</Text>
              </TouchableOpacity>
              <TouchableOpacity className="sacred-hover">
                <Text className="text-stone-300 hover:text-amber-300 transition-colors">Newsletter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Enhanced Newsletter signup with sacred elements */}
        <View className="w-full bg-stone-900/50 rounded-xl p-10 mb-20 border border-stone-800/80 glassmorphism-dark relative overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: '1s' }}>
          {/* Sacred glow border effect */}
          <View className="absolute inset-0 -m-1 rounded-xl border border-amber-700/20 blur-sm" />
          <View className="absolute inset-0 -m-0.5 rounded-xl border border-amber-600/10 blur-md" />
          
          {/* Subtle animated background glow */}
          <View className="absolute inset-0 opacity-10">
            <View className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl animate-pulse-slow" 
              style={{ animationDuration: '8s' }}
            />
            <View className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl animate-pulse-slow"
              style={{ animationDuration: '12s', animationDelay: '2s' }}
            />
          </View>
          
          <View className="flex-row flex-wrap items-center justify-between">
            <View className="max-w-md mb-8 md:mb-0">
              <Text className="text-amber-400 font-medium text-2xl mb-3 font-serif">Sacred Newsletter</Text>
              <Text className="text-stone-300 mb-2">Receive meditation prompts, spiritual teachings, and event notifications</Text>
              <Text className="text-amber-500/70 text-sm italic">Join our community of seekers and healers</Text>
            </View>
            
            <View className="flex-col space-y-4 md:flex-row md:space-y-0">
              <View className="h-14 bg-stone-800/80 rounded-md md:rounded-r-none px-4 py-2 border border-stone-700 md:w-64 flex items-center">
                <Text className="text-stone-400">youremail@example.com</Text>
              </View>
              <TouchableOpacity className="h-14 bg-gradient-to-r from-amber-700 to-amber-600 rounded-md md:rounded-l-none px-6 flex items-center justify-center sacred-glow">
                <Text className="text-white font-medium">Subscribe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        {/* Sacred Divider */}
        <View className="w-full flex items-center justify-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <View className="h-px w-24 bg-amber-700/30" />
          <Text className="text-amber-600/60 mx-4 text-lg">✧</Text>
          <View className="h-px w-24 bg-amber-700/30" />
        </View>
        
        {/* Bottom section with copyright, terms, etc */}
        <View className="flex-row flex-wrap items-center justify-between pt-8 border-t border-stone-800/50 opacity-0 animate-fade-up" style={{ animationDelay: '1.4s' }}>
          <Text className="text-stone-500 mb-6 md:mb-0">© {currentYear} Astral. All rights reserved.</Text>
          
          <View className="flex-row space-x-8">
            <TouchableOpacity className="sacred-hover">
              <Text className="text-stone-500 hover:text-amber-400 transition-colors">Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity className="sacred-hover">
              <Text className="text-stone-500 hover:text-amber-400 transition-colors">Terms</Text>
            </TouchableOpacity>
            <TouchableOpacity className="sacred-hover">
              <Text className="text-stone-500 hover:text-amber-400 transition-colors">Accessibility</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Enhanced sacred bottom decoration with animation */}
      <View className="w-full flex items-center justify-center py-2 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900">
        <View className="flex-row space-x-4 animate-pulse-slow">
          {['✧', '✢', '✧', '✢', '✧'].map((symbol, i) => (
            <Text 
              key={i} 
              className="text-amber-500/30 text-xs tracking-widest animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {symbol}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
} 