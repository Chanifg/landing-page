import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Star, CheckCircle, MessageSquare, Clock, Car } from 'lucide-react';
import { getGuestbook, submitGuestbook } from '../lib/supabase.js';

export default function ContactPage() {
  const [guestbookList, setGuestbookList] = useState([]);
  const [formData, setFormData] = useState({
    sender_name: '',
    sender_role: 'Juri Penilai PPK Ormawa',
    sender_institution: '',
    rating: 5,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackNotice, setFeedbackNotice] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getGuestbook();
      setGuestbookList(data || []);
    }
    load();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.sender_name.trim() || !formData.message.trim()) {
      setFeedbackNotice({ type: 'error', text: 'Nama dan pesan wajib diisi.' });
      return;
    }

    setIsSubmitting(true);
    setFeedbackNotice(null);

    const res = await submitGuestbook(formData);
    setIsSubmitting(false);

    if (res.success) {
      setFeedbackNotice({ 
        type: 'success', 
        text: 'Terima kasih! Pesan dan penilaian Anda telah berhasil dicatat ke dalam buku tamu resmi.' 
      });
      // Prepend to local list
      if (res.entry) {
        setGuestbookList(prev => [res.entry, ...prev]);
      }
      // Reset form
      setFormData({
        sender_name: '',
        sender_role: 'Juri Penilai PPK Ormawa',
        sender_institution: '',
        rating: 5,
        message: ''
      });
    } else {
      setFeedbackNotice({ type: 'error', text: res.error || 'Gagal mengirim ulasan.' });
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header Banner */}
      <section className="page-header-banner">
        <div className="container page-header-container">
          <div className="page-badge-category">
            <MessageSquare size={14} />
            <span>KONTAK &amp; BUKU TAMU</span>
          </div>
          <h1 className="page-title">Lokasi Wisata &amp; Ulasan Juri</h1>
          <p className="page-description">
            Panduan rute menuju kawasan IN WEST TAMP Desa Tampirkulon serta lembar buku tamu interaktif 
            bagi juri penilai PPK Ormawa, akademisi, dan wisatawan.
          </p>
        </div>
      </section>

      {/* Location & Guide Section */}
      <section className="section-padding">
        <div className="container">
          <div className="content-grid-2">
            {/* Travel Guide Card */}
            <div className="content-card" style={{ padding: '2rem' }}>
              <span className="section-badge">PANDUAN RUTE PERJALANAN</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800, marginTop: '0.5rem' }}>
                Menuju Basecamp Westtamp Tubing
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>Alamat Sekretariat</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      Dusun Tampirkulon I, Desa Tampirkulon, Kec. Candimulyo, Kab. Magelang, Jawa Tengah 56191
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Car size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>Aksesibilitas Kendaraan</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      20 menit dari Alun-Alun Kota Magelang / Kampus Untidar Tuguran. Akses jalan aspal desa lebar dapat dilalui mobil pribadi dan minibus elf. Tersedia area parkir luas di dekat basecamp.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Clock size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>Jam Operasional Wisata Air</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      Setiap hari pukul 08.00 s.d. 16.00 WIB (menyesuaikan kondisi cuaca dan debit air sungai demi keselamatan).
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Mail size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9375rem' }}>Kontak Resmi Tim Pelaksana</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                      Email: himagi@untidar.ac.id | Narahubung POKDARWIS: 0857-XXXX-XXXX
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Guestbook Form Card */}
            <div className="content-card" style={{ padding: '2rem' }}>
              <span className="section-badge" style={{ color: 'var(--primary-lighter)' }}>BUKU TAMU DIGITAL</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 800, marginTop: '0.5rem' }}>
                Kirim Masukan &amp; Catatan Juri
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                Beri masukan, saran evaluasi, atau apresiasi terkait inovasi program dan kelengkapan bukti digital IN WEST TAMP.
              </p>

              {feedbackNotice && (
                <div style={{
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  background: feedbackNotice.type === 'success' ? 'rgba(82, 183, 136, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  border: `1px solid ${feedbackNotice.type === 'success' ? 'rgba(82, 183, 136, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                  color: feedbackNotice.type === 'success' ? 'var(--primary-lighter)' : '#EF4444'
                }}>
                  {feedbackNotice.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="sender_name">Nama Lengkap &amp; Gelar</label>
                  <input 
                    type="text" 
                    id="sender_name" 
                    name="sender_name" 
                    className="form-input" 
                    placeholder="Contoh: Dr. Ir. H. Ahmad Fauzi, M.Sc." 
                    value={formData.sender_name} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="sender_role">Peran / Kategori</label>
                    <select 
                      id="sender_role" 
                      name="sender_role" 
                      className="form-select"
                      value={formData.sender_role}
                      onChange={handleChange}
                    >
                      <option value="Juri Penilai PPK Ormawa">Juri Penilai PPK Ormawa</option>
                      <option value="Reviewer / Akademisi">Reviewer / Akademisi</option>
                      <option value="Wisatawan">Wisatawan</option>
                      <option value="Mahasiswa">Mahasiswa</option>
                      <option value="Warga Desa">Warga Desa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="rating">Penilaian Inovasi</label>
                    <select 
                      id="rating" 
                      name="rating" 
                      className="form-select"
                      value={formData.rating}
                      onChange={handleChange}
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (Sangat Baik / 5)</option>
                      <option value={4}>⭐⭐⭐⭐ (Baik / 4)</option>
                      <option value={3}>⭐⭐⭐ (Cukup / 3)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="sender_institution">Asal Instansi / Universitas</label>
                  <input 
                    type="text" 
                    id="sender_institution" 
                    name="sender_institution" 
                    className="form-input" 
                    placeholder="Contoh: Belmawa Kemendikbudristek / Universitas Tidar" 
                    value={formData.sender_institution} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Pesan, Evaluasi, atau Apresiasi</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    placeholder="Tuliskan catatan evaluasi atau saran Anda terkait program IN WEST TAMP..." 
                    value={formData.message} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isSubmitting}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Mencatat Pesan...' : 'Kirim ke Buku Tamu'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Guestbook List Display Section */}
      <section className="section-padding" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">CATATAN &amp; APRESIASI</span>
            <h2 className="section-title">Ulasan Buku Tamu Pengunjung</h2>
            <p className="section-subtitle">
              Pesan dan penilaian masuk dari tim penilai, akademisi pendamping, dan pengunjung wisata.
            </p>
          </div>

          <div className="content-grid-2">
            {guestbookList.map((entry) => (
              <div key={entry.id} className="content-card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', fontSize: '1.125rem', fontWeight: 700 }}>
                      {entry.sender_name}
                    </h3>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-category" style={{ fontSize: '0.6875rem' }}>
                        {entry.sender_role}
                      </span>
                      {entry.sender_institution && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          • {entry.sender_institution}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.15rem' }}>
                    {[...Array(entry.rating || 5)].map((_, rIdx) => (
                      <Star key={rIdx} size={14} fill="var(--accent)" stroke="none" />
                    ))}
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: '0.75rem', fontStyle: 'italic' }}>
                  "{entry.message}"
                </p>

                {entry.created_at && (
                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: '0.6875rem' }}>
                    Tercatat: {entry.created_at.split('T')[0]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
