const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Alle JPG und PNG-Dateien finden
const files = fs.readdirSync(imagesDir).filter(file => 
  file.toLowerCase().endsWith('.jpg') || 
  file.toLowerCase().endsWith('.jpeg') ||
  file.toLowerCase().endsWith('.png')
);

console.log(`Gefundene Bilddateien: ${files.length}`);

async function convertToWebP() {
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✓ Konvertiert: ${file} → ${path.basename(outputPath)}`);
    } catch (error) {
      console.error(`✗ Fehler bei ${file}:`, error.message);
    }
  }
  
  console.log('\nKonvertierung abgeschlossen!');
}

convertToWebP();
