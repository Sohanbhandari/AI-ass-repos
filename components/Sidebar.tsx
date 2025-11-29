import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Download } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-black flex-col h-full hidden md:flex flex-shrink-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-extrabold text-sm">S</span>
          Sprinkest
        </h1>
      </div>

      <nav className="px-3 space-y-2">
        <a href="#" className="flex items-center gap-4 px-4 py-3 text-white bg-zinc-900 rounded-md transition hover:text-white group">
          <Home className="w-6 h-6" />
          <span className="font-semibold">Home</span>
        </a>
        <a href="#" className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-white transition group">
          <Search className="w-6 h-6 group-hover:text-white" />
          <span className="font-semibold">Search</span>
        </a>
        <a href="#" className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-white transition group">
          <Library className="w-6 h-6 group-hover:text-white" />
          <span className="font-semibold">Your Library</span>
        </a>
      </nav>

      <div className="mt-8 px-3 space-y-2">
        <button className="w-full flex items-center gap-4 px-4 py-2 text-zinc-400 hover:text-white transition group">
          <div className="w-6 h-6 bg-zinc-200 text-black flex items-center justify-center rounded-sm group-hover:bg-white">
            <PlusSquare size={16} fill="currentColor" />
          </div>
          <span className="font-semibold">Create Playlist</span>
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-2 text-zinc-400 hover:text-white transition group">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-700 to-green-300 flex items-center justify-center rounded-sm opacity-70 group-hover:opacity-100">
            <Heart size={14} fill="white" className="text-white" />
          </div>
          <span className="font-semibold">Liked Songs</span>
        </button>
      </div>

      <div className="mt-4 px-6 border-t border-zinc-900 pt-4 flex-1 overflow-y-auto no-scrollbar">
        <ul className="space-y-3">
          {['Chill Vibes 2024', 'Coding Mode', 'Gym Hard', 'Top 50 - Global', 'Discovery Weekly', 'On Repeat', '80s Retro', 'Podcast Favorites', 'Road Trip', 'Sleep', 'Party Mix'].map((playlist, idx) => (
            <li key={idx} className="text-zinc-400 hover:text-white text-sm cursor-pointer truncate transition">
              {playlist}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4">
        <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-semibold">
           <Download size={18} />
           Install App
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;