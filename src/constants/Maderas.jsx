import React from "react";
import { aripukaData } from './imagenes.js';




export default function Maderas() {
    const [selectedImage, setSelectedImage] = React.useState(null);


    return (
            
    
        <section id="maderas" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-18">
            <div className="mb-10">
                <h3 className="text-4xl font-black text-white italic tracking-tighter">LAS MADERAS</h3>
                <p className="text-emerald-500 font-mono text-sm">/ especies-recuperadas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aripukaData.maderas.map((m) => (
                <div 
                    key={m.id} 
                    onClick={() => setSelectedImage(m.url)} // Al hacer click, se guarda la URL de la imagen seleccionada
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer hover:scale-[1.02]"
                >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={m.url} className="w-full h-full object-cover" alt={m.nombre} />
                    </div>
                    <div>
                    <h4 className="text-white font-bold">{m.nombre}</h4>
                    <p className="text-xs text-slate-500 uppercase">Click para ampliar</p>
                    </div>
                </div>
                ))}

                
                {selectedImage && (
                <div 
                    className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)} // Cerrar al hacer click afuera
                >
                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                    <img 
                        src={selectedImage} 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300" 
                        alt="Madera ampliada"
                    />
                    {/* Botón de cerrar */}
                    <button 
                        className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}        