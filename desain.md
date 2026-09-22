# DESIGN.md: IN WEST TAMP

**Proyek:** Landing page interaktif, hasil program PPK Ormawa Himagi Universitas Tidar 2025.
**Konteks:** Halaman ini diakses via QR code pada poster cetak. 90%+ pengunjung membuka dari smartphone setelah memindai poster. Halaman berfungsi sebagai bukti lapangan (bukan jualan), menampilkan tur virtual 360 tujuh destinasi wisata desa dan capaian empat pilar program.
**Audiens:** Juri penilai PPK Ormawa (akademisi, birokrat kampus) dan warga desa yang ingin melihat hasil program.

---

## 1. Design Read

> Reading this as: program-report showcase for academic judges and villagers, in a high-contrast editorial-magazine style adapted for rural wellness tourism, dial ENERGY 3 / RHYTHM 3 / MOTION 2.

### Alasan Dial

| Dial | Nilai | Alasan |
|---|---|---|
| **ENERGY 3** | Bold | Poster cetak bersaing dengan ratusan poster lain. Halaman harus menghentikan scroll juri dalam 2 detik. Tipografi raksasa dan foto full-bleed melakukan itu. |
| **RHYTHM 3** | Varied, Asymmetric | Tujuh section berbeda (hero, tur 360, empat pilar, metrik, galeri, mitra, footer) masing-masing perlu komposisi unik agar halaman tidak terasa repetitif. Dua section dengan layout identik berarti salah satu harus diubah. |
| **MOTION 2** | Scroll-reveal, Fluid transitions | Interaksi sentuh 360 dan counter animasi saat scroll memberikan bukti "ini bukan poster statis". Tanpa loop tak berujung; gerakan berhenti saat pengguna berhenti scroll. |

---

## 2. Identitas Visual (The Soul)

### Nama dan Esensi

- **IN WEST TAMP** (Integrated Wellness-Tourism Area Tampirkulon).
- Halaman ini mengubah laporan pengabdian masyarakat menjadi showcase destinasi dan dampak. Bukan template SaaS, bukan portal berita, bukan company profile.

### Karakter (Personality)

Tiga sifat, masing-masing dengan alasan:

1. **Tegas dan percaya diri.** Program ini sudah berjalan lima bulan, sudah membentuk POKDARWIS, sudah melatih 25 pengelola K3. Desain mencerminkan hasil nyata, bukan rencana. Diwujudkan lewat tipografi condensed berbobot berat dan angka statistik yang besar.
2. **Kontras tinggi, kanvas gelap.** Foto 360 panorama dan dokumentasi lapangan harus menjadi bintang utama. Latar gelap membuat gambar "menyala" tanpa memerlukan glow CSS. Alasan kedua: membedakan halaman ini dari mayoritas landing page PPK Ormawa lain yang menggunakan latar putih polos.
3. **Geometri heksagonal sebagai motif identitas.** Segi enam melambangkan keterpaduan ekosistem (sel sarang lebah saling menyangga). Motif ini muncul pada kartu metrik dan susunan logo mitra, bukan di setiap elemen. Dosis terbatas supaya tetap terbaca sebagai keputusan, bukan dekorasi.

### Uji Keunikan (R-20)

> Jika logo dan nama "IN WEST TAMP" diganti, apakah desain ini masih terasa unik?

Ya, karena: (a) motif heksagonal terikat pada narasi ekosistem terpadu, (b) palet hijau-hutan dan emas-surya berasal dari warna alam pedesaan Jawa, bukan default AI, (c) tipografi condensed besar bukan untuk kesan "tech" tapi untuk membawa wibawa poster cetak ke layar digital.

---

## 3. Palet Warna (Color System)

Tiga warna inti + satu aksen. Netral (hitam, putih, abu-abu) tidak dihitung (R-29).

