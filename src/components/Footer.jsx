import React from 'react';
import { ArrowUp, Heart, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { classMetadata } from '../data/classData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-blue-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              {/* Circular Mini Emblem */}
              <div className="w-10 h-10 rounded-full ring-2 ring-cyan-400/40 shadow-glow-sm overflow-hidden bg-white p-1 flex items-center justify-center">
                <img 
                  src="/logo-asick.png" 
                  alt="ASICK Logo" 
                  className="w-full h-full object-contain rounded-full aspect-square"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">ASICK</span>
                <span className="text-xs text-cyan-400 font-semibold block">CLASS HUB ✦ {classMetadata.batch}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Platform dashboard terintegrasi angkatan ASICK. Dibangun dengan dedikasi tinggi untuk menjaga kekompakan, keterbukaan informasi, dan semangat kolaborasi hingga toga wisuda disematkan.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-cyan-400">
                <ShieldCheck className="w-4 h-4" /> Solid & Bersinergi
              </span>
              <span>•</span>
              <span>{classMetadata.department}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-cyan-300 transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#pulse" className="hover:text-cyan-300 transition-colors">Jadwal & Deadline Radar</a>
              </li>
              <li>
                <a href="#roster" className="hover:text-cyan-300 transition-colors">Direktori Anggota Santai</a>
              </li>
              <li>
                <a href="#vault" className="hover:text-cyan-300 transition-colors">Galeri Momen Dokumentasi</a>
              </li>
              <li>
                <a href="#sambat" className="hover:text-cyan-300 transition-colors">Keluh Kesah Sticky Notes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Class Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hubungan & Media Sosial</h4>
            <p className="text-xs text-slate-400">
              Ikuti keseruan dan update kegiatan kelas kami melalui akun resmi Instagram:
            </p>
            <a
              href={`https://www.instagram.com/asick.unity`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 text-slate-200 hover:text-white transition-all text-xs font-semibold group"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>{classMetadata.instagram}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Circular Mini Emblem & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full overflow-hidden bg-white p-0.5 ring-1 ring-cyan-400/30 flex-shrink-0">
              <img src="/logo-asick.png" alt="ASICK" className="w-full h-full object-contain rounded-full" />
            </div>
            <span>
              &copy; 2024 - 2026 <strong>ASICK Class</strong>. Dibuat dengan{' '}
              <Heart className="w-3 h-3 text-rose-400 inline fill-current" /> untuk seluruh pejuang toga.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-all"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
