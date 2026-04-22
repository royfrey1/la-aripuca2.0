import React, { useState } from 'react';
import { aripukaData } from './constants/imagenes.js';
import NavBar from './constants/NavBar.jsx';
import Hero from './constants/Hero.jsx';
import Paisajes from './constants/Paisajes.jsx';
import Artesanias from './constants/Artesanias.jsx';
import Maderas from './constants/Maderas.jsx'; 
import Sabores from './constants/Sabores.jsx';
import { VideoTour } from './constants/VideoTour.jsx';
import { Footer }  from './constants/Footer.jsx';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans selection:bg-emerald-500/30">
      <NavBar />
      <Hero />
      <Paisajes onImageClick={setSelectedImage} />
      <Artesanias />
      <Maderas onImageClick={setSelectedImage} />
      <Sabores />
      <VideoTour />
      <Footer />

      {selectedImage && (
        <Modal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      <a
        href="https://wa.me/+543757554313" // Reemplaza con tu número real
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center bg-[#25D366] text-white p-4 rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out group hover:rounded-2xl max-w-[60px] hover:max-w-[320px] overflow-hidden"
      >
        {/* Icono de WhatsApp (SVG para que no pierda calidad) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="min-w-[24px]"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.504.893 3.12 1.365 4.77 1.367 5.233 0 9.49-4.258 9.493-9.492.002-2.537-.987-4.922-2.787-6.722s-4.184-2.788-6.723-2.79c-5.233 0-9.491 4.258-9.493 9.491-.002 1.741.472 3.439 1.371 4.937l-1.022 3.735 3.827-.999zm11.411-6.536c-.312-.156-1.844-.91-2.128-1.012-.283-.102-.489-.156-.694.156-.205.312-.796 1.012-.976 1.216-.18.204-.36.23-.672.074-.312-.156-1.317-.485-2.507-1.547-.927-.827-1.551-1.849-1.733-2.161-.182-.312-.019-.481.136-.636.14-.139.312-.364.469-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.694-1.678-.951-2.298-.25-.6-.523-.518-.717-.528-.185-.01-.397-.012-.609-.012-.212 0-.558.079-.849.39-.291.312-1.112 1.091-1.112 2.662 0 1.571 1.144 3.09 1.302 3.3.158.21 2.25 3.435 5.452 4.819.761.329 1.355.525 1.819.672.764.243 1.459.209 2.009.127.613-.091 1.844-.754 2.103-1.443.257-.689.257-1.277.18-1.403-.078-.126-.283-.205-.594-.361z"/>
        </svg>

        {/* Texto que aparece al estirarse */}
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold">
          Contactanos por WhatsApp
        </span>
      </a>

    </div>
    
      
  );
}

export default App;