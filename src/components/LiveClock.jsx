import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function LiveClock({ showSeconds = true, className = "" }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      if (showSeconds) {
        const seconds = String(now.getSeconds()).padStart(2, '0');
        setTime(`${hours}:${minutes}:${seconds} WIB`);
      } else {
        setTime(`${hours}:${minutes} WIB`);
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [showSeconds]);

  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-xs font-mono text-cyan-300 shadow-sm ${className}`}>
      <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow flex-shrink-0" />
      <span>{time || '--:--:-- WIB'}</span>
    </div>
  );
}
