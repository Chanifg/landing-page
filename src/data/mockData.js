/**
 * IN WEST TAMP - Mock Data Source & Graceful Fallback
 * Berfungsi sebagai sumber data mandiri ketika Supabase belum terhubung.
 */

export const mockPillars = [
  {
    id: 'tubing-care',
    name: 'Tubing Care',
    tagline: 'Standar Keselamatan K3 & Layanan Kesehatan Wisata Air',
    tag_color: '#DF9705',
    summary: 'Meningkatkan standar keselamatan susur sungai Westtamp Tubing melalui sertifikasi K3 penyelamatan air dan pos kesehatan terpadu.',
    before_condition: 'Pengelola wisata susur sungai belum memiliki standarisasi SOP keselamatan, belum bersertifikasi penanganan darurat air (water rescue), dan belum ada pos pemeriksaan kesehatan bagi wisatawan sebelum beraktivitas.',
    intervention: 'Menyelenggarakan pelatihan water rescue bersama Basarnas Kantor SAR, pelatihan P3K bersama PMI, penyusunan buku saku SOP tanggap darurat, serta Health Screening Day bersama Puskesmas Candimulyo.',
    after_condition: 'Tersedia 25 pemuda pengelola wisata yang tersertifikasi K3 dan P3K, SOP keselamatan air terpasang di basecamp, serta pos screening kesehatan rutin untuk memastikan kelayakan fisik pengunjung.',
    key_metrics: [
      { label: 'Pengelola Tersertifikasi', value: '25 Orang' },
      { label: 'Peserta Skrining', value: '60 Pengunjung' }
    ],
    order_index: 1
  },
  {
    id: 'integrated-ecosystem',
    name: 'West Integrated Ecosystem',
    tagline: 'Kelembagaan POKDARWIS & Ekosistem Digital Terpadu',
    tag_color: '#304115',
    summary: 'Mentransformasi pengelolaan wisata yang terfragmentasi menjadi satu ekosistem kelembagaan desa wisata berbadan hukum.',
    before_condition: 'Potensi wisata dan UMKM berjalan sendiri-sendiri tanpa koordinasi, promosi masih mengandalkan informasi lisan tradisional, dan belum terbentuk Kelompok Sadar Wisata (POKDARWIS) resmi desa.',
    intervention: 'Memfasilitasi pembentukan dan pengesahan SK Kepala Desa tentang POKDARWIS Desa Wisata Tampirkulon, merancang identitas visual merek IN WEST TAMP, dan meluncurkan portal sistem informasi terpadu.',
    after_condition: 'Terbentuk kepengurusan POKDARWIS resmi dengan 19 anggota aktif, tata kelola paket wisata 7 spot terpadu, dan lonjakan volume kunjungan wisatawan hingga 95%.',
    key_metrics: [
      { label: 'Anggota POKDARWIS', value: '19 Anggota' },
      { label: 'Lonjakan Kunjungan', value: '95%' }
    ],
    order_index: 2
  },
  {
    id: 'local-creative',
    name: 'Local Creative Innovation',
    tagline: 'Pemberdayaan Ekonomi Ibu PKK & Inovasi Gizi Olahan Lele',
    tag_color: '#C68503',
    summary: 'Mengintegrasikan potensi budidaya lele dan industri pangan rumahan ke dalam rantai pasok eduwisata kuliner bergizi.',
    before_condition: 'Ikan lele hasil budidaya warga hanya dijual mentah dengan margin keuntungan rendah, sementara sentra keripik tempe dan gula jawa belum memiliki standar kemasan yang layak jual.',
    intervention: 'Melatih ibu-ibu PKK dan Kelompok Wanita Tani (KWT) mengolah lele menjadi bakso dan nugget lele bernutrisi tinggi, menyusun buku panduan resep inovasi, serta standarisasi kemasan higienis UMKM.',
    after_condition: 'Sebanyak 34 ibu PKK terampil memproduksi produk olahan bernilai tambah, produk UMKM tersertifikasi layak konsumsi, dan paket eduwisata kuliner desa resmi beroperasi.',
    key_metrics: [
      { label: 'Ibu PKK Terlatih', value: '34 Peserta' },
      { label: 'Varian Resep', value: '4 Menu' }
    ],
    order_index: 3
  },
  {
    id: 'green-wellness',
    name: 'Green Wellness Space',
    tagline: 'Pembangunan Taman TOGA & Kawasan Terbuka Sehat',
    tag_color: '#789F35',
    summary: 'Mengubah lahan tidur di area aliran sungai menjadi ruang terbuka hijau produktif berbasis tanaman obat keluarga dan kebugaran.',
    before_condition: 'Area di sekitar basecamp tubing merupakan lahan kosong terlantar bersemak belukar yang kurang tertata dan belum dimanfaatkan untuk kegiatan produktif warga.',
    intervention: 'Melakukan revitalisasi lahan bersama pemuda desa, membangun taman sehat seluas 21 m², menanam 6 varietas TOGA, menginstal alat gym outdoor sederhana berbasis material lokal, serta mendirikan angkringan sehat.',
    after_condition: 'Kawasan basecamp bertransformasi menjadi pusat relaksasi dan kebugaran desa dengan lingkungan asri, asupan jamu/herbal alami, dan sarana olahraga terbuka.',
    key_metrics: [
      { label: 'Luas Area Terbangun', value: '21 m²' },
      { label: 'Varietas TOGA', value: '6 Varietas' }
    ],
    order_index: 4
  }
];

