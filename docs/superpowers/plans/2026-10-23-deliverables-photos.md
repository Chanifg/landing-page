# Deliverables Real Photos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement real photo assets from `/images/luaran/` into the 6 cards and detail modal in `DeliverablesSection.jsx` with responsive, accessible styling.

**Architecture:** Map 6 existing PNG images in `public/images/luaran/` into `DELIVERABLES_6_CARDS`, replace CSS mockups with lazy-loaded `<img>` elements having hover zoom and gradient overlays in `ref-preview-box`, and add a high-resolution image showcase within the detail modal.

**Tech Stack:** React (Vite), CSS3, Lucide React.

## Global Constraints

- Use exact image paths pointing to `/images/luaran/<filename>.png` in `public/`.
- Maintain WCAG AA contrast for category and verification badges against photo backgrounds.
- Prevent Cumulative Layout Shift (CLS) by retaining constant aspect-ratio.
- Keep all existing data fields, modal functionality, and table matrix intact.

---

### Task 1: Update Data & JSX in DeliverablesSection.jsx

**Files:**
- Modify: `src/components/sections/DeliverablesSection.jsx`

**Interfaces:**
- Consumes: Images located at `public/images/luaran/*.png`.
- Produces: Updated `DELIVERABLES_6_CARDS` with `image` and `imageAlt` fields, updated `.ref-preview-box` rendering `<img>`, and updated modal body rendering `.deliverable-modal-img-wrap`.

