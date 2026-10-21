-- ============================================================================
-- SKEMA BASIS DATA POSTGRESQL & KEBIJAKAN KEAMANAN (RLS)
-- Proyek: IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon)
-- Program: PPK Ormawa Himagi Universitas Tidar 2025
-- ============================================================================

-- 1. TABEL: pillars (4 Pilar Program Terpadu)
CREATE TABLE IF NOT EXISTS public.pillars (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    tagline TEXT,
    tag_color TEXT NOT NULL,
    summary TEXT NOT NULL,
    before_condition TEXT NOT NULL,
    intervention TEXT NOT NULL,
    after_condition TEXT NOT NULL,
    key_metrics JSONB DEFAULT '[]'::jsonb,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABEL: destinations_360 (7 Spot Wisata Rute Terpadu)
CREATE TABLE IF NOT EXISTS public.destinations_360 (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    dusun TEXT NOT NULL,
    pillar_id TEXT REFERENCES public.pillars(id) ON DELETE SET NULL,
    panorama_url TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL,
    description TEXT NOT NULL,
    highlights TEXT[] DEFAULT '{}',
    map_coord_x NUMERIC NOT NULL,
    map_coord_y NUMERIC NOT NULL,
    is_available BOOLEAN DEFAULT false,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABEL: metrics (Angka Capaian Dampak Kuantitatif)
CREATE TABLE IF NOT EXISTS public.metrics (
    id TEXT PRIMARY KEY,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    unit TEXT,
    description TEXT,
    order_index INT DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. TABEL: documentation (Galeri Foto & Video Lapangan)
CREATE TABLE IF NOT EXISTS public.documentation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    pillar_id TEXT REFERENCES public.pillars(id) ON DELETE SET NULL,
    image_url TEXT NOT NULL,
    activity_date DATE NOT NULL,
    caption TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. TABEL: deliverables (Katalog Luaran Wajib & Tambahan)
CREATE TABLE IF NOT EXISTS public.deliverables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL CHECK (category IN ('wajib', 'tambahan')),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    file_or_link_url TEXT,
    is_external_link BOOLEAN DEFAULT false,
    icon_name TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. TABEL: guestbook (Buku Tamu & Masukan Juri/Pengunjung)
CREATE TABLE IF NOT EXISTS public.guestbook (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_name TEXT NOT NULL,
    sender_role TEXT NOT NULL,
    sender_institution TEXT,
    message TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    is_approved BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ============================================================================
-- KEBIJAKAN ROW LEVEL SECURITY (RLS)
-- ============================================================================

ALTER TABLE public.pillars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations_360 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documentation ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deliverables ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;

-- Hak Akses Publik (SELECT untuk semua tabel konten)
CREATE POLICY "Public read pillars" ON public.pillars FOR SELECT USING (true);
CREATE POLICY "Public read destinations" ON public.destinations_360 FOR SELECT USING (true);
CREATE POLICY "Public read metrics" ON public.metrics FOR SELECT USING (true);
CREATE POLICY "Public read documentation" ON public.documentation FOR SELECT USING (true);
CREATE POLICY "Public read deliverables" ON public.deliverables FOR SELECT USING (true);
CREATE POLICY "Public read approved guestbook" ON public.guestbook FOR SELECT USING (is_approved = true);

-- Hak Akses Publik (INSERT untuk guestbook)
CREATE POLICY "Public insert guestbook" ON public.guestbook FOR INSERT WITH CHECK (true);

-- Hak Akses Penuh untuk Admin Terotentikasi (authenticated role)
CREATE POLICY "Admin full access pillars" ON public.pillars FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access destinations" ON public.destinations_360 FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access metrics" ON public.metrics FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access documentation" ON public.documentation FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access deliverables" ON public.deliverables FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access guestbook" ON public.guestbook FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================================
-- DATA AWAL (SEED INITIAL DATA)
-- ============================================================================

-- Seed Data Pillars
INSERT INTO public.pillars (id, name, tagline, tag_color, summary, before_condition, intervention, after_condition, key_metrics, order_index)
VALUES 
(
    'tubing-care',
    'Tubing Care',
    'Standar Keselamatan K3 & Layanan Kesehatan Wisata Air',
    '#E58B24',
    'Meningkatkan standar keselamatan susur sungai Westtamp Tubing melalui sertifikasi K3 penyelamatan air dan pos kesehatan terpadu.',
    'Pengelola wisata susur sungai belum memiliki standarisasi SOP keselamatan, belum bersertifikasi penanganan darurat air (water rescue), dan belum ada pos pemeriksaan kesehatan bagi wisatawan sebelum beraktivitas.',
    'Menyelenggarakan pelatihan water rescue bersama Basarnas Kantor SAR, pelatihan P3K bersama PMI, penyusunan buku saku SOP tanggap darurat, serta Health Screening Day bersama Puskesmas Candimulyo.',
    'Tersedia 25 pemuda pengelola wisata yang tersertifikasi K3 dan P3K, SOP keselamatan air terpasang di basecamp, serta pos screening kesehatan rutin untuk memastikan kelayakan fisik pengunjung.',
    '[{"label": "Pengelola Tersertifikasi", "value": "25 Orang"}, {"label": "Peserta Skrining", "value": "60 Pengunjung"}]'::jsonb,
    1
),
(
    'integrated-ecosystem',
    'West Integrated Ecosystem',
    'Kelembagaan POKDARWIS & Ekosistem Digital Terpadu',
    '#2D6A4F',
    'Mentransformasi pengelolaan wisata yang terfragmentasi menjadi satu ekosistem kelembagaan desa wisata berbadan hukum.',
    'Potensi wisata dan UMKM berjalan sendiri-sendiri tanpa koordinasi, promosi masih mengandalkan informasi lisan tradisional, dan belum terbentuk Kelompok Sadar Wisata (POKDARWIS) resmi desa.',
    'Memfasilitasi pembentukan dan pengesahan SK Kepala Desa tentang POKDARWIS Desa Wisata Tampirkulon, merancang identitas visual merek IN WEST TAMP, dan meluncurkan portal sistem informasi terpadu.',
    'Terbentuk kepengurusan POKDARWIS resmi dengan 19 anggota aktif, tata kelola paket wisata 7 spot terpadu, dan lonjakan volume kunjungan wisatawan hingga 95%.',
    '[{"label": "Anggota POKDARWIS", "value": "19 Anggota"}, {"label": "Lonjakan Kunjungan", "value": "95%"}]'::jsonb,
    2
),
(
    'local-creative',
    'Local Creative Innovation',
    'Pemberdayaan Ekonomi Ibu PKK & Inovasi Gizi Olahan Lele',
    '#D97706',
    'Mengintegrasikan potensi budidaya lele dan industri pangan rumahan ke dalam rantai pasok eduwisata kuliner bergizi.',
    'Ikan lele hasil budidaya warga hanya dijual mentah dengan margin keuntungan rendah, sementara sentra keripik tempe dan gula jawa belum memiliki standar kemasan yang layak jual.',
    'Melatih ibu-ibu PKK dan Kelompok Wanita Tani (KWT) mengolah lele menjadi bakso dan nugget lele bernutrisi tinggi, menyusun buku panduan resep inovasi, serta standarisasi kemasan higienis UMKM.',
    'Sebanyak 34 ibu PKK terampil memproduksi produk olahan bernilai tambah, produk UMKM tersertifikasi layak konsumsi, dan paket eduwisata kuliner desa resmi beroperasi.',
    '[{"label": "Ibu PKK Terlatih", "value": "34 Peserta"}, {"label": "Varian Resep", "value": "4 Menu"}]'::jsonb,
    3
),
(
    'green-wellness',
    'Green Wellness Space',
    'Pembangunan Taman TOGA & Kawasan Terbuka Sehat',
    '#1B4332',
    'Mengubah lahan tidur di area aliran sungai menjadi ruang terbuka hijau produktif berbasis tanaman obat keluarga dan kebugaran.',
    'Area di sekitar basecamp tubing merupakan lahan kosong terlantar bersemak belukar yang kurang tertata dan belum dimanfaatkan untuk kegiatan produktif warga.',
    'Melakukan revitalisasi lahan bersama pemuda desa, membangun taman sehat seluas 21 m², menanam 6 varietas TOGA, menginstal alat gym outdoor sederhana berbasis material lokal, serta mendirikan angkringan sehat.',
    'Kawasan basecamp bertransformasi menjadi pusat relaksasi dan kebugaran desa dengan lingkungan asri, asupan jamu/herbal alami, dan sarana olahraga terbuka.',
    '[{"label": "Luas Area Terbangun", "value": "21 m²"}, {"label": "Varietas TOGA", "value": "6 Varietas"}]'::jsonb,
    4
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    tagline = EXCLUDED.tagline,
    tag_color = EXCLUDED.tag_color,
    summary = EXCLUDED.summary,
    before_condition = EXCLUDED.before_condition,
    intervention = EXCLUDED.intervention,
    after_condition = EXCLUDED.after_condition,
    key_metrics = EXCLUDED.key_metrics;

-- Seed Data Destinations 360
INSERT INTO public.destinations_360 (id, name, category, dusun, pillar_id, panorama_url, thumbnail_url, description, highlights, map_coord_x, map_coord_y, is_available, order_index)
VALUES
(
    'spot-1',
    'Sunset di Persawahan',
    'Lanskap & Wisata Alam',
    'Kawasan Persawahan Tampirkulon',
    'green-wellness',
    '/images/360/sunset-persawahan.jpg',
    '/images/360/sunset-persawahan.jpg',
    'Bentang panorama matahari terbenam di persawahan terasering Desa Tampirkulon yang tenang dan asri, menyuguhkan suasana relaksasi pedesaan dan panorama Gunung Merbabu/Merapi.',
    ARRAY['Spot Foto Golden Hour', 'Udara Bersih Bebas Polusi', 'Lanskap Gunung & Pematang Sawah'],
    22.5,
    35.0,
    true,
    1
),
(
    'spot-2',
    'Basecamp Westtamp & Green Space',
    'Adventure & Wellness Hub',
    'Sentra Basecamp Tampirkulon',
    'tubing-care',
    '/images/360/basecamp-westtamp.jpg',
    '/images/360/basecamp-westtamp.jpg',
    'Pusat registrasi wisata susur sungai yang telah direvitalisasi, terintegrasi dengan Taman TOGA 21 m², fasilitas gym outdoor sederhana, dan Angkringan Sehat binaan warga.',
    ARRAY['Pusat Safety Briefing & P3K', 'Taman TOGA 6 Varietas', 'Angkringan Sehat Olahan Warga'],
    50.0,
    45.0,
    false,
    2
),
(
    'spot-3',
    'Sentra Pembuatan Keripik Tempe',
    'Eduwisata Kuliner & UMKM',
    'Dusun Sentra UMKM Tampirkulon',
    'local-creative',
    '/images/360/keripik-tempe.jpg',
    '/images/360/keripik-tempe.jpg',
    'Sentra produksi keripik tempe renyah gurih khas warga. Wisatawan diajak belajar teknik peragian kedelai alami, pemotongan presisi tradisional, hingga pengemasan produk higienis.',
    ARRAY['Praktik Pembuatan Langsung', 'Standarisasi Kemasan UMKM', 'Pemberdayaan Ibu PKK & KWT'],
    68.0,
    28.0,
    false,
    3
),
(
    'spot-4',
    'Sentra Pembuatan Gula Jawa',
    'Eduwisata Pangan Tradisional',
    'Dusun Pandean Tampirkulon',
    'local-creative',
    '/images/360/gula-jawa.jpg',
    '/images/360/gula-jawa.jpg',
    'Edukasi autentik proses memasak nira kelapa murni di atas tungku kayu bakar tradisional hingga mengental dan dicetak menjadi gula jawa kelapa murni tanpa bahan pengawet sintetis.',
    ARRAY['Tungku Kayu Tradisional', 'Nira Kelapa Organik', 'Cicip Gula Hangat Segar'],
    38.0,
    68.0,
    false,
    4
),
(
    'spot-5',
    'Wisata Budaya Karawitan',
    'Warisan Seni Tradisional',
    'Balai Warga Tampirkulon',
    'integrated-ecosystem',
    '/images/360/karawitan.jpg',
    '/images/360/karawitan.jpg',
    'Sanggar kesenian gamelan karawitan kebanggaan warga. Pengunjung dapat menikmati alunan gending Jawa yang syahdu dan belajar langsung memainkan instrumen saron, kendang, dan gong.',
    ARRAY['Gamelan Pelog & Slendro', 'Harmoni Warga Lintas Generasi', 'Pengalaman Budaya Imersif'],
    55.0,
    75.0,
    false,
    5
),
(
    'spot-6',
    'Tuk Putri (Mata Air Alami)',
    'Wisata Konservasi Air',
    'Kawasan Mata Air Tampirkulon',
    'green-wellness',
    '/images/360/tuk-putri.jpg',
    '/images/360/tuk-putri.jpg',
    'Mata air alami jernih yang memancar di bawah keteduhan pohon rindang. Menjadi simbol kesucian alam dan sumber air bersih kehidupan masyarakat Desa Tampirkulon.',
    ARRAY['Air Alami Segar & Sejuk', 'Suasana Rindang Asri', 'Konservasi Lingkungan Hidup'],
    80.0,
    55.0,
    false,
    6
),
(
    'spot-7',
    'Jalur Susur Sungai Tubing',
    'Petualangan Wisata Air',
    'Aliran Sungai Westtamp Tampirkulon',
    'tubing-care',
    '/images/360/tubing-river.jpg',
    '/images/360/tubing-river.jpg',
    'Sensasi petualangan arung jeram menggunakan ban tubing di aliran sungai berbatu dengan air jernih dan jeram menantang di bawah pengawalan ketat tim penyelamat bersertifikasi Basarnas.',
    ARRAY['Jeram Menantang & Aman', 'Peralatan Helm & Pelampung Standar', 'Didampingi Rescue Basarnas'],
    42.0,
    52.0,
    false,
    7
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    category = EXCLUDED.category,
    dusun = EXCLUDED.dusun,
    panorama_url = EXCLUDED.panorama_url,
    thumbnail_url = EXCLUDED.thumbnail_url,
    description = EXCLUDED.description,
    highlights = EXCLUDED.highlights,
    map_coord_x = EXCLUDED.map_coord_x,
    map_coord_y = EXCLUDED.map_coord_y,
    is_available = EXCLUDED.is_available;

-- Seed Data Metrics
INSERT INTO public.metrics (id, label, value, unit, description, order_index)
VALUES
('metric-1', 'Pilar Program Terpadu', '4', 'Pilar', 'Tubing Care, West Integrated Ecosystem, Local Creative Innovation, Green Wellness Space', 1),
('metric-2', 'Mahasiswa Berdedikasi', '15', 'Mahasiswa', 'Tim pelaksana lintas keilmuan dari Himpunan Mahasiswa Gizi Universitas Tidar', 2),
('metric-3', 'Masa Pengabdian Intensif', '5', 'Bulan', 'Rangkaian pengabdian terstruktur dari perencanaan, pelatihan, implementasi, hingga evaluasi', 3),
('metric-4', 'Kelompok Sasaran Berdaya', '6', 'Kelompok', 'Pengelola tubing, Ibu PKK, Kelompok Wanita Tani, Karang Taruna, UMKM pangan, dan Perangkat Desa', 4),
('metric-5', 'Lonjakan Kunjungan Wisatawan', '95%', 'Kenaikan', 'Peningkatan kunjungan wisatawan pasca integrasi paket wisata dan promosi digital', 5),
('metric-6', 'Pengelola Wisata Bersertifikasi K3', '25', 'Orang', 'Pemuda pengelola wisata air terlatih penanganan darurat air dan P3K standar Basarnas/PMI', 6)
ON CONFLICT (id) DO UPDATE SET
    label = EXCLUDED.label,
    value = EXCLUDED.value,
    unit = EXCLUDED.unit,
    description = EXCLUDED.description;

-- Seed Data Deliverables
INSERT INTO public.deliverables (id, category, title, description, file_or_link_url, is_external_link, icon_name, order_index)
VALUES
(gen_random_uuid(), 'wajib', 'SK Legalitas POKDARWIS Tampirkulon', 'Surat Keputusan Kepala Desa tentang Pembentukan dan Pengesahan Kelompok Sadar Wisata Desa Tampirkulon.', '/docs/sk-pokdarwis.pdf', false, 'FileText', 1),
(gen_random_uuid(), 'wajib', 'SOP Keselamatan & Tanggap Darurat Air K3', 'Buku panduan prosedur operasi standar keselamatan wisata air yang disusun bersama instruktur Basarnas dan PMI.', '/docs/sop-k3-tubing.pdf', false, 'ShieldCheck', 2),
(gen_random_uuid(), 'wajib', 'Platform Web Sistem Informasi Desa Wisata', 'Website resmi sistem informasi terpadu dan virtual tour 360 yang dapat diakses publik via scan QR poster.', 'https://inwesttamp.vercel.app', true, 'Globe', 3),
(gen_random_uuid(), 'tambahan', 'Buku Saku Resep Inovasi Olahan Lele & TOGA', 'Panduan pembuatan produk makanan bernutrisi tinggi olahan lele (nugget dan bakso) bagi keluarga dan UMKM.', '/docs/buku-resep-lele.pdf', false, 'BookOpen', 4),
(gen_random_uuid(), 'tambahan', 'Publikasi Media Massa Nasional & Daerah', 'Liputan artikel berita mengenai keberhasilan program pemberdayaan PPK Ormawa Himagi Untidar di Desa Tampirkulon.', 'https://untidar.ac.id/berita-ppk-ormawa-tampirkulon', true, 'Newspaper', 5),
(gen_random_uuid(), 'tambahan', 'Video Profil & Dokumenter Pengabdian', 'Dokumenter video 4K kilas balik 5 bulan kerja lapangan mahasiswa bersama masyarakat.', 'https://youtube.com', true, 'Video', 6);

-- Seed Data Documentation
INSERT INTO public.documentation (id, title, pillar_id, image_url, activity_date, caption, is_featured)
VALUES
(gen_random_uuid(), 'Pelatihan Water Rescue Bersama Basarnas', 'tubing-care', '/images/documentation/basarnas-training.jpg', '2025-08-15', 'Simulasi evakuasi korban darurat di aliran sungai tubing oleh instruktur Basarnas Kantor SAR.', true),
(gen_random_uuid(), 'Health Screening Day Pengelola & Wisatawan', 'tubing-care', '/images/documentation/health-screening.jpg', '2025-08-20', 'Pemeriksaan tensi darah dan kelayakan fisik pengunjung bersama tim medis Puskesmas Candimulyo.', true),
(gen_random_uuid(), 'Musyawarah Pembentukan SK POKDARWIS', 'integrated-ecosystem', '/images/documentation/pokdarwis-meeting.jpg', '2025-07-28', 'Rapat pleno penetapan struktur organisasi kelompok sadar wisata bersama kepala desa dan tokoh warga.', true),
(gen_random_uuid(), 'Pelatihan Diversifikasi Olahan Lele Ibu PKK', 'local-creative', '/images/documentation/cooking-workshop.jpg', '2025-09-02', 'Praktik langsung pembuatan bakso dan nugget lele kaya protein bersama kelompok wanita tani.', true),
(gen_random_uuid(), 'Standarisasi Kemasan Keripik Tempe', 'local-creative', '/images/documentation/packaging-umkm.jpg', '2025-09-10', 'Pendampingan desain label dan teknik penyegelan kemasan produk UMKM berdaya saing.', false),
(gen_random_uuid(), 'Gotong Royong Pembangunan Taman TOGA', 'green-wellness', '/images/documentation/toga-garden.jpg', '2025-08-05', 'Aksi penanaman 6 jenis tanaman herbal obat keluarga bersama pemuda karang taruna di basecamp.', true),
(gen_random_uuid(), 'Uji Coba Rute Susur Sungai Tubing', 'tubing-care', '/images/documentation/tubing-action.jpg', '2025-09-18', 'Uji coba ketahanan peralatan pelampung dan helm keselamatan di jeram sungai Westtamp.', true);

-- Seed Data Guestbook (Contoh Ulasan Positif)
INSERT INTO public.guestbook (id, sender_name, sender_role, sender_institution, message, rating, is_approved)
VALUES
(gen_random_uuid(), 'Dr. Ir. Suharyanto, M.Si.', 'Juri PPK Ormawa', 'Reviewer Nasional Diktisaintek', 'Inovasi yang sangat mengesankan. Keterpaduan antara keselamatan K3 wisata air dan pembentukan POKDARWIS terbukti nyata lewat tur 360 dan dokumen SK resmi.', 5, true),
(gen_random_uuid(), 'Bambang Irawan', 'Wisatawan', 'Komunitas Tubing Magelang', 'Susur sungainya seru dan sangat aman karena pemandunya sudah bersertifikat Basarnas. Angkringan sehatnya juga menyediakan minuman herbal yang segar.', 5, true),
(gen_random_uuid(), 'Siti Fatimah', 'Warga Desa', 'Ibu PKK Tampirkulon', 'Terima kasih mahasiswa Untidar sudah melatih kami membuat bakso lele, sekarang sudah mulai kami jual untuk oleh-oleh wisatawan.', 5, true);
