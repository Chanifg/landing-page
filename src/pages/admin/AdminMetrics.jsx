import React, { useState, useEffect } from 'react';
import { BarChart3, Save, Edit3, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { getMetrics } from '../../lib/supabase.js';

export default function AdminMetrics() {
  const [metrics, setMetrics] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ target_value: '', label: '', description: '' });
  const [saveNotice, setSaveNotice] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getMetrics();
      setMetrics(data || []);
    }
    load();
  }, []);

  const handleStartEdit = (metric) => {
    setEditingId(metric.id);
    setEditForm({
      target_value: metric.target_value,
      label: metric.label,
      description: metric.description
    });
    setSaveNotice(null);
  };

  const handleSave = (id) => {
    setMetrics(prev => prev.map(m => {
      if (m.id === id) {
        return {
          ...m,
          target_value: Number(editForm.target_value),
          label: editForm.label,
          description: editForm.description
        };
      }
      return m;
    }));
    setEditingId(null);
    setSaveNotice('Data metrik berhasil diperbarui secara lokal & tersimpan.');
  };

  return (
    <AdminLayout title="Kelola Angka Capaian Program">
      {saveNotice && (
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
          <span>{saveNotice}</span>
        </div>
      )}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID Metrik</th>
              <th>Nilai Target</th>
              <th>Akhiran</th>
              <th>Nama Label</th>
              <th>Keterangan Capaian</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((m) => {
              const isEditing = editingId === m.id;
              return (
                <tr key={m.id}>
                  <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.id}</td>
                  <td>
                    {isEditing ? (
                      <input 
                        type="number" 
                        className="form-input" 
                        value={editForm.target_value} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, target_value: e.target.value }))}
                        style={{ width: '90px', padding: '0.4rem 0.6rem' }}
                      />
                    ) : (
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--accent)' }}>
                        {m.target_value}
                      </span>
                    )}
                  </td>
                  <td>{m.suffix || '-'}</td>
                  <td>
                    {isEditing ? (
                      <input 
                        type="text" 
                        className="form-input" 
                        value={editForm.label} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, label: e.target.value }))}
                        style={{ minWidth: '160px', padding: '0.4rem 0.6rem' }}
                      />
                    ) : (
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{m.label}</span>
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <input 
                        type="text" 
                        className="form-input" 
                        value={editForm.description} 
                        onChange={(e) => setEditForm(prev => ({ ...prev, description: e.target.value }))}
                        style={{ minWidth: '240px', padding: '0.4rem 0.6rem' }}
                      />
                    ) : (
                      <span>{m.description}</span>
                    )}
                  </td>
                  <td>
                    {isEditing ? (
                      <button 
                        className="btn btn-primary" 
                        onClick={() => handleSave(m.id)}
                        style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Save size={14} />
                        <span>Simpan</span>
                      </button>
                    ) : (
                      <button 
                        className="btn-icon" 
                        onClick={() => handleStartEdit(m)}
                        title="Ubah Nilai Metrik"
                      >
                        <Edit3 size={15} />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
