# Design Spec: Implementasi Foto Nyata pada Section Luaran (Deliverables)

- **Tanggal**: 2026-10-23
- **Status**: Disetujui
- **Target File**: 
  - `src/components/sections/DeliverablesSection.jsx`
  - `src/styles/deliverables.css`

## 1. Latar Belakang & Tujuan
Sebelumnya, kartu luaran pada Section Luaran menampilkan mockup visual berbasis ilustrasi CSS (`renderMockupGraphic`). User telah menyediakan 6 foto dokumentasi asli di direktori `public/images/luaran/`.
Tujuan perubahan ini adalah menampilkan foto-foto nyata tersebut secara elegan pada preview kartu dan modal rincian luaran guna memperkuat kredibilitas bukti fisik program IN WEST TAMP PPK Ormawa.

## 2. Pemetaan Foto ke Kartu Luaran
Berikut pemetaan 6 foto ke 6 kartu utama (`DELIVERABLES_6_CARDS`):

| No | ID Kartu | Judul Kartu | Path Gambar | Alt Text |
|---|---|---|---|---|
| 1 | `kartu-01` | Website Pemesanan Tiket & Video Program Ber-HKI | `/images/luaran/Web dan HKI.png` | Bukti Website Pemesanan Tiket dan Sertifikat HKI |
| 2 | `kartu-02` | Buku Resep Pangan Lokal Ber-ISBN & Buku Refleksi Ormawa | `/images/luaran/buku refeleksi.png` | Dokumentasi Buku Resep Pangan Lokal dan Buku Refleksi |
| 3 | `kartu-03` | Artikel Jurnal E-DIMAS & Liputan Media Nasional/Lokal | `/images/luaran/jurnal dan publikasi.png` | Publikasi Artikel Jurnal E-DIMAS dan Media Massa |
| 4 | `kartu-04` | SK Pencanangan Desa Wisata, POKDARWIS & SOP Tubing | `/images/luaran/SOP dan SK pencanangan.png` | Dokumen SK Kepala Desa dan SOP Tubing Basarnas |
| 5 | `kartu-05` | Taman Sehat, Outdoor Gym & Gerai West Angkringan Sehat | `/images/luaran/Angringan dan taman sehat.png` | Dokumentasi Fisik Taman Sehat dan Gerai Angkringan |
| 6 | `kartu-06` | Kampanye Media Sosial, Dokumenter & Instrumen PHBS | `/images/luaran/Kampanye media sosial.png` | Materi Kampanye Media Sosial dan Video Dokumenter |

## 3. Rincian Teknis & Komponen

### A. Komponen `DeliverablesSection.jsx`
1. **Pembaruan Data**:
   - Menambahkan field `image` dan `imageAlt` pada setiap item di array `DELIVERABLES_6_CARDS`.
2. **Card Visual Preview**:
   - Di dalam `.ref-preview-box`, menampilkan tag `<img>` yang memuat `item.image` dan `item.imageAlt` dengan atribut `loading="lazy"`.
   - Menjaga layer overlay di atas gambar untuk memuat `.ref-cat-badge` dan `.ref-verified-badge`.
3. **Modal Dialog (`selectedDoc`)**:
   - Menambahkan kontainer preview foto beresolusi tinggi di dalam `.deliverable-modal-body` (sebelum metadata).
   - Menampilkan gambar utuh dengan keterangan ringkas di bawahnya.

### B. Styling & CSS (`src/styles/deliverables.css`)
1. **Container Preview Card (`.ref-preview-box`)**:
   - Mengatur `position: relative`, `overflow: hidden`, dan `aspect-ratio: 16 / 10` (atau `4 / 3`).
   - Menambahkan `.ref-preview-img`: `width: 100%`, `height: 100%`, `object-fit: cover`, `transition: transform 0.4s ease`.
   - Hover state pada kartu: gambar melakukan zoom mikro `transform: scale(1.05)`.
   - Menambahkan gradient overlay di atas foto (`background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)`) agar badge dan kontras visual teks tetap terbaca sesuai standar aksesibilitas WCAG AA.
2. **Modal Image (`.deliverable-modal-img-wrap`)**:
   - Menata gambar dalam modal agar responsif (`max-height: 320px`, `width: 100%`, `object-fit: contain` atau `cover`, `border-radius: var(--radius-md)`).
   - Border halus dan background netral gelap/terang yang serasi dengan tema editorial.

## 4. Aksesibilitas & Performa
- Setiap gambar memiliki atribut `alt` yang deskriptif dan akurat.
- Atribut `loading="lazy"` disematkan untuk performa optimal.
- Tidak ada layout shift (CLS dicegah melalui aspect ratio tetap).

## 5. Rencana Verifikasi
- Melakukan verifikasi visual di browser (localhost:3000) untuk memastikan 6 kartu merender foto dengan benar di slide carousel.
- Membuka modal rincian luaran untuk memastikan gambar tampil proporsional tanpa distorsi.
- Memeriksa responsiveness pada tampilan desktop dan mobile.
