import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, photos = [], currentIndex = 0, onNavigate }) {
  // Keyboard navigation (R-32): Escape to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < photos.length - 1) onNavigate(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Foto Dokumentasi"
    >
      <div 
        className="lightbox-content modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '960px', background: 'var(--surface)' }}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge badge-category">{currentPhoto.pillar_id || 'Dokumentasi'}</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Foto {currentIndex + 1} dari {photos.length}
            </span>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Tutup Penampil Foto"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '1.25rem' }}>
          <div className="lightbox-image-wrap">
            {/* Prev Button */}
            {currentIndex > 0 && (
              <button 
                onClick={() => onNavigate(currentIndex - 1)}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(10, 15, 13, 0.75)',
                  border: '1px solid var(--border-color)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 5
                }}
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <img 
              src={currentPhoto.image_url} 
              alt={currentPhoto.title} 
              className="lightbox-img" 
            />

            {/* Next Button */}
            {currentIndex < photos.length - 1 && (
              <button 
                onClick={() => onNavigate(currentIndex + 1)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(10, 15, 13, 0.75)',
                  border: '1px solid var(--border-color)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 5
                }}
                aria-label="Foto Selanjutnya"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          <div className="lightbox-caption">
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.125rem', marginBottom: '0.35rem' }}>
              {currentPhoto.title}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              {currentPhoto.description}
            </p>
            {currentPhoto.activity_date && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                <Calendar size={13} />
                <span>Pelaksanaan: {currentPhoto.activity_date}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
