import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
      {/* Giant Background Watermark Behind Content */}
      <div className="dark-footer-watermark-bg" aria-hidden="true">
        IN WEST TAMP
      </div>

      <div className="editorial-container">
        {/* 3-Column Grid */}
        <div className="dark-footer-grid">
          {/* Column 1: Brand & Description */}
          <div className="dark-footer-col brand-col">
            <div className="footer-brand-title-wrap">
              <img
                src="/images/logos/ppk-ormawa-footer.png"
                alt="PPK Ormawa Himagi Untidar 2026"
                className="footer-brand-logo-img"
              />
            </div>
            <p className="dark-footer-desc">
              Integrated Wellness-Tourism Area Tampirkulon. Program pengabdian masyarakat oleh PPK Ormawa Himpunan Mahasiswa Gizi (HIMAGI) Fakultas Pertanian Universitas Tidar 2025.
            </p>
            <div className="footer-fund-row">
              <span className="footer-fund-label">Didanai oleh:</span>
              <span className="footer-fund-badge">Kemendikbudristek RI</span>
            </div>
          </div>

          {/* Column 2: Eksplorasi Halaman */}
          <div className="dark-footer-col">
            <h4 className="dark-footer-heading">EKSPLORASI HALAMAN</h4>
            <ul className="dark-footer-links">
              <li><a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')}>Profil &amp; Latar Belakang</a></li>
              <li><a href="#pilar" onClick={(e) => handleScroll(e, 'pilar')}>4 Pilar Inovasi Terpadu</a></li>
              <li><a href="#tur-360" onClick={(e) => handleScroll(e, 'tur-360')}>Tur Virtual 7 Titik Rute</a></li>
              <li><a href="#galeri" onClick={(e) => handleScroll(e, 'galeri')}>Dokumentasi &amp; Mitra</a></li>
              <li><a href="#tim" onClick={(e) => handleScroll(e, 'tim')}>Susunan Tim Pelaksana</a></li>
            </ul>
          </div>

          {/* Column 3: Instansi Pendamping Resmi */}
          <div className="dark-footer-col">
            <h4 className="dark-footer-heading">INSTANSI PENDAMPING RESMI</h4>
            <ul className="dark-footer-partners-list">
              <li>
                <CheckCircle2 size={15} className="partner-check-icon" />
                <span>Basarnas Kantor SAR Semarang</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="partner-check-icon" />
                <span>Palang Merah Indonesia (PMI) Kab. Magelang</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="partner-check-icon" />
                <span>Puskesmas Candimulyo Kab. Magelang</span>
              </li>
              <li>
                <CheckCircle2 size={15} className="partner-check-icon" />
                <span>Pemerintah Desa &amp; POKDARWIS Tampirkulon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="dark-footer-bottom-row">
          <div className="dark-footer-bottom-left">
            <div className="footer-tagline-title">Sehat Jiwa Raganya, Berdaya Ekonominya!</div>
            <div className="footer-tagline-sub">Desa Tampirkulon, Candimulyo, Magelang</div>
          </div>
          <div className="dark-footer-bottom-right">
            © 2025 PPK Ormawa HIMAGI Universitas Tidar. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
