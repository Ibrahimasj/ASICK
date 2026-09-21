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
    const sectionIds = ['hero', 'pulse', 'roster', 'vault', 'sambat'];
    const sectionElements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if ('IntersectionObserver' in window && sectionElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0
        }
      );

      sectionElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      // Graceful fallback for older engines with throttled passive scroll
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sectionIds) {
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
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative bg-midnight-950 text-slate-100 min-h-screen selection:bg-cyan-400 selection:text-midnight-950 overflow-x-hidden">
      
      {/* Dynamic Background Ambient Light Orbs - Optimized layers for iOS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="ambient-glow-blue -top-20 -left-20 opacity-30"></div>
        <div className="ambient-glow-cyan top-1/3 -right-20 opacity-25"></div>
        <div className="ambient-glow-blue top-2/3 -left-20 opacity-25 hidden md:block"></div>
        <div className="ambient-glow-cyan bottom-10 right-1/4 opacity-20 hidden md:block"></div>
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
