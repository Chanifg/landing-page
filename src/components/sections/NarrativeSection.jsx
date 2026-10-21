import React from 'react';
import { siteImages } from '../../data/siteImages.js';

export default function NarrativeSection() {
  const cards = [
    {
      id: 'lele',
      src: siteImages.narrative.lele.src,
      alt: siteImages.narrative.lele.alt,
      type: 'side'
    },
    {
      id: 'tubing',
      src: siteImages.narrative.tubing.src,
      alt: siteImages.narrative.tubing.alt,
      type: 'center'
    },
    {
      id: 'umkm',
      src: siteImages.narrative.umkm.src,
      alt: siteImages.narrative.umkm.alt,
      type: 'side'
    }
  ];

  return (
    <section id="tentang" className="narrative-section">
      <div className="editorial-container">
        {/* Eyebrow & Editorial Text Block */}
        <div className="narrative-text-wrapper">
          <div className="narrative-eyebrow-pill">
            • TENTANG IN WEST TAMP •
          </div>
          
          <p className="narrative-editorial-paragraph">
            <span className="narrative-highlight">
              Potensi wisata susur Sungai Gono (West Tamp Tubing), budidaya ikan lele, Tanaman Obat Keluarga (TOGA), sentra UMKM hingga kesenian lokal di Desa Tampirkulon, Candimulyo, Magelang sebelumnya belum terkelola secara terintegrasi.
            </span>
            <span className="narrative-secondary">
              {' '}Melalui inisiatif PPK Ormawa HIMAGI Universitas Tidar, program IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon) hadir menyatukan sektor pariwisata dengan pendekatan kesehatan melalui penguatan POKDARWIS dan digitalisasi, pelatihan keselamatan (K3 &amp; P3K), hilirisasi produk lokal, hingga pembangunan fasilitas Taman Sehat dan Angkringan Sehat guna mewujudkan desa wisata yang mandiri dan berkelanjutan.
            </span>
          </p>
        </div>

        {/* 3 Photo Cards Layout (Left portrait, Center landscape dominant, Right portrait) */}
        <div className="narrative-cards-showcase">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`narrative-showcase-card narrative-showcase-${card.type}`}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="narrative-showcase-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
