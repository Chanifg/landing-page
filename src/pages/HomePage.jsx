import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layers, Map, ArrowRight, ShieldCheck, Eye, Sparkles } from 'lucide-react';
import { getDestinations, getPillars, getMetrics, getDocumentation } from '../lib/supabase.js';
import PannellumViewer from '../components/viewer/PannellumViewer.jsx';
import VillageMapModal from '../components/viewer/VillageMapModal.jsx';
import PillarCard from '../components/shared/PillarCard.jsx';
import MetricsCounter from '../components/shared/MetricsCounter.jsx';
import LightboxModal from '../components/shared/LightboxModal.jsx';

export default function HomePage() {
  const [spots, setSpots] = useState([]);
  const [activeSpot, setActiveSpot] = useState(null);
  const [pillars, setPillars] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [recentPhotos, setRecentPhotos] = useState([]);
  
  // Modals state
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    async function loadHomeData() {
      const [destData, pillarData, metricData, docData] = await Promise.all([
        getDestinations(),
        getPillars(),
        getMetrics(),
        getDocumentation()
      ]);
      setSpots(destData);
      if (destData && destData.length > 0) {
        setActiveSpot(destData[0]);
      }
      setPillars(pillarData);
      setMetrics(metricData);
      setRecentPhotos((docData || []).slice(0, 6));
    }
    loadHomeData();
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION (DESIGN.md Section 5A) ================= */}
      <section className="hero-section" id="hero">
        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Column: Asymmetrical Display Title & Identity */}
            <div className="hero-content">
              <div className="hero-meta-badge">
                <span className="meta-badge-dot" />
                <span className="meta-badge-text">PROGRAM PPK ORMAWA HIMAGI UNTIDAR 2025</span>
              </div>

              <h1 className="hero-title">
                IN WEST TAMP
              </h1>

              <div className="hero-subtitle">
                INTEGRATED WELLNESS-TOURISM AREA TAMPIRKULON
              </div>

              <p className="hero-lead">
                Transformasi kawasan pedesaan terpadu di Desa Tampirkulon, Candimulyo, Magelang. 
                Mengintegrasikan standarisasi keselamatan susur sungai Westtamp Tubing, ruang hijau kebugaran TOGA, 
                hilirisasi olahan pangan lokal, serta kelembagaan POKDARWIS resmi.
              </p>

              {/* Village Quick Facts Bar */}
              <div className="hero-facts-bar">
                <div className="hero-fact-item">
                  <span className="fact-value">2.61 KM²</span>
                  <span className="fact-label">Luas Wilayah</span>
                </div>
                <div className="hero-fact-divider" />
                <div className="hero-fact-item">
                  <span className="fact-value">4.893 Jiwa</span>
                  <span className="fact-label">Total Penduduk</span>
                </div>
                <div className="hero-fact-divider" />
                <div className="hero-fact-item">
                  <span className="fact-value">13 Dusun</span>
                  <span className="fact-label">Potensi Terpadu</span>
                </div>
              </div>

              {/* Specific CTAs (R-15) */}
              <div className="hero-actions">
                <a href="#virtual-tour" className="btn btn-primary">
                  <Compass size={18} />
                  <span>Jelajahi Paket Wisata 360</span>
                </a>
                <a href="#empat-pilar" className="btn btn-outline">
                  <Layers size={18} />
                  <span>Lihat Capaian 4 Pilar</span>
                </a>
              </div>
            </div>

            {/* Right Column: Poster Preview Card */}
            <div className="hero-poster-col">
              <div className="hero-poster-card">
                <div className="poster-frame" onClick={() => setIsPosterOpen(true)} role="button" tabIndex={0} aria-label="Buka Poster Program Ukuran Penuh">
                  <img 
                    src="/images/poster.png" 
                    alt="Poster Resmi Program PPK Ormawa IN WEST TAMP 2025" 
                    className="poster-img"
                  />
                  <div className="poster-overlay">
                    <span className="poster-zoom-hint">
                      <Eye size={18} />
                      <span>Perbesar Poster Cetak</span>
                    </span>
                  </div>
                </div>
                <div className="poster-caption">
                  <div className="poster-caption-header">
                    <span className="poster-caption-tag">BUKTI PROGRAM</span>
                    <span className="poster-caption-status">Terverifikasi</span>
                  </div>
                  <h4 className="poster-caption-title">Poster Hasil Program PPK Ormawa 2025</h4>
                  <p className="poster-caption-desc">
                    Poster cetak ber-QR code yang menghubungkan juri dan pengunjung langsung ke portal digital interaktif ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 360 VIRTUAL TOUR HUB SECTION (DESIGN.md Section 5B) ================= */}
      <section className="tour-section section-padding" id="virtual-tour">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-badge">
                <Compass size={14} style={{ color: 'var(--accent)' }} />
                TUR VIRTUAL INTERAKTIF 360°
              </span>
              <h2 className="section-title">7 Titik Destinasi Wisata Desa</h2>
              <p className="section-subtitle">
                Sentuh dan geser layar untuk menikmati panorama imersif 360° keindahan alam, eduwisata kuliner, dan kesenian warga Tampirkulon.
              </p>
            </div>
            
            <button 
              className="btn btn-outline" 
              onClick={() => setIsMapOpen(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Map size={18} />
              <span>Buka Peta Titik Rute</span>
            </button>
          </div>

          {/* Interactive Pannellum Viewer */}
          {activeSpot && (
            <PannellumViewer 
              activeSpot={activeSpot} 
              onSpotChange={setActiveSpot} 
              spots={spots} 
            />
          )}

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link 
              to="/tur-360" 
              className="btn btn-outline"
              style={{ fontSize: '0.875rem' }}
            >
              <span>Buka Halaman Lengkap Hub Tur 360° &amp; Rute Wisata</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4 PILARS SECTION (DESIGN.md Section 5C) ================= */}
      <section className="pillars-section section-padding" id="empat-pilar" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <ShieldCheck size={14} style={{ color: 'var(--primary-lighter)' }} />
              EMPAT PILAR, SATU EKOSISTEM
            </span>
            <h2 className="section-title">Inovasi Intervensi Program</h2>
            <p className="section-subtitle">
              Setiap pilar saling terhubung membentuk ekosistem desa wisata mandiri berkeselamatan tinggi dan berkelanjutan. 
              Gunakan toggle pada kartu untuk membandingkan kondisi sebelum vs sesudah program.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= METRICS IN NUMBERS SECTION (DESIGN.md Section 5D) ================= */}
      <section className="metrics-section section-padding" id="program-angka">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-badge" style={{ margin: '0 auto' }}>
              <Sparkles size={14} style={{ color: 'var(--accent)' }} />
              BUKTI LAPANGAN TERUKUR
            </span>
            <h2 className="section-title">Program Dalam Angka</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Data kuantitatif capaian hasil pendampingan 5 bulan tim mahasiswa bersama 6 kelompok sasaran masyarakat.
            </p>
          </div>

          <MetricsCounter metrics={metrics} />
        </div>
      </section>

      {/* ================= RECENT DOCUMENTATION TEASER (DESIGN.md Section 5E) ================= */}
      <section className="gallery-section section-padding" id="galeri-dokumentasi" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-badge">DOKUMENTASI LAPANGAN</span>
              <h2 className="section-title">Aktivitas Nyata di Desa</h2>
              <p className="section-subtitle">
                Dokumentasi pelatihan K3 Basarnas, sertifikasi P3K PMI, pos skrining kesehatan, dan pembangunan fisik sarana wisata.
              </p>
            </div>

            <Link to="/dokumentasi" className="btn btn-outline">
              <span>Lihat Seluruh Galeri ({recentPhotos.length}+)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gallery-grid">
            {recentPhotos.map((photo, idx) => (
              <div 
                key={photo.id} 
                className="gallery-item-card"
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Buka foto: ${photo.title}`}
              >
                <img 
                  src={photo.image_url} 
                  alt={photo.title} 
                  className="gallery-item-img" 
                  loading="lazy" 
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-badge">{photo.pillar_id || 'PPK Ormawa'}</span>
                  <h4 className="gallery-item-title">{photo.title}</h4>
                  <p className="gallery-item-desc">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VILLAGE MAP MODAL ================= */}
      <VillageMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        spots={spots} 
        activeSpot={activeSpot} 
        onSelectSpot={setActiveSpot} 
      />

      {/* ================= POSTER FULLSCREEN MODAL ================= */}
      {isPosterOpen && (
        <div className="modal-backdrop" onClick={() => setIsPosterOpen(false)} role="dialog" aria-modal="true">
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', background: 'var(--surface)' }}>
            <div className="modal-header">
              <h3 className="modal-title">Poster Resmi PPK Ormawa IN WEST TAMP 2025</h3>
              <button className="modal-close-btn" onClick={() => setIsPosterOpen(false)} aria-label="Tutup Poster">
                ✕
              </button>
            </div>
            <div className="modal-body" style={{ textAlign: 'center', padding: '1rem' }}>
              <img 
                src="/images/poster.png" 
                alt="Poster Lengkap PPK Ormawa Untidar 2025" 
                style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: 'var(--radius-sm)' }} 
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= PHOTO LIGHTBOX MODAL ================= */}
      <LightboxModal 
        isOpen={lightboxIndex !== null} 
        onClose={() => setLightboxIndex(null)} 
        photos={recentPhotos} 
        currentIndex={lightboxIndex || 0} 
        onNavigate={setLightboxIndex} 
      />
    </div>
  );
}
