const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Rekursiv alle JPG, JPEG und PNG-Dateien finden
function findAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Rekursiv in Unterordner suchen
      findAllImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Relativer Pfad ab imagesDir
      const relativePath = path.relative(imagesDir, filePath);
      fileList.push({
        fullPath: filePath,
        relativePath: relativePath,
        fileName: file,
        dir: path.dirname(relativePath)
      });
    }
  });
  
  return fileList;
}

async function convertToWebP() {
  console.log('Suche nach PNG- und JPG-Bildern in allen Unterordnern...\n');
  
  const imageFiles = findAllImageFiles(imagesDir);
  
  console.log(`Gefundene Bilddateien zum Konvertieren: ${imageFiles.length}\n`);
  
  if (imageFiles.length === 0) {
    console.log('Keine Bilder zum Konvertieren gefunden.');
    return;
  }
  
  const converted = [];
  const errors = [];
  const skipped = [];
  
  // Konvertiere alle .jpg, .jpeg und .png zu .webp
  for (const fileInfo of imageFiles) {
    const inputPath = fileInfo.fullPath;
    const outputFileName = fileInfo.fileName.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputDir = fileInfo.dir === '.' ? imagesDir : path.join(imagesDir, fileInfo.dir);
    const outputPath = path.join(outputDir, outputFileName);
    
    // Überspringe falls .webp bereits existiert
    if (fs.existsSync(outputPath)) {
      console.log(`⚠ Übersprungen (bereits vorhanden): ${fileInfo.relativePath}`);
      skipped.push(fileInfo.relativePath);
      continue;
    }
    
    try {
      // Stelle sicher, dass das Ausgabeverzeichnis existiert
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✓ Konvertiert: ${fileInfo.relativePath} → ${fileInfo.dir === '.' ? outputFileName : path.join(fileInfo.dir, outputFileName)}`);
      converted.push({
        original: fileInfo.relativePath,
        converted: fileInfo.dir === '.' ? outputFileName : path.join(fileInfo.dir, outputFileName),
        originalPath: inputPath,
        convertedPath: outputPath
      });
    } catch (error) {
      console.error(`✗ Fehler bei ${fileInfo.relativePath}:`, error.message);
      errors.push(fileInfo.relativePath);
    }
  }
  
  // Lösche die ursprünglichen .jpg/.png Dateien nach erfolgreicher Konvertierung
  console.log('\nLösche ursprüngliche .jpg/.png Dateien...');
  let deletedCount = 0;
  for (const item of converted) {
    try {
      if (fs.existsSync(item.originalPath)) {
        fs.unlinkSync(item.originalPath);
        deletedCount++;
        console.log(`🗑️  Gelöscht: ${item.original}`);
      }
    } catch (error) {
      console.error(`✗ Fehler beim Löschen von ${item.original}:`, error.message);
    }
  }
  
  console.log('\n✅ Konvertierung abgeschlossen!');
  console.log(`   - Konvertiert: ${converted.length}`);
  console.log(`   - Übersprungen (bereits vorhanden): ${skipped.length}`);
  console.log(`   - Gelöscht: ${deletedCount}`);
  if (errors.length > 0) {
    console.log(`   - Fehler: ${errors.length}`);
    errors.forEach(err => console.log(`     - ${err}`));
  }
  
  return converted;
}

convertToWebP().catch(console.error);
