import React from "react";


export default function Paisajes() {

    return (        
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
    );
};
