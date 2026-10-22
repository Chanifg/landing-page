# Design Spec: Horizontal Slider Bento Grid Galeri Dokumentasi

**Date:** 2026-10-23  
**Status:** Approved by User  
**Target Component:** `src/components/sections/GallerySection.jsx`  
**Styles:** `src/styles/gallery.css`  
**Data File:** `src/data/siteImages.js`  
**Asset Folder:** `public/images/documentation/`  

---

## 1. Overview & Goal
Mengubah section Galeri Dokumentasi Kegiatan yang sebelumnya merupakan bento grid statis menjadi **Horizontal Draggable Bento Slider** (Opsi C). Desain ini mempertahankan keunikan hierarki visual Bento Grid (kombinasi kartu Hero vertikal 3:4, kartu reguler 1:1, dan panorama 21:9), namun dapat digeser secara horizontal menggunakan kontrol panah *Prev / Next*, gesture mouse drag, dan mobile swipe.

Foto-foto dokumentasi sementara menggunakan placeholder standar berlabel terstruktur sampai pengguna memasukkan foto final ke dalam direktori aset.

---

## 2. Lokasi Aset & Format Gambar

### 2.1 Direktori Aset Fisik
Semua file foto dokumentasi disimpan pada folder:
`public/images/documentation/`

### 2.2 Skema Data pada `siteImages.js`
Data gambar dikelompokkan ke dalam beberapa kluster bento atau daftar item dengan metadata:
```javascript
{
  id: 'bento-1',
  title: 'Judul Dokumentasi Kegiatan',
  caption: 'Deskripsi singkat mengenai foto kegiatan lapangan.',
  src: '/images/documentation/nama-file.jpg', // Path ke public/images/documentation/
  tag: 'Kategori / Pilar',
  type: 'hero' | 'medium' | 'panorama' // Penentu layout bento
}
```

### 2.3 Rasio & Ukuran Rekomendasi
* **Hero Card (Vertical):** Rasio 3:4 atau 4:5 (rekomendasi: 900 × 1200 px)
* **Medium Card (Square):** Rasio 1:1 (rekomendasi: 800 × 800 px)
* **Panorama Card (Wide):** Rasio 16:9 atau 21:9 (rekomendasi: 1600 × 700 px)

---

## 3. Arsitektur Komponen & UX

### 3.1 Struktur Layout Bento Clusters
* Setiap slide/cluster berisi satu set komposisi bento (5–6 kartu):
  * **Kartu 1 (Hero)**: Tampil dominan di sisi kiri (rasio vertikal 3:4) dengan title dan badge.
  * **Kartu 2–5 (Medium Grid)**: Grid 2x2 kartu bujur sangkar di sisi tengah/kanan.
  * **Kartu 6 (Panorama)**: Kartu lanskap horizontal lebar di bagian bawah atau variasi cluster berikutnya.
* Diatur dalam *track container* dengan CSS flexbox / grid memanjang horizontal dengan `transform: translateX(...)` yang dikendalikan oleh state slider.

### 3.2 Interaksi Gesture & Slider Physics
* **Pointer Events API** (`pointerdown`, `pointermove`, `pointerup`, `pointercancel`) kompatibel mouse desktop dan touch screen mobile.
* **Boundary Resistance**: Hambatan elastis (multiplier 0.25x) saat pengguna melakukan drag melewati batas awal atau batas akhir.
* **Click vs Drag Discrimination**: Jika jarak drag > 5px, `hasDragged` diset true sehingga `onClick` untuk membuka LightboxModal tidak terpicu saat melakukan swipe.
* **Navigasi Panah & Dots**:
  * Tombol navigasi melayang (*Prev / Next*) di header section dengan status disabled otomatis saat di ujung batas.
  * Dot pagination untuk menunjukkan posisi cluster aktif.
  * Dukungan navigasi keyboard (*ArrowLeft* dan *ArrowRight*).

### 3.3 Integrasi Lightbox Modal
* Mengklik kartu apapun (tanpa drag) membuka modal penampil foto penuh (`LightboxModal`) dengan indeks foto yang tepat dari seluruh koleksi galeri.

---

## 4. Responsivitas Layar
* **Desktop (>1024px)**: 1 cluster bento utuh per view dengan visual preview tepi tipis dari cluster berikutnya.
* **Tablet (768px - 1023px)**: Skala bento menyesuaikan lebar layar, gap 1rem.
* **Mobile (<768px)**: Bento grid bertumpuk rapi dengan scrolling horizontal halus berbasis card snap atau swipe cluster tanpa menyebabkan overflow halaman utama.

---

## 5. Rencana Pengujian
1. Verifikasi transisi slide antar cluster bento via tombol Prev/Next.
2. Uji drag mouse desktop dan touch swipe pada mobile preview.
3. Pastikan mengklik kartu membuka LightboxModal dan tidak tertrigger saat drag.
4. Pastikan placeholder `ImagePlaceholder` tampil jelas dengan label nomor urut yang memudahkan penggantian foto.
