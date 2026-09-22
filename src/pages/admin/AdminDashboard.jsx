import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Image, 
  FileText, 
  Compass, 
  MessageSquare, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { 
  getMetrics, 
  getDocumentation, 
  getDeliverables, 
  getDestinations, 
  getGuestbook,
  getPillars 
} from '../../lib/supabase.js';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    metricsCount: 0,
    docCount: 0,
    delivCount: 0,
    spotsCount: 0,
    guestbookCount: 0,
    pillarsCount: 0
  });

  useEffect(() => {
    async function loadStats() {
      const [m, d, del, s, g, p] = await Promise.all([
        getMetrics(),
        getDocumentation(),
        getDeliverables(),
        getDestinations(),
        getGuestbook(),
        getPillars()
      ]);
      setStats({
        metricsCount: m?.length || 0,
        docCount: d?.length || 0,
        delivCount: del?.length || 0,
        spotsCount: s?.length || 0,
        guestbookCount: g?.length || 0,
        pillarsCount: p?.length || 0
      });
    }
    loadStats();
  }, []);

  return (
    <AdminLayout title="Ringkasan Dashboard Pengelolaan">
      {/* Stats Cards Row */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="admin-stat-label">Titik Destinasi 360°</span>
          <span className="admin-stat-val">{stats.spotsCount}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Spot Terpetakan di Desa</span>
        </div>

        <div className="admin-stat-card">
          <span className="admin-stat-label">Galeri Dokumentasi</span>
          <span className="admin-stat-val">{stats.docCount}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Foto Kegiatan Lapangan</span>
        </div>

        <div className="admin-stat-card">
          <span className="admin-stat-label">Katalog Luaran &amp; SK</span>
          <span className="admin-stat-val">{stats.delivCount}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Luaran Wajib &amp; Tambahan</span>
        </div>

        <div className="admin-stat-card">
          <span className="admin-stat-label">Ulasan Buku Tamu</span>
          <span className="admin-stat-val">{stats.guestbookCount}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Masukan Juri &amp; Pengunjung</span>
        </div>
      </div>

      {/* Quick Action Navigation Panels */}
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          Akses Cepat Pengelolaan Data
        </h2>

        <div className="content-grid-3">
          <Link to="/admin/metrik" className="content-card" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <BarChart3 size={24} style={{ color: 'var(--accent)' }} />
              <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700 }}>Kelola Angka Capaian</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Perbarui target kuantitatif dan angka capaian dampak 6 metrik utama program.
            </p>
          </Link>

          <Link to="/admin/dokumentasi" className="content-card" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Image size={24} style={{ color: 'var(--accent)' }} />
              <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700 }}>Kelola Galeri Foto</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Tambah dokumentasi baru, perbarui judul, dan filter pilar kegiatan lapangan.
            </p>
          </Link>

          <Link to="/admin/luaran" className="content-card" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FileText size={24} style={{ color: 'var(--accent)' }} />
              <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700 }}>Arsip Luaran &amp; SK</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Unggah dan kelola status berkas SK POKDARWIS, SOP K3 air, dan publikasi ilmiah.
            </p>
          </Link>

          <Link to="/admin/spots" className="content-card" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Compass size={24} style={{ color: 'var(--accent)' }} />
              <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700 }}>Pengaturan Rute 360°</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Atur status kesiapan panorama, koordinat pin pada peta desa, dan deskripsi spot.
            </p>
          </Link>

          <Link to="/admin/buku-tamu" className="content-card" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <MessageSquare size={24} style={{ color: 'var(--accent)' }} />
              <ArrowUpRight size={18} style={{ color: 'var(--text-muted)' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700 }}>Moderasi Ulasan Masuk</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Verifikasi masukan juri, kelola persetujuan ulasan yang tayang di situs publik.
            </p>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
