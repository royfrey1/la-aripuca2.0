import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-12 border-t border-[#260101]/20 bg-[#BF8450]/30 dark:text-white dark:bg-[#050810]/20 dark:border-white/10 text-center">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#260101]/60 dark:text-emerald-500 text-sm">
          © 2026 La Aripuca 2.0 - Proyecto desarrollado por <span className="text-[#260101] dark:text-white font-medium">Roy Frey</span>
        </p>
        
        <div className="flex gap-8 text-[#260101] text-sm">
          <a href="#" className="hover:text-[#260101]/50 dark:hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#260101]/50 dark:hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-[#260101]/50 dark:hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};