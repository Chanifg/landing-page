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
  X
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
    imageAlt: 'Dokumentasi Kampanye Media Sosial, Video Dokumenter dan Leaflet',
    imageZoom: true
  }
];

// Matriks Lengkap 20 Luaran Program (5 Luaran Wajib + 15 Luaran Tambahan)
const DELIVERABLES_MATRIX_20 = [
  {
    no: '01',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Sublaporan Akhir PPK Ormawa',
    deskripsi: 'Dokumen pertanggungjawaban akhir pelaksanaan program IN WEST TAMP.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat Dokumen',
    link: 'https://drive.google.com/file/d/1_5yxaxJg-Swe0UtnDYk1s1Uk7-8TGXZK/view?usp=sharing'
  },
  {
    no: '02',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Media Sosial Tim Pelaksana',
    deskripsi: 'Publikasi kegiatan melalui TikTok (@ppkormawahimagi26) & Instagram (@ppkormawa.himagiuntidar).',
    target: '2026',
    status: 'Terbit',
    aksi: 'Kunjungi Akun',
    link: 'https://drive.google.com/drive/u/6/folders/1sXT--V3zm6diNO-2pdYXNXsLZuphJtc9?usp=drive_link'
  },
  {
    no: '03',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Buku Refleksi Ormawa (Ber-ISBN)',
    deskripsi: 'Dokumentasi implementasi soft skills dan hard skills mahasiswa dalam pemberdayaan warga (cetak & elektronik).',
    target: '2026',
    status: 'Terbit',
    aksi: 'Baca Buku',
    link: 'https://drive.google.com/drive/folders/1d5H0InlYGcz8h6IiCku_R6a5-JwhnRNW?usp=drive_link'
  },
  {
    no: '04',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Video Dokumenter Pelaksanaan',
    deskripsi: 'Dokumentasi visual perjalanan program yang diunggah melalui kanal YouTube (@himagiuntidar).',
    target: '2026',
    status: 'Terbit',
    aksi: 'Tonton Video',
    link: 'https://drive.google.com/drive/folders/1TKAep2knUlQaBoP_6R3ixvhZUb5ooh8c?usp=drive_link'
  },
  {
    no: '05',
    kategori: 'Luaran Wajib',
    isWajib: true,
    judul: 'Poster Hasil Pelaksanaan Program',
    deskripsi: 'Rangkuman visual capaian pengabdian masyarakat IN WEST TAMP (hardfile & softfile).',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat Poster',
    link: 'https://drive.google.com/drive/folders/11I4gIzG7x-gZfD2OMXGIDFbE9atZ0qZQ?usp=drive_link'
  },
  {
    no: '06',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Kelembagaan POKDARWIS Desa Tampirkulon',
    deskripsi: 'Pembentukan Kelompok Sadar Wisata resmi sebagai penggerak utama ekosistem desa wisata.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Bukti Pembentukan',
    link: 'https://drive.google.com/file/d/1NLLCbN_LvMrTSeVx9j0bc_qAEdfVskG6/view?usp=drive_link'
  },
  {
    no: '07',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Website Pemesanan Tiket & HKI Website',
    deskripsi: 'Portal resmi reservasi West Tamp Tubing dilengkapi video profil wisata terdaftar HKI.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Web & Sertifikat HKI',
    link: 'wisatatampirkulon.com'
  },
  {
    no: '08',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Kawasan Taman Sehat & Produk Pangan Lokal',
    deskripsi: 'Fasilitas kebun TOGA, outdoor gym sederhana, dan West Angkringan Sehat (bakso lele, wedang jahe telang, kelapa jeruk).',
    target: '2026',
    status: 'Terwujud',
    aksi: 'Lihat Dokumentasi',
    link: 'https://drive.google.com/drive/folders/1T38JBhLQnB-MtPiiwlTuKmprLrGXOzuV?usp=drive_link'
  },
  {
    no: '09',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Leaflet Edukasi PHBS',
    deskripsi: 'Media cetak edukasi Perilaku Hidup Bersih dan Sehat bagi pengunjung di area wisata tubing.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat Leaflet',
    link: 'https://drive.google.com/file/d/1tRZOnXHOToiybtnCTHjr2Ve_fiN2-PEv/view?usp=drive_link'
  },
  {
    no: '10',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Poster Langkah Cuci Tangan',
    deskripsi: 'Media visual panduan menjaga kebersihan tangan di lokasi wisata untuk pencegahan penyakit.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat Poster',
    link: 'https://drive.google.com/file/d/105TxWdrtIlbm6Qd30QjkGJah5dcU7wWv/view?usp=drive_link'
  },
  {
    no: '11',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Banner Larangan Membuang Sampah',
    deskripsi: 'Media kampanye pelestarian kebersihan dan kenyamanan lingkungan sekitar aliran sungai tubing.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat Banner',
    link: 'https://drive.google.com/file/d/1Adhhsoj_cpBkrWzG_tKchRBh5WkFSxi5/view?usp=drive_link'
  },
  {
    no: '12',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Publikasi Media Massa Lokal & Nasional',
    deskripsi: 'Liputan program di Jawa Pos (Radar Magelang), Magelang News, iNews, dan Kompasiana.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Kliping Berita',
    link: 'https://drive.google.com/drive/folders/1bMvCyf1zjyA_o8zRNPLnit2lP06cb78r?usp=drive_link'
  },
  {
    no: '13',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Buku Resep Pangan Lokal (Ber-ISBN)',
    deskripsi: 'Kumpulan resep inovasi olahan ikan lele, TOGA, dan kelapa ber-ISBN Universitas Tidar.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Baca Buku Resep',
    link: 'https://drive.google.com/drive/folders/1zGdBuc5kMTXUsZbdHjTAtoioNsVGBda6?usp=drive_link'
  },
  {
    no: '14',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Artikel Ilmiah Jurnal Pengabdian',
    deskripsi: 'Publikasi artikel pengabdian masyarakat pada Jurnal Nasional E-DIMAS.',
    target: '2026',
    status: 'Accepted',
    aksi: 'Buka Jurnal',
    link: 'https://journal.upgris.ac.id/index.php/e-dimas/article/view/28328'
  },
  {
    no: '15',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Video Pelaksanaan Program Ber-HKI',
    deskripsi: 'Karya rekaman video implementasi program yang telah tercatat Hak Kekayaan Intelektual (HKI).',
    target: '2026',
    status: 'Terbit',
    aksi: 'Video & HKI',
    link: 'https://drive.google.com/drive/folders/1_A0EG6hFDtREn0lCNa0nGWhQP7kmQyuP?usp=drive_link'
  },
  {
    no: '16',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Media Sosial Resmi Desa Wisata',
    deskripsi: 'Kanal promosi digital Desa Wisata Tampirkulon melalui Instagram (@pesona.tampirkulon).',
    target: '2026',
    status: 'Terbit',
    aksi: 'Buka Instagram',
    link: 'https://instagram.com/pesona.tampirkulon'
  },
  {
    no: '17',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'SK Pencanangan Desa Wisata',
    deskripsi: 'Surat Keputusan (SK) resmi penetapan dan pencanangan Desa Wisata Tampirkulon.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat SK Resmi',
    link: 'https://drive.google.com/file/d/1cyZ0EQVrmvPc56tiGR5zewUc0wF4uhtu/view?usp=drive_link'
  },
  {
    no: '18',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'SOP Keselamatan Wisata Tubing',
    deskripsi: 'Dokumen Standar Operasional Pelaksanaan (SOP) wisata air West Tamp Tubing.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat SOP',
    link: 'https://drive.google.com/file/d/12f2jBqxc4dSpttqNOAP3spOPn4SWo37e/view?usp=drive_link'
  },
  {
    no: '19',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Leaflet Promosi Manfaat Wisata Tubing',
    deskripsi: 'Brosur informasi paket dan manfaat kesehatan aktivitas wisata susur sungai.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Lihat Leaflet',
    link: 'https://drive.google.com/file/d/1Uhd_3kSBgbRY9KP6wUpnGaLTgH6V1FS8/view?usp=drive_link'
  },
  {
    no: '20',
    kategori: 'Luaran Tambahan',
    isWajib: false,
    judul: 'Video Tutorial Operasional Website',
    deskripsi: 'Panduan visual penggunaan dan manajemen website desa wisata bagi pengelola POKDARWIS.',
    target: '2026',
    status: 'Terbit',
    aksi: 'Tonton Tutorial',
    link: 'https://drive.google.com/file/d/1qJj7RN5Geh5IV7g0W9CLMJdHZd5LmkH_/view?usp=drive_link'
  }
];

