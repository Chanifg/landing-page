import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

const pillarsData = [
  {
    id: 'pilar-1',
    labelAtas: 'PILAR 01 • KELEMBAGAAN & DIGITALISASI',
    judulPilar: 'West Integrated Ecosystem',
    deskripsi: 'Pembentukan kelembagaan formal POKDARWIS sebagai penggerak utama wisata, revitalisasi sarana basecamp West Tamp Tubing serta area Tuk Putri, dan peluncuran website pemesanan tiket terintegrasi.',
    sebelumIntervensi: 'Pengelolaan belum berbadan formal, promosi masih manual dan terbatas.',
    hasilTerukur: 'POKDARWIS Resmi Terbentuk (SK Desa), Website Ber-HKI & Sistem Reservasi Tiket.',
    subLabel: 'TATA KELOLA & SMART MANAGEMENT',
    judulCard: 'Kelembagaan POKDARWIS & Digitalisasi Tiket',
    deskripsiCard: 'Dilengkapi dokumen legalitas SK Pencanangan Desa Wisata, buku panduan pengoperasian website pemesanan tiket, profil video, serta penataan ulang fasilitas kebersihan basecamp.',
    footerLabel: 'Legalitas & Luaran',
    footerText: 'SK Desa Wisata •  Website Reservasi',
    imageKey: 'pilar1'
  },
  {
    id: 'pilar-2',
    labelAtas: 'PILAR 02 • STANDAR K3 & LAYANAN KESEHATAN',
    judulPilar: 'Tubing Care',
    deskripsi: 'Peningkatan kapasitas pemandu melalui pelatihan K3 dan P3K wisata air bersama PMI Kabupaten Magelang dan BASARNAS Unit Siaga Borobudur, penyusunan SOP keselamatan, edukasi PHBS, serta layanan pemeriksaan kesehatan dasar (Health Screening Day) bagi wisatawan.',
    sebelumIntervensi: 'Pemandu belum terlatih P3K/K3 wisata air & belum ada layanan skrining kesehatan.',
    hasilTerukur: 'SOP Tubing Terbit, Pengelola Terlatih K3/P3K & Pos Skrining Kesehatan Aktif.',
    subLabel: 'MITIGASI RISIKO & PROMOTIF KESEHATAN',
    judulCard: 'Pelatihan K3, P3K bersama PMI, dan Health Screening Day',
    deskripsiCard: 'Dilengkapi Standar Operasional Pelaksanaan (SOP) wisata tubing, kotak P3K, tensimeter digital, alat cek GCU (gula darah, kolesterol, asam urat), serta media edukasi PHBS di area wisata.',
    footerLabel: 'Kemitraan & Fasilitas',
    footerText: 'PMI Kab. Magelang • BASARNAS Unit Siaga Borobudur • SOP',
    imageKey: 'pilar2'
  },
  {
    id: 'pilar-3',
    labelAtas: 'PILAR 03 • HILIRISASI PANGAN & EDUWISATA',
    judulPilar: 'Local Creative',
    deskripsi: 'Pemberdayaan ibu-ibu PKK, KWT, dan POKDARWIS melalui pelatihan pengolahan komoditas lokal (bakso ikan lele, jamu tradisional, dan wedang jahe telang), budidaya tanaman obat, serta perancangan paket eduwisata.',
    sebelumIntervensi: 'Hasil budidaya lele dan tanaman TOGA belum diolah menjadi produk wisata bernilai jual.',
    hasilTerukur: 'Produk Kuliner Sehat, Paket Eduwisata & Buku Resep Ber-ISBN.',
    subLabel: 'KEMANDIRIAN EKONOMI & GIZI',
    judulCard: 'Hilirisasi Kuliner Lele, Jamu & Paket Eduwisata',
    deskripsiCard: 'Mengubah bahan baku lokal menjadi sajian khas kawasan wisata seperti bakso lele dan welcome drink wedang jahe telang, didukung modul pelatihan serta buku resep ber-ISBN Universitas Tidar.',
    footerLabel: 'Kelompok Sasaran & Luaran',
    footerText: 'PKK & KWT • Buku Resep ISBN • Paket Eduwisata',
    imageKey: 'pilar3'
  },
  {
    id: 'pilar-4',
    labelAtas: 'PILAR 04 • RUANG HIJAU & KULINER SEHAT',
    judulPilar: 'Green Wellness Space & Angkringan Sehat',
    deskripsi: 'Optimalisasi lahan kosong di sekitar area tubing menjadi kawasan "Taman Sehat" yang memadukan kebun edukasi TOGA, fasilitas olahraga luar ruang (outdoor gym sederhana), serta gerai kuliner West Angkringan Sehat.',
    sebelumIntervensi: 'Lahan sekitar area tubing belum tertata dan minim fasilitas penunjang kebugaran.',
    hasilTerukur: 'Taman TOGA, Fasilitas Gym Sederhana & Gerai West Angkringan Sehat.',
    subLabel: 'INFRASTRUKTUR PENDUKUNG WELLNESS',
    judulCard: 'Taman Sehat, Outdoor Gym & Angkringan Sehat',
    deskripsiCard: 'Menyediakan instalasi kebugaran fisik berupa sepeda statis dan pull-up bar, kebun percontohan TOGA (jahe, telang, rosella, kencur, kunyit), serta gerai angkringan sehat yang dikelola masyarakat.',
    footerLabel: 'Fasilitas Utama',
    footerText: 'Taman TOGA • Sepeda Statis & Pull-up Bar • Angkringan Sehat',
    imageKey: 'pilar4'
  }
];

