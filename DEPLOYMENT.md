# Panduan Deployment: IN WEST TAMP Landing Page

Landing page ini dirancang super ringan menggunakan **Vite + Vanilla JS + Pannellum WebGL**, sehingga dapat di-deploy secara **gratis, otomatis, dan berkecepatan tinggi (Edge CDN)** ke **Vercel** atau **Cloudflare Pages**.

---

## Opsi A: Deploy Menggunakan Vercel (Paling Direkomendasikan & Mudah)

### Cara 1: Lewat Web Dashboard Vercel (Tanpa Install Apapun)
1. Buat repositori baru di GitHub (misal: `inwesttamp-landing-page`).
2. Hubungkan dan push folder proyek ini ke GitHub:
   ```bash
   git remote add origin https://github.com/USERNAME/inwesttamp-landing-page.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub kamu.
4. Klik **"Add New..."** $\rightarrow$ **"Project"**.
5. Pilih repositori `inwesttamp-landing-page` yang baru kamu buat.
6. Vercel akan otomatis mendeteksi konfigurasi:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
7. Klik **"Deploy"**.
8. Dalam waktu ~30 detik, web kamu langsung aktif di domain gratis, misalnya:  
   👉 `https://inwesttamp.vercel.app`

---

## Opsi B: Deploy Menggunakan Cloudflare Pages

1. Buka [dash.cloudflare.com](https://dash.cloudflare.com) $\rightarrow$ menu **Workers & Pages**.
2. Klik **"Create application"** $\rightarrow$ tab **"Pages"** $\rightarrow$ **"Connect to Git"**.
3. Pilih repositori GitHub kamu.
4. Atur build setting:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Klik **"Save and Deploy"**.
6. Web kamu langsung aktif di domain:  
   👉 `https://inwesttamp.pages.dev`

---

## Membuat QR Code Poster

Setelah web kamu aktif dan mendapatkan URL resmi (misal: `https://inwesttamp.vercel.app`), buat file QR Code resolusi tinggi untuk ditempelkan pada desain poster cetak:

Jalankan perintah:
```bash
node scripts/generate-qr.js https://inwesttamp.vercel.app
```

File QR Code akan otomatis tersimpan di:
- `public/qr/poster-qr-code.svg` (Format vektor tajam tanpa pecah untuk software CorelDraw / Adobe Illustrator / Canva / Photoshop).
- `public/qr/poster-qr-code.png` (Resolusi tinggi 1200 x 1200 px).

Tempelkan QR code tersebut ke sudut poster kamu sebelum dicetak atau disubmit ke juri PPK Ormawa!
