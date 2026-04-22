import React, {useRef} from "react";
import { aripukaData } from './imagenes.js';

export default function Artesanias() {

    const carouselRef = useRef(null);

    const scroll = (scrollOffset) => {
        carouselRef.current.scrollLeft += scrollOffset;
    };
    return (   
            
        <section className="bg-slate-900/30 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">Artesanías</h3>
                        <p className="text-emerald-500 font-mono text-sm">/ cultura-guarani</p>
                    </div>
                    
                    {/* Botones de Navegación (Estilo Minimalista) */}
                    <div className="flex gap-4">
                        <button 
                            onClick={() => scroll(-300)}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500 hover:text-slate-900 transition-all"
                            >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => scroll(300)}
                            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500 hover:text-slate-900 transition-all"
                            >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Contenedor del Carrusel */}
                <div 
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                    style={{ scrollBehavior: 'smooth' }}
                    >
                    {aripukaData.artesanias.map((a) => (
                    <div 
                        key={a.id} 
                        className="min-w-[280px] md:min-w-[350px] aspect-[4/5] snap-center group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-800"
                        >
                        <img 
                            src={a.url} 
                            alt={a.item} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        {/* Overlay con nombre del item */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                            <span className="text-white font-bold text-xl">{a.item}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
      </section>    
    )
}
