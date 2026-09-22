import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Shield, CheckCircle2, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Kolom Identitas & Program */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <h3 className="footer-brand-title">IN WEST TAMP</h3>
              <span className="footer-brand-sub">Integrated Wellness-Tourism Area Tampirkulon</span>
            </div>
            
            <p className="footer-desc">
              Platform showcase dan sistem informasi hasil program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) 
              Himpunan Mahasiswa Gizi (Himagi) Universitas Tidar tahun 2025. Mengintegrasikan keselamatan wisata air, 
              ruang wellness TOGA, edukasi olahan lele, dan kelembagaan POKDARWIS mandiri.
            </p>

            <div className="footer-meta-tags">
              <span className="footer-tag">
                <CheckCircle2 size={14} style={{ color: 'var(--primary-lighter)' }} />
                Desa Binaan Untidar 2025
              </span>
              <span className="footer-tag">
                <CheckCircle2 size={14} style={{ color: 'var(--primary-lighter)' }} />
                SK POKDARWIS No. 188.45/14/KEP/2025
              </span>
            </div>
          </div>

          {/* Kolom Tautan Cepat */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigasi Platform</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Beranda Utama</Link></li>
              <li><Link to="/tentang">Profil Tim &amp; PPK Ormawa</Link></li>
              <li><Link to="/program">Capaian 4 Pilar Program</Link></li>
              <li><Link to="/luaran">Katalog Luaran &amp; Dokumen SK</Link></li>
              <li><Link to="/tur-360">Hub Tur Virtual 360°</Link></li>
              <li><Link to="/dokumentasi">Galeri Dokumentasi Lapangan</Link></li>
              <li><Link to="/kontak">Buku Tamu &amp; Masukan Juri</Link></li>
              <li>
                <Link to="/admin" style={{ color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Lock size={12} />
                  <span>Panel Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak & Lokasi */}
          <div className="footer-col">
            <h4 className="footer-heading">Sekretariat Pelaksana</h4>
            <div className="footer-contact-info">
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                <span>Basecamp Westtamp Tubing &amp; Balai Desa Tampirkulon, Kec. Candimulyo, Kab. Magelang, Jawa Tengah 56191</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span>himagi@untidar.ac.id</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span>Standar K3 Terverifikasi Basarnas &amp; PMI</span>
              </p>
            </div>
          </div>
        </div>

        {/* Kolom Logo Mitra Resmi */}
        <div className="footer-partners-bar" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', display: 'block', marginBottom: '1.25rem' }}>
            Mitra Kolaborasi Program PPK Ormawa 2025
          </span>
          <div className="partners-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <img src="/images/logos/untidar.png" alt="Universitas Tidar" title="Universitas Tidar" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/blu.png" alt="BLU Unggul Berbudaya" title="BLU" style={{ height: '36px', objectFit: 'contain' }} />
            <img src="/images/logos/pemkab-magelang.png" alt="Pemkab Magelang" title="Pemerintah Kabupaten Magelang" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/desa-wisata.png" alt="Desa Wisata Tampirkulon" title="Desa Wisata Tampirkulon" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/basarnas.png" alt="Basarnas SAR" title="Basarnas Kantor SAR Semarang" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/pmi.png" alt="PMI Kab Magelang" title="Palang Merah Indonesia" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/puskesmas.png" alt="Puskesmas Candimulyo" title="Puskesmas Candimulyo" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/posyandu.png" alt="Posyandu ILP" title="Posyandu ILP Tampirkulon" style={{ height: '40px', objectFit: 'contain' }} />
            <img src="/images/logos/westtamp-tubing.png" alt="Westtamp Tubing" title="Westtamp Tubing" style={{ height: '40px', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom" style={{ marginTop: '2.5rem' }}>
          <div>
            &copy; 2025 PPK Ormawa Himagi Universitas Tidar. Hak Cipta Dilindungi.
          </div>
          <div>
            Sistem Informasi &amp; Hub Tur Virtual Terpadu Desa Wisata Tampirkulon
          </div>
        </div>

        {/* Massive Watermark Outline */}
        <div className="footer-watermark" aria-hidden="true">
          IN WEST TAMP
        </div>
      </div>
    </footer>
  );
}
