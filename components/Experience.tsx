
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-dark relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <header className="mb-32 text-center md:text-left">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="text-accent font-mono text-[10px] uppercase tracking-[0.5em]">Event.Sequence</span>
            <div className="h-[1px] w-20 bg-accent/40"></div>
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter uppercase leading-none">
            Career <span className="text-accent">Log.</span>
          </h2>
        </header>

        <div className="space-y-32">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 group">
              <div className="lg:col-span-4 flex flex-col justify-between py-2 border-l-4 border-accent/20 group-hover:border-accent transition-all duration-500 pl-10">
                <div className="space-y-4">
                  <span className="text-accent font-mono text-[10px] uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight group-hover:text-accent transition-colors leading-tight">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mt-8">{exp.company}</p>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-6">
                  {exp.description.map((item, i) => (
                    <p key={i} className="text-grayish text-lg font-light leading-relaxed flex gap-6 group-hover:text-white/90 transition-colors">
                      <span className="text-accent mt-2 shrink-0"><i className="fa-solid fa-code-branch text-xs"></i></span>
                      {item}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-6">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 border border-white/5 bg-surface/20 text-white/30 text-[9px] font-bold uppercase tracking-widest hover:border-accent/40 hover:text-accent transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
