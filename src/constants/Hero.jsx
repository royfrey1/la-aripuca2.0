import React from "react";

export default function Hero() {
    return (
        <main id="hero" className="pt-30 max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <span className="text-[#A69856] dark:text-emerald-500 font-bold tracking-widest uppercase text-sm">
                   Iguazu, Misiones, Argentina
                </span>
                <h2 className="text-3xl md:text-7xl font-extrabold leading-tight text-[#260101] dark:text-white">
                   Naturaleza <br /> 
                   <span className="text-[#BF8450] dark:text-emerald-500">Monumental.</span>
                </h2>
                <p className="text-xl leading-relaxed max-w-lg text-[#A66F5B] dark:text-slate-400">
                   Un monumento construido con troncos rescatados que rinde homenaje a la selva misionera y protege la sabiduría guaraní.
                </p>
                <div className="flex gap-4">
                   <button className="bg-[#BF8450] hover:bg-[#BF8450]/60 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:text-slate-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-[#4b2a1e] dark:shadow-[#268b6a]">
                     Explorar el lugar
                   </button>
                </div>
            </div>
       
                <div className="relative w-full h-full min-h-[80vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://portfolio-roy-proyectos.s3.sa-east-1.amazonaws.com/paisajes/paisaje-4.jpg" 
                            alt="Monumento La Aripuka"
                            className="w-full h-full object-cover opacity-100"
                        />
                    </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D8BF9F] via-transparent to-transparent dark:from-[#050810] dark:via-[#050810]/10 dark:to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#D8BF9F] via-transparent to-transparent dark:from-[#050810]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#D8BF9F] via-transparent to-transparent dark:from-[#050810]"></div>
               </div>
        </main>
    );
}