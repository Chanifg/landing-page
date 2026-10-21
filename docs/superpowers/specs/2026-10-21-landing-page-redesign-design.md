# Spesifikasi Desain: Redesain Landing Page IN WEST TAMP

- **Tanggal:** 2026-10-21
- **Status:** Disetujui
- **Topik:** Redesain Antarmuka Landing Page Publik IN WEST TAMP Sesuai Mockup Editorial

---

## 1. Latar Belakang & Tujuan
Proyek ini bertujuan merekonstruksi tampilan halaman utama (*Landing Page*) publik IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon) hasil program PPK Ormawa Himagi Universitas Tidar 2025. Redesain ini mengadopsi gaya visual editorial-magazine bernuansa *earthy wellness* sesuai mockup acuan, menggantikan tata letak lama dengan struktur visual yang lebih elegan, berbobot, dan berdampak kuat bagi juri serta pengunjung umum.

Semua gambar pada tahap awal akan menggunakan sistem placeholder responsif terpusat yang mudah diganti langsung dengan file/path aset asli di kemudian hari.

---

## 2. Sistem Desain & Visual Tokens

### 2.1 Palet Warna
- **Canvas / Background:** `#FAF7F2` (Warm Ivory/Ecru) sebagai kanvas utama.
- **Section Alternate Background:** `#F3EFE6` (Soft Sand Warm Grey).
- **Primary Brand (Forest Deep Green):**
  - Base: `#1E3A24`
  - Dark/Active: `#162E1C`
  - Subtle Surface: `#EBF1EA`
- **Accent (Earthy Ochre / Solar Gold):**
  - Base: `#C58A43`
  - Subtle Badge: `rgba(197, 138, 67, 0.12)`
- **Dark Footer Canvas:** `#121714` (Deep Pine Charcoal) dengan teks kontras `#FFFFFF` dan `#A1ABA3`.
- **Text:**
  - Heading & Primary: `#1A201B`
  - Secondary: `#475449`
  - Muted: `#758276`
- **Border & Elevasi:**
  - Border Subtle: `1px solid #E6E2D8`
  - Shadow Soft: `0 4px 20px rgba(22, 34, 25, 0.04)`
  - Radius: `12px` (Cards), `20px` (Containers & Bento items), `9999px` (Pills & Badges).

### 2.2 Tipografi
- **Display & Headings:** `Plus Jakarta Sans`, sans-serif (font-weight: 700 / 800, letter-spacing: -0.01em s.d. +0.03em).
- **Body & Captions:** `Inter`, sans-serif (line-height: 1.6 - 1.75).
- **Eyebrow Tags:** Huruf kapital dengan format `[ KATEGORI SEKSI ]`, font-weight: 700, ukuran: 0.75rem.

---

## 3. Arsitektur Komponen & Struktur Halaman

```
src/
├── data/
│   ├── siteImages.js             # Sentralisasi konfigurasi path gambar & generator SVG placeholder
│   └── mockData.js               # Data pilar, destinasi 360, metrik, dokumentasi, dan tim 15 mahasiswa
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx            # Sticky navigation bar dengan logo & tombol pill CTA
│   │   └── Footer.jsx            # Dark footer dengan watermark "IN WEST TAMP", navigasi, & logo mitra
│   ├── sections/
│   │   ├── HeroSection.jsx       # Judul besar, frame foto utama, dan floating stats card 4 kolom
│   │   ├── NarrativeSection.jsx  # Eyebrow, paragraf pengantar komprehensif, & 3 kartu foto potensi
│   │   ├── PillarsSection.jsx    # Accordion 4 pilar interaktif (kiri) + dynamic photo card (kanan)
│   │   ├── VirtualTourSection.jsx# Viewer 360 Pannellum + switcher pills spot destinasi
│   │   ├── GallerySection.jsx    # Bento grid mosaik dokumentasi 6 kartu + Lightbox modal
│   │   └── TeamSection.jsx       # Banner DPL + kartu 15 mahasiswa pelaksana program
│   ├── shared/
│   │   ├── LightboxModal.jsx     # Modal fullscreen pratinjau foto
│   │   └── ImagePlaceholder.jsx  # Komponen placeholder gambar dengan aspek rasio fleksibel
│   └── viewer/
│       ├── PannellumViewer.jsx   # Komponen integrasi WebGL 360 panorama
│       └── VillageMapModal.jsx   # Modal rute peta sebaran spot desa
└── pages/
    └── HomePage.jsx              # Komposisi utama single-page yang menyusun semua seksi
```