| Peran | Warna | Hex | Alasan |
|---|---|---|---|
| Background base | Clean Light Canvas | `#F8FAF6` | Kanvas terang bernuansa putih zaitun alami. Memberikan keterbacaan tinggi dan menyatu selaras dengan logo tim pelaksana. |
| Surface / card | Pure White Card | `#FFFFFF` | Permukaan kartu bersih dengan elevasi natural dan border halus tanpa bayangan berlebihan (R-12). |
| Primary | Deep Olive Moss Green | `#304115` | Warna primer resmi dari logo PPK Ormawa Himagi Untidar. Digunakan pada judul utama, header pilar, dan elemen navigasi aktif. |
| Accent (satu saja) | Solar Warm Amber Gold | `#DF9705` | Warna lingkaran matahari di pusat lambang logo tim pelaksana. Hanya untuk tombol CTA utama, pin peta aktif, dan counter metrik (R-13, one deliberate accent). |
| Teks utama | Forest Charcoal | `#182210` | Kontras terhadap `#F8FAF6` = 15.7:1. Melampaui AAA (7:1). |
| Teks sekunder | Muted Olive Slate | `#425239` | Kontras terhadap `#F8FAF6` = 8.0:1. Melampaui AAA untuk body text. |
| Teks muted | Soft Sage Grey | `#63755A` | Kontras terhadap `#F8FAF6` = 4.6:1. Aman untuk label pendukung (AA pass). |
| Border | Subtle Olive Stroke | `rgba(48, 65, 21, 0.12)` | Pembatas kartu rapi, berpadu harmonis dengan palet logo. |

### Dose Caps

- **Glow:** hanya pada tombol CTA utama saat hover (1 elemen). Tidak pada kartu, badge, ikon, atau border (R-13).
- **Shadow:** hanya pada viewer card 360 dan poster preview card (2 elemen, keduanya perlu elevasi karena berisi konten interaktif). Sisa elemen rata dengan kanvas (R-12).
- **Glassmorphism:** tidak digunakan. Kanvas terang bersih sudah memberikan kedalaman lewat elevasi kartu putih dan border halus (R-10).
- **Background pattern:** motif kontur topografi SVG pada opacity 3.5%. Alasan: merefleksikan kontur peta desa, bukan grid teknis generik (R-07). Satu pola saja, tidak ditumpuk.

---

## 4. Tipografi (Typography)

Tiga level hierarki, masing-masing dengan font yang dipilih untuk alasan spesifik (R-06, R-31):

| Level | Font | Alasan Pemilihan |
|---|---|---|
| Display / Headline | `Bebas Neue` (condensed, uppercase) | Membawa karakter poster cetak ke layar digital. Sangat tinggi dan padat, cocok untuk judul raksasa yang harus terbaca dalam 2 detik. Bukan "monospace estetik" atau "uppercase tracking lebar" generik (R-06). |
| Sub-headline, label, tombol | `Plus Jakarta Sans` (Bold 700/800) | Sans-serif modern Indonesia dengan karakter yang tegas dan bersahabat, cocok untuk badge dan UI element. |
| Body text | `Inter` (400/500) | Keterbacaan tinggi di layar smartphone berukuran kecil. Line-height 1.6. Dipilih bukan karena default AI, melainkan karena Inter secara tipografis dioptimalkan untuk ukuran kecil di layar (x-height tinggi, aperture terbuka). |

### Aturan Copy (R-02, R-04)

- Tidak ada em dash (`—`). Gunakan koma, titik dua, atau tanda kurung.
- Tidak ada emoji dekoratif. Penanda menggunakan ikon SVG atau tipografi.
- CTA bersifat spesifik (R-15): "Jelajahi Paket Wisata 360" bukan "Get Started". "Lihat Capaian 4 Pilar" bukan "Learn More".

---

## 5. Pemetaan Section (Content-Driven Composition)

Setiap section ada karena konten membutuhkannya, bukan karena template (C-3). Komposisi bervariasi sesuai RHYTHM 3.

### A. Hero Section

- **Konten:** Identitas program, lokasi, statistik wilayah, poster hasil program.
- **Komposisi:** Grid asimetris dua kolom. Kiri: judul `IN WEST TAMP` (Bebas Neue, ukuran masif), lokasi desa, statistik ringkas (2.61 KM², 4.893 Jiwa, 13 Dusun), dua tombol aksi. Kanan: kartu preview poster program.
- **Alasan layout:** Split asimetris memprioritaskan teks identitas (kolom kiri lebih lebar) karena juri membaca nama program terlebih dahulu. Poster di kanan menjadi bukti visual.
- **Focal point:** Judul "IN WEST TAMP" (satu elemen terbesar di layar).
- **Latar:** Foto alam Tampirkulon dengan gradien gelap vertikal (dari `#0A0F0D` solid ke transparan). Gradien berfungsi menjamin kontras teks, bukan dekorasi (R-01). Teks putih di atas gradien gelap: kontras terjamin di seluruh area (R-25, antislop-human scrim fix).

### B. Tur Virtual 360 (7 Titik Destinasi)

