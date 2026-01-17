const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Alle verwendeten Bilddateien aus dem Code finden
function findUsedImages() {
  const codeFiles = [];
  
  // Rekursiv alle .ts, .tsx, .js, .jsx Dateien finden
  function findFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Überspringe node_modules, .next, etc.
        if (!['node_modules', '.next', '.git'].includes(file)) {
          findFiles(filePath, fileList);
        }
      } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
        if (!file.includes('convert-to-webp.js')) {
          fileList.push(filePath);
        }
      }
    });
    
    return fileList;
  }
  
  const allCodeFiles = findFiles(__dirname);
  
  const usedImages = new Set();
  
  for (const file of allCodeFiles) {
    try {
      const content = fs.readFileSync(file, 'utf-8');
      // Finde alle Pfade die mit /images/ beginnen
      const matches = content.match(/['"`]\/images\/[^'"`]+/g);
      if (matches) {
        matches.forEach(match => {
          // Entferne Anführungszeichen
          const imagePath = match.replace(/['"`]/g, '');
          // Nur der Dateiname
          const fileName = path.basename(imagePath);
          usedImages.add(fileName);
          // Auch ohne Extension prüfen (für zukünftige .webp Referenzen)
          const nameWithoutExt = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');
          usedImages.add(nameWithoutExt);
        });
      }
    } catch (error) {
      console.error(`Fehler beim Lesen von ${file}:`, error.message);
    }
  }
  
  return usedImages;
}

// Alle JPG und PNG-Dateien finden
const files = fs.readdirSync(imagesDir).filter(file => 
  file.toLowerCase().endsWith('.jpg') || 
  file.toLowerCase().endsWith('.jpeg') ||
  file.toLowerCase().endsWith('.png')
);

console.log(`Gefundene Bilddateien zum Konvertieren: ${files.length}`);

async function convertToWebP() {
  // Finde verwendete Bilder
  console.log('\nPrüfe verwendete Bilder im Code...');
  const usedImages = findUsedImages();
  
  const converted = [];
  const errors = [];
  
  // Konvertiere alle .jpg und .png zu .webp
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(imagesDir, outputFileName);
    
    // Überspringe falls .webp bereits existiert
    if (fs.existsSync(outputPath)) {
      console.log(`⚠ Übersprungen (bereits vorhanden): ${file}`);
      converted.push({ original: file, converted: outputFileName });
      continue;
    }
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✓ Konvertiert: ${file} → ${outputFileName}`);
      converted.push({ original: file, converted: outputFileName });
    } catch (error) {
      console.error(`✗ Fehler bei ${file}:`, error.message);
      errors.push(file);
    }
  }
  
  // Prüfe und lösche unbenutzte .webp Dateien (die nicht im Code referenziert sind)
  console.log('\nPrüfe unbenutzte .webp Dateien...');
  const allWebpFiles = fs.readdirSync(imagesDir).filter(file => 
    file.toLowerCase().endsWith('.webp')
  );
  
  const unusedWebpFiles = [];
  for (const webpFile of allWebpFiles) {
    // Prüfe ob das Bild verwendet wird (mit oder ohne Extension)
    const nameWithoutExt = webpFile.replace(/\.webp$/i, '');
    const isUsed = usedImages.has(webpFile) || 
                   usedImages.has(nameWithoutExt) ||
                   converted.some(c => c.converted === webpFile || c.original.replace(/\.(jpg|jpeg|png)$/i, '') === nameWithoutExt);
    
    if (!isUsed && webpFile !== 'logo.webp') { // logo.webp behalten
      unusedWebpFiles.push(webpFile);
    }
  }
  
  if (unusedWebpFiles.length > 0) {
    console.log(`\nGefundene unbenutzte .webp Dateien: ${unusedWebpFiles.length}`);
    for (const unusedFile of unusedWebpFiles) {
      const filePath = path.join(imagesDir, unusedFile);
      try {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Gelöscht: ${unusedFile}`);
      } catch (error) {
        console.error(`✗ Fehler beim Löschen von ${unusedFile}:`, error.message);
      }
    }
  }
  
  // Lösche die ursprünglichen .jpg/.png Dateien nach erfolgreicher Konvertierung
  console.log('\nLösche ursprüngliche .jpg/.png Dateien...');
  for (const item of converted) {
    const originalPath = path.join(imagesDir, item.original);
    try {
      if (fs.existsSync(originalPath)) {
        fs.unlinkSync(originalPath);
        console.log(`🗑️  Gelöscht: ${item.original}`);
      }
    } catch (error) {
      console.error(`✗ Fehler beim Löschen von ${item.original}:`, error.message);
    }
  }
  
  console.log('\n✅ Konvertierung abgeschlossen!');
  console.log(`   - Konvertiert: ${converted.length}`);
  console.log(`   - Unbenutzte .webp gelöscht: ${unusedWebpFiles.length}`);
  if (errors.length > 0) {
    console.log(`   - Fehler: ${errors.length}`);
  }
  
  return converted;
}

convertToWebP().catch(console.error);
