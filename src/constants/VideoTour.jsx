import React from 'react';

export const VideoTour = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-5xl font-black text-[#260101] dark:text-white tracking-tighter italic">VIDEO TOUR</h2>
        <p className="text-[#260101]/60 dark:text-emerald-500 font-mono text-large mt-2">/ Siente la experiencia</p>
      </div>

      <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/LSsZJOl1Fbw?si=vW-0R9lX1p-H8L-N"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};