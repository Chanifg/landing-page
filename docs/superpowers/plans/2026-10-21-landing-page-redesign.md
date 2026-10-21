# IN WEST TAMP Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesain antarmuka landing page publik IN WEST TAMP menjadi tampilan editorial premium berlatar warm ivory (`#FAF7F2`) dan forest green (`#1E3A24`) sesuai mockup referensi, lengkap dengan aset placeholder terpusat, accordion 4 pilar interaktif, tur virtual 360, bento gallery, dan susunan 15 mahasiswa + DPL.

**Architecture:** Membangun kembali landing page secara modular dengan membagi tiap seksi ke dalam komponen tersendiri di bawah `src/components/sections/`, menyatukan pengelolaan gambar placeholder di `src/data/siteImages.js`, serta memperbarui tema warna global di CSS tokens tanpa mengganggu route admin.

**Tech Stack:** React 18, Vite, Lucide React, Pannellum WebGL 360, Vanilla CSS Tokens & Modern Grid/Flexbox Layouts.

## Global Constraints

- Background utama halaman menggunakan Warm Ivory `#FAF7F2`, aksen Forest Pine `#1E3A24`, Ochre `#C58A43`, dan Dark Footer `#121714`.
- Tidak mengubah fungsionalitas route `/admin/*`.
- Semua gambar menggunakan komponen placeholder SVG/CSS responsif yang mudah diganti via `src/data/siteImages.js`.
- Semua interaksi kunci (Pannellum 360 viewer, modal peta rute desa, modal poster resolusi tinggi, lightbox galeri) wajib tetap berjalan lancar.
- Kode harus lolos `npm run build` tanpa error.

---

### Task 1: Desain Token Global & Style Base Baru

**Files:**
- Modify: `src/styles/main.css:1-120`
- Create: `src/styles/editorial.css`

**Interfaces:**
- Consumes: CSS root variables
- Produces: CSS utility classes (`.section-eyebrow`, `.editorial-container`, `.btn-pill-forest`, `.editorial-card`)

- [ ] **Step 1: Definisikan token warna & typography baru di `src/styles/main.css`**

Perbarui `:root` di `src/styles/main.css`:
```css
:root {
  --bg-main: #FAF7F2;
  --bg-section-alt: #F3EFE6;
  --surface: #FFFFFF;
  --surface-alt: #F5F1E8;
  --surface-dark: #121714;
  
  --primary: #1E3A24;
  --primary-light: #284C30;
  --primary-dark: #142819;
  --primary-subtle: rgba(30, 58, 36, 0.08);

  --accent: #C58A43;
  --accent-hover: #AF7633;
  --accent-subtle: rgba(197, 138, 67, 0.12);

  --text-primary: #1A201B;
  --text-secondary: #475449;
  --text-muted: #758276;
  --text-inverse: #FFFFFF;

  --border-color: #E6E2D8;
  --border-subtle: #EFECE4;

  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --shadow-editorial: 0 4px 20px rgba(22, 34, 25, 0.04);
}
```

- [ ] **Step 2: Buat utilitas editorial di `src/styles/editorial.css`**

Buat file `src/styles/editorial.css` berisi styling untuk eyebrow tags `[ KATEGORI ]`, container editorial, dan kartu-kartu ber-radius modern.

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: Build sukses tanpa error sintaks CSS.

- [ ] **Step 4: Commit**

```bash
git add src/styles/main.css src/styles/editorial.css
git commit -m "style: update global color tokens to warm ivory and forest green editorial theme"
```

---

### Task 2: Modul Sentralisasi Gambar & Generator Placeholder

**Files:**
- Create: `src/data/siteImages.js`
- Create: `src/components/shared/ImagePlaceholder.jsx`

**Interfaces:**
- Consumes: None
- Produces: `siteImages` object, `<ImagePlaceholder label={string} width={number} height={number} />`

- [ ] **Step 1: Buat `src/components/shared/ImagePlaceholder.jsx`**

Komponen ini menghasilkan SVG placeholder inline responsif berlatar belakang hangat bernuansa `#EAE6DC`, ikon kamera/foto, dimensi, dan label teks deskriptif jika gambar asli belum tersedia atau mengalami error load.

- [ ] **Step 2: Buat peta konfigurasi gambar di `src/data/siteImages.js`**

