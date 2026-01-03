
import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 25,
        y: (clientY / innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 px-6"
    >
      {/* Structural Background */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-[0.03]"></div>
      
      {/* Atmospheric Depth */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[160px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Refined Content */}
        <div className="space-y-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-accent/20 bg-accent/5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <span className="text-accent font-mono text-[9px] uppercase tracking-[0.4em] font-bold">Protocol.Active_Node_01</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter text-white uppercase">
              Syed <br />
              <span className="text-accent relative inline-block">
                Ahmed
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent/50"></span>
              </span>
              <br /> Raza.
            </h1>
            
            <div className="pt-6 flex items-center gap-6">
              <div className="h-[1px] w-12 bg-white/20"></div>
              <p className="text-grayish font-mono text-[11px] uppercase tracking-[0.5em]">
                Data Scientist | Agentic AI Specialist
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/60 font-light max-w-xl leading-relaxed">
            Architecting <span className="text-white font-medium">autonomous intelligence</span>. 
            I transform complex data into high-performance neural ecosystems that power 
            the next generation of digital enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
            <button 
              onClick={() => scrollTo('projects')}
              className="group relative w-full sm:w-auto px-10 py-5 bg-accent text-black font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,141,146,0.4)] active:scale-95"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              View Repositories
            </button>
            
            <button 
              className="group w-full sm:w-auto px-10 py-5 border border-white/10 text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:border-accent transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Download Resume
              <i className="fa-solid fa-download text-[10px] opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all"></i>
            </button>
          </div>
        </div>

        {/* Right: Clean 3D Monolith Visual */}
        <div className="hidden lg:flex justify-center perspective-2000">
          <div 
            className="relative w-[450px] h-[600px] transition-transform duration-300 ease-out preserve-3d"
            style={{ 
              transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            }}
          >
            {/* Glass Monolith Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQE543pJeyJSJg/profile-displayphoto-shrink_800_800/B4DZUy8PWMGcAc-/0/1740316408591?e=1769040000&v=beta&t=1D6DKCOKad7AIiskrYsJidC5I5Ek1uUfdnkhd1MehA4')]"></div>
               
               {/* Internal Scanning Light */}
               <div className="absolute inset-0 bg-accent/5 animate-scanline opacity-30"></div>
               
               {/* Monolith Header Decoration */}
               <div className="p-8 flex justify-between items-center border-b border-white/5">
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                   <div className="w-2 h-2 rounded-full bg-white/10"></div>
                 </div>
                 <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Core_Interface_v3.0</span>
               </div>

               {/* Central Neural Pattern (Simplified) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                 <div className="absolute inset-0 border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fa-solid fa-microchip text-4xl text-accent/60 animate-pulse"></i>
                 </div>
               </div>

               {/* Data Stream Decoration */}
               <div className="absolute bottom-12 left-8 right-8 space-y-3">
                 {[40, 70, 55, 90].map((w, i) => (
                   <div key={i} className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-accent/30 animate-[pulse_3s_infinite]" 
                       style={{ width: `${w}%`, animationDelay: `${i * 0.5}s` }}
                     ></div>
                   </div>
                 ))}
               </div>
            </div>

            {/* External Floating Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-accent/20 translate-z-40"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-accent/20 translate-z-40"></div>
            
            {/* Coordinate Tags */}
            <div className="absolute top-20 -right-24 font-mono text-[8px] text-accent/40 uppercase tracking-[0.4em] [writing-mode:vertical-rl] translate-z-50">
               Data_Point_Observed: {Math.round(mousePos.x * 1.5)}
            </div>
          </div>
        </div>

      </div>

      {/* Clean Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollTo('about')}>
        <span className="text-[9px] font-mono text-white uppercase tracking-[0.8em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>

      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-40 {
          transform: translateZ(40px);
        }
        .translate-z-50 {
          transform: translateZ(80px);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