export default function DeliverablesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isTableExpanded, setIsTableExpanded] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef(0);
  const currentDragOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const viewportRef = useRef(null);

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

  const items = DELIVERABLES_6_CARDS;
  const maxIndex = Math.max(0, items.length - cardsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

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

  // Drag and swipe handling for cards slider
  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    currentDragOffsetRef.current = 0;
    setIsDragging(true);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const diff = e.clientX - dragStartXRef.current;
      if (Math.abs(diff) > 5) {
        hasDraggedRef.current = true;
      }

      // Add boundary resistance
      let adjusted = diff;
      if ((currentIndex === 0 && diff > 0) || (currentIndex >= maxIndex && diff < 0)) {
        adjusted = diff * 0.25;
      }
      currentDragOffsetRef.current = adjusted;
      setDragOffset(adjusted);
    };

    const onPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);

      const finalOffset = currentDragOffsetRef.current;
      const viewportWidth = viewportRef.current ? viewportRef.current.offsetWidth : 900;
      const cardWidth = viewportWidth / cardsPerView;
      const threshold = Math.min(60, cardWidth * 0.2);

      if (finalOffset < -threshold && currentIndex < maxIndex) {
        const slides = Math.max(1, Math.round(Math.abs(finalOffset) / cardWidth));
        setCurrentIndex(prev => Math.min(maxIndex, prev + slides));
      } else if (finalOffset > threshold && currentIndex > 0) {
        const slides = Math.max(1, Math.round(Math.abs(finalOffset) / cardWidth));
        setCurrentIndex(prev => Math.max(0, prev - slides));
      }

      setDragOffset(0);
      currentDragOffsetRef.current = 0;

      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 80);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [isDragging, currentIndex, maxIndex, cardsPerView]);

  const handleCaptureClick = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
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

  const displayedTableRows = isTableExpanded
    ? DELIVERABLES_MATRIX_20
    : DELIVERABLES_MATRIX_20.slice(0, 10);

  const dragProgress = (isDragging && viewportRef.current)
    ? (-dragOffset / (viewportRef.current.offsetWidth / cardsPerView))
    : 0;
  const visualIndex = Math.max(0, Math.min(maxIndex, currentIndex + dragProgress));

  return (
    <section id="luaran" className="deliverables-ref-section" data-purpose="outputs-deliverables">
      <div className="editorial-container">
        {/* 1. Section Header */}
        <div className="deliverables-editorial-header">
          <div className="deliverables-header-left">
            <div className="editorial-eyebrow-pill">
              • BUKTI NYATA &amp; DAMPAK PROGRAM •
            </div>
            <h2 className="editorial-title deliverables-editorial-title">
              Capaian Luaran, Publikasi Ilmiah &amp; Hak Cipta
            </h2>
            <p className="editorial-subtitle deliverables-editorial-subtitle">
              Selama 5 bulan pelaksanaan di Desa Tampirkulon, program IN WEST TAMP telah menghasilkan 5 luaran wajib dan<br className="deliverables-sub-break" /> 15 luaran tambahan yang teruji secara akademik, legal, dan berdampak langsung bagi warga.
            </p>
          </div>
        </div>

        {/* 2. Controls Bar (Carousel Arrows) */}
        <div className="deliverables-ref-controls-bar">
          <div className="deliverables-ref-nav-controls">
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
          ref={viewportRef}
          className={`deliverables-ref-slider-viewport ${isDragging ? 'is-dragging' : ''}`}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Katalog Luaran Unggulan Slider"
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onClickCapture={handleCaptureClick}
        >
          <div
            className="deliverables-ref-slider-track"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / cardsPerView)}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)'
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="deliverables-ref-slide-item"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >
                <article className="deliverable-ref-card">
                  <div className="card-top-content">
                    {/* Visual Preview Box with Real Mockup Photo from public/images/luaran */}
                    <div className="ref-preview-box">
                      <div className="ref-preview-img-wrap">
                        <img
                          src={item.image}
                          alt={item.imageAlt || item.judulKartu}
                          className={`ref-preview-img ${item.imageZoom ? 'img-zoom-social' : ''}`}
                          loading="lazy"
                          draggable={false}
                        />
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

        {/* Carousel Dots Pagination Indicator */}
        <div className="deliverables-carousel-dots-wrapper">
          <div
            className="deliverables-carousel-dots-track"
            role="tablist"
            aria-label="Pilih kartu luaran"
          >
            {items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`deliverables-carousel-dot ${idx >= currentIndex && idx < currentIndex + cardsPerView ? 'is-active-card' : ''
                  }`}
                onClick={() => setCurrentIndex(Math.min(maxIndex, idx))}
                aria-label={`Buka kartu luaran ke-${idx + 1}: ${item.judulKartu}`}
                aria-selected={idx >= currentIndex && idx < currentIndex + cardsPerView}
              />
            ))}
            <div
              className="deliverables-carousel-active-pill"
              style={{
                width: `${cardsPerView * 8 + (cardsPerView - 1) * 8}px`,
                transform: `translateX(${visualIndex * 16}px)`,
                transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s ease'
              }}
              aria-hidden="true"
            />
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
                  <th className="col-title">Judul Luaran &amp; Deskripsi</th>
                  <th className="col-target">Target</th>
                  <th className="col-status">Status</th>
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
                      <div className="ref-matrix-title-bold">{row.judul}</div>
                      {row.deskripsi && (
                        <div className="ref-matrix-desc-sub">{row.deskripsi}</div>
                      )}
                    </td>
                    <td className="cell-target">{row.target}</td>
                    <td className="cell-status">
                      <span className={`ref-status-tag ${row.status === 'Accepted'
                        ? 'status-accepted'
                        : row.status === 'Terwujud'
                          ? 'status-terwujud'
                          : 'status-terbit'
                        }`}>
                        {row.status}
                      </span>
                    </td>
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