Definisikan objek `siteImages` yang menampung semua path aset gambar untuk:
- `hero.mainTeam`
- `narrative.lele`, `narrative.tubing`, `narrative.umkm`
- `pillars.pilar1` s.d. `pillars.pilar4`
- `gallery` (array 6 item dokumentasi bento)
- `dpl` (foto/avatar dosen pembimbing)
- `team` (array 15 item mahasiswa dengan initial & avatar path)

- [ ] **Step 3: Uji impor modul dan build**

Run: `npm run build`
Expected: Build sukses.

- [ ] **Step 4: Commit**

```bash
git add src/data/siteImages.js src/components/shared/ImagePlaceholder.jsx
git commit -m "feat: add centralized image registry and responsive image placeholder component"
```

---

### Task 3: Redesain Header & Navigasi Sticky

**Files:**
- Modify: `src/components/layout/Navbar.jsx`
- Create/Modify: `src/styles/navbar.css` (atau di dalam `src/styles/main.css`)

**Interfaces:**
- Consumes: Anchor routes (`#tentang`, `#pilar`, `#tur-360`, `#galeri`, `#tim`)
- Produces: `<Navbar />` dengan logo IN WEST TAMP + Himagi Untidar, desktop menu, mobile drawer, dan tombol pill `Jelajahi Paket`

- [ ] **Step 1: Perbarui komponen `src/components/layout/Navbar.jsx`**

Pasang layout sticky dengan glassmorphism warm ivory (`rgba(250, 247, 242, 0.92)`), logo di kiri, menu di tengah, dan tombol aksi hijau hutan berujung bulat (*pill button*) di kanan yang menuju `#tur-360`.

- [ ] **Step 2: Uji build Vite**

Run: `npm run build`
Expected: PASS tanpa error.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Navbar.jsx src/styles/
git commit -m "feat: redesign sticky navbar with warm ivory theme and forest green CTA pill"
```

---

### Task 4: Hero Section & Floating Stats Card 4 Kolom

**Files:**
- Create: `src/components/sections/HeroSection.jsx`
- Modify: `src/styles/hero.css`

**Interfaces:**
- Consumes: `siteImages.hero`
- Produces: `<HeroSection onExploreTour={() => void} />`

- [ ] **Step 1: Implementasikan `HeroSection.jsx`**

Buat struktur tampilan:
1. Judul raksasa berjarak renggang: `IN WEST TAMP`
2. Subjudul: `Integrated Wellness-Tourism Area Tampirkulon`
3. Frame foto besar ber-radius `24px` menggunakan `siteImages.hero.mainTeam` dengan fallback `ImagePlaceholder`
4. Floating Stats Card di perbatasan bawah foto dengan 4 pilar metrik:
   - `2.61 km²` — Luas Wilayah
   - `±4.893` — Jumlah Penduduk
   - `13` — Dusun Terpadu
   - `4 Pilar` — Intervensi Utama

- [ ] **Step 2: Styling di `src/styles/hero.css`**

Terapkan posisi melayang (*floating overlap*) pada kartu statistik menggunakan transformasi translateY negatif terhadap bagian bawah foto, serta flexbox responsif untuk perangkat mobile.

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/HeroSection.jsx src/styles/hero.css
git commit -m "feat: implement hero section with centered bold title and floating 4-column stats card"
```

---

### Task 5: Narrative Section (Latar Belakang & 3 Kartu Foto Potensi)

**Files:**
- Create: `src/components/sections/NarrativeSection.jsx`
- Modify: `src/styles/editorial.css`

**Interfaces:**
- Consumes: `siteImages.narrative`
- Produces: `<NarrativeSection />`

- [ ] **Step 1: Implementasikan `NarrativeSection.jsx`**

Rancang tampilan:
1. Eyebrow tag: `[ LATAR BELAKANG ]`
2. Paragraf editorial komprehensif tentang potensi susur Sungai Gono (West Tamp Tubing), budidaya lele, TOGA, UMKM, dan penguatan POKDARWIS oleh mahasiswa PPK Ormawa Himagi Untidar.
3. Grid 3 kartu foto:
   - Foto 1: Budidaya Ikan Lele
   - Foto 2: West Tamp Tubing (Susur Sungai Gono)
   - Foto 3: Sentra UMKM Pangan Lokal

- [ ] **Step 2: Berikan hover effects & responsivitas di CSS**

