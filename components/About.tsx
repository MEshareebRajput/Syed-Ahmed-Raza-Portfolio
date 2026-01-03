
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter uppercase leading-none">
              The <span className="text-accent">Architect.</span>
            </h2>
            <div className="h-1 w-24 bg-accent"></div>
            <p className="text-xs font-mono text-accent/60 uppercase tracking-[0.5em]">Identity Profile: Syed Ahmed Raza</p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-grayish text-lg font-light leading-relaxed">
                  A high-performance Data Scientist and AI/ML professional based in Pakistan. I specialise in architecting <span className="text-white font-medium">Agentic GenAI</span> systems that bridge the critical gap between raw information and autonomous intelligence.
                </p>
                <p className="text-grayish text-lg font-light leading-relaxed">
                  My work focuses on building robust neural workflows that aren't just predictive—they are perceptive. I believe AI should be an extension of human creativity, not just a tool for automation.
                </p>
              </div>
              <div className="relative border border-white/5 p-8 bg-surface/30">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/20">FILE_REF: 8821-X</div>
                <ul className="space-y-6">
                  {[
                    { label: "Designation", val: "Principal AI Strategist" },
                    { label: "Focus", val: "Agentic Workflows" },
                    { label: "Mentees", val: "500+ Specialists" },
                    { label: "Location", val: "Global Remote / PK" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-accent/40 uppercase tracking-widest">{item.label}</span>
                      <span className="text-white font-bold tracking-wider">{item.val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-white/5 p-10 group hover:border-accent/40 transition-all duration-500">
                <div className="text-4xl font-display font-bold text-white mb-2">500+</div>
                <div className="text-[10px] font-mono text-accent uppercase tracking-widest">Successful Mentees</div>
              </div>
              <div className="border border-white/5 p-10 group hover:border-accent/40 transition-all duration-500">
                <div className="text-4xl font-display font-bold text-white mb-2">12+</div>
                <div className="text-[10px] font-mono text-accent uppercase tracking-widest">Industry AI Deployments</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
