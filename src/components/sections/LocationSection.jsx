import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Compass } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="lokasi" className="section" style={{ background: 'var(--bg-section-alt)', padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <Compass size={14} />
            <span>Akses Wilayah &amp; Narahubung</span>
          </div>
          <h2 className="section-title">Panduan Lokasi Wisata &amp; Kontak Resmi</h2>
          <p className="section-subtitle">
            Rute perjalanan menuju kawasan IN WEST TAMP Desa Tampirkulon serta kontak tim pengabdi untuk keperluan verifikasi juri atau informasi wisata.
          </p>
        </div>

        <div className="content-grid-2" style={{ gap: '2rem' }}>
          {/* Travel Guide Card */}
          <div className="content-card" style={{ padding: '2rem' }}>
            <span className="section-badge" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              PANDUAN RUTE PERJALANAN
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: 800 }}>
              Menuju Basecamp Westtamp Tubing
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>
                    Alamat Sekretariat
                  </strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    Dusun Tampirkulon I, Desa Tampirkulon, Kec. Candimulyo, Kab. Magelang, Jawa Tengah 56191
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>
                    Jam Operasional Wisata
                  </strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    Senin s.d. Minggu: 08.00 s.d. 16.00 WIB (Kondisional sesuai pantauan arus sungai)
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Car size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>
                    Aksesibilitas Kendaraan
                  </strong>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    Dapat diakses oleh kendaraan roda 2, roda 4, dan minibus/elf wisata. Tersedia area parkir luas di dekat basecamp start tubing.
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a 
                href="https://maps.google.com/?q=Tampirkulon+Candimulyo+Magelang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
              >
                <MapPin size={16} />
                <span>Buka Petunjuk Arah di Google Maps</span>
              </a>
            </div>
          </div>

          {/* Official Contacts & Verification Info Card */}
          <div className="content-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <span className="section-badge" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              NARAHUBUNG &amp; VERIFIKASI RESMI
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: 800 }}>
              Sekretariat PPK Ormawa Himagi Untidar
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Untuk konfirmasi verifikasi lapangan juri, kerjasama penelitian akademik, atau reservasi paket wisata edukasi kesehatan dan susur sungai.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
              <div style={{ 
                padding: '1.25rem', 
                background: 'var(--surface)', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Phone size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>
                    Koordinator Pelaksana (WhatsApp)
                  </strong>
                  <a 
                    href="https://wa.me/6281234567890?text=Halo%20Tim%20PPK%20Ormawa%20Himagi%20Untidar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}
                  >
                    +62 812-3456-7890 (Rian Pratama - Ketua Tim)
                  </a>
                </div>
              </div>

              <div style={{ 
                padding: '1.25rem', 
                background: 'var(--surface)', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Mail size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>
                    Email Resmi Ormawa Pengusul
                  </strong>
                  <a 
                    href="mailto:himagi@untidar.ac.id" 
                    style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}
                  >
                    himagi@untidar.ac.id
                  </a>
                </div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--primary)', marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'block' }}>
                  <strong>Lembaga Penaung:</strong> Universitas Tidar (Untidar) &amp; Direktorat Belmawa Kemendikbudristek RI.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
