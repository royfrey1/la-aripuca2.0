import React from 'react';
import { aripukaData } from './constants/imagenes.js';
import NavBar from './constants/NavBar.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans selection:bg-emerald-500/30">
      <NavBar />
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">
            Misiones, Argentina
          </span>
          <h2 className="text-2xl md:text-8xl font-extrabold text-white leading-tight">
            Naturaleza <br /> 
            <span className="text-emerald-500">Monumental.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
            Un monumento construido con troncos rescatados que rinde homenaje a la selva misionera y protege la sabiduría guaraní.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-900/20">
              Explorar el lugar
            </button>
          </div>
        </div>

        {/* Hero Image Minimalista con desvanecimiento */}
        <div className="relative w-full h-full min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://portfolio-roy-proyectos.s3.sa-east-1.amazonaws.com/paisajes/paisaje-4.jpg" 
              alt="Monumento La Aripuka"
              className="w-full h-full object-cover opacity-100"
            />
          </div>
          {/* Capas de desvanecimiento (Fades) */}
          {/* Desvanecer hacia la izquierda (hacia el texto) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/10 to-transparent"></div>
          {/* Desvanecer hacia abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent"></div>
          {/* Desvanecer hacia arriba (opcional para suavizar el tope) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-transparent"></div>
        </div>
      </main>

      {/* SECCIÓN: PAISAJES (Estilo Hero Grid) */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-10">
          <h3 className="text-4xl font-black text-white italic tracking-tighter">EL ENTORNO</h3>
          <p className="text-emerald-500 font-mono text-sm">/ paisajes-nativos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aripukaData.paisajes.map((p) => (
            <div key={p.id} className="group relative h-80 rounded-2xl overflow-hidden border border-white/5">
              <img src={p.url} alt={p.desc} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

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