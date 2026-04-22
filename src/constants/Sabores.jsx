import React from 'react';
import { aripukaData } from './imagenes.js';

const Sabores = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">SABORES LOCALES</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
        {aripukaData.sabores.map((item) => (
          <div 
            key={item.id}
            className={`relative group rounded-3xl overflow-hidden border border-white/10 ${item.clase}`}
          >
            <img 
              src={item.url} 
              alt={item.titulo}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay con información */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-1">{item.titulo}</h3>
              <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sabores;