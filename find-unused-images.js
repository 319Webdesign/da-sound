const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const allFiles = fs.readdirSync(imagesDir).filter(f => f.endsWith('.webp') && f !== 'logo.webp');
const usedImages = new Set();

function findInDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      if (!['node_modules', '.next', '.git', 'public'].includes(file.name)) {
        findInDir(fullPath);
      }
    } else if (/\.(ts|tsx|js|jsx)$/.test(file.name)) {
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const matches = content.match(/['"`]\/images\/[^'"`]+/g);
        if (matches) {
          matches.forEach(m => {
            const imgPath = m.replace(/['"`]/g, '');
            const fileName = path.basename(imgPath);
            usedImages.add(fileName);
            // Auch ohne Extension prüfen
            const nameWithoutExt = fileName.replace(/\.webp$/i, '');
            usedImages.add(nameWithoutExt);
          });
        }
      } catch (e) {
        // Ignore errors
      }
    }
  }
}

findInDir(__dirname);

const unused = allFiles.filter(f => {
  const nameWithoutExt = f.replace(/\.webp$/i, '');
  return !usedImages.has(f) && !usedImages.has(nameWithoutExt);
});

console.log('Nicht verwendete Bilder:');
if (unused.length > 0) {
  unused.forEach(f => console.log('  -', f));
  console.log('\nLösche nicht verwendete Bilder...');
  unused.forEach(f => {
    try {
      fs.unlinkSync(path.join(imagesDir, f));
      console.log('✓ Gelöscht:', f);
    } catch (e) {
      console.log('✗ Fehler:', f, e.message);
    }
  });
  console.log(`\n✅ ${unused.length} nicht verwendete Bilder gelöscht.`);
} else {
  console.log('  (keine)');
  console.log('\n✅ Alle Bilder werden verwendet.');
}
