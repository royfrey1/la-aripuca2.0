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
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex justify-center p-4 transition-all duration-500 ${isScrolled ? 'top-4 w-auto' : 'top-0 w-full max-w-7xl'}`}>
        <nav className={`
          flex justify-between items-center transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'gap-8 px-6 py-3 bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-500' 
            : 'gap-12 px-10 py-6 bg-transparent'
          }
        `}>
          <a  className="text-2xl font-black tracking-tighter text-white" href="#hero">
            LA <span id="logo" className="text-emerald-500">ARIPUCA</span>
          </a>
          
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