export const mockDestinations = [
  {
    id: 'spot-1',
    name: 'Sunset di Persawahan',
    category: 'Lanskap & Wisata Alam',
    dusun: 'Kawasan Persawahan Tampirkulon',
    pillar_id: 'green-wellness',
    pillar_name: 'Green Wellness & Eco-Landscape',
    panorama_url: '/images/360/sunset-persawahan.jpg',
    thumbnail_url: '/images/360/sunset-persawahan.jpg',
    description: 'Bentang panorama matahari terbenam di persawahan terasering Desa Tampirkulon yang tenang dan asri, menyuguhkan suasana relaksasi pedesaan dan panorama Gunung Merbabu/Merapi.',
    highlights: ['Spot Foto Golden Hour', 'Udara Bersih Bebas Polusi', 'Lanskap Gunung & Pematang Sawah'],
    map_coord_x: 22.5,
    map_coord_y: 35.0,
    is_available: true,
    order_index: 1
  },
  {
    id: 'spot-2',
    name: 'Basecamp Westtamp & Green Space',
    category: 'Adventure & Wellness Hub',
    dusun: 'Sentra Basecamp Tampirkulon',
    pillar_id: 'tubing-care',
    pillar_name: 'Tubing Care & Green Wellness',
    panorama_url: '/images/360/basecamp-westtamp.jpg',
    thumbnail_url: '/images/360/basecamp-westtamp.jpg',
    description: 'Pusat registrasi wisata susur sungai yang telah direvitalisasi, terintegrasi dengan Taman TOGA 21 m², fasilitas gym outdoor sederhana, dan Angkringan Sehat binaan warga.',
    highlights: ['Pusat Safety Briefing & P3K', 'Taman TOGA 6 Varietas', 'Angkringan Sehat Olahan Warga'],
    map_coord_x: 50.0,
    map_coord_y: 45.0,
    is_available: true,
    order_index: 2
  },
  {
    id: 'spot-3',
    name: 'Sentra Pembuatan Keripik Tempe',
    category: 'Eduwisata Kuliner & UMKM',
    dusun: 'Dusun Sentra UMKM Tampirkulon',
    pillar_id: 'local-creative',
    pillar_name: 'Local Creative Innovation',
    panorama_url: '/images/360/keripik-tempe.jpg',
    thumbnail_url: '/images/360/keripik-tempe.jpg',
    description: 'Sentra produksi keripik tempe renyah gurih khas warga. Wisatawan diajak belajar teknik peragian kedelai alami, pemotongan presisi tradisional, hingga pengemasan produk higienis.',
    highlights: ['Praktik Pembuatan Langsung', 'Standarisasi Kemasan UMKM', 'Pemberdayaan Ibu PKK & KWT'],
    map_coord_x: 68.0,
    map_coord_y: 28.0,
    is_available: true,
    order_index: 3
  },
  {
    id: 'spot-4',
    name: 'Wisata Budaya Karawitan',
    category: 'Warisan Seni Tradisional',
    dusun: 'Balai Warga Tampirkulon',
    pillar_id: 'integrated-ecosystem',
    pillar_name: 'West Integrated Ecosystem',
    panorama_url: '/images/360/karawitan.jpg',
    thumbnail_url: '/images/360/karawitan.jpg',
    description: 'Sanggar kesenian gamelan karawitan kebanggaan warga. Pengunjung dapat menikmati alunan gending Jawa yang syahdu dan belajar langsung memainkan instrumen saron, kendang, dan gong.',
    highlights: ['Gamelan Pelog & Slendro', 'Harmoni Warga Lintas Generasi', 'Pengalaman Budaya Imersif'],
    map_coord_x: 55.0,
    map_coord_y: 75.0,
    is_available: true,
    order_index: 4
  },
  {
    id: 'spot-5',
    name: 'Tuk Putri (Mata Air Alami)',
    category: 'Wisata Konservasi Air',
    dusun: 'Kawasan Mata Air Tampirkulon',
    pillar_id: 'green-wellness',
    pillar_name: 'Green Wellness & Konservasi',
    panorama_url: '/images/360/tuk-putri.jpg',
    thumbnail_url: '/images/360/tuk-putri.jpg',
    description: 'Mata air alami jernih yang memancar di bawah keteduhan pohon rindang. Menjadi simbol kesucian alam dan sumber air bersih kehidupan masyarakat Desa Tampirkulon.',
    highlights: ['Air Alami Segar & Sejuk', 'Suasana Rindang Asri', 'Konservasi Lingkungan Hidup'],
    map_coord_x: 80.0,
    map_coord_y: 55.0,
    is_available: true,
    order_index: 5
  }
];

