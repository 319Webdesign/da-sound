const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'lib', 'products.ts');

if (!fs.existsSync(targetFile)) {
  throw new Error(`File not found: ${targetFile}`);
}

let content = fs.readFileSync(targetFile, 'utf8');

content = content.replace(/(galleryImages:\s*\[[^\]]*?\])/gs, (match) =>
  match.replace(/\.(jpg|jpeg|png)'/gi, ".webp'")
);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('galleryImages extensions updated to .webp');
