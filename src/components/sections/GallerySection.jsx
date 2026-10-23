import React, { useState, useRef, useEffect } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteImages } from '../../data/siteImages.js';
import ImagePlaceholder from '../shared/ImagePlaceholder.jsx';

export default function GallerySection({ photos, onSelectPhoto }) {
  // Gunakan data foto siteImages.gallery sebagai prioritas utama
  const items = (siteImages.gallery && siteImages.gallery.length > 0) 
    ? siteImages.gallery 
    : (photos || []);

  // Bagi data ke dalam kluster bento (masing-masing 6 item)
  const clusters = [];
  for (let i = 0; i < items.length; i += 6) {
    clusters.push(items.slice(i, i + 6));
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const viewportRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const currentDragOffsetRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const maxIndex = Math.max(0, clusters.length - 1);

  // Pastikan currentIndex tidak melebihi maxIndex jika data berubah
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Drag dan swipe gesture
  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    currentDragOffsetRef.current = 0;
    setIsDragging(true);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const diff = e.clientX - dragStartXRef.current;
      if (Math.abs(diff) > 6) {
        hasDraggedRef.current = true;
      }

      // Boundary resistance saat berada di ujung slide
      let adjusted = diff;
      if ((currentIndex === 0 && diff > 0) || (currentIndex >= maxIndex && diff < 0)) {
        adjusted = diff * 0.22;
      }
      currentDragOffsetRef.current = adjusted;
      setDragOffset(adjusted);
    };

    const onPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      const finalOffset = currentDragOffsetRef.current;
      const viewportWidth = viewportRef.current ? viewportRef.current.offsetWidth : 900;
      const threshold = Math.min(75, viewportWidth * 0.15);

      if (finalOffset < -threshold && currentIndex < maxIndex) {
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
      } else if (finalOffset > threshold && currentIndex > 0) {
        setCurrentIndex(prev => Math.max(0, prev - 1));
      }

      setDragOffset(0);
      currentDragOffsetRef.current = 0;

      // Beri sedikit jeda agar click event tidak langsung terpicu setelah drag
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 100);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [isDragging, currentIndex, maxIndex]);

  const handleCardClick = (globalIdx) => {
    if (hasDraggedRef.current) return;
    if (onSelectPhoto) {
      onSelectPhoto(globalIdx);
    }
  };

  const dragProgress = (isDragging && viewportRef.current)
    ? (-dragOffset / viewportRef.current.offsetWidth)
    : 0;
  const visualIndex = Math.max(0, Math.min(maxIndex, currentIndex + dragProgress));

  return (
    <section id="galeri" className="bento-gallery-section" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="editorial-container">
        {/* Section Header dengan Kontrol Slider */}
        <div className="bento-gallery-header">
          <div className="bento-header-left">
            <div className="editorial-eyebrow-pill">
              [ DOKUMENTASI KEGIATAN ]
            </div>
            <h2 className="editorial-title">
              Potret Perjuangan &amp; Kebersamaan Mahasiswa Bersama Warga
            </h2>
          </div>
          <div className="bento-header-right">
            {/* Slider Navigation Controls */}
            {clusters.length > 1 && (
              <div className="bento-slider-actions">
                <div className="bento-slider-counter">
                  <span>Koleksi <strong>{currentIndex + 1}</strong> dari {clusters.length}</span>
                </div>
                <div className="bento-slider-nav-btns">
                  <button
                    type="button"
                    className="bento-nav-btn"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    aria-label="Kluster dokumentasi sebelumnya"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="bento-nav-btn"
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    aria-label="Kluster dokumentasi berikutnya"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Viewport & Horizontal Slider Track */}
        <div
          ref={viewportRef}
          className={`bento-gallery-viewport ${isDragging ? 'is-dragging' : ''}`}
          onPointerDown={handlePointerDown}
        >
          <div
            className="bento-gallery-track"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {clusters.map((cluster, clusterIdx) => (
              <div key={`bento-cluster-${clusterIdx}`} className="bento-cluster-slide">
                <div className="bento-3col-grid">
                  {/* Column 1: Tall (top), Short (bottom) */}
                  <div className="bento-col bento-col-1">
                    {cluster[0] && (
                      <div
                        className="bento-card bento-card-tall"
                        onClick={() => handleCardClick(clusterIdx * 6 + 0)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(clusterIdx * 6 + 0)}
                      >
                        <ImagePlaceholder
                          src={cluster[0].src}
                          alt={cluster[0].title}
                          label={cluster[0].title}
                          className="bento-img"
                          style={{ height: '100%', width: '100%' }}
                        />
                        <div className="bento-card-gradient-overlay" />
                        <div className="bento-hover-indicator">
                          <Eye size={18} />
                        </div>
                      </div>
                    )}

                    {cluster[1] && (
                      <div
                        className="bento-card bento-card-short"
                        onClick={() => handleCardClick(clusterIdx * 6 + 1)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(clusterIdx * 6 + 1)}
                      >
                        <ImagePlaceholder
                          src={cluster[1].src}
                          alt={cluster[1].title}
                          label={cluster[1].title}
                          className="bento-img"
                          style={{ height: '100%', width: '100%' }}
                        />
                        <div className="bento-card-gradient-overlay-subtle" />
                        <div className="bento-hover-indicator">
                          <Eye size={16} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Column 2: Short (top), Tall (bottom) */}
                  <div className="bento-col bento-col-2">
                    {cluster[2] && (
                      <div
                        className="bento-card bento-card-short"
                        onClick={() => handleCardClick(clusterIdx * 6 + 2)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(clusterIdx * 6 + 2)}
                      >
                        <ImagePlaceholder
                          src={cluster[2].src}
                          alt={cluster[2].title}
                          label={cluster[2].title}
                          className="bento-img"
                          style={{ height: '100%', width: '100%' }}
                        />
                        <div className="bento-card-gradient-overlay-subtle" />
                        <div className="bento-hover-indicator">
                          <Eye size={16} />
                        </div>
                      </div>
                    )}

                    {cluster[3] && (
                      <div
                        className="bento-card bento-card-tall"
                        onClick={() => handleCardClick(clusterIdx * 6 + 3)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(clusterIdx * 6 + 3)}
                      >
                        <ImagePlaceholder
                          src={cluster[3].src}
                          alt={cluster[3].title}
                          label={cluster[3].title}
                          className="bento-img"
                          style={{ height: '100%', width: '100%' }}
                        />
                        <div className="bento-card-gradient-overlay" />
                        <div className="bento-hover-indicator">
                          <Eye size={18} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Column 3: Tall (top), Short (bottom) */}
                  <div className="bento-col bento-col-3">
                    {cluster[4] && (
                      <div
                        className="bento-card bento-card-tall"
                        onClick={() => handleCardClick(clusterIdx * 6 + 4)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(clusterIdx * 6 + 4)}
                      >
                        <ImagePlaceholder
                          src={cluster[4].src}
                          alt={cluster[4].title}
                          label={cluster[4].title}
                          className="bento-img"
                          style={{ height: '100%', width: '100%' }}
                        />
                        <div className="bento-card-gradient-overlay" />
                        <div className="bento-hover-indicator">
                          <Eye size={18} />
                        </div>
                      </div>
                    )}

                    {cluster[5] && (
                      <div
                        className="bento-card bento-card-short"
                        onClick={() => handleCardClick(clusterIdx * 6 + 5)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick(clusterIdx * 6 + 5)}
                      >
                        <ImagePlaceholder
                          src={cluster[5].src}
                          alt={cluster[5].title}
                          label={cluster[5].title}
                          className="bento-img"
                          style={{ height: '100%', width: '100%' }}
                        />
                        <div className="bento-card-gradient-overlay-subtle" />
                        <div className="bento-hover-indicator">
                          <Eye size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots Pagination Indicator (Sama dengan Section Luaran) */}
        {clusters.length > 1 && (
          <div className="deliverables-carousel-dots-wrapper bento-carousel-dots-wrapper">
            <div 
              className="deliverables-carousel-dots-track bento-carousel-dots-track"
              role="tablist"
              aria-label="Pilih kluster dokumentasi kegiatan"
            >
              {clusters.map((_, idx) => (
                <button
                  key={`bento-dot-${idx}`}
                  type="button"
                  className={`deliverables-carousel-dot bento-carousel-dot ${
                    idx === currentIndex ? 'is-active-card is-active-cluster' : ''
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Buka koleksi dokumentasi ke-${idx + 1}`}
                  aria-selected={idx === currentIndex}
                />
              ))}
              <div 
                className="deliverables-carousel-active-pill bento-carousel-active-pill"
                style={{
                  width: '8px',
                  transform: `translateX(${visualIndex * 16}px)`,
                  transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
