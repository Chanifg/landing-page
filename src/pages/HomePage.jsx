import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layers, MapPin, Eye, ArrowRight, BarChart2, ShieldCheck, Image as ImageIcon } from 'lucide-react';
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
      setSpots(destData || []);
      if (destData && destData.length > 0) {
        setActiveSpot(destData[0]);
      }
      setPillars(pillarData || []);
      setMetrics(metricData || []);
      setRecentPhotos((docData || []).slice(0, 8));
    }
    loadHomeData();
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
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
              <a href="#virtual-tour" className="btn btn-primary">
                <Compass size={18} />
                <span>Jelajahi Paket Wisata 360°</span>
              </a>
              <a href="#empat-pilar" className="btn btn-secondary">
                <Layers size={18} />
                <span>Lihat Capaian 4 Pilar</span>
              </a>
            </div>
          </div>
          
          {/* High-Res Poster Preview Card */}
          <div className="hero-poster-wrapper">
            <div className="poster-preview-card" onClick={() => setIsPosterOpen(true)} style={{ cursor: 'pointer' }}>
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

      {/* ================= VIRTUAL TOUR HUB 360° ================= */}
      <section id="virtual-tour" className="section tour-section">
        <div className="container tour-wrapper">
          <div className="section-header">
            <div className="section-pill">
              <Compass size={14} />
              <span>Eksplorasi Imersif 360 Derajat</span>
            </div>
            <h2 className="section-title">Tur Virtual Paket Wisata Terpadu</h2>
            <p className="section-subtitle">
              Rasakan langsung suasana 7 destinasi unggulan paket wisata Desa Tampirkulon yang berhasil diintegrasikan oleh tim PPK Ormawa Himagi Untidar.
            </p>
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

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/tur-360" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <span>Buka Halaman Lengkap Hub Tur 360° &amp; Panduan Rute</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4 PILAR PROGRAM SECTION ================= */}
      <section id="empat-pilar" className="section pillars-section">
        <div className="container">
          <div className="section-header">
            <div className="section-pill">
              <Layers size={14} />
              <span>Substansi Hasil PPK Ormawa</span>
            </div>
            <h2 className="section-title">Empat Pilar, Satu Ekosistem</h2>
            <p className="section-subtitle">
              Empat intervensi strategis yang dirancang oleh mahasiswa Himagi Untidar untuk mengintegrasikan wisata, kesehatan, ekonomi lokal, dan ruang wellness di Desa Tampirkulon.
            </p>
          </div>
          
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/program" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <span>Pelajari Rincian Pelatihan K3 &amp; Linimasa Program</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROGRAM DALAM ANGKA SECTION ================= */}
      <section id="program-angka" className="section metrics-section">
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

      {/* ================= GALERI DOKUMENTASI SECTION ================= */}
      <section id="galeri-dokumentasi" className="section" style={{ background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="section-pill">
                <ImageIcon size={14} />
                <span>Dokumentasi Kegiatan Nyata</span>
              </div>
              <h2 className="section-title">Galeri Lapangan PPK Ormawa</h2>
              <p className="section-subtitle">
                Rekam visual proses transformasi: pelatihan water rescue Basarnas, pendampingan P3K PMI, pos kesehatan, dan pembangunan ruang hijau desa.
              </p>
            </div>

            <Link to="/dokumentasi" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
              <span>Buka Seluruh Galeri ({recentPhotos.length}+)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="gallery-grid">
            {recentPhotos.map((photo, idx) => (
              <div 
                key={photo.id}
                className="gallery-item"
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
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

      {/* ================= MITRA KOLABORASI ================= */}
      <section id="mitra-kolaborasi" className="partners-section">
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
        <div className="minimap-modal active" onClick={() => setIsPosterOpen(false)} role="dialog" aria-modal="true">
          <div className="minimap-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', background: 'var(--surface)' }}>
            <div className="minimap-header">
              <h3>Poster Resmi PPK Ormawa IN WEST TAMP 2025</h3>
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
        photos={recentPhotos} 
        currentIndex={lightboxIndex || 0} 
        onNavigate={setLightboxIndex} 
      />
    </div>
  );
}
