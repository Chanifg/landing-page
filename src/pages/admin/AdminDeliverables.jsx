import React, { useState, useEffect } from 'react';
import { FileText, Plus, CheckCircle, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { getDeliverables } from '../../lib/supabase.js';

export default function AdminDeliverables() {
  const [deliverables, setDeliverables] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDoc, setNewDoc] = useState({
    title: '',
    category: 'wajib',
    type: 'Laporan Resmi',
    description: ''
  });
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getDeliverables();
      setDeliverables(data || []);
    }
    load();
  }, []);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newDoc.title.trim()) return;

    const created = {
      id: `deliv-${Date.now()}`,
      ...newDoc,
      file_url: '#'
    };

    setDeliverables(prev => [created, ...prev]);
    setShowAddModal(false);
    setNotice('Luaran berkas baru berhasil ditambahkan.');
    setNewDoc({ title: '', category: 'wajib', type: 'Laporan Resmi', description: '' });
  };

  const handleDelete = (id) => {
    if (confirm('Hapus arsip luaran ini?')) {
      setDeliverables(prev => prev.filter(d => d.id !== id));
      setNotice('Arsip luaran telah dihapus.');
    }
  };

  return (
    <AdminLayout title="Kelola Katalog Luaran &amp; Dokumen SK">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Arsip berkas legalitas, SK Kepala Desa, buku panduan K3, dan laporan akhir PPK Ormawa.
        </p>

        <button 
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
          style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <Plus size={16} />
          <span>Tambah Berkas Baru</span>
        </button>
      </div>

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
              <th>Judul Luaran / Dokumen</th>
              <th>Kategori</th>
              <th>Jenis Berkas</th>
              <th>Deskripsi &amp; Nomor SK</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {deliverables.map((d) => (
              <tr key={d.id}>
                <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{d.title}</td>
                <td>
                  <span className={`badge ${d.category === 'wajib' ? 'badge-dusun' : 'badge-category'}`} style={{ fontSize: '0.75rem' }}>
                    {d.category === 'wajib' ? 'Wajib' : 'Tambahan'}
                  </span>
                </td>
                <td>{d.type}</td>
                <td style={{ maxWidth: '350px', fontSize: '0.8125rem' }}>{d.description}</td>
                <td>
                  <button 
                    className="btn-icon danger" 
                    onClick={() => handleDelete(d.id)}
                    title="Hapus Berkas"
                  >
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add Deliverable */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)} role="dialog" aria-modal="true">
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px' }}>
            <div className="modal-header">
              <h3 className="modal-title">Tambah Berkas Luaran</h3>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <form onSubmit={handleAddSubmit} className="modal-body">
              <div className="form-group">
                <label className="form-label">Nama Dokumen / Luaran</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Contoh: Modul Standardisasi P3K Wisata Air" 
                  value={newDoc.title}
                  onChange={(e) => setNewDoc(prev => ({ ...prev, title: e.target.value }))}
                  required 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Kategori</label>
                  <select 
                    className="form-select"
                    value={newDoc.category}
                    onChange={(e) => setNewDoc(prev => ({ ...prev, category: e.target.value }))}
                  >
                    <option value="wajib">Luaran Wajib Belmawa</option>
                    <option value="tambahan">Luaran Tambahan</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Jenis Berkas</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="SK Resmi / Buku Saku / HKI"
                    value={newDoc.type}
                    onChange={(e) => setNewDoc(prev => ({ ...prev, type: e.target.value }))}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Keterangan &amp; Nomor Pengesahan</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Nomor SK, tanggal penetapan, atau deskripsi..." 
                  value={newDoc.description}
                  onChange={(e) => setNewDoc(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowAddModal(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan Berkas</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
