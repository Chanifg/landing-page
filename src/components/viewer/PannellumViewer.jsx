import React, { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, RotateCw, Maximize, Compass, Map } from 'lucide-react';

export default function PannellumViewer({ activeSpot, onSpotChange, spots = [], onOpenMap }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isGyroActive, setIsGyroActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize and update Pannellum viewer
  useEffect(() => {
    if (!activeSpot || !containerRef.current) return;

    setIsLoading(true);

    if (!window.pannellum) {
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
        mouseZoom: false,
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

      viewer.on('error', () => {
        setIsLoading(false);
      });

      viewer.on('mousedown', () => {
        setIsAutoRotating(false);
      });
      viewer.on('touchstart', () => {
        setIsAutoRotating(false);
      });

      viewerRef.current = viewer;
    } catch (err) {
      console.error('Pannellum init error:', err);
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

  const handleZoomIn = () => {
    if (!viewerRef.current) return;
    viewerRef.current.setHfov(Math.max(viewerRef.current.getHfov() - 12, 50));
  };

  const handleZoomOut = () => {
    if (!viewerRef.current) return;
    viewerRef.current.setHfov(Math.min(viewerRef.current.getHfov() + 12, 120));
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

  const handleToggleGyro = async () => {
    if (typeof window.DeviceOrientationEvent !== 'undefined' && typeof window.DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const permission = await window.DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          setIsGyroActive(prev => !prev);
          if (viewerRef.current) viewerRef.current.startOrientation();
        }
      } catch (e) {
        console.warn('Gyro permission error:', e);
      }
    } else {
      setIsGyroActive(prev => !prev);
      if (viewerRef.current) {
        if (!isGyroActive) {
          try { viewerRef.current.startOrientation(); } catch {}
        } else {
          try { viewerRef.current.stopOrientation(); } catch {}
        }
      }
    }
  };

  return (
    <>
      {/* 360 Viewer Card */}
      <div className="viewer-card">
        <div className="viewer-frame">
          <div id="panorama-container" ref={containerRef} />

          {/* Viewer Top Header Overlay */}
          <div className="viewer-header-overlay">
            <div className="viewer-badge-group">
              <div className="viewer-badge">
                <Compass size={14} />
                <span>{activeSpot?.name}</span>
              </div>
              <div className="viewer-badge pillar-tag">
                {activeSpot?.pillar_name || activeSpot?.category || 'Kawasan Wisata'}
              </div>
            </div>
          </div>

          {/* Gyroscope Pill (Center Bottom) */}
          <button 
            className={`gyro-pill-btn ${isGyroActive ? 'active' : ''}`}
            onClick={handleToggleGyro}
            aria-label="Aktifkan Sensor Gerak HP"
          >
            <Compass size={16} />
            <span>{isGyroActive ? 'Sensor Giroskop Aktif' : 'Aktifkan Sensor HP (Gyro)'}</span>
          </button>

          {/* Controls Overlay (Right Bottom) */}
          <div className="viewer-controls-overlay">
            {onOpenMap && (
              <button className="viewer-btn" onClick={onOpenMap} title="Peta Sebaran Desa" aria-label="Buka Peta Desa">
                <Map size={18} />
              </button>
            )}
            <button className="viewer-btn" onClick={handleZoomIn} title="Perbesar" aria-label="Perbesar Panorama">
              <ZoomIn size={18} />
            </button>
            <button className="viewer-btn" onClick={handleZoomOut} title="Perkecil" aria-label="Perkecil Panorama">
              <ZoomOut size={18} />
            </button>
            <button 
              className={`viewer-btn ${isAutoRotating ? 'active' : ''}`} 
              onClick={handleToggleAutoRotate} 
              title="Putar Otomatis"
              aria-label="Putar Otomatis"
            >
              <RotateCw size={18} />
            </button>
            <button className="viewer-btn" onClick={handleFullscreen} title="Layar Penuh" aria-label="Layar Penuh">
              <Maximize size={18} />
            </button>
          </div>
        </div>

        {/* Spot Info Bar */}
        <div className="spot-info-bar">
          <div className="spot-info-main">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <h3>{activeSpot?.name}</h3>
              <span className="badge" style={{ background: '#2D6A4F', color: '#FFFFFF' }}>
                {activeSpot?.category || 'Destinasi Unggulan'}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '0.5rem' }}>
              📍 {activeSpot?.dusun}
            </p>
            <p id="current-spot-description">
              {activeSpot?.description}
            </p>
          </div>
          {activeSpot?.highlights && activeSpot.highlights.length > 0 && (
            <div className="spot-highlights-tags">
              {activeSpot.highlights.map((item, idx) => (
                <span key={idx} className="highlight-tag">
                  • {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 7 Spot Thumbnail Switcher */}
      {spots.length > 0 && (
        <div style={{ marginTop: '1.25rem' }}>
          <div className="spot-switcher-header">
            <div className="spot-switcher-title">
              <Map size={20} />
              <span>Pilih Destinasi Rute Paket Wisata (7 Titik Lokasi)</span>
            </div>
            {onOpenMap && (
              <button 
                className="btn btn-secondary" 
                onClick={onOpenMap} 
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.75rem' }}
              >
                Buka Peta Desa
              </button>
            )}
          </div>

          <div className="spot-thumbnails-track">
            {spots.map((spot, index) => {
              const isSelected = spot.id === activeSpot?.id;
              return (
                <button
                  key={spot.id}
                  className={`spot-card-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => onSpotChange && onSpotChange(spot)}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <div 
                    className="spot-card-preview" 
                    style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
                  >
                    <span className="spot-card-number">SPOT {index + 1}</span>
                    <span className="spot-card-badge">
                      {isSelected ? 'Aktif Ditampilkan' : 'Lihat 360°'}
                    </span>
                  </div>
                  <div className="spot-card-info">
                    <h4>{spot.name}</h4>
                    <span>{spot.dusun}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
