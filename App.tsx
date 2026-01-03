
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-black selection:bg-accent/40 selection:text-white overflow-x-hidden font-sans">
      <Navbar currentSection={currentSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <AIChat />

      {/* Premium background visual structure */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated ambient glows using Teal accent */}
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-accent/[0.05] rounded-full blur-[180px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/[0.04] rounded-full blur-[150px] animate-pulse-glow [animation-delay:2s]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}></div>
      </div>
    </div>
  );
};

export default App;
