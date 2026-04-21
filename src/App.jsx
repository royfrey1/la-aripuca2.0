import React from 'react';
import { aripukaData } from './constants/imagenes.js';
import NavBar from './constants/NavBar.jsx';
import Hero from './constants/Hero.jsx';
import Paisajes from './constants/paisajes.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans selection:bg-emerald-500/30">
      <NavBar />
      <Hero />
      <Paisajes />

      {/* SECCIÓN: ARTESANÍAS (Estilo Elegante) */}
      <section className="bg-slate-900/30 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-10 text-right">
            <h3 className="text-4xl font-black text-white italic tracking-tighter">ARTESANÍAS</h3>
            <p className="text-emerald-500 font-mono text-sm">/ cultura-guarani</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aripukaData.artesanias.map((a) => (
              <div key={a.id} className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-white/10 p-2">
                <img src={a.url} alt={a.item} className="w-full h-full object-cover rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: MADERAS (Estilo Técnico/Analista) */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-10">
          <h3 className="text-4xl font-black text-white italic tracking-tighter">LAS MADERAS</h3>
          <p className="text-emerald-500 font-mono text-sm">/ especies-recuperadas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aripukaData.maderas.map((m) => (
            <div key={m.id} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src={m.url} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-bold">{m.nombre}</h4>
                <p className="text-xs text-slate-500 uppercase">Rescatado</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    
  );
}

export default App;