import React, { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, X, UserCheck, User, ShieldCheck } from 'lucide-react';
import { studentsData, classMetadata } from '../data/classData';

export default function StudentRoster() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {
      return (
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.npm.includes(searchTerm) ||
        student.absen.includes(searchTerm)
      );
    });
  }, [searchTerm]);

  useEffect(() => {
    if (selectedStudent) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedStudent(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = orig;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedStudent]);

  return (
    <section id="roster" className="py-20 relative">
      {/* Radial ambient glow */}
      <div className="ambient-glow-blue top-1/3 -right-40 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-semibold text-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ROSTER MAHASISWA ✦ {classMetadata.classGroup}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Daftar Absensi <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mahasiswa ASICK</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Daftar Nama seluruh mahasiswa Semester Kelas A berurutan berdasarkan nomor absensi dan Nomor Pokok Mahasiswa (NPM).
          </p>
          <div className="mt-4 inline-flex items-center gap-3 text-xs text-slate-400 bg-slate-900/60 px-4 py-1.5 rounded-full border border-white/10">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <UserCheck className="w-3.5 h-3.5" /> 21 Mahasiswa Terdaftar
            </span>
            <span>•</span>
            <span>Urutan Absensi Resmi</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari nama mahasiswa, NPM (contoh: 24783001), atau nomor absen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-input text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-400/50"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title="Hapus pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Students Grid Cards */}
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="group relative rounded-2xl glass-card p-5 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.25)] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Header Badge: No. Absen & NPM */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3.5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-mono text-xs font-black flex items-center justify-center shadow-sm">
                      {student.absen}
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      Absen #{student.absen}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-300 font-bold">
                    <span>NPM: {student.npm}</span>
                  </div>
                </div>

                {/* Profile Avatar (Default User Placeholder) & Name */}
                <div className="py-2.5">
                  <div className="flex items-center gap-3.5">
                    {/* Default User Placeholder */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-slate-800 to-midnight-950 ring-2 ring-cyan-400/30 p-3 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:ring-cyan-300 group-hover:scale-105 transition-all">
                      <User className="w-7 h-7 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                        {student.name}
                      </h4>
                      <p className="text-xs text-slate-400 truncate mt-0.5 font-medium">
                        Mahasiswa Semester 5
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Mahasiswa Aktif
                  </span>

                  <span className="text-xs font-semibold text-cyan-400 group-hover:underline flex items-center gap-1">
                    Detail Profil →
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/10 max-w-md mx-auto">
            <p className="text-slate-400 text-sm">Tidak menemukan mahasiswa dengan kata kunci pencarian tersebut.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold hover:bg-cyan-500/30"
            >
              Reset Pencarian
            </button>
          </div>
        )}

      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div 
          onClick={() => setSelectedStudent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 sm:bg-midnight-950/80 sm:backdrop-blur-md transition-opacity duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-lg w-full rounded-2xl p-6 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,210,255,0.2)] relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header: Absen & NPM */}
            <div className="flex items-center gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono font-bold text-xs">
                Absen #{selectedStudent.absen}
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-cyan-300 font-mono font-bold text-xs">
                NPM: {selectedStudent.npm}
              </span>
              <span className="text-xs text-slate-400 ml-auto font-medium">
                {classMetadata.classGroup}
              </span>
            </div>

            {/* Student Info & User Avatar Placeholder */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-800 to-midnight-950 ring-4 ring-cyan-400/40 flex items-center justify-center flex-shrink-0 shadow-lg">
                <User className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-extrabold text-white truncate">{selectedStudent.name}</h3>
                <p className="text-xs text-cyan-400 font-medium mt-0.5">{classMetadata.department}</p>
                <p className="text-xs text-slate-400">{classMetadata.university}</p>
              </div>
            </div>



            {/* Modal Actions */}
            <div className="flex gap-3">
              <div className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Terverifikasi • Mahasiswa Aktif Kelas A</span>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-95 text-xs font-bold transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
