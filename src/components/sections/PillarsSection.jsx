import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

const defaultPillars = [
  {
    id: 'integrated-ecosystem',
    pillarNumber: 'Pilar 1',
    category: 'Kelembagaan & Digitalisasi',
    name: 'West Integrated Ecosystem',
    tagline: 'Kelembagaan POKDARWIS & Ekosistem Digital Terpadu',
    description: 'Menyatukan tata kelola pariwisata yang terfragmentasi melalui pembentukan POKDARWIS resmi, penerbitan SK desa, serta digitalisasi sistem informasi paket wisata.',
    highlights: [
      { label: 'SK Legalitas', value: 'SK Kades No. 188.45/14/KEP/2025' },
      { label: 'Kelembagaan', value: '19 Anggota Pokdarwis Terpilih' }
    ],
    imageKey: 'pilar1',
    activityTitle: 'Penetapan SK POKDARWIS & Digitalisasi Desa Wisata',
    impactText: 'Menghubungkan 13 dusun dan pengelola lokal dalam satu struktur koordinasi resmi berpayung hukum, mendongkrak kunjungan wisatawan hingga 95%.'
  },
  {
    id: 'tubing-care',
    pillarNumber: 'Pilar 2',
    category: 'Standarisasi Keselamatan K3 & Kesehatan',
    name: 'Tubing Care & Safety',
    tagline: 'Standar Keselamatan K3 & Layanan Kesehatan Wisata Air',
    description: 'Pelatihan teknis water rescue dan pertolongan pertama (P3K) bersama instruktur Basarnas & PMI, serta standarisasi SOP kelayakan pengunjung.',
    highlights: [
      { label: 'Sertifikasi K3', value: '25 Pemuda Tersertifikasi Basarnas' },
      { label: 'Pos Kesehatan', value: 'Screening Tensi & Kelayakan Fisik' }
    ],
    imageKey: 'pilar2',
    activityTitle: 'Simulasi Tanggap Darurat & Pelatihan Basarnas',
    impactText: 'Meningkatkan rasa aman wisatawan secara drastis melalui ketersediaan tim pemandu terlatih, pelampung standar, dan protokol darurat sungai.'
  },
  {
    id: 'local-creative',
    pillarNumber: 'Pilar 3',
    category: 'Hilirisasi Pangan Lokal & Gizi',
    name: 'Local Creative Innovation',
    tagline: 'Pemberdayaan Ekonomi Ibu PKK & Inovasi Gizi Olahan Lele',
    description: 'Pelatihan diversifikasi pangan lele menjadi bakso dan nugget kaya protein bagi ibu PKK, serta pendampingan sertifikasi kemasan higienis UMKM.',
    highlights: [
      { label: 'Pemberdayaan', value: '34 Ibu PKK Terlatih Inovasi' },
      { label: 'Hilirisasi', value: 'Bakso Lele & Kemasan Tempe' }
    ],
    imageKey: 'pilar3',
    activityTitle: 'Pelatihan Diversifikasi Produk Olahan Lele',
    impactText: 'Menciptakan diversifikasi pendapatan warga dan menyediakan alternatif pangan lokal bergizi tinggi guna mendukung pencegahan stunting.'
  },
  {
    id: 'green-wellness',
    pillarNumber: 'Pilar 4',
    category: 'Ruang Terbuka Hijau & Kebugaran',
    name: 'Green Wellness Space',
    tagline: 'Pembangunan Taman TOGA & Kawasan Terbuka Sehat',
    description: 'Revitalisasi lahan tidur di bantaran sungai menjadi ruang terbuka hijau produktif dengan 6 varietas tanaman obat keluarga dan Angkringan Sehat.',
    highlights: [
      { label: 'Taman Herbal', value: '21 m² Taman TOGA Produktif' },
      { label: 'Fasilitas', value: 'Angkringan & Sarana Kebugaran' }
    ],
    imageKey: 'pilar4',
    activityTitle: 'Gotong Royong Pembangunan Taman TOGA',
    impactText: 'Menghadirkan oasis kebugaran asri bagi wisatawan dan warga lanjut usia untuk menikmati seduhan jamu herbal segar dan udara bersih.'
  }
];

export default function PillarsSection({ pillars }) {
  // Gunakan data props jika tersedia, fallback ke defaultPillars
  const pillarsList = defaultPillars;
  const [activeId, setActiveId] = useState(pillarsList[0].id);

  const activePillar = pillarsList.find(p => p.id === activeId) || pillarsList[0];
  const activeImageMeta = siteImages.pillars[activePillar.imageKey] || siteImages.pillars.pilar1;

  return (
    <section id="pilar" className="pillars-editorial-section">
      <div className="editorial-container">
        {/* Header */}
        <div className="pillars-editorial-header">
          <div className="editorial-eyebrow-pill">
            [ 4 PILAR INTERVENSI PROGRAM ]
          </div>
          <h2 className="editorial-title">
            Intervensi Terstruktur Menuju Ekosistem Wellness-Tourism Mandiri
          </h2>
          <p className="editorial-subtitle">
            Transformasi multi-sektor yang dirancang bertahap untuk membangun tata kelola pariwisata terpadu, budaya keselamatan air (K3), kemandirian ekonomi gizi, serta ruang terbuka hijau desa.
          </p>
        </div>

        {/* 2-Column Accordion + Visual Showcase */}
        <div className="pillars-split-grid">
          {/* Sisi Kiri: Accordion */}
          <div className="pillars-accordion-col">
            {pillarsList.map((pillar) => {
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
                        {pillar.pillarNumber} : {pillar.category}
                      </span>
                      <h3 className="pillar-name-title">
                        {pillar.name}
                      </h3>
                    </div>
                    <div className="pillar-toggle-icon">
                      {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {isActive && (
                    <div className="pillar-accordion-body">
                      <p className="pillar-desc-text">
                        {pillar.description}
                      </p>
                      <div className="pillar-highlights-row">
                        {pillar.highlights.map((h, i) => (
                          <div key={i} className="pillar-highlight-chip">
                            <span className="chip-label">{h.label}</span>
                            <span className="chip-value">{h.value}</span>
                          </div>
                        ))}
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
                  alt={activeImageMeta.alt}
                  label={activePillar.activityTitle}
                  aspectRatio="16/10"
                  className="pillar-showcase-img"
                />
              </div>
              <div className="pillar-showcase-content">
                <div className="pillar-showcase-meta">
                  <span className="showcase-badge">
                    {activeImageMeta.badge}
                  </span>
                  <span className="showcase-date">
                    {activeImageMeta.date}
                  </span>
                </div>
                <h4 className="pillar-showcase-title">
                  {activePillar.activityTitle}
                </h4>
                <p className="pillar-showcase-impact">
                  {activePillar.impactText}
                </p>
                <div className="pillar-showcase-footer">
                  <span className="footer-status">
                    <CheckCircle size={15} style={{ color: 'var(--accent)' }} />
                    <span>Terealisasi 100% pada Program PPK Ormawa 2025</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
