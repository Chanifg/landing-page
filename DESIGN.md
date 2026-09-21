# DESIGN.md — Desain Sistem "IN WEST TAMP" (Referensi Editorial Showcase)

**Proyek:** Landing Page Interaktif PPK Ormawa Himagi Universitas Tidar 2025  
**Kategori Penilaian:** Poster Paling Kreatif  
**Referensi Visual:** `desainweb.webp` (High-Impact Editorial Showcase Architecture)  
**Standar Kualitas:** antislop-ui & antislop core  

---

## 1. Identitas & Karakter Desain (The Soul of the Brand)

- **Nama Entitas:** IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon).
- **Esensi Konsep:** Mengubah laporan pengabdian masyarakat konvensional menjadi sebuah **"Showcase Destinasi & Dampak Premium"**.
- **Karakter Visual (Personality):**
  - **Bold & Authoritative:** Tipografi condensed yang tegas dan berani, memancarkan percaya diri bahwa program ini telah membawa dampak besar bagi desa.
  - **High-Contrast Dark Canvas:** Memadukan nuansa gelap arang (*Deep Charcoal/Obsidian*) dengan sentuhan warna alam pedesaan, membuat foto panorama 360 dan dokumentasi kegiatan "menyala" (*pop-out*) di layar.
  - **Geometric Craftsmanship:** Menggunakan bentuk heksagonal geometris (*hexagon cards & honeycomb cluster*) yang melambangkan presisi sains gizi dan keterpaduan ekosistem.
- **Uji Keunikan (Anti-Generik):** Desain ini tidak meniru template SaaS startup ungu/biru, melainkan mengadopsi gaya *magazine editorial showcase* kelas dunia yang disesuaikan untuk pariwisata sehat pedesaan.

---

## 2. Pengaturan Tiga Dial (The Three Dials)

| Dial | Nilai | Penjelasan Berdasarkan Referensi `desainweb.webp` |
|---|---|---|
| **ENERGY** | **3 (Bold)** | Tipografi judul raksasa (*condensed uppercase*), kontras tinggi antara latar gelap dan aksen cerah, serta visual fotografi berukuran besar yang langsung menarik perhatian juri (*high impact*). |
| **RHYTHM** | **3 (Varied & Asymmetric)** | Susunan section sangat dinamis dan bervariasi: perpaduan layout split asimetris, kartu slider horizontal, baris metrik berbentuk heksagon, dan cluster sarang lebah (*honeycomb*). Tidak ada dua section yang memiliki tata letak monoton. |
| **MOTION** | **2 (Scroll-Reveal & Fluid Transitions)** | Transisi tab mulus, interaksi rotasi sentuh 360, animasi counter angka saat scroll, dan efek hover kartu yang terukur tanpa loop mengambang liar. |

---

## 3. Palet Warna & Penerapan Aksen (Color System)

Mengadopsi formula kontras tinggi dari referensi: **Kanvas Gelap Obsidian + Hijau Alam Pedesaan + Aksen Oranye Emas / Electric Lime + Teks Putih Bersih**:

```
┌────────────────────────────────────────────────────────────────────────┐
│  Background Base: Deep Obsidian Slate (#0A0F0D / #111827)              │
│  Surface Card: Dark Card Surface (#141E18 / #1F2937)                   │
│  Primary Wellness Green: Forest Pine (#2D6A4F / #40916C)               │
│  Accent Highlight: Solar Gold / Electric Lime (#E58B24 / #C6F135)      │
│  Text Primary: Crisp White (#F9FAFB)                                   │
│  Text Secondary: Muted Silver (#9CA3AF / #D1D5DB)                      │
│  Border: Subtle Geometric Stroke (#2A3A30 / rgba(255,255,255,0.12))   │
└────────────────────────────────────────────────────────────────────────┘
```

### Aturan Penggunaan Warna (Dose Cap):
- **Kanvas Gelap:** Menjadi latar utama untuk menghadirkan kontras dramatis pada foto 360 dan poster.
- **Aksen Tunggal (*One Deliberate Accent*):** Warna emas surya / limau tajam (`#E58B24` / `#C6F135`) hanya dialokasikan untuk tombol tindakan utama (*CTA button*), status aktif (*active state*), pin peta, dan badge angka penting.

---

## 4. Tipografi Editorial (Typography Architecture)

Mengikuti hierarki tipografi dramatis pada referensi `desainweb.webp`:

- **Display Headline (Hero & Judul Section):**  
  `Bebas Neue` / `Oswald`, display sans-serif condensed uppercase.
  - *Karakter:* Sangat tinggi, tebal, dan padat. Membawa wibawa visual poster cetak ke dalam layar digital.
  - *Penerapan:* `IN WEST TAMP`, `FEATURED DESTINATIONS`, `LOCATION`, `EMPAT PILAR`, `PROGRAM DALAM ANGKA`.
- **Sub-headline & Label Kategori:**  
  `Plus Jakarta Sans`, font sans-serif modern berbobot *Bold* (700/800) untuk badge, angka, dan tombol.