export const mockMetrics = [
  {
    id: 'metric-1',
    label: 'Pilar Program Terpadu',
    value: '4',
    unit: 'Pilar',
    description: 'Tubing Care, West Integrated Ecosystem, Local Creative Innovation, Green Wellness Space',
    order_index: 1
  },
  {
    id: 'metric-2',
    label: 'Mahasiswa Berdedikasi',
    value: '15',
    unit: 'Mahasiswa',
    description: 'Tim pelaksana lintas keilmuan dari Himpunan Mahasiswa Gizi Universitas Tidar',
    order_index: 2
  },
  {
    id: 'metric-3',
    label: 'Masa Pengabdian Intensif',
    value: '5',
    unit: 'Bulan',
    description: 'Rangkaian pengabdian terstruktur dari perencanaan, pelatihan, implementasi, hingga evaluasi',
    order_index: 3
  },
  {
    id: 'metric-4',
    label: 'Kelompok Sasaran Berdaya',
    value: '6',
    unit: 'Kelompok',
    description: 'Pengelola tubing, Ibu PKK, Kelompok Wanita Tani, Karang Taruna, UMKM pangan, dan Perangkat Desa',
    order_index: 4
  },
  {
    id: 'metric-5',
    label: 'Lonjakan Kunjungan Wisatawan',
    value: '95%',
    unit: 'Kenaikan',
    description: 'Peningkatan kunjungan wisatawan pasca integrasi paket wisata dan promosi digital',
    order_index: 5
  },
  {
    id: 'metric-6',
    label: 'Pengelola Wisata Bersertifikasi K3',
    value: '25',
    unit: 'Orang',
    description: 'Pemuda pengelola wisata air terlatih penanganan darurat air dan P3K standar Basarnas/PMI',
    order_index: 6
  }
];

