import React, { useState, useEffect } from 'react';
import { Image, Plus, Trash2, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { getDocumentation } from '../../lib/supabase.js';

export default function AdminDocumentation() {
  const [photos, setPhotos] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    pillar_id: 'tubing-care',
    activity_date: new Date().toISOString().split('T')[0],
    image_url: '/images/documentation/aksi-wisata-tubing.jpg',
    description: ''
  });
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getDocumentation();
      setPhotos(data || []);
    }
    load();
  }, []);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newPhoto.title.trim()) return;

    const created = {
      id: `doc-${Date.now()}`,
      ...newPhoto
    };

    setPhotos(prev => [created, ...prev]);
    setShowAddModal(false);
    setNotice('Foto dokumentasi baru berhasil ditambahkan.');
    setNewPhoto({
      title: '',
      pillar_id: 'tubing-care',
      activity_date: new Date().toISOString().split('T')[0],
      image_url: '/images/documentation/aksi-wisata-tubing.jpg',
      description: ''
    });
  };

  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus dokumentasi ini?')) {
      setPhotos(prev => prev.filter(p => p.id !== id));
      setNotice('Foto dokumentasi telah dihapus.');
    }
  };

  return (
    <AdminLayout title="Kelola Galeri Dokumentasi Kegiatan">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Daftar rekam dokumentasi kegiatan lapangan PPK Ormawa Tampirkulon.
        </p>

        <button 
          className="btn btn-primary"
          onClick={() => setShowAddModal(true)}
          style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <Plus size={16} />
          <span>Tambah Dokumentasi Baru</span>
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
              <th>Pratinjau</th>
              <th>Judul Kegiatan</th>
              <th>Pilar Program</th>
              <th>Tanggal Kegiatan</th>
              <th>Deskripsi Singkat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {photos.map((p) => (
              <tr key={p.id}>
                <td>
                  <img 
                    src={p.image_url} 
                    alt={p.title} 
                    style={{ width: '56px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-color)' }} 
                  />
                </td>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{p.title}</td>
                <td>
                  <span className="badge badge-category" style={{ fontSize: '0.75rem' }}>
                    {p.pillar_id}
                  </span>
                </td>
                <td>{p.activity_date || '-'}</td>
                <td style={{ maxWidth: '300px' }}>
                  <span style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontSize: '0.8125rem' }}>
                    {p.description}
                  </span>
                </td>
                <td>
                  <button 
                    className="btn-icon danger" 
                    onClick={() => handleDelete(p.id)}
                    title="Hapus Foto"
                  >
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add Photo */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)} role="dialog" aria-modal="true">
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px' }}>
            <div className="modal-header">
              <h3 className="modal-title">Tambah Dokumentasi Lapangan</h3>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <form onSubmit={handleAddSubmit} className="modal-body">
              <div className="form-group">
                <label className="form-label">Judul Dokumentasi</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Contoh: Praktik Penanganan P3K PMI" 
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, title: e.target.value }))}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Kategori Pilar Program</label>
                <select 
                  className="form-select"
                  value={newPhoto.pillar_id}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, pillar_id: e.target.value }))}
                >
                  <option value="tubing-care">Tubing Care (K3 &amp; Safety)</option>
                  <option value="integrated-ecosystem">West Integrated Ecosystem</option>
                  <option value="local-creative">Local Creative Innovation</option>
                  <option value="green-wellness">Green Wellness Space</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Tanggal Kegiatan</label>
                <input 
                  type="date" 
                  className="form-input" 
                  value={newPhoto.activity_date}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, activity_date: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">URL Foto Dokumentasi</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={newPhoto.image_url}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, image_url: e.target.value }))}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Deskripsi Singkat</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Jelaskan ringkasan aktivitas..." 
                  value={newPhoto.description}
                  onChange={(e) => setNewPhoto(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowAddModal(false)}>Batal</button>
                <button type="submit" className="btn btn-primary">Simpan Foto</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
