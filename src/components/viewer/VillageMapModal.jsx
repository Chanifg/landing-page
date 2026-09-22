import React, { useEffect } from 'react';

export default function VillageMapModal({ isOpen, onClose, spots = [], activeSpot, onSelectSpot }) {
  // Close on Escape key (R-32)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="minimap-modal show" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="village-map-title"
    >
      <div 
        className="minimap-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="minimap-header">
          <div>
            <h3 id="village-map-title">Peta Sebaran Destinasi Paket Wisata</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Desa Tampirkulon (Luas 2.61 km², 13 Dusun)
            </span>
          </div>
          <button 
            className="minimap-close-btn" 
            onClick={onClose}
            aria-label="Tutup Peta Desa"
          >
            &times;
          </button>
        </div>

        <div className="minimap-body">
          <div className="village-map-canvas">
            {/* River flow curve */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <path 
                d="M 10 30 Q 150 100 240 180 T 450 220 T 650 330" 
                fill="none" 
                stroke="rgba(82, 183, 136, 0.25)" 
                strokeWidth="20" 
                strokeLinecap="round"
              />
              <path 
                d="M 10 30 Q 150 100 240 180 T 450 220 T 650 330" 
                fill="none" 
                stroke="#52B788" 
                strokeWidth="2.5" 
                strokeDasharray="5,5"
              />
              <text x="30" y="55" fill="rgba(82, 183, 136, 0.7)" fontSize="10" fontWeight="700" letterSpacing="0.05em">
                ALIRAN SUNGAI WESTTAMP TUBING
              </text>
            </svg>

            {/* Pins on the Map */}
            {spots.map((spot, idx) => {
              const isActive = spot.id === activeSpot?.id;
              const leftPercent = spot.map_coord_x || (15 + idx * 11);
              const topPercent = spot.map_coord_y || (20 + (idx % 3) * 22);

              return (
                <div
                  key={spot.id}
                  className={`map-pin ${isActive ? 'active' : ''}`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`
                  }}
                  onClick={() => {
                    if (onSelectSpot) onSelectSpot(spot);
                    onClose();
                  }}
                  role="button"
                  tabIndex={0}
                  title={`Buka ${spot.name}`}
                  aria-label={`Spot ${idx + 1}: ${spot.name}`}
                >
                  <div className="map-pin-icon">
                    {idx + 1}
                  </div>
                  <span className="map-pin-label">
                    {spot.name.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.85rem', textAlign: 'center' }}>
            Pilih salah satu pin nomor destinasi di atas untuk langsung membuka panorama 360 derajat spot tersebut.
          </p>
        </div>
      </div>
    </div>
  );
}
