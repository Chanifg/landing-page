import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Globe, 
  BookOpen, 
  Video, 
  Newspaper, 
  Check,
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Eye, 
  ArrowUpRight, 
  X, 
  CheckCircle2
} from 'lucide-react';

// 6 Kartu Utama yang Menggunakan Foto Dokumentasi Asli di folder public/images/luaran
const DELIVERABLES_6_CARDS = [
  {
    id: 'kartu-01',
    categoryGroup: 'digital',
    badgeKategori: 'HKI & TEKNOLOGI TEPAT GUNA',
    judulKartu: 'Website Pemesanan Tiket & Video Program Ber-HKI',
    deskripsi: 'Digitalisasi manajemen West Tamp Tubing melalui portal website pemesanan tiket resmi dan video profil pelaksanaan program yang telah terdaftar Hak Kekayaan Intelektual (HKI), dilengkapi buku panduan dan video tutorial operasional bagi POKDARWIS.',
    tagBukti: [
      '✓ Sertifikat HKI Terbit',
      '✓ Diserahkan ke POKDARWIS'
    ],
    legalitas: 'Kemenkumham RI • Surat Pencatatan Hak Cipta EC00202510982',
    iconType: 'Globe',
    link: '#tur-360',
    linkText: 'Kunjungi Website',
    image: '/images/luaran/Web dan HKI.png',
    imageAlt: 'Bukti Website Pemesanan Tiket dan Sertifikat HKI'
  },
  {
    id: 'kartu-02',
    categoryGroup: 'publikasi',
    badgeKategori: 'PUBLIKASI BUKU & MODUL',
    judulKartu: 'Buku Resep Pangan Lokal Ber-ISBN & Buku Refleksi Ormawa',
    deskripsi: 'Penerbitan buku inovasi resep makanan dan minuman sehat berbasis potensi desa (ikan lele, TOGA, dan kelapa), ber-ISBN Universitas Tidar, serta Buku Refleksi Ormawa yang mendokumentasikan implementasi soft skills and hard skills mahasiswa.',
    tagBukti: [
      '✓ Terbit Ber-ISBN',
      '✓ Cetak & Elektronik'
    ],
    legalitas: 'Perpustakaan Nasional RI & Badan Penerbit Universitas Tidar',
    iconType: 'BookOpen',
    link: '#',
    linkText: 'Buka Publikasi',
    image: '/images/luaran/buku refeleksi.png',
    imageAlt: 'Dokumentasi Buku Resep Pangan Lokal dan Buku Refleksi Ormawa'
  },
  {
    id: 'kartu-03',
    categoryGroup: 'publikasi',
    badgeKategori: 'JURNAL & MEDIA MASSA',
    judulKartu: 'Artikel Jurnal E-DIMAS & Liputan Media Nasional/Lokal',
    deskripsi: 'Diseminasi keberhasilan pemberdayaan masyarakat melalui publikasi artikel pengabdian pada Jurnal E-DIMAS serta eksposur luas di berbagai media massa seperti Jawa Pos (Radar Magelang), iNews, Magelang News, dan Kompasiana.',
    tagBukti: [
      '✓ Accepted Jurnal E-DIMAS',
      '✓ Terbit di Media Massa'
    ],
    legalitas: 'Jurnal Pengabdian SINTA & 4 Portal Berita Terkemuka',
    iconType: 'Newspaper',
    link: 'https://untidar.ac.id',
    linkText: 'Liputan Media',
    image: '/images/luaran/jurnal dan publikasi.png',
    imageAlt: 'Publikasi Artikel Jurnal E-DIMAS dan Liputan Media Massa'
  },
  {
    id: 'kartu-04',
    categoryGroup: 'tata-kelola',
    badgeKategori: 'REGULASI & TATA KELOLA DESA',
    judulKartu: 'SK Pencanangan Desa Wisata, POKDARWIS & SOP Tubing',
    deskripsi: 'Penguatan payung hukum pengelolaan wisata melalui penerbitan Surat Keputusan (SK) Pencanangan Desa Wisata, pembentukan resmi kelembagaan POKDARWIS, serta penyusunan dokumen Standar Operasional Prosedur (SOP) keselamatan wisata tubing berstandar Basarnas.',
    tagBukti: [
      '✓ SK Resmi Terbit',
      '✓ Dokumen SOP K3 Aktif'
    ],
    legalitas: 'Pemerintah Desa Tampirkulon • Basarnas Unit Siaga Borobudur & PMI',
    iconType: 'FileText',
    link: '#',
    linkText: 'Buka Regulasi',
    image: '/images/luaran/SOP dan SK pencanangan.png',
    imageAlt: 'Dokumen SK Kepala Desa dan Standar Operasional Prosedur (SOP) Tubing'
  },
  {
    id: 'kartu-05',
    categoryGroup: 'tata-kelola',
    badgeKategori: 'INFRASTRUKTUR & HILIRISASI',
    judulKartu: 'Taman Sehat, Outdoor Gym & Gerai West Angkringan Sehat',
    deskripsi: 'Pembangunan ruang publik "Taman Sehat" yang merangkum kebun edukasi TOGA, alat kebugaran fisik sederhana (sepeda statis & pull-up bar), serta gerai angkringan sehat yang memasarkan olahan lele dan minuman herbal desa.',
    tagBukti: [
      '✓ BAST Senilai Rp9,7+ Juta'
    ],
    catatanBAST: 'Gabungan BAST Tubing Rp8,2 juta + BAST POKDARWIS Rp1,5 juta',
    legalitas: 'Berita Acara Serah Terima (BAST) Fisik Desa & Pengelola Wisata',
    iconType: 'ShieldCheck',
    link: '#',
    linkText: 'Dokumen BAST',
    image: '/images/luaran/Angringan dan taman sehat.png',
    imageAlt: 'Dokumentasi Fisik Taman Sehat, Alat Kebugaran dan Gerai Angkringan'
  },
  {
    id: 'kartu-06',
    categoryGroup: 'digital',
    badgeKategori: 'MEDIA EDUKASI & PROMOSI',
    judulKartu: 'Kampanye Media Sosial, Dokumenter & Instrumen PHBS',
    deskripsi: 'Pengelolaan akun media sosial resmi desa wisata (@pesona.tampirkulon) dan tim pelaksana, video dokumenter YouTube, serta penyediaan media fisik edukasi di lokasi wisata berupa banner keselamatan, leaflet PHBS, dan poster edukatif.',
    tagBukti: [
      '✓ Terpasang di Area Wisata',
      '✓ Publikasi Aktif'
    ],
    legalitas: 'Instrumen Edukasi Lingkungan Fisik & Kanal Media Daring Aktif',
    iconType: 'Video',
    link: 'https://youtube.com',
    linkText: 'Tonton Dokumenter',
    image: '/images/luaran/Kampanye media sosial.png',
    imageAlt: 'Dokumentasi Kampanye Media Sosial, Video Dokumenter dan Leaflet'
  }
];

