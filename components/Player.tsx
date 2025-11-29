import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Mic2, LayoutList, Volume2, Maximize2, Heart } from 'lucide-react';
import { Song } from '../types';

interface PlayerProps {
  currentSong: Song;
}

const Player: React.FC<PlayerProps> = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isLiked, setIsLiked] = useState(false);

  // Mock progress simulation
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= currentSong.duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong.duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="h-24 bg-black border-t border-zinc-800 px-4 flex items-center justify-between text-zinc-400 fixed bottom-0 w-full z-50">
      {/* Left: Song Info */}
      <div className="flex items-center gap-4 w-1/3 min-w-[200px]">
        <img 
          src={currentSong.cover} 
          alt={currentSong.album} 
          className="w-14 h-14 rounded-md shadow-lg"
        />
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="text-white text-sm font-semibold hover:underline cursor-pointer truncate">
            {currentSong.title}
          </div>
          <div className="text-xs text-zinc-400 hover:text-white hover:underline cursor-pointer truncate">
            {currentSong.artist}
          </div>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`ml-2 transition ${isLiked ? 'text-green-500' : 'text-zinc-400 hover:text-white'}`}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Center: Playback Controls */}
      <div className="flex flex-col items-center w-1/3 max-w-[600px]">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-zinc-400 hover:text-white transition">
            <Shuffle size={18} />
          </button>
          <button className="text-zinc-300 hover:text-white transition">
            <SkipBack size={24} fill="currentColor" />
          </button>
          <button 
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition active:scale-95"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
          </button>
          <button className="text-zinc-300 hover:text-white transition">
            <SkipForward size={24} fill="currentColor" />
          </button>
          <button className="text-zinc-400 hover:text-white transition">
            <Repeat size={18} />
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span>{formatTime(progress)}</span>
          <div className="relative h-1 bg-zinc-600 rounded-full flex-1 group cursor-pointer">
            <div 
              className="absolute top-0 left-0 h-full bg-white rounded-full group-hover:bg-green-500 transition-colors"
              style={{ width: `${(progress / currentSong.duration) * 100}%` }}
            ></div>
            <input 
              type="range" 
              min={0} 
              max={currentSong.duration} 
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
          <span>{formatTime(currentSong.duration)}</span>
        </div>
      </div>

      {/* Right: Volume & Extras */}
      <div className="flex items-center justify-end gap-3 w-1/3 min-w-[200px]">
        <button className="text-zinc-400 hover:text-white transition hidden lg:block">
          <Mic2 size={18} />
        </button>
        <button className="text-zinc-400 hover:text-white transition hidden lg:block">
          <LayoutList size={18} />
        </button>
        <div className="flex items-center gap-2 w-32 group">
          <Volume2 size={18} className="text-zinc-400 group-hover:text-white" />
          <div className="h-1 bg-zinc-600 rounded-full flex-1 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-white rounded-full group-hover:bg-green-500"
              style={{ width: `${volume}%` }}
            ></div>
             <input 
              type="range" 
              min={0} 
              max={100} 
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>
        <button className="text-zinc-400 hover:text-white transition hidden lg:block">
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default Player;