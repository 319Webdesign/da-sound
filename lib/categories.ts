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
    title: 'Party-Sets Ton & Licht',
    slug: 'party-sets-ton-licht',
    description: 'All-inclusive Event-Pakete mit Ton, Licht und Bühne',
    image: '/images/profx3-1920w.webp',
    longDescription: 'Unsere Party-Sets bieten Ihnen eine komplette Event-Lösung aus einer Hand. Perfekt abgestimmt auf Ihre Veranstaltungsgröße und Anforderungen.',
    features: [
      'PA-System mit passenden Lautsprechern',
      'Lichttechnik inkl. Moving Heads & LED Spots',
      'Bühnenpodeste und Traversen',
      'Professionelle Mischpulte',
      'Alle notwendigen Kabel und Adapter',
    ],
    typicalUseCases: ['Hochzeiten', 'Firmenfeiern', 'Stadtfeste', 'Konzerte'],
  },
  {
    icon: Speaker,
    iconName: 'Speaker',
    title: 'PA-Anlagen / Lautsprecher',
    slug: 'pa-anlagen',
    description: 'Druckvoller Sound für bis zu 500 Personen',
    image: '/images/audiozenit-1920w.webp',
    longDescription: 'Professionelle PA-Anlagen für Veranstaltungen jeder Größe. Von kompakten Systemen für kleine Räume bis hin zu leistungsstarken Line Arrays für große Events.',
    features: [
      'Leistung von 500W bis zu mehreren kW',
      'Aktive und passive Systeme verfügbar',
      'Subwoofer für kraftvollen Bass',
      'Monitoring-Systeme',
      'Zubehör inklusive',
    ],
    typicalUseCases: ['Konzerte', 'Firmenveranstaltungen', 'Hochzeiten', 'Außenveranstaltungen'],
  },
  {
    icon: Sliders,
    iconName: 'Sliders',
    title: 'Mischpulte & Mikrofone',
    slug: 'mischpulte-mikrofone',
    description: 'Professionelle Audio-Mischpulte und Mikrofone',
    image: '/images/chorkonzert-1920w.webp',
    longDescription: 'Von einfachen Analog-Mixern bis hin zu digitalen Workstations – wir haben das passende Mischpult für Ihre Anforderungen. Zusätzlich bieten wir hochwertige Mikrofone für alle Anwendungsfälle.',
    features: [
      'Analog und Digital verfügbar',
      '16 bis 64 Kanäle',
      'Funk- und Kabelmikrofone',
      'Headset- und Lapel-Mikrofone',
      'USB/Firewire Audio-Interface',
    ],
    typicalUseCases: ['Live-Auftritte', 'Studio-Aufnahmen', 'Konferenzen', 'Bands', 'Vorträge', 'Moderation'],
  },
  {
    icon: Lightbulb,
    iconName: 'Lightbulb',
    title: 'Statische Scheinwerfer / LED Spots',
    slug: 'statische-scheinwerfer-led-spots',
    description: 'Energieeffiziente LED-Beleuchtung für jeden Raum',
    image: '/images/kls120_1-1920w.webp',
    longDescription: 'Moderne LED-Spots und statische Scheinwerfer für effiziente und flexible Beleuchtung. Sparsam im Stromverbrauch, leistungsstark in der Lichtausbeute.',
    features: [
      'RGB und RGBW verfügbar',
      'DMX-Steuerung',
      'Geringer Stromverbrauch',
      'Keine Wärmeentwicklung',
      'Lange Lebensdauer',
    ],
    typicalUseCases: ['Bühnenshows', 'Event-Beleuchtung', 'Dekoration', 'Architekturbeleuchtung'],
  },
  {
    icon: Sparkles,
    iconName: 'Sparkles',
    title: 'Moving Heads / Lichteffekte',
    slug: 'moving-heads',
    description: 'Professionelles Show-Licht für deine Bühne',
    image: '/images/sk3-1920w.webp',
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
    image: '/images/ixstage5-1920w.jpg',
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
    image: '/images/hy3200si_1-1920w.jpg',
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