export const mockDeliverables = [
  {
    id: 'deliv-1',
    category: 'wajib',
    categoryLabel: 'Luaran Wajib Belmawa',
    title: 'SK Legalitas POKDARWIS Tampirkulon',
    type: 'Dokumen Legalitas & Kelembagaan',
    issuer: 'Pemerintah Desa Tampirkulon & Disparpora',
    reference: 'SK Kepala Desa No. 188.4/24/KEP/X/2025',
    description: 'Surat Keputusan Kepala Desa tentang Pembentukan dan Pengesahan Kelompok Sadar Wisata Desa Tampirkulon dengan 19 anggota pengurus aktif.',
    impact: 'Memberikan payung hukum formal pengelolaan pariwisata terpadu dan dasar perizinan operasional wisata susur sungai.',
    file_or_link_url: '#',
    is_external_link: false,
    icon_name: 'FileText',
    order_index: 1
  },
  {
    id: 'deliv-2',
    category: 'wajib',
    categoryLabel: 'Luaran Wajib Belmawa',
    title: 'SOP Keselamatan & Tanggap Darurat Air K3',
    type: 'Standar Operasional Keselamatan Air',
    issuer: 'Basarnas Kantor SAR Semarang & PMI Kab. Magelang',
    reference: 'Standarisasi K3 Penyelamatan Air 2025',
    description: 'Buku panduan prosedur operasional standar keselamatan wisata air, mitigasi arus sungai, dan pertolongan pertama pada kecelakaan (P3K).',
    impact: 'Menjadi pedoman harian 25 operator tubing dalam menjamin keselamatan wisatawan dan tanggap darurat kecelakaan air.',
    file_or_link_url: '#',
    is_external_link: false,
    icon_name: 'ShieldCheck',
    order_index: 2
  },
  {
    id: 'deliv-3',
    category: 'tambahan',
    categoryLabel: 'Luaran Tambahan',
    title: 'Platform Web IN WEST TAMP & Tur Virtual',
    type: 'Sistem Digital Terpadu & Hak Cipta HKI',
    issuer: 'Kemenkumham RI & Tim Pengembang PPK Ormawa',
    reference: 'Pencatatan Ciptaan No. EC00202510982',
    description: 'Platform digital resmi yang memadukan profil 7 destinasi, tur virtual 360 derajat interaktif, direktori UMKM, dan pemesanan tiket online.',
    impact: 'Memperluas jangkauan promosi wisata ke tingkat nasional serta mempermudah wisatawan merencanakan kunjungan.',
    file_or_link_url: '#tur-360',
    linkText: 'Jelajahi Tur 360°',
    is_external_link: false,
    icon_name: 'Globe',
    order_index: 3
  },
  {
    id: 'deliv-4',
    category: 'tambahan',
    categoryLabel: 'Luaran Tambahan',
    title: 'Buku Saku Resep Inovasi Olahan Lele & TOGA',
    type: 'Publikasi Buku Panduan Ber-ISBN',
    issuer: 'Perpustakaan Nasional RI & Badan Penerbit Untidar',
    reference: 'ISBN: 978-623-88912-3-4',
    description: 'Buku panduan pengolahan diversifikasi produk bernutrisi tinggi berbasis lele dan tanaman obat keluarga bagi ibu-ibu PKK.',
    impact: 'Memberdayakan 34 ibu rumah tangga untuk memproduksi pangan olahan bernilai ekonomi tinggi serta mendukung pencegahan stunting.',
    file_or_link_url: '#',
    is_external_link: false,
    icon_name: 'BookOpen',
    order_index: 4
  },
  {
    id: 'deliv-5',
    category: 'wajib',
    categoryLabel: 'Luaran Wajib Belmawa',
    title: 'Video Profil & Dokumenter Pengabdian 4K',
    type: 'Karya Dokumenter Audio Visual',
    issuer: 'Tim Publikasi PPK Ormawa & Humas Untidar',
    reference: 'Arsip Belmawa & YouTube Channel Resmi',
    description: 'Karya dokumenter kilas balik 5 bulan transformasi kawasan Tampirkulon, testimoni warga, dan profil daya tarik kebugaran desa.',
    impact: 'Menjadi media promosi visual utama bagi calon wisatawan dan bahan pelaporan resmi evaluasi Ditjen Diktiristek.',
    file_or_link_url: 'https://youtube.com',
    linkText: 'Buka Video YouTube',
    is_external_link: true,
    icon_name: 'Video',
    order_index: 5
  },
  {
    id: 'deliv-6',
    category: 'wajib',
    categoryLabel: 'Luaran Wajib Belmawa',
    title: 'Publikasi Media Massa & Artikel Jurnal',
    type: 'Diseminasi Media & Naskah Ilmiah',
    issuer: 'Media Nasional, Surat Kabar Daerah & Jurnal SINTA',
    reference: '3 Media Daring Nasional & 1 Jurnal Pengabdian',
    description: 'Rangkaian siaran pers dan artikel pengabdian masyarakat mengenai implementasi konsep wellness-tourism di tingkat desa.',
    impact: 'Menyebarluaskan model intervensi terstruktur Tampirkulon sebagai inspirasi pengembangan desa wisata di wilayah lain.',
    file_or_link_url: 'https://untidar.ac.id',
    linkText: 'Buka Siaran Berita',
    is_external_link: true,
    icon_name: 'Newspaper',
    order_index: 6
  },
  {
    id: 'deliv-7',
    category: 'tambahan',
    categoryLabel: 'Luaran Tambahan',
    title: 'Peta Panduan Rute & Zonasi Wisata Terpadu',
    type: 'Peta Spasial & Navigasi Wisatawan',
    issuer: 'Bappeda Kab. Magelang & POKDARWIS Tampirkulon',
    reference: 'Peta Kawasan Terpadu IN WEST TAMP 2025',
    description: 'Peta navigasi cetak dan digital yang merangkum rute jelajah 7 destinasi: Basecamp, Taman TOGA, sentra UMKM, Tuk Putri, hingga sunset sawah.',
    impact: 'Memandu alur kunjungan wisatawan agar merata ke seluruh dusun dan mendukung belanja produk UMKM lokal.',
    file_or_link_url: '#',
    is_external_link: false,
    icon_name: 'Map',
    order_index: 7
  }
];