- [ ] **Step 1: Update `DELIVERABLES_6_CARDS` data array**
Add `image` and `imageAlt` properties to all 6 card objects:
```javascript
  {
    id: 'kartu-01',
    categoryGroup: 'digital',
    badgeKategori: 'HKI & TEKNOLOGI TEPAT GUNA',
    judulKartu: 'Website Pemesanan Tiket & Video Program Ber-HKI',
    image: '/images/luaran/Web dan HKI.png',
    imageAlt: 'Bukti Website Pemesanan Tiket dan Sertifikat HKI',
    deskripsi: 'Digitalisasi manajemen West Tamp Tubing melalui portal website pemesanan tiket resmi dan video profil pelaksanaan program yang telah terdaftar Hak Kekayaan Intelektual (HKI), dilengkapi buku panduan dan video tutorial operasional bagi POKDARWIS.',
    tagBukti: [
      '✓ Sertifikat HKI Terbit',
      '✓ Diserahkan ke POKDARWIS'
    ],
    legalitas: 'Kemenkumham RI • Surat Pencatatan Hak Cipta EC00202510982',
    iconType: 'Globe',
    link: '#tur-360',
    linkText: 'Kunjungi Website',
    mockupType: 'web-hki'
  },
  {
    id: 'kartu-02',
    categoryGroup: 'publikasi',
    badgeKategori: 'PUBLIKASI BUKU & MODUL',
    judulKartu: 'Buku Resep Pangan Lokal Ber-ISBN & Buku Refleksi Ormawa',
    image: '/images/luaran/buku refeleksi.png',
    imageAlt: 'Dokumentasi Buku Resep Pangan Lokal dan Buku Refleksi',
    deskripsi: 'Penerbitan buku inovasi resep makanan dan minuman sehat berbasis potensi desa (ikan lele, TOGA, dan kelapa), ber-ISBN Universitas Tidar, serta Buku Refleksi Ormawa yang mendokumentasikan implementasi soft skills and hard skills mahasiswa.',
    tagBukti: [
      '✓ Terbit Ber-ISBN',
      '✓ Cetak & Elektronik'
    ],
    legalitas: 'Perpustakaan Nasional RI & Badan Penerbit Universitas Tidar',
    iconType: 'BookOpen',
    link: '#',
    linkText: 'Buka Publikasi',
    mockupType: 'books'
  },
  {
    id: 'kartu-03',
    categoryGroup: 'publikasi',
    badgeKategori: 'JURNAL & MEDIA MASSA',
    judulKartu: 'Artikel Jurnal E-DIMAS & Liputan Media Nasional/Lokal',
    image: '/images/luaran/jurnal dan publikasi.png',
    imageAlt: 'Publikasi Artikel Jurnal E-DIMAS dan Media Massa',
    deskripsi: 'Diseminasi keberhasilan pemberdayaan masyarakat melalui publikasi artikel pengabdian pada Jurnal E-DIMAS serta eksposur luas di berbagai media massa seperti Jawa Pos (Radar Magelang), iNews, Magelang News, dan Kompasiana.',
    tagBukti: [
      '✓ Accepted Jurnal E-DIMAS',
      '✓ Terbit di Media Massa'
    ],
    legalitas: 'Jurnal Pengabdian SINTA & 4 Portal Berita Terkemuka',
    iconType: 'Newspaper',
    link: 'https://untidar.ac.id',
    linkText: 'Liputan Media',
    mockupType: 'journal-media'
  },
  {
    id: 'kartu-04',
    categoryGroup: 'tata-kelola',
    badgeKategori: 'REGULASI & TATA KELOLA DESA',
    judulKartu: 'SK Pencanangan Desa Wisata, POKDARWIS & SOP Tubing',
    image: '/images/luaran/SOP dan SK pencanangan.png',
    imageAlt: 'Dokumen SK Kepala Desa dan SOP Tubing Basarnas',
    deskripsi: 'Penguatan payung hukum pengelolaan wisata melalui penerbitan Surat Keputusan (SK) Pencanangan Desa Wisata, pembentukan resmi kelembagaan POKDARWIS, serta penyusunan dokumen Standar Operasional Prosedur (SOP) keselamatan wisata tubing berstandar Basarnas.',
    tagBukti: [
      '✓ SK Resmi Terbit',
      '✓ Dokumen SOP K3 Aktif'
    ],
    legalitas: 'Pemerintah Desa Tampirkulon • Basarnas Unit Siaga Borobudur & PMI',
    iconType: 'FileText',
    link: '#',
    linkText: 'Buka Regulasi',
    mockupType: 'sk-legal'
  },
  {
    id: 'kartu-05',
    categoryGroup: 'tata-kelola',
    badgeKategori: 'INFRASTRUKTUR & HILIRISASI',
    judulKartu: 'Taman Sehat, Outdoor Gym & Gerai West Angkringan Sehat',
    image: '/images/luaran/Angringan dan taman sehat.png',
    imageAlt: 'Dokumentasi Fisik Taman Sehat dan Gerai Angkringan',
    deskripsi: 'Pembangunan ruang publik "Taman Sehat" yang merangkum kebun edukasi TOGA, alat kebugaran fisik sederhana (sepeda statis & pull-up bar), serta gerai angkringan sehat yang memasarkan olahan lele dan minuman herbal desa.',
    tagBukti: [
      '✓ BAST Senilai Rp9,7+ Juta'
    ],
    catatanBAST: 'Gabungan BAST Tubing Rp8,2 juta + BAST POKDARWIS Rp1,5 juta',
    legalitas: 'Berita Acara Serah Terima (BAST) Fisik Desa & Pengelola Wisata',
    iconType: 'ShieldCheck',
    link: '#',
    linkText: 'Dokumen BAST',
    mockupType: 'bast-infra'
  },
  {
    id: 'kartu-06',
    categoryGroup: 'digital',
    badgeKategori: 'MEDIA EDUKASI & PROMOSI',
    judulKartu: 'Kampanye Media Sosial, Dokumenter & Instrumen PHBS',
    image: '/images/luaran/Kampanye media sosial.png',
    imageAlt: 'Materi Kampanye Media Sosial dan Video Dokumenter',
    deskripsi: 'Pengelolaan akun media sosial resmi desa wisata (@pesona.tampirkulon) dan tim pelaksana, video dokumenter YouTube, serta penyediaan media fisik edukasi di lokasi wisata berupa banner keselamatan, leaflet PHBS, dan poster edukatif.',
    tagBukti: [
      '✓ Terpasang di Area Wisata',
      '✓ Publikasi Aktif'
    ],
    legalitas: 'Instrumen Edukasi Lingkungan Fisik & Kanal Media Daring Aktif',
    iconType: 'Video',
    link: 'https://youtube.com',
    linkText: 'Tonton Dokumenter',
    mockupType: 'social-video'
  }
```

