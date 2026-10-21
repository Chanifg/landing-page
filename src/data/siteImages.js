/**
 * IN WEST TAMP : Centralized Image Registry & Fallback Mapping
 * Mengelola semua path aset foto dan visual pendukung.
 * Mudah diperbarui saat foto dokumentasi asli resolusi tinggi tersedia.
 */

export const siteImages = {
  hero: {
    mainTeam: '',
    alt: 'Tim 15 Mahasiswa PPK Ormawa Himagi Universitas Tidar 2025',
    label: 'Foto Tim Utama PPK Ormawa Himagi Untidar (15 Mahasiswa)'
  },
  narrative: {
    lele: {
      src: '/images/narrative/potensi-lele.png',
      alt: 'Budidaya Ikan Lele Desa Tampirkulon',
      label: 'Budidaya Ikan Lele'
    },
    tubing: {
      src: '/images/narrative/potensi-tubing.png',
      alt: 'Wisata Air Susur Sungai Gono (West Tamp Tubing)',
      label: 'West Tamp Tubing'
    },
    umkm: {
      src: '/images/narrative/potensi-umkm.png',
      alt: 'Sentra UMKM Olahan Pangan Lokal Tampirkulon',
      label: 'Sentra UMKM Pangan Lokal'
    }
  },
  pillars: {
    pilar1: {
      src: '/images/documentation/pembentukan-pokdarwis.jpg',
      alt: 'Pilar 1: Kelembagaan POKDARWIS & Digitalisasi',
      badge: 'Pilar 1: Governance & Digital',
      date: 'Juli - Agustus 2025'
    },
    pilar2: {
      src: '/images/documentation/pelatihan-k3-basarnas.jpg',
      alt: 'Pilar 2: Standarisasi Keselamatan K3 Basarnas',
      badge: 'Pilar 2: Safety & Water Rescue',
      date: 'Agustus 2025'
    },
    pilar3: {
      src: '/images/documentation/edukasi-olahan-lele.jpg',
      alt: 'Pilar 3: Hilirisasi Produk Sehat & Gizi Lokal',
      badge: 'Pilar 3: Local Nutrition & UMKM',
      date: 'September 2025'
    },
    pilar4: {
      src: '/images/documentation/taman-sehat-toga.jpg',
      alt: 'Pilar 4: Ruang Terbuka Hijau & Lansia Sehat',
      badge: 'Pilar 4: Green Wellness Space',
      date: 'Agustus - September 2025'
    }
  },
  gallery: [
    {
      id: 'bento-1',
      title: 'Pelatihan Water Rescue & Standarisasi Keselamatan Basarnas',
      caption: 'Simulasi tanggap darurat kecelakaan air di Sungai Gono bersama instruktur bersertifikat Basarnas.',
      src: '/images/documentation/pelatihan-k3-basarnas.jpg',
      tag: 'K3 & Water Rescue',
      isHero: true
    },
    {
      id: 'bento-2',
      title: 'Musyawarah Desa & SK Legalitas POKDARWIS',
      caption: 'Penyerahan SK Kepala Desa atas pengesahan kelompok sadar wisata Tampirkulon.',
      src: '/images/documentation/pembentukan-pokdarwis.jpg',
      tag: 'Kelembagaan Desa'
    },
    {
      id: 'bento-3',
      title: 'Pembangunan Ruang Sehat Taman TOGA',
      caption: 'Revitalisasi lahan tidur di area basecamp menjadi kebun tanaman obat keluarga produktif.',
      src: '/images/documentation/taman-sehat-toga.jpg',
      tag: 'Green Wellness'
    },
    {
      id: 'bento-4',
      title: 'Pelatihan Diversifikasi Olahan Lele Ibu PKK',
      caption: 'Inovasi pembuatan bakso dan nugget lele bernutrisi tinggi untuk pencegahan stunting.',
      src: '/images/documentation/edukasi-olahan-lele.jpg',
      tag: 'Gizi & Pangan'
    },
    {
      id: 'bento-5',
      title: 'Pendampingan Standarisasi & Labeling Kemasan UMKM',
      caption: 'Peningkatan daya saing produk keripik tempe dan gula jawa alami Tampirkulon.',
      src: '/images/documentation/sosialisasi-umkm.jpg',
      tag: 'Pemberdayaan UMKM'
    },
    {
      id: 'bento-6',
      title: 'Lanskap Persawahan & Sunset Alami Desa Tampirkulon',
      caption: 'Panorama alam terasering pegunungan yang terintegrasi dalam paket tur wisata.',
      src: '/images/360/sunset-persawahan.jpg',
      tag: 'Pesona Alam Tampirkulon',
      isPanorama: true
    }
  ],
  dpl: {
    name: 'Dosen Pembimbing Lapangan (DPL)',
    title: 'Pembimbing Akademik & Supervisi Program',
    affiliation: 'Program Studi S1 Gizi, Fakultas Ilmu Kesehatan, Universitas Tidar',
    quote: 'Mengarahkan pendekatan Wellness-Tourism berbasis intervensi gizi terapan dan pemberdayaan masyarakat yang terukur serta berkelanjutan.'
  },
  team: [
    { name: 'Rian Pratama', role: 'Ketua Tim Pelaksana', dept: 'S1 Gizi Universitas Tidar', initial: 'RP' },
    { name: 'Nabila Azzahra', role: 'Sekretaris Program', dept: 'S1 Gizi Universitas Tidar', initial: 'NA' },
    { name: 'Fikri Haikal', role: 'Bendahara & Logistik', dept: 'S1 Gizi Universitas Tidar', initial: 'FH' },
    { name: 'Dina Kusuma', role: 'Koordinator Pilar Tubing Care & K3', dept: 'S1 Gizi Universitas Tidar', initial: 'DK' },
    { name: 'Bayu Saputra', role: 'Koordinator Pilar Green Space', dept: 'S1 Gizi Universitas Tidar', initial: 'BS' },
    { name: 'Siti Rahmawati', role: 'Koordinator Pilar Local Creative (Gizi/UMKM)', dept: 'S1 Gizi Universitas Tidar', initial: 'SR' },
    { name: 'Aditya Nugroho', role: 'Koordinator Pilar West Integrated Ecosystem', dept: 'S1 Gizi Universitas Tidar', initial: 'AN' },
    { name: 'Lestari Wulandari', role: 'Divisi Skrining Kesehatan Wisatawan', dept: 'S1 Gizi Universitas Tidar', initial: 'LW' },
    { name: 'Dimas Anggoro', role: 'Divisi Pelatihan Water Rescue & P3K', dept: 'S1 Gizi Universitas Tidar', initial: 'DA' },
    { name: 'Anisa Putri', role: 'Divisi Edukasi Pangan TOGA & Herbal', dept: 'S1 Gizi Universitas Tidar', initial: 'AP' },
    { name: 'Rizky Kurniawan', role: 'Divisi Media Informasi & Tur 360°', dept: 'S1 Gizi Universitas Tidar', initial: 'RK' },
    { name: 'Hani Febriana', role: 'Divisi Humas & Pendampingan POKDARWIS', dept: 'S1 Gizi Universitas Tidar', initial: 'HF' },
    { name: 'Gilang Ramadhan', role: 'Divisi Pemetaan Rute Wisata', dept: 'S1 Gizi Universitas Tidar', initial: 'GR' },
    { name: 'Mega Utami', role: 'Divisi Administrasi & Legalitas SK', dept: 'S1 Gizi Universitas Tidar', initial: 'MU' },
    { name: 'Taufiq Hidayat', role: 'Divisi Pengawasan Lapangan & Evaluasi', dept: 'S1 Gizi Universitas Tidar', initial: 'TH' }
  ]
};
