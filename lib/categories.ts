import React from 'react';
import { 
  Package, 
  Speaker, 
  Sliders, 
  Lightbulb, 
  Sparkles, 
  Mic, 
  Cloud, 
  Monitor, 
  Zap, 
  Boxes,
} from 'lucide-react';

export interface CategoryCard {
  icon: React.ComponentType<{ className?: string }>;
  iconName: string; // Für Client Components
  title: string;
  description: string;
  image: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  typicalUseCases?: string[];
}

export const categories: CategoryCard[] = [
  {
    icon: Package,
    iconName: 'Package',
    title: 'Party-Sets Ton&Licht',
    slug: 'party-sets-ton-licht',
    description: 'All-inclusive Pakete für ein gelungenes Event',
    image: '/images/41700503g.jpg',
    longDescription: 'Unsere Party-Sets bieten Ihnen eine komplette Eventlösung mit ausgewähltem Ton & Licht Equipment. Perfekt abgestimmt auf Ihre Veranstaltungsgröße und Anforderungen.',
    features: [
      'Musikanlagen mit eingebautem Verstärker',
      'Bluetooth Audio',
      'Lichtsets mit Soundsteuerung',
      'Professionelle Komponenten',
      'Alle notwendigen Kabel',
      'Einfacher Aufbau',
    ],
    typicalUseCases: ['Hochzeiten', 'Geburtstagsfeiern', 'Vereinsfeste', 'Firmenpartys'],
  },
  {
    icon: Speaker,
    iconName: 'Speaker',
    title: 'PA-Anlagen / Lautsprecher',
    slug: 'pa-anlagen',
    description: 'Druckvoller Sound für bis zu 1.500 Personen',
    image: '/images/event_array.png',
    longDescription: 'Professionelle PA-Anlagen und Lautsprecher für Veranstaltungen jeder Größe. Von kompakten 2.1 Systemen für kleine Räume bis hin zu leistungsstarken Line Arrays für große Events.',
    features: [
      'Hochwertige Komponenten – Made in Europe -',
      'Aktive und passive Systeme verfügbar',
      'Zusätzliche Subwoofer für kraftvollen Bass',
      'Multipurpose Systeme für Front-PA und Monitoring',
      'Zubehör inklusive',
    ],
    typicalUseCases: ['Sprachbeschallung', 'Live-Musik', 'Open Air Veranstaltungen', 'DJ & Playback Musikwiedergabe', 'Konferenzen'],
  },
  {
    icon: Sliders,
    iconName: 'Sliders',
    title: 'Mischpulte & Mikrofone',
    slug: 'mischpulte-mikrofone',
    description: 'Professionelle Audio Tools für einen guten Sound',
    image: '/images/dm3_2-1920w.webp',
    longDescription: 'Von einfachen Analog-Mischpulten bis hin zu digitalen Konsolen – wir haben das professionelle Werkzeug für Ihre Anforderungen. Passend dazu vermieten wir hochwertige Mikrofone für alle Anwendungsbereiche.',
    features: [
      'Analoge und Digitale Pulte',
      '8 – 48 Kanäle',
      'Roadtaugliche Qualität',
      'Drahtlose Mikrofone für Sprache & Gesang',
      'Standardmikrofone für die Bühne',
    ],
    typicalUseCases: ['Live-Konzerte', 'Konferenz (Präsenz und Streaming)', 'Recording', 'Moderation, Vorträge', 'Bands & Ensembles'],
  },
  {
    icon: Lightbulb,
    iconName: 'Lightbulb',
    title: 'Statische Scheinwerfer / LED Spots',
    slug: 'statische-scheinwerfer-led-spots',
    description: 'Energieeffiziente, kompakte Beleuchtungslösungen für Bühne & Tanzfläche',
    image: '/images/briteq1.jpg',
    longDescription: 'Moderne LED-Spots und statische Scheinwerfer für effiziente und flexible Beleuchtung. Sparsam im Stromverbrauch, leistungsstark in der Lichtausbeute.',
    features: [
      'Farbiges und weißes Licht',
      'Geringer Energieverbrauch',
      'Geräuscharmer Betrieb',
      'DMX-Steuerung oder Stand-Alone Betrieb',
      'Minimale Wärmentwicklung',
    ],
    typicalUseCases: ['Bühnenbeleuchtung', 'Dekoration', 'Ambientelicht', 'Licht-Shows', 'Für Bands, Theater, DJs'],
  },
  {
    icon: Sparkles,
    iconName: 'Sparkles',
    title: 'Moving Heads / Lichteffekte',
    slug: 'moving-heads',
    description: 'Professionelles Show-Licht für deine Bühne',
    image: '/images/moving-head-spot.webp',
    longDescription: 'Professionelle Moving Heads für dynamische Lichtshows. Bewegliche Köpfe mit präziser Steuerung für atemberaubende Effekte.',
    features: [
      'Pan/Tilt Bewegungen',
      'Zoom und Iris',
      'Gobo-Projektion',
      'Farbwechsler',
      'Stroboskop-Effekte',
    ],
    typicalUseCases: ['Konzerte', 'DJ-Events', 'Theater', 'Show-Beleuchtung'],
  },
  {
    icon: Cloud,
    iconName: 'Cloud',
    title: 'Nebelmaschinen & Bühneneffekte',
    slug: 'nebelmaschinen-buehneneffekte',
    description: 'Atmosphärische Nebel- und Dunsteffekte',
    image: '/images/z1200_1-1920w.webp',
    longDescription: 'Professionelle Nebelmaschinen und Bühneneffekte für atemberaubende Lichteffekte. Erzeugen Sie die perfekte Atmosphäre für Ihre Veranstaltung.',
    features: [
      'Nebel- und Dunstmaschinen',
      'Verschiedene Leistungsklassen',
      'DMX-Steuerung',
      'Schnelle Aufwärmzeit',
      'Umweltfreundliche Nebelfluids',
    ],
    typicalUseCases: ['Lichtshows', 'Konzerte', 'Theater', 'Event-Dekoration'],
  },
  {
    icon: Monitor,
    iconName: 'Monitor',
    title: 'Medien & Konferenztechnik',
    slug: 'medien-konferenztechnik',
    description: 'Hochauflösende Projektion für Präsentationen',
    image: '/images/acer1-1920w.webp',
    longDescription: 'Professionelle Projektoren und Konferenztechnik für Präsentationen, Videowände und Live-Projektionen. Von Full HD bis 4K Auflösung.',
    features: [
      'Full HD und 4K verfügbar',
      'Helle Lichtstärke',
      'Verschiedene Anschlüsse (HDMI, VGA, etc.)',
      'Leinwände verfügbar',
      'Stativen und Halterungen',
    ],
    typicalUseCases: ['Präsentationen', 'Videowände', 'Hintergrundprojektion', 'Outdoor-Kino', 'Konferenzen'],
  },
  {
    icon: Boxes,
    iconName: 'Boxes',
    title: 'Bühnenpodeste & Traversen',
    slug: 'buehlenpodeste-traversen',
    description: 'Modulare Podestsysteme und Traversen in verschiedenen Größen',
    image: '/images/ixstage5-1920w.webp',
    longDescription: 'Flexible Bühnenpodeste und stabile Traversensysteme für jede Veranstaltungsgröße. Modulare Systeme, die sich an Ihre Räumlichkeiten anpassen.',
    features: [
      'Verschiedene Höhen und Größen',
      'Modulare Konstruktion',
      'TÜV-geprüfte Sicherheit',
      'Rutschfeste Oberflächen',
      'Einfacher Auf- und Abbau',
    ],
    typicalUseCases: ['Bühnenaufbauten', 'Präsentationen', 'Konzerte', 'Event-Plattformen', 'Lichtinstallation'],
  },
  {
    icon: Zap,
    iconName: 'Zap',
    title: 'Stromerzeuger / Generatoren',
    slug: 'stromerzeuger',
    description: 'Mobile Stromversorgung für Outdoor-Events',
    image: '/images/hy3200si_1-1920w.webp',
    longDescription: 'Zuverlässige Stromerzeuger und Generatoren für Events ohne Stromanschluss. Von kompakten 2kW bis hin zu leistungsstarken 6,5kW Generatoren.',
    features: [
      'Leistung von 2kW bis 6,5kW',
      'Diesel und Benzin',
      'Leise Ausführung verfügbar',
      'Stromverteiler inklusive',
      'Kraftstoffverbrauch optimiert',
    ],
    typicalUseCases: ['Outdoor-Events', 'Bauprojekte', 'Festivals', 'Events ohne Strom'],
  },
];

export function getCategoryBySlug(slug: string): CategoryCard | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map(cat => cat.slug);
}