Kartu foto memiliki sudut melengkung `18px`, `overflow: hidden`, dan transisi zoom halus saat kursor mengarah padanya (*hover state*).

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/NarrativeSection.jsx src/styles/editorial.css
git commit -m "feat: implement narrative overview section with 3 potential photo cards"
```

---

### Task 6: 4 Pilar Intervensi (Accordion Interaktif & Showcase Visual Dinamis)

**Files:**
- Create: `src/components/sections/PillarsSection.jsx`
- Modify: `src/styles/pillars.css`

**Interfaces:**
- Consumes: `mockPillars` dari `src/data/mockData.js`, `siteImages.pillars`
- Produces: `<PillarsSection pillars={array} />`

- [ ] **Step 1: Implementasikan state & logika accordion di `PillarsSection.jsx`**

- State `activePillarId` (default: pilar pertama).
- Sisi Kiri: Daftar 4 pilar. Item yang aktif berlatar belakang `#1E3A24` dengan teks putih, uraian intervensi, dan chip tag luaran. Item lainnya tertutup (*collapsed*) berlatar putih dengan chevron.
- Sisi Kanan: Kartu visual yang berubah sesuai pilar aktif, menampilkan foto kegiatan, lencana program, judul, ringkasan dampak, dan tanggal pelaksanaan.

- [ ] **Step 2: Styling layout 2-kolom responsif di `src/styles/pillars.css`**

Terapkan grid split di desktop (1fr 1fr atau 1.1fr 0.9fr) dan stack vertikal rapi di mobile.

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/PillarsSection.jsx src/styles/pillars.css
git commit -m "feat: implement 4 pillars interactive accordion with synchronized right visual card"
```

---

### Task 7: Tur Virtual Paket Wisata Terpadu (360° Hub)

**Files:**
- Create: `src/components/sections/VirtualTourSection.jsx`
- Modify: `src/styles/viewer360.css`

**Interfaces:**
- Consumes: `spots` array, `activeSpot`, `setActiveSpot`, `onOpenMap` callback
- Produces: `<VirtualTourSection spots={array} activeSpot={object} onSpotChange={fn} onOpenMap={fn} />`

- [ ] **Step 1: Implementasikan `VirtualTourSection.jsx`**

1. Section header: Eyebrow `[ EKSPLORASI INTERAKTIF ]`, judul di kiri, deskripsi di kanan.
2. Status bar: Badge spot aktif, dusun, dan tombol outline *"Buka Peta Rute Desa"*.
3. Integrasi `PannellumViewer` WebGL 360 viewer.
4. Spot pills switcher di bawah viewer: 7 tombol pill (*Susur Sungai Gono*, *Budidaya Lele*, *Taman TOGA*, *Sentra UMKM*, *Sunset Persawahan*, dll.).
5. Panduan penggunaan giroskop ponsel.

- [ ] **Step 2: Styling bilah pil spot destinasi di `src/styles/viewer360.css`**

Pills dapat di-scroll secara horizontal di mobile (*touch swipeable*) dengan indikator aktif yang jelas.

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/VirtualTourSection.jsx src/styles/viewer360.css
git commit -m "feat: implement 360 virtual tour section with bottom destination switcher pills"
```

---

### Task 8: Bento Grid Galeri Dokumentasi Lapangan

**Files:**
- Create: `src/components/sections/GallerySection.jsx`
- Modify: `src/styles/gallery.css`

**Interfaces:**
- Consumes: `siteImages.gallery`, callback `onOpenLightbox(index)`
- Produces: `<GallerySection photos={array} onSelectPhoto={fn} />`

- [ ] **Step 1: Implementasikan `GallerySection.jsx` dengan tata letak Bento Grid**

1. Header: Eyebrow `[ DOKUMENTASI KEGIATAN ]`, judul *"Potret Perjuangan & Kebersamaan Mahasiswa Bersama Warga"*.
2. Bento Grid CSS:
   - 1 Kartu Besar Vertikal di kiri (Pelatihan Water Rescue & Standarisasi Keselamatan Basarnas dengan caption overlay).
   - 4 Kartu Sedang di tengah & kanan (Audiensi Desa, Kebun TOGA, Olahan Lele PKK, Sosialisasi Warga).
   - 1 Kartu Panorama di bagian bawah (Pemandangan lanskap persawahan desa).
3. Integrasi event `onClick` pada tiap kartu untuk memicu modal Lightbox.

- [ ] **Step 2: Styling Bento Grid di `src/styles/gallery.css`**

