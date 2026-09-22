import React, { useState, useEffect } from 'react';
import { Award, FileText, CheckCircle, Download, Eye, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { getDeliverables } from '../lib/supabase.js';

export default function DeliverablesPage() {
  const [deliverables, setDeliverables] = useState([]);
  const [filterType, setFilterType] = useState('all'); // 'all', 'wajib', 'tambahan'
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getDeliverables();
      setDeliverables(data || []);
    }
    load();
  }, []);

  const filtered = deliverables.filter(d => {
    if (filterType === 'all') return true;
    return d.category === filterType;
  });

  return (
    <div className="deliverables-page">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container page-header-container">
          <div className="page-badge-category">
            <Award size={14} />
            <span>AKUNTABILITAS &amp; BUKTI HUKUM</span>
          </div>
          <h1 className="page-title">Katalog Luaran Wajib &amp; Tambahan</h1>
          <p className="page-description">
            Seluruh berkas legalitas kelembagaan, standar operasional prosedur K3, publikasi ilmiah, 
            dan produk luaran fisik hasil program PPK Ormawa Himagi Untidar 2025.
          </p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="filter-tabs-bar">
            <button 
              className={`filter-tab-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              Semua Luaran ({deliverables.length})
            </button>
            <button 
              className={`filter-tab-btn ${filterType === 'wajib' ? 'active' : ''}`}
              onClick={() => setFilterType('wajib')}
            >
              Luaran Wajib Belmawa
            </button>
            <button 
              className={`filter-tab-btn ${filterType === 'tambahan' ? 'active' : ''}`}
              onClick={() => setFilterType('tambahan')}
            >
              Luaran Tambahan &amp; Legalitas SK
            </button>
          </div>

          {/* Cards Grid */}
          <div className="content-grid-2">
            {filtered.map((item) => (
              <div key={item.id} className="content-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <span className={`badge ${item.category === 'wajib' ? 'badge-dusun' : 'badge-category'}`} style={{ textTransform: 'uppercase' }}>
                    {item.category === 'wajib' ? 'Luaran Wajib' : 'Luaran Tambahan'}
                  </span>
                  <span className="status-badge success">
                    <CheckCircle size={12} />
                    <span>Terverifikasi</span>
                  </span>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800, marginTop: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, marginTop: '0.25rem' }}>
                    {item.type}
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: '0.5rem 0 1rem' }}>
                  {item.description}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedDoc(item)}
                    style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
                  >
                    <Eye size={15} />
                    <span>Buka Pratinjau Dokumen</span>
                  </button>

                  <a 
                    href={item.file_url || '#'}
                    download={item.title}
                    className="btn btn-outline"
                    onClick={(e) => {
                      if (!item.file_url || item.file_url === '#') {
                        e.preventDefault();
                        setSelectedDoc(item);
                      }
                    }}
                    style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}
                  >
                    <Download size={15} />
                    <span>Unduh Arsip</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Detail & Preview Modal */}
      {selectedDoc && (
        <div className="modal-backdrop" onClick={() => setSelectedDoc(null)} role="dialog" aria-modal="true">
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={20} style={{ color: 'var(--accent)' }} />
                <h3 className="modal-title">{selectedDoc.title}</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedDoc(null)} aria-label="Tutup Pratinjau">
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="badge badge-category">{selectedDoc.type}</span>
                <span className="status-badge success">Status Resmi: Selesai &amp; Disahkan</span>
              </div>

              <div style={{ padding: '1.25rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  Ringkasan &amp; Substansi Berkas
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  {selectedDoc.description}
                </p>
              </div>

              <div style={{ background: 'var(--surface-alt)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--accent)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <strong>Catatan Verifikasi Tim Juri:</strong> Berkas fisik asli dan bukti tandatangan basah kepala desa/mitra telah diarsipkan di Sekretariat PPK Ormawa Himagi Untidar dan dapat diinspeksi saat visitasi lapangan.
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <button className="btn btn-outline" onClick={() => setSelectedDoc(null)} style={{ fontSize: '0.8125rem' }}>
                  Tutup Jendela
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => alert(`Memulai pengunduhan salinan digital: ${selectedDoc.title}`)}
                  style={{ fontSize: '0.8125rem' }}
                >
                  <Download size={15} />
                  <span>Unduh Salinan Digital (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
