# Horizontal Bento Slider Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengubah Galeri Dokumentasi Kegiatan (`GallerySection.jsx`) menjadi horizontal draggable bento slider dengan placeholder gambar terstruktur dan interaksi gestur sentuh/mouse yang mulus.

**Architecture:** Membagi data dokumentasi ke dalam kluster bento (masing-masing 6 item bento) di `siteImages.js`. Mengimplementasikan viewport slider dengan gesture pointer events (drag offset, boundary resistance, click-vs-drag distinction) dan navigasi panah/dots di `GallerySection.jsx`. Menata layout flex slider dan grid bento responsive di `gallery.css`.

**Tech Stack:** React, Vanilla CSS, Lucide Icons (`Eye`, `ChevronLeft`, `ChevronRight`).

## Global Constraints
- Target folder aset foto: `public/images/documentation/`.
- Foto sementara menggunakan komponen `ImagePlaceholder` dengan label jelas `[Dokumentasi XX]`.
- Kompatibel penuh dengan modal `LightboxModal` tanpa memicu buka modal saat drag.
- Desain mengikuti antislop & desain editorial warm green yang sudah ada.

---

### Task 1: Update Data Gallery & Placeholder di `siteImages.js`

**Files:**
- Modify: `src/data/siteImages.js`

**Interfaces:**
- Produces: `siteImages.gallery` array dengan minimal 12 item (2 kluster bento lengkap @ 6 item) dengan properti `id`, `title`, `caption`, `src`, `tag`, `type`.

- [ ] **Step 1: Definisikan data 12 item galeri bento**
Buka `src/data/siteImages.js` dan perbarui array `gallery` agar memiliki 2 kluster (12 item) dengan path gambar ke `/images/documentation/...` dan fallback placeholder yang jelas.

```javascript
    gallery: [
      // Cluster 1 (Kegiatan Kelembagaan & Lapangan)
      {
        id: 'bento-1',
        title: 'Pelatihan Water Rescue & Standarisasi Keselamatan Basarnas',
        caption: 'Simulasi tanggap darurat kecelakaan air di Sungai Gono bersama instruktur Basarnas.',
        src: '/images/documentation/pelatihan-k3-basarnas.jpg',
        tag: 'K3 & Water Rescue',
        type: 'hero'
      },
      {
        id: 'bento-2',
        title: 'Musyawarah Desa & SK Legalitas POKDARWIS',
        caption: 'Penyerahan SK Kepala Desa atas pengesahan kelompok sadar wisata Tampirkulon.',
        src: '/images/documentation/pembentukan-pokdarwis.jpg',
        tag: 'Kelembagaan Desa',
        type: 'medium'
      },
      {
        id: 'bento-3',
        title: 'Pembangunan Ruang Sehat Taman TOGA',
        caption: 'Revitalisasi lahan tidur di area basecamp menjadi kebun tanaman obat keluarga produktif.',
        src: '/images/documentation/taman-sehat-toga.jpg',
        tag: 'Green Wellness',
        type: 'medium'
      },
      {
        id: 'bento-4',
        title: 'Pelatihan Diversifikasi Olahan Lele Ibu PKK',
        caption: 'Inovasi pembuatan bakso dan nugget lele bernutrisi tinggi untuk pencegahan stunting.',
        src: '/images/documentation/edukasi-olahan-lele.jpg',
        tag: 'Gizi & Pangan',
        type: 'medium'
      },
      {
        id: 'bento-5',
        title: 'Pendampingan Standarisasi & Labeling Kemasan UMKM',
        caption: 'Peningkatan daya saing produk keripik tempe dan gula jawa alami Tampirkulon.',
        src: '/images/documentation/sosialisasi-umkm.jpg',
        tag: 'Pemberdayaan UMKM',
        type: 'medium'
      },
      {
        id: 'bento-6',
        title: 'Lanskap Persawahan & Sunset Alami Desa Tampirkulon',
        caption: 'Panorama alam terasering pegunungan yang terintegrasi dalam paket tur wisata.',
        src: '/images/360/sunset-persawahan.jpg',
        tag: 'Pesona Alam Tampirkulon',
        type: 'panorama'
      },

      // Cluster 2 (Placeholder untuk Foto Tambahan)
      {
        id: 'bento-7',
        title: 'Pemeriksaan Kesehatan & Skrining Kebugaran Warga',
        caption: 'Pelayanan cek tensi, gula darah, dan konsultasi kesehatan berkala untuk warga lansia.',
        src: '/images/documentation/health-screening.jpg',
        tag: 'Layanan Kesehatan',
        type: 'hero'
      },
      {
        id: 'bento-8',
        title: 'Pelatihan Pertolongan Pertama Gawat Darurat (PMI)',
        caption: 'Edukasi kesiapsiagaan cedera wisata dan evakuasi dasar bersama fasilitator PMI.',
        src: '/images/documentation/pelatihan-p3k-pmi.jpg',
        tag: 'K3 & Keselamatan',
        type: 'medium'
      },
      {
        id: 'bento-9',
        title: 'Pemasangan Rambu Jalur Evakuasi & Petunjuk Wisata',
        caption: 'Pemasangan penunjuk arah permanen ramah lingkungan di sepanjang rute susur sungai.',
        src: '/images/documentation/aksi-wisata-tubing.jpg',
        tag: 'Infrastruktur Wisata',
        type: 'medium'
      },
      {
        id: 'bento-10',
        title: 'Workshop Pengemasan Pangan Sehat & Higienitas',
        caption: 'Praktek sanitasi pengolahan produk lokal bersama praktisi teknologi pangan.',
        src: '/images/documentation/placeholder-10.jpg',
        tag: 'Pengembangan UMKM',
        type: 'medium'
      },
      {
        id: 'bento-11',
        title: 'Kerja Bakti Bersih Sungai & Konservasi Sempadan',
        caption: 'Aksi gotong royong karang taruna menjaga kebersihan aliran sungai wisata Gono.',
        src: '/images/documentation/placeholder-11.jpg',
        tag: 'Konservasi Lingkungan',
        type: 'medium'
      },
      {
        id: 'bento-12',
        title: 'Pentas Seni Budaya & Atraksi Warga Tampirkulon',
        caption: 'Dokumentasi kolaborasi kesenian lokal memeriahkan pembukaan rute wisata desa.',
        src: '/images/documentation/placeholder-12.jpg',
        tag: 'Atraksi Budaya',
        type: 'panorama'
      }
    ]
```

