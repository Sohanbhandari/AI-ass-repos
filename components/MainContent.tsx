import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Play } from 'lucide-react';
import { CATEGORIES } from '../constants';
import Card from './Card';

const MainContent: React.FC = () => {
  const [headerOpacity, setHeaderOpacity] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    // Calculate opacity based on scroll (0 to 1 over 200px)
    const newOpacity = Math.min(scrollTop / 150, 1);
    setHeaderOpacity(newOpacity);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div 
      className="flex-1 relative bg-zinc-950 h-full overflow-y-auto"
      onScroll={handleScroll}
    >
      {/* Top Header/Nav (Sticky) */}
      <header 
        className="sticky top-0 h-16 w-full z-40 flex items-center justify-between px-8 transition-colors duration-200"
        style={{ backgroundColor: `rgba(9, 9, 11, ${headerOpacity})` }}
      >
        <div className="flex gap-4">
          <button className="bg-black/70 rounded-full p-1 text-zinc-300 hover:text-white cursor-not-allowed">
            <ChevronLeft size={22} />
          </button>
          <button className="bg-black/70 rounded-full p-1 text-zinc-300 hover:text-white cursor-not-allowed">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex items-center gap-4">
            {headerOpacity > 0.8 && <span className="font-bold text-white transition-opacity duration-300">Sprinkest</span>}
            <button className="text-zinc-300 font-semibold hover:text-white text-sm hover:scale-105 transition">
                Sign up
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition">
                Log in
            </button>
        </div>
      </header>

      {/* Hero / Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-green-900/50 to-zinc-950 -z-10 pointer-events-none" />

      <main className="px-8 pt-4 pb-32">
        <h2 className="text-3xl font-bold mb-6">{getGreeting()}</h2>

        {/* Quick Access Grid (Hero-ish) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {[
            { title: 'Liked Songs', color: 'from-purple-700 to-blue-500' },
            { title: 'Neon Drive', img: 'https://picsum.photos/seed/synth/100/100' },
            { title: 'Deep Focus', img: 'https://picsum.photos/seed/focus/100/100' },
            { title: 'Discover Weekly', img: 'https://picsum.photos/seed/discover/100/100' },
            { title: 'On Repeat', img: 'https://picsum.photos/seed/repeat/100/100' },
            { title: 'Daily Mix 1', img: 'https://picsum.photos/seed/mix1/100/100' },
          ].map((item, i) => (
             <div key={i} className="flex items-center bg-zinc-900/60 hover:bg-zinc-800 transition rounded-md overflow-hidden cursor-pointer group shadow-sm">
                {item.color ? (
                    <div className={`h-20 w-20 flex items-center justify-center bg-gradient-to-br ${item.color}`}>
                        <span className="text-white text-2xl">♥</span>
                    </div>
                ) : (
                    <img src={item.img} alt={item.title} className="h-20 w-20 object-cover shadow-lg" />
                )}
                <span className="font-bold px-4 flex-1 truncate">{item.title}</span>
                
                {/* Play Button visible on hover */}
                <div className="mr-4 opacity-0 group-hover:opacity-100 transition shadow-xl rounded-full bg-green-500 p-3 flex items-center justify-center hover:scale-105">
                     <Play fill="black" size={20} className="text-black ml-1" />
                </div>
             </div>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {CATEGORIES.map((category) => (
            <section key={category.id}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold hover:underline cursor-pointer decoration-white">{category.title}</h2>
                <span className="text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-wider cursor-pointer hover:underline">Show all</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainContent;