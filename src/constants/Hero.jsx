import React from "react";

export default function Hero() {
    return (
        <main className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">
                   Iguazu, Misiones, Argentina
                </span>
                <h2 className="text-3xl md:text-7xl font-extrabold text-white leading-tight">
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
    );
}