---

## 4. Rincian Fitur & Interaksi Tiap Seksi

### 4.1 Navbar
- Latar belakang semi-transparan dengan `backdrop-filter: blur(12px)`.
- Sisi kiri: Logo IN WEST TAMP & teks `PPK ORMAWA HIMAGI UNTIDAR`.
- Sisi tengah: Menu navigasi anchor (`#tentang`, `#pilar`, `#tur-360`, `#galeri`, `#tim`).
- Sisi kanan: Tombol aksi Pill berwarna hijau hutan: `Jelajahi Paket` (smooth scroll ke `#tur-360`).
- Responsif mobile: Tombol hamburger dengan dropdown menu yang bersih.

### 4.2 Hero Section & Floating Stats Card
- Judul utama: `IN WEST TAMP` dalam huruf kapital berjarak renggang (*spaced letters*), teks subjudul: `Integrated Wellness-Tourism Area Tampirkulon`.
- Frame foto besar ber-radius `24px` yang menampilkan foto tim utama di depan gedung.
- Kartu statistik melayang (*floating card*) di perbatasan bawah foto dengan 4 pilar metrik:
  1. `2.61 km²` — Luas Wilayah
  2. `±4.893` — Jumlah Penduduk
  3. `13` — Dusun Terpadu
  4. `4 Pilar` — Intervensi Utama
- Setiap kolom statistik memiliki pemisah garis tipis vertikal dan ikon penanda.

### 4.3 Narrative Section (Latar Belakang & 3 Foto Potensi)
- Eyebrow tag: `[ LATAR BELAKANG ]`.
- Teks narasi komprehensif menjelaskan kondisi sebelum vs. setelah adanya intervensi terpadu oleh PPK Ormawa.
- Grid 3 kartu foto berdampingan:
  - Foto 1: Budidaya Ikan Lele
  - Foto 2: West Tamp Tubing (Susur Sungai Gono)
  - Foto 3: Sentra UMKM Pangan Lokal
- Tiap kartu foto memiliki efek *subtle hover zoom* dan sudut membulat.

### 4.4 Pillars Section (Accordion Interaktif & Showcase Visual)
- Eyebrow tag: `[ 4 PILAR UTAMA PROGRAM ]` dan judul *"Intervensi Terstruktur Menuju Ekosistem Wellness-Tourism Mandiri"*.
- **Sisi Kiri (Accordion List):**
  - 4 item pilar:
    1. Pilar 1: Kelembagaan & Digitalisasi (Wellness Tourism Governance)
    2. Pilar 2: Standarisasi Keselamatan Wisata & K3 (Safety First)
    3. Pilar 3: Hilirisasi Produk Sehat & Gizi (Local Nutrition)
    4. Pilar 4: Ruang Terbuka Hijau & Lansia Sehat (Green Wellness Space)
  - Item yang aktif terbuka lebar dengan latar belakang hijau hutan tua (`#1E3A24`), teks kontras putih, rincian solusi intervensi, dan chip tag luaran (misal: `SK POKDARWIS`, `Web Profil Desa`).
  - Item lain berlatar belakang putih bersih, tertutup rapi dengan ikon panah.
- **Sisi Kanan (Kartu Foto Dinamis):**
  - Menampilkan foto kegiatan pilar yang sedang aktif, lencana status pilar, judul kegiatan, dan ringkasan dampak.
  - Berganti secara responsif saat pengguna memilih pilar lain di sisi kiri.

### 4.5 Virtual Tour Section (360° Panorama Hub)
- Menghubungkan kontrol ke viewer Pannellum WebGL yang telah ada.
- Bilah atas menampilkan nama spot aktif, kategori, dan tombol modal *"Buka Peta Rute Desa"*.
- Di bawah layar 360°, terdapat baris tombol pil (*spot switcher pills*) untuk 7 destinasi:
  - *Susur Sungai Gono*, *Budidaya Ikan Lele*, *Taman TOGA*, *Sentra Keripik Tempe*, *Basecamp & Green Space*, *Sunset di Persawahan*, *Pos Layanan Kesehatan*.
- Panduan sensor giroskop smartphone tertera di bagian bawah.

