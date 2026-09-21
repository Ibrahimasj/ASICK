import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, Menu, X, Calendar, Users, Camera, MessageSquareCode, Home } from 'lucide-react';
import { classMetadata } from '../data/classData';

export default function Navbar({ activeSection }) {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds} WIB`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          if (isScrolled !== lastScrolled) {
            lastScrolled = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero', icon: Home },
    { label: 'Jadwal & Radar', href: '#pulse', icon: Calendar },
    { label: 'Anggota', href: '#roster', icon: Users },
    { label: 'Momen', href: '#vault', icon: Camera },
    { label: 'Keluh Kesah', href: '#sambat', icon: MessageSquareCode },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
      scrolled 
        ? 'py-2.5 bg-midnight-950/80 backdrop-blur-none md:backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-midnight-950/50' 
        : 'py-4 bg-midnight-950/40 backdrop-blur-none md:backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand: Circular Logo + Text */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full ring-2 ring-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.4)] overflow-hidden bg-white p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:ring-cyan-300">
              <img 
                src="/logo-asick.png" 
                alt="ASICK Class Logo" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain rounded-full aspect-square"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-midnight-950 rounded-full animate-pulse"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-asick-cyan transition-colors">
                ASICK
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-cyan-500/30">
                HUB
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wider hidden sm:block">
              {classMetadata.batch} ✦ CLASS SPACE
            </p>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/50 shadow-inner">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Clock & Semester Badge */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Live Clock */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-xs font-mono text-cyan-300 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>{time || '--:--:-- WIB'}</span>
          </div>

          {/* Active Semester Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-medium text-blue-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{classMetadata.currentSemester}</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/60 border border-white/10 text-[11px] font-mono text-cyan-300">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>{time.split(' ')[0]}</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900/70 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 animate-in slide-in-from-top duration-200">
          <div className="glass-card rounded-2xl p-4 border border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" /> {classMetadata.batch}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium text-[11px]">
                {classMetadata.currentSemester}
              </span>
            </div>
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-cyan-300 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
