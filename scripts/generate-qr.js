/**
 * Script Pembuat QR Code Poster Resolusi Tinggi
 * Menghasilkan file SVG dan PNG tajam untuk ditempelkan pada desain poster cetak/digital
 * 
 * Penggunaan:
 * node scripts/generate-qr.js [URL_LANDING_PAGE]
 * Contoh:
 * node scripts/generate-qr.js https://inwesttamp.vercel.app
 */

import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetUrl = process.argv[2] || 'https://inwesttamp.vercel.app';
const outputDir = path.join(__dirname, '../public/qr');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateQRCodes() {
  console.log(`Generating High-Res QR Codes for: ${targetUrl}`);

  // 1. Generate High-Res PNG (1200x1200px for print)
  const pngPath = path.join(outputDir, 'poster-qr-code.png');
  await QRCode.toFile(pngPath, targetUrl, {
    width: 1200,
    margin: 2,
    color: {
      dark: '#304115', // Official Team Logo Primary Olive Green
      light: '#FFFFFF'
    },
    errorCorrectionLevel: 'H' // High error tolerance
  });
  console.log(`Saved Print-Ready PNG: ${pngPath}`);

  // 2. Generate Scalable Vector SVG
  const svgPath = path.join(outputDir, 'poster-qr-code.svg');
  const svgString = await QRCode.toString(targetUrl, {
    type: 'svg',
    margin: 2,
    color: {
      dark: '#304115',
      light: '#FFFFFF'
    },
    errorCorrectionLevel: 'H'
  });
  fs.writeFileSync(svgPath, svgString);
  console.log(`Saved Vector SVG: ${svgPath}`);

  console.log('QR Code generation completed successfully!');
}

generateQRCodes().catch(err => {
  console.error('Failed to generate QR codes:', err);
  process.exit(1);
});
