# DESIGN.md — Identitas & Panduan Desain "IN WEST TAMP"
**Proyek:** Landing Page PPK Ormawa Himagi Universitas Tidar 2025  
**Fokus Evaluasi:** Penilaian Poster Paling Kreatif  
**Standar Kualitas:** antislop-ui (Craftsmanship & Anti-Generic Standard)

---

## 1. Identitas & Karakter Produk (Soul of the Brand)

- **Nama Program:** IN WEST TAMP (Integrated Wellness-Tourism Area Tampirkulon).
- **Entitas:** Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) Himpunan Mahasiswa Gizi (Himagi), Fakultas Ilmu Kesehatan, Universitas Tidar.
- **Karakter Visual (Personality):** 
  - *Otentik & Membumi (Earthy & Grounded):* Menyatu dengan alam pedesaan Tampirkulon, pertanian, air sungai pegunungan, dan kearifan lokal warga.
  - *Profesional Akademis (Rigorous & Credible):* Menyajikan data hasil intervensi yang terukur dan dapat diverifikasi, bukan klaim kosong.
  - *Segar & Bugar (Wellness & Vitality):* Mengusung kesehatan masyarakat, gizi keluarga, keamanan wisata air, dan ruang terbuka hijau.
- **Uji Anti-Generik:** Jika logo dan nama program ditukar, halaman ini **tidak boleh terasa seperti template SaaS / startup generik**. Halaman ini harus terasa seperti **karya dokumentasi & portal pariwisata sehat desa binaan mahasiswa yang nyata**.

---

## 2. Tiga Pengaturan Utama (Three Dials)

| Pengaturan | Level | Penjelasan & Alasan |
|---|---|---|
| **ENERGY** | **2 (Balanced)** | Tidak terlalu hening/kaku (Level 1) dan tidak berlebihan penuh efek visual mencolok (Level 3). Menyeimbangkan keseriusan laporan ilmiah PPK Ormawa dengan daya tarik visual pariwisata pedesaan. |
| **RHYTHM** | **2 (Consistent with Few Breaks)** | Tata letak mengalir teratur dengan variasi komposisi yang bermakna: dimulai dari hero naratif, berlanjut ke panggung panorama 360 yang lapang, komparasi kartu pilar yang interaktif, dan galeri berfoto nyata. |
| **MOTION** | **1.5 (Purposeful & Restrained)** | Animasi hanya hadir saat ada interaksi pengguna (hover sentuh, buka modal peta, rotasi 360, scroll counter). **Dilarang keras ada animasi looping tanpa henti (endless pulse, floating infinite bounce)** yang mengganggu fokus membaca. |

---

## 3. Palet Warna & Kontras (Color Restraint)

Membatasi palet aktif menjadi **2 warna utama + 1 aksen hangat + netral alami** (memenuhi batas maksimal R-29 dan standar kontras WCAG AA 4.5:1):

```
┌──────────────────────────────────────────────────────────────────┐
│  Primary: Forest Wellness Green (#1B4332 / #2D6A4F)              │
│  Accent: Terracotta Sun Gold (#D97706 / #E58B24)                 │
│  Neutral Base: Warm Cream (#FAF8F5 / #F4EFE6)                    │
│  Deep Slate Text: High Contrast Ink (#111827 / #1F2937)          │
└──────────────────────────────────────────────────────────────────┘
```

- **Alasan Pemilihan Warna:**
  - *Forest Green (`#1B4332`)*: Merefleksikan vegetasi alami pedesaan, tanaman TOGA, dan air sungai Tampirkulon.
  - *Terracotta Sun Gold (`#D97706`)*: Warna aksen yang diambil langsung dari kata "TAMP" dan warna pelampung tubing pada poster asli.
  - *Warm Cream (`#FAF8F5`)*: Memberikan kehangatan kertas cetak alami, menghindari warna putih dingin silau `#FFFFFF` yang terasa seperti template Bootstrap/Tailwind bawaan.
- **Batas Penggunaan Aksen (Dose Cap):**
  - Aksen oranye hanya digunakan untuk tombol aksi utama (*Primary CTA*), angka metrik penting, dan penanda spot aktif.
  - Dilarang mewarnai semua garis, icon, dan latar belakang dengan warna aksen sekaligus.

---

## 4. Tipografi & Hirarki Teks (Typography with Reason)

- **Headings:** `Plus Jakarta Sans` (Semi-bold / Bold / Extra-bold)
  - *Alasan:* Karakter geometris modern Indonesia yang tegas dan berwibawa untuk judul program kemahasiswaan.
- **Body Text:** `Inter` (Regular / Medium, line-height 1.65)
  - *Alasan:* Keterbacaan optimal pada layar ponsel juri ketika membaca paragraf hasil program.