export default function PillarsSection() {
  const [activeId, setActiveId] = useState(pillarsData[0].id);

  const activePillar = pillarsData.find(p => p.id === activeId) || pillarsData[0];
  const activeImageMeta = siteImages.pillars[activePillar.imageKey] || siteImages.pillars.pilar1;

  return (
    <section id="pilar" className="pillars-editorial-section">
      <div className="editorial-container">
        {/* Header Section */}
        <div className="pillars-editorial-header">
          <div className="editorial-eyebrow-pill">
            • 4 PILAR INOVASI PROGRAM •
          </div>
          <h2 className="editorial-title">
            Intervensi Terstruktur Menuju Ekosistem Wellness-Tourism Mandiri
          </h2>
          <p className="editorial-subtitle">
            Transformasi menyeluruh yang memadukan penguatan kelembagaan dan digitalisasi, standarisasi keselamatan wisata air, hilirisasi pangan lokal bergizi, hingga penataan ruang terbuka hijau ramah publik.
          </p>
        </div>

        {/* 2-Column Accordion + Visual Showcase */}
        <div className="pillars-split-grid">
          {/* Sisi Kiri: Accordion */}
          <div className="pillars-accordion-col">
            {pillarsData.map((pillar) => {
              const isActive = pillar.id === activeId;
              return (
                <div
                  key={pillar.id}
                  className={`pillar-accordion-card ${isActive ? 'active' : 'collapsed'}`}
                  onClick={() => setActiveId(pillar.id)}
                >
                  <div className="pillar-accordion-header">
                    <div className="pillar-header-meta">
                      <span className="pillar-badge-num">
                        {pillar.labelAtas}
                      </span>
                      <h3 className="pillar-name-title">
                        {pillar.judulPilar}
                      </h3>
                    </div>
                    <div className="pillar-toggle-icon">
                      {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {isActive && (
                    <div className="pillar-accordion-body">
                      <p className="pillar-desc-text">
                        {pillar.deskripsi}
                      </p>
                      <div className="pillar-highlights-row">
                        <div className="pillar-highlight-chip">
                          <span className="chip-label">SEBELUM INTERVENSI</span>
                          <span className="chip-value">{pillar.sebelumIntervensi}</span>
                        </div>
                        <div className="pillar-highlight-chip">
                          <span className="chip-label">HASIL TERUKUR</span>
                          <span className="chip-value">{pillar.hasilTerukur}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sisi Kanan: Showcase Visual Dinamis */}
          <div className="pillars-visual-col">
            <div className="pillar-showcase-card">
              <div className="pillar-showcase-image-wrap">
                <ImagePlaceholder
                  src={activeImageMeta.src}
                  alt={activePillar.judulCard}
                  label={activePillar.judulCard}
                  aspectRatio="16/10"
                  className="pillar-showcase-img"
                />
              </div>
              <div className="pillar-showcase-content">
                <div className="pillar-showcase-sublabel">
                  {activePillar.subLabel}
                </div>
                <h4 className="pillar-showcase-title">
                  {activePillar.judulCard}
                </h4>
                <p className="pillar-showcase-impact">
                  {activePillar.deskripsiCard}
                </p>
                <div className="pillar-showcase-footer">
                  <div className="pillar-footer-item">
                    <span className="pillar-footer-label">{activePillar.footerLabel}</span>
                    <span className="pillar-footer-value">{activePillar.footerText}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
