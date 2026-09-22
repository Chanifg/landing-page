import React, { useEffect } from 'react';
import { X, MapPin, Navigation } from 'lucide-react';

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
      className="modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="village-map-title"
    >
      <div 
        className="modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px' }}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Navigation size={20} style={{ color: 'var(--accent)' }} />
            <h3 id="village-map-title" className="modal-title">Peta Titik Rute Wisata Desa Tampirkulon</h3>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Tutup Peta Desa"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Klik pin pada peta kawasan untuk langsung melompat ke visual panorama 360° destinasi terpilih.
          </p>

          {/* Interactive Map Visual Surface */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            background: 'radial-gradient(ellipse at center, #1B4332 0%, #0A0F0D 85%)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)'
          }}>
            {/* Topo lines sketch simulation */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.5
            }} />

            {/* River flow curve representation */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <path 
                d="M 10 40 Q 180 120 280 200 T 550 260 T 800 380" 
                fill="none" 
                stroke="rgba(82, 183, 136, 0.35)" 
                strokeWidth="18" 
                strokeLinecap="round"
              />
              <path 
                d="M 10 40 Q 180 120 280 200 T 550 260 T 800 380" 
                fill="none" 
                stroke="#52B788" 
                strokeWidth="3" 
                strokeDasharray="6,6"
              />
              <text x="60" y="70" fill="rgba(82, 183, 136, 0.7)" fontSize="11" fontWeight="700" letterSpacing="0.05em">
                ALIRAN SUNGAI WESTTAMP TUBING
              </text>
            </svg>

            {/* Pins on the Map */}
            {spots.map((spot, idx) => {
              const isActive = spot.id === activeSpot?.id;
              const leftPercent = spot.map_coord_x || (15 + idx * 11);
              const topPercent = spot.map_coord_y || (20 + (idx % 3) * 22);

              return (
                <button
                  key={spot.id}
                  onClick={() => {
                    if (onSelectSpot) onSelectSpot(spot);
                    onClose();
                  }}
                  style={{
                    position: 'absolute',
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: 'translate(-50%, -50%)',
                    background: isActive ? 'var(--accent)' : 'var(--surface)',
                    color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                    border: `2px solid ${isActive ? '#FFFFFF' : 'var(--primary-lighter)'}`,
                    borderRadius: 'var(--radius-full)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    whiteSpace: 'nowrap',
                    transition: 'all var(--transition-fast)',
                    zIndex: isActive ? 10 : 5
                  }}
                  title={`Buka ${spot.name}`}
                  aria-label={`Spot ${idx + 1}: ${spot.name}`}
                >
                  <MapPin size={14} style={{ color: isActive ? '#FFFFFF' : 'var(--accent)' }} />
                  <span>{idx + 1}. {spot.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)' }} />
                Spot Aktif
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--primary-lighter)' }} />
                Titik Rute Lainnya
              </span>
            </div>
            <button 
              className="btn btn-outline" 
              onClick={onClose}
              style={{ fontSize: '0.8125rem', padding: '0.45rem 1rem' }}
            >
              Tutup Peta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
