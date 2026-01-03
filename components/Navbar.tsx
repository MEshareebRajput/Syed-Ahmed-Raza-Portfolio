
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 bg-dark/80 backdrop-blur-md border-b border-white/5' : 'py-10 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => scrollTo('home')}
        >
          <div className="relative w-8 h-8 flex items-center justify-center border border-accent/40 group-hover:border-accent transition-all duration-500">
            <span className="text-accent font-black text-xs">AR</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/20 border border-accent/40"></div>
          </div>
          <span className="text-sm font-display font-bold tracking-[0.2em] text-white uppercase group-hover:text-accent transition-colors">
            AHMED.RAZA
          </span>
        </div>

        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:text-accent group relative ${
                  currentSection === item.id ? 'text-accent' : 'text-grayish'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                  currentSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => scrollTo('contact')}
          className="hidden md:flex items-center gap-3 px-6 py-2 border border-white/10 hover:border-accent text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-500"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-fast"></span>
          Establish Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
