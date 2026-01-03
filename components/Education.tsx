
import React from 'react';
import { EDUCATIONS } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-dark">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-8">
             <div className="h-1 w-20 bg-accent"></div>
             <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter uppercase leading-none">
              Academic <span className="text-accent">Foundation.</span>
            </h2>
            <p className="text-grayish text-xl font-light leading-relaxed">
              Synthesising computational theory with high-impact applied machine learning methodologies.
            </p>
          </div>

          <div className="lg:col-span-7 border-l border-white/5 pl-10 md:pl-20 space-y-24">
            {EDUCATIONS.map((edu, index) => (
              <div key={index} className="group relative space-y-6">
                <div className="absolute -left-[45px] md:-left-[85px] top-2 w-4 h-4 bg-dark border-2 border-accent transition-all group-hover:rotate-45"></div>
                
                <div className="space-y-2">
                  <span className="text-accent font-mono text-[10px] uppercase tracking-widest">{edu.period}</span>
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.4em]">
                    {edu.institution}
                  </p>
                </div>
                
                <p className="text-grayish text-lg font-light leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
