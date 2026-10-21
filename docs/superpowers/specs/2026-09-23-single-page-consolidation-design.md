# Spesifikasi Desain: Konsolidasi Single-Page Landing Page IN WEST TAMP

**Tanggal:** 23 September 2026  
**Status:** Approved by User  
**Pendekatan:** Opsi A (Curated Interactive One-Page)  
**Kepatuhan Antislop:** Mode 1 (Diterapkan aktif selama perancangan dan implementasi)

---

## 1. Ringkasan Eksekutif & Latar Belakang

### 1.1 Konteks Pengguna & Kebutuhan
Platform web **IN WEST TAMP** dirancang sebagai perpanjangan digital interaktif dari poster cetak hasil pengabdian program PPK Ormawa Himpunan Mahasiswa Gizi (Himagi) Universitas Tidar 2025 di Desa Wisata Tampirkulon, Magelang. 

Lebih dari 90% pengunjung mengakses situs ini dengan memindai kode QR pada poster menggunakan ponsel pintar. Evaluasi oleh dewan juri kompetisi berlangsung singkat (berkisar antara 1 hingga 3 menit). Arsitektur sebelumnya yang memisahkan konten ke dalam 7 halaman independen (`/tentang`, `/program`, `/luaran`, `/tur-360`, `/dokumentasi`, `/kontak`) menimbulkan hambatan navigasi, waktu tunggu muat halaman, serta potensi juri melewatkan dokumen bukti lapangan penting.

Konsolidasi menjadi **satu halaman tunggal (Single-Page Landing Page)** menyajikan alur pembuktian lapangan yang runtut dari atas ke bawah (*storytelling flow*), dioptimalkan untuk perangkat bergerak, dan diperkaya dengan modal interaktif tanpa membebani memori ponsel.

### 1.2 Design Read & Dials (Sesuai `DESIGN.md` & Antislop R-37)
> Reading this as: program-report showcase for academic judges and villagers, in a high-contrast editorial-magazine style adapted for rural wellness tourism, dial ENERGY 3 / RHYTHM 3 / MOTION 2.

* **ENERGY 3 (Bold):** Tipografi judul tegas, visual panorama 360 derajat interaktif, dan kartu metrik yang menonjol seketika saat di-scroll.
* **RHYTHM 3 (Varied & Asymmetric):** Variasi komposisi di setiap section agar pengalaman jelajah tidak monoton (menghindari pola berulang seragam).
* **MOTION 2 (Scroll-reveal & Fluid Transitions):** Animasi counter angka saat masuk viewport, transisi halus tab filter, dan kontrol giroskop ponsel tanpa efek berlebih yang mengganggu performa.

---

## 2. Arsitektur Routing & Navigasi

### 2.1 Konfigurasi Routing (`src/App.jsx`)
* **Halaman Publik Tunggal (`/`):** Seluruh konten publik digabungkan dalam satu komponen utama (`src/pages/HomePage.jsx`).
* **Fallback Route (`*`):** Mengarahkan seluruh URL publik yang tidak dikenali kembali ke root (`/`).
* **Panel Admin Terlindungi (`/admin/*`):** Rute manajemen internal tetap dipertahankan tersendiri (`/admin/login`, `/admin/metrik`, `/admin/dokumentasi`, `/admin/luaran`, `/admin/spots`) dengan `ProtectedRoute` agar pemutakhiran data Supabase oleh tim pelaksana tetap berjalan mandiri.

### 2.2 Navigasi Atas (`src/components/layout/Navbar.jsx`)
* Tautan rute digantikan menjadi tautan jangkar mulus (*smooth in-page anchor links*):
  1. `#hero` (Beranda)
  2. `#tur-360` (Tur 360°)
  3. `#tentang` (Profil & Latar Belakang)
  4. `#pilar` (4 Pilar & K3)
  5. `#metrik` (Capaian Angka)
  6. `#luaran` (Luaran & Dokumen SK)
  7. `#galeri` (Dokumentasi Lapangan)
  8. `#tim` (Tim Pelaksana)
  9. `#lokasi` (Akses & Kontak)
* Dilengkapi *Scrollspy* aktif berbasis `IntersectionObserver` untuk menyorot item navigasi yang sesuai dengan posisi scroll layar.
* Penerapan properti CSS `scroll-padding-top: 80px` pada root HTML agar posisi scroll tidak tertutup navbar melayang (*sticky navbar*).

