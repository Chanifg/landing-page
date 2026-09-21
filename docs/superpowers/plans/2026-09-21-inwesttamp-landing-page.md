# IN WEST TAMP Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun landing page interaktif PPK Ormawa "IN WEST TAMP" untuk kategori penilaian Poster Paling Kreatif, lengkap dengan Virtual Tour 360° 7 destinasi rute paket wisata, interaktif 4 pilar sebelum-sesudah, counter metrik kuantitatif, galeri dokumentasi, dan optimasi mobile scan QR.

**Architecture:** Frontend web application dibangun menggunakan Vite + Vanilla JavaScript, HTML5 semantik, CSS modern (CSS variables, flex/grid, glassmorphism), dan Pannellum WebGL library untuk penampil 360 panorama serta sensor gyroscope. Terdiri dari modul data spots modular, viewer controller, interactive pillar cards, dan animated counter.

**Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Vite, Pannellum (WebGL 360), Canvas/Lucide-style SVG Icons.

## Global Constraints
- Target platform: Mobile-first responsive web (optimal untuk scan QR dari smartphone juri di berbagai ukuran layar).
- Bundle performance: Load time < 1 detik, aset 360 dimuat secara on-demand (lazy loading).
- Visual fidelity: Selaras 100% dengan poster IN WEST TAMP (Warm Earth Green `#1B4332`, Accent Orange `#E58B24`, Surface Cream `#FAF8F5`, kontur topografi).
- Hosting compatibility: Siap deploy di Vercel atau Cloudflare Pages tanpa server khusus.

---

