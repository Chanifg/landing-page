# PPK Ormawa IN WEST TAMP Compact Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun Compact Hub (Bio-Link / Link Hub) modern dan profesional siap-deploy ke Vercel untuk program PPK Ormawa HIMAGI Universitas Tidar 2026 "IN WEST TAMP" di Desa Tampirkulon, berisi tautan Google Drive dokumentasi, sistem pemesanan tiket desa wisata, media sosial, dan etalase interaktif 14 luaran program.

**Architecture:** Arsitektur web statis performa tinggi berbasis Semantic HTML5, Vanilla CSS3 modern dengan palet warna *Nature Wellness*, dan Vanilla ES6 JavaScript dengan pemisahan data terpusat (`data.js`) untuk kemudahan pemeliharaan tautan dan luaran.

**Tech Stack:** Semantic HTML5, Vanilla CSS3 (Custom Properties, Bento Grid, Glassmorphism), Vanilla JavaScript (ES6+), Google Fonts (*Plus Jakarta Sans*), SVG Icons, Vercel Static Hosting.

## Global Constraints

- **Platform Deployment**: Vercel Static Web App (Zero build step, instan).
- **Branding**: Sesuai logo resmi PPK Ormawa HIMAGI Untidar 2026 dengan palet forest green (`#1E3A24`), sage, dan aksen emas (`#D9822B`).
- **Luaran**: Harus memuat 14 luaran program secara lengkap sesuai subproposal dan sublaporan akhir resmi Belmawa.
- **Aksesibilitas**: WCAG AA compliant untuk kontras warna teks dan navigasi keyboard.
- **Responsivitas**: Tampilan prima di smartphone (360px - 430px) hingga desktop (1920px).

---

### Task 1: Setup Assets & Base Data Model (`assets/`, `data.js`, `favicon.svg`)

**Files:**
- Create: `assets/images/logo-himagi.png`
- Create: `assets/favicon.svg`
- Create: `data.js`

**Interfaces:**
- Produces: `window.PROGRAM_DATA` (objek konfigurasi data program, tautan cepat, akun sosmed, statistik, dan 14 luaran terstruktur).

- [ ] **Step 1: Salin logo resmi dari proposal ke direktori proyek**

```bash
mkdir -p assets/images
cp "/home/aniiporangbaik/Kuliah/PPKO/proposal/Frame 3 (1).png" assets/images/logo-himagi.png
```

- [ ] **Step 2: Buat favicon SVG bernuansa wellness tourism**

Buat `assets/favicon.svg` dengan icon daun dan air bernuansa hijau botol dan emas.

- [ ] **Step 3: Buat data terpusat `data.js`**

Implementasikan objek `PROGRAM_DATA` lengkap di `data.js` yang memuat:
1. `meta`: Profil program IN WEST TAMP, Desa Tampirkulon, HIMAGI Untidar, badge Belmawa 2026.
2. `quickLinks`: Google Drive Dokumentasi Program (Prioritas 1) dan Sistem Pemesanan Tiket Desa Wisata Tampirkulon (Prioritas 2).
3. `socials`: Instagram (`@InWestTamp26`), TikTok (`@InWestTamp26`), YouTube (`@himagiuntidar`), WhatsApp Kontak.
4. `stats`: 15 Mahasiswa Tim, 4 Subprogram, 14 Luaran, 1 Desa Wisata Binaan.
5. `luaran`: Array 14 item luaran lengkap dengan id, kategori (`publikasi`, `media`, `inovasi`), judul, status, badgeColor, deskripsi, dan url.

- [ ] **Step 4: Validasi sintaks data.js dengan Node.js**

```bash
node -e "const fs = require('fs'); const content = fs.readFileSync('data.js', 'utf8'); eval(content); console.log('Data loaded successfully. Total luaran:', window.PROGRAM_DATA.luaran.length); process.exit(window.PROGRAM_DATA.luaran.length === 14 ? 0 : 1);"
```

- [ ] **Step 5: Commit perubahan Task 1**

```bash
git add assets/ data.js
git commit -m "feat: setup project assets and centralized data model for 14 luaran"
```

---

### Task 2: Core Semantic HTML5 Structure & SEO Meta Tags (`index.html`)

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: `assets/images/logo-himagi.png`, `assets/favicon.svg`, `data.js`
- Produces: Elemen DOM dengan ID unik `#header-section`, `#bento-grid`, `#social-pills`, `#luaran-section`, `#luaran-filter`, `#luaran-grid`, `#toast`.

- [ ] **Step 1: Tulis struktur Semantic HTML5 lengkap di `index.html`**

Memuat:
- Meta tag SEO: `description`, `keywords`, `viewport`, `theme-color`.
- Open Graph (OG) & Twitter card tags: `og:title`, `og:description`, `og:image`, `og:type`.
- Google Fonts: *Plus Jakarta Sans*.
- Favicon link.
- Kontainer utama `.hub-container`.
- Header profil lengkap dengan logo, badge status, judul h1, subjudul, dan metadata mitra.
- Slot Bento Grid untuk kartu aksi prioritas (Drive Dokumentasi & Tiket).
- Slot Social Media Pills.
- Slot Katalog Luaran Program dengan tombol filter kategori (*Semua*, *Laporan & Jurnal*, *Media & Edukasi*, *Inovasi & HKI*).
- Slot Quick Stats Counter & Footer.
- Elemen Toast notification `#toast`.
- Script load order: `data.js` kemudian `app.js`.

