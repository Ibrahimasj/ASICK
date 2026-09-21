import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Sparkles, 
  BookOpen, 
  Coffee,
  Flag,
  Layers,
  Compass,
  Monitor
} from 'lucide-react';
import { scheduleData, classMetadata } from '../data/classData';
import MusicPlayer from './MusicPlayer';

export default function BentoPulse() {
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  const [selectedDay, setSelectedDay] = useState('Senin');

  useEffect(() => {
    // Auto detect current weekday in Indonesia
    const dayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday ...
    const dayMap = { 1: 'Senin', 2: 'Selasa', 3: 'Rabu', 4: 'Kamis', 5: 'Jumat' };
    if (dayMap[dayIndex]) {
      setSelectedDay(dayMap[dayIndex]);
    }
  }, []);

  const currentClasses = scheduleData[selectedDay] || [];

  return (
    <section id="pulse" className="py-20 relative">
      {/* Background radial glow */}
      <div className="ambient-glow-cyan top-1/2 -left-40 opacity-20 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-semibold text-cyan-300 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TIMETABLE & CAMPUS PULSE ✦ {classMetadata.classGroup}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Jadwal Kuliah <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Semester 5 Kelas A</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0">
            Daftar perkuliahan harian, apel pagi rutin, dan lokasi ruang/lab perkuliahan resmi angkatan ASICK.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Jadwal Kuliah Hari Ini (Span 7) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div>
              {/* Card Top: Title & Day Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border border-cyan-400/30 text-cyan-300">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      Jadwal Kuliah Mingguan
                    </h3>
                    <p className="text-xs text-slate-400">Pilih hari untuk melihat matkul, dosen, dan ruang/lab</p>
                  </div>
                </div>

                {/* Day Selector Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {days.map((day) => {
                    const isSelected = selectedDay === day;
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                          isSelected
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm'
                            : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-white/5'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Class Schedule Items List */}
              <div className="mt-5 space-y-3">
                {currentClasses.length > 0 ? (
                  currentClasses.map((item) => {
                    if (item.isApel) {
                      return (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between gap-3 text-rose-300"
                        >
                          <div className="flex items-center gap-2.5">
                            <Flag className="w-4 h-4 text-rose-400 animate-pulse" />
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white">{item.name}</h4>
                              <p className="text-[11px] text-rose-300/80">{item.room} • {item.lecturer}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-200 border border-rose-500/30">
                              {item.time}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-600 text-white">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      );
                    }

                    if (item.isBreak) {
                      return (
                        <div
                          key={item.id}
                          className="px-4 py-2.5 rounded-xl bg-slate-900/40 border border-white/5 flex items-center justify-between text-xs text-slate-400"
                        >
                          <div className="flex items-center gap-2">
                            <Coffee className="w-4 h-4 text-amber-400" />
                            <span className="font-semibold text-slate-300">{item.name}</span>
                          </div>
                          <span className="font-mono text-cyan-400/90">{item.time}</span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.id}
                        className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-400/30 transition-all duration-200 group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              {item.code}
                            </span>
                            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-cyan-300 border border-cyan-500/20">
                            {item.badge}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400 mt-2.5 pt-2 border-t border-white/5">
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                            <span className="truncate">Dos: {item.lecturer}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span className="truncate font-semibold text-slate-300">{item.room}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-10 text-slate-500">
                    <p>Tidak ada perkuliahan pada hari ini. Waktunya istirahat atau ngoding santai!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom summary bar */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                {currentClasses.filter(c => !c.isBreak).length} Agenda Terjadwal di Hari {selectedDay}
              </span>
              <span className="text-cyan-400 font-mono text-[11px]">Sistem Informasi Perkuliahan</span>
            </div>
          </div>

          {/* Right Column (Span 5): ASICK Beats + Ruang & Lab Perkuliahan Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Bento Card 2: ASICK Beats Mini Player */}
            <div>
              <MusicPlayer />
            </div>

            {/* Bento Card 3: Panduan Lokasi Ruang & Lab Perkuliahan */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 relative overflow-hidden shadow-lg">
              <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-white/10">
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-400/20 text-cyan-400">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Panduan Ruang & Lab Kelas A</h4>
                  <p className="text-[11px] text-slate-400">Peta lokasi perkuliahan Semester 5</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block">GKB 3.10</span>
                  <p className="text-white font-semibold text-[11px] mt-0.5">Ruang Teori & Etika</p>
                  <span className="text-[10px] text-slate-400">Gd. Kuliah Bersama Lt. 3</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block">SFS 2.1</span>
                  <p className="text-white font-semibold text-[11px] mt-0.5">Manajemen Proyek & SQA</p>
                  <span className="text-[10px] text-slate-400">Ruang SFS Lt. 2</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block">LAB SFS 3.1</span>
                  <p className="text-white font-semibold text-[11px] mt-0.5">Mobile Dev & Cloud</p>
                  <span className="text-[10px] text-slate-400">Praktikum Hari Kamis</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold block">LAB SFS 3.11</span>
                  <p className="text-white font-semibold text-[11px] mt-0.5">Konstruksi & Evolusi PL</p>
                  <span className="text-[10px] text-slate-400">Praktikum Hari Jum'at</span>
                </div>
              </div>

              {/* Routine Note */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-rose-300">
                  <Flag className="w-3 h-3 text-rose-400" />
                  Apel Wajib: Senin & Jum'at 07:00 WIB
                </span>
                <span className="text-cyan-400 font-medium">Semester 5</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