### 2.3 Navigasi Mobile Bawah Layar (`src/components/layout/FloatingDock.jsx`)
Menyediakan 4 akses instan di smartphone:
1. Beranda (`#hero`)
2. Tur 360° (`#tur-360`, tombol aksen emas menonjol)
3. 4 Pilar (`#pilar`)
4. Luaran & SK (`#luaran`)
*(Tombol buku tamu dihapus sesuai permintaan pengguna).*

---

## 3. Rincian 11 Section Konten Terpadu

### Section 1: Hero & Showcase Poster Fisik (`#hero`)
* **Isi:** Judul utama *IN WEST TAMP*, subjudul *Integrated Wellness-Tourism Area Tampirkulon*, alamat geografis desa, kutipan visi keterpaduan, dan tiga metrik ringkas wilayah (luas 2.61 km², penduduk ±4.893 jiwa, 13 dusun terpadu).
* **Komponen:**
  * Tombol CTA langsung menuju `#tur-360` dan `#pilar`.
  * Kartu pratinjau poster cetak resmi yang membuka modal gambar beresolusi tinggi saat diklik.

### Section 2: Hub Tur Virtual 360° & Peta Rute Desa (`#tur-360`)
* **Isi:** Viewer panorama WebGL interaktif menggunakan pustaka Pannellum menampilkan 7 spot destinasi unggulan desa.
* **Fitur Interaktif:**
  * Pemilihan spot aktif dengan thumbnail visual.
  * Dukungan kontrol sentuh, putar sudut pandang, dan sensor giroskop ponsel.
  * Tombol pembuka modal Peta Rute Wisata Desa (*Village Mini-Map Modal*).

### Section 3: Latar Belakang & Profil Wilayah (`#tentang`)
* **Isi:**
  * Narasi transformasi dari potensi terfragmentasi menjadi ekosistem terpadu *wellness-tourism*.
  * Tiga kartu ringkas karakteristik desa: Kondisi Geografis & Sungai, Sosial Kemasyarakatan 13 Dusun, dan Legalitas POKDARWIS Mandiri.

### Section 4: 4 Pilar Inovasi & Standarisasi Keselamatan K3 (`#pilar`)
* **Isi:**
  * Komponen kartu 4 pilar interaktif (`PillarCard`) memuat rincian kondisi pra-intervensi, bentuk intervensi mahasiswa, capaian terukur, dan indikator kunci.
  * Tiga kartu pembuktian standarisasi keselamatan bersama instansi resmi:
    1. **Basarnas Kantor SAR Semarang:** Pelatihan water rescue, evakuasi arus deras, SOP tanggap darurat, dan kelulusan 25 pengelola.
    2. **Palang Merah Indonesia (PMI):** Pelatihan P3K, penanganan hipotermia, dan penerbitan modul buku saku P3K.
    3. **Puskesmas Candimulyo & Posyandu ILP:** Skrining kesehatan 60 peserta dan edukasi gizi pangan lokal.

### Section 5: Linimasa Pelaksanaan 5 Bulan (`#linimasa`)
* **Isi:** Alur terstruktur perjalanan program:
  * Bulan 1: Observasi, Asesmen K3, & Pembentukan Tim Kerja.
  * Bulan 2: Capacity Building K3, Pelatihan Basarnas/PMI, & Skrining Kesehatan.
  * Bulan 3: Pembangunan Taman TOGA & Diversifikasi Olahan Lele.
  * Bulan 4: Pengambilan Foto 360° & Penerbitan SK POKDARWIS.
  * Bulan 5: Pemasangan Poster QR Code, Penjurian, & Serah Terima Sistem.

### Section 6: Capaian Program dalam Angka (`#metrik`)
* **Isi:** Komponen `MetricsCounter` yang memuat angka capaian kuantitatif dari Supabase dengan animasi counter saat masuk ke dalam viewport layar.

### Section 7: Katalog Luaran & Dokumen Legalitas SK (`#luaran`)
* **Isi:**
  * Filter tab: **Semua Luaran**, **Luaran Wajib Belmawa**, dan **Luaran Tambahan & SK**.
  * Kartu katalog luaran (SK POKDARWIS No. 188.45/14/KEP/2025, SOP K3, Modul P3K, Buku Saku TOGA, Artikel Jurnal).
  * Tombol **"Pratinjau Dokumen"** yang membuka modal dokumen interaktif terintegrasi tanpa perlu membuka tab baru atau berpindah halaman.

