# IN WEST TAMP Multi-Page Platform with Supabase Backend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Merombak landing page tunggal IN WEST TAMP menjadi platform web multi-halaman berbasis Vite + React + React Router terintegrasi dengan backend Supabase (PostgreSQL, Storage, Auth), hub tur virtual 360° WebGL bergiroskop, serta panel manajemen konten terproteksi (`/admin`).

**Architecture:** Arsitektur Jamstack + BaaS. Frontend dibangun menggunakan Vite + React dengan client-side routing dan CSS design system kanvas obsidian. Backend didukung oleh Supabase BaaS (PostgreSQL dengan RLS, Auth JWT, dan Storage buckets), dilengkapi dengan lapisan graceful fallback data lokal sehingga aplikasi tetap berfungsi penuh meskipun kredensial Supabase belum dihubungkan.

**Tech Stack:** React 18, Vite 5, React Router v6, @supabase/supabase-js, Pannellum WebGL 2.5.7, Lucide React icons, Vanilla CSS Design System.

## Global Constraints
- Mengikuti palet warna dan tipografi dari [desain.md](file:///home/aniiporangbaik/development/projects/Landing%20Page%20Poster/desain.md): kanvas gelap `#0A0F0D`, Forest Green `#2D6A4F`, Solar Gold `#E58B24`, font `Bebas Neue`, `Plus Jakarta Sans`, dan `Inter`.
- Tidak menggunakan em dash (`—`). Gunakan koma, titik dua, atau tanda kurung.
- Tidak menggunakan emoji dekoratif pada teks formal.
- Aksesibilitas WCAG 2.1 AA dengan rasio kontras teks tinggi (> 4.5:1) dan outline fokus keyboard 3px Solar Gold.
- Initial bundle size tetap ringan dengan code splitting per halaman.

---

### Task 1: Setup Dependensi React, Vite Plugin, & Konfigurasi Proyek

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Create: `.env.example`

**Interfaces:**
- Produces: Lingkungan React 18 dengan dukungan JSX/TSX di Vite, library `@supabase/supabase-js`, `react-router-dom`, dan `lucide-react`.

- [x] **Step 1: Update package.json dengan dependensi React dan Supabase**
- [x] **Step 2: Update vite.config.js untuk menggunakan @vitejs/plugin-react**
- [x] **Step 3: Buat file .env.example**
- [x] **Step 4: Jalankan `npm install` untuk menginstal seluruh dependensi**
- [x] **Step 5: Verifikasi build awal dengan `npm run build`**
- [x] **Step 6: Commit perubahan konfigurasi dasar**

---

### Task 2: Supabase Schema SQL & Client Layer dengan Graceful Fallback

**Files:**
- Create: `supabase/schema.sql`
- Create: `src/lib/supabase.js`
- Create: `src/data/mockData.js`

**Interfaces:**
- Produces:
  - Skrip DDL Supabase PostgreSQL lengkap dengan RLS dan initial seed data.
  - `supabaseClient` dari `@supabase/supabase-js`.
  - Fungsi data fetcher (`getPillars()`, `getDestinations()`, `getMetrics()`, `getDocumentation()`, `getDeliverables()`, `getGuestbook()`, `submitGuestbook()`) yang otomatis menggunakan `mockData` jika Supabase belum terhubung.

- [x] **Step 1: Buat skrip SQL `supabase/schema.sql` dengan DDL 6 tabel, RLS policies, dan initial seed data**
- [x] **Step 2: Buat `src/data/mockData.js` memuat data lengkap 4 pilar, 7 destinasi 360, 6 metrik, luaran, dan dokumentasi**
- [x] **Step 3: Buat `src/lib/supabase.js` yang menginisialisasi client dan menyediakan helper functions dengan fallback**
- [x] **Step 4: Uji pemanggilan data mock melalui unit test atau script import**
- [x] **Step 5: Commit modul data dan skema database**

---

### Task 3: Setup Entry Point React & Routing Utama

**Files:**
- Modify: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Modify: `src/styles/main.css`

**Interfaces:**
- Consumes: `src/lib/supabase.js`
- Produces: Root React mount, rute publik (`/`, `/tentang`, `/program`, `/luaran`, `/tur-360`, `/dokumentasi`, `/kontak`), rute admin (`/admin/login`, `/admin`), dan scroll-to-top handler saat navigasi.

- [x] **Step 1: Sesuaikan `index.html` agar me-mount `<div id="root"></div>` dan memuat `src/main.jsx`**
- [x] **Step 2: Buat `src/main.jsx` dengan `BrowserRouter`**
- [x] **Step 3: Buat `src/App.jsx` dengan definisi seluruh rute halaman**
- [x] **Step 4: Sesuaikan utility style di `src/styles/main.css` untuk kompatibilitas komponen React**
- [x] **Step 5: Jalankan build untuk memastikan routing terkompilasi bersih**
- [x] **Step 6: Commit konfigurasi routing**

---

### Task 4: Komponen Tata Letak Global (Navbar, Footer, FloatingDock)

**Files:**
- Create: `src/components/layout/Navbar.jsx`
- Create: `src/components/layout/Footer.jsx`
- Create: `src/components/layout/FloatingDock.jsx`

**Interfaces:**
- Produces: Komponen `<Navbar />`, `<Footer />`, dan `<FloatingDock />` yang konsisten di semua halaman.

- [x] **Step 1: Buat `src/components/layout/Navbar.jsx` dengan logo resmi, navigasi rute aktif, dan tombol CTA 360**
- [x] **Step 2: Buat `src/components/layout/Footer.jsx` dengan watermark masif IN WEST TAMP dan info tim**
- [x] **Step 3: Buat `src/components/layout/FloatingDock.jsx` untuk navigasi melayang 4 tombol di smartphone**
- [x] **Step 4: Verifikasi responsivitas pada viewport 375px dan 1200px**
- [x] **Step 5: Commit komponen layout**

---

### Task 5: Komponen Bersama & Interaktif (Pannellum 360, Peta Desa, Metrik, Lightbox)

**Files:**
- Create: `src/components/viewer/PannellumViewer.jsx`
- Create: `src/components/viewer/VillageMapModal.jsx`
- Create: `src/components/shared/MetricsCounter.jsx`
- Create: `src/components/shared/PillarCard.jsx`
- Create: `src/components/shared/LightboxModal.jsx`

**Interfaces:**
- Produces: Komponen viewer 360° dengan sensor gyro, modal peta desa, counter heksagonal, toggle pilar sebelum-sesudah, dan modal lightbox.

- [x] **Step 1: Implementasikan `PannellumViewer.jsx` menangani WebGL canvas, rotasi sentuh, zoom, dan listener gyroscope**
- [x] **Step 2: Implementasikan `VillageMapModal.jsx` dengan pin interaktif terhubung ke spot aktif**
- [x] **Step 3: Implementasikan `MetricsCounter.jsx` heksagonal dengan `IntersectionObserver`**
- [x] **Step 4: Implementasikan `PillarCard.jsx` dengan toggle tab "Hasil Intervensi" vs "Sebelum Program"**
- [x] **Step 5: Implementasikan `LightboxModal.jsx` dengan navigasi foto keyboard**
- [x] **Step 6: Commit komponen interaktif**

---

### Task 6: Implementasi Halaman Portal Publik

**Files:**
- Create: `src/pages/HomePage.jsx`
- Create: `src/pages/AboutPage.jsx`
- Create: `src/pages/ProgramsPage.jsx`
- Create: `src/pages/DeliverablesPage.jsx`
- Create: `src/pages/VirtualTourPage.jsx`
- Create: `src/pages/GalleryPage.jsx`
- Create: `src/pages/ContactPage.jsx`

**Interfaces:**
- Consumes: Komponen layout, komponen interaktif, data fetcher dari `src/lib/supabase.js`.
- Produces: 7 halaman publik yang kaya informasi sesuai PRD dan SRS.

- [x] **Step 1: Bangun `HomePage.jsx` (Hero poster preview, ringkasan filosofi, teaser 360, highlight 4 pilar, metrik)**
- [x] **Step 2: Bangun `AboutPage.jsx` (Penjelasan PPK Ormawa, profil Himagi Untidar, profil desa, struktur tim 15 mahasiswa)**
- [x] **Step 3: Bangun `ProgramsPage.jsx` (Detail komparasi 4 pilar, pelatihan Basarnas/PMI/Puskesmas, linimasa roadmap)**
- [x] **Step 4: Bangun `DeliverablesPage.jsx` (Katalog luaran wajib & tambahan, tombol pratinjau SK POKDARWIS/SOP K3)**
- [x] **Step 5: Bangun `VirtualTourPage.jsx` (Hub panorama 360° lengkap dengan selector 7 spot, tombol gyro, dan peta desa)**
- [x] **Step 6: Bangun `GalleryPage.jsx` (Filter kategori pilar dan penampil lightbox)**
- [x] **Step 7: Bangun `ContactPage.jsx` (Rute wisata, kontak pengelola, dan formulir submit buku tamu ke Supabase)**
- [x] **Step 8: Verifikasi kompilasi dan navigasi seluruh halaman publik**
- [x] **Step 9: Commit halaman publik**

---

### Task 7: Implementasi Modul Panel Admin Terproteksi (`/admin`)

**Files:**
- Create: `src/components/admin/ProtectedRoute.jsx`
- Create: `src/pages/admin/AdminLogin.jsx`
- Create: `src/pages/admin/AdminDashboard.jsx`
- Create: `src/pages/admin/AdminMetrics.jsx`
- Create: `src/pages/admin/AdminDocumentation.jsx`
- Create: `src/pages/admin/AdminDeliverables.jsx`
- Create: `src/pages/admin/AdminSpots360.jsx`
- Create: `src/pages/admin/AdminGuestbook.jsx`

**Interfaces:**
- Consumes: Supabase Auth dan fungsi mutasi data.
- Produces: Panel manajemen internal aman untuk memperbarui konten tanpa deploy ulang.

- [x] **Step 1: Buat `ProtectedRoute.jsx` untuk menjaga rute admin**
- [x] **Step 2: Buat `AdminLogin.jsx` dengan email/password Supabase Auth**
- [x] **Step 3: Buat `AdminDashboard.jsx` ringkasan data sistem**
- [x] **Step 4: Buat `AdminMetrics.jsx` form pemutakhiran angka capaian**
- [x] **Step 5: Buat `AdminDocumentation.jsx` form upload foto kegiatan ke Supabase Storage**
- [x] **Step 6: Buat `AdminDeliverables.jsx` manajemen berkas SK dan publikasi**
- [x] **Step 7: Buat `AdminSpots360.jsx` pengaturan data dan status ketersediaan 7 spot**
- [x] **Step 8: Buat `AdminGuestbook.jsx` moderasi pesan masuk juri/pengunjung**
- [x] **Step 9: Commit modul admin**

---

### Task 8: Pengujian Menyeluruh, Optimasi Performa, & Verifikasi Akhir

**Files:**
- Modify: `scripts/generate-qr.js` (jika perlu penyesuaian domain)
- Test: Verifikasi build produksi, responsive viewport, lighthouse check, dan browser console

- [x] **Step 1: Jalankan `npm run build` untuk memverifikasi tidak ada error bundle**
- [x] **Step 2: Uji fungsionalitas tur 360, toggle 4 pilar, counter metrik, dan submit buku tamu**
- [x] **Step 3: Uji proteksi rute `/admin` dan navigasi mobile dock**
- [x] **Step 4: Buat laporan verifikasi pada walkthrough.md**
- [x] **Step 5: Commit final**
