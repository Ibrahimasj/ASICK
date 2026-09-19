import React from 'react';
import { Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import { classMetadata } from '../data/classData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow Effects */}
      <div className="ambient-glow-blue -top-32 -left-32 opacity-40"></div>
      <div className="ambient-glow-cyan top-20 -right-24 opacity-35"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating Circular ASICK Logo Emblem */}
        <div className="flex justify-center mb-6">
          <div className="relative group cursor-pointer">
            {/* Outer Glow Ring with Breathing Pulse */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 opacity-60 blur-md group-hover:opacity-100 animate-glow-pulse transition-opacity duration-500"></div>
            
            {/* Circular Frame Badge */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-4 ring-white/10 shadow-[0_0_35px_rgba(0,210,255,0.45)] bg-white p-3 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(0,210,255,0.65)]">
              <img 
                src="/logo-asick.png" 
                alt="ASICK Class Emblem" 
                className="w-full h-full object-contain rounded-full aspect-square filter drop-shadow-sm"
              />
            </div>
            
            {/* Floating Sparkle Pill */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-cyan-400/40 text-[10px] font-bold text-cyan-300 tracking-wider shadow-lg flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
              <span>EST. 2024</span>
            </div>
          </div>
        </div>

        {/* Catchy Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-cyan-400/30 text-xs sm:text-sm font-semibold text-cyan-300 mb-6 backdrop-blur-md shadow-glow-sm">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span>Official Space of ASICK ✦ Batch 2024</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="text-slate-300 font-normal">{classMetadata.classGroup}</span>
        </div>

        {/* Main Headline with White to Cyan-Blue Gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Prodi </span>
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Teknologi Rekayasa Perangkat Lunak,
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            Kelas A.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-normal">
          Ruang digital bersama kelas <strong className="text-white font-semibold">ASICK</strong>. Dari apel, praktikum lab coding, koordinasi proyek perangkat lunak, hingga tawa kebersamaan yang tak terlupakan.
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a 
            href="#pulse" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm sm:text-base shadow-glow-blue hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group border border-cyan-300/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Lihat Jadwal Kuliah</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a 
            href="#roster" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-card text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Kenalan Sama Anggota</span>
          </a>
        </div>

        {/* Quick Class Stats Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>21 Mahasiswa Aktif</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>Semester 5 Kelas A</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            <span>6 Matkul Wajib PSE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