// Matriks Lengkap 20 Luaran Program (5 Luaran Wajib + 15 Luaran Tambahan)
const DELIVERABLES_MATRIX_20 = [
  {
    no: '01',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Sublaporan Akhir Program PPK Ormawa',
    status: 'Terbit',
    target: '2026',
    aksi: 'Unduh',
    link: '#'
  },
  {
    no: '02',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Media Sosial Resmi Tim PPK Ormawa (@ppkormawahimagi26 & @ppkormawa.himagiuntidar)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: 'https://instagram.com'
  },
  {
    no: '03',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Buku Refleksi Ormawa: Implementasi Soft & Hard Skills',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '04',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Video Dokumenter Kegiatan di YouTube (@himagiuntidar)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Tonton',
    link: 'https://youtube.com'
  },
  {
    no: '05',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Poster Hasil Pelaksanaan Program IN WEST TAMP',
    status: 'Terbit',
    target: '2026',
    aksi: 'Unduh',
    link: '#'
  },
  {
    no: '06',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Terbentuknya POKDARWIS Mandiri Desa Tampirkulon (Legalitas SK)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '07',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Website Pemesanan Tiket Wisata West Tamp Tubing (Ber-HKI)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Kunjungi',
    link: '#tur-360'
  },
  {
    no: '08',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Taman Sehat (Kawasan TOGA, Gym Sederhana, & West Angkringan Sehat)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '09',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Artikel Ilmiah Pengabdian Masyarakat di Jurnal E-DIMAS',
    status: 'Accepted',
    target: '2026',
    aksi: 'Baca',
    link: '#'
  },
  {
    no: '10',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Buku Resep Pangan Lokal & Olahan Potensi Desa (Ber-ISBN)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '11',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Video Profil Destinasi & Edukasi West Tamp Tubing',
    status: 'Terbit',
    target: '2026',
    aksi: 'Tonton',
    link: 'https://youtube.com'
  },
  {
    no: '12',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Buku Pedoman SOP Keselamatan Tubing & P3K Air Berstandar Basarnas',
    status: 'Terbit',
    target: '2026',
    aksi: 'Baca',
    link: '#'
  },
  {
    no: '13',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Liputan Media Massa (Jawa Pos Radar Magelang & iNews)',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '14',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Leaflet & Brosur Wisata Edukasi Desa Tampirkulon',
    status: 'Terbit',
    target: '2026',
    aksi: 'Unduh',
    link: '#'
  },
  {
    no: '15',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Poster Informasi Tanaman Obat Keluarga (TOGA) & Khasiat Herbal',
    status: 'Terbit',
    target: '2026',
    aksi: 'Unduh',
    link: '#'
  },
  {
    no: '16',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Rambu & Banner Keselamatan K3 serta Jalur Evakuasi Sungai',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '17',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Modul Pelatihan Diversifikasi Olahan Pangan Lele KWT',
    status: 'Terbit',
    target: '2026',
    aksi: 'Baca',
    link: '#'
  },
  {
    no: '18',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Berita Acara Serah Terima (BAST) Sarana & Aset Wisata Rp9,7+ Juta',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '19',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Sertifikasi Water Rescue 25 Pemuda Desa bersama Basarnas',
    status: 'Terbit',
    target: '2026',
    aksi: 'Lihat',
    link: '#'
  },
  {
    no: '20',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Surat Pencatatan Ciptaan Hak Kekayaan Intelektual (HKI) Kemenkumham RI',
    status: 'Terbit',
    target: '2026',
    aksi: 'Unduh',
    link: '#'
  }
];