- **Konten:** Penampil panorama 360 interaktif (Pannellum), info spot aktif, thumbnail 7 destinasi.
- **Komposisi:** Viewer card besar (border-radius 20px, shadow karena elemen interaktif), bar info spot di bawah viewer, lajur thumbnail horizontal yang bisa di-scroll.
- **Alasan layout:** Section ini adalah fitur unggulan halaman. Viewer card mendapat seluruh lebar kontainer dan shadow (R-12: shadow justified karena ini elemen interaktif utama). Thumbnail horizontal mengikuti pola carousel destinasi dari referensi `desainweb.webp`, bukan bento grid (R-05).
- **Variasi dari Hero:** Komposisi penuh lebar (bukan split), dengan kontrol interaktif. Berbeda dari hero.
- **Kontrol interaktif:** Setiap tombol (zoom, autorotate, fullscreen, gyro, peta) memiliki fungsi nyata (R-26). Tidak ada tombol mati.

### C. Empat Pilar, Satu Ekosistem

- **Konten:** Empat pilar program dengan perbandingan kondisi sebelum vs sesudah intervensi.
- **Komposisi:** Grid 2x2 kartu pilar. Setiap kartu memiliki toggle tab "Hasil Intervensi" / "Sebelum Program". Tab mengungkap foto dokumentasi, deskripsi, dan kotak hasil terukur.
- **Alasan layout:** Grid 2x2 dipilih karena ada tepat 4 pilar (bukan dipaksakan ke 3 atau 6). Toggle tab memberikan interaktivitas yang membuktikan kedalaman substansi tanpa memperpanjang scroll (R-26: setiap toggle berfungsi nyata).
- **Variasi dari section sebelumnya:** Grid kartu (bukan full-width viewer, bukan split hero). Setiap kartu berbeda ikon dan warna tag.

### D. Program Dalam Angka

- **Konten:** Enam metrik capaian kuantitatif: 4 Pilar, 15 Mahasiswa, 5 Bulan, 6 Kelompok Sasaran, 95% Lonjakan, 25 Pengelola K3.
- **Sumber data:** Laporan PPK Ormawa Himagi Untidar 2025 (R-17: angka bersumber dari laporan resmi, bukan fabrikasi).
- **Komposisi:** Baris kartu metrik menggunakan bentuk heksagonal (CSS `clip-path`). Angka besar di tengah, label di bawah.
- **Alasan bentuk heksagon:** Motif identitas (bukan dekorasi acak). Heksagon melambangkan keterpaduan sel ekosistem. Hanya muncul di section metrik dan susunan mitra, bukan di setiap kartu (R-11: radius dan bentuk sebagai hierarki, bukan default di mana-mana).
- **Animasi:** Counter angka saat section masuk viewport, berhenti saat mencapai target. Tidak loop (R-19, MOTION 2). Alasan: memberikan momen kejutan saat juri scroll ke section ini.

### E. Galeri Dokumentasi

- **Konten:** Delapan foto dokumentasi kegiatan lapangan dengan filter kategori pilar.
- **Komposisi:** Grid masonry/auto-fill dengan lightbox. Tombol filter di atas grid.
- **Alasan layout:** Grid foto dengan ukuran seragam (bukan bento mosaic) karena semua foto dokumentasi memiliki bobot setara, tidak ada yang harus lebih besar dari lainnya (R-14). Filter kategori berfungsi nyata (R-26).
- **Variasi:** Berbeda dari semua section lain. Ini satu-satunya section dengan interaksi filter + lightbox.

### F. Mitra Kolaborasi

- **Konten:** Logo sembilan mitra resmi (Untidar, BLU, Pemkab Magelang, Basarnas, PMI, Puskesmas, Posyandu, Desa Wisata, Westtamp Tubing).
- **Komposisi:** Grid logo sederhana dengan hover opacity. Bukan honeycomb cluster (keputusan diubah dari versi sebelumnya karena honeycomb untuk 9 logo menciptakan layout canggung di mobile).
- **Logo nyata:** Semua logo dari mitra yang benar-benar terlibat (R-18, R-36, C-5). Bukan logo generik.

### G. Footer

- **Konten:** Identitas program, tim pelaksana, hak cipta.
- **Komposisi:** Dua kolom (brand + credits) + bar bawah. Bukan template empat kolom (R-05). Hanya link dan label yang benar-benar ada.
- **Teks watermark besar:** `IN WEST TAMP` dalam tipografi Bebas Neue hollow outline, ukuran masif (clamp 60px-120px), opacity rendah. Alasan: mengakhiri halaman dengan identitas kuat, mengadaptasi gaya editorial footer dari referensi `desainweb.webp`. Tanpa em dash pada watermark.

