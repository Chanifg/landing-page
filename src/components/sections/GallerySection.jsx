import React from 'react';
import { Eye, Camera } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

export default function GallerySection({ photos, onSelectPhoto }) {
  // Gunakan data siteImages.gallery sebagai basis bento
  const bentoItems = siteImages.gallery;

  return (
    <section id="galeri" className="bento-gallery-section">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="bento-gallery-header">
          <div className="bento-header-left">
            <div className="editorial-eyebrow-pill">
              [ DOKUMENTASI KEGIATAN ]
            </div>
            <h2 className="editorial-title">
              Potret Perjuangan &amp; Kebersamaan Mahasiswa Bersama Warga
            </h2>
          </div>
          <div className="bento-header-right">
            <p className="bento-header-desc">
              Dokumentasi nyata kegiatan pengabdian PPK Ormawa Himagi Untidar bersama warga, karang taruna, dan instansi profesional di Desa Tampirkulon.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid-container">
          {/* 1. Large Hero Vertical Card (Left) */}
          <div
            className="bento-card bento-card-hero"
            onClick={() => onSelectPhoto && onSelectPhoto(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectPhoto && onSelectPhoto(0)}
          >
            <ImagePlaceholder
              src={bentoItems[0].src}
              alt={bentoItems[0].title}
              label={bentoItems[0].title}
              aspectRatio="3/4"
              className="bento-img"
            />
            <div className="bento-card-gradient-overlay" />
            <div className="bento-card-badge-top">
              <span className="badge-tag">{bentoItems[0].tag}</span>
            </div>
            <div className="bento-card-caption-bottom">
              <span className="bento-eyebrow">DOKUMENTASI UTAMA</span>
              <h3 className="bento-caption-title">{bentoItems[0].title}</h3>
              <p className="bento-caption-desc">{bentoItems[0].caption}</p>
            </div>
            <div className="bento-hover-indicator">
              <Eye size={20} />
            </div>
          </div>

          {/* 2-5. Four Medium Cards (Center & Right 2x2) */}
          <div className="bento-middle-grid">
            {bentoItems.slice(1, 5).map((item, idx) => (
              <div
                key={item.id}
                className="bento-card bento-card-medium"
                onClick={() => onSelectPhoto && onSelectPhoto(idx + 1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectPhoto && onSelectPhoto(idx + 1)}
              >
                <ImagePlaceholder
                  src={item.src}
                  alt={item.title}
                  label={item.title}
                  aspectRatio="1/1"
                  className="bento-img"
                />
                <div className="bento-card-gradient-overlay-subtle" />
                <div className="bento-card-badge-top">
                  <span className="badge-tag">{item.tag}</span>
                </div>
                <div className="bento-card-caption-bottom compact">
                  <h4 className="bento-caption-title-sm">{item.title}</h4>
                </div>
                <div className="bento-hover-indicator">
                  <Eye size={18} />
                </div>
              </div>
            ))}
          </div>

          {/* 6. Panorama Card (Bottom Full Width) */}
          {bentoItems[5] && (
            <div
              className="bento-card bento-card-panorama"
              onClick={() => onSelectPhoto && onSelectPhoto(5)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectPhoto && onSelectPhoto(5)}
            >
              <ImagePlaceholder
                src={bentoItems[5].src}
                alt={bentoItems[5].title}
                label={bentoItems[5].title}
                aspectRatio="21/9"
                className="bento-img"
              />
              <div className="bento-card-gradient-overlay" />
              <div className="bento-card-badge-top">
                <span className="badge-tag">{bentoItems[5].tag}</span>
              </div>
              <div className="bento-card-caption-bottom">
                <h4 className="bento-caption-title">{bentoItems[5].title}</h4>
                <p className="bento-caption-desc">{bentoItems[5].caption}</p>
              </div>
              <div className="bento-hover-indicator">
                <Eye size={20} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
