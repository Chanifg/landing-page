import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle2, XCircle, Trash2, Star, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { getGuestbook } from '../../lib/supabase.js';

export default function AdminGuestbook() {
  const [guestbook, setGuestbook] = useState([]);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getGuestbook();
      setGuestbook(data || []);
    }
    load();
  }, []);

  const handleToggleApprove = (id) => {
    setGuestbook(prev => prev.map(g => {
      if (g.id === id) {
        return { ...g, is_approved: !g.is_approved };
      }
      return g;
    }));
    setNotice('Status persetujuan ulasan berhasil diubah.');
  };

  const handleDelete = (id) => {
    if (confirm('Hapus ulasan tamu ini secara permanen?')) {
      setGuestbook(prev => prev.filter(g => g.id !== id));
      setNotice('Ulasan telah dihapus dari daftar.');
    }
  };

  return (
    <AdminLayout title="Moderasi Ulasan Masuk Buku Tamu">
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
        Verifikasi pesan masukan, penilaian juri PPK Ormawa, dan ulasan wisatawan yang tampil di situs publik.
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
              <th>Pengirim</th>
              <th>Kategori / Lembaga</th>
              <th>Rating</th>
              <th>Isi Ulasan / Catatan</th>
              <th>Status Tayang</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {guestbook.map((g) => (
              <tr key={g.id}>
                <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{g.sender_name}</td>
                <td>
                  <span className="badge badge-category" style={{ fontSize: '0.6875rem' }}>
                    {g.sender_role}
                  </span>
                  {g.sender_institution && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {g.sender_institution}
                    </div>
                  )}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(g.rating || 5)].map((_, idx) => (
                      <Star key={idx} size={12} fill="var(--accent)" stroke="none" />
                    ))}
                  </div>
                </td>
                <td style={{ maxWidth: '320px', fontSize: '0.8125rem' }}>
                  "{g.message}"
                </td>
                <td>
                  <span className={`status-badge ${g.is_approved !== false ? 'success' : 'warning'}`}>
                    {g.is_approved !== false ? 'Disetujui' : 'Tertunda'}
                  </span>
                </td>
                <td>
                  <div className="action-btn-group">
                    <button 
                      className="btn-icon" 
                      onClick={() => handleToggleApprove(g.id)}
                      title={g.is_approved !== false ? 'Batalkan Persetujuan' : 'Setujui Tayang'}
                    >
                      {g.is_approved !== false ? <XCircle size={16} /> : <CheckCircle2 size={16} />}
                    </button>
                    <button 
                      className="btn-icon danger" 
                      onClick={() => handleDelete(g.id)}
                      title="Hapus Ulasan"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
