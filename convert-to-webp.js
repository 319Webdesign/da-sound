const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const targetSubdirs = [
  'akku spot indoor rgb',
  'akku spot outdoor rgbw',
  'led outdoor fluter',
  'theatre spot led',
  'led follow spot',
  'led pll panel',
  'party lichtset kompakt',
  'led pro lichtbar RGB',
  'led effekt bar mit scannern',
  'high power led effekt bar mit laser',
  'led derby effekt',
  'led triple flower',
  'mirror ball',
  'led moving head spot',
  'led moving head beam',
  'led moving head wash',
  'JB spyder show laser',
  'laserworld 2000mW Diodenlaser',
  'led wassereffekt',
  'spiegelkugel set',
  'party nebelmaschine',
  'nebelmaschine 1,5kw',
  'vertical spray fogger',
  'hazer',
  'bodennebelmaschine',
  'cold spark kaltfunkenmaschine',
  'laser dlp beamer',
  'laser dlp beamer PRO',
  '4K laser dlp beamer',
  '4K signature display',
  'speech 100 konferenzsystem',
  'leinwand',
  'stativ für projektor laptop',
  'pro av mixer',
  'wireless HDMI set',
  'bühne ix stage',
  'pavillion',
  'Inverter Stromerzeuger 2 kW',
  'Inverter Stromerzeuger 3,2 kW',
  'Inverter Stromerzeuger 6 kW',
  'PA Set PREMIUM mini',
  'Theatre Spot RGB',
];

async function convertDirectory(dirRelativePath) {
  const dirPath = path.join(imagesDir, dirRelativePath);
  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠ Verzeichnis nicht gefunden: ${dirRelativePath}`);
    return [];
  }

  const converted = [];
  const errors = [];

  const files = fs.readdirSync(dirPath);
  for (const fileName of files) {
    if (!/\.(jpe?g|png)$/i.test(fileName)) {
      continue;
    }

    const inputPath = path.join(dirPath, fileName);
    const outputFileName = fileName.replace(/\.(jpe?g|png)$/i, '.webp');
    const outputPath = path.join(dirPath, outputFileName);

    if (fs.existsSync(outputPath)) {
      console.log(`⚠ Übersprungen (bereits vorhanden): ${path.join(dirRelativePath, fileName)}`);
      continue;
    }

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ Konvertiert: ${path.join(dirRelativePath, fileName)} → ${outputFileName}`);
      if (fs.existsSync(inputPath)) {
        fs.unlinkSync(inputPath);
        console.log(`🗑️  Original gelöscht: ${path.join(dirRelativePath, fileName)}`);
      }

      converted.push({
        original: path.join(dirRelativePath, fileName),
        converted: path.join(dirRelativePath, outputFileName),
      });
    } catch (error) {
      console.error(`✗ Fehler bei ${path.join(dirRelativePath, fileName)}:`, error.message);
      errors.push(path.join(dirRelativePath, fileName));
    }
  }

  return { converted, errors };
}

async function runConversion() {
  let totalConverted = 0;
  const totalErrors = [];

  console.log('Starte Conversion der angegebenen Unterordner...\n');
  for (const subdir of targetSubdirs) {
    const { converted, errors } = await convertDirectory(subdir);
    totalConverted += converted.length;
    totalErrors.push(...errors);
  }

  console.log('\n✅ Conversion abgeschlossen!');
  console.log(`   - Konvertierte Dateien: ${totalConverted}`);
  if (totalErrors.length > 0) {
    console.log(`   - Fehler: ${totalErrors.length}`);
    totalErrors.forEach(err => console.log(`     - ${err}`));
  }
}

runConversion().catch(console.error);
