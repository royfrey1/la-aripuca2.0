import React, { useState, useRef } from 'react';

const SaborCard = ({ item }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculamos la posición del mouse relativa al centro de la card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Generamos la rotación (ajusta el número 15 para más o menos inclinación)
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className={`relative group rounded-3xl overflow-hidden border border-white/10 ${item.clase} cursor-pointer`}
    >
      <img 
        src={item.url} 
        alt={item.titulo}
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end pointer-events-none">
        <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-z-10 transition-transform">
          {item.titulo}
        </h3>
        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          {item.descripcion}
        </p>
      </div>
    </div>
  );
};

export default SaborCard;