import React, { useState, useEffect } from 'react';
import { Compass, Map, CheckCircle, Navigation, Info, Smartphone } from 'lucide-react';
import { getDestinations } from '../lib/supabase.js';
import PannellumViewer from '../components/viewer/PannellumViewer.jsx';
import VillageMapModal from '../components/viewer/VillageMapModal.jsx';

export default function VirtualTourPage() {
  const [spots, setSpots] = useState([]);
  const [activeSpot, setActiveSpot] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getDestinations();
      setSpots(data || []);
      if (data && data.length > 0) {
        setActiveSpot(data[0]);
      }
    }
    load();
  }, []);

  const handleSelectSpot = (spot) => {
    setActiveSpot(spot);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="virtual-tour-page">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container page-header-container">
          <div className="page-badge-category">
            <Compass size={14} />
            <span>HUB TUR VIRTUAL 360° IMMERSIVE</span>
          </div>
          <h1 className="page-title">Jelajah 7 Titik Rute Wisata Tampirkulon</h1>
          <p className="page-description">
            Pengalaman eksplorasi 360 derajat berbasis WebGL beresolusi tinggi. 
            Sentuh, seret panorama, dan aktifkan sensor giroskop ponsel untuk merasakan kehadiran langsung di setiap destinasi.
          </p>
        </div>
      </section>

      {/* Main Interactive 360 Viewer Section */}
      <section className="section-padding" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          {/* Top Control Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-category" style={{ fontSize: '0.875rem', padding: '0.4rem 0.85rem' }}>
                SPOT AKTIF: {activeSpot?.name}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                {activeSpot?.dusun}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                className="btn btn-outline"
                onClick={() => setIsMapOpen(true)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
              >
                <Map size={16} />
                <span>Lihat Peta Rute</span>
              </button>
            </div>
          </div>

          {/* Pannellum WebGL Viewer */}
          {activeSpot && (
            <PannellumViewer 
              activeSpot={activeSpot} 
              onSpotChange={setActiveSpot} 
              spots={spots} 
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
                Akses dari Smartphone (Mobile Gyroscope)
              </strong>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                Tekan tombol ikon kompas pada bilah kontrol panorama untuk menggerakkan sudut pandang hanya dengan memiringkan ponsel Anda.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Spot Guide & Cards Section */}
      <section className="section-padding" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <Navigation size={14} style={{ color: 'var(--accent)' }} />
              PANDUAN TITIK DESTINASI
            </span>
            <h2 className="section-title">Katalog 7 Destinasi Terpadu</h2>
            <p className="section-subtitle">
              Setiap destinasi mewakili integrasi antara wisata petualangan alam, warisan budaya lokal, dan ruang kebugaran hidup sehat.
            </p>
          </div>

          <div className="content-grid-2">
            {spots.map((spot, idx) => {
              const isCurrent = spot.id === activeSpot?.id;
              return (
                <div 
                  key={spot.id} 
                  className="content-card"
                  style={{ 
                    border: isCurrent ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                    background: isCurrent ? 'var(--surface-alt)' : 'var(--surface)'
                  }}
                >
                  <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                    <img 
                      src={spot.thumbnail_url} 
                      alt={spot.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.4rem' }}>
                      <span className="badge badge-category">SPOT {idx + 1}</span>
                      {isCurrent && (
                        <span className="badge" style={{ background: 'var(--accent)', color: '#FFFFFF' }}>
                          Sedang Ditampilkan
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                      {spot.category}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800, margin: '0.25rem 0 0.5rem' }}>
                      {spot.name}
                    </h3>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '0.75rem' }}>
                      📍 {spot.dusun}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {spot.description}
                    </p>
                  </div>

                  {spot.highlights && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                      {spot.highlights.map((h, hIdx) => (
                        <span key={hIdx} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                          • {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button 
                      className={`btn ${isCurrent ? 'btn-outline' : 'btn-primary'}`}
                      onClick={() => handleSelectSpot(spot)}
                      style={{ width: '100%', fontSize: '0.8125rem', padding: '0.55rem' }}
                    >
                      <Compass size={15} />
                      <span>{isCurrent ? 'Sedang Ditampilkan di Panorama' : 'Lihat Spot Ini di Panorama 360°'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Village Map Modal */}
      <VillageMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
        spots={spots} 
        activeSpot={activeSpot} 
        onSelectSpot={handleSelectSpot} 
      />
    </div>
  );
}
