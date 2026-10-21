import React from 'react';
import { Users, GraduationCap, MapPin, CheckCircle, HeartHandshake } from 'lucide-react';

const teamMembers = [
  { name: 'Rian Pratama', role: 'Ketua Tim Pelaksana', dept: 'S1 Gizi Universitas Tidar', initial: 'RP' },
  { name: 'Nabila Azzahra', role: 'Sekretaris Program', dept: 'S1 Gizi Universitas Tidar', initial: 'NA' },
  { name: 'Fikri Haikal', role: 'Bendahara & Logistik', dept: 'S1 Gizi Universitas Tidar', initial: 'FH' },
  { name: 'Dina Kusuma', role: 'Koordinator Pilar Tubing Care & K3', dept: 'S1 Gizi Universitas Tidar', initial: 'DK' },
  { name: 'Bayu Saputra', role: 'Koordinator Pilar Green Space', dept: 'S1 Gizi Universitas Tidar', initial: 'BS' },
  { name: 'Siti Rahmawati', role: 'Koordinator Pilar Local Creative (Gizi/UMKM)', dept: 'S1 Gizi Universitas Tidar', initial: 'SR' },
  { name: 'Aditya Nugroho', role: 'Koordinator Pilar West Integrated Ecosystem', dept: 'S1 Gizi Universitas Tidar', initial: 'AN' },
  { name: 'Lestari Wulandari', role: 'Divisi Skrining Kesehatan Wisatawan', dept: 'S1 Gizi Universitas Tidar', initial: 'LW' },
  { name: 'Dimas Anggoro', role: 'Divisi Pelatihan Water Rescue & P3K', dept: 'S1 Gizi Universitas Tidar', initial: 'DA' },
  { name: 'Anisa Putri', role: 'Divisi Edukasi Pangan TOGA & Herbal', dept: 'S1 Gizi Universitas Tidar', initial: 'AP' },
  { name: 'Rizky Kurniawan', role: 'Divisi Media Informasi & Tur 360°', dept: 'S1 Gizi Universitas Tidar', initial: 'RK' },
  { name: 'Hani Febriana', role: 'Divisi Humas & Pendampingan POKDARWIS', dept: 'S1 Gizi Universitas Tidar', initial: 'HF' },
  { name: 'Gilang Ramadhan', role: 'Divisi Pemetaan Rute Wisata', dept: 'S1 Gizi Universitas Tidar', initial: 'GR' },
  { name: 'Mega Utami', role: 'Divisi Administrasi & Legalitas SK', dept: 'S1 Gizi Universitas Tidar', initial: 'MU' },
  { name: 'Taufiq Hidayat', role: 'Divisi Pengawasan Lapangan & Evaluasi', dept: 'S1 Gizi Universitas Tidar', initial: 'TH' }
];

