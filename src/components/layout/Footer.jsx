import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Kolom Identitas & Program */}
          <div className="footer-brand">
            <h3>IN WEST TAMP</h3>
            <p>
              Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) Himpunan Mahasiswa Gizi (Himagi), 
              Fakultas Ilmu Kesehatan, Universitas Tidar 2025. Mengintegrasikan keselamatan wisata air Westtamp Tubing, 
              ruang wellness TOGA, edukasi olahan lele, dan kelembagaan POKDARWIS resmi di Desa Tampirkulon.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-dusun">
                Kategori: Poster Paling Kreatif
              </span>
              <span className="badge badge-category">
                Desa Tampirkulon, Magelang
              </span>
              <span className="badge" style={{ background: 'rgba(48, 65, 21, 0.08)', color: 'var(--primary)', border: '1px solid rgba(48, 65, 21, 0.2)' }}>
                SK No. 188.45/14/KEP/2025
              </span>
            </div>
          </div>

          {/* Kolom Tautan & Pelaksana */}
          <div className="footer-credits">
            <h4>Navigasi &amp; Pengelola:</h4>
            <ul>
              <li>• <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Beranda Utama</a></li>
              <li>• <a href="#tur-360" onClick={(e) => handleScroll(e, 'tur-360')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Hub Tur Virtual 360°</a></li>
              <li>• <a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Profil &amp; Latar Belakang Desa</a></li>
              <li>• <a href="#pilar" onClick={(e) => handleScroll(e, 'pilar')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Capaian 4 Pilar &amp; Standar K3</a></li>
              <li>• <a href="#luaran" onClick={(e) => handleScroll(e, 'luaran')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Katalog Luaran &amp; Dokumen SK</a></li>
              <li>• <a href="#galeri" onClick={(e) => handleScroll(e, 'galeri')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Galeri Dokumentasi Lapangan</a></li>
              <li>• <a href="#tim" onClick={(e) => handleScroll(e, 'tim')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Susunan 15 Mahasiswa Pelaksana</a></li>
              <li>• <a href="#lokasi" onClick={(e) => handleScroll(e, 'lokasi')} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Akses Wilayah &amp; Narahubung</a></li>
              <li style={{ marginTop: '0.5rem' }}>
                • <Link to="/admin" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Lock size={12} />
                  <span>Panel Admin Koordinator</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2025 PPK Ormawa Himagi Untidar. Hak Cipta Dilindungi.
          </div>
          <div>
            Sistem Informasi &amp; Hub Tur Virtual Terpadu Desa Wisata Tampirkulon
          </div>
        </div>

        {/* Giant Watermark Footer (DESIGN.md Section 5G) */}
        <div className="footer-watermark" aria-hidden="true">
          IN WEST TAMP
        </div>
      </div>
    </footer>
  );
}