- [ ] **Step 2: Verifikasi sintaks dan ekspor data**
Jalankan pengecekan file `node -e "import('./src/data/siteImages.js').then(m => console.log('Count:', m.siteImages.gallery.length))"`

- [ ] **Step 3: Commit perubahan data**
```bash
git add src/data/siteImages.js
git commit -m "feat: expand gallery documentation data with structured bento clusters"
```

---

### Task 2: Implementasi Horizontal Slider Logic di `GallerySection.jsx`

**Files:**
- Modify: `src/components/sections/GallerySection.jsx`

**Interfaces:**
- Consumes: `siteImages.gallery`, `photos` prop, `onSelectPhoto` callback.
- Produces: UI Galeri Bento Slider dengan tombol kontrol Prev/Next, drag gesture handlers, dan dot pagination.

- [ ] **Step 1: Buat helper pengelompokan data kluster (6 item per kluster)**
Dalam `GallerySection.jsx`:
```javascript
const items = (photos && photos.length > 0) ? photos : siteImages.gallery;
const clusters = [];
for (let i = 0; i < items.length; i += 6) {
  clusters.push(items.slice(i, i + 6));
}
```

- [ ] **Step 2: Pasang state navigasi dan pointer gesture**
Tambahkan state:
- `currentCluster` (indeks kluster aktif: `0` hingga `clusters.length - 1`)
- `isDragging`, `dragOffset`
- Refs: `viewportRef`, `isDraggingRef`, `dragStartXRef`, `currentDragOffsetRef`, `hasDraggedRef`
- Handler: `handlePrev`, `handleNext`, `handlePointerDown`, `handlePointerMove`, `handlePointerUp`, `handleKeyDown`
- Pastikan saat `hasDraggedRef.current === true`, klik kartu tidak memanggil `onSelectPhoto(globalIndex)`.

- [ ] **Step 3: Render Header dengan Tombol Navigasi Panah dan Track Slider**
Perbarui JSX `GallerySection.jsx` untuk merender:
1. Tombol navigasi ChevronLeft & ChevronRight di header section.
2. Viewport & Track horizontal (`transform: translateX(...)`).
3. Pemetaan setiap kluster ke layout bento (Hero 3:4, Grid 2x2, Panorama 21:9).
4. Indikator dot pagination di bagian bawah section.

- [ ] **Step 4: Commit pembaruan komponen**
```bash
git add src/components/sections/GallerySection.jsx
git commit -m "feat: implement horizontal draggable bento slider in GallerySection"
```

---

### Task 3: Styling Bento Slider & Responsive Layout di `gallery.css`

**Files:**
- Modify: `src/styles/gallery.css`

**Interfaces:**
- CSS classes: `.bento-gallery-viewport`, `.bento-gallery-track`, `.bento-cluster-slide`, `.bento-slider-nav`, `.bento-slider-dots`, `.bento-dot`.

- [ ] **Step 1: Tambahkan CSS untuk slider track dan viewport**
Buka `src/styles/gallery.css` dan tambahkan styling:
- `.bento-gallery-viewport`: `overflow: hidden; width: 100%; position: relative; user-select: none; touch-action: pan-y; cursor: grab;`
- `.bento-gallery-viewport.is-dragging`: `cursor: grabbing;`
- `.bento-gallery-track`: `display: flex; will-change: transform; transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);`
- `.bento-cluster-slide`: `min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box;`
- `.bento-slider-nav-btn`: tombol melayang modern dengan warna aksen brand forest green.
- `.bento-slider-dots`: titik indikator slide aktif dengan animasi lebar pill.

- [ ] **Step 2: Atur responsivitas tablet & mobile**
Pastikan pada layar tablet (<1024px) dan mobile (<768px):
- Grid bento tetap proporsional dan tidak ada overflow mendatar yang merusak body landing page.
- Tombol navigasi mudah ditekan (touch target minimal 44x44px).

- [ ] **Step 3: Commit perubahan CSS**
```bash
git add src/styles/gallery.css
git commit -m "style: add horizontal bento slider styles and responsive breakpoints"
```

---

### Task 4: Verifikasi & QA

- [ ] **Step 1: Jalankan validasi build project**
Jalankan `npm run build` untuk memastikan tidak ada kesalahan kompilasi atau sintaks.

- [ ] **Step 2: Uji tampilan di browser**
Buka halaman di browser dev server (`http://localhost:3000/#galeri`), lakukan:
1. Uji klik tombol Next / Prev.
2. Uji drag mouse ke kiri dan ke kanan.
3. Uji klik salah satu kartu untuk memastikan Lightbox terbuka.
4. Verifikasi bahwa placeholder gambar tertera nomor urut dengan jelas.

- [ ] **Step 3: Final commit & integrasi**
```bash
git add .
git commit -m "chore: verify and finalize bento gallery slider"
```
