import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import MainContent from './components/MainContent';
import { MOCK_CURRENT_SONG } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden font-sans">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Player currentSong={MOCK_CURRENT_SONG} />
    </div>
  );
};

export default App;