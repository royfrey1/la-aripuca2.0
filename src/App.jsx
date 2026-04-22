import React, { useRef } from 'react';
import { aripukaData } from './constants/imagenes.js';
import NavBar from './constants/NavBar.jsx';
import Hero from './constants/Hero.jsx';
import Paisajes from './constants/Paisajes.jsx';
import Artesanias from './constants/Artesanias.jsx';
import Maderas from './constants/Maderas.jsx'; 

function App() {
  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans selection:bg-emerald-500/30">
      <NavBar />
      <Hero />
      <Paisajes />
      <Artesanias />
      <Maderas />
    </div>
    
  );
}

export default App;