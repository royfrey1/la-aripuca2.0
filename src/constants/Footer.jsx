import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © 2026 La Aripuca 2.0 - Proyecto desarrollado por <span className="text-white font-medium">Roy Frey</span>
        </p>
        
        <div className="flex gap-8 text-slate-400 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};