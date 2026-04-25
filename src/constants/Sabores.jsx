import React from 'react';
import { aripukaData } from './imagenes.js';
import SaborCard from './SaborCard';

const Sabores = () => {
  return (
    <section id="sabores" className="scroll-mt-18 max-w-7xl mx-auto px-8 py-24">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-[#260101] dark:text-white tracking-tighter italic">SABORES LOCALES</h2>
        <p className="text-[#260101]/60 dark:text-emerald-500 font-mono text-large">/ Experiencias gastronomicas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
        {aripukaData.sabores.map((item) => (
          <SaborCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Sabores;