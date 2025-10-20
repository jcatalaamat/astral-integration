import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc?: string;
  duration?: string;
}

export default function AudioPlayer({ audioSrc = '', duration = '0:30' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="inline-flex items-center gap-4 bg-cosmic-900/30 backdrop-blur-xl border border-sacred-moon/20 rounded-full px-6 py-4 hover:bg-cosmic-900/40 transition-all group cursor-pointer">
      <button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-sacred-gold flex items-center justify-center hover:bg-sacred-glow transition-all group-hover:scale-105"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-cosmic-900 fill-cosmic-900" />
        ) : (
          <Play className="w-5 h-5 text-cosmic-900 fill-cosmic-900 ml-0.5" />
        )}
      </button>

      <div className="flex flex-col">
        <span className="text-sacred-moon font-medium">Listen to my welcome message</span>
        <span className="text-sacred-moon/60 text-sm">{duration}</span>
      </div>

      {audioSrc && <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />}
    </div>
  );
}
