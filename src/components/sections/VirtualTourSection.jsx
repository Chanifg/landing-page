import React from 'react';
import { Map, Smartphone, Compass } from 'lucide-react';
import PannellumViewer from '../viewer/PannellumViewer.jsx';

export default function VirtualTourSection({
  spots = [],
  activeSpot,
  onSpotChange,
  onOpenMap
}) {
  return (
    <section id="tur-360" className="tour-editorial-section">
      <div className="editorial-container">
        {/* Header: Judul di kiri, Deskripsi di kanan */}
        <div className="tour-editorial-header">
          <div className="tour-header-left">
            <div className="editorial-eyebrow-pill">
              [ EKSPLORASI INTERAKTIF ]
            </div>
            <h2 className="editorial-title">
              Tur Virtual Paket Wisata Terpadu
            </h2>
          </div>
          <div className="tour-header-right">
            <p className="tour-editorial-desc">
              Jelajahi keindahan dan atmosfer 7 destinasi unggulan Desa Tampirkulon secara imersif 360 derajat. Nikmati visualisasi panorama lanskap persawahan, jeram susur sungai, hingga sentra pangan lokal.
            </p>
          </div>
        </div>

        {/* Top Status Bar: Spot Aktif & Tombol Buka Peta */}
        <div className="tour-status-bar">
          <div className="tour-status-left">
            <span className="tour-active-badge">
              SPOT AKTIF: {activeSpot?.name || 'Pilih Destinasi'}
            </span>
            {activeSpot?.dusun && (
              <span className="tour-active-dusun">
                {activeSpot.dusun}
              </span>
            )}
          </div>
          <button 
            type="button"
            className="btn-pill-outline tour-map-btn"
            onClick={onOpenMap}
          >
            <Map size={15} />
            <span>Buka Peta Rute Desa</span>
          </button>
        </div>

        {/* 360 Viewer Wrapper */}
        <div className="tour-viewer-frame">
          {activeSpot && (
            <PannellumViewer 
              activeSpot={activeSpot} 
              onSpotChange={onSpotChange} 
              spots={spots} 
              onOpenMap={onOpenMap}
            />
          )}
        </div>

        {/* Switcher Pills Bar (7 Destinasi) */}
        <div className="tour-pills-bar-wrapper">
          <div className="tour-pills-bar">
            {spots.map((spot) => {
              const isActive = activeSpot?.id === spot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  className={`tour-pill-item ${isActive ? 'active' : ''}`}
                  onClick={() => onSpotChange && onSpotChange(spot)}
                >
                  <span className="pill-dot" />
                  <span className="pill-text">{spot.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Smartphone Gyroscope Guidance */}
        <div className="tour-gyro-guidance">
          <Smartphone size={22} className="gyro-icon" />
          <div className="gyro-text">
            <strong>Panduan Sensor Ponsel (Mobile Gyroscope):</strong>
            <span> Geser layar untuk memutar sudut pandang 360° secara manual, atau aktifkan ikon giroskop pada kontrol viewer untuk navigasi gerak perangkat.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
