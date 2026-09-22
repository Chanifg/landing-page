import React, { useState } from 'react';
import { ShieldCheck, Layers, Sparkles, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  'tubing-care': ShieldCheck,
  'integrated-ecosystem': Layers,
  'local-creative': Sparkles,
  'green-wellness': Leaf
};

export default function PillarCard({ pillar }) {
  const [activeTab, setActiveTab] = useState('after'); // 'after' (Hasil Intervensi) or 'before' (Sebelum Program)
  const IconComponent = iconMap[pillar.id] || ShieldCheck;

  return (
    <div className="pillar-card" style={{ borderTopColor: pillar.tag_color || 'var(--primary)' }}>
      {/* Pillar Card Header */}
      <div className="pillar-header">
        <div 
          className="pillar-icon-box"
          style={{ background: `${pillar.tag_color || 'var(--primary)'}22`, color: pillar.tag_color || 'var(--accent)' }}
        >
          <IconComponent size={24} />
        </div>
        <div>
          <span className="pillar-tagline" style={{ color: pillar.tag_color || 'var(--accent)' }}>
            {pillar.tagline}
          </span>
          <h3 className="pillar-title">{pillar.name}</h3>
        </div>
      </div>

      <p className="pillar-summary">{pillar.summary}</p>

      {/* Interactive Toggle Tab: Hasil Intervensi vs Sebelum Program */}
      <div className="pillar-tabs" role="tablist" aria-label={`Pilihan Kondisi ${pillar.name}`}>
        <button 
          className={`pillar-tab-btn ${activeTab === 'after' ? 'active' : ''}`}
          onClick={() => setActiveTab('after')}
          role="tab"
          aria-selected={activeTab === 'after'}
        >
          Hasil Intervensi
        </button>
        <button 
          className={`pillar-tab-btn ${activeTab === 'before' ? 'active' : ''}`}
          onClick={() => setActiveTab('before')}
          role="tab"
          aria-selected={activeTab === 'before'}
        >
          Sebelum Program
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="pillar-tab-content">
        {activeTab === 'after' ? (
          <div className="tab-pane active fade-in">
            <div className="pillar-condition-badge after">Capaian Saat Ini (PPK Ormawa 2025)</div>
            <p className="pillar-condition-text">{pillar.after_condition}</p>
            
            {pillar.key_metrics && pillar.key_metrics.length > 0 && (
              <div className="pillar-metrics-box">
                {pillar.key_metrics.map((km, idx) => (
                  <div key={idx} className="pillar-metric-chip">
                    <CheckCircle size={14} style={{ color: 'var(--primary-lighter)' }} />
                    <span className="km-label">{km.label}:</span>
                    <strong className="km-val">{km.value}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="tab-pane active fade-in">
            <div className="pillar-condition-badge before">Kondisi Awal (Pra-Intervensi)</div>
            <p className="pillar-condition-text">{pillar.before_condition}</p>
            <div style={{ marginTop: '0.75rem', padding: '0.65rem 0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--border-color)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <strong>Intervensi Mahasiswa:</strong> {pillar.intervention}
            </div>
          </div>
        )}
      </div>

      {/* Footer Link to /program */}
      <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
        <Link 
          to="/program" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            color: 'var(--accent)', 
            fontSize: '0.8125rem', 
            fontWeight: 700, 
            textDecoration: 'none' 
          }}
        >
          <span>Pelajari detail intervensi & SOP</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
