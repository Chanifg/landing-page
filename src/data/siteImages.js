/**
 * IN WEST TAMP : Centralized Image Registry & Fallback Mapping
 * Mengelola semua path aset foto dan visual pendukung.
 * Mudah diperbarui saat foto dokumentasi asli resolusi tinggi tersedia.
 */

export const siteImages = {
  hero: {
    mainTeam: '/images/hero/hero-team.jpg',
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
    // Cluster 1
    {
      id: 'bento-1',
      title: 'Pelatihan Water Rescue & Standarisasi Basarnas',
      caption: '',
      src: '/images/documentation/pelatihan-k3-basarnas.jpg'
    },
    {
      id: 'bento-2',
      title: 'Musyawarah Desa & SK Legalitas POKDARWIS',
      caption: '',
      src: '/images/documentation/pembentukan-pokdarwis.jpg'
    },
    {
      id: 'bento-3',
      title: 'Pembangunan Ruang Sehat Taman TOGA',
      caption: '',
      src: '/images/documentation/taman-sehat-toga.jpg'
    },
    {
      id: 'bento-4',
      title: 'Pelatihan Diversifikasi Olahan Lele Ibu PKK',
      caption: '',
      src: '/images/documentation/edukasi-olahan-lele.jpg'
    },
    {
      id: 'bento-5',
      title: 'Aksi Wisata Susur Sungai Tubing Tampirkulon',
      caption: '',
      src: '/images/documentation/aksi-wisata-tubing.jpg'
    },
    {
      id: 'bento-6',
      title: 'Pendampingan Standarisasi & Kemasan UMKM',
      caption: '',
      src: '/images/documentation/sosialisasi-umkm.jpg'
    },

    // Cluster 2
    {
      id: 'bento-7',
      title: 'Kesenian Tradisional Jathilan Warga',
      caption: '',
      src: '/images/documentation/Jathilan.JPG'
    },
    {
      id: 'bento-8',
      title: 'Pemberdayaan Produk Olahan Jamu Herbal',
      caption: '',
      src: '/images/documentation/Jual Jamu.JPG'
    },
    {
      id: 'bento-9',
      title: 'Pemeriksaan Kesehatan & Skrining Kebugaran',
      caption: '',
      src: '/images/documentation/health-screening.jpg'
    },
    {
      id: 'bento-10',
      title: 'Aktivitas Pemberdayaan Masyarakat Lapangan',
      caption: '',
      src: '/images/documentation/PXL_20260904_014732319.jpg'
    },
    {
      id: 'bento-11',
      title: 'Sinergi Warga dan Tim Pelaksana PPK Ormawa',
      caption: '',
      src: '/images/documentation/PXL_20260801_074623914.jpg'
    },
    {
      id: 'bento-12',
      title: 'Aktivitas Dokumentasi Lapangan',
      caption: '',
      src: '/images/documentation/IMG_3234.JPG'
    },

    // Cluster 3
    {
      id: 'bento-13',
      title: 'Sosialisasi Program Edukasi Gizi & Wisata',
      caption: '',
      src: '/images/documentation/PXL_20260730_093250375.jpg'
    },
    {
      id: 'bento-14',
      title: 'Edukasi Pengolahan Tanaman Obat Keluarga',
      caption: '',
      src: '/images/documentation/PXL_20260815_035409562.jpg'
    },
    {
      id: 'bento-15',
      title: 'Pendampingan Produk Inovasi Lokal Desa',
      caption: '',
      src: '/images/documentation/PXL_20260904_022345101.jpg'
    },
    {
      id: 'bento-16',
      title: 'Pembangunan Sarana Kebugaran & Taman Sehat',
      caption: '',
      src: '/images/documentation/PXL_20260906_064321080.jpg'
    },
    {
      id: 'bento-17',
      title: 'Uji Kelayakan Jalur Wisata & Mitigasi Air',
      caption: '',
      src: '/images/documentation/PXL_20260812_022140816.jpg'
    },
    {
      id: 'bento-18',
      title: 'Koordinasi Kelembagaan Bersama Perangkat Desa',
      caption: '',
      src: '/images/documentation/PXL_20260715_100409504.jpg'
    },

    // Cluster 4 (Foto Tambahan Terbaru)
    {
      id: 'bento-19',
      title: 'Dokumentasi Lapangan & Interaksi Warga',
      caption: '',
      src: '/images/documentation/PXL_20260718_095025059.jpg'
    },
    {
      id: 'bento-20',
      title: 'Kegiatan Kolaborasi Tim Mahasiswa',
      caption: '',
      src: '/images/documentation/PXL_20260904_034511263.jpg'
    },
    {
      id: 'bento-21',
      title: 'Pemberdayaan Masyarakat Tampirkulon',
      caption: '',
      src: '/images/documentation/IMG-20260921-WA0028.jpg'
    },
    {
      id: 'bento-22',
      title: 'Aktivitas Program Pengabdian Ormawa',
      caption: '',
      src: '/images/documentation/PXL_20260904_030614081.jpg'
    },
    {
      id: 'bento-23',
      title: 'Pendampingan dan Diskusi Bersama Komunitas',
      caption: '',
      src: '/images/documentation/PXL_20260715_135125017.jpg'
    },
    {
      id: 'bento-24',
      title: 'Kunjungan dan Pemantauan Potensi Wilayah',
      caption: '',
      src: '/images/documentation/Salinan PXL_20260801_042839577.jpg'
    }
  ],
  dpl: {
    name: 'Mira Dian Naufalina, S.Gz., M.Gz.',
    role: 'Dosen Pembimbing Lapangan',
    title: 'Pembimbing Akademik & Supervisi Program',
    affiliation: 'Program Studi S1 Gizi, Fakultas Pertanian, Universitas Tidar',
    initial: 'MD',
    image: '/images/team/Mira Dian Naufalina S.Gz., M.Gz_Dosen Pendamping.jpeg',
    isPlaceholder: false
  },
  team: [
    { 
      name: 'Aldila Eka Syahbani', 
      role: 'Ketua Tim Pelaksana', 
      dept: 'S1 Gizi 2024', 
      initial: 'AE',
      image: '/images/team/Aldila Eka Syahbani_S1 Gizi 2024_Ketua.png'
    },
    { 
      name: 'Meisy Muliasa Insani', 
      role: 'Sekretaris Program', 
      dept: 'S1 Gizi 2024', 
      initial: 'MI',
      image: '/images/team/Meisy Muliasa Insani_S1 Gizi 2024_Sekretaris.png'
    },
    { 
      name: 'Zita Tsani Suraya', 
      role: 'Bendahara', 
      dept: 'S1 Gizi 2024', 
      initial: 'ZT',
      image: '/images/team/Zita Tsani Suraya_S1 Gizi 2024_Bendahara.png'
    },
    { 
      name: 'Achmad Chanif Rahmatullah', 
      role: 'West Integrated Ecosystem', 
      dept: 'S1 Teknologi Informasi', 
      initial: 'AC',
      image: '/images/team/Achmad Chanif Rahmatullah_S1 Tekno Infor_West.png'
    },
    { 
      name: 'Fanny Dwi Aryahman', 
      role: 'West Integrated Ecosystem', 
      dept: 'S1 Pariwisata 2023', 
      initial: 'FA',
      image: '/images/team/Fanny Dwi Aryahman_S1 Pariwisata 2023_ West.png'
    },
    { 
      name: 'Marla Yuni Rahmawati', 
      role: 'West Integrated Ecosystem', 
      dept: 'S1 Manajemen', 
      initial: 'MR',
      image: '/images/team/Marla Yuni Rahmawati_S1 Manajm_West.png'
    },
    { 
      name: 'Ahnaf Daffa Maulana', 
      role: 'Tubing Care & K3', 
      dept: 'S1 Gizi 2024', 
      initial: 'AD',
      image: '/images/team/Ahnaf Daffa Maulana_S1 gizi 2024_ Tubing Care.png'
    },
    { 
      name: 'Amyroh Tsabitha Majid', 
      role: 'Tubing Care & K3', 
      dept: 'S1 Gizi 2024', 
      initial: 'AM',
      image: '/images/team/Amyroh Tsabitha Majid_S1 Gizi 2024_Tubing care.png'
    },
    { 
      name: 'Nazwa Fesananta A', 
      role: 'Tubing Care & K3', 
      dept: 'S1 Gizi 2024', 
      initial: 'NF',
      image: '/images/team/Nazwa Fesananta A_S1 Gizi 2024_Tubing Care.png'
    },
    { 
      name: 'Engelyna Novia Putri', 
      role: 'Green Wellness Space', 
      dept: 'S1 Gizi 2024', 
      initial: 'EP',
      image: '/images/team/Engelyna Novia Putri_S1 Gizi 2024_Wellness.png'
    },
    { 
      name: 'Ferdiyanto', 
      role: 'Green Wellness Space', 
      dept: 'S1 Teknologi Informasi 2024', 
      initial: 'FY',
      image: '/images/team/Ferdiyanto_S1 Tekno Informa 2024_Wellness Space.png'
    },
    { 
      name: 'Yushita Rima Anjani', 
      role: 'Green Wellness Space', 
      dept: 'S1 Gizi 2024', 
      initial: 'YA',
      image: '/images/team/Yushita Rima Anjani_S1 Gizi 2024_Wellness.png'
    },
    { 
      name: 'Adelia Salwa Putri M', 
      role: 'Nutri Local', 
      dept: 'S1 Gizi 2024', 
      initial: 'AP',
      image: '/images/team/Adelia Salwa Putri M_S1 Gizi 2024_Nutri Local.png'
    },
    { 
      name: 'Dina Rohadatul Aisy', 
      role: 'Nutri Local', 
      dept: 'S1 Gizi 2024', 
      initial: 'DA',
      image: '/images/team/Dina Rohadatul Aisy_S1 Gizi 2024_Nutrilocal.png'
    },
    { 
      name: 'Hardinatasya Salva M', 
      role: 'Nutri Local', 
      dept: 'S1 Gizi 2024', 
      initial: 'HS',
      image: '/images/team/Hardinatasya Salva M_S1 Gizi 2024-Nutrilocal.png'
    }
  ]
};