---

## 6. Motion dan Interaksi (MOTION 2)

Setiap animasi memiliki alasan tertulis (R-19):

| Elemen | Animasi | Alasan | Loop? |
|---|---|---|---|
| Section masuk viewport | Fade-up ringan (translateY 20px, opacity 0 ke 1), 400ms ease-out | Memberikan ritme saat scroll, menandakan "konten baru muncul" | Tidak. Sekali per section. |
| Counter angka | Increment dari 0 ke target, 1.5 detik | Momen kejutan yang membuktikan halaman ini interaktif, bukan gambar statis | Tidak. Counter berhenti di angka target. |
| Viewer 360 autorotate | Rotasi lambat saat pertama dimuat | Mengundang pengguna menyentuh/drag panorama. Berhenti saat pengguna berinteraksi. | Berhenti saat disentuh. |
| Hover kartu thumbnail | Scale 1.02, border accent | Feedback bahwa kartu bisa diklik | Tidak. Hanya saat hover. |
| Tab pilar toggle | Crossfade 250ms | Transisi mulus antara "Sebelum" dan "Sesudah" | Tidak. |

**Yang tidak ada:**
- Tidak ada elemen mengambang tak berujung (floating forever).
- Tidak ada pulse/bounce loop.
- Tidak ada parallax berlapis (MOTION 2, bukan 3).

---

## 7. Mobile-First (R-03)

- **Target utama:** Smartphone (QR code scan). Desain dimulai dari mobile, lalu diperluas ke desktop.
- **Tap target:** Minimum 44px pada setiap tombol dan thumbnail (antislop-layoutmobile).
- **Navbar mobile:** Tersembunyi, diganti floating dock di bawah layar (4 ikon navigasi utama). Dock tidak menghalangi konten.
- **Viewer 360 mobile:** Frame penuh lebar layar, kontrol diperbesar, gyroscope button muncul hanya di perangkat yang mendukung.
- **Grid pilar:** 2x2 di desktop, single column di mobile.
- **Tidak ada horizontal overflow** di viewport 320px-1440px.
- **Font size:** `clamp()` untuk semua heading, supaya tidak perlu breakpoint font terpisah.
- **Zoom 200%:** Layout tetap berfungsi, teks tidak terpotong (antislop-human, WCAG 1.4.4).

---

## 8. Aksesibilitas (R-25, R-32)

- **Kontras teks:** Semua pasangan warna di atas AA (4.5:1 normal, 3:1 large). Lihat tabel warna di Section 3.
- **Focus visible:** `outline: 3px solid #DF9705; outline-offset: 3px` pada setiap elemen interaktif (R-32). Tidak ada `outline: none` tanpa pengganti.
- **Keyboard:** Tab order mengikuti urutan visual. Modal (lightbox, minimap) bisa ditutup dengan Escape. Tombol diaktifkan dengan Enter/Space.
- **Alt text:** Setiap `<img>` memiliki alt deskriptif. Foto 360 memiliki label ARIA.
- **Color-only feedback:** Tidak ada status yang hanya dikomunikasikan lewat warna. Filter galeri aktif ditandai warna + font weight.

---

## 9. Rencana Eksekusi Revisi

Urutan kerja untuk mengubah implementasi saat ini (light theme, Plus Jakarta Sans heading) ke desain baru (dark editorial, Bebas Neue display):

1. Import font `Bebas Neue` dan `Oswald` via Google Fonts.
2. Update variabel warna di `src/styles/main.css` ke palet gelap obsidian.
3. Restrukturisasi hero (`src/styles/hero.css`): tipografi condensed, stat bar, latar foto dengan gradien gelap.
4. Update viewer 360 (`src/styles/viewer360.css`): split card sesuai referensi "Location" `desainweb.webp`.
5. Hexagon CSS untuk metrik (`src/styles/counter.css`): `clip-path: polygon(...)`.
6. Update galeri dan mitra (`src/styles/gallery.css`): grid sederhana, hover opacity.
7. Footer watermark besar (`src/styles/main.css` atau file terpisah).
8. Verifikasi: `npm run build`, klik setiap kontrol, cek kontras, cek mobile 320px dan 768px, cek keyboard navigation (R-35).
