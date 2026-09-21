import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { playlistData } from '../data/classData';

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(165); // default mock duration in sec
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const track = playlistData[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play might be blocked by browser policy until user interacts
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlistData.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlistData.length) % playlistData.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl glass-card p-5 border border-white/10 flex flex-col justify-between h-full group hover:border-cyan-500/30">
      <audio
        ref={audioRef}
        src={track.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      />

      {/* Ambient background glow behind player */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-xl md:blur-2xl pointer-events-none"></div>

      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Music className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">ASICK Beats</h4>
            <p className="text-[10px] text-slate-400">Teman Ngoding & Nugas</p>
          </div>
        </div>

        {/* Animated Soundwave Visualizer Bars */}
        <div className="flex items-end gap-1 h-6 px-2 py-1 rounded-md bg-slate-900/60 border border-white/5 transform-gpu">
          <span className={`w-1 bg-cyan-400 rounded-full transition-all ${isPlaying ? 'bar-animate-1' : 'h-1.5'}`}></span>
          <span className={`w-1 bg-blue-400 rounded-full transition-all ${isPlaying ? 'bar-animate-2' : 'h-3'}`}></span>
          <span className={`w-1 bg-cyan-300 rounded-full transition-all ${isPlaying ? 'bar-animate-3' : 'h-2'}`}></span>
          <span className={`w-1 bg-sky-400 rounded-full transition-all ${isPlaying ? 'bar-animate-4' : 'h-3.5'}`}></span>
          <span className={`w-1 bg-blue-500 rounded-full transition-all ${isPlaying ? 'bar-animate-5' : 'h-1.5'}`}></span>
        </div>
      </div>

      {/* Track Info & Album Art */}
      <div className="flex items-center gap-4 my-2">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-white/10 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <img
            src={track.cover}
            alt={track.title}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-110' : ''}`}
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-none md:backdrop-blur-[1px]"></div>
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Disc className="w-6 h-6 text-white animate-spin-slow opacity-80" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h5 className="text-sm font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
            {track.title}
          </h5>
          <p className="text-xs text-slate-400 truncate mt-0.5">{track.artist}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
              Track {currentTrackIndex + 1}/{playlistData.length}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Scrubber */}
      <div className="mt-3">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-3 pt-2">
        <button
          onClick={toggleMute}
          className="p-1.5 text-slate-400 hover:text-white transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Lagu Sebelumnya"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white flex items-center justify-center shadow-glow-cyan hover:scale-105 active:scale-95 transition-transform"
            title={isPlaying ? "Jeda" : "Putar"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Lagu Berikutnya"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-slate-900 border border-white/5">
          LO-FI HQ
        </span>
      </div>
    </div>
  );
}
