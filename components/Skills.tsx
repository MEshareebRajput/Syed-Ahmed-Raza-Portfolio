
import React, { useState, useRef, useEffect } from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlare({ 
      x: (x / rect.width) * 100, 
      y: (y / rect.height) * 100,
      opacity: 0.6
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-80 group perspective-1000"
    >
      <div 
        className="w-full h-full duration-200 ease-out transition-transform preserve-3d"
        style={{ 
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Main Card Body */}
        <div className="absolute inset-0 bg-surface/40 border border-white/5 group-hover:border-accent/30 rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-sm">
          
          {/* Holographic Glare Effect */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 141, 146, 0.15) 0%, transparent 60%)`,
              opacity: glare.opacity
            }}
          />

          {/* Background Icon Watermark */}
          <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
            <i className={`fa-solid ${skill.icon} text-[180px] text-accent translate-z-10`}></i>
          </div>

          <div className="relative z-10 space-y-4 translate-z-20">
            <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl mb-6">
              <i className={`fa-solid ${skill.icon}`}></i>
            </div>
            
            <h4 className="text-xl font-bold text-white uppercase tracking-wider">{skill.name}</h4>
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.3em]">Neural Capacity Optimized</p>
          </div>

          <div className="relative z-10 translate-z-30">
            <div className="flex justify-between items-end mb-3">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Mastery Level</span>
              <span className="text-3xl font-bold text-white tracking-tighter">{skill.level}%</span>
            </div>
            
            {/* High-End 3D-Look Progress Bar */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[scanline_2s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Floating Corner Accents */}
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-accent/40 rounded-tr-lg translate-z-40" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-accent/40 rounded-bl-lg translate-z-40" />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-dark border-y border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span className="text-accent font-mono text-[10px] uppercase tracking-[0.6em]">System.Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter uppercase leading-none">
              Technical <span className="text-accent">Stack.</span>
            </h2>
          </div>
          <p className="text-grayish text-lg font-light max-w-sm border-l border-white/10 pl-8">
            Engineered for precision in high-performance neural modeling and automated data synthesis.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-10 {
          transform: translateZ(10px);
        }
        .translate-z-20 {
          transform: translateZ(20px);
        }
        .translate-z-30 {
          transform: translateZ(30px);
        }
        .translate-z-40 {
          transform: translateZ(40px);
        }
      `}</style>
    </section>
  );
};

export default Skills;
