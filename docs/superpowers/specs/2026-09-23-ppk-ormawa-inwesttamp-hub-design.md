# Design Specification: PPK Ormawa IN WEST TAMP Compact Hub

## 1. Overview & Objectives

Website ini merupakan **Compact Hub (Bio-Link / Link Hub)** resmi untuk program **PPK Ormawa (Program Penguatan Kapasitas Organisasi Kemahasiswaan) 2026** bertajuk:
> **IN WEST TAMP: Integrated Wellness-Tourism Area Tampirkulon**
> *Pengembangan Wellness-Tourism Desa Tampirkulon Melalui Pemberdayaan Masyarakat dengan Pendekatan Kesehatan dan Smart Management*

- **Ormawa Pelaksana**: Himpunan Mahasiswa Gizi (HIMAGI), Universitas Tidar (UNTIDAR), Magelang
- **Lokasi Mitra**: Desa Tampirkulon, Kecamatan Candimulyo, Kabupaten Magelang, Jawa Tengah
- **Tujuan Utama Hub**:
  1. Menyediakan akses cepat dan terpusat ke **Google Drive Dokumentasi Program** (foto kegiatan, video, notula, absensi, BAST).
  2. Menyediakan akses langsung ke **Sistem Pemesanan Tiket Desa Wisata Tampirkulon** (West Tamp Tubing & eduwisata).
  3. Menghubungkan pengunjung ke kanal media sosial resmi (**Instagram**, **TikTok**, **YouTube**).
  4. Menyajikan etalase interaktif untuk **14 Luaran Program** (luaran wajib dan tambahan) yang terorganisir per kategori.
  5. Memastikan performa tinggi, tampilan estetis dan profesional, ramah perangkat mobile, serta siap di-*deploy* langsung ke platform **Vercel**.

---

## 2. Tech Stack & Arsitektur Sistem

- **Struktur**: Semantic HTML5 (aksesibel, ramah SEO, microdata).
- **Gaya Tampilan**: Modern Vanilla CSS3 (Custom CSS Properties, CSS Grid, Flexbox, Glassmorphism, Micro-transitions).
- **Logika & Interaktivitas**: Vanilla JavaScript (ES6+) modular tanpa dependensi framework eksternal yang berat.
- **Tipografi**: Google Fonts — *Plus Jakarta Sans* (Weight 400, 500, 600, 700).
- **Ikon**: Inline SVG icons (Google Drive, Instagram, TikTok, YouTube, Dokumen/PDF, Tiket, External Link, Leaf/Health, dsb.).
- **Platform Deployment**: Vercel (static web application, zero-config deployment).

### Struktur Berkas Project
```
/
├── index.html                  # Halaman utama Semantic HTML5
├── styles.css                  # Style CSS utama (Design tokens, bento grid, responsive)
├── app.js                      # Logika rendering, tab filter luaran, toast notification
├── data.js                     # Data terpusat (profil, link cepat, dan 14 luaran)
├── vercel.json                 # Konfigurasi routing & header cache Vercel
├── assets/
│   ├── images/
│   │   └── logo-himagi.png     # Logo resmi PPK Ormawa HIMAGI Untidar 2026
│   └── favicon.svg             # Favicon bernuansa Wellness Tourism
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-09-23-ppk-ormawa-inwesttamp-hub-design.md
```

---

## 3. Skema Data & Konfigurasi (`data.js`)

Semua informasi tautan dan luaran dikelola dalam file `data.js` untuk memudahkan pembaruan berkas tanpa perlu mengedit HTML:

### Identitas Program
- `appName`: "IN WEST TAMP"
- `tagline`: "Integrated Wellness-Tourism Area Tampirkulon"
- `ormawa`: "HIMAGI Universitas Tidar"
- `location`: "Desa Tampirkulon, Candimulyo, Magelang"
- `statusBadge`: "PPK Ormawa 2026 • Kemendikbudristek"
- `logo`: "assets/images/logo-himagi.png"

### Quick Action Links
1. **Google Drive Dokumentasi**:
   - Judul: "Google Drive Dokumentasi Program"
   - Deskripsi: "Arsip foto kegiatan, video dokumenter, absensi, BAST, dan laporan"
   - URL: Link Google Drive dokumentasi
   - Tipe: Kartu Prioritas (Highlight Gold/Forest Green)