Terapkan CSS Grid `grid-template-areas` atau span rows/columns untuk desktop, serta penyesuaian flex/grid 1-kolom di layar smartphone.

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/GallerySection.jsx src/styles/gallery.css
git commit -m "feat: implement responsive bento grid documentation gallery"
```

---

### Task 9: Tim 15 Mahasiswa Pelaksana Program & Banner DPL

**Files:**
- Create: `src/components/sections/TeamSection.jsx`
- Modify: `src/styles/team.css`

**Interfaces:**
- Consumes: `teamMembers` data (15 mahasiswa), `siteImages.dpl`
- Produces: `<TeamSection />`

- [ ] **Step 1: Implementasikan `TeamSection.jsx`**

1. Header: Eyebrow `[ TIM PELAKSANA PROGRAM ]`, judul *"15 Mahasiswa Pelaksana Program"*, subjudul *"Kolaborasi mahasiswa lintas program studi Universitas Tidar 2025"*.
2. Banner Card Dosen Pendamping Lapangan (DPL): Informasi nama, latar belakang program studi gizi, dan uraian bimbingan.
3. Grid 15 Mahasiswa (4 kolom di desktop):
   - Avatar placeholder lingkaran yang bersih.
   - Nama lengkap mahasiswa.
   - Lencana divisi/peran kepengurusan (Ketua, Sekretaris, Koordinator Pilar, dsb.).
   - Program studi: S1 Gizi Universitas Tidar.

- [ ] **Step 2: Styling grid & kartu di `src/styles/team.css`**

Kartu berlatar putih dengan border halus, efek hover mengangkat sedikit (*subtle translateY*), dan tipografi rapi.

- [ ] **Step 3: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/TeamSection.jsx src/styles/team.css
git commit -m "feat: implement 15 students team section and DPL academic banner"
```

---

### Task 10: Editorial Dark Footer dengan Watermark Tipis

**Files:**
- Modify: `src/components/layout/Footer.jsx`
- Modify: `src/styles/footer.css` (atau di dalam `src/styles/main.css`)

**Interfaces:**
- Consumes: Quick links, partner logos
- Produces: `<Footer />` dengan tema gelap `#121714` dan watermark tulisan besar

- [ ] **Step 1: Implementasikan `Footer.jsx`**

1. Latar belakang gelap `#121714` dengan teks putih dan muted green.
2. Teks watermark raksasa `"IN WEST TAMP"` di latar belakang bawah dengan opasitas rendah (0.04 - 0.06).
3. Tiga kolom:
   - Kolom 1: Logo & uraian program PPK Ormawa Himagi Untidar.
   - Kolom 2: Tautan cepat menu landing page.
   - Kolom 3: Mitra kolaborasi & dukungan resmi.
4. Baris copyright dan kredit di paling bawah.

- [ ] **Step 2: Uji build Vite**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.jsx src/styles/
git commit -m "feat: implement dark editorial footer with large watermark typography"
```

---

### Task 11: Perakitan Halaman `HomePage.jsx` & Verifikasi Akhir

**Files:**
- Modify: `src/pages/HomePage.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: Semua komponen seksi baru, modal Lightbox, modal Peta Rute Desa, modal Poster Resmi
- Produces: Landing page publik yang lengkap dan terpadu

- [ ] **Step 1: Rakit seluruh komponen di `src/pages/HomePage.jsx`**

Susun komponen dalam urutan tepat sesuai mockup:
1. `<Navbar />`
2. `<HeroSection onExploreTour={() => ...} />`
3. `<NarrativeSection />`
4. `<PillarsSection pillars={pillars} />`
5. `<VirtualTourSection spots={spots} activeSpot={activeSpot} onSpotChange={setActiveSpot} onOpenMap={() => setIsMapOpen(true)} />`
6. `<GallerySection photos={photos} onSelectPhoto={setLightboxIndex} />`
7. `<TeamSection />`
8. `<Footer />`
9. Modals: `<VillageMapModal />`, `<LightboxModal />`, `<PosterModal />`

- [ ] **Step 2: Jalankan full build verification**

Run: `npm run build`
Expected: Sukses menghasilkan bundle di direktori `dist/` tanpa warning atau error.

- [ ] **Step 3: Jalankan uji lokal dev server & verifikasi visual**

Run: `npm run preview` atau cek dev server via browser subagent.
Pastikan:
- Seluruh elemen tampil sesuai mockup.
- Placeholder tampil rapi dan estetik.
- Navigasi anchor meluncur (*smooth scroll*) ke seksi target.
- Accordion pilar berpindah dinamis.
- Viewer 360 dapat digerakkan.
- Lightbox foto terbuka saat galeri diklik.

- [ ] **Step 4: Commit**

```bash
git add src/pages/HomePage.jsx src/App.jsx
git commit -m "feat: assemble fully redesigned editorial landing page"
```
