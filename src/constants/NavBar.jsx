import React from "react";

export default function NavBar() {

const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Si bajamos más de 70px, activamos el modo flotante
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050810] text-slate-300 font-sans selection:bg-emerald-500/30">
      {/* Navbar con estilo Mac-Dock */}
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 transition-all duration-500">
        <nav className={`
          flex justify-between items-center transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'w-[95%] md:w-[70%] max-w-5xl bg-slate-900/80 backdrop-blur-md border border-white/10 py-3 px-8 rounded-full shadow-2xl' 
            : 'w-full max-w-7xl bg-transparent py-6 px-8 rounded-none'
          }
        `}>
          <h1 className="text-2xl font-black tracking-tighter text-white">
            LA <span className="text-emerald-500">ARIPUCA</span>
          </h1>
          
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#paisajes" className="text-white hover:text-emerald-400 transition-colors">Entorno</a>
            <a href="#artesanias" className="text-white hover:text-emerald-400 transition-colors">Artesanias</a>
            <a href="#maderas" className="text-white hover:text-emerald-400 transition-colors">Maderas recuperadas</a>
            <a href="#sabores" className="text-white hover:text-emerald-400 transition-colors">Sabores artesanales</a>
            <a href="#contacto" className="text-white hover:text-emerald-400 transition-colors">Contactanos</a>  
          </div>
        </nav>
      </div>
    </div>
  );
}