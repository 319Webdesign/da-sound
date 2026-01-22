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
    image: '/images/41700503g.webp',
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
    image: '/images/event_array.webp',
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
    image: '/images/briteq1.webp',
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
    description: 'Professionelles Show-Licht für Bühne & DJ',
    image: '/images/moving-head-spot.webp',
    longDescription: 'Effektlicht und Moving Heads sind essentiell für dynamische Lichtshows. Wir haben für Sie eine Auswahl von kopfbewegten Scheinwerfern und animierten Lichteffekten im Angebot.',
    features: [
      'Bewegtes Licht',
      'Präzise Projektion',
      'Brillante Farben',
      'Soundsteuerung und Automatikprogramme',
      'Frei programmierbar via DMX',
    ],
    typicalUseCases: ['Showlicht', 'Dance & DJ', 'Live-Acts', 'Musical / Theater'],
  },
  {
    icon: Cloud,
    iconName: 'Cloud',
    title: 'Nebelmaschinen & Bühneneffekte',
    slug: 'nebelmaschinen-buehneneffekte',
    description: 'Spezialeffekte für Bühne, Dancefloor und Theater',
    image: '/images/z1200_1-1920w.webp',
    longDescription: 'Hier finden Sie Bühneneffekte für den besonderen Kick. Nebel- und Dunstgeräte für verschiedene Anwendungen und Kaltfunkenmaschinen (Indoor – Feuerwerk).',
    features: [
      'Einfache Bedienung',
      'Gesundheitlich unbedenkliche Fluids',
      'Unterschiedliche Leistungsklassen',
      'Auf Wunsch mit Duftzusätzen',
    ],
    typicalUseCases: ['Bühnen-Shows', 'Theater', 'Dichtigkeitsprüfungen', 'Hochzeiten', 'Messe / Produktpräsentation', 'DJ / Dancefloor'],
  },
  {
    icon: Monitor,
    iconName: 'Monitor',
    title: 'Medien & Konferenztechnik',
    slug: 'medien-konferenztechnik',
    description: 'Alles für erfolgreiche Präsentationen.',
    image: '/images/acer1-1920w.webp',
    longDescription: 'Professionelle Tools für Firmenevents, Konferenzen und Präsentationen aller Art. So werden Sie gesehen, gehört und bringen ihre Message an die richtige Adresse.',
    features: [
      'Verschiedene Projektionsgrößen',
      'Zuverlässige LED / Laser Technologie',
      'Preisbewusste Qualität',
      'Für Präsenz- oder Hybrid-Veranstaltungen',
      'Inklusive Zubehör',
    ],
    typicalUseCases: ['Konferenzen', 'Business Präsentationen', 'Dia Shows', 'Public Viewing', 'Heimkino'],
  },
  {
    icon: Boxes,
    iconName: 'Boxes',
    title: 'Bühnenpodeste & Traversen',
    slug: 'buehlenpodeste-traversen',
    description: 'Mobile Podestsysteme und Traversen für Events aller Art.',
    image: '/images/ixstage5-1920w.webp',
    longDescription: 'Mit unseren smarten Podesten und flexiblen Traversensystem lassen sich kleinere Events problemlos über die Bühne bringen.',
    features: [
      'Variable Größen und Längen',
      'Modulare Lösungen',
      'TÜV/GS-geprüfte Sicherheit',
      'Rutschfeste Oberflächen',
      'Einfacher Transport',
    ],
    typicalUseCases: ['Aktionsbühnen', 'Produktpräsentation', 'Messen', 'Theater', 'Live-Bands'],
  },
  {
    icon: Zap,
    iconName: 'Zap',
    title: 'Stromerzeuger / Generatoren',
    slug: 'stromerzeuger',
    description: 'Mobile Stromversorgung für Outdoor-Events',
    image: '/images/hy3200si_1-1920w.webp',
    longDescription: 'Zuverlässige Stromerzeuger und Generatoren für Events ohne Stromanschluss. Vom kompakten 2kW bis hin zum leistungsstarken 6,5kW Generator.',
    features: [
      'Leistung von 2kW bis 6,5kW',
      'Spannungsstabile Inverter-Technik',
      'Geräuschgedämmt',
      'Zuverlässige Hyundai Motoren',
      'Geringer Kraftstoffverbrauch',
    ],
    typicalUseCases: ['Outdoor-Events', 'Grillplatz', 'Bauprojekte', 'Festivals', 'Pop-Up Events'],
  },
];

export function getCategoryBySlug(slug: string): CategoryCard | undefined {
  return categories.find(cat => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map(cat => cat.slug);
}