export const mockDocumentation = [
  {
    id: 'doc-1',
    title: 'Pelatihan Water Rescue Bersama Basarnas',
    pillar_id: 'tubing-care',
    image_url: '/images/poster.png',
    activity_date: '2025-08-15',
    caption: 'Simulasi evakuasi korban darurat di aliran sungai tubing oleh instruktur Basarnas Kantor SAR.',
    is_featured: true
  },
  {
    id: 'doc-2',
    title: 'Health Screening Day Bersama Puskesmas',
    pillar_id: 'tubing-care',
    image_url: '/images/poster.png',
    activity_date: '2025-08-20',
    caption: 'Pemeriksaan tensi darah dan kelayakan fisik pengunjung bersama tim medis Puskesmas Candimulyo.',
    is_featured: true
  },
  {
    id: 'doc-3',
    title: 'Musyawarah Pembentukan SK POKDARWIS',
    pillar_id: 'integrated-ecosystem',
    image_url: '/images/poster.png',
    activity_date: '2025-07-28',
    caption: 'Rapat pleno penetapan struktur organisasi kelompok sadar wisata bersama kepala desa dan tokoh warga.',
    is_featured: true
  },
  {
    id: 'doc-4',
    title: 'Pelatihan Diversifikasi Olahan Lele Ibu PKK',
    pillar_id: 'local-creative',
    image_url: '/images/poster.png',
    activity_date: '2025-09-02',
    caption: 'Praktik langsung pembuatan bakso dan nugget lele kaya protein bersama kelompok wanita tani.',
    is_featured: true
  },
  {
    id: 'doc-5',
    title: 'Standarisasi Kemasan Keripik Tempe',
    pillar_id: 'local-creative',
    image_url: '/images/poster.png',
    activity_date: '2025-09-10',
    caption: 'Pendampingan desain label dan teknik penyegelan kemasan produk UMKM berdaya saing.',
    is_featured: false
  },
  {
    id: 'doc-6',
    title: 'Gotong Royong Pembangunan Taman TOGA',
    pillar_id: 'green-wellness',
    image_url: '/images/poster.png',
    activity_date: '2025-08-05',
    caption: 'Aksi penanaman 6 jenis tanaman herbal obat keluarga bersama pemuda karang taruna di basecamp.',
    is_featured: true
  }
];

export const mockGuestbook = [
  {
    id: 'gb-1',
    sender_name: 'Dr. Ir. Suharyanto, M.Si.',
    sender_role: 'Juri PPK Ormawa',
    sender_institution: 'Reviewer Nasional Diktisaintek',
    message: 'Inovasi yang sangat mengesankan. Keterpaduan antara keselamatan K3 wisata air dan pembentukan POKDARWIS terbukti nyata lewat tur 360 dan dokumen SK resmi.',
    rating: 5,
    is_approved: true,
    created_at: '2026-09-21T10:30:00Z'
  },
  {
    id: 'gb-2',
    sender_name: 'Bambang Irawan',
    sender_role: 'Wisatawan',
    sender_institution: 'Komunitas Tubing Magelang',
    message: 'Susur sungainya seru dan sangat aman karena pemandunya sudah bersertifikat Basarnas. Angkringan sehatnya juga menyediakan minuman herbal yang segar.',
    rating: 5,
    is_approved: true,
    created_at: '2026-09-21T14:15:00Z'
  },
  {
    id: 'gb-3',
    sender_name: 'Siti Fatimah',
    sender_role: 'Warga Desa',
    sender_institution: 'Ibu PKK Tampirkulon',
    message: 'Terima kasih mahasiswa Untidar sudah melatih kami membuat bakso lele, sekarang sudah mulai kami jual untuk oleh-oleh wisatawan.',
    rating: 5,
    is_approved: true,
    created_at: '2026-09-22T08:00:00Z'
  }
];
