export const classMetadata = {
  name: "ASICK",
  classGroup: "Semester 5 Kelas A",
  fullName: "Semester 5 Kelas A (ASICK)",
  tagline: "Satu Angkatan, Sejuta Cerita, Solid Sampai Wisuda",
  batch: "Batch 2024",
  currentSemester: "Semester 5 Kelas A Active",
  department: "Pengembangan Perangkat Lunak Situs (PSE)",
  university: "Politeknik Negeri Lampung (Polinela)",
  instagram: "@asick.class",
  nextHolidayDate: "2026-12-20T00:00:00",
  graduationDate: "2027-08-25T00:00:00",
};

export const scheduleData = {
  Senin: [
    {
      id: "sen-apel",
      code: "APEL",
      name: "Apel Pagi Mahasiswa",
      lecturer: "Pembina / Koordinator Kampus",
      time: "07:00 WIB",
      room: "Lapangan / Hall Utama",
      type: "Rutinitas",
      badge: "Apel Wajib",
      isApel: true,
      color: "from-rose-500/20 to-orange-500/20"
    },
    {
      id: "sen-1",
      code: "PSE 1511",
      name: "Technopreneurship (K)",
      lecturer: "Sylvia / Fathur",
      time: "07:30 - 08:20 WIB",
      room: "GKB 3.10",
      type: "Kuliah Teori",
      badge: "Teori (K)",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "sen-2",
      code: "PSE 1511",
      name: "Technopreneurship (P)",
      lecturer: "Sylvia / Fathur",
      time: "08:20 - 10:20 WIB",
      room: "GKB 3.10",
      type: "Praktikum Bisnis & Pitching",
      badge: "Praktikum (P)",
      color: "from-cyan-500/20 to-teal-500/20"
    },
    {
      id: "sen-break",
      code: "BREAK",
      name: "ISTIRAHAT / ISHOMA",
      lecturer: "-",
      time: "12:00 - 13:00 WIB",
      room: "Kantin / Masjid Kampus",
      type: "Istirahat",
      badge: "Ishoma",
      isBreak: true,
      color: "from-slate-800/40 to-slate-900/40"
    }
  ],
  Selasa: [
    {
      id: "sel-break",
      code: "BREAK",
      name: "ISTIRAHAT",
      lecturer: "-",
      time: "12:00 - 13:00 WIB",
      room: "Kantin / Basecamp",
      type: "Istirahat",
      badge: "Ishoma",
      isBreak: true,
      color: "from-slate-800/40 to-slate-900/40"
    },
    {
      id: "sel-1",
      code: "PSE 1516",
      name: "Etika Profesi (K)",
      lecturer: "Jaka / Tomy",
      time: "13:00 - 13:50 WIB",
      room: "GKB 3.10",
      type: "Kuliah Teori",
      badge: "Teori (K)",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      id: "sel-2",
      code: "PSE 1516",
      name: "Etika Profesi (P)",
      lecturer: "Jaka / Tomy",
      time: "13:50 - 15:50 WIB",
      room: "GKB 3.10",
      type: "Praktikum & Studi Kasus",
      badge: "Praktikum (P)",
      color: "from-purple-500/20 to-indigo-500/20"
    }
  ],
  Rabu: [
    {
      id: "rab-1",
      code: "PSE 1515",
      name: "Manajemen Project (K)",
      lecturer: "Dani / Fathur",
      time: "07:00 - 08:50 WIB",
      room: "SFS 2.1",
      type: "Kuliah Teori",
      badge: "Teori (K)",
      color: "from-blue-600/20 to-cyan-500/20"
    },
    {
      id: "rab-2",
      code: "PSE 1515",
      name: "Manajemen Project (P)",
      lecturer: "Dani / Fathur",
      time: "08:50 - 10:50 WIB",
      room: "SFS 2.1",
      type: "Praktikum Scrum & Agile",
      badge: "Praktikum (P)",
      color: "from-cyan-500/20 to-sky-500/20"
    },
    {
      id: "rab-break",
      code: "BREAK",
      name: "ISTIRAHAT / ISHOMA",
      lecturer: "-",
      time: "12:00 - 13:00 WIB",
      room: "Kantin / Masjid",
      type: "Istirahat",
      badge: "Ishoma",
      isBreak: true,
      color: "from-slate-800/40 to-slate-900/40"
    },
    {
      id: "rab-3",
      code: "PSE 1515",
      name: "Penjaminan Kualitas Perangkat Lunak (K)",
      lecturer: "Khusna / Silvia",
      time: "13:00 - 13:50 WIB",
      room: "SFS 2.1",
      type: "Kuliah Teori SQA",
      badge: "Teori (K)",
      color: "from-emerald-500/20 to-cyan-500/20"
    },
    {
      id: "rab-4",
      code: "PSE 1515",
      name: "Penjaminan Kualitas Perangkat Lunak (P)",
      lecturer: "Khusna / Silvia",
      time: "13:50 - 15:50 WIB",
      room: "SFS 2.1",
      type: "Praktikum Software Testing",
      badge: "Praktikum (P)",
      color: "from-teal-500/20 to-emerald-500/20"
    }
  ],
  Kamis: [
    {
      id: "kam-1",
      code: "PSE 1516",
      name: "Pengembangan Aplikasi Perangkat Bergerak (K)",
      lecturer: "Dani / Khusna",
      time: "07:00 - 07:50 WIB",
      room: "LAB SFS 3.1",
      type: "Kuliah Teori Mobile Dev",
      badge: "Teori (K)",
      color: "from-sky-500/20 to-blue-500/20"
    },
    {
      id: "kam-2",
      code: "PSE 1516",
      name: "Pengembangan Aplikasi Perangkat Bergerak (P)",
      lecturer: "Dani / Khusna",
      time: "07:50 - 11:50 WIB",
      room: "LAB SFS 3.1",
      type: "Praktikum Lab (4 Jam)",
      badge: "Praktikum (P) 4 Jam",
      color: "from-cyan-500/20 to-blue-600/20"
    },
    {
      id: "kam-break",
      code: "BREAK",
      name: "ISTIRAHAT / ISHOMA",
      lecturer: "-",
      time: "12:00 - 13:00 WIB",
      room: "Kantin / Masjid",
      type: "Istirahat",
      badge: "Ishoma",
      isBreak: true,
      color: "from-slate-800/40 to-slate-900/40"
    },
    {
      id: "kam-3",
      code: "PSE 1516",
      name: "Cloud Computing (K)",
      lecturer: "Jaka / Halim",
      time: "13:00 - 13:50 WIB",
      room: "SFS 3.1",
      type: "Kuliah Teori Cloud",
      badge: "Teori (K)",
      color: "from-blue-600/20 to-indigo-500/20"
    },
    {
      id: "kam-4",
      code: "PSE 1516",
      name: "Cloud Computing (P)",
      lecturer: "Jaka / Halim",
      time: "13:50 - 17:50 WIB",
      room: "SFS 3.1",
      type: "Praktikum AWS / GCP / DevOps (4 Jam)",
      badge: "Praktikum (P) 4 Jam",
      color: "from-indigo-500/20 to-cyan-500/20"
    }
  ],
  Jumat: [
    {
      id: "jum-apel",
      code: "APEL",
      name: "Apel Pagi Mahasiswa",
      lecturer: "Pembina / Koordinator Kampus",
      time: "07:00 WIB",
      room: "Lapangan / Hall Utama",
      type: "Rutinitas",
      badge: "Apel Wajib",
      isApel: true,
      color: "from-rose-500/20 to-orange-500/20"
    },
    {
      id: "jum-break",
      code: "BREAK",
      name: "ISTIRAHAT / SHOLAT JUM'AT",
      lecturer: "-",
      time: "12:30 - 13:30 WIB",
      room: "Masjid Kampus / Kantin",
      type: "Sholat & Istirahat",
      badge: "Jumatan",
      isBreak: true,
      color: "from-emerald-800/30 to-slate-900/40"
    },
    {
      id: "jum-1",
      code: "PSE 1513",
      name: "Konstruksi dan Evolusi Perangkat Lunak (K)",
      lecturer: "Eko / Fathur",
      time: "13:00 - 13:50 WIB",
      room: "LAB SFS 3.11",
      type: "Kuliah Teori",
      badge: "Teori (K)",
      color: "from-teal-500/20 to-cyan-500/20"
    },
    {
      id: "jum-2",
      code: "PSE 1513",
      name: "Konstruksi dan Evolusi Perangkat Lunak (P)",
      lecturer: "Eko / Fathur",
      time: "13:50 - 17:50 WIB",
      room: "LAB SFS 3.11",
      type: "Praktikum Lab Refactoring & CI/CD (4 Jam)",
      badge: "Praktikum (P) 4 Jam",
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ]
};

export const deadlinesData = [
  {
    id: "dl-1",
    title: "Sprint 2 Demo: Aplikasi Mobile Flutter / Kotlin",
    course: "PSE 1516 - Pengembangan Aplikasi Perangkat Bergerak",
    dueDate: "2 Hari Lagi (Kamis, 07:00)",
    status: "Urgent",
    statusBadge: "H-2",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    completed: false,
    note: "Demo live di LAB SFS 3.1 dengan Dosen Dani/Khusna"
  },
  {
    id: "dl-2",
    title: "Laporan Test Plan & Automated Testing SQA",
    course: "PSE 1515 - Penjaminan Kualitas Perangkat Lunak",
    dueDate: "3 Hari Lagi (Rabu, 23:59)",
    status: "Urgent",
    statusBadge: "H-3",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    completed: false,
    note: "Submit modul pengujian blackbox & unit test"
  },
  {
    id: "dl-3",
    title: "Setup Instance & Kubernetes Cluster di Cloud",
    course: "PSE 1516 - Cloud Computing",
    dueDate: "5 Hari Lagi (Kamis, 13:50)",
    status: "Chill",
    statusBadge: "H-5",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    completed: false,
    note: "Pastikan ingress controller berjalan normal"
  },
  {
    id: "dl-4",
    title: "Pitch Deck Startup & Business Model Canvas",
    course: "PSE 1511 - Technopreneurship",
    dueDate: "6 Hari Lagi (Senin Depan)",
    status: "Chill",
    statusBadge: "H-6",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    completed: false,
    note: "Presentasi kelompok di hadapan Bu Sylvia & Pak Fathur"
  }
];

export const studentsData = [
  {
    id: 1,
    absen: "01",
    name: "Abi Bakri",
    npm: "24783001",
    callsign: "Abi",
    role: "Mobile App Specialist",
    vibe: "Ambis Garis Keras",
    vibeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    quote: "Absen nomor 1 itu takdir, tapi nilai A di setiap matkul itu pilihan hidup.",
    instagram: "abibakri_",
    stats: { sleep: "02:00 AM", coffee: "Kopi Hitam Pekat", superPower: "Selalu maju presentasi pertama" }
  },
  {
    id: 2,
    absen: "02",
    name: "Ahmad Hafidz Fiqhy",
    npm: "24783002",
    callsign: "Hafidz",
    role: "Cloud Architect & DevOps",
    vibe: "Tukang Kopi",
    vibeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    quote: "Kubernetes boleh crash, tapi semangat kuliah kita pantang tumbang.",
    instagram: "ahmadhafidz.f",
    stats: { sleep: "03:30 AM", coffee: "Tubruk Robusta", superPower: "Fix server dalam 5 menit" }
  },
  {
    id: 3,
    absen: "03",
    name: "Bintang Aidil Rizky",
    npm: "24783006",
    callsign: "Bintang",
    role: "Fullstack Engineer",
    vibe: "Master Desain",
    vibeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    quote: "Bintang di langit bersinar terang, bintang di kelas ASICK sibuk ngoding.",
    instagram: "bintang.aidil",
    stats: { sleep: "01:30 AM", coffee: "Cappuccino Ice", superPower: "UI/UX pixel perfect" }
  },
  {
    id: 4,
    absen: "04",
    name: "Dio Gentano Ramadhan",
    npm: "24783008",
    callsign: "Dio",
    role: "Cybersecurity & Network",
    vibe: "Tim H-1",
    vibeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    quote: "Kono Dio Da! Kecepatan ngoding ku meningkat 300% saat deadline tinggal 1 jam.",
    instagram: "diogentano",
    stats: { sleep: "04:00 AM", coffee: "Energy Drink Dingin", superPower: "Adrenalin sprint midnight" }
  },
  {
    id: 5,
    absen: "05",
    name: "Dzaky Eka Wansyah",
    npm: "24783009",
    callsign: "Dzaky",
    role: "Backend & Database Master",
    vibe: "Ambis Garis Keras",
    vibeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    quote: "Database ternormalisasi dengan rapi adalah kunci ketenangan batin.",
    instagram: "dzaky_eka",
    stats: { sleep: "01:00 AM", coffee: "Americano Less Sugar", superPower: "Query SQL tanpa syntax error" }
  },
  {
    id: 6,
    absen: "06",
    name: "Fauzan Naufal Muzakki",
    npm: "24783010",
    callsign: "Ojan",
    role: "Software Quality Assurance",
    vibe: "Tukang Kopi",
    vibeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
    quote: "Sebelum dosen nemu bug di aplikasimu, biar aku duluan yang nge-roasting.",
    instagram: "fauzannaufalm",
    stats: { sleep: "02:30 AM", coffee: "Kopi Susu Gula Aren", superPower: "Nemu corner-case bug misterius" }
  },
  {
    id: 7,
    absen: "07",
    name: "Hera Selvya",
    npm: "24783012",
    callsign: "Hera",
    role: "Frontend Developer & UI/UX",
    vibe: "Master Desain",
    vibeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    quote: "Desain yang cantik bikin mood ngoding dosen jadi positif pas ngasih nilai.",
    instagram: "heraselvya_",
    stats: { sleep: "01:00 AM", coffee: "Caramel Macchiato", superPower: "Estetika palet warna masa depan" }
  },
  {
    id: 8,
    absen: "08",
    name: "Ibrahim Ahsan Suryajati",
    npm: "24783013",
    callsign: "Baim / Ahsan",
    role: "Software Construction Expert",
    vibe: "Wibu Diam-Diam",
    vibeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    quote: "Refactoring kode itu seperti latihan pernapasan, bikin program hidup abadi.",
    instagram: "ibrahim.ahsan",
    stats: { sleep: "03:00 AM", coffee: "Matcha Latte Oatmilk", superPower: "Clean code & SOLID principles" }
  },
  {
    id: 9,
    absen: "09",
    name: "Kayla Alia Atarani",
    npm: "24783014",
    callsign: "Kayla",
    role: "Project Manager & Scrum Master",
    vibe: "Ambis Garis Keras",
    vibeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80",
    quote: "Stand-up meeting 10 menit, jangan ada yang telat atau kena denda sprint kas!",
    instagram: "kaylaliaa",
    stats: { sleep: "00:30 AM", coffee: "Vanilla Latte", superPower: "Manajemen Jira & Trello tercepat" }
  },
  {
    id: 10,
    absen: "10",
    name: "M. Carel Fauzan",
    npm: "24783015",
    callsign: "Carel",
    role: "Mobile Framework Engineer",
    vibe: "Tim H-1",
    vibeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    quote: "Simulator Android makan RAM 16GB, tapi kesabaranku unlimited.",
    instagram: "carelfauzan",
    stats: { sleep: "04:30 AM", coffee: "Kopi Kenangan Large", superPower: "Build APK instan" }
  },
  {
    id: 11,
    absen: "11",
    name: "M. Rifan Adi Saputra",
    npm: "24783016",
    callsign: "Rifan",
    role: "Cloud Infrastructure Specialist",
    vibe: "Sultan Kelas",
    vibeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    quote: "Billing cloud sebulan aman, yang penting praktikum hari Kamis lancar jaya.",
    instagram: "rifanadisaputra",
    stats: { sleep: "02:00 AM", coffee: "Cold Brew Single Origin", superPower: "Deploy multi-cloud tanpa pusing" }
  },
  {
    id: 12,
    absen: "12",
    name: "Melyani Kartin Santa Tampubolon",
    npm: "24783018",
    callsign: "Mely",
    role: "Technopreneur & System Analyst",
    vibe: "Ambis Garis Keras",
    vibeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    quote: "Teknologi tanpa bisnis cuma hobi, bersama ASICK kita bikin startup raksasa.",
    instagram: "melyanikartin",
    stats: { sleep: "01:00 AM", coffee: "Caramel Latte", superPower: "Pitching memikat hati investor" }
  },
  {
    id: 13,
    absen: "13",
    name: "Muhammad Hafizh Azhar",
    npm: "24783020",
    callsign: "Hafizh Azhar",
    role: "Software Security & Testing",
    vibe: "Tukang Kopi",
    vibeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80",
    quote: "Kopi pahit mengingatkan kalau hidup mahasiswa semester 5 penuh warna.",
    instagram: "hafizhazhar_",
    stats: { sleep: "03:00 AM", coffee: "Kopi V60 Flores", superPower: "Mata elang deteksi celah XSS" }
  },
  {
    id: 14,
    absen: "14",
    name: "Muhammad Zakfar Sodik",
    npm: "24783022",
    callsign: "Zakfar",
    role: "Fullstack Web & Mobile Dev",
    vibe: "Tim H-1",
    vibeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    avatar: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&auto=format&fit=crop&q=80",
    quote: "Santai di awal minggu, panik berjamaah di malam Jumat pas praktikum konstruksi.",
    instagram: "zakfarsodik",
    stats: { sleep: "05:00 AM (habis Subuh)", coffee: "Kopi Hitam Gula Batu", superPower: "Ngebut 5 fitur dalam 1 malam" }
  },
  {
    id: 15,
    absen: "15",
    name: "Putra Bagus Satrio",
    npm: "24783026",
    callsign: "Putra Bagus",
    role: "DevOps & Server Engineer",
    vibe: "Sultan Kelas",
    vibeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=80",
    quote: "Perangkat boleh panas di lab SFS 3.1, kepala dan mental tetap sedingin es.",
    instagram: "putrabagussatrio",
    stats: { sleep: "02:00 AM", coffee: "Espresso Con Panna", superPower: "Bawa kabel LAN & flashdisk bootable" }
  },
  {
    id: 16,
    absen: "16",
    name: "Renhat Denil Ramadhan",
    npm: "24783029",
    callsign: "Renhat",
    role: "Software Architect & Logic Expert",
    vibe: "Wibu Diam-Diam",
    vibeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    quote: "Code adalah puisi modern, dan compiler adalah kritikus paling jujur.",
    instagram: "renhatdenil",
    stats: { sleep: "03:15 AM", coffee: "Boba Milk Tea Earl Grey", superPower: "Menyelesaikan algoritma rumit" }
  },
  {
    id: 17,
    absen: "17",
    name: "Rino Eqi Pratama",
    npm: "24783030",
    callsign: "Rino",
    role: "Mobile App Developer",
    vibe: "Tukang Kopi",
    vibeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=80",
    quote: "Nongkrong di warkop bukan sekadar santai, tapi riset ekosistem digital.",
    instagram: "rinoeqipratama",
    stats: { sleep: "02:30 AM", coffee: "Kopi Susu Panas", superPower: "Debugging sambil ngobrol santai" }
  },
  {
    id: 18,
    absen: "18",
    name: "Saniatun Muthoharoh",
    npm: "24783031",
    callsign: "Sania",
    role: "Database Administrator & QA",
    vibe: "Ambis Garis Keras",
    vibeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    quote: "Catatan kuliah rapi adalah separuh kemenangan menghadapi ujian akhir semester.",
    instagram: "saniatun_m",
    stats: { sleep: "00:00 AM", coffee: "Green Tea Latte", superPower: "Notulensi & rangkuman terstruktur" }
  },
  {
    id: 19,
    absen: "19",
    name: "Trio Refky Wahyu Putra",
    npm: "24783033",
    callsign: "Refky",
    role: "Cloud Platform Specialist",
    vibe: "Tim H-1",
    vibeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    quote: "Trio nama panggilannya, tapi kerja tugas kelompok tetap gotong royong!",
    instagram: "triorefky",
    stats: { sleep: "04:00 AM", coffee: "Kopi Hitam Giras", superPower: "Solidaritas teman di saat genting" }
  },
  {
    id: 20,
    absen: "20",
    name: "Yuda Andriyansyah",
    npm: "24783034",
    callsign: "Yuda",
    role: "Software Evolution Engineer",
    vibe: "Tukang Kopi",
    vibeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    quote: "Kodingan lama jangan dihapus, dievolusikan biar jadi legendaris.",
    instagram: "yuda.andriyansyah",
    stats: { sleep: "02:45 AM", coffee: "Kopi Susu Es", superPower: "Reverse engineering & refactor" }
  },
  {
    id: 21,
    absen: "21",
    name: "Zidan Alghifari",
    npm: "24783035",
    callsign: "Zidan",
    role: "Fullstack & Creative Technologist",
    vibe: "Master Desain",
    vibeColor: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    quote: "Penutup daftar absensi tapi yang terdepan dalam meramaikan kelas ASICK!",
    instagram: "zidan.alghifari",
    stats: { sleep: "03:00 AM", coffee: "Avocado Coffee Float", superPower: "Ide liar pembuat suasana seru" }
  }
];

export const momentsData = [
  {
    id: "m-1",
    image: "/moments/moment-1.jpg"
  },
  {
    id: "m-2",
    image: "/moments/moment-2.jpg"
  },
  {
    id: "m-3",
    image: "/moments/moment-3.jpg"
  },
  {
    id: "m-5",
    image: "/moments/moment-5.jpg"
  },
  {
    id: "m-7",
    image: "/moments/moment-7.jpg"
  },
  {
    id: "m-8",
    image: "/moments/moment-8.jpg"
  },
  {
    id: "m-9",
    image: "/moments/moment-9.jpg"
  },
  {
    id: "m-10",
    image: "/moments/moment-10.jpg"
  },
  {
    id: "m-11",
    image: "/moments/moment-11.jpg"
  },
  {
    id: "m-12",
    image: "/moments/moment-12.jpg"
  },
  {
    id: "m-13",
    image: "/moments/moment-13.jpg"
  },
  {
    id: "m-14",
    image: "/moments/moment-14.jpg"
  },
  {
    id: "m-15",
    image: "/moments/moment-15.jpg"
  }
];

export const initialNotesData = [];

export const playlistData = [
  {
    id: 1,
    title: "Midnight Lo-fi Beats (ASICK Code Focus)",
    artist: "ChilledCow / ASICK Lounge",
    duration: "2:45",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&auto=format&fit=crop&q=75",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
  },
  {
    id: 2,
    title: "Cyberpunk Synthwave Ambience",
    artist: "Neon Skyline Beats",
    duration: "3:12",
    cover: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&auto=format&fit=crop&q=75",
    audioSrc: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=chill-abstract-intention-12099.mp3"
  },
  {
    id: 3,
    title: "Deep Coffee Shop Rain Vibes",
    artist: "Aesthetic Study Station",
    duration: "2:58",
    cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&auto=format&fit=crop&q=75",
    audioSrc: "https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=lofi-rain-10114.mp3"
  }
];
