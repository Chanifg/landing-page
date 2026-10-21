import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle, Edit3, Save } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { getDestinations } from '../../lib/supabase.js';

export default function AdminSpots360() {
  const [spots, setSpots] = useState([]);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getDestinations();
      setSpots(data || []);
    }
    load();
  }, []);

  const handleToggleAvailability = (id) => {
    setSpots(prev => prev.map(s => {
      if (s.id === id) {
        const updated = { ...s, is_available: !s.is_available };
        return updated;
      }
      return s;
    }));
    setNotice('Status ketersediaan panorama berhasil diubah.');
  };

  return (
    <AdminLayout title="Kelola 7 Titik Rute Wisata 360°">
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
        Pengaturan visual panorama, status kesiapan spot, dan koordinat peta kawasan Desa Tampirkulon.
      </p>

      {notice && (
        <div style={{
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-sm)',
          background: 'rgba(82, 183, 136, 0.2)',
          border: '1px solid rgba(82, 183, 136, 0.4)',
          color: 'var(--primary-lighter)',
          fontSize: '0.875rem',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <CheckCircle size={16} />
          <span>{notice}</span>
        </div>
      )}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Urutan</th>
              <th>Thumbnail</th>
              <th>Nama Destinasi Wisata</th>
              <th>Kategori &amp; Dusun</th>
              <th>Koordinat Peta (X, Y)</th>
              <th>Status Kesiapan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((s, idx) => (
              <tr key={s.id}>
                <td style={{ fontWeight: 800, color: 'var(--accent)' }}>SPOT {idx + 1}</td>
                <td>
                  <img 
                    src={s.thumbnail_url} 
                    alt={s.name} 
                    style={{ width: '56px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} 
                  />
                </td>
                <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{s.name}</td>
                <td>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{s.category}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.dusun}</div>
                </td>
                <td>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    X: {s.map_coord_x}%, Y: {s.map_coord_y}%
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${s.is_available ? 'success' : 'warning'}`}>
                    {s.is_available ? 'Tersedia Siap Tayang' : 'Pratinjau Lapangan'}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleToggleAvailability(s.id)}
                    style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
                  >
                    Ganti Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
