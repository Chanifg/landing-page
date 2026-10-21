# Single-Page Landing Page Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengonsolidasikan seluruh konten platform web IN WEST TAMP dari 7 halaman terpisah menjadi satu halaman tunggal (Single-Page Landing Page) dengan navigasi in-page smooth anchor, modal pratinjau interaktif, tanpa section buku tamu, dan menerapkan kepatuhan antislop Mode 1 secara aktif.

**Architecture:** Seluruh konten pembuktian lapangan ditata mengalir secara vertikal dalam 11 section di `HomePage.jsx`. Navigasi atas (`Navbar.jsx`) dan floating dock bawah ponsel (`FloatingDock.jsx`) menggunakan tautan anchor `#id` dengan smooth scroll dan scrollspy via `IntersectionObserver`. Konten dokumen luaran dan SK dapat ditinjau langsung melalui modal terintegrasi. Rute panel admin `/admin/*` tetap aman di belakang `ProtectedRoute`.

**Tech Stack:** React 18, Vite, React Router DOM 6, Lucide React, Pannellum (WebGL 360 panorama), Supabase JS Client, Modular Vanilla CSS.

## Global Constraints
- Aturan Antislop Mode 1: Diterapkan aktif selama pengerjaan.
- R-02: Dilarang menggunakan karakter em dash (`—`) pada seluruh teks UI; gunakan koma, titik dua, kurung, atau titik.
- R-03: Tata letak responsif ponsel sempurna tanpa horizontal overflow, tap target tombol minimal 44px.
- R-17 & R-36: Hanya menampilkan data otentik laporan program dan SK legalitas resmi.
- R-24 & R-26: Seluruh link navigasi harus mengarah ke ID section yang ada di halaman; tidak ada tombol atau link mati.
- R-25: Rasio kontras teks minimal 4.5:1 (WCAG AA).
- R-27: Status loading, empty, dan error ditangani secara konsisten.
- R-32: Aksesibilitas keyboard terjaga (focus outlines, penutupan modal via tombol Escape).
- Tidak ada section buku tamu (guestbook form / list dihapus dari halaman publik).

---

### Task 1: Scaffolding Modular Sections untuk Konten Halaman Baru

**Files:**
- Create: `src/components/sections/AboutSection.jsx`
- Create: `src/components/sections/ProgramsSection.jsx`
- Create: `src/components/sections/DeliverablesSection.jsx`
- Create: `src/components/sections/LocationSection.jsx`

**Interfaces:**
- `AboutSection.jsx`: Menerima props tidak wajib, merender Latar Belakang Transformasi, Karakteristik Wilayah 13 Dusun, Dosen Pendamping, dan 15 Mahasiswa Tim Pelaksana Himagi Untidar.
- `ProgramsSection.jsx`: Menerima props `pillars` (array), merender tab/grid 4 pilar (pra-kondisi vs intervensi vs capaian), 3 kartu standarisasi K3 (Basarnas, PMI, Puskesmas), dan Linimasa 5 Bulan.
- `DeliverablesSection.jsx`: Menerima props `deliverables` (array), `onSelectDoc` (function), merender filter tab (Semua, Wajib, Tambahan/SK) dan kartu luaran dengan tombol buka pratinjau dokumen.
- `LocationSection.jsx`: Menerima props tidak wajib, merender panduan rute transportasi, titik koordinat, jam operasional, dan kontak resmi tim pelaksana (tanpa formulir buku tamu).

- [ ] **Step 1: Buat `src/components/sections/AboutSection.jsx`**
  Ekstrak profil desa, filosofi program, dosen pembimbing, dan tim 15 mahasiswa dari `AboutPage.jsx` menjadi section modular dengan ID `#tentang` dan `#tim`. Pastikan zero em dash (`—`).

- [ ] **Step 2: Buat `src/components/sections/ProgramsSection.jsx`**
  Ekstrak 4 pilar rincian kondisi pra vs pasca, standarisasi K3 (Basarnas, PMI, Puskesmas), dan linimasa 5 bulan dari `ProgramsPage.jsx` menjadi section modular dengan ID `#pilar` dan `#linimasa`. Pastikan zero em dash (`—`).

- [ ] **Step 3: Buat `src/components/sections/DeliverablesSection.jsx`**
  Ekstrak filter katalog luaran wajib & tambahan dari `DeliverablesPage.jsx` menjadi section modular dengan ID `#luaran`, dengan callback `onSelectDoc` untuk memicu modal dokumen. Pastikan zero em dash (`—`).