### 4.6 Gallery Section (Bento Grid Mosaik Dokumentasi)
- Eyebrow tag: `[ DOKUMENTASI KEGIATAN ]` dan judul *"Potret Perjuangan & Kebersamaan Mahasiswa Bersama Warga"*.
- Tata letak Bento Grid yang dinamis:
  - 1 Kartu Utama Tinggi di kiri (Pelatihan Water Rescue & Standarisasi Keselamatan Basarnas).
  - 4 Kartu Persegi di kanan/tengah (Audiensi Desa, Kebun TOGA, Diversifikasi Lele PKK, Sosialisasi Warga).
  - 1 Kartu Panorama di bagian bawah (Pemandangan lanskap persawahan desa).
- Klik pada kartu membuka gambar dalam modal *Lightbox* resolusi penuh dengan navigasi panah.

### 4.7 Team Section (DPL & 15 Mahasiswa Pelaksana)
- Eyebrow tag: `[ TIM PELAKSANA PROGRAM ]` dan judul *"15 Mahasiswa Pelaksana Program"*.
- Banner Dosen Pendamping Lapangan (DPL): Informasi nama, fakultas/prodi gizi, dan peran supervisi akademis.
- Grid 15 Mahasiswa Pelaksana (4 kolom desktop, 2 kolom tablet, 1 kolom mobile):
  - Inisial avatar placeholder dengan lingkaran bernuansa hijau/krem.
  - Nama lengkap mahasiswa.
  - Peran/jabatan dalam kepengurusan (Ketua, Sekretaris, Koordinator Pilar, dsb.).
  - Program studi: S1 Gizi Universitas Tidar.

### 4.8 Footer Premium
- Palet gelap elegan (`#121714`) dengan tipografi kontras tinggi.
- Watermark tipis transparan berukuran besar *"IN WEST TAMP"* di latar belakang dasar footer.
- Kolom kiri: Deskripsi program PPK Ormawa Himagi Untidar dan legalitas.
- Kolom tengah: Tautan navigasi internal cepat.
- Kolom kanan: Daftar mitra resmi (Kemendikbudristek/Belmawa, Untidar, Pemkab Magelang, Basarnas, PMI, Pokdarwis).
- Garis penutup hak cipta 2025/2026.

---

## 5. Manajemen Aset Gambar Placeholder (`siteImages.js`)

Modul `src/data/siteImages.js` menyediakan peta gambar tunggal:
```javascript
export const siteImages = {
  hero: {
    mainTeam: '/images/placeholders/hero-team.jpg', // atau SVG inline placeholder
    alt: 'Tim 15 Mahasiswa PPK Ormawa Himagi Untidar di depan gedung rektorat'
  },
  narrative: {
    lele: '/images/placeholders/budidaya-lele.jpg',
    tubing: '/images/placeholders/west-tamp-tubing.jpg',
    umkm: '/images/placeholders/umkm-pangan.jpg'
  },
  pillars: {
    pilar1: '/images/placeholders/pilar-pokdarwis.jpg',
    pilar2: '/images/placeholders/pilar-k3-rescue.jpg',
    pilar3: '/images/placeholders/pilar-gizi-lele.jpg',
    pilar4: '/images/placeholders/pilar-green-toga.jpg'
  },
  gallery: [ /* 6 item dokumentasi bento */ ],
  dpl: '/images/placeholders/dpl.jpg',
  team: [ /* 15 foto/avatar mahasiswa */ ]
};
```
Jika file gambar fisik belum ada di disk, helper placeholder otomatis merender SVG grafis elegan yang menampilkan dimensi dan nama gambar. Ketika pengguna memberikan file gambar nantinya, pengguna cukup menaruh gambar di `public/images/` dan memperbarui `siteImages.js`.

---

## 6. Verifikasi & Pengujian
- **Responsivitas:** Verifikasi tampilan pada ukuran Desktop (1440px), Laptop (1024px), Tablet (768px), dan Smartphone (375px/414px).
- **Interaktivitas:**
  - Klik pilar pada accordion memperbarui kartu showcase foto di sebelah kanan secara instan.
  - Switcher pills di seksi 360 mengganti scene panorama aktif di viewer Pannellum.
  - Klik foto galeri bento membuka modal Lightbox.
  - Tombol modal Peta Desa dan Poster tetap berfungsi normal.
- **Performa & Aksesibilitas:**
  - Kontras teks memenuhi standar WCAG AA (rasio kontras > 4.5:1).
  - Lazy loading pada gambar dokumentasi.
  - Atribut ARIA dan navigasi keyboard (Escape untuk menutup modal).
