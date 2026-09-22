import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Eye } from 'lucide-react';
import { getDocumentation, getPillars } from '../lib/supabase.js';
import LightboxModal from '../components/shared/LightboxModal.jsx';

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [pillars, setPillars] = useState([]);
  const [selectedPillar, setSelectedPillar] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    async function load() {
      const [docData, pillarData] = await Promise.all([
        getDocumentation(selectedPillar),
        getPillars()
      ]);
      setPhotos(docData || []);
      setPillars(pillarData || []);
    }
    load();
  }, [selectedPillar]);

  return (
    <div className="gallery-page">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container page-header-container">
          <div className="page-badge-category">
            <ImageIcon size={14} />
            <span>ARSIP VISUAL &amp; BUKTI LAPANGAN</span>
          </div>
          <h1 className="page-title">Galeri Dokumentasi Kegiatan</h1>
          <p className="page-description">
            Kumpulan rekam visual pelaksanaan program pengabdian di Desa Tampirkulon: 
            mulai dari simulasi penyelamatan air Basarnas, pos pemeriksaan gizi, pembangunan taman TOGA, hingga sosialisasi UMKM.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="gallery-filters">
            <button 
              className={`gallery-filter-btn ${selectedPillar === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedPillar('all')}
            >
              Semua Foto ({photos.length})
            </button>
            {pillars.map(p => (
              <button 
                key={p.id}
                className={`gallery-filter-btn ${selectedPillar === p.id ? 'active' : ''}`}
                onClick={() => setSelectedPillar(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="gallery-grid">
            {photos.map((photo, idx) => (
              <div 
                key={photo.id}
                className="gallery-item"
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Buka foto: ${photo.title}`}
              >
                <div className="gallery-thumb-wrapper">
                  <img 
                    src={photo.image_url} 
                    alt={photo.title} 
                    loading="lazy" 
                  />
                  <div className="gallery-zoom-overlay">
                    <Eye size={24} />
                  </div>
                </div>
                <div className="gallery-item-caption">
                  <span className="gallery-item-tag">{photo.pillar_id || 'PPK Ormawa'}</span>
                  <h4 className="gallery-item-title">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal 
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        photos={photos}
        currentIndex={lightboxIndex || 0}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
