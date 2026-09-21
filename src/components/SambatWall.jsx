import React, { useState, useEffect } from 'react';
import { MessageSquareCode, Plus, Heart, Sparkles, X, Send, Smile, Flame, Coffee, HelpCircle, StickyNote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { initialNotesData } from '../data/classData';

export default function SambatWall() {
  const [notes, setNotes] = useState(() => {
    // Clear legacy dummy notes if existing in localStorage
    const legacySaved = localStorage.getItem('asick_sambat_notes');
    if (legacySaved) {
      localStorage.removeItem('asick_sambat_notes');
    }
    const saved = localStorage.getItem('asick_keluh_kesah_notes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    }
    return initialNotesData;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    author: '',
    category: 'Sambat Matkul',
    content: '',
    mood: '😭'
  });

  useEffect(() => {
    localStorage.setItem('asick_keluh_kesah_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (modalOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = orig;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [modalOpen]);

  const categories = [
    { name: 'Sambat Matkul', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
    { name: 'Curhat Asdos', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { name: 'Apresiasi Teman', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
    { name: 'Random Thoughts', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  ];

  const moodEmojis = ['😭', '☕', '❤️', '🔥', '🤔', '💀', '🤡', '🚀'];

  const handleLike = (id) => {
    setNotes(prev => prev.map(note => {
      if (note.id === id) {
        return { ...note, likes: note.likes + 1 };
      }
      return note;
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.content.trim()) return;

    const matchedCategory = categories.find(c => c.name === formData.category) || categories[0];

    const newNote = {
      id: `note-${Date.now()}`,
      author: formData.author.trim() || 'Warga Anonim ASICK',
      category: formData.category,
      tagColor: matchedCategory.color,
      content: formData.content.trim(),
      timestamp: 'Baru saja',
      likes: 1,
      mood: formData.mood
    };

    setNotes([newNote, ...notes]);
    setFormData({ author: '', category: 'Sambat Matkul', content: '', mood: '😭' });
    setModalOpen(false);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="sambat" className="py-20 relative">
      {/* Background ambient glow */}
      <div className="ambient-glow-blue top-1/2 -right-32 opacity-20 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-semibold text-cyan-300 mb-3">
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>DIGITAL STICKY NOTES ✦ SUARA MAHASISWA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Keluh Kesah <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital Sticky Notes</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mt-2">
              Keluh kesah tugas, apresiasi teman seangkatan, atau humor receh kampus. Bebas berekspresi secara anonim maupun santai!
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="mt-6 md:mt-0 self-start md:self-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-glow-cyan hover:shadow-[0_0_25px_rgba(0,210,255,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Tinggalkan Pesan</span>
          </button>
        </div>

        {/* Sticky Notes Grid or Empty State */}
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {notes.map((note) => (
              <div
                key={note.id}
                className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden shadow-lg"
              >
                {/* Top: Category Tag & Mood Emoji */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${note.tagColor}`}>
                      {note.category}
                    </span>
                    <span className="text-xl" title="Mood">
                      {note.mood}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-sm text-slate-200 leading-relaxed font-normal mb-4 whitespace-pre-line">
                    "{note.content}"
                  </p>
                </div>

                {/* Bottom: Author, Timestamp, and Like Button */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block text-[11px] truncate max-w-[130px]">
                      {note.author}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {note.timestamp}
                    </span>
                  </div>

                  <button
                    onClick={() => handleLike(note.id)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 hover:bg-rose-500/10 border border-white/5 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 transition-colors group/like"
                    title="Kirim Cinta / Apresiasi"
                  >
                    <Heart className="w-3.5 h-3.5 group-hover/like:fill-rose-500 group-hover/like:text-rose-500 transition-colors" />
                    <span className="font-mono text-[11px] font-bold">{note.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/15 p-12 text-center glass-card relative overflow-hidden max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(0,210,255,0.2)]">
              <StickyNote className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Belum Ada Sticky Notes
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Jadilah yang pertama menuliskan keluh kesah, curhat praktikum, atau pesan apresiasi untuk teman sekelas!
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-glow-cyan hover:scale-105 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Tulis Sticky Note Sekarang</span>
            </button>
          </div>
        )}

      </div>

      {/* Modal: Tinggalkan Pesan */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 sm:bg-midnight-950/80 sm:backdrop-blur-md transition-opacity duration-200">
          <div className="glass-card max-w-lg w-full rounded-2xl p-6 border border-cyan-500/30 shadow-2xl relative transform-gpu">
            
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                <MessageSquareCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tulis Sticky Notes Keluh Kesah</h3>
                <p className="text-xs text-slate-400">Pesan kamu akan langsung terpajang di dashboard kelas!</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Author / Callsign Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nama / Nama Samaran (Boleh Anonim):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Mahasiswa Baris 3 / Si Paling Deadline"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                />
              </div>

              {/* Category Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Kategori Pesan:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      type="button"
                      key={cat.name}
                      onClick={() => setFormData({ ...formData, category: cat.name })}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition-all ${
                        formData.category === cat.name
                          ? 'bg-blue-600/30 border-cyan-400 text-cyan-300 shadow-sm'
                          : 'bg-slate-900/50 border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood Emoji Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pilih Mood Reaksi:
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {moodEmojis.map((emoji) => (
                    <button
                      type="button"
                      key={emoji}
                      onClick={() => setFormData({ ...formData, mood: emoji })}
                      className={`w-10 h-10 rounded-xl text-lg flex items-center justify-center border transition-all ${
                        formData.mood === emoji
                          ? 'bg-cyan-500/20 border-cyan-400 scale-110 shadow-glow-sm'
                          : 'bg-slate-900/50 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Content */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Isi Pesan / Keluh Kesah:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ketik unek-unek kuliah, doa wisuda bareng, atau ucapan semangat buat teman sekelas..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim ke Sticky Notes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
