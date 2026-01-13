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
  Settings, 
  Layers, 
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
    title: 'Komplett-Sets',
    slug: 'komplett-sets',
    description: 'All-inclusive Event-Pakete mit Ton, Licht und Bühne',
    image: '/images/profx3-1920w.webp',
    longDescription: 'Unsere Komplett-Sets bieten Ihnen eine komplette Event-Lösung aus einer Hand. Perfekt abgestimmt auf Ihre Veranstaltungsgröße und Anforderungen.',
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
    title: 'PA-Anlagen',
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
    title: 'Mischpulte',
    slug: 'mischpulte',
    description: 'Professionelle Audio-Mischpulte',
    image: '/images/chorkonzert-1920w.webp',
    longDescription: 'Von einfachen Analog-Mixern bis hin zu digitalen Workstations – wir haben das passende Mischpult für Ihre Anforderungen.',
    features: [
      'Analog und Digital verfügbar',
      '16 bis 64 Kanäle',
      'Integrierte Effekte',
      'USB/Firewire Audio-Interface',
      'Touchscreen bei Digital-Mixern',
    ],
    typicalUseCases: ['Live-Auftritte', 'Studio-Aufnahmen', 'Konferenzen', 'Bands'],
  },
  {
    icon: Lightbulb,
    iconName: 'Lightbulb',
    title: 'LED Spots',
    slug: 'led-spots',
    description: 'Energieeffiziente LED-Beleuchtung für jeden Raum',
    image: '/images/kls120_1-1920w.webp',
    longDescription: 'Moderne LED-Spots für effiziente und flexible Beleuchtung. Sparsam im Stromverbrauch, leistungsstark in der Lichtausbeute.',
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
    title: 'Moving Heads',
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
    icon: Mic,
    iconName: 'Mic',
    title: 'Mikrofone',
    slug: 'mikrofone',
    description: 'Funk- und Kabelmikrofone für klare Kommunikation',
    image: '/images/slxd4e86-1920w.webp',
    longDescription: 'Hochwertige Mikrofone für alle Anwendungsfälle. Von drahtlosen Handheld-Mikrofonen bis hin zu professionellen Headset-Mikrofonen.',
    features: [
      'Funkmikrofone (UHF)',
      'Kabelgebundene Mikrofone',
      'Headset-Mikrofone',
      'Lapel-Mikrofone',
      'Professionelle Audioqualität',
    ],
    typicalUseCases: ['Vorträge', 'Interviews', 'Gesang', 'Moderation'],
  },
  {
    icon: Cloud,
    iconName: 'Cloud',
    title: 'Nebelmaschinen',
    slug: 'nebelmaschinen',
    description: 'Atmosphärische Nebel- und Dunsteffekte',
    image: '/images/z1200_1-1920w.webp',
    longDescription: 'Professionelle Nebelmaschinen für atemberaubende Lichteffekte. Erzeugen Sie die perfekte Atmosphäre für Ihre Veranstaltung.',
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
    title: 'Beamer',
    slug: 'beamer',
    description: 'Hochauflösende Projektion für Präsentationen',
    image: '/images/acer1-1920w.webp',
    longDescription: 'Professionelle Projektoren für Präsentationen, Videowände und Live-Projektionen. Von Full HD bis 4K Auflösung.',
    features: [
      'Full HD und 4K verfügbar',
      'Helle Lichtstärke',
      'Verschiedene Anschlüsse (HDMI, VGA, etc.)',
      'Leinwände verfügbar',
      'Stativen und Halterungen',
    ],
    typicalUseCases: ['Präsentationen', 'Videowände', 'Hintergrundprojektion', 'Outdoor-Kino'],
  },
  {
    icon: Zap,
    iconName: 'Zap',
    title: 'Stromerzeuger',
    slug: 'stromerzeuger',
    description: 'Mobile Stromversorgung für Outdoor-Events',
    image: '/images/hy3200si_1-1920w.jpg',
    longDescription: 'Zuverlässige Stromerzeuger für Events ohne Stromanschluss. Von kompakten 2kW bis hin zu leistungsstarken 6,5kW Generatoren.',
    features: [
      'Leistung von 2kW bis 6,5kW',
      'Diesel und Benzin',
      'Leise Ausführung verfügbar',
      'Stromverteiler inklusive',
      'Kraftstoffverbrauch optimiert',
    ],
    typicalUseCases: ['Outdoor-Events', 'Bauprojekte', 'Festivals', 'Events ohne Strom'],
  },
  {
    icon: Settings,
    iconName: 'Settings',
    title: 'Lichtsteuerung',
    slug: 'lichtsteuerung',
    description: 'DMX-Controller und Steuerungssysteme',
    image: '/images/quickq10_1-1920w.webp',
    longDescription: 'Professionelle DMX-Steuerung für Ihre Lichtshow. Von einfachen Fader-Boards bis hin zu vollausgestatteten Workstations.',
    features: [
      'DMX-Controller',
      'PC-Software verfügbar',
      'Verschiedene Kanäle (512+ DMX)',
      'Pre-Programmed Shows',
      'MIDI-Kompatibilität',
    ],
    typicalUseCases: ['Lichtshows', 'Konzerte', 'Theater', 'Event-Beleuchtung'],
  },
  {
    icon: Layers,
    iconName: 'Layers',
    title: 'Traversen',
    slug: 'traversen',
    description: 'Stabile Traversensysteme für sichere Installation',
    image: '/images/stative.jpg',
    longDescription: 'Sichere und stabile Traversensysteme für den Aufbau von Licht- und Tontechnik. Verschiedene Größen und Konfigurationen verfügbar.',
    features: [
      'Verschiedene Größen',
      'TÜV-geprüfte Sicherheit',
      'Schnellaufbau-Systeme',
      'Zubehör inklusive',
      'Professionelle Montage möglich',
    ],
    typicalUseCases: ['Bühnenaufbauten', 'Lichtinstallation', 'Tonaufbau', 'Event-Infrastruktur'],
  },
  {
    icon: Boxes,
    iconName: 'Boxes',
    title: 'Bühnenpodeste',
    slug: 'buehlenpodeste',
    description: 'Modulare Podestsysteme in verschiedenen Höhen',
    image: '/images/ixstage5-1920w.jpg',
    longDescription: 'Flexible Bühnenpodeste für jede Veranstaltungsgröße. Modulare Systeme, die sich an Ihre Räumlichkeiten anpassen.',
    features: [
      'Verschiedene Höhen',
      'Modulare Konstruktion',
      'Rutschfeste Oberflächen',
      'Einfacher Auf- und Abbau',
      'Trapez- und Rechteckmodule',
    ],
    typicalUseCases: ['Bühnenaufbauten', 'Präsentationen', 'Konzerte', 'Event-Plattformen'],
  },
];

export function getCategoryBySlug(slug: string): CategoryCard | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map(cat => cat.slug);
}