### Task 1: Scaffolding Proyek & Desain Sistem Dasar

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/styles/main.css`

**Interfaces:**
- Produces: Base CSS variable tokens (`--color-primary`, `--color-accent`, `--color-bg`, `--font-heading`, `--font-body`), CSS reset, utility classes, and semantic container markup.

- [ ] **Step 1: Inisialisasi package.json dan vite.config.js**
Buat konfigurasi dependensi minimal dengan Vite dan Pannellum.

- [ ] **Step 2: Buat desain sistem dasar di `src/styles/main.css`**
Terapkan token palet warna poster, Google Fonts (*Plus Jakarta Sans* & *Inter*), CSS reset, dan motif kontur topografi SVG.

- [ ] **Step 3: Buat struktur semantik dasar di `index.html`**
Tambahkan elemen meta viewport, SEO tags, link font Google, dan container utama halaman.

- [ ] **Step 4: Jalankan `npm install` dan verifikasi `npm run build`**
Pastikan setup proyek berjalan tanpa error.

- [ ] **Step 5: Commit scaffolding**
```bash
git add package.json vite.config.js index.html src/styles/main.css
git commit -m "chore: setup vite project and core design system"
```

---

### Task 2: Modul Data 7 Spot Paket Wisata (`src/js/spotsData.js`) & Aset 360

**Files:**
- Create: `src/js/spotsData.js`
- Create: `public/images/360/` (aset panorama)

**Interfaces:**
- Produces: `spotsData` array of objects berisi:
  ```javascript
  {
    id: 'spot-1',
    name: 'Sunset di Persawahan',
    dusun: 'Dusun Tampirkulon I',
    pillarId: 'pillar-4',
    pillarName: 'Green Wellness & Eco-Landscape',
    image: '/images/360/sunset-persawahan.jpg',
    description: 'Panorama senja asri di bentang persawahan Desa Tampirkulon.',
    isAvailable: true
  }
  ```

- [ ] **Step 1: Tulis data struktur lengkap 7 spot paket wisata di `src/js/spotsData.js`**
Mencakup Sunset di Persawahan, Basecamp Westtamp Tubing & Green Space, Sentra Keripik Tempe, Sentra Gula Jawa, Karawitan, Tuk Putri, dan Jalur Aliran Tubing.

- [ ] **Step 2: Siapkan aset gambar 360 di `public/images/360/`**
Simpan foto equirectangular `sunset-persawahan.jpg` dan siapkan placeholder berdesain rapi untuk 6 spot lainnya.

- [ ] **Step 3: Uji import modul `spotsData.js`**
Verifikasi data dapat di-import dan memiliki seluruh atribut yang diperlukan.

- [ ] **Step 4: Commit modul data spot**
```bash
git add src/js/spotsData.js public/images/360/
git commit -m "feat: add 7 tourism spots data and 360 assets"
```

---

### Task 3: Komponen Virtual Tour 360° & Kontrol Interaktif (`src/js/viewer360.js` & `src/styles/viewer360.css`)

**Files:**
- Create: `src/js/viewer360.js`
- Create: `src/styles/viewer360.css`
- Modify: `index.html`

**Interfaces:**
- Consumes: `spotsData` from `src/js/spotsData.js`
- Produces: `init360Viewer()`, `switchSpot(spotId)`, `toggleGyroscope()`, `openMiniMapModal()`

- [ ] **Step 1: Buat styling penampil 360 di `src/styles/viewer360.css`**
Rancang frame viewer dengan rasio responsif, tombol melayang (*gyro, fullscreen, zoom*), slider thumbnail spot bergeser horizontal (*touch swipe*), dan modal Peta Sebaran Desa.

- [ ] **Step 2: Implementasikan logika viewer di `src/js/viewer360.js`**
Integrasikan Pannellum WebGL engine dengan lazy loading, penanganan transisi antar-spot, dan pengaktifan sensor gerak HP (`DeviceOrientationEvent`).

- [ ] **Step 3: Hubungkan kontrol UI dengan viewer di `index.html`**
Sediakan thumbnail picker dan tombol aktivasi sensor HP.

- [ ] **Step 4: Uji interaktivitas di browser**
Verifikasi panorama berputar dengan drag/sentuhan, pergantian spot berjalan mulus, dan kartu detail ter-update.

- [ ] **Step 5: Commit komponen 360 viewer**
```bash
git add src/js/viewer360.js src/styles/viewer360.css index.html
git commit -m "feat: implement interactive 360 panorama viewer with gyro and spot selector"
```

---

### Task 4: Hero Header & Identitas Program ("IN WEST TAMP")

**Files:**
- Create: `src/styles/hero.css`
- Modify: `index.html`

**Interfaces:**
- Produces: Hero Section dengan logo kemitraan atas, judul tipografi dinamis, infografis data wilayah (2.61 km², 4.893 jiwa, 13 dusun), dan tombol aksi cepat.

- [ ] **Step 1: Rancang layout Hero Section di `index.html`**
Lengkapi dengan Top Bar (logo Belmawa, Diktisaintek, Untidar, Himagi, PPK Ormawa) dan kartu identitas wilayah.

- [ ] **Step 2: Tulis styling hero di `src/styles/hero.css`**
Terapkan aksen tipografi emas/oranye pada teks *"TAMP"*, latar belakang garis kontur topografi, dan tombol CTA bercahaya halus (*glow accent*).

- [ ] **Step 3: Uji responsivitas pada layar mobile & desktop**
Pastikan teks judul terbaca tegas di layar kecil tanpa terpotong (*overflow*).

- [ ] **Step 4: Commit hero section**
```bash
git add src/styles/hero.css index.html
git commit -m "feat: add hero section matching poster visual branding"
```

---

### Task 5: Komponen Interaktif Empat Pilar, Satu Ekosistem

**Files:**
- Create: `src/styles/pillars.css`
- Create: `src/js/pillars.js`
- Modify: `index.html`

**Interfaces:**
- Produces: Kartu 4 Pilar (*Tubing Care, West Integrated Ecosystem, Local Creative, Green Wellness Space*) dengan toggle interaktif Sebelum vs Sesudah/Capaian.

- [ ] **Step 1: Susun markup kartu 4 pilar di `index.html`**
Masukkan data persis dari poster (kondisi awal, intervensi pelatihan Basarnas/PMI/PKK, dan hasil kuantitatif).

- [ ] **Step 2: Tulis styling kartu interaktif di `src/styles/pillars.css`**
Rancang kartu dengan badge warna pembeda per pilar, ikon tematik, dan switch/toggle interaktif.

- [ ] **Step 3: Implementasikan logika toggle di `src/js/pillars.js`**
Animasi perubahan status saat juri mengklik tombol "Sebelum" atau "Hasil Intervensi".

- [ ] **Step 4: Uji fungsionalitas interaktif toggle**
Pastikan transisi konten mulus dan jelas terbaca.

- [ ] **Step 5: Commit komponen 4 pilar**
```bash
git add src/styles/pillars.css src/js/pillars.js index.html
git commit -m "feat: add interactive 4 pillars showcase with before-after toggle"
```

---

### Task 6: Animated Counter Metrik Kuantitatif ("Program Dalam Angka")

**Files:**
- Create: `src/js/counter.js`
- Create: `src/styles/counter.css`
- Modify: `index.html`

**Interfaces:**
- Produces: `initCounters()` dengan `IntersectionObserver` yang menganimasikan angka: 4 Pilar, 15 Mahasiswa, 5 Bulan, 6 Kelompok Sasaran, 95% Lonjakan, 25 Terlatih.

- [ ] **Step 1: Susun markup metrik di `index.html`**
Gunakan atribut `data-target` pada elemen angka.

- [ ] **Step 2: Tulis animasi penghitung di `src/js/counter.js`**
Gunakan `IntersectionObserver` agar animasi hanya berputar ketika juri scroll ke section tersebut.

- [ ] **Step 3: Styling tampilan kartu metrik di `src/styles/counter.css`**
Terapkan gaya kartu emas/oranye seperti infografis pita pada poster.

- [ ] **Step 4: Uji animasi angka di browser**
Verifikasi angka berjalan dari 0 ke target secara dinamis.

- [ ] **Step 5: Commit counter metrik**
```bash
git add src/js/counter.js src/styles/counter.css index.html
git commit -m "feat: implement animated impact metric counters"
```

---

### Task 7: Galeri Dokumentasi, Video Reel & Mitra Kolaborasi

**Files:**
- Create: `src/styles/gallery.css`
- Create: `src/js/gallery.js`
- Modify: `index.html`

**Interfaces:**
- Produces: Galeri kegiatan foto/video dengan tab kategori, lightbox preview, dan baris logo mitra kolaborasi resmi di bagian bawah.

- [ ] **Step 1: Susun struktur galeri dan footer mitra di `index.html`**
Kategori filter: Semua, K3 & Tubing Care, Digitalisasi & Pokdarwis, Olahan PKK & UMKM, Taman Sehat.

- [ ] **Step 2: Tulis styling galeri dan lightbox di `src/styles/gallery.css`**
Rancang grid foto responsif dengan hover zoom halus dan popup lightbox.

- [ ] **Step 3: Tambahkan logika filter foto dan lightbox di `src/js/gallery.js`**
Memungkinkan juri memfilter dokumentasi dan memperbesar foto dengan satu ketukan.

- [ ] **Step 4: Uji fungsionalitas filter dan tampilan logo mitra**
Pastikan seluruh logo mitra (Untidar, Basarnas, PMI, Puskesmas, BPPSDMP) tampil proporsional.

- [ ] **Step 5: Commit galeri dan mitra**
```bash
git add src/styles/gallery.css src/js/gallery.js index.html
git commit -m "feat: add documentation gallery, lightbox, and partner logos"
```

---

### Task 8: Mobile Floating Dock, QR Code Helper & Verifikasi Build Produksi

**Files:**
- Create: `src/styles/dock.css`
- Create: `scripts/generate-qr.js` (helper pembuatan QR code tajam untuk poster)
- Modify: `index.html`
- Modify: `src/js/main.js`

**Interfaces:**
- Produces: Glassmorphism mobile bottom dock, generator file QR code poster (SVG/PNG), serta final production bundle siap deploy di Vercel/Cloudflare Pages.

- [ ] **Step 1: Implementasikan Mobile Floating Dock di `src/styles/dock.css`**
Beri tombol navigasi cepat (Tur 360°, 4 Pilar, Angka Capaian, Peta Wisata) yang hanya muncul di layar smartphone.

- [ ] **Step 2: Buat helper script `scripts/generate-qr.js`**
Script otomatis untuk menghasilkan QR Code beresolusi tinggi (format SVG/PNG) dari URL web untuk ditempel pada poster.

- [ ] **Step 3: Jalankan full production build `npm run build`**
Verifikasi bundle berhasil tanpa error dan ukuran file optimal.

- [ ] **Step 4: Uji tampilan responsive penuh menggunakan browser subagent**
Verifikasi kesempurnaan tampilan mobile dan interaksi 360.

- [ ] **Step 5: Commit final bundle dan dokumentasikan petunjuk deploy Vercel**
```bash
git add src/styles/dock.css scripts/generate-qr.js src/js/main.js index.html
git commit -m "feat: finalize mobile floating dock and production readiness"
```