export default function AboutSection() {
  return (
    <>
      {/* ================= TENTANG & PROFIL WILAYAH ================= */}
      <section id="tentang" className="section" style={{ background: 'var(--bg-main)', padding: '5rem 0 3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-pill">
              <Users size={14} />
              <span>Latar Belakang &amp; Profil Wilayah</span>
            </div>
            <h2 className="section-title">Mengenal IN WEST TAMP &amp; Tampirkulon</h2>
            <p className="section-subtitle">
              Transformasi terpadu program pengabdian PPK Ormawa Himagi Universitas Tidar 2025 bersama pemerintah desa dan masyarakat lokal.
            </p>
          </div>

          {/* Latar Belakang & Dosen Pembimbing Grid */}
          <div className="content-grid-2" style={{ alignItems: 'center', marginBottom: '3.5rem' }}>
            <div>
              <span className="section-badge" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                TRANSFORMASI PROGRAM
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
                Dari Potensi Terfragmentasi Menuju Ekosistem Terpadu
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.9375rem' }}>
                Desa Tampirkulon di Kecamatan Candimulyo, Kabupaten Magelang memiliki kekayaan alam aliran sungai yang jernih, 
                bentang sawah terasering berlatar gunung, sentra keripik tempe, dan gula kelapa alami. Namun, selama ini wisata susur sungai 
                Westtamp Tubing dan UMKM warga berjalan sendiri-sendiri tanpa standarisasi keselamatan air (K3) dan legalitas kelembagaan.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                Melalui program PPK Ormawa 2025, mahasiswa Himagi Untidar hadir dengan pendekatan 
                <em> Wellness-Tourism</em>: menyatukan aspek petualangan air yang aman, kebugaran fisik, 
                asupan pangan sehat berbasis TOGA, dan digitalisasi informasi melalui tur virtual 360°.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary-lighter)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
                    Didukung Pendanaan Resmi Kemendikbudristek &amp; Universitas Tidar
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary-lighter)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
                    Kolaborasi Teknis bersama Basarnas SAR Semarang &amp; PMI Cabang Magelang
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary-lighter)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>
                    Pendampingan Intensif Posyandu Integrasi Layanan Primer (ILP) &amp; Puskesmas
                  </span>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <GraduationCap size={28} style={{ color: 'var(--accent)' }} />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 800 }}>
                    Dosen Pendamping Lapangan
                  </h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                    Fakultas Pertanian / Program Studi S1 Gizi Untidar
                  </span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
                Memberikan arahan metodologis pengabdian, supervisi validasi standar gizi olahan pangan lele dan TOGA, 
                serta koordinasi lintas instansi birokrasi pemerintah kabupaten dan universitas.
              </p>
              <div style={{ padding: '1rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
                  Program Penguatan Kapasitas Organisasi Kemahasiswaan
                </div>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', marginTop: '0.25rem', fontWeight: 600 }}>
                  Himpunan Mahasiswa Gizi (Himagi) Periode 2025
                </div>
              </div>
            </div>
          </div>

          {/* Profil Wilayah (3 Kolom) */}
          <div className="content-grid-3">
            <div className="content-card">
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Karakteristik Wilayah
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 700, margin: '0.35rem 0 0.5rem' }}>
                Geografis &amp; Alam
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Terletak di Kecamatan Candimulyo, Magelang pada ketinggian 380 mdpl. Dikelilingi persawahan terasering subur, 
                udara sejuk, dan dialiri sungai berarus sedang yang ideal untuk wisata tubing keluarga.
              </p>
            </div>

            <div className="content-card">
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Sosial Kemasyarakatan
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 700, margin: '0.35rem 0 0.5rem' }}>
                13 Dusun Bersatu
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Penduduk berjumlah 4.893 jiwa dengan semangat gotong royong tinggi. Terbagi dalam kelompok pemuda pengelola wisata air, 
                ibu-ibu PKK perajin keripik tempe, peternak lele, dan pegiat seni karawitan.
              </p>
            </div>

            <div className="content-card">
              <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Kelembagaan Resmi
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 700, margin: '0.35rem 0 0.5rem' }}>
                POKDARWIS Mandiri
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Telah diresmikan melalui SK Kepala Desa Tampirkulon Nomor 188.45/14/KEP/2025 sebagai payung hukum resmi 
                pengelolaan dan pengembangan unit usaha pariwisata terpadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUSUNAN 15 MAHASISWA TIM PELAKSANA ================= */}
      <section id="tim" className="section" style={{ background: 'var(--bg-section-alt)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-pill" style={{ margin: '0 auto 0.75rem' }}>
              <HeartHandshake size={14} />
              <span>Susunan Pengurus Program</span>
            </div>
            <h2 className="section-title">15 Mahasiswa Pelaksana Program</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Dedikasi 5 bulan di lapangan bersama warga desa mewujudkan transformasi IN WEST TAMP.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar">
                  {member.initial}
                </div>
                <div>
                  <h4 className="team-name">{member.name}</h4>
                  <div className="team-role">{member.role}</div>
                  <div className="team-detail">{member.dept}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