2. **Sistem Pemesanan Tiket**:
   - Judul: "Sistem Pemesanan Tiket Desa Wisata Tampirkulon"
   - Deskripsi: "Pemesanan tiket daring West Tamp Tubing, eduwisata, & paket wisata sehat"
   - URL: Tautan website pemesanan tiket
   - Tipe: Kartu Prioritas

### Media Sosial
- **Instagram**: `@InWestTamp26` (https://instagram.com/InWestTamp26)
- **TikTok**: `@InWestTamp26` (https://tiktok.com/@InWestTamp26)
- **YouTube**: `@himagiuntidar` (https://youtube.com/@himagiuntidar)
- **Narahubung / WhatsApp**: Kontak tim pelaksana

### Daftar 14 Luaran Program PPK Ormawa
Dikelompokkan menjadi 3 kategori filter:

#### Kategori A: Laporan & Publikasi Ilmiah
1. **Sublaporan Akhir PPK Ormawa**
   - Kategori: `publikasi`
   - Status: `Terbit`
   - Keterangan: Laporan komprehensif pertanggungjawaban program IN WEST TAMP.
2. **Buku Refleksi Ormawa**
   - Kategori: `publikasi`
   - Status: `Terbit`
   - Keterangan: Refleksi implementasi pemberdayaan masyarakat pendekatan kesehatan & smart management.
3. **Publikasi Artikel Jurnal E-DIMAS**
   - Kategori: `publikasi`
   - Status: `Accepted`
   - Keterangan: Artikel Pengabdian Kepada Masyarakat pada Jurnal Pengabdian E-DIMAS.
4. **Publikasi Media Massa Nasional & Lokal**
   - Kategori: `publikasi`
   - Status: `Terbit`
   - Keterangan: Pemberitaan di Magelang News, Jawa Pos, dan Kompas.

#### Kategori B: Media Promosi, Edukasi & PHBS
5. **Video Dokumenter Resmi Program**
   - Kategori: `media`
   - Status: `Terbit di YouTube`
   - Keterangan: Dokumenter visual perjalanan pengabdian di Desa Tampirkulon (@himagiuntidar).
6. **Poster Hasil Pelaksanaan Program**
   - Kategori: `media`
   - Status: `Tersedia (Hardfile & Softfile)`
   - Keterangan: Poster infografis pencapaian program IN WEST TAMP.
7. **Leaflet Edukasi PHBS di Lokasi Wisata**
   - Kategori: `media`
   - Status: `Terbit & Terpasang`
   - Keterangan: Panduan Pola Hidup Bersih dan Sehat bagi wisatawan dan warga.
8. **Poster Langkah-Langkah Cuci Tangan PHBS**
   - Kategori: `media`
   - Status: `Terbit & Terpasang`
   - Keterangan: Media visual langkah cuci tangan higienis di area wisata tubing.
9. **Banner Kebersihan & Kelestarian Lingkungan**
   - Kategori: `media`
   - Status: `Terpasang`
   - Keterangan: Banner edukasi larangan buang sampah sembarangan di Sungai Gono.
10. **Akun Media Sosial Resmi (@InWestTamp26)**
    - Kategori: `media`
    - Status: `Aktif`
    - Keterangan: Saluran publikasi berkala melalui TikTok dan Instagram.

#### Kategori C: Inovasi Kawasan, Kelembagaan & HKI
11. **Kelembagaan POKDARWIS Desa Tampirkulon**
    - Kategori: `inovasi`
    - Status: `SK Terbit Disparpora`
    - Keterangan: Penggerak utama ekosistem wisata desa berkelanjutan.
12. **Website Tiket & Video Profil Ber-HKI**
    - Kategori: `inovasi`
    - Status: `Tersertifikasi HKI`
    - Keterangan: Hak Cipta resmi atas website pemesanan tiket & video profil desa.
13. **Taman Kesehatan TOGA & Merk Dagang Produk Lokal**
    - Kategori: `inovasi`
    - Status: `Terealisasi & Terdaftar Merk`
    - Keterangan: Ruang kebugaran outdoor, TOGA, serta produk bakso lele, minuman jahe telang & kelapa jeruk.
14. **Buku Resep Pangan Lokal Ber-ISBN Untidar**
    - Kategori: `inovasi`
    - Status: `Ber-ISBN Untidar`
    - Keterangan: Buku inovasi kuliner sehat berbasis lele, jahe telang, dan kelapa lokal.

---

## 4. Desain Visual & Tata Letak Antarmuka

### Palet Warna
- **Primary / Forest Green**: `#1E3A24` (Elemen latar identitas dan aksen tegas)
- **Primary Accent / Sage Green**: `#2D553A` dan `#E9F2EC` (Aksen latar lembut)
- **Highlight Gold**: `#D9822B` / `#E59819` (Tombol Drive, badge status terverifikasi)
- **Background Gradient**: `linear-gradient(180deg, #F4F7F5 0%, #E7EFEA 100%)`
- **Surface / Card**: `rgba(255, 255, 255, 0.92)` dengan efek `backdrop-filter: blur(12px)` dan border halus `rgba(30, 58, 36, 0.08)`
- **Text**: `#16261B` (Headings/Body) dan `#546B5A` (Secondary text)

### Struktur Komponen UI
1. **Container**: Terpusat di tengah layar, `max-width: 680px`, padding 24px di desktop, 16px di mobile.
2. **Hero Header Card**:
   - Logo resmi PPK Ormawa HIMAGI Untidar 2026.
   - Badge pill terverifikasi Belmawa.
   - Judul H1: "IN WEST TAMP".
   - Subtitle: "Integrated Wellness-Tourism Area Tampirkulon".
   - Metadata kampus & desa binaan.
3. **Bento Quick Links**:
   - **Kartu 1 (Drive Dokumentasi)**: Memiliki visual gradien emas-hijau, ikon Google Drive, label "Utama", dan tombol panah dinamis.
   - **Kartu 2 (Sistem Pemesanan Tiket Desa Wisata Tampirkulon)**: Visual hijau segar, ikon tiket, subtitle informatif.
4. **Social Media Pills**:
   - Grid 3 atau 4 tombol horizontal berpenampilan elegan dengan ikon Instagram, TikTok, YouTube, dan Kontak WhatsApp.
5. **Interactive Luaran Showcase**:
   - Filter Chips: `Semua (14)`, `Laporan & Jurnal (4)`, `Media & Edukasi (6)`, `Inovasi & HKI (4)`.
   - Grid Kartu Luaran: Kartu interaktif berdesain bersih, menampilkan badge status warna-warni (hijau untuk terbit, emas untuk HKI/ISBN, biru untuk jurnal accepted).
6. **Toast Notification**:
   - Komponen pemberitahuan melayang (*floating toast*) jika pengguna mengklik item yang link eksternalnya masih menunggu pembaruan dari panitia.
7. **Footer**:
   - Statistik ringkas (15 Mahasiswa Tim • 4 Subprogram • 14 Luaran • 1 Desa Wisata).
   - Hak Cipta PPK Ormawa HIMAGI UNTIDAR 2026.

---

## 5. SEO & Open Graph Metadata

- `title`: IN WEST TAMP - Hub Resmi PPK Ormawa HIMAGI Untidar | Desa Wisata Tampirkulon
- `meta description`: Portal akses resmi dokumentasi, media sosial, dan 14 luaran program PPK Ormawa HIMAGI Universitas Tidar di Desa Tampirkulon, Magelang.
- `og:image`: Menampilkan preview kartu resmi logo dan banner IN WEST TAMP.
- `viewport`: `width=device-width, initial-scale=1.0`.

---

## 6. Testing & Verifikasi

1. **Responsivitas**: Pengujian tampilan pada breakpoint 360px (mobile kecil), 414px (mobile standar), 768px (tablet), dan 1280px (desktop).
2. **Interaktivitas Filter**: Memastikan tab filter memilah ke-14 luaran secara instan dan akurat.
3. **Aksesibilitas (A11y)**: Memastikan rasio kontras teks >= 4.5:1, semua tombol memiliki `aria-label`, serta navigasi keyboard berfungsi lancar.
4. **Vercel Compatibility**: Pengujian struktur statis agar dapat dideploy tanpa error.