- [ ] **Step 4: Buat `src/components/sections/LocationSection.jsx`**
  Ekstrak panduan rute, akses jalan, dan narahubung resmi dari `ContactPage.jsx` menjadi section modular dengan ID `#lokasi`. Singkirkan formulir dan tampilan ulasan buku tamu. Pastikan zero em dash (`—`).

- [ ] **Step 5: Verifikasi build komponen section**
  Jalankan `npm run build` untuk memastikan tidak ada kesalahan impor atau sintaks.

- [ ] **Step 6: Commit Task 1**
  ```bash
  git add src/components/sections/
  git commit -m "feat(sections): create modular sections for about, programs, deliverables, and location"
  ```

---

### Task 2: Integrasi Menyeluruh di `HomePage.jsx` Menjadi Single-Page

**Files:**
- Modify: `src/pages/HomePage.jsx`

**Interfaces:**
- Consumes: `getDestinations`, `getPillars`, `getMetrics`, `getDeliverables`, `getDocumentation` dari `src/lib/supabase.js`.
- Consumes: `PannellumViewer`, `VillageMapModal`, `LightboxModal`, `AboutSection`, `ProgramsSection`, `DeliverablesSection`, `LocationSection`.
- Manages state: `spots`, `activeSpot`, `pillars`, `metrics`, `deliverables`, `photos`, `selectedCategory`, `isMapOpen`, `isPosterOpen`, `lightboxIndex`, `selectedDoc`.

- [ ] **Step 1: Perbarui pemanggilan data dan state di `HomePage.jsx`**
  Muat data luaran (`getDeliverables`) bersama dengan destinasi, pilar, metrik, dan galeri dokumentasi menggunakan `Promise.all`.
  Sediakan state `selectedDoc` untuk dokumen modal preview.

- [ ] **Step 2: Gabungkan 11 section ke dalam JSX `HomePage.jsx`**
  Susun urutan mengalir:
  1. `<section id="hero">` (Hero & Poster Preview Card)
  2. `<section id="tur-360">` (Pannellum 360 Viewer, thumbnail spot, info sensor giroskop ponsel, modal peta rute)
  3. `<AboutSection />` (`#tentang` dan `#tim`)
  4. `<ProgramsSection pillars={pillars} />` (`#pilar` dan `#linimasa`)
  5. `<section id="metrik">` (MetricsCounter)
  6. `<DeliverablesSection deliverables={deliverables} onSelectDoc={setSelectedDoc} />` (`#luaran`)
  7. `<section id="galeri">` (Galeri dokumentasi dengan filter kategori pilar dan pemicu lightbox)
  8. `<LocationSection />` (`#lokasi`)
  9. `<section id="mitra">` (Mitra kolaborasi dan logo multi-sektor)

- [ ] **Step 3: Tambahkan Modal Pratinjau Dokumen Luaran & SK di `HomePage.jsx`**
  Render modal dokumen saat `selectedDoc !== null`, menyajikan judul berkas, tipe berkas, ringkasan validasi SK/SOP, tombol unduh berkas, dan tombol tutup (didukung keyboard Escape).

- [ ] **Step 4: Verifikasi build `HomePage.jsx`**
  Jalankan `npm run build` untuk memastikan kompilasi berhasil.

- [ ] **Step 5: Commit Task 2**
  ```bash
  git add src/pages/HomePage.jsx
  git commit -m "feat(pages): consolidate all 11 sections into unified HomePage"
  ```

---

### Task 3: Refaktorisasi Navigasi (`Navbar.jsx` & `FloatingDock.jsx`) dengan Smooth Scroll & Scrollspy

**Files:**
- Modify: `src/components/layout/Navbar.jsx`
- Modify: `src/components/layout/FloatingDock.jsx`
- Modify: `src/styles/main.css`

**Interfaces:**
- `Navbar.jsx`: Menggunakan link anchor `#id` dengan handler smooth scroll dan active spy state.
- `FloatingDock.jsx`: 4 tombol navigasi cepat smartphone (`#hero`, `#tur-360`, `#pilar`, `#luaran`).
- `main.css`: Mengatur `html { scroll-behavior: smooth; scroll-padding-top: 80px; }`.

- [ ] **Step 1: Tambahkan `scroll-padding-top` dan smooth scroll di `src/styles/main.css`**
  Pastikan saat pengguna mengklik link `#pilar` atau `#luaran`, judul section tidak tertutup navbar.

