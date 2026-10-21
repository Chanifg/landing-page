import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, ExternalLink } from 'lucide-react';

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
    <footer className="editorial-dark-footer">
      <div className="editorial-container">
        {/* 3-Column Grid */}
        <div className="dark-footer-grid">
          {/* Column 1: Brand & Program */}
          <div className="dark-footer-col brand-col">
            <div className="footer-brand-title-wrap">
              <img
                src="/images/logos/ppk-ormawa-himagi.png"
                alt="Logo Himagi Untidar"
                className="footer-brand-logo"
                onError={(e) => {
                  e.currentTarget.src = '/images/logos/untidar.png';
                }}
              />
              <div>
                <h3 className="footer-brand-heading">IN WEST TAMP</h3>
                <span className="footer-brand-sub">PPK ORMAWA HIMAGI UNTIDAR 2025</span>
              </div>
            </div>
            <p className="dark-footer-desc">
              Integrated Wellness-Tourism Area Tampirkulon. Program Penguatan Kapasitas Organisasi Kemahasiswaan Himpunan Mahasiswa Gizi, Fakultas Ilmu Kesehatan, Universitas Tidar di Desa Tampirkulon, Candimulyo, Magelang.
            </p>
            <div className="footer-sk-badge">
              <ShieldCheck size={14} />
              <span>SK Kades No. 188.45/14/KEP/2025</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="dark-footer-col">
            <h4 className="dark-footer-heading">Navigasi Utama</h4>
            <ul className="dark-footer-links">
              <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Beranda Utama</a></li>
              <li><a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')}>Latar Belakang &amp; Potensi</a></li>
              <li><a href="#pilar" onClick={(e) => handleScroll(e, 'pilar')}>4 Pilar Intervensi</a></li>
              <li><a href="#tur-360" onClick={(e) => handleScroll(e, 'tur-360')}>Tur Virtual 360°</a></li>
              <li><a href="#galeri" onClick={(e) => handleScroll(e, 'galeri')}>Dokumentasi Kegiatan</a></li>
              <li><a href="#tim" onClick={(e) => handleScroll(e, 'tim')}>15 Mahasiswa Pelaksana</a></li>
              <li className="admin-link-li">
                <Link to="/admin" className="dark-footer-admin-link">
                  <Lock size={13} />
                  <span>Panel Admin Koordinator</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Mitra & Dukungan Resmi */}
          <div className="dark-footer-col">
            <h4 className="dark-footer-heading">Mitra Kolaborasi</h4>
            <ul className="dark-footer-partners-list">
              <li>• Ditjen Diktiristek Kemendikbudristek (Belmawa)</li>
              <li>• Universitas Tidar (Fakultas Ilmu Kesehatan)</li>
              <li>• Pemerintah Desa Tampirkulon, Candimulyo</li>
              <li>• Basarnas Kantor SAR Magelang (Standarisasi K3)</li>
              <li>• Palang Merah Indonesia / PMI (Pelatihan P3K)</li>
              <li>• Puskesmas Candimulyo (Health Screening Day)</li>
              <li>• POKDARWIS &amp; Warga Desa Wisata Tampirkulon</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="dark-footer-bottom-row">
          <div>
            &copy; 2025–2026 PPK Ormawa Himagi Universitas Tidar. Hak Cipta Dilindungi.
          </div>
          <div>
            Integrated Wellness-Tourism Area Tampirkulon, Candimulyo, Magelang
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className="dark-footer-watermark" aria-hidden="true">
          IN WEST TAMP
        </div>
      </div>
    </footer>
  );
}
