import React, { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, RotateCw, Maximize, Compass, RefreshCw } from 'lucide-react';

export default function PannellumViewer({ activeSpot, onSpotChange, spots = [] }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isGyroActive, setIsGyroActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // Initialize and update Pannellum viewer when activeSpot changes
  useEffect(() => {
    if (!activeSpot || !containerRef.current) return;

    setIsLoading(true);
    setLoadError(null);

    // Ensure window.pannellum exists
    if (!window.pannellum) {
      setLoadError('Pannellum WebGL library belum siap.');
      setIsLoading(false);
      return;
    }

    try {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }

      const viewer = window.pannellum.viewer(containerRef.current, {
        type: 'equirectangular',
        panorama: activeSpot.panorama_url,
        autoLoad: true,
        autoRotate: isAutoRotating ? -2 : 0,
        compass: false,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        mouseZoom: false, // Prevent page scroll hijack
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        pitch: 0,
        yaw: 0,
        hotSpots: (activeSpot.hotspots || []).map(hs => ({
          pitch: hs.pitch,
          yaw: hs.yaw,
          type: 'info',
          text: hs.title,
          clickHandlerFunc: () => {
            if (hs.targetSpotId && onSpotChange) {
              const target = spots.find(s => s.id === hs.targetSpotId);
              if (target) onSpotChange(target);
            }
          }
        }))
      });

      viewer.on('load', () => {
        setIsLoading(false);
      });

      viewer.on('error', (err) => {
        console.warn('Pannellum load warning:', err);
        setIsLoading(false);
      });

      // Stop auto-rotate when user interacts
      viewer.on('mousedown', () => {
        setIsAutoRotating(false);
      });
      viewer.on('touchstart', () => {
        setIsAutoRotating(false);
      });

      viewerRef.current = viewer;
    } catch (err) {
      console.error('Error initializing Pannellum:', err);
      setLoadError('Gagal memuat visual panorama 360.');
      setIsLoading(false);
    }

    return () => {
      if (viewerRef.current) {
        try {
          viewerRef.current.destroy();
        } catch {
          // ignore
        }
        viewerRef.current = null;
      }
    };
  }, [activeSpot]);

  // Controls Handlers
  const handleZoomIn = () => {
    if (!viewerRef.current) return;
    const currentHfov = viewerRef.current.getHfov();
    viewerRef.current.setHfov(Math.max(currentHfov - 12, 50));
  };

  const handleZoomOut = () => {
    if (!viewerRef.current) return;
    const currentHfov = viewerRef.current.getHfov();
    viewerRef.current.setHfov(Math.min(currentHfov + 12, 120));
  };

  const handleToggleAutoRotate = () => {
    if (!viewerRef.current) return;
    if (isAutoRotating) {
      viewerRef.current.stopAutoRotate();
      setIsAutoRotating(false);
    } else {
      viewerRef.current.startAutoRotate(-2);
      setIsAutoRotating(true);
    }
  };

  const handleFullscreen = () => {
    if (!viewerRef.current) return;
    viewerRef.current.toggleFullscreen();
  };

  const handleResetView = () => {
    if (!viewerRef.current) return;
    viewerRef.current.setPitch(0);
    viewerRef.current.setYaw(0);
    viewerRef.current.setHfov(100);
  };

  const handleToggleGyro = async () => {
    if (typeof window.DeviceOrientationEvent !== 'undefined' && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await window.DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          setIsGyroActive(prev => !prev);
          if (viewerRef.current) {
            viewerRef.current.startOrientation();
          }
        }
      } catch (e) {
        console.warn('Gyroscope permission error:', e);
      }
    } else {
      setIsGyroActive(prev => !prev);
      if (viewerRef.current) {
        if (!isGyroActive) {
          try {
            viewerRef.current.startOrientation();
          } catch {
            // device might not support orientation
          }
        } else {
          try {
            viewerRef.current.stopOrientation();
          } catch {
            // ignore
          }
        }
      }
    }
  };

  return (
    <div className="viewer-card" style={{ position: 'relative' }}>
      {/* 360 Panorama Canvas Container */}
      <div 
        ref={containerRef} 
        id="pannellum-container" 
        className="panorama-wrapper" 
        style={{ width: '100%', height: '480px', background: '#0A0F0D', position: 'relative', overflow: 'hidden' }}
        role="region"
        aria-label={`Visual Panorama 360: ${activeSpot?.name || 'Destinasi Wisata'}`}
      />

      {/* Loading Indicator */}
      {isLoading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 15, 13, 0.75)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          zIndex: 10,
          color: 'var(--text-primary)'
        }}>
          <div className="spinner-gold" style={{ width: '36px', height: '36px', border: '3px solid rgba(229, 139, 36, 0.2)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Memuat Panorama 360° WebGL...</span>
        </div>
      )}

      {/* Error Fallback */}
      {loadError && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 15, 13, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          zIndex: 10,
          color: 'var(--text-primary)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: '#EF4444' }}>{loadError}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.reload()}
            style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
          >
            Muat Ulang Halaman
          </button>
        </div>
      )}

      {/* Floating Interactive Controls Toolbar */}
      <div className="viewer-controls" role="toolbar" aria-label="Kontrol Panorama 360">
        <button 
          className="viewer-ctrl-btn" 
          onClick={handleZoomIn} 
          title="Perbesar Tampilan"
          aria-label="Perbesar Tampilan"
        >
          <ZoomIn size={18} />
        </button>
        
        <button 
          className="viewer-ctrl-btn" 
          onClick={handleZoomOut} 
          title="Perkecil Tampilan"
          aria-label="Perkecil Tampilan"
        >
          <ZoomOut size={18} />
        </button>

        <button 
          className={`viewer-ctrl-btn ${isAutoRotating ? 'active' : ''}`} 
          onClick={handleToggleAutoRotate} 
          title={isAutoRotating ? 'Hentikan Putar Otomatis' : 'Mulai Putar Otomatis'}
          aria-label={isAutoRotating ? 'Hentikan Putar Otomatis' : 'Mulai Putar Otomatis'}
        >
          <RotateCw size={18} />
        </button>

        <button 
          className={`viewer-ctrl-btn ${isGyroActive ? 'active' : ''}`} 
          onClick={handleToggleGyro} 
          title="Sensor Giroskop Ponsel"
          aria-label="Aktifkan Sensor Giroskop Ponsel"
        >
          <Compass size={18} />
        </button>

        <button 
          className="viewer-ctrl-btn" 
          onClick={handleResetView} 
          title="Reset Sudut Pandang"
          aria-label="Reset Sudut Pandang"
        >
          <RefreshCw size={18} />
        </button>

        <button 
          className="viewer-ctrl-btn" 
          onClick={handleFullscreen} 
          title="Mode Layar Penuh"
          aria-label="Mode Layar Penuh"
        >
          <Maximize size={18} />
        </button>
      </div>

      {/* Active Spot Info Bar */}
      <div className="viewer-info-bar">
        <div className="viewer-info-main">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
            <span className="badge badge-category">{activeSpot?.category || 'Destinasi Wisata'}</span>
            <span className="badge badge-dusun">{activeSpot?.dusun}</span>
            {activeSpot?.is_available === false && (
              <span className="badge" style={{ background: 'rgba(229, 139, 36, 0.2)', color: 'var(--accent)', border: '1px solid rgba(229, 139, 36, 0.4)' }}>
                Pratinjau Lapangan
              </span>
            )}
          </div>
          <h3 className="viewer-spot-title">{activeSpot?.name}</h3>
          <p className="viewer-spot-desc">{activeSpot?.description}</p>
        </div>

        {activeSpot?.highlights && (
          <div className="viewer-highlights-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
            {activeSpot.highlights.map((item, idx) => (
              <span 
                key={idx} 
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                • {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 7 Spots Carousel Strip */}
      {spots.length > 0 && (
        <div className="spots-strip-wrapper">
          <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>
            Pilih 7 Titik Destinasi Wisata Terpadu
          </span>
          <div className="spots-thumbnails-row" role="tablist" aria-label="Daftar 7 Titik Destinasi 360">
            {spots.map((spot, index) => {
              const isSelected = spot.id === activeSpot?.id;
              return (
                <button
                  key={spot.id}
                  className={`spot-thumb-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => onSpotChange && onSpotChange(spot)}
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Pilih Spot ${index + 1}: ${spot.name}`}
                >
                  <img 
                    src={spot.thumbnail_url} 
                    alt={`Foto ${spot.name}`} 
                    className="spot-thumb-img" 
                    loading="lazy" 
                  />
                  <div className="spot-thumb-meta">
                    <span className="spot-thumb-index">SPOT {index + 1}</span>
                    <span className="spot-thumb-name">{spot.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