- [ ] **Step 2: Verifikasi validitas HTML**

Pastikan seluruh tag tertutup sempurna, atribut `aria-label` terpasang pada tombol interaktif, dan tidak ada atribut usang.

- [ ] **Step 3: Commit perubahan Task 2**

```bash
git add index.html
git commit -m "feat: implement semantic HTML5 structure with SEO and OpenGraph tags"
```

---

### Task 3: Modern Styling & Responsive Bento Layout (`styles.css`)

**Files:**
- Create: `styles.css`

**Interfaces:**
- Consumes: Struktur class dan ID dari `index.html`
- Produces: Desain visual responsif, palet *Nature Wellness*, efek glassmorphism, animasi interaksi kartu.

- [ ] **Step 1: Tulis CSS Variables dan Reset di `styles.css`**

Mendefinisikan:
- Warna: `--forest-dark: #14281B`, `--forest-primary: #1E3A24`, `--sage-accent: #2E5A3B`, `--sage-light: #EBF3EE`, `--gold-primary: #D9822B`, `--gold-light: #FDF4E7`, `--card-bg: rgba(255, 255, 255, 0.94)`, `--text-primary: #112217`, `--text-secondary: #486150`.
- Border-radius, bayangan halus (`box-shadow`), dan transisi `cubic-bezier`.

- [ ] **Step 2: Tulis layout Bento Grid dan Glassmorphism**

- Layout container `.hub-container` dengan `max-width: 680px`.
- Kartu Prioritas 1 (Drive Dokumentasi): gradien halus dengan aksen emas dan ikon berkas.
- Kartu Prioritas 2 (Tiket Desa Wisata Tampirkulon): gradien hijau segar dengan aksen tiket.
- Barisan tombol pills media sosial dengan efek hover responsif.
- Grid kartu luaran dengan efek hover lift (`transform: translateY(-2px)`).
- Badge status warna-warni dinamis (hijau, biru, emas).

- [ ] **Step 3: Tulis media queries untuk mobile dan tablet**

Optimasi pada breakpoint `<= 480px` dan `<= 768px` agar nyaman disentuh jari (tap target >= 44px).

- [ ] **Step 4: Commit perubahan Task 3**

```bash
git add styles.css
git commit -m "style: implement nature wellness theme, bento grid layout, and responsive styles"
```

---

### Task 4: Interactive Client Logic & Filter System (`app.js`)

**Files:**
- Create: `app.js`

**Interfaces:**
- Consumes: `window.PROGRAM_DATA` dari `data.js`
- Produces: Rendering dinamis kartu luaran, filter kategori interaktif, sistem toast notification.

- [ ] **Step 1: Implementasi fungsi inisialisasi & rendering kartu luaran**

Fungsi `renderLuaran(filterCategory)`:
- Memfilter data dari `window.PROGRAM_DATA.luaran` berdasarkan kategori aktif.
- Menghasilkan markup kartu yang memuat badge status, judul luaran, keterangan, dan tombol aksi.
- Mendukung filter: `'all'`, `'publikasi'`, `'media'`, `'inovasi'`.

- [ ] **Step 2: Implementasi interaksi tab filter**

Event listener pada tombol filter untuk menambahkan kelas `.active` dan memicu render kartu baru secara mulus.

- [ ] **Step 3: Implementasi sistem Toast Notification**

Fungsi `showToast(message)`:
- Menampilkan pesan mengambang yang ramah jika pengguna mengklik tautan dokumen yang sedang dalam proses persiapan.
- Otomatis menghilang setelah 3 detik.

- [ ] **Step 4: Verifikasi fungsionalitas dengan browser subagent atau tes otomatis**

Pastikan semua kartu ter-render dengan baik dan perpindahan tab filter berjalan instan.

- [ ] **Step 5: Commit perubahan Task 4**

```bash
git add app.js
git commit -m "feat: implement interactive category filtering and dynamic card rendering"
```

---

### Task 5: Vercel Deployment Configuration & End-to-End Verification (`vercel.json`)

**Files:**
- Create: `vercel.json`

**Interfaces:**
- Produces: Konfigurasi routing static web dan header cache untuk performa maksimal di platform Vercel.

- [ ] **Step 1: Buat konfigurasi `vercel.json`**

```json
{
  "version": 2,
  "cleanUrls": true,
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

- [ ] **Step 2: Jalankan web server lokal untuk pengujian**

Jalankan `python3 -m http.server 3000` di latar belakang dan verifikasi halaman menggunakan subagent atau browser.

- [ ] **Step 3: Verifikasi responsivitas & semua tautan (Drive, Tiket, Sosmed, Luaran)**

- [ ] **Step 4: Commit konfigurasi Vercel dan file final**

```bash
git add vercel.json
git commit -m "chore: add vercel configuration for instant static deployment"
```