- **Aturan Tipografi Anti-Slop:**
  - **Dilarang Em Dash (`—`):** Ganti semua tanda pisah panjang dengan tanda koma (`,`), titik (`.`), tanda hubung pendek (`-`), atau tanda kurung `()`. (Sesuai R-02).
  - **Dilarang Huruf Kapital Ekstrem dengan Spasi Jauh:** Hindari `H O W  I T  W O R K S`. Gunakan Sentence Case atau Title Case wajar.
  - **Dilarang Emoji Dekoratif:** Hapus semua emoji (🚀, 🔥, 💡, ✓, ⚠) dari heading, badge, dan tombol. Gunakan ikon SVG fungsional yang relevan atau cukup teks lugas. (Sesuai R-04).

---

## 5. Tata Letak, Komponen & Hirarki Bentuk (Component Hygiene)

### A. Radii & Bentuk Sudut (Anti-Pill Default)
- Hindari membuat *seluruh* elemen berbentuk pil kapsul (*uniform pill shape*).
- Terapkan hierarki radius yang tegas:
  - Tombol aksi utama (CTA): Radius melengkung nyaman (`24px` atau `100px` untuk button utama saja).
  - Kartu pilar & container informasi: Sudut tegas melengkung halus (`12px` hingga `16px`).
  - Tag kategori & thumbnail: Sudut ringkas (`6px`).

### B. Batasan Efek Dekoratif (Anti-Trend Stacking)
- **Glassmorphism (Dose Cap: Max 1):** Hanya gunakan efek blur pada navbar sticky. Hapus efek glassmorphism berlebihan dari kartu statis di body agar teks tidak kehilangan kontras.
- **Shadow (Depth Hierarchy):** Sebagian besar kartu duduk rata (*flat*) dengan garis tepi (*border*) halus `1px solid #E6DFD3`. Bayangan (*shadow*) hanya muncul saat kursor melakukan *hover* atau pada modal popup yang memang melayang.
- **Glow:** Dilarang menggunakan efek pendaran cahaya (*glow / box-shadow neon*) pada kartu dan border.

### C. Hero Section Re-alignment
- **Hapus Eyebrow Badge Berulang di Atas H1:** Hapus pil kecil *"Kandidat Poster Paling Kreatif"* yang menempel di atas judul. Pindahkan konteks kompetisi ke subjudul atau navbar secara natural agar judul `IN WEST TAMP` menjadi fokus visual utama (*One Focal Point*).

---

## 6. Otentisitas Konten & Bukti Nyata (Evidence Over Claims)

1. **Semua Data Bersumber Nyata:**
   - 4 Pilar Program, 15 Mahasiswa, 5 Bulan, 6 Kelompok Sasaran, 95% Kenaikan Pengunjung, 25 Pengelola Terlatih K3/P3K, 21 m² Taman Sehat, 6 Jenis TOGA.
   - Tidak ada angka palsu "10K+ Pengguna" atau "99.9% Uptime".
2. **Dokumentasi Asli Lapangan:**
   - Menggunakan foto asli pelatihan Basarnas, PMI, PKK, dan pembangunan taman sehat Desa Tampirkulon yang diambil selama kegiatan PPK Ormawa berlangsung.
3. **Tur 360 Transparan:**
   - Menandai secara jujur mana foto panorama 360 yang sudah aktif (*Sunset di Persawahan*) dan mana yang sedang dalam jadwal pengambilan foto lapangan (*Basecamp, Keripik Tempe, Gula Jawa, Karawitan, Tuk Putri, Tubing River*).

---

## 7. Audit & Checklist Revisi antislop-ui

Daftar poin perbaikan konkret yang akan diterapkan pada kode sumber:

- [ ] **[R-02 Copywriting]** Hapus seluruh karakter em dash (`—`) pada `index.html`, `main.js`, dan CSS. Ganti dengan koma, titik dua, atau tanda kurung.
- [ ] **[R-04 No Decorative Emoji]** Hapus emoji dekoratif (`💡`, `✓`, `⚠`, `🌱`) pada teks UI, modal, dan badge pilar. Ganti dengan visual layout yang bersih atau ikon SVG relevan.
- [ ] **[R-09 No Eyebrow Clutter]** Rapikan area atas H1 di Hero Section agar judul program tampil sebagai focal point utama yang kuat.
- [ ] **[R-10 & R-13 Glass & Glow Cap]** Hilangkan efek backdrop blur dan glow berlebihan pada kartu metrik dan badge; gunakan permukaan solid bertekstur hangat yang ramah mata.
- [ ] **[R-11 Border Radius Balance]** Ganti gaya pill seragam pada kartu dan filter menjadi radius terstruktur (`12px` untuk kartu, `6px` untuk tag).
- [ ] **[R-19 Motion Restraint]** Hapus animasi loop melayang (`animate-float`) yang bergerak terus-menerus tanpa pemicu interaksi pengguna.
- [ ] **[R-32 Keyboard Accessibility]** Pastikan status fokus `:focus-visible` memiliki ring kontras tinggi yang jelas saat tombol atau tautan dinavigasi dengan keyboard (Tab).
