/**
 * Data Konfigurasi Resmi PPK Ormawa HIMAGI Universitas Tidar 2026
 * Program: IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon)
 */

const PROGRAM_DATA = {
  meta: {
    title: "IN WEST TAMP",
    fullTitle: "Integrated Wellness-Tourism Area Tampirkulon",
    subtitle: "Pengembangan Wellness-Tourism Desa Tampirkulon Melalui Pemberdayaan Masyarakat dengan Pendekatan Kesehatan dan Smart Management",
    ormawa: "Himpunan Mahasiswa Gizi (HIMAGI)",
    university: "Universitas Tidar (UNTIDAR) Magelang",
    dosenPembimbing: "Mira Dian Naufalina S.Gz., M.Gizi.",
    location: "Desa Tampirkulon, Kec. Candimulyo, Kab. Magelang, Jawa Tengah",
    destination: "Wisata Air West Tamp Tubing (Sungai Gono)",
    programYear: "2026",
    badgeText: "PPK Ormawa 2026 • Kemendikbudristek",
    logoPath: "assets/images/logo-himagi.png",
    description: "Portal resmi akses cepat dokumentasi, media sosial, dan katalog 14 luaran program pengabdian PPK Ormawa HIMAGI UNTIDAR di Desa Wisata Tampirkulon."
  },

  // Kartu Aksi Prioritas (Bento Highlight)
  quickLinks: [
    {
      id: "drive-doc",
      title: "Google Drive Dokumentasi Program",
      subtitle: "Arsip lengkap foto kegiatan, video dokumenter, absensi, BAST, dan laporan administrasi",
      badge: "Utama & Real-time",
      badgeType: "gold",
      icon: "drive",
      url: "https://drive.google.com/drive/folders/1Jbhjdfii26xz2DDXSqwGGW3LCW9cXUWC?usp=drive_link",
      actionText: "Akses Google Drive",
      isPrimary: true
    },
    {
      id: "ticket-system",
      title: "Sistem Pemesanan Tiket Desa Wisata Tampirkulon",
      subtitle: "Portal pemesanan tiket daring West Tamp Tubing, eduwisata TOGA, & paket wisata sehat",
      badge: "Layanan Wisata",
      badgeType: "green",
      icon: "ticket",
      url: "https://wisatatampirkulon.com/",
      actionText: "Kunjungi Portal Tiket",
      isPrimary: false
    }
  ],

  // Kanal Media Sosial & Komunikasi Resmi
  socials: [
    {
      name: "Instagram",
      handle: "@ppkormawa.himagiuntidar",
      url: "https://www.instagram.com/ppkormawa.himagiuntidar/",
      icon: "instagram",
      description: "Galeri foto & update harian"
    },
    {
      name: "TikTok",
      handle: "@ppkormawahimagi26",
      url: "https://www.tiktok.com/@ppkormawahimagi26",
      icon: "tiktok",
      description: "Konten video seru & edukasi"
    },
    {
      name: "YouTube",
      handle: "@himagiuntidar",
      url: "https://youtube.com/@himagiuntidar",
      icon: "youtube",
      description: "Dokumenter & Profil Wisata"
    },
    {
      name: "Narahubung",
      handle: "Tim Pengelola",
      url: "https://wa.me/6281234567890?text=Halo%20Tim%20PPK%20Ormawa%20IN%20WEST%20TAMP",
      icon: "whatsapp",
      description: "Informasi & Kolaborasi"
    }
  ],

  // 4 Pilar Subprogram
  subprograms: [
    {
      id: "west-integrated-ecosystem",
      name: "West Integrated Ecosystem",
      focus: "Pembentukan POKDARWIS, Digitalisasi Tiket & Promosi Wisata",
      items: [
        "Pembentukan & Penguatan POKDARWIS",
        "Digitalisasi Tiket & Promosi Wisata",
        "Revitalisasi Basecamp Wisata"
      ]
    },
    {
      id: "tubing-care",
      name: "Tubing Care",
      focus: "Pelatihan K3 bersama BASARNAS, P3K bersama PMI, Layanan kesehatan & PHBS, Health Screening Day",
      items: [
        "Pelatihan: K3 bersama BASARNAS, P3K bersama PMI, Layanan kesehatan & PHBS",
        "Health Screening Day"
      ]
    },
    {
      id: "local-creative",
      name: "Local Creative",
      focus: "Pemberdayaan Bakso Lele PKK, Budidaya TOGA KWT, Eduwisata & Resep ISBN",
      items: [
        "Pemberdayaan Bakso Lele PKK",
        "Budidaya Tanaman Obat Keluarga (TOGA)",
        "Pelatihan Eduwisata"
      ]
    },
    {
      id: "green-wellness-space",
      name: "Green Wellness Space",
      focus: "Pembangunan Taman Sehat, Fasilitas Gym Sederhana, Angkringan Sehat Berbasis Lokal",
      items: [
        "Pembangunan Taman Sehat",
        "Fasilitas Gym Sederhana",
        "Angkringan Sehat Berbasis Lokal"
      ]
    }
  ],

  // Statistik Ringkas Program
  stats: [
    { value: "15", label: "Mahasiswa Tim Pelaksana" },
    { value: "4", label: "Pilar Subprogram Inovasi" },
    { value: "14", label: "Luaran Program Tercapai" },
    { value: "1", label: "Desa Wisata Binaan Mandiri" }
  ],

  // 14 Luaran Resmi Program PPK Ormawa (Wajib & Tambahan)
  luaran: [
    {
      id: 1,
      no: "01",
      title: "Sublaporan Akhir PPK Ormawa",
      category: "publikasi",
      categoryLabel: "Laporan & Jurnal",
      status: "Terbit",
      statusBadge: "success",
      description: "Laporan komprehensif pertanggungjawaban pelaksanaan dan capaian indikator program IN WEST TAMP.",
      url: "#",
      type: "PDF / Dokumen",
      isAvailable: true
    },
    {
      id: 2,
      no: "02",
      title: "Media Sosial Publikasi (@ppkormawa.himagiuntidar)",
      category: "media",
      categoryLabel: "Media & Edukasi",
      status: "Aktif & Terverifikasi",
      statusBadge: "primary",
      description: "Saluran promosi dan publikasi berkala melalui Instagram @ppkormawa.himagiuntidar dan TikTok @ppkormawahimagi26.",
      url: "https://www.instagram.com/ppkormawa.himagiuntidar/",
      type: "Media Sosial",
      isAvailable: true
    },
    {
      id: 3,
      no: "03",
      title: "Buku Refleksi Ormawa: IN WEST TAMP",
      category: "publikasi",
      categoryLabel: "Laporan & Jurnal",
      status: "Terbit",
      statusBadge: "success",
      description: "Buku refleksi implementasi pemberdayaan masyarakat Desa Tampirkulon dengan pendekatan kesehatan dan smart management.",
      url: "#",
      type: "E-Book / Cetak",
      isAvailable: true
    },
    {
      id: 4,
      no: "04",
      title: "Video Dokumenter Resmi Program",
      category: "media",
      categoryLabel: "Media & Edukasi",
      status: "Tayang di YouTube",
      statusBadge: "primary",
      description: "Video dokumenter perjalanan pengabdian mahasiswa HIMAGI Untidar di Desa Tampirkulon melalui kanal @himagiuntidar.",
      url: "https://youtube.com/@himagiuntidar",
      type: "Video Dokumenter",
      isAvailable: true
    },
    {
      id: 5,
      no: "05",
      title: "Poster Hasil Pelaksanaan Program",
      category: "media",
      categoryLabel: "Media & Edukasi",
      status: "Terbit",
      statusBadge: "success",
      description: "Poster visual informatif hasil pelaksanaan kegiatan pengabdian masyarakat (tersedia hardfile dan softfile).",
      url: "#",
      type: "Desain / Poster",
      isAvailable: true
    },
    {
      id: 6,
      no: "06",
      title: "Kelembagaan POKDARWIS Desa Tampirkulon",
      category: "inovasi",
      categoryLabel: "Inovasi & Kawasan",
      status: "SK Disparpora Terbit",
      statusBadge: "gold",
      description: "Surat Keputusan (SK) resmi pembentukan POKDARWIS dari Dinas Pariwisata, Kepemudaan dan Olahraga Kab. Magelang.",
      url: "#",
      type: "SK Kelembagaan",
      isAvailable: true
    },
    {
      id: 7,
      no: "07",
      title: "Website Pemesanan Tiket & Video Profil Ber-HKI",
      category: "inovasi",
      categoryLabel: "Inovasi & Kawasan",
      status: "Tersertifikasi HKI",
      statusBadge: "gold",
      description: "Sistem reservasi tiket daring West Tamp Tubing dilengkapi video profil wisata yang terdaftar Hak Kekayaan Intelektual.",
      url: "#",
      type: "Sistem & Sertifikat HKI",
      isAvailable: true
    },
    {
      id: 8,
      no: "08",
      title: "Taman Kesehatan & Merk Dagang Produk Olahan",
      category: "inovasi",
      categoryLabel: "Inovasi & Kawasan",
      status: "Terealisasi & Merk Terdaftar",
      statusBadge: "gold",
      description: "Fasilitas Tanaman Obat Keluarga (TOGA), outdoor gym sederhana, angkringan sehat (bakso lele, jahe telang, kelapa jeruk).",
      url: "#",
      type: "Kawasan & Merk Dagang",
      isAvailable: true
    },
    {
      id: 9,
      no: "09",
      title: "Leaflet Edukasi PHBS di Lokasi Tubing",
      category: "media",
      categoryLabel: "Media & Edukasi",
      status: "Terbit & Disebarkan",
      statusBadge: "success",
      description: "Media edukasi cetak tentang Pola Hidup Bersih dan Sehat (PHBS) bagi wisatawan yang berkunjung ke kawasan tubing.",
      url: "#",
      type: "Leaflet Kesehatan",
      isAvailable: true
    },
    {
      id: 10,
      no: "10",
      title: "Poster Panduan 6 Langkah Cuci Tangan",
      category: "media",
      categoryLabel: "Media & Edukasi",
      status: "Terbit & Terpasang",
      statusBadge: "success",
      description: "Poster edukasi langkah-langkah mencuci tangan higienis yang terpasang di spot strategis kawasan wisata sungai.",
      url: "#",
      type: "Poster Sanitasi",
      isAvailable: true
    },
    {
      id: 11,
      no: "11",
      title: "Banner Kebersihan Lingkungan Sungai Gono",
      category: "media",
      categoryLabel: "Media & Edukasi",
      status: "Terpasang di Lokasi",
      statusBadge: "success",
      description: "Banner himbauan larangan membuang sampah sembarangan untuk menjaga keasrian aliran Sungai Gono.",
      url: "#",
      type: "Banner Fisik",
      isAvailable: true
    },
    {
      id: 12,
      no: "12",
      title: "Publikasi Program di Media Massa",
      category: "publikasi",
      categoryLabel: "Laporan & Jurnal",
      status: "Terbit Nasional & Lokal",
      statusBadge: "success",
      description: "Liputan artikel berita program pengabdian di portal media terkemuka (Magelang News, Jawa Pos, Kompas).",
      url: "#",
      type: "Berita Media Massa",
      isAvailable: true
    },
    {
      id: 13,
      no: "13",
      title: "Buku Resep Olahan Pangan Lokal Ber-ISBN",
      category: "inovasi",
      categoryLabel: "Inovasi & Kawasan",
      status: "Ber-ISBN Untidar",
      statusBadge: "gold",
      description: "Buku resep panduan inovasi pangan sehat bergizi berbasis ikan lele, TOGA, dan kelapa muda ber-ISBN Universitas Tidar.",
      url: "#",
      type: "Buku ISBN",
      isAvailable: true
    },
    {
      id: 14,
      no: "14",
      title: "Artikel Pengabdian di Jurnal E-DIMAS",
      category: "publikasi",
      categoryLabel: "Laporan & Jurnal",
      status: "Accepted",
      statusBadge: "info",
      description: "Publikasi ilmiah 1 artikel Pengabdian Kepada Masyarakat pada Jurnal Nasional Terakreditasi E-DIMAS.",
      url: "#",
      type: "Artikel Jurnal Ilmiah",
      isAvailable: true
    }
  ]
};

// Export untuk browser environment
if (typeof window !== "undefined") {
  window.PROGRAM_DATA = PROGRAM_DATA;
}