- [ ] **Step 2: Update `.ref-preview-box` in card rendering**
Replace the card mockup rendering with `<img>` and gradient overlay:
```jsx
<div className="ref-preview-box">
  {item.image ? (
    <>
      <img 
        src={item.image} 
        alt={item.imageAlt || item.judulKartu}
        className="ref-preview-img"
        loading="lazy"
      />
      <div className="ref-preview-overlay" />
    </>
  ) : (
    renderMockupGraphic(item.mockupType)
  )}
  <div className="ref-preview-header">
    <span className="ref-cat-badge">
      {item.badgeKategori}
    </span>
    <span className="ref-verified-badge">
      <Check size={12} strokeWidth={3} />
      <span>Terverifikasi</span>
    </span>
  </div>
</div>
```

- [ ] **Step 3: Update Modal Body in `DeliverablesSection.jsx`**
Add `.deliverable-modal-img-wrap` inside `.deliverable-modal-body` before `.deliverable-modal-meta-card`:
```jsx
{selectedDoc.image && (
  <div className="deliverable-modal-img-wrap">
    <img 
      src={selectedDoc.image} 
      alt={selectedDoc.imageAlt || selectedDoc.judulKartu}
      className="deliverable-modal-img"
    />
  </div>
)}
```

- [ ] **Step 4: Verify syntax & build check**
Run: `npm run build` or test rendering in dev server.

- [ ] **Step 5: Commit changes**
```bash
git add src/components/sections/DeliverablesSection.jsx
git commit -m "feat(deliverables): map real photos to cards and modal"
```

---

### Task 2: Update CSS in `src/styles/deliverables.css`

**Files:**
- Modify: `src/styles/deliverables.css`

**Interfaces:**
- Consumes: Classes `.ref-preview-box`, `.ref-preview-img`, `.ref-preview-overlay`, `.deliverable-modal-img-wrap`, `.deliverable-modal-img`.
- Produces: Polished visual presentation with hover animations and WCAG-compliant overlays.

- [ ] **Step 1: Add image styling for `.ref-preview-box`**
Add styles for `.ref-preview-img` and `.ref-preview-overlay`:
```css
.ref-preview-box {
  position: relative;
  border-radius: var(--radius-md);
  background-color: var(--primary);
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  user-select: none;
}

.ref-preview-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.deliverable-ref-card:hover .ref-preview-img {
  transform: scale(1.05);
}

.ref-preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 30, 20, 0.72) 0%,
    rgba(15, 30, 20, 0.15) 45%,
    rgba(15, 30, 20, 0.5) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.ref-preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  width: 100%;
}
```

- [ ] **Step 2: Add modal image container styles**
```css
.deliverable-modal-img-wrap {
  width: 100%;
  max-height: 280px;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background-color: var(--surface-alt);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deliverable-modal-img {
  width: 100%;
  height: 100%;
  max-height: 280px;
  object-fit: contain;
  background-color: #111A13;
}
```

- [ ] **Step 3: Commit CSS changes**
```bash
git add src/styles/deliverables.css
git commit -m "style(deliverables): add photo preview and modal image styles"
```

---

### Task 3: Visual & Functional Verification

**Files:**
- Browser verification at `http://localhost:3000/#luaran`

- [ ] **Step 1: Check carousel rendering**
Verify that all 6 cards display their respective photos cleanly across slide navigation.
- [ ] **Step 2: Check hover interactions**
Hover over cards to ensure smooth scale effect without overflowing or breaking layout.
- [ ] **Step 3: Test modal view**
Click "Rincian Luaran" on multiple cards to verify modal image rendering and responsive fitting.
- [ ] **Step 4: Check mobile viewport**
Verify rendering at mobile viewport (< 640px).
