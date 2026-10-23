import React, { useState } from 'react';

/**
 * ImageWithFallback / ImagePlaceholder
 * Komponen gambar pintar yang menampilkan placeholder SVG responsif
 * berestetika warm ivory / sand jika src tidak tersedia atau gagal dimuat.
 */
export default function ImagePlaceholder({
  src,
  alt = 'Dokumentasi IN WEST TAMP',
  label = 'Aset Dokumentasi',
  aspectRatio = '16/9',
  className = '',
  style = {},
  onClick = null
}) {
  const [hasError, setHasError] = useState(false);

  // Jika src valid dan belum error, coba tampilkan img
  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...style
        }}
        onClick={onClick}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    );
  }

  // Fallback SVG Placeholder inline
  return (
    <div
      className={`placeholder-container ${className}`}
      style={{
        width: '100%',
        ...(style && style.height ? { height: '100%' } : { aspectRatio: aspectRatio || '16/9' }),
        backgroundColor: '#EAE6DC',
        color: '#758276',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        borderRadius: 'inherit',
        position: 'relative',
        userSelect: 'none',
        border: '1px dashed #D6D0C2',
        ...style
      }}
      onClick={onClick}
      role={onClick ? 'button' : 'img'}
      aria-label={alt || label}
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.65, marginBottom: '0.5rem' }}
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
      <span
        style={{
          fontSize: '0.78125rem',
          fontWeight: 700,
          color: '#475449',
          textAlign: 'center',
          letterSpacing: '0.02em',
          maxWidth: '85%'
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: '0.6875rem',
          color: '#8A978B',
          marginTop: '0.25rem'
        }}
      >
        IN WEST TAMP
      </span>
    </div>
  );
}
