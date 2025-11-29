import React from 'react';
import { Play } from 'lucide-react';
import { Playlist, Album } from '../types';

interface CardProps {
  item: Playlist | Album | any;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="group bg-zinc-900/40 p-4 rounded-lg hover:bg-zinc-800 transition duration-300 ease-in-out cursor-pointer relative overflow-hidden">
      <div className="relative mb-4">
        <img 
          src={item.cover} 
          alt={item.title} 
          className={`w-full aspect-square object-cover shadow-black/50 shadow-lg ${item.artist === 'Sprinkest Mix' ? '' : 'rounded-md'}`}
          // Use rounded-full if it's an artist (simulated logic) usually, but keeping square for consistency here
        />
        <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
           <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black hover:scale-105 shadow-lg shadow-black/40">
            <Play fill="currentColor" size={20} className="ml-1" />
           </button>
        </div>
      </div>
      
      <h3 className="text-white font-bold truncate mb-1">{item.title}</h3>
      <p className="text-zinc-400 text-sm line-clamp-2">
        { 'description' in item ? item.description : `By ${item.artist}` }
      </p>
    </div>
  );
};

export default Card;