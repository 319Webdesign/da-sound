// Simulierte Daten - diese werden später aus dem Dashboard kommen
export const data = {
  highlight: '',
  openingHours: {
    monday: 'Montag: 09:30 - 18:00 Uhr',
    tuesday: 'Dienstag: Geschlossen',
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
      url: '/images/images start/start1.webp',
      alt: 'Professionelle Veranstaltungstechnik',
      type: 'speaker' as const,
      position: 'A' as const,
    },
    {
      id: 2,
      url: '/images/images start/start3.webp',
      alt: 'Event-Equipment',
      type: 'lightshow' as const,
      position: 'B' as const,
    },
    {
      id: 3,
      url: '/images/images start/start2.webp',
      alt: 'Veranstaltungstechnik in Aktion',
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
    ctaText: 'Speech 100 Konferenzsystem entdecken',
    productUrl: '/produkte/speech-100-konferenzsystem', // Dashboard: URL zur Produktseite
  },
  // Ab 22.03.2026: PA Set PREMIUM mini als Highlight der Woche
  highlightProductApril: {
    title: 'PA Set PREMIUM mini',
    image: '/images/PA Set PREMIUM mini/premium_mini1.png',
    imageAlt: 'PA Set PREMIUM mini',
    description: 'Minimale Optik trifft maximalen Sound. Dieses Platzwunder beschallt problemlos 100–150 Personen und passt dabei auf die Rücksitzbank eines PKW.',
    features: [
      { icon: 'volume' as const, text: '100–150 Personen beschallen' },
      { icon: 'zap' as const, text: '4.600W Leistung – 132 dB Schalldruck' },
      { icon: 'settings' as const, text: 'German Engineering – Made in Germany' },
      { icon: 'cable' as const, text: 'Systemverkabelung & Distanzstangen inklusive' },
      { icon: 'package' as const, text: 'Passt auf die Rücksitzbank eines PKW' },
    ],
    price: '120€',
    pricePeriod: '/ Tag',
    ctaText: 'PA Set PREMIUM mini entdecken',
    productUrl: '/produkte/pa-set-premium-mini',
  },
};
