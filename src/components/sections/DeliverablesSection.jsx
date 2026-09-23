import React, { useState } from 'react';
import { Award, CheckCircle, Eye, ExternalLink } from 'lucide-react';

export default function DeliverablesSection({ deliverables = [], onSelectDoc }) {
  const [filterType, setFilterType] = useState('all');

  const filtered = deliverables.filter(d => {
    if (filterType === 'all') return true;
    return d.category === filterType;
  });

  return (
    <section id="luaran" className="section" style={{ background: 'var(--bg-main)', padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <Award size={14} />
            <span>Akuntabilitas &amp; Bukti Hukum</span>
          </div>
          <h2 className="section-title">Katalog Luaran Wajib &amp; Tambahan</h2>
          <p className="section-subtitle">
            Seluruh berkas legalitas kelembagaan, standar operasional prosedur K3, publikasi ilmiah, 
            dan produk luaran fisik hasil program PPK Ormawa Himagi Untidar 2025.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs-bar" style={{ marginBottom: '2.5rem' }}>
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
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800, marginTop: '0.65rem' }}>
                  {item.title}
                </h3>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {item.type}
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: '0.65rem 0 1.25rem' }}>
                {item.description}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => onSelectDoc && onSelectDoc(item)}
                  style={{ fontSize: '0.8125rem', padding: '0.55rem 1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Eye size={15} />
                  <span>Buka Pratinjau Dokumen</span>
                </button>

                {item.file_url && (
                  <a 
                    href={item.file_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                    style={{ fontSize: '0.8125rem', padding: '0.55rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <span>Unduh Berkas</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