- **Body Text:**  
  `Inter`, font dengan keterbacaan tinggi di layar smartphone, line-height 1.6, warna abu-abu perak (#D1D5DB) agar nyaman dibaca.

### Aturan Anti-Slop (R-02 & R-04):
- **Tanpa Em Dash (`—`):** Gunakan titik dua (`:`), tanda koma (`,`), atau tanda kurung `()`.
- **Tanpa Emoji Dekoratif:** Semua penanda menggunakan tipografi bersih atau ikon SVG vektor proporsional.

---

## 5. Pemetaan Komponen dari Referensi `desainweb.webp` ke "IN WEST TAMP"

Berikut adalah adaptasi langsung dari setiap blok referensi ke fitur website PPK Ormawa:

### A. Hero Section (Inspirasi: *Next Gen Athlete Summit*)
- Latar belakang foto alam Tampirkulon dengan gradien gelap vertikal dramatis.
- Judul raksasa: **IN WEST TAMP** (Condensed Display).
- Subjudul: **Integrated Wellness-Tourism Area Tampirkulon**.
- **Location Badge (Pojok Kanan Atas Hero):** Pin lokasi bercahaya halus dengan teks: `Desa Tampirkulon, Kec. Candimulyo, Kab. Magelang`.
- **Stat Box Ringkas (Kiri Bawah Hero):** Kotak bergaris tipis minimalis: `2.61 KM² Luas`, `4.893 Jiwa`, `13 Dusun`.
- Tombol Aksi: `Jelajahi Paket Wisata 360° ↗` (Aksen utama) dan `Lihat 4 Pilar` (Garis tepi).

### B. Rute Paket Wisata 360 Slider (Inspirasi: *Featured Athletes Carousel*)
- Judul Section: **FEATURED DESTINATIONS / 7 TITIK PAKET WISATA**.
- Format kartu berlatar gelap sudut melengkung (`border-radius: 16px`).
- **Tag Pilar di Kiri Atas Foto:** Badge melengkung (`Tubing Care`, `Green Wellness`, `Local Creative`, `Ecosystem`).
- **Foto Destinasi:** Foto lanskap panorama / lokasi paket wisata.
- **Bagian Bawah Kartu:** Nama destinasi dengan font condensed tebal (`SUNSET PERSAWAHAN`, `BASECAMP TUBING`, `SENTRA KERIPIK TEMPE`, dst.) + subline dusun di bawahnya.

### C. Modul "Location & Virtual Tour 360" (Inspirasi: *Location Split Showcase*)
- Layout split modern dalam kartu besar (`border-radius: 20px`):
  - **Sisi Kiri:** Judul masif `LOCATION & TUR VIRTUAL`, deskripsi wilayah, tombol `Buka Peta Sebaran Desa ↗`, dan tombol `Aktifkan Gyroscope HP`.
  - **Sisi Kanan:** Frame penampil 360 interaktif (Pannellum WebGL) dengan kontrol navigasi zoom dan rotasi di pojok bawah.

### D. "Program Dalam Angka" (Inspirasi: *Hexagon Metrics Row*)
- Angka statistik program dikemas ke dalam **kartu berbentuk segi enam (heksagon geometris)** yang ikonik:
  - ⬡ **4** — Pilar Program
  - ⬡ **15** — Mahasiswa Terlibat
  - ⬡ **5** — Bulan Pelaksanaan
  - ⬡ **6** — Kelompok Sasaran
  - ⬡ **95%** — Lonjakan Pengunjung
  - ⬡ **25** — Pengelola Bersertifikat K3
- Menggunakan CSS `clip-path: polygon(...)` untuk menghasilkan bentuk heksagon presisi dengan angka tebal di tengah dan label di bawahnya.

### E. Empat Pilar, Satu Ekosistem (Inspirasi: *Split Promo & Story Banner*)
- Disajikan sebagai perbandingan kartu split berukuran besar:
  - Tab interaktif untuk beralih antara kondisi *Sebelum* vs *Hasil Intervensi*.
  - Menampilkan foto asli lapangan dan kotak pencapaian terukur.

### F. Mitra Kolaborasi Honeycomb (Inspirasi: *Our Partners Cluster*)
- Logo mitra resmi (Untidar, Kemendikbudristek, Basarnas, PMI, Puskesmas, Posyandu, BPPSDMP) disusun dalam **formasi heksagonal saling terhubung (*honeycomb cluster*)**, melambangkan filosofi *"Satu Ekosistem Terpadu"*.

### G. Giant Watermark Footer (Inspirasi: *Athlete Showcase Watermark*)
- Di kaki halaman (*footer*), teks raksasa bergaya editorial majalah terpampang megah melintasi lebar layar:  
  **IN WEST TAMP — TAMPIRKULON 2025**  
  dalam format hollow outline tipografi berukuran masif (80px - 140px).

---

## 6. Rencana Eksekusi Revisi Kode

1. **Import Tipografi Baru:** Menambahkan font Google `Bebas Neue` dan `Oswald` ke `index.html`.
2. **Update Variabel Warna (`src/styles/main.css`):** Menerapkan tema gelap obsidian berpadu dengan hijau alam dan aksen surya/limau.
3. **Restrukturisasi Komponen Hero (`src/styles/hero.css`):** Mengadaptasi tipografi condensed raksasa, countdown/stat bar kotak minimalis, dan floating location badge.
4. **Implementasi Hexagon CSS untuk Metrik (`src/styles/counter.css`):** Mengganti kartu kotak biasa dengan bentuk heksagon geometris via `clip-path`.
5. **Restrukturisasi Modul Lokasi 360 (`src/styles/viewer360.css`):** Menyesuaikan tata letak split card sesuai section `LOCATION` pada referensi.
6. **Desain Honeycomb Logo Mitra (`src/styles/gallery.css`):** Menata logo mitra ke dalam pola sarang lebah heksagonal.
7. **Giant Watermark Footer:** Menambahkan teks raksasa di dasar footer.
8. **Build & Verifikasi:** Menjalankan `npm run build` dan menguji di browser.
