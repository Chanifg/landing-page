import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      className="lightbox-modal show" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Foto Dokumentasi"
    >
      <div 
        className="lightbox-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-img-wrapper" style={{ position: 'relative' }}>
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
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 5
              }}
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          <img 
            src={currentPhoto.image_url} 
            alt={currentPhoto.title} 
            id="lightbox-img" 
          />

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
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 5
              }}
              aria-label="Foto Selanjutnya"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        <div className="lightbox-footer">
          <div>
            <h4 id="lightbox-title">{currentPhoto.title}</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Foto {currentIndex + 1} dari {photos.length} • {currentPhoto.pillar_id || 'PPK Ormawa'}
            </span>
          </div>
          <button 
            className="lightbox-close-btn" 
            onClick={onClose}
            aria-label="Tutup Penampil Foto"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