### Section 8: Galeri Dokumentasi Lapangan (`#galeri`)
* **Isi:**
  * Grid foto dokumentasi kegiatan asli di lapangan.
  * Filter kategori berbasis 4 pilar.
  * Komponen `LightboxModal` untuk tampilan pembesaran foto beresolusi penuh lengkap dengan takarir (*caption*).

### Section 9: Dosen Pendamping & 15 Mahasiswa Pelaksana (`#tim`)
* **Isi:**
  * Kartu Dosen Pendamping Lapangan (Fakultas Pertanian / Ilmu Gizi Untidar).
  * Grid terstruktur 15 mahasiswa pengabdi Himagi Untidar (avatar inisial, nama lengkap, peran/tugas, dan program studi) sebagai bukti otentik susunan tim pelaksana.

### Section 10: Akses Wilayah & Kontak Resmi (`#lokasi`)
* **Isi:**
  * Panduan rute transportasi menuju Basecamp Westtamp Tubing Desa Tampirkulon, titik koordinat, dan jam operasional wisata.
  * Narahubung resmi tim (WhatsApp dan Email Himagi Untidar) untuk verifikasi juri atau informasi reservasi wisata.
  *(Formulir dan daftar buku tamu ditiadakan sepenuhnya sesuai instruksi pengguna).*

### Section 11: Mitra Kolaborasi & Penutup (`#mitra`)
* **Isi:**
  * Logo resmi mitra multi-sektor: Kemendikbudristek/Belmawa, Untidar, BLU Unggul, Pemkab Magelang, Basarnas, PMI, Puskesmas, Posyandu, dan POKDARWIS.
  * Hak cipta resmi 2025 PPK Ormawa Himagi Untidar, tautan akses panel admin koordinator (`/admin`), tombol pintasan ke atas (*back to top*), dan watermark identitas *IN WEST TAMP*.

---

## 4. Penanganan Status Data & Aliran Informasi (Data Flow)

1. **Pengambilan Data (Supabase & Fallback):**
   * Fungsi `loadAllPageData()` di `HomePage.jsx` menjalankan `Promise.all` untuk mengambil data destinasi 360°, 4 pilar, metrik, luaran, dan dokumentasi secara paralel.
   * Jika sambungan Supabase mengalami kendala di lokasi pameran yang minim sinyal, sistem memanfaatkan *mock/cached data* lokal yang telah tertanam di `src/data/` agar juri tetap dapat mengakses seluruh konten tanpa layar kosong (*white screen*).
2. **Kondisi UI (UI States - R-27):**
   * **Loading State:** Kerangka pemuatan (*skeleton/spinner*) yang elegan saat inisialisasi awal.
   * **Empty State:** Pesan informatif jika kategori luaran atau galeri tidak memiliki data.
   * **Error State:** Penanganan galat lembut (*graceful fallback*) tanpa merusak struktur visual halaman.

---

## 5. Rencana Pengujian & Kepatuhan Antislop

### 5.1 Verifikasi Fungsional (R-26, R-35)
* Uji coba klik setiap tautan navigasi di Navbar dan Floating Dock untuk memastikan perpindahan scroll ke ID anchor yang tepat.
* Uji coba interaksi modal: modal poster resolusi tinggi, modal peta desa, modal pratinjau dokumen luaran, dan modal lightbox foto galeri.
* Uji coba fungsi viewer 360 derajat (rotasi mouse/touch dan tombol giroskop ponsel).

### 5.2 Kepatuhan Standar Antislop
* **R-02 (Copywriting):** Nol karakter em dash (`—`) pada seluruh teks UI.
* **R-03 (Mobile Responsiveness):** Tata letak bebas dari *horizontal overflow*, ukuran tap target tombol minimal 44 piksel pada layar smartphone.
* **R-17 & R-36 (Integritas Data):** Seluruh statistik, nomor SK (SK No. 188.45/14/KEP/2025), dan nama instansi mitra bersumber dari data otentik laporan program.
* **R-24 & R-26 (Navigasi & Elemen Interaktif):** Tidak ada tautan mati atau tombol tanpa aksi nyata.
* **R-25 (Kontras Warna):** Memenuhi standar WCAG AA dengan rasio kontras teks di atas 4.5:1.
* **R-32 (Aksesibilitas Keyboard):** Seluruh tombol dan modal dapat dioperasikan menggunakan tombol `Tab`, `Enter`, dan `Escape`.