- [ ] **Step 2: Refaktor `src/components/layout/Navbar.jsx`**
  Ganti `NavLink` rute URL dengan tautan anchor in-page:
  - Beranda (`#hero`)
  - Tur 360° (`#tur-360`)
  - Tentang (`#tentang`)
  - 4 Pilar & K3 (`#pilar`)
  - Capaian (`#metrik`)
  - Luaran & SK (`#luaran`)
  - Dokumentasi (`#galeri`)
  - Tim Pelaksana (`#tim`)
  - Lokasi & Kontak (`#lokasi`)
  Tambahkan `IntersectionObserver` untuk melacak section aktif dan memberikan class `.active`.

- [ ] **Step 3: Refaktor `src/components/layout/FloatingDock.jsx`**
  Hapus navigasi buku tamu. Sediakan 4 item akses instan di mobile:
  - Beranda (`#hero`)
  - Tur 360° (`#tur-360`, highlight)
  - 4 Pilar (`#pilar`)
  - Luaran & SK (`#luaran`)

- [ ] **Step 4: Verifikasi build navigasi**
  Jalankan `npm run build` dan periksa console/syntax.

- [ ] **Step 5: Commit Task 3**
  ```bash
  git add src/components/layout/Navbar.jsx src/components/layout/FloatingDock.jsx src/styles/main.css
  git commit -m "feat(nav): implement smooth anchor scrolling and scrollspy in Navbar and FloatingDock"
  ```

---

### Task 4: Perbarui Routing di `src/App.jsx` & Footer Navigation di `Footer.jsx`

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/layout/Footer.jsx`

**Interfaces:**
- `App.jsx`: Menghapus rute publik multi-halaman yang sudah dikonsolidasikan, mengarahkan rute publik ke `HomePage`, mempertahankan seluruh rute `/admin/*`.
- `Footer.jsx`: Mengubah daftar link navigasi footer menjadi anchor links in-page `#id`.

- [ ] **Step 1: Perbarui rute di `src/App.jsx`**
  Hapus rute publik `/tentang`, `/program`, `/luaran`, `/tur-360`, `/dokumentasi`, `/kontak`.
  Pasang `Route path="/" element={<HomePage />}` dan fallback `Route path="*" element={<HomePage />}`.
  Pertahankan rute `/admin/*` lengkap dengan `ProtectedRoute`.

- [ ] **Step 2: Perbarui tautan di `src/components/layout/Footer.jsx`**
  Ubah daftar tautan navigasi pengelola di footer menjadi anchor link `#hero`, `#tentang`, `#pilar`, `#luaran`, `#tur-360`, `#galeri`, `#tim`, `#lokasi`.

- [ ] **Step 3: Verifikasi build routing & footer**
  Jalankan `npm run build`.

- [ ] **Step 4: Commit Task 4**
  ```bash
  git add src/App.jsx src/components/layout/Footer.jsx
  git commit -m "feat(routing): update App routing and footer links for single-page showcase"
  ```

---

### Task 5: Penyelarasan Gaya Visual, Kerapian Antislop, dan Verifikasi Lengkap

**Files:**
- Modify: `src/styles/pages.css`
- Modify: `src/styles/hero.css`
- Modify: `src/styles/dock.css`

**Interfaces:**
- CSS styling review: Menjamin transisi antar section mulus, kontras tinggi (Forest Green `#304115`, Solar Gold `#DF9705`, High Contrast Text), tidak ada margin bocor atau glitch.

- [ ] **Step 1: Audit dan bersihkan seluruh karakter em dash (`—`) di seluruh berkas proyek**
  Lakukan grep pada `src/` untuk memastikan nol karakter `—` sesuai R-02.

- [ ] **Step 2: Uji tata letak responsif ponsel (R-03)**
  Verifikasi tidak ada horizontal overflow di viewport 320px–420px (smartphone).

- [ ] **Step 3: Uji fungsi interaktif (R-26, R-35)**
  - Uji klik seluruh link navbar dan tombol dock.
  - Uji tombol pembuka modal: Poster modal, Village Map modal, Lightbox modal, Deliverable doc modal.
  - Uji navigasi keyboard (Tab, Enter, Escape).

- [ ] **Step 4: Jalankan build produksi final**
  Jalankan `npm run build`.

- [ ] **Step 5: Jalankan Delivery Gate Report Antislop**
  Tulis laporan PASS/FAIL dengan bukti konkret sesuai panduan antislop.

- [ ] **Step 6: Commit Task 5**
  ```bash
  git add src/
  git commit -m "style: polish single-page visual rhythm and antislop compliance"
  ```
