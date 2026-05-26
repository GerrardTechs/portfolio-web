"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  Cpu, 
  Terminal as TermIcon, 
  FileText, 
  ExternalLink, 
  Award, 
  CheckCircle, 
  Droplet, 
  Layers, 
  Github,
  Linkedin, 
  Mail, 
  User, 
  BookOpen
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-emerald-500 selection:text-black">
      
      {/* HEADER BAR */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Shield className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              ALESSANDRO FARREL <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">PORTFOLIO v2</span>
            </h1>
            <p className="text-xs text-slate-400">Cybersecurity Assistant & IoT Developer</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'profile' ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            <User className="w-4 h-4" /> Profil & CV
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'projects' ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white'}`}
          >
            <Layers className="w-4 h-4" /> Proyek
          </button>
        </nav>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        
        {/* TAB 1: PROFILE & CV */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
            
            {/* Left Column: Personal Card */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-0"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-1 mb-4 shadow-xl">
                    <img 
                      src="/images/profile.jpeg" 
                      alt="Alessandro Farrel Gerrard Wijaya"
                      className="w-full h-full object-cover object-top rounded-xl scale-110"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white">Alessandro Farrel G. W.</h2>
                  <p className="text-sm text-emerald-400 font-mono mt-1">@alessandro-wijaya</p>
                  
                  <div className="mt-4 px-3 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-yellow-500" />
                    Google Student Ambassador Candidate 2026
                  </div>

                  <p className="text-xs text-slate-400 mt-6 text-justify leading-relaxed">
                    Mahasiswa Informatika Universitas Bandar Lampung (UBL) dengan IPK 3.9/4.0. Berfokus pada Keamanan Aplikasi Web, Ethical Hacking, arsitektur IoT terdistribusi, dan desain UX/UI yang interaktif.
                  </p>

                  <div className="w-full border-t border-slate-800 my-6"></div>

                  {/* Social links */}
                  <div className="flex flex-col gap-3 w-full">
                    <a href="https://github.com/GerrardTechs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>github.com/GerrardTechs</span>
                    </a>
                    <a href="https://www.linkedin.com/in/alessandro-wijaya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <Linkedin className="w-4 h-4 text-slate-400" />
                      <span>linkedin.com/in/alessandro-wijaya</span>
                    </a>
                    <a href="mailto:farrelalessandro@gmail.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span>farrelalessandro@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <BookOpen className="w-4 h-4 text-slate-400" />
                      <span>IPK / GPA: 3.9 / 4.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill Badges Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" /> Keahlian Utama
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">Web Security</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">OWASP WSTG</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">ESP32 & ESP-NOW</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">RabbitMQ</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">React.js</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">Cordova & Bootstrap</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">Python & C++</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded text-xs font-mono">Nmap & Burp Suite</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Resume / Experience Timeline */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Professional Experience */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-emerald-400" /> Pengalaman Profesional
                </h3>
                
                <div className="relative border-l border-slate-800 pl-6 ml-3 flex flex-col gap-8">
                  
                  {/* Job 1 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h4 className="font-bold text-white">Cybersecurity Assistant</h4>
                      <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Nov 2025 - Sekarang</span>
                    </div>
                    <p className="text-sm text-emerald-400 font-medium mb-3">Universitas Bandar Lampung (UBL)</p>
                    <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                      <li>Mengkoordinasikan dan memantau tugas harian dalam tim Konsultan IT untuk alur kerja yang akuntabel.</li>
                      <li>Memimpin diskusi teknis seputar keamanan siber untuk memperkuat pemahaman tim terhadap kerentanan web.</li>
                      <li>Melakukan audit keamanan web pada sistem akademik kampus (LMS) memanfaatkan Nmap, OWASP ZAP, dan Burp Suite.</li>
                      <li>Menyusun dokumentasi mitigasi kerentanan tingkat lanjut secara terstruktur.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center">
                      <User className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h4 className="font-bold text-white">Trainer - Precollege Program</h4>
                      <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Juli 2025</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium mb-3">Universitas Bandar Lampung (UBL)</p>
                    <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                      <li>Melatih mahasiswa baru mengenai dasar *Computational Thinking* dan pola pemecahan masalah algoritma sederhana.</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Certifications and Achievements */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-emerald-400" /> Sertifikasi & Penghargaan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs text-slate-400 uppercase tracking-wide font-mono">Juara Kesenian Nasional</h4>
                      <p className="text-sm font-semibold text-white mt-0.5">National Winner (Photography, Poster & Short Story)</p>
                      <p className="text-xs text-slate-500 mt-1">LombaKesenianNasional.co</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs text-slate-400 uppercase tracking-wide font-mono">PortSwigger Academy</h4>
                      <p className="text-sm font-semibold text-white mt-0.5">190+ Labs Practitioner Level Completed</p>
                      <p className="text-xs text-slate-500 mt-1">Web Security & Bug Bounty Practice</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs text-slate-400 uppercase tracking-wide font-mono">Google Ambassador Program</h4>
                      <p className="text-sm font-semibold text-white mt-0.5">Google Student Ambassador (GSA) Candidate</p>
                      <p className="text-xs text-slate-500 mt-1">Angkatan 2026</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="text-xs text-slate-400 uppercase tracking-wide font-mono">Pelatih Precollege 2025</h4>
                      <p className="text-sm font-semibold text-white mt-0.5">Awardee as a Trainer in Pre-College Event</p>
                      <p className="text-xs text-slate-500 mt-1">UBL Kampus</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            
            {/* Project 1: PwnScribe */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 border border-red-500/20 mb-4">
                  <TermIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">PwnScribe</h3>
                <span className="text-xs font-mono bg-red-950 text-red-400 px-2 py-0.5 rounded-full border border-red-800/30 inline-block mt-1">
                  Cybersecurity Tool
                </span>
                <p className="text-sm text-slate-400 mt-4 text-justify">
                  Platform manajemen pengetahuan dan penganalisa catatan eksploitasi (*knowledge-base*) khusus untuk mencatat taktik, teknik, dan prosedur (TTP) eksploitasi cyber security dari simulasi CTF dan lab PortSwigger.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">React, Fastify, Supabase, Groq AI</span>
                <a 
                  href="https://pwnscribe.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Uji Coba <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project 2: Scan-Go */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20 mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Scan-Go</h3>
                <span className="text-xs font-mono bg-blue-950 text-blue-400 px-2 py-0.5 rounded-full border border-blue-800/30 inline-block mt-1">
                  IoT Attendance System
                </span>
                <p className="text-sm text-slate-400 mt-4 text-justify">
                  Solusi absensi siswa real-time berbasis IoT menggunakan kartu RFID. Mengotomatisasi proses kehadiran sekolah, meningkatkan transparansi data, dan memiliki panel monitoring administrator. Dibangun sebagai mentor teknis utama.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">ESP32, RFID, Node.js</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Mentor Proyek</span>
              </div>
            </div>

            {/* Project 3: Greenhouse IoT */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-4">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Greenhouse Node-to-Gateway</h3>
                <span className="text-xs font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-800/30 inline-block mt-1">
                  Hardware & Protocols
                </span>
                <p className="text-sm text-slate-400 mt-4 text-justify">
                  Merancang arsitektur terdistribusi pengiriman data sensor (suhu, kelembapan tanah, dan ketinggian air tangki) menggunakan modul radio/ESP-NOW menuju Gateway pusat untuk dipublikasikan ke broker RabbitMQ.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">Arduino C++, RabbitMQ, ESP-NOW</span>
                <span className="text-xs text-slate-500 font-mono italic">Hardware Project</span>
              </div>
            </div>

            {/* Project 4: CarbonTrust */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400 border border-yellow-500/20 mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">CarbonTrust</h3>
                <span className="text-xs font-mono bg-yellow-950 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-800/30 inline-block mt-1">
                  Fullstack Web Application
                </span>
                <p className="text-sm text-slate-400 mt-4 text-justify">
                  Platform digital inovatif untuk pemantauan kredit karbon dan pengumpulan donasi hijau yang dilengkapi visualisasi dasbor geospasial interaktif serta kalkulator kalkulasi emisi terintegrasi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">React, Vercel Deploy</span>
                <span className="text-xs text-slate-400 italic">Production Ready</span>
              </div>
            </div>

            {/* Project 5: Sentinel+ */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/20 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">SENTINEL+</h3>
                <span className="text-xs font-mono bg-purple-950 text-purple-400 px-2 py-0.5 rounded-full border border-purple-800/30 inline-block mt-1">
                  AI Computer Vision
                </span>
                <p className="text-sm text-slate-400 mt-4 text-justify">
                  Sistem intelijen pengawasan berbasis pengenalan deteksi mata (*eye-tracking*) dan pemindai tingkat nikotin untuk mendata penggunaan fasilitas logistik dan perlengkapan inventaris penting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">Python OpenCV, AI models</span>
                <span className="text-xs text-slate-400 italic">AI Integration</span>
              </div>
            </div>

            {/* Project 6: Reminder Me */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
              <div>
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 border border-teal-500/20 mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Reminder Me</h3>
                <span className="text-xs font-mono bg-teal-950 text-teal-400 px-2 py-0.5 rounded-full border border-teal-800/30 inline-block mt-1">
                  Mobile Hybrid App
                </span>
                <p className="text-sm text-slate-400 mt-4 text-justify">
                  Aplikasi kalender dan asisten keuangan personal berbasis mobile yang diintegrasikan langsung menggunakan agen AI asisten pintar lewat fungsionalitas pesan obrolan natural.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">Cordova, React, AI API</span>
                <span className="text-xs text-slate-400 italic">Mobile App</span>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-6 text-center text-xs text-slate-500 font-mono">
        <p>© 2026 Alessandro Farrel Gerrard Wijaya. Built with React & Tailwind.</p>
        <p className="mt-1 text-slate-600">Google Student Ambassador Program - Candidate 2026</p>
      </footer>

    </div>
  );
}
