import React from 'react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

export default function NarrativeSection() {
  const cards = [
    {
      id: 'lele',
      src: siteImages.narrative.lele.src,
      alt: siteImages.narrative.lele.alt,
      label: siteImages.narrative.lele.label
    },
    {
      id: 'tubing',
      src: siteImages.narrative.tubing.src,
      alt: siteImages.narrative.tubing.alt,
      label: siteImages.narrative.tubing.label
    },
    {
      id: 'umkm',
      src: siteImages.narrative.umkm.src,
      alt: siteImages.narrative.umkm.alt,
      label: siteImages.narrative.umkm.label
    }
  ];

  return (
    <section id="tentang" className="narrative-section">
      <div className="editorial-container">
        {/* Eyebrow & Editorial Text Block */}
        <div className="narrative-text-wrapper">
          <div className="editorial-eyebrow-pill">
            [ LATAR BELAKANG ]
          </div>
          <p className="narrative-lead-paragraph">
            <strong>Potensi wisata susur Sungai Gono (West Tamp Tubing), budidaya ikan lele, Tanaman Obat Keluarga (TOGA), sentra UMKM hingga kesenian lokal di Desa Tampirkulon, Candimulyo, Magelang sebelumnya belum terkelola secara terintegrasi.</strong>
          </p>
          <p className="narrative-body-paragraph">
            Melalui inisiatif PPK Ormawa HIMAGI Universitas Tidar, program IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon) hadir menyatukan sektor pariwisata dengan pendekatan kesehatan melalui penguatan POKDARWIS dan digitalisasi, pelatihan keselamatan (K3 &amp; P3K), hilirisasi produk lokal, hingga pembangunan fasilitas Taman Sehat dan Angkringan Sehat guna mewujudkan desa wisata yang mandiri dan berkelanjutan.
          </p>
        </div>

        {/* 3 Photo Cards Grid */}
        <div className="narrative-cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="narrative-card">
              <div className="narrative-card-image-wrap">
                <ImagePlaceholder
                  src={card.src}
                  alt={card.alt}
                  label={card.label}
                  aspectRatio="4/3"
                  className="narrative-card-img"
                />
              </div>
              <div className="narrative-card-caption">
                <span>{card.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