export default function DeliverablesSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  // Responsive cards per view
  useEffect(() => {
    function updateCardsPerView() {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    }

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const validFilters = ['all', 'digital', 'publikasi', 'tata-kelola'];
  const currentFilter = validFilters.includes(activeFilter) ? activeFilter : 'all';

  const filteredItems = DELIVERABLES_6_CARDS.filter(item => {
    if (currentFilter === 'all') return true;
    return item.categoryGroup === currentFilter;
  });

  const maxIndex = Math.max(0, filteredItems.length - cardsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleModalKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setSelectedDoc(null);
    }
  }, []);

  useEffect(() => {
    if (selectedDoc) {
      window.addEventListener('keydown', handleModalKeyDown);
      return () => window.removeEventListener('keydown', handleModalKeyDown);
    }
  }, [selectedDoc, handleModalKeyDown]);

  const renderIcon = (type) => {
    switch (type) {
      case 'Globe': return <Globe size={18} />;
      case 'BookOpen': return <BookOpen size={18} />;
      case 'Newspaper': return <Newspaper size={18} />;
      case 'FileText': return <FileText size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'Video': return <Video size={18} />;
      default: return <FileText size={18} />;
    }
  };

  const formatIndex = (val) => String(val).padStart(2, '0');
  const currentSlideDisplay = formatIndex(currentIndex + 1);
  const totalDisplay = formatIndex(filteredItems.length);

  const displayedTableRows = isTableExpanded 
    ? DELIVERABLES_MATRIX_20 
    : DELIVERABLES_MATRIX_20.slice(0, 10);

  return (
    <section id="luaran" className="deliverables-ref-section" data-purpose="outputs-deliverables">
      <div className="editorial-container">
        {/* 1. Section Header */}
        <div className="deliverables-editorial-header">
          <div className="deliverables-header-left">
            <div className="editorial-eyebrow-pill">
              • BUKTI NYATA &amp; DAMPAK PROGRAM •
            </div>
            <h2 className="editorial-title">
              Capaian Luaran, Publikasi Ilmiah &amp; Hak Cipta
            </h2>
            <p className="editorial-subtitle">
              Selama 5 bulan pelaksanaan di Desa Tampirkulon, program IN WEST TAMP telah menghasilkan 5 luaran wajib dan 15 luaran tambahan yang teruji secara akademik, legal, dan berdampak langsung bagi warga.
            </p>
          </div>

          {/* Top Right Metric Pill Capsule */}
          <div className="deliverables-header-right">
            <div className="deliverables-summary-pill" aria-label="Ringkasan Capaian">
              <span className="summary-pill-item">2 HKI Terbit</span>
              <span className="summary-pill-dot">•</span>
              <span className="summary-pill-item">2 Buku/ISBN</span>
              <span className="summary-pill-dot">•</span>
              <span className="summary-pill-item">1 Jurnal Nasional</span>
              <span className="summary-pill-dot">•</span>
              <span className="summary-pill-item">3 Media Massa</span>
            </div>
          </div>
        </div>

        {/* 2. Controls Bar (Filter Pills + Carousel Pagination) */}
        <div className="deliverables-ref-controls-bar">
          <div className="deliverables-ref-filter-group" role="tablist" aria-label="Filter Kelompok Luaran">
            <button 
              type="button"
              role="tab"
              aria-selected={currentFilter === 'all'}
              className={`ref-filter-pill ${currentFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              Semua Luaran (6)
            </button>
            <button 
              type="button"
              role="tab"
              aria-selected={currentFilter === 'digital'}
              className={`ref-filter-pill ${currentFilter === 'digital' ? 'active' : ''}`}
              onClick={() => handleFilterChange('digital')}
            >
              HKI &amp; Media Promosi
            </button>
            <button 
              type="button"
              role="tab"
              aria-selected={currentFilter === 'publikasi'}
              className={`ref-filter-pill ${currentFilter === 'publikasi' ? 'active' : ''}`}
              onClick={() => handleFilterChange('publikasi')}
            >
              Publikasi Buku &amp; Jurnal
            </button>
            <button 
              type="button"
              role="tab"
              aria-selected={currentFilter === 'tata-kelola'}
              className={`ref-filter-pill ${currentFilter === 'tata-kelola' ? 'active' : ''}`}
              onClick={() => handleFilterChange('tata-kelola')}
            >
              Regulasi &amp; Infrastruktur Fisik
            </button>
          </div>

          <div className="deliverables-ref-nav-controls">
            <span className="ref-counter-box" aria-live="polite">
              <strong className="ref-counter-active">{currentSlideDisplay}</strong> / {totalDisplay}
            </span>
            <button 
              type="button"
              className="ref-arrow-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              type="button"
              className="ref-arrow-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Selanjutnya"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 3. Featured Cards Carousel */}
        <div 
          className="deliverables-ref-slider-viewport"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Katalog Luaran Unggulan Slider"
          onKeyDown={handleKeyDown}
        >
          <div 
            className="deliverables-ref-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
            }}
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="deliverables-ref-slide-item"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <article className="deliverable-ref-card">
                  <div className="card-top-content">
                    {/* Visual Preview Box with Real Mockup Photo from public/images/luaran */}
                    <div className="ref-preview-box">
                      {/* Real Mockup Image Display */}
                      <div className="ref-preview-img-wrap">
                        <img 
                          src={item.image} 
                          alt={item.imageAlt || item.judulKartu}
                          className="ref-preview-img"
                          loading="lazy"
                        />
                        <div className="ref-preview-overlay" />
                      </div>

                      <div className="ref-preview-header">
                        <span className="ref-cat-badge">
                          {item.badgeKategori}
                        </span>
                        <span className="ref-verified-badge">
                          <Check size={12} strokeWidth={3} />
                          <span>Terverifikasi</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="ref-card-body">
                      <div className="ref-card-header-row">
                        <div className="ref-icon-box" aria-hidden="true">
                          {renderIcon(item.iconType)}
                        </div>
                        <h3 className="ref-card-title">
                          {item.judulKartu}
                        </h3>
                      </div>
                      <p className="ref-card-desc">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>

                  {/* Buttons Bottom */}
                  <div className="ref-card-actions">
                    <button 
                      type="button"
                      className="ref-btn-primary"
                      onClick={() => setSelectedDoc(item)}
                      aria-label={`Rincian luaran ${item.judulKartu}`}
                    >
                      <Eye size={14} />
                      <span>Rincian Luaran</span>
                    </button>

                    {item.link && (
                      <a 
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="ref-btn-secondary"
                        aria-label={`Kunjungi tautan ${item.judulKartu}`}
                      >
                        <span>{item.linkText}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Expandable Table / Matriks Card */}
        <div className="deliverables-ref-table-card">
          <div 
            className="ref-table-card-header"
            onClick={() => setIsTableExpanded(prev => !prev)}
            role="button"
            tabIndex={0}
            aria-expanded={isTableExpanded}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsTableExpanded(prev => !prev);
              }
            }}
          >
            <h3 className="ref-table-card-title">
              Matriks Lengkap 20 Luaran Program (5 Luaran Wajib &amp; 15 Luaran Tambahan)
            </h3>
            <button 
              type="button"
              className="ref-table-toggle-btn" 
              aria-label={isTableExpanded ? "Tutup matriks" : "Buka seluruh matriks"}
            >
              {isTableExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <div className="ref-table-responsive-container">
            <table className="ref-matrix-table">
              <thead>
                <tr>
                  <th className="col-no">No</th>
                  <th className="col-cat">Kategori</th>
                  <th className="col-title">Jenis / Judul Luaran</th>
                  <th className="col-status">Status Capaian</th>
                  <th className="col-target">Target</th>
                  <th className="col-action">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {displayedTableRows.map((row) => (
                  <tr key={row.no} className="ref-table-row">
                    <td className="cell-no">{row.no}</td>
                    <td className="cell-cat">
                      <span className="ref-cat-pill-wrap">
                        <span 
                          className={`ref-cat-dot ${row.isWajib ? 'dot-wajib' : 'dot-tambahan'}`}
                        />
                        <span className="ref-cat-text">{row.kategori}</span>
                      </span>
                    </td>
                    <td className="cell-title">
                      {row.judul}
                    </td>
                    <td className="cell-status">
                      <span className={`ref-status-tag ${row.status === 'Accepted' ? 'status-accepted' : 'status-terbit'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="cell-target">{row.target}</td>
                    <td className="cell-action">
                      <a 
                        href={row.link} 
                        target={row.link.startsWith('http') ? '_blank' : '_self'}
                        rel={row.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="ref-table-action-btn"
                        aria-label={`${row.aksi} ${row.judul}`}
                      >
                        <span>{row.aksi}</span>
                        <ArrowUpRight size={11} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ref-table-card-footer">
            <button 
              type="button"
              className="ref-table-footer-btn"
              onClick={() => setIsTableExpanded(prev => !prev)}
            >
              <span>{isTableExpanded ? 'Tampilkan Lebih Sedikit' : 'Lihat 10 Luaran Lainnya'}</span>
              {isTableExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {/* 5. Bottom Summary Notes */}
        <div className="deliverables-ref-bottom-notes">
          <div className="ref-note-left">
            <CheckCircle2 size={18} className="ref-verify-icon" />
            <span className="ref-note-text">
              Seluruh berkas luaran wajib dan tambahan telah diverifikasi oleh Tim Belmawa Kemendikbudristek RI.
            </span>
          </div>
          <div className="ref-note-right">
            <a href="#tur-360" className="ref-note-link">
              <span>Eksplorasi Tur Virtual 360°</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Detail Luaran */}
      {selectedDoc && (
        <div 
          className="deliverable-modal-backdrop" 
          onClick={() => setSelectedDoc(null)} 
          role="dialog" 
          aria-modal="true"
          aria-labelledby="modal-luaran-title"
        >
          <div 
            className="deliverable-modal-dialog" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="deliverable-modal-header">
              <div>
                <span className="ref-cat-badge" style={{ marginBottom: '0.5rem', display: 'inline-flex' }}>
                  {selectedDoc.badgeKategori}
                </span>
                <h3 id="modal-luaran-title" className="deliverable-modal-title">
                  {selectedDoc.judulKartu}
                </h3>
              </div>
              <button 
                type="button"
                className="deliverable-modal-close" 
                onClick={() => setSelectedDoc(null)} 
                aria-label="Tutup jendela rincian"
              >
                <X size={18} />
              </button>
            </div>

            <div className="deliverable-modal-body">
              {/* Modal Visual Photo Preview */}
              {selectedDoc.image && (
                <div className="deliverable-modal-img-container">
                  <img 
                    src={selectedDoc.image} 
                    alt={selectedDoc.imageAlt || selectedDoc.judulKartu}
                    className="deliverable-modal-img" 
                  />
                </div>
              )}

              <div className="deliverable-modal-meta-card">
                <div className="deliverable-modal-meta-label">Basis Legalitas &amp; Pengesahan</div>
                <div className="deliverable-modal-meta-val">{selectedDoc.legalitas}</div>
              </div>

              <div className="deliverable-modal-desc-box">
                <div className="deliverable-modal-desc-title">Substansi &amp; Realisasi Luaran</div>
                <p className="deliverable-modal-desc-text">
                  {selectedDoc.deskripsi}
                </p>
              </div>

              <div className="deliverable-modal-desc-box" style={{ background: 'var(--surface-alt)' }}>
                <div className="deliverable-modal-desc-title">Status Bukti Fisik / Digital</div>
                <div className="deliverable-tag-bukti-wrap" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                  {selectedDoc.tagBukti.map((tag, idx) => (
                    <span key={idx} className="deliverable-tag-bukti">
                      {tag}
                    </span>
                  ))}
                  {selectedDoc.catatanBAST && (
                    <span className="deliverable-tag-bukti" style={{ background: '#F5EBE1', color: '#874D00' }}>
                      {selectedDoc.catatanBAST}
                    </span>
                  )}
                </div>
              </div>

              <div className="deliverable-modal-verify-box">
                <strong>Verifikasi Pelaporan PPK Ormawa Belmawa:</strong>
                Seluruh berkas fisik (BAST asli, sertifikat HKI bernomor resmi, buku ber-ISBN terbitan kampus, dan SK basah kepala desa) diarsipkan lengkap di Sekretariat Tim PPK Ormawa Himagi Universitas Tidar untuk keperluan visitasi dan penilaian kemajuan.
              </div>
            </div>

            <div className="deliverable-modal-footer">
              <button 
                type="button" 
                className="btn-pill-outline" 
                onClick={() => setSelectedDoc(null)}
                style={{ fontSize: '0.8125rem', padding: '0.5rem 1.25rem' }}
              >
                Tutup Jendela
              </button>

              {selectedDoc.link && (
                <a 
                  href={selectedDoc.link}
                  target={selectedDoc.link.startsWith('http') ? '_blank' : '_self'}
                  rel={selectedDoc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn-pill-forest"
                  style={{ fontSize: '0.8125rem', padding: '0.5rem 1.25rem' }}
                >
                  <span>{selectedDoc.linkText}</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
