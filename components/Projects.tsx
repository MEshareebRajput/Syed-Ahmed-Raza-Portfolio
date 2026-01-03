
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <header className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="space-y-4">
            <span className="text-accent font-mono text-[10px] uppercase tracking-[0.6em]">Project.Matrix</span>
            <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter uppercase leading-none">
              Core <span className="text-accent">Builds.</span>
            </h2>
          </div>
          <button className="px-10 py-4 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-accent hover:text-dark transition-all duration-500 active:scale-95">
            Synchronise GitHub
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-dark p-10 md:p-16 flex flex-col hover:bg-surface/20 transition-all duration-700 overflow-hidden"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/0 group-hover:border-accent transition-all"></div>
              
              <div className="mb-12 relative aspect-video overflow-hidden border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>

              <div className="flex-grow space-y-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-3xl font-display font-bold text-white tracking-tight group-hover:text-accent transition-colors leading-tight">
                    {project.title}
                  </h4>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-2">v{index+1}.0.BUILD</span>
                </div>
                
                <p className="text-grayish text-lg font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center gap-10">
                {project.github && (
                  <a href={project.github} className="text-accent hover:text-white transition-all flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] group/btn">
                    <i className="fa-brands fa-github text-xl"></i> Source_Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-accent hover:text-white transition-all flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] group/btn">
                    <i className="fa-solid fa-satellite-dish text-xl"></i> Live_Sync
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
