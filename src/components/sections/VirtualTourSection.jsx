import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  Compass, 
  Maximize, 
  Map, 
  ArrowLeftRight, 
  Plus, 
  Minus, 
  RotateCw, 
  Camera, 
  Droplets,
  Sprout,
  Fish,
  Flame
} from 'lucide-react';
import { mockDestinations } from '../../data/mockData.js';

export default function VirtualTourSection({
  spots = [],
  activeSpot: parentActiveSpot,
  onSpotChange,
  onOpenMap
}) {
  const spotsList = (spots && spots.length > 0) ? spots : mockDestinations;
  const currentSpot = parentActiveSpot || spotsList[0];

  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const viewerRef = useRef(null);

  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isGyroActive, setIsGyroActive] = useState(false);
  const [panX, setPanX] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const panStartRef = useRef(0);

  // Initialize Pannellum if supported and equirectangular
  useEffect(() => {
    if (!currentSpot || !containerRef.current) return;

    if (window.pannellum) {
      try {
        if (viewerRef.current) {
          try { viewerRef.current.destroy(); } catch {}
          viewerRef.current = null;
        }

        const viewer = window.pannellum.viewer(containerRef.current, {
          type: 'equirectangular',
          panorama: currentSpot.panorama_url,
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
          yaw: 0
        });

        viewerRef.current = viewer;
      } catch (err) {
        console.warn('Pannellum init fallback to simulated view:', err);
      }
    }

    return () => {
      if (viewerRef.current) {
        try { viewerRef.current.destroy(); } catch {}
        viewerRef.current = null;
      }
    };
  }, [currentSpot]);

  const handleZoomIn = () => {
    if (viewerRef.current) {
      viewerRef.current.setHfov(Math.max(viewerRef.current.getHfov() - 15, 50));
    } else {
      setZoomLevel(prev => Math.min(prev + 0.2, 1.8));
    }
  };

  const handleZoomOut = () => {
    if (viewerRef.current) {
      viewerRef.current.setHfov(Math.min(viewerRef.current.getHfov() + 15, 120));
    } else {
      setZoomLevel(prev => Math.max(prev - 0.2, 1));
    }
  };

  const handleToggleAutoRotate = () => {
    if (viewerRef.current) {
      if (isAutoRotating) {
        viewerRef.current.stopAutoRotate();
        setIsAutoRotating(false);
      } else {
        viewerRef.current.startAutoRotate(-2);
        setIsAutoRotating(true);
      }
    } else {
      setIsAutoRotating(prev => !prev);
    }
  };

  const handleToggleFullscreen = () => {
    const el = viewportRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    panStartRef.current = panX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartXRef.current;
    setPanX(panStartRef.current + dx * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartXRef.current = e.touches[0].clientX;
      panStartRef.current = panX;
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartXRef.current;
    setPanX(panStartRef.current + dx * 0.5);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleSelectSpot = (spot) => {
    if (onSpotChange) {
      onSpotChange(spot);
    }
  };

  return (
    <section className="tour-editorial-section" data-purpose="virtual-360-tour" id="tur-360">
      <div className="editorial-container">
        {/* Split Header matching the Editorial Design System */}
        <div className="tour-editorial-header">
          <div className="tour-header-left">
            <div className="editorial-eyebrow-pill">
              • EKSPLORASI IMERSIF 360° •
            </div>
            <h2 className="editorial-title">
              Tur Virtual Paket Wisata Terpadu
            </h2>
          </div>
          <div className="tour-header-right">
            <p className="tour-editorial-desc">
              Rasakan keindahan panorama matahari terbenam berlatar Gunung Merbabu/Merapi, gemericik aliran sungai Westlamp Tubing, hingga sentra keripik tempe dan gula kelapa alami secara interaktif dari layar gawai Anda.
            </p>
          </div>
        </div>

        {/* Interactive 360 Viewport Card */}
        <div className="tour-ref-card">
          {/* Viewport Toolbar */}
          <div className="tour-ref-toolbar">
            <div className="tour-ref-toolbar-left">
              <span className="tour-ref-spot-tag">
                <Eye size={13} strokeWidth={2.5} />
                <span>Spot Aktif:</span>
              </span>
              <span className="tour-ref-spot-name">{currentSpot?.name || 'Sunset di Persawahan'}</span>
              <span className="tour-ref-spot-cat">• {currentSpot?.category || 'Lanskap & Wisata Alam'}</span>
            </div>

            <div className="tour-ref-toolbar-right">
              <button 
                type="button" 
                className={`tour-ref-pill-tool ${isGyroActive ? 'active' : ''}`}
                onClick={handleToggleGyro}
                aria-label="Sensor Giroskop"
              >
                <Compass size={13} />
                <span>{isGyroActive ? 'Sensor Giroskop Aktif' : 'Sensor Giroskop Ready'}</span>
              </button>

              {onOpenMap && (
                <button 
                  type="button" 
                  className="tour-ref-pill-tool"
                  onClick={onOpenMap}
                  aria-label="Buka Peta Rute Desa"
                >
                  <Map size={13} />
                  <span>Peta Rute Desa</span>
                </button>
              )}

              <button 
                type="button" 
                className="tour-ref-pill-btn-brand"
                onClick={handleToggleFullscreen}
                aria-label="Layar Penuh"
              >
                <Maximize size={13} />
                <span>Layar Penuh</span>
              </button>
            </div>
          </div>

          {/* 360 Panoramic Simulation Viewport */}
          <div 
            className="tour-ref-viewport-frame" 
            ref={viewportRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Pannellum Container */}
            <div 
              id="panorama-container" 
              ref={containerRef} 
              className="tour-pannellum-surface" 
            />

            {/* Panoramic Photographic Background (Fallback / Underlay) */}
            <img 
              src={currentSpot?.panorama_url || '/images/360/sunset-persawahan.jpg'} 
              alt={currentSpot?.name || '360 Panorama Tampirkulon'} 
              className="tour-panoramic-photo"
              style={{
                transform: `scale(${zoomLevel}) translateX(${panX}px)`,
                transition: isDragging ? 'none' : 'transform 0.5s ease-out'
              }}
              draggable={false}
            />

            {/* Dynamic Interactive Hotspots in 360 Scene */}
            {currentSpot?.id === 'spot-1' && (
              <>
                <div className="tour-ref-hotspot hotspot-golden-hour" style={{ top: '34%', left: '26%' }}>
                  <div className="tour-hotspot-pin pin-brand">
                    <Camera size={15} />
                  </div>
                  <div className="tour-hotspot-tooltip">
                    Spot Foto Golden Hour Merbabu
                  </div>
                </div>

                <div 
                  className="tour-ref-hotspot hotspot-start-tubing" 
                  style={{ top: '48%', right: '32%' }}
                  onClick={() => spotsList[1] && handleSelectSpot(spotsList[1])}
                >
                  <div className="tour-hotspot-pin pin-sage">
                    <Droplets size={15} />
                  </div>
                  <div className="tour-hotspot-tooltip">
                    Start Point Susur Sungai Tubing
                  </div>
                </div>
              </>
            )}

            {currentSpot?.id === 'spot-2' && (
              <div 
                className="tour-ref-hotspot hotspot-toga" 
                style={{ top: '42%', left: '45%' }}
                onClick={() => spotsList[2] && handleSelectSpot(spotsList[2])}
              >
                <div className="tour-hotspot-pin pin-sage">
                  <Sprout size={15} />
                </div>
                <div className="tour-hotspot-tooltip">
                  Kawasan Konservasi Taman TOGA
                </div>
              </div>
            )}

            {currentSpot?.id === 'spot-3' && (
              <div 
                className="tour-ref-hotspot hotspot-kwt" 
                style={{ top: '46%', right: '38%' }}
                onClick={() => spotsList[3] && handleSelectSpot(spotsList[3])}
              >
                <div className="tour-hotspot-pin pin-brand">
                  <Fish size={15} />
                </div>
                <div className="tour-hotspot-tooltip">
                  Sentra Budidaya Lele Mandiri KWT
                </div>
              </div>
            )}

            {currentSpot?.id === 'spot-5' && (
              <div 
                className="tour-ref-hotspot hotspot-gula" 
                style={{ top: '40%', left: '35%' }}
                onClick={() => spotsList[5] && handleSelectSpot(spotsList[5])}
              >
                <div className="tour-hotspot-pin pin-brand">
                  <Flame size={15} />
                </div>
                <div className="tour-hotspot-tooltip">
                  Sentra Tungku Pembuatan Gula Kelapa
                </div>
              </div>
            )}

            {/* Panoramic Control Overlay HUD */}
            <div className="tour-ref-hud-overlay">
              <div className="tour-ref-hud-hint">
                <ArrowLeftRight size={13} className="hud-brand-icon" />
                <span>Geser kursor atau sentuh layar untuk rotasi 360°</span>
              </div>
              
              <div className="tour-ref-hud-actions">
                <button 
                  type="button" 
                  className="tour-ref-hud-btn" 
                  onClick={handleZoomIn} 
                  aria-label="Perbesar Panorama"
                  title="Perbesar"
                >
                  <Plus size={14} />
                </button>
                <button 
                  type="button" 
                  className="tour-ref-hud-btn" 
                  onClick={handleZoomOut} 
                  aria-label="Perkecil Panorama"
                  title="Perkecil"
                >
                  <Minus size={14} />
                </button>
                <button 
                  type="button" 
                  className={`tour-ref-hud-btn ${isAutoRotating ? 'active' : ''}`} 
                  onClick={handleToggleAutoRotate} 
                  aria-label="Putar Otomatis"
                  title="Putar Otomatis"
                >
                  <RotateCw size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 7 Titik Rute Wisata Carousel / Quick Badges */}
          <div className="tour-ref-routes-wrap">
            <span className="tour-ref-routes-heading">
              PILIH DESTINASI RUTE PAKET WISATA (7 TITIK LOKASI):
            </span>
            <div className="tour-ref-routes-scroll">
              {spotsList.map((spot, idx) => {
                const isActive = (currentSpot?.id === spot.id) || (!currentSpot && idx === 0);
                return (
                  <button
                    key={spot.id || idx}
                    type="button"
                    className={`tour-ref-route-badge ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectSpot(spot)}
                  >
                    {idx + 1}. {spot.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
