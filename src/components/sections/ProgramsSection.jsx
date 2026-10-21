import React, { useState } from 'react';
import { Layers, ShieldCheck, Calendar, CheckCircle } from 'lucide-react';

export default function ProgramsSection({ pillars = [] }) {
  const [activePillarTab, setActivePillarTab] = useState('all');

  const filteredPillars = activePillarTab === 'all' 
    ? pillars 
    : pillars.filter(p => p.id === activePillarTab);

  return (
    <>
      {/* ================= 4 PILAR & STANDARISASI K3 ================= */}
      <section id="pilar" className="section" style={{ background: 'var(--bg-main)', padding: '5rem 0 3.5rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-pill">
              <Layers size={14} />
              <span>Substansi &amp; Standarisasi K3</span>
            </div>
            <h2 className="section-title">4 Pilar Inovasi Program PPK Ormawa</h2>
            <p className="section-subtitle">
              Rangkaian intervensi terstruktur yang mengubah potensi terfragmentasi Desa Tampirkulon 
              menjadi kawasan eduwisata kesehatan (wellness-tourism) terpadu.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="filter-tabs-bar" style={{ marginBottom: '2.5rem' }}>
            <button 
              className={`filter-tab-btn ${activePillarTab === 'all' ? 'active' : ''}`}
              onClick={() => setActivePillarTab('all')}
            >
              Semua Pilar ({pillars.length || 4})
            </button>
            {pillars.map(p => (
              <button 
                key={p.id}
                className={`filter-tab-btn ${activePillarTab === p.id ? 'active' : ''}`}
                onClick={() => setActivePillarTab(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Pillars Detailed Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {filteredPillars.map((p) => (
              <div 
                key={p.id} 
                className="content-card" 
                style={{ 
                  padding: '2.25rem', 
                  borderTop: `4px solid ${p.tag_color || 'var(--primary)'}` 
                }}
              >
                <div>
                  <span style={{ color: p.tag_color || 'var(--accent)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {p.tagline}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '0.35rem', fontWeight: 800 }}>
                    {p.name}
                  </h3>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7, marginTop: '0.65rem' }}>
                  {p.summary}
                </p>

                {/* Before vs Intervention vs After Breakdown */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
                  <div style={{ background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ color: '#EF4444', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                      Kondisi Pra-Intervensi
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {p.before_condition}
                    </p>
                  </div>

                  <div style={{ background: 'rgba(223, 151, 5, 0.08)', border: '1px solid rgba(223, 151, 5, 0.3)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                      Bentuk Intervensi Mahasiswa
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {p.intervention}
                    </p>
                  </div>

                  <div style={{ background: 'rgba(48, 65, 21, 0.08)', border: '1px solid rgba(48, 65, 21, 0.25)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                      Hasil Capaian Terukur
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                      {p.after_condition}
                    </p>
                    {p.key_metrics && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {p.key_metrics.map((km, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem' }}>
                            <CheckCircle size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <span style={{ color: 'var(--text-muted)' }}>{km.label}:</span>
                            <strong style={{ color: 'var(--text-primary)' }}>{km.value}</strong>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standarisasi K3 Sub-Section */}
          <div style={{ marginTop: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
                <ShieldCheck size={14} style={{ color: 'var(--accent)' }} />
                STANDARISASI KEAMANAN &amp; KESEHATAN
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Pelatihan Bersama Instansi Resmi
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', maxWidth: '640px', margin: '0.25rem auto 0' }}>
                Menjamin setiap wisatawan mendapatkan pengalaman susur sungai yang teruji secara protokol keselamatan nasional.
              </p>
            </div>

            <div className="content-grid-3">
              <div className="content-card">
                <img src="/images/logos/basarnas.png" alt="Basarnas SAR" style={{ height: '42px', width: 'fit-content', objectFit: 'contain' }} />
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700, margin: '0.5rem 0' }}>
                  Basarnas SAR Semarang
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Pelatihan teknik penyelamatan korban di air deras (water rescue), penggunaan lempar tali (throw bag), 
                  serta penyusunan SOP tanggap darurat banjir dan kecelakaan air.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 700 }}>
                  25 Pengelola Wisata Lolos Evaluasi
                </div>
              </div>

              <div className="content-card">
                <img src="/images/logos/pmi.png" alt="PMI Magelang" style={{ height: '42px', width: 'fit-content', objectFit: 'contain' }} />
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700, margin: '0.5rem 0' }}>
                  Palang Merah Indonesia (PMI)
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Pelatihan Pertolongan Pertama Pada Kecelakaan (P3K), Resusitasi Jantung Paru (RJP), 
                  penanganan hipotermia, dislokasi sendi, dan penyediaan tas darurat medis di sepanjang titik river tubing.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 700 }}>
                  Modul Buku Saku P3K Resmi Terbit
                </div>
              </div>

              <div className="content-card">
                <img src="/images/logos/puskesmas.png" alt="Puskesmas Candimulyo" style={{ height: '42px', width: 'fit-content', objectFit: 'contain' }} />
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontWeight: 700, margin: '0.5rem 0' }}>
                  Puskesmas Candimulyo
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Penyelenggaraan Health Screening Day pemeriksaan tensi darah, riwayat penyakit jantung/asma bagi calon wisatawan, 
                  serta edukasi pola konsumsi gizi seimbang berbasis pangan lokal bagi warga desa.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 700 }}>
                  60 Peserta Skrining Kesehatan Terdata
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LINIMASA 5 BULAN (ROADMAP) ================= */}
      <section id="linimasa" className="section" style={{ background: 'var(--bg-section-alt)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-pill">
              <Calendar size={14} />
              <span>Roadmap Program 2025</span>
            </div>
            <h2 className="section-title">Linimasa Pelaksanaan 5 Bulan</h2>
            <p className="section-subtitle">
              Tahapan sistematis dari observasi kebutuhan lapangan hingga serah terima kelembagaan mandiri.
            </p>
          </div>

          <div className="timeline-list">
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-phase">BULAN 1: OBSERVASI &amp; PRA-KONDISI</div>
              <h4 className="timeline-title">Sosialisasi, Asesmen K3, &amp; Pembentukan Tim Kerja</h4>
              <p className="timeline-desc">
                Survei kondisi debit dan kontur sungai Westtamp Tubing, Focus Group Discussion (FGD) bersama perangkat desa, 
                pemuda karang taruna, dan pengelola wisata susur sungai untuk memetakan titik rawan bahaya.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-phase">BULAN 2: CAPACITY BUILDING K3 &amp; GIZI</div>
              <h4 className="timeline-title">Pelatihan Basarnas, PMI, &amp; Health Screening Day</h4>
              <p className="timeline-desc">
                Pelaksanaan pelatihan water rescue bersama Basarnas Kantor SAR Semarang, pelatihan P3K bersama PMI, 
                skrining kesehatan massal bersama Puskesmas Candimulyo, dan penyusunan draf SOP keselamatan.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-phase">BULAN 3: PEMBANGUNAN FISIK &amp; DIVERSIFIKASI</div>
              <h4 className="timeline-title">Pembangunan Taman TOGA &amp; Edukasi Olahan Lele</h4>
              <p className="timeline-desc">
                Pembersihan dan revitalisasi lahan tidur 21 m² menjadi Green Wellness Space dengan 6 varietas TOGA dan gym outdoor. 
                Pelatihan diversifikasi produk olahan lele bernilai gizi tinggi bersama kelompok wanita tani.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-phase">BULAN 4: DIGITALISASI &amp; LEGALITAS</div>
              <h4 className="timeline-title">Pengambilan Panorama 360° &amp; SK POKDARWIS</h4>
              <p className="timeline-desc">
                Dokumentasi fotografi panorama 360° di 7 titik destinasi wisata desa, pengembangan platform web IN WEST TAMP, 
                dan pengesahan SK Kepala Desa tentang Pembentukan POKDARWIS Desa Wisata Tampirkulon.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-phase">BULAN 5: EVALUASI &amp; SERAH TERIMA</div>
              <h4 className="timeline-title">Pemasangan Poster QR Code, Uji Petik Juri, &amp; Diseminasi</h4>
              <p className="timeline-desc">
                Pencetakan poster QR code resmi untuk penilaian PPK Ormawa, simulasi kunjungan wisatawan terintegrasi, 
                penyusunan luaran laporan akhir, serta serah terima sistem digital kepada POKDARWIS desa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
