import React, { useState } from 'react';
import { ShieldCheck, Layers, Sparkles, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  'tubing-care': ShieldCheck,
  'integrated-ecosystem': Layers,
  'local-creative': Sparkles,
  'green-wellness': Leaf
};

// Default images for each pillar
const pillarImages = {
  'tubing-care': '/images/documentation/pelatihan-k3-basarnas.jpg',
  'integrated-ecosystem': '/images/documentation/pembentukan-pokdarwis.jpg',
  'local-creative': '/images/documentation/edukasi-olahan-lele.jpg',
  'green-wellness': '/images/documentation/taman-sehat-toga.jpg'
};

export default function PillarCard({ pillar }) {
  const [activeTab, setActiveTab] = useState('after'); // 'after' (Hasil Intervensi) or 'before' (Sebelum Program)
  const IconComponent = iconMap[pillar.id] || ShieldCheck;
  const pillarImg = pillarImages[pillar.id] || '/images/documentation/aksi-wisata-tubing.jpg';

  return (
    <div className="pillar-card" data-pillar={pillar.id}>
      {/* Pillar Card Header */}
      <div className="pillar-card-header">
        <div className="pillar-icon-badge">
          <IconComponent size={24} />
        </div>
        <div className="pillar-titles">
          <h3>{pillar.name}</h3>
          <span className="pillar-tagline">{pillar.tagline}</span>
        </div>
      </div>

      {/* Interactive Toggle Switch */}
      <div className="pillar-toggle-wrapper">
        <div className="pillar-toggle-btn-group" role="tablist" aria-label={`Pilihan Kondisi ${pillar.name}`}>
          <button 
            className={`pillar-toggle-btn ${activeTab === 'after' ? 'active' : ''}`}
            onClick={() => setActiveTab('after')}
            role="tab"
            aria-selected={activeTab === 'after'}
          >
            Hasil Intervensi &amp; Capaian
          </button>
          <button 
            className={`pillar-toggle-btn ${activeTab === 'before' ? 'active' : ''}`}
            onClick={() => setActiveTab('before')}
            role="tab"
            aria-selected={activeTab === 'before'}
          >
            Sebelum Program
          </button>
        </div>
      </div>

      {/* Pillar Content Views */}
      <div className="pillar-content-body">
        {activeTab === 'after' ? (
          <div className="pillar-view active">
            <span className="view-badge-indicator after">Hasil Intervensi &amp; Capaian</span>
            <div className="pillar-image-container">
              <img src={pillarImg} alt={pillar.name} loading="lazy" />
            </div>
            <p className="pillar-desc-text">
              {pillar.after_condition || pillar.intervention}
            </p>
            {pillar.key_metrics && pillar.key_metrics.length > 0 && (
              <div className="pillar-result-box">
                <div className="pillar-result-title" style={{ color: 'var(--primary-lighter)', marginBottom: '0.25rem' }}>
                  Hasil Terukur:
                </div>
                <div className="pillar-result-value" style={{ color: 'var(--text-primary)', fontSize: '0.8125rem', fontWeight: 600 }}>
                  {pillar.key_metrics.map(km => `${km.label}: ${km.value}`).join(' | ')}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="pillar-view active">
            <span className="view-badge-indicator before">Kondisi Awal Desa</span>
            <p className="pillar-desc-text" style={{ paddingTop: '0.5rem' }}>
              {pillar.before_condition}
            </p>
            <div style={{ marginTop: 'auto', padding: '0.85rem 1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border-color)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--accent)' }}>Intervensi Tim Mahasiswa:</strong> {pillar.intervention}
            </div>
          </div>
        )}

        <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', textAlign: 'right' }}>
          <Link to="/program" style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, textDecoration: 'none' }}>
            Lihat SOP &amp; Rincian &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
