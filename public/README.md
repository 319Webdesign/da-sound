# Public Assets

Dieser Ordner enthält statische Assets für die da-sound Website.

## Struktur

- `/images` - Bilder (Hero-Bilder, Icons, Logos, etc.)
- `/videos` - Videos (Trailer, Referenzen, etc.)

## Verwendung

Assets in diesem Ordner können direkt über die URL referenziert werden:

- `/images/hero-1.jpg` → `http://localhost:3000/images/hero-1.jpg`
- `/videos/trailer.mp4` → `http://localhost:3000/videos/trailer.mp4`

### In Next.js Image Komponente:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-1.jpg"
  alt="Beschreibung"
  width={800}
  height={600}
/>
```

### In normalen HTML-Tags:

```tsx
<img src="/images/logo.png" alt="Logo" />
<video src="/videos/trailer.mp4" controls />
```

## Empfohlene Bildgrößen für Hero-Bereich

- **Großes Bild**: 1200x800px oder höher
- **Kleine Bilder**: 600x400px oder höher
- **Format**: JPG oder WebP für optimale Performance
