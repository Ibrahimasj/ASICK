import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { momentsData } from '../data/classData';

export default function MemoryVault() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : momentsData.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < momentsData.length - 1 ? prev + 1 : 0));
  };

  const currentMoment = lightboxIndex !== null ? momentsData[lightboxIndex] : null;

  return (
    <section id="vault" className="py-20 relative">
      {/* Ambient background glow */}
      <div className="ambient-glow-cyan top-1/4 -left-32 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-semibold text-cyan-300 mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>MEMORY VAULT & DOKUMENTASI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Galeri Momen <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ASICK</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0">
            Koleksi potret dokumentasi kegiatan dan kebersamaan mahasiswa kelas ASICK.
          </p>
        </div>

        {/* Gallery Grid: Pure Photos Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {momentsData.map((moment, idx) => (
            <div
              key={moment.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-cyan-400/50 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with Hover Zoom */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={moment.image}
                  alt={`Momen ASICK ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Subtle hover overlay with expand icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-midnight-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-300 shadow-lg group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Pure Image View Only */}
      {lightboxIndex !== null && currentMoment && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-midnight-950/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center rounded-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-midnight-950/80 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-colors shadow-lg"
              title="Tutup Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Navigation Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-midnight-950/80 text-white hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all hover:scale-110 shadow-lg"
              title="Foto Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Navigation Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-midnight-950/80 text-white hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all hover:scale-110 shadow-lg"
              title="Foto Selanjutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pure Modal Image View */}
            <div className="w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-midnight-950">
              <img
                src={currentMoment.image}
                alt="Momen ASICK Preview"
                className="w-full h-full max-h-[85vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
