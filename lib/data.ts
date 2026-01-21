// Simulierte Daten - diese werden später aus dem Dashboard kommen
export const data = {
  highlight: '',
  openingHours: {
    monday: 'Montag: 09:30 - 18:00 Uhr',
    tuesday: 'Dienstag: 09:30 - 18:00 Uhr',
    wednesday: 'Mittwoch: Geschlossen',
    thursday: 'Donnerstag: 09:30 - 18:00 Uhr',
    friday: 'Freitag: 09:30 - 14:00 Uhr',
    saturday: 'Samstag: 10:00 - 14:00 Uhr',
    sunday: 'Sonntag: 12:00 - 15:00 Uhr',
  },
  prices: [
    { id: 1, name: 'PA-Komplettset Small', price: 150, category: 'Tontechnik' },
    { id: 2, name: 'DJ-Pult Pioneer', price: 120, category: 'Tontechnik' },
    { id: 3, name: 'Ambiente-Beleuchtung (10er Set)', price: 80, category: 'Lichttechnik' },
  ],
  whatsappNumber: '+4915735451130', // WhatsApp-Nummer im internationalen Format
  phoneNumber: '015735451130', // Telefonnummer für tel:-Links
  phoneNumberFormatted: '0157-35451130', // Formatierte Telefonnummer für Anzeige
  heroImages: [
    {
      id: 1,
      url: '/images/palive2-1920w.webp',
      alt: 'Professionelles Lautsprecher-Array',
      type: 'speaker' as const,
      position: 'A' as const,
    },
    {
      id: 2,
      url: '/images/chorkonzert-1920w.webp',
      alt: 'Lichtshow mit Moving Heads',
      type: 'lightshow' as const,
      position: 'B' as const,
    },
    {
      id: 3,
      url: '/images/IMG-20250720-WA0049-1920w.webp',
      alt: 'Live-Event mit Publikum',
      type: 'live-event' as const,
      position: 'C' as const,
    },
  ],
  socialProof: {
    eventsCount: 500,
    region: 'Südhessen',
  },
  // DASHBOARD-DATEN: Diese Daten kommen aus dem Dashboard und können dort verwaltet werden
  highlightProduct: {
    title: 'Speech 100 Konferenzsystem',
    image: '/images/speech100-1920w.webp', // Dashboard: Produktbild hier hochladen
    imageAlt: 'Speech 100 Konferenzsystem',
    description: 'Das Speech 100 System bietet fortschrittliche, digitale Netzwerktechnik um bis zu 50 Teilnehmern bei Konferenzen Gehör zu verschaffen.',
    features: [
      { icon: 'settings' as const, text: 'Digitales Konferenzsystem mit zentraler Steuereinheit' },
      { icon: 'users' as const, text: 'Bis zu 50 Sprechstellen mit einem Controller' },
      { icon: 'volume' as const, text: 'Professioneller Sound, gute Sprachverständlichkeit' },
      { icon: 'zap' as const, text: 'Präsidentensprechstelle mit Vorrangfunktion (Priority)' },
      { icon: 'headphones' as const, text: 'Dolmetscherfunktion mit Kopfhöreranschluss pro Sprechstelle' },
    ],
    price: '49€',
    pricePeriod: '/ Tag',
    ctaText: 'Zur Produktseite',
    productUrl: '/produkte/speech-100-konferenzsystem', // Dashboard: URL zur Produktseite
  },
};
