import React, { useState, useEffect, useCallback } from 'react';
import { 
  Compass, 
  Layers, 
  MapPin, 
  Eye, 
  BarChart2, 
  Image as ImageIcon, 
  Map, 
  Smartphone, 
  X, 
  CheckCircle, 
  FileText, 
  ExternalLink,
  Award
} from 'lucide-react';

import { 
  getDestinations, 
  getPillars, 
  getMetrics, 
  getDocumentation, 
  getDeliverables 
} from '../lib/supabase.js';

import PannellumViewer from '../components/viewer/PannellumViewer.jsx';
import VillageMapModal from '../components/viewer/VillageMapModal.jsx';
import MetricsCounter from '../components/shared/MetricsCounter.jsx';
import LightboxModal from '../components/shared/LightboxModal.jsx';

import AboutSection from '../components/sections/AboutSection.jsx';
import ProgramsSection from '../components/sections/ProgramsSection.jsx';
import DeliverablesSection from '../components/sections/DeliverablesSection.jsx';
import LocationSection from '../components/sections/LocationSection.jsx';

export default function HomePage() {
  const [spots, setSpots] = useState([]);
  const [activeSpot, setActiveSpot] = useState(null);
  const [pillars, setPillars] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [deliverables, setDeliverables] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [galleryFilter, setGalleryFilter] = useState('all');

  // Modals state
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    async function loadAllData() {
      const [destData, pillarData, metricData, docData, deliverableData] = await Promise.all([
        getDestinations(),
        getPillars(),
        getMetrics(),
        getDocumentation(),
        getDeliverables()
      ]);

      setSpots(destData || []);
      if (destData && destData.length > 0) {
        setActiveSpot(destData[0]);
      }
      setPillars(pillarData || []);
      setMetrics(metricData || []);
      setPhotos(docData || []);
      setDeliverables(deliverableData || []);
    }
    loadAllData();
  }, []);

  // Global Escape key handler for accessible modal closing
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsPosterOpen(false);
      setIsMapOpen(false);
      setSelectedDoc(null);
      setLightboxIndex(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const filteredPhotos = galleryFilter === 'all'
    ? photos
    : photos.filter(p => p.pillar_id === galleryFilter);

  return (
    <div className="single-page-layout">
      {/* ================= 1. HERO SECTION ================= */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              IN WEST <span className="text-accent">TAMP</span>
            </h1>
            
            <p className="hero-subtitle">
              Integrated Wellness-Tourism Area Tampirkulon
            </p>
            
            <div className="hero-location">
              <MapPin size={18} />
              <span>Desa Tampirkulon, Kec. Candimulyo, Kab. Magelang, Jawa Tengah</span>
            </div>
            
            <div className="hero-quote-box">
              <p className="hero-quote-text">“Potensi besar, kini terintegrasi menjadi satu ekosistem.”</p>
              <p className="hero-quote-desc">
                Menyimpan potensi wisata air Westtamp Tubing, budidaya ikan lele, Tanaman Obat Keluarga (TOGA), 
                sentra keripik tempe, dan gula jawa. Seluruh potensi ini diintegrasikan melalui pembentukan POKDARWIS, 
                transformasi digital, standarisasi K3 Basarnas dan PMI, serta ruang wellness ramah lingkungan.
              </p>
            </div>
            
            <div className="hero-stats-row">
              <div className="stat-item">
                <span className="stat-value">2.61 KM²</span>
                <span className="stat-label">Luas Wilayah</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">±4.893</span>
                <span className="stat-label">Jumlah Penduduk</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">13</span>
                <span className="stat-label">Dusun Terpadu</span>
              </div>
            </div>
            
            <div className="hero-cta-group">
              <a href="#tur-360" className="btn btn-primary">
                <Compass size={18} />
                <span>Jelajahi Paket Wisata 360°</span>
              </a>
              <a href="#pilar" className="btn btn-secondary">
                <Layers size={18} />
                <span>Lihat Capaian 4 Pilar</span>
              </a>
            </div>
          </div>
          
          {/* High-Res Poster Preview Card */}
          <div className="hero-poster-wrapper">
            <div 
              className="poster-preview-card" 
              onClick={() => setIsPosterOpen(true)} 
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsPosterOpen(true)}
              aria-label="Buka pratinjau resolusi tinggi poster resmi IN WEST TAMP"
            >
              <img src="/images/poster.png" alt="Poster Resmi IN WEST TAMP PPK Ormawa Himagi Untidar" />
              <div className="poster-floating-badge">
                <span>Poster Hasil Program</span>
                <span style={{ 
                  background: 'var(--accent)', 
                  color: '#FFFFFF', 
                  padding: '0.25rem 0.65rem', 
                  borderRadius: 'var(--radius-full)', 
                  fontSize: '0.6875rem', 
                  fontWeight: 700 
                }}>
                  Lihat Resolusi Tinggi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. VIRTUAL TOUR HUB 360° ================= */}
      <section id="tur-360" className="section tour-section" style={{ padding: '5rem 0 3.5rem' }}>
        <div className="container tour-wrapper">
          <div className="section-header">
            <div className="section-pill">
              <Compass size={14} />
              <span>Eksplorasi Imersif 360 Derajat</span>
            </div>
            <h2 className="section-title">Tur Virtual Paket Wisata Terpadu</h2>
            <p className="section-subtitle">
              Rasakan suasana 7 destinasi unggulan paket wisata Desa Tampirkulon yang berhasil diintegrasikan oleh tim PPK Ormawa Himagi Untidar.
            </p>
          </div>
          
          {/* Top Control Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-category" style={{ fontSize: '0.875rem', padding: '0.4rem 0.85rem' }}>
                SPOT AKTIF: {activeSpot?.name}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                {activeSpot?.dusun}
              </span>
            </div>

            <button 
              className="btn btn-outline"
              onClick={() => setIsMapOpen(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
            >
              <Map size={16} />
              <span>Buka Peta Rute Desa</span>
            </button>
          </div>

          {/* 360 Viewer Card & Thumbnails */}
          {activeSpot && (
            <PannellumViewer 
              activeSpot={activeSpot} 
              onSpotChange={setActiveSpot} 
              spots={spots} 
              onOpenMap={() => setIsMapOpen(true)}
            />
          )}

          {/* Smartphone Gyroscope Guidance Notice */}
          <div style={{ 
            marginTop: '2rem', 
            background: 'var(--surface)', 
            border: '1px solid var(--border-color)', 
            borderRadius: 'var(--radius-md)', 
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <Smartphone size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <div style={{ flexGrow: 1 }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', display: 'block' }}>
                Panduan Smartphone (Mobile Gyroscope)
              </strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                Sentuh layar untuk memutar sudut pandang 360 derajat atau aktifkan sensor giroskop ponsel melalui tombol kompas di bilah kontrol.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3 & 9. ABOUT & TIM SECTIONS ================= */}
      <AboutSection />

      {/* ================= 4 & 5. 4 PILAR & LINIMASA SECTIONS ================= */}
      <ProgramsSection pillars={pillars} />

      {/* ================= 6. PROGRAM DALAM ANGKA (METRIK) ================= */}
      <section id="metrik" className="section metrics-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-pill metrics-banner-pill">
              <BarChart2 size={14} />
              <span>Indikator Keberhasilan Program</span>
            </div>
            <h2 className="section-title">Program Dalam Angka</h2>
            <p className="section-subtitle">
              Capaian kuantitatif nyata selama 5 bulan pengabdian intensif tim mahasiswa di Desa Tampirkulon.
            </p>
          </div>
          
          <MetricsCounter metrics={metrics} />
        </div>
      </section>

      {/* ================= 7. KATALOG LUARAN & SK ================= */}
      <DeliverablesSection 
        deliverables={deliverables} 
        onSelectDoc={setSelectedDoc} 
      />

      {/* ================= 8. GALERI DOKUMENTASI LAPANGAN ================= */}
      <section id="galeri" className="section" style={{ background: 'var(--bg-main)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-pill">
              <ImageIcon size={14} />
              <span>Dokumentasi Kegiatan Nyata</span>
            </div>
            <h2 className="section-title">Galeri Lapangan PPK Ormawa</h2>
            <p className="section-subtitle">
              Rekam visual proses transformasi: pelatihan water rescue Basarnas, pendampingan P3K PMI, pos pemeriksaan gizi, dan pembangunan ruang hijau desa.
            </p>
          </div>

          {/* Filter Bar Pilar */}
          <div className="gallery-filters" style={{ marginBottom: '2.5rem' }}>
            <button 
              className={`gallery-filter-btn ${galleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('all')}
            >
              Semua Dokumentasi ({photos.length})
            </button>
            {pillars.map(p => (
              <button 
                key={p.id}
                className={`gallery-filter-btn ${galleryFilter === p.id ? 'active' : ''}`}
                onClick={() => setGalleryFilter(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredPhotos.map((photo, idx) => (
              <div 
                key={photo.id}
                className="gallery-item"
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(idx)}
                aria-label={`Buka foto: ${photo.title}`}
              >
                <div className="gallery-thumb-wrapper">
                  <img src={photo.image_url} alt={photo.title} loading="lazy" />
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

      {/* ================= 10. PANDUAN AKSES & LOKASI ================= */}
      <LocationSection />

      {/* ================= 11. MITRA KOLABORASI MULTI-SEKTOR ================= */}
      <section id="mitra" className="partners-section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Mitra Kolaborasi &amp; Dukungan Multi-Sektor
          </p>
          <div className="partners-grid">
            <div className="partner-logo-item" title="Universitas Tidar">
              <img src="/images/logos/untidar.png" alt="Universitas Tidar" />
            </div>
            <div className="partner-logo-item" title="BLU Unggul Berbudaya">
              <img src="/images/logos/blu.png" alt="BLU Unggul" />
            </div>
            <div className="partner-logo-item" title="Pemerintah Kabupaten Magelang">
              <img src="/images/logos/pemkab-magelang.png" alt="Pemkab Magelang" />
            </div>
            <div className="partner-logo-item" title="Badan Nasional Pencarian dan Pertolongan (BASARNAS)">
              <img src="/images/logos/basarnas.png" alt="BASARNAS" />
            </div>
            <div className="partner-logo-item" title="Palang Merah Indonesia">
              <img src="/images/logos/pmi.png" alt="PMI" />
            </div>
            <div className="partner-logo-item" title="Puskesmas Candimulyo">
              <img src="/images/logos/puskesmas.png" alt="Puskesmas Candimulyo" />
            </div>
            <div className="partner-logo-item" title="Posyandu Desa Tampirkulon">
              <img src="/images/logos/posyandu.png" alt="Posyandu" />
            </div>
            <div className="partner-logo-item" title="Desa Wisata Tampirkulon">
              <img src="/images/logos/desa-wisata.png" alt="Desa Wisata Tampirkulon" />
            </div>
            <div className="partner-logo-item" title="Westtamp Tubing">
              <img src="/images/logos/westtamp-tubing.png" alt="Westtamp Tubing" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL PRATINJAU DOKUMEN LUARAN & SK ================= */}
      {selectedDoc && (
        <div 
          className="minimap-modal active" 
          onClick={() => setSelectedDoc(null)} 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="doc-modal-title"
        >
          <div 
            className="minimap-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ maxWidth: '640px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)' }}
          >
            <div className="minimap-header" style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Award size={20} style={{ color: 'var(--accent)' }} />
                <h3 id="doc-modal-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0, fontWeight: 800 }}>
                  Pratinjau Luaran Resmi
                </h3>
              </div>
              <button 
                className="minimap-close-btn" 
                onClick={() => setSelectedDoc(null)} 
                aria-label="Tutup pratinjau dokumen"
              >
                &times;
              </button>
            </div>

            <div className="minimap-body" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className={`badge ${selectedDoc.category === 'wajib' ? 'badge-dusun' : 'badge-category'}`} style={{ textTransform: 'uppercase' }}>
                  {selectedDoc.category === 'wajib' ? 'Luaran Wajib Belmawa' : 'Luaran Tambahan & SK'}
                </span>
                <span className="status-badge success">
                  <CheckCircle size={14} />
                  <span>Status Terverifikasi</span>
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                {selectedDoc.title}
              </h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                {selectedDoc.type}
              </div>

              <div style={{ background: 'var(--surface-alt)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.875rem', display: 'block', marginBottom: '0.35rem' }}>
                  Ringkasan &amp; Legalitas Dokumen
                </strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                  {selectedDoc.description}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
                {selectedDoc.file_url && (
                  <a 
                    href={selectedDoc.file_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <span>Unduh Berkas Asli</span>
                    <ExternalLink size={15} />
                  </a>
                )}
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setSelectedDoc(null)}
                  style={{ fontSize: '0.875rem' }}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= VILLAGE MINI-MAP MODAL ================= */}
      <VillageMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        spots={spots} 
        activeSpot={activeSpot} 
        onSelectSpot={setActiveSpot} 
      />

      {/* ================= POSTER FULLSCREEN MODAL ================= */}
      {isPosterOpen && (
        <div 
          className="minimap-modal active" 
          onClick={() => setIsPosterOpen(false)} 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="poster-modal-title"
        >
          <div className="minimap-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', background: 'var(--surface)' }}>
            <div className="minimap-header">
              <h3 id="poster-modal-title">Poster Resmi PPK Ormawa IN WEST TAMP 2025</h3>
              <button className="minimap-close-btn" onClick={() => setIsPosterOpen(false)} aria-label="Tutup Poster">
                &times;
              </button>
            </div>
            <div className="minimap-body" style={{ textAlign: 'center', padding: '1rem' }}>
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
        photos={filteredPhotos} 
        currentIndex={lightboxIndex || 0} 
        onNavigate={setLightboxIndex} 
      />
    </div>
  );
}
