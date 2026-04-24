import React from "react";
import logo from '../assets/marca_aripuca.png';

export default function NavBar( { darkMode, setDarkMode } ) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
      // Cierra el menú al hacer scroll
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { href: "#paisajes", label: "Entorno" },
    { href: "#artesanias", label: "Artesanias" },
    { href: "#maderas", label: "Maderas recuperadas" },
    { href: "#sabores", label: "Sabores artesanales" },
    { href: "#contacto", label: "Contactanos" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

 return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      {/* ← Sacamos el div con bg-[#050810] que estaba acá */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex justify-center pt-0 p-4 transition-all duration-500 ${isScrolled ? 'top-4 w-auto' : 'top-0 w-full max-w-7xl'}`}>
          <nav className={`w-full transition-all duration-500 ease-in-out
            ${isScrolled
              ? 'px-9 py-3 bg-[#A66F5B] dark:bg-emerald-500/10 backdrop-blur-md rounded-2xl border border-[#260101] dark:border-emerald-500 bg-[#D8BF9F]/80 border-[#A69856]'
              : 'px-10 py-6 bg-transparent'
            }
          `}>
            <div className="flex justify-between items-center">
              <a href="#hero">
                <img src={logo} alt="La Aripuca" className="h-18 w-auto object-contain"/>
              </a>

              {/* Links desktop */}
              <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
                {navLinks.map(({ href, label }) => (
                  <a key={href} href={href} className="text-[#260101] hover:text-[#BF8450] dark:text-white dark:hover:text-emerald-400 transition-colors">
                    {label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-2xl border border-[#BF8450] hover:border-[#A69856]/50 hover:bg-[#BF8450]/10 dark:border-emerald-500/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10 transition-all"
                  aria-label="Cambiar modo de color"
                >
                  {darkMode ? (
                    // Dark mode activo → mostrá luna
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                    </svg>
                  ) : (
                    // Light mode activo → mostrá sol
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#BF8450]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden flex flex-col gap-[5px] p-4 focus:outline-none"
                  aria-label="Abrir menú"
                >
                  <span className={`block w-5 h-0.5 bg-emerald-500 transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-emerald-500 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-emerald-500 transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                </button>
              </div>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col border border-emerald-500/20 rounded-xl bg-[#D8BF9F]/95 dark:bg-[#050810]/95 backdrop-blur-md">
                {navLinks.map(({ href, label }, i) => (
                    <a
                    key={href}
                    href={href}
                    onClick={handleLinkClick}
                    className={`px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#260101] dark:text-white hover:text-[#BF8450] dark:hover:text-emerald-400 hover:bg-[#BF8450]/5 dark:hover:bg-emerald-500/5 transition-colors ${i < navLinks.length - 1 ? 'border-b border-[#A69856]/20 dark:border-emerald-500/10' : ''}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
    </header>
  );
 
}