import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoPulse from './components/BentoPulse';
import StudentRoster from './components/StudentRoster';
import MemoryVault from './components/MemoryVault';
import SambatWall from './components/SambatWall';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-midnight-950 text-slate-100 min-h-screen selection:bg-cyan-400 selection:text-midnight-950 overflow-x-clip">
      
      {/* Dynamic Background Ambient Light Orbs - Optimized static layers for iOS Safari */}
      <div className="absolute md:fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="ambient-glow-blue -top-20 -left-20 opacity-30"></div>
        <div className="ambient-glow-cyan top-1/3 -right-20 opacity-25"></div>
        <div className="ambient-glow-blue top-2/3 -left-20 opacity-25 hidden md:block"></div>
        <div className="ambient-glow-cyan bottom-10 right-1/4 opacity-20 hidden md:block"></div>
        {/* Subtle grid pattern overlay - Safe without WebKit mask-image memory leak */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      </div>

      {/* Floating Glass Navbar */}
      <Navbar />

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
