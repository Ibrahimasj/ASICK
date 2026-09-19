import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoPulse from './components/BentoPulse';
import StudentRoster from './components/StudentRoster';
import MemoryVault from './components/MemoryVault';
import SambatWall from './components/SambatWall';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pulse', 'roster', 'vault', 'sambat'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-midnight-950 text-slate-100 min-h-screen selection:bg-cyan-400 selection:text-midnight-950 overflow-x-hidden">
      
      {/* Dynamic Background Ambient Light Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="ambient-glow-blue -top-20 -left-20 opacity-30"></div>
        <div className="ambient-glow-cyan top-1/3 -right-20 opacity-25"></div>
        <div className="ambient-glow-blue top-2/3 -left-20 opacity-25"></div>
        <div className="ambient-glow-cyan bottom-10 right-1/4 opacity-20"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <BentoPulse />
        <StudentRoster />
        <MemoryVault />
        <SambatWall />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
