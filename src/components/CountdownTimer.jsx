import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { classMetadata } from '../data/classData';

export default function CountdownTimer({ targetDate = classMetadata.graduationDate, label = "Menuju Wisuda", className = "" }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 text-xs font-mono text-cyan-300 shadow-sm ${className}`}>
      <Calendar className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
      <span>{label}: <strong>{timeLeft.days}h {timeLeft.hours}j {timeLeft.minutes}m {timeLeft.seconds}d</strong></span>
    </div>
  );
}
