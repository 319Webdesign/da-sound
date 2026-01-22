export interface Product {
  id: string;
  name: string;
  description: string; // Kurze Beschreibung für Produktkarten
  detailDescription?: string; // Lange, detaillierte Beschreibung für Detailseite
  images: string[];
  pricePerUnit: number;
  pricePerPair?: number;
  categorySlug: string;
  features?: string[];
  specs?: { label: string; value: string }[];
  offerInfo?: string;
  priceOptions?: { label: string; price: number }[];
  isUpgradeKit?: boolean; // Markiert Zusatzartikel/Upgrade-Kits
}

export const products: Product[] = [
  // Party-Sets Ton & Licht
  {
    id: 'party-set-small',
    name: 'Party-Set SMALL',
    description: `Bestehend aus:
1 x 2.1 Lautsprechersystem mit 12-Zoll Subwoofer
2 x Lautsprecherstativ
1 x LED Kompakt Licht-Set mit Stativ
1 x Party-Nebelmaschine + Fernbedienung`,
    detailDescription: `Mit Freunden feiern? - Mit dem Party Set SMALL geht's ab.
Für die spontane Party oder die Geburtstagsfeier - mit unserem kleinsten Set können bis zu 50 Gäste bestens unterhalten werden. Deine Playlist oder Spotify vom Smartphone kann kabellos über Bluetooth gespielt werden. Und das Beste: alles passt ganz easy in den Kofferraum eines Kleinwagens.

Set bestehend aus:
1 x 2.1 Lautsprechersystem mit 12-Zoll Subwoofer
2 x Lautsprecherstativ
1 x LED Kompakt Licht-Set mit Stativ
1 x Party-Nebelmaschine + Fernbedienung`,
    images: ['/images/partysetsmall.webp'],
    pricePerUnit: 80,
    pricePerPair: 120,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '1-50' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '700 W RMS (500W Sub + 100W Satelliten)' },
      { label: 'Schalldruck', value: '128 dB' },
      { label: 'Bluetooth', value: 'ja' },
      { label: 'Gewicht', value: '45 kg' },
      { label: 'Transport', value: 'PKW' },
    ],
  },
  {
    id: 'party-set-medium',
    name: 'Party-Set MEDIUM',
    description: `Bestehend aus:
1 x Profi 2.1 Lautsprechersystem mit 15-Zoll Subwoofer
2 x Lautsprecherstativ
1 x Audiomischpult mit Bluetooth
1 x Mikrofon mit Schaltern (kabelgebunden)
1 x LED Licht-Set mit Scannern & Stativ
1 x Party-Nebelmaschine + Fernbedienung`,
    detailDescription: `Top-Sound und effektvolles Licht für deine nächste Feier.
Wenn es mal so richtig schön werden soll: Das Party-Set MEDIUM ist die perfekte Wahl für Feierlichtkeiten aller Art bis ca. 100 Personen. Dabei ist alles einfach zu transportieren und auch für Laien problemlos anzuschließen.

Set bestehend aus:
1 x Profi 2.1 Lautsprechersystem mit 15-Zoll Subwoofer
2 x Lautsprecherstativ
1 x Audiomischpult mit Bluetooth
1 x Mikrofon mit Schaltern (kabelgebunden)
1 x LED Licht-Set mit Scannern & Stativ
1 x Party-Nebelmaschine + Fernbedienung`,
    images: ['/images/partysetmedium.webp'],
    pricePerUnit: 140,
    pricePerPair: 200,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '1-100' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '2.000 W (1.200W Sub + 400W Tops)' },
      { label: 'Schalldruck', value: '131 dB' },
      { label: 'Bluetooth', value: 'ja' },
      { label: 'Gewicht', value: '80 kg' },
      { label: 'Transport', value: 'PKW' },
    ],
  },
  {
    id: 'party-set-white',
    name: 'Party-Set WHITE',
    description: `Bestehend aus:
2 x PA Säule in weiß
1 x Audiomischpult mit Bluetooth
1 x Drahtloses Mikrofon
1 x LED Licht-Set mit Laser & Stativ in weiß
8 x Akku LED Uplights Ambientebeleuchtung in weiß`,
    detailDescription: `Party-Set "White Wedding"
Für eine unvergessliche Hochzeitsfeier "ganz in weiß"
Neben hochwertigem Sound und tollen Lichteffekte, stimmt bei diesem Paket auch die Optik. Alle Kompomenten (bis auf das Mikrofon), sind in weiß gehalten. Noch dazu sind die Komponenten einfach zu transportieren und auch für Laien kinderleicht aufzubauen und zu bedienen.

Set bestehend aus:
2 x PA Säule in weiß
1 x Audiomischpult mit Bluetooth
1 x Drahtloses Mikrofon
1 x LED Licht-Set mit Laser & Stativ in weiß
8 x Akku LED Uplights Ambientebeleuchtung in weiß`,
    images: ['/images/partysetwhite.webp'],
    pricePerUnit: 150,
    pricePerPair: 220,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '1-120' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '2.000 W' },
      { label: 'Schalldruck', value: '127 dB' },
      { label: 'Bluetooth', value: 'ja' },
      { label: 'Gewicht', value: '95 kg' },
      { label: 'Transport', value: 'PKW' },
    ],
  },
  {
    id: 'party-set-large',
    name: 'Party-Set LARGE',
    description: `Bestehend aus:
2 x 15-Zoll Subwoofer
2 x 12-Zoll Topteile
2 x Distanzstange
1 x Audiomischpult mit Bluetooth
1 x Drahtloses Mikrofon
1 x LED Pro Licht-Set mit Laser & Stativ
1 x Profi Nebelmaschine + Fernbedienung`,
    detailDescription: `Beste Unterhaltung mit tollem Sound und effektvoller Lichtanlage.
Dieses umfangreiche Set bietet hochwertige Komponenten für optimalen Sound & Light. Sie unterhalten hiermit mühelos bis zu 150 Gäste und dennoch ist alles in einem PKW Kombi zu transportieren und notfalls auch alleine problemlos aufzubauen.

Set bestehend aus:
2 x 15-Zoll Subwoofer
2 x 12-Zoll Topteile
2 x Distanzstange
1 x Audiomischpult mit Bluetooth
1 x Drahtloses Mikrofon
1 x LED Pro Licht-Set mit Laser & Stativ
1 x Profi Nebelmaschine + Fernbedienung`,
    images: ['/images/partysetlarge.webp'],
    pricePerUnit: 180,
    pricePerPair: 250,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '1-150' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '3.900 W (2.400W Subs + 1.500W Tops)' },
      { label: 'Schalldruck', value: '134 dB' },
      { label: 'Bluetooth', value: 'ja' },
      { label: 'Gewicht', value: '130 kg' },
      { label: 'Transport', value: 'PKW Kombi / Van' },
    ],
  },
  {
    id: 'party-set-xlarge',
    name: 'Party-Set X-LARGE',
    description: `Bestehend aus:
2 x 18-Zoll Profi Subwoofer
2 x 12-Zoll Profi Topteile
2 x Distanzstange
1 x Audiomischpult mit Bluetooth
1 x Drahtloses Mikrofon
2 x LED Pro Licht-Set mit Laser & Stativ
1 x Hazer / Dunstnebelmaschine + Funk-Fernbedienung`,
    detailDescription: `Das ultimative Set für die Mega-Party.
Mit diesem Set sind Sie ganz weit vorne. Beste Soundqualität dank hochwertiger Lautsprecher, druckvolle Wiedergabe, die zum Tanzen animiert, sowie eine einzigartige Lightshow mit Lasereffekten. Glauben Sie nicht? - ist aber so!

Set bestehend aus:
2 x 18-Zoll Profi Subwoofer
2 x 12-Zoll Profi Topteile
2 x Distanzstange
1 x Audiomischpult mit Bluetooth
1 x Drahtloses Mikrofon
2 x LED Pro Licht-Set mit Laser & Stativ
1 x Hazer / Dunstnebelmaschine + Funk-Fernbedienung`,
    images: ['/images/partyset_xlarge.jpg'],
    pricePerUnit: 249,
    pricePerPair: 350,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '1-250' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '6.000 W (4.000W Subs + 2.000W Tops)' },
      { label: 'Schalldruck', value: '136 dB' },
      { label: 'Bluetooth', value: 'ja' },
      { label: 'Gewicht', value: '160 kg' },
      { label: 'Transport', value: 'Transporter' },
    ],
  },

  // PA-Anlagen / Lautsprecher
  {
    id: 'akku-lautsprecher-compact',
    name: 'Akku Lautsprecher Compact',
    description: 'Hochwertiger Akkulautsprecher mit Bluetooth von Electro Voice mit einer Batterielaufzeit von bis zu 12 Stunden. Optimal zur Übertragung von Playback- und Live-Musik wenn kein Stromanschluss vorhanden ist. Mit nur 7kg Gewicht ein echtes Leichtgewicht mit MEGA Sound.',
    detailDescription: `Hochwertiger Akkulautsprecher mit Bluetooth von Electro Voice mit einer Batterielaufzeit von bis zu 12 Stunden. Optimal zur Übertragung von Playback- und Live-Musik wenn kein Stromanschluss vorhanden ist. Mit nur 7kg Gewicht ein echtes Leichtgewicht mit MEGA Sound.`,
    images: ['/images/akkuLautsprecherCompact.webp'],
    pricePerUnit: 30,
    pricePerPair: 50,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-50' },
      { label: 'Indoor', value: 'Indoor & Outdoor (IP44)' },
      { label: 'Akkulaufzeit', value: '6-12h' },
      { label: 'Schalldruck', value: '121 dB' },
      { label: 'Bluetooth', value: 'Ja, Audio Streaming & Link' },
      { label: 'Gewicht', value: '7,6 kg' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'akku-lautsprecher-maxi',
    name: 'Akku Lautsprecher Maxi',
    description: 'Der wohl berühmt und berüchtigste unter den Akku Lautsprechern jetzt bei uns im Verleih: Teufel Rockster XL. Unglaubliche Leistung bei gleichzeitig langer Akkulaufzeit von bis zu 12 Stunden. Neueste Bluetooth Technologie plus zahlreiche Eingänge mit EQ machen diese stattliche Box zum Allroundtalent.',
    detailDescription: `Der wohl berühmt und berüchtigste unter den Akku Lautsprechern jetzt bei uns im Verleih: Teufel Rockster XL. Unglaubliche Leistung bei gleichzeitig langer Akkulaufzeit von bis zu 12 Stunden. Neueste Bluetooth Technologie plus zahlreiche Eingänge mit EQ machen diese stattliche Box zum Allroundtalent.`,
    images: ['/images/akkuLautsprecherMaxi.webp'],
    pricePerUnit: 40,
    pricePerPair: 70,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-120' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Akkulaufzeit', value: '4-12h' },
      { label: 'Schalldruck', value: '131 dB' },
      { label: 'Bluetooth', value: 'Ja, 2 x Audio Streaming' },
      { label: 'Gewicht', value: '30 kg' },
      { label: 'Transport', value: 'Kombi / Van' },
    ],
  },
  {
    id: 'aktivlautsprecher-bluetooth',
    name: 'Aktivlautsprecher Bluetooth',
    description: 'Der aktive Lautsprecher von DAS Audio (Made in Spain) überzeugt durch hohe Leistungsreserven und professionellen Klang. Das robuste Kunststoffgehäuse sorgt für ein transportfreundliches Gewicht. Auch als Monitorbox einsetzbar. Lautsprecherstativ inkl.',
    detailDescription: `Der aktive Lautsprecher von DAS Audio (Made in Spain) überzeugt durch hohe Leistungsreserven und professionellen Klang. Das robuste Kunststoffgehäuse sorgt für ein transportfreundliches Gewicht. Auch als Monitorbox einsetzbar. Lautsprecherstativ inkl.`,
    images: ['/images/akkulautsprecherbt.webp'],
    pricePerUnit: 35,
    pricePerPair: 60,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-70 (Stck), 1-100 (Paar)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '1.500W' },
      { label: 'Schalldruck', value: '130 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Ja, Audio Streaming & Link' },
      { label: 'Gewicht', value: '17,5kg' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'sub-sat-set-bluetooth',
    name: 'Sub-Sat Set Bluetooth',
    description: 'Dieses kompakte aber kraftvolle 2.1 System besteht aus einem 12-Zoll Aktiv-Subwoofer mit 700W RMS Leistung (500W Sub + 2x 100W Satelliten). Es stehen verschiedene EQ Presets zur Verfügung, die Verbindung zu eurem Smartphone oder Tablet erfolgt via Bluetooth. Inkl. Stative.',
    detailDescription: `Dieses kompakte aber kraftvolle 2.1 System besteht aus einem 12-Zoll Aktiv-Subwoofer mit 700W RMS Leistung (500W Sub + 2x 100W Satelliten). Es stehen verschiedene EQ Presets zur Verfügung, die Verbindung zu eurem Smartphone oder Tablet erfolgt via Bluetooth. Inkl. Stative.`,
    images: ['/images/Sub-SatSet Bluetooth.webp'],
    pricePerUnit: 49,
    pricePerPair: 70,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-80' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '700W' },
      { label: 'Schalldruck', value: '121,5 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Ja, Audio Streaming' },
      { label: 'Gewicht', value: '31 kg' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'pa-saeule-bluetooth',
    name: 'PA Säule Bluetooth',
    description: 'Das Altea-DUO-20 ist ein kompaktes und mit 2000W Power gleichzeitig sehr leistungsstarkes Beschallungssystem mit dezenter Optik. Es lässt sich extrem einfach und schnell ohne weiteres Zubehör wie Stative oder Lautsprecherkabel montieren. Stecker in die Steckdose, fertig! Erhältlich in schwarz oder weiß.',
    detailDescription: `Das Altea-DUO-20 ist ein kompaktes und mit 2000W Power gleichzeitig sehr leistungsstarkes Beschallungssystem mit dezenter Optik. Es lässt sich extrem einfach und schnell ohne weiteres Zubehör wie Stative oder Lautsprecherkabel montieren. Stecker in die Steckdose, fertig! Erhältlich in schwarz oder weiß.`,
    images: ['/images/PASaeuleBluetooth.webp'],
    pricePerUnit: 60,
    pricePerPair: 100,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-70 (Stck), 1-120 (Paar)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '2.000W' },
      { label: 'Schalldruck', value: '127 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Ja, Audio Streaming & Link' },
      { label: 'Gewicht', value: '31 kg' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'pa-set-small',
    name: 'PA Set SMALL',
    description: 'Die Action 508A von DAS Audio sind kompakte aber sehr robuste Multifunktionslautsprecher. Das Set eignet sich für Hintergrundmusik, Sprachbeschallung und Monitoranwendungen. Stative sind im Mietpreis enthalten.',
    detailDescription: `Die Action 508A von DAS Audio sind kompakte aber sehr robuste Multifunktionslautsprecher. Das Set eignet sich für Hintergrundmusik, Sprachbeschallung und Monitoranwendungen. Stative sind im Mietpreis enthalten.`,
    images: ['/images/pasetsmall1.webp', '/images/pasetsmall2.webp'],
    pricePerUnit: 50,
    pricePerPair: 80,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-80' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '720W' },
      { label: 'Schalldruck', value: '121 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein, optional mit Upgrade Pack' },
      { label: 'Gewicht', value: '29kg (inkl. Stative)' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'pa-set-medium',
    name: 'PA Set MEDIUM',
    description: 'Dieses kompakte 2.1 Lautsprecher Set von DAS Audio kann problemlos in einem PKW transportiert werden und beschallt bis zu 100 Personen. Bestehend aus einem kräftigen 15er Subwoofer mit passenden aktiven Topteilen. Es eignet sich perfekt für kleine bis mittlere Räume, Bars/Kneipen und Tanzflächen Beschallung. Stative sind im Mietpreis enthalten.',
    detailDescription: `Dieses kompakte 2.1 Lautsprecher Set von DAS Audio kann problemlos in einem PKW transportiert werden und beschallt bis zu 100 Personen. Bestehend aus einem kräftigen 15er Subwoofer mit passenden aktiven Topteilen. Es eignet sich perfekt für kleine bis mittlere Räume, Bars/Kneipen und Tanzflächen Beschallung. Stative sind im Mietpreis enthalten.`,
    images: ['/images/PaSetMedium.webp'],
    pricePerUnit: 90,
    pricePerPair: 120,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-100' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '2.000W' },
      { label: 'Schalldruck', value: '131 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein, optional mit Upgrade Pack' },
      { label: 'Gewicht', value: '60kg (inkl. Stative)' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'pa-set-large',
    name: 'PA Set LARGE',
    description: 'Mit einer maximalen Systemleistung von 5.400W lassen sich mittlere Räume, kleine Säle und Clubs adäquat beschallen. Wir empfehlen es für bis zu 150 Personen. Die 15er Subs spielen sehr definiert im Bassbereich, wodurch das Set gleichermaßen für DJ Anwendungen und Live-Sound geeignet ist.',
    detailDescription: `Mit einer maximalen Systemleistung von 5.400W lassen sich mittlere Räume, kleine Säle und Clubs adäquat beschallen. Wir empfehlen es für bis zu 150 Personen. Die 15er Subs spielen sehr definiert im Bassbereich, wodurch das Set gleichermaßen für DJ Anwendungen und Live-Sound geeignet ist.`,
    images: ['/images/PaSetLarge.webp'],
    pricePerUnit: 120,
    pricePerPair: 180,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-150' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '5.400W' },
      { label: 'Schalldruck', value: '134 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein, optional mit Upgrade Pack' },
      { label: 'Gewicht', value: 'ca. 110kg' },
      { label: 'Transport', value: 'Kombi / Van' },
    ],
  },
  {
    id: 'pa-set-xlarge',
    name: 'PA Set X-LARGE',
    description: 'Für anspruchsvolle DJ- und Live-Anwendungen empfehlen wir dieses professionelle PA Set bis 250 Personen. Präzise und druckvolle Wiedergabe in allen Frequenzbereichen. Sie sollten für den Transport und Aufbau 2 Personen einplanen.',
    detailDescription: `Für anspruchsvolle DJ- und Live-Anwendungen empfehlen wir dieses professionelle PA Set bis 250 Personen. Präzise und druckvolle Wiedergabe in allen Frequenzbereichen. Sie sollten für den Transport und Aufbau 2 Personen einplanen.`,
    images: ['/images/PaSetXLarge.webp'],
    pricePerUnit: 150,
    pricePerPair: 220,
    categorySlug: 'pa-anlagen',
    offerInfo: 'Für noch mehr "POWER" kann das System durch 2 weitere 18er Subbässe erweitert werden. Damit lassen sich dann noch mehr Personen mit massivem Basspegel beschallen. Aufpreis für 2 weitere Subs: 70,- €',
    specs: [
      { label: 'Personen', value: '1-250 (350 mit 4 Subs)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '6.000W' },
      { label: 'Schalldruck', value: '137 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein, optional mit Upgrade Pack' },
      { label: 'Gewicht', value: 'ca. 140kg' },
      { label: 'Transport', value: 'Transporter' },
    ],
  },
  {
    id: 'pa-set-premium',
    name: 'PA Set PREMIUM',
    description: 'Exklusiv für hochwertige Acts, wo dezente Optik bei maximalem Sound entscheidend sind, ist unsere neue Gala/Concert PA von Zenit Audio (Made in Germany) die richtige Wahl. Trotz kompakter Abmessungen und geringem, lassen sich bis zu 250 Personen adäquat beschallen. Komplett mit Verkabelung und Transportollen.',
    detailDescription: `Exklusiv für hochwertige Acts, wo dezente Optik bei maximalem Sound entscheidend sind, ist unsere neue Gala/Concert PA von Zenit Audio (Made in Germany) die richtige Wahl. Trotz kompakter Abmessungen und geringem, lassen sich bis zu 250 Personen adäquat beschallen. Komplett mit Verkabelung und Transportollen.`,
    images: ['/images/pasetpremium2.webp', '/images/audiozenit-1920w.webp'],
    pricePerUnit: 180,
    pricePerPair: 250,
    categorySlug: 'pa-anlagen',
    offerInfo: 'Für noch mehr "POWER" kann das System durch 2 weitere Doppel-12er Bässe erweitert werden. Mit 5kW RMS Bassleistung lassen sich dann noch mehr Personen mit massivem Basspegel beschallen. Aufpreis für 2 weitere Subs: 90,- €',
    specs: [
      { label: 'Personen', value: '1-250 (350 mit 4 Subs)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Leistung', value: '5.200W' },
      { label: 'Schalldruck', value: '138,5 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein' },
      { label: 'Gewicht', value: 'ca. 100kg' },
      { label: 'Transport', value: 'Kombi / Van' },
    ],
  },
  {
    id: 'pa-set-outdoor',
    name: 'PA Set OUTDOOR',
    description: 'Wenn es größere Flächen im Außenbereich zu beschallen gilt, wo längere Strecken überbrückt werden müssen, empfehlen sich passive Lautsprecher, die mit einem einzigen Kabel anschließbar sind. Die spritzwasser-geschützten Lautsprecher halten auch Regen und Wind stand und sind somit auch bei ungünstigem Wetter einsetzbar. Das Set kann einfach durch weitere Lautsprecher erweitert werden.',
    detailDescription: `Wenn es größere Flächen im Außenbereich zu beschallen gilt, wo längere Strecken überbrückt werden müssen, empfehlen sich passive Lautsprecher, die mit einem einzigen Kabel anschließbar sind. Die spritzwasser-geschützten Lautsprecher halten auch Regen und Wind stand und sind somit auch bei ungünstigem Wetter einsetzbar. Das Set kann einfach durch weitere Lautsprecher erweitert werden.`,
    images: ['/images/pasetoutdoor.webp'],
    pricePerUnit: 70,
    pricePerPair: 105,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Personen', value: '1-200 (500) Sprache' },
      { label: 'Indoor', value: 'Indoor & Outdoor' },
      { label: 'Leistung', value: '1.000W' },
      { label: 'Schalldruck', value: '131 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein' },
      { label: 'Gewicht', value: 'ca. 45 kg (inkl. Zubehör)' },
      { label: 'Transport', value: 'Kleinwagen / PKW' },
    ],
  },
  {
    id: 'profi-pa-line-array-event-26a',
    name: 'Profi PA / Line-Array Event 26A',
    description: 'Das professionelle Line Array Event 26 von DAS Audio begeistert durch hochwertigen Sound und präzises Abstrahlverhalten. Ob für Live-Musik, Messe-Events oder Gala, das System kann je nach Bedarf skaliert werden durch zufügen weiterer Topteile / Bässe. Sie sollten für den Transport und Aufbau 2 Personen einplanen.',
    detailDescription: `Das professionelle Line Array Event 26 von DAS Audio begeistert durch hochwertigen Sound und präzises Abstrahlverhalten. Ob für Live-Musik, Messe-Events oder Gala, das System kann je nach Bedarf skaliert werden durch zufügen weiterer Topteile / Bässe. Sie sollten für den Transport und Aufbau 2 Personen einplanen.`,
    images: ['/images/paprofi1.webp', '/images/paprofi2.webp'],
    pricePerUnit: 225,
    categorySlug: 'pa-anlagen',
    priceOptions: [
      { label: 'Set Small (4 Tops, 2 Bässe)', price: 225 },
      { label: 'Set Medium (8 Tops, 4 Bässe)', price: 350 },
      { label: 'Set Large (12 Tops, 6 Bässe)', price: 500 },
    ],
    specs: [
      { label: 'Personen', value: '1-1.500 (je nach Konfiguration)' },
      { label: 'Indoor', value: 'Indoor & Outdoor IP44' },
      { label: 'Leistung', value: 'ab 3.200W' },
      { label: 'Schalldruck', value: 'ab 131 dB' },
      { label: 'Bluetooth', value: '(bluetooth) Nein' },
      { label: 'Gewicht', value: 'ab 150 kg' },
      { label: 'Transport', value: 'Transporter' },
      { label: 'Gewicht', value: '16,5 kg (Top) / 37 kg (Bass)' },
      { label: 'Outdoor', value: 'Ja (IP44)' },
    ],
  },

  // Mischpulte & Mikrofone
  {
    id: 'allen-heath-sq5',
    name: 'Allen & Heath SQ-5',
    description: 'Digitales Mischpult der Extraklasse mit internem 96kHz Processing. Logischer Workflow und ein großes Touch-Display erlauben eine intuitive Bedienung nach kurzer Einarbeitung.',
    detailDescription: `Allen & Heath SQ-5
Digitales Mischpult der Extraklasse
Digitales Mischpult der Extraklasse mit internem 96kHz Processing. Logischer Workflow und ein großes Touch-Display erlauben eine intuitive Bedienung nach kurzer Einarbeitung.

Technische Daten:
16/24/48 IN / 12 OUT
8 FX Engines
7" Touchdisplay
S-Link via CAT5 Kabel
Wifi ja mit ext. Router
32 x 32 USB Interface, Multitrack USB Recording
22 kg inkl. Flightcase`,
    images: ['/images/sq5c-1920w.webp'],
    pricePerUnit: 100,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Allen & Heath' },
      { label: 'Typ', value: 'Digital Mixer' },
      { label: 'Channels', value: '16/24/48 IN / 12 OUT' },
      { label: 'Effects', value: '8 FX Engines' },
      { label: 'Display', value: '7" Touchdisplay' },
      { label: 'Network', value: 'S-Link via CAT5 Kabel' },
      { label: 'Wifi', value: 'ja mit ext. Router' },
      { label: 'USB', value: '32 x 32 USB Interface, Multitrack USB Recording' },
      { label: 'Gewicht', value: '22 kg inkl. Flightcase' },
    ],
  },
  {
    id: 'allen-heath-ar2412',
    name: 'Allen & Heath AR2412',
    description: 'Digitale Stagebox / Bühnenverteilung für Allen & Heath Digital Mischpulte. Über nur ein CAT5E Netzwerkabel können 24 Eingangskanäle und 12 Ausgangskanäle digital und störungsfrei von der Bühne zum Frontplatz übertragen werden. Inkl. 50m CAT5E Netzwerkkabel auf Trommel.',
    detailDescription: `Allen & Heath AR2412
Digitale Stagebox / Bühnenverteilung
Digitale Stagebox / Bühnenverteilung für Allen & Heath Digital Mischpulte. Über nur ein CAT5E Netzwerkabel können 24 Eingangskanäle und 12 Ausgangskanäle digital und störungsfrei von der Bühne zum Frontplatz übertragen werden. Inkl. 50m CAT5E Netzwerkkabel auf Trommel.`,
    images: ['/images/ar2412_1-1920w.webp'],
    pricePerUnit: 40,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Allen & Heath' },
      { label: 'Typ', value: 'Digitale Stagebox / Bühnenverteilung' },
      { label: 'Eingänge', value: '24 Kanäle' },
      { label: 'Ausgänge', value: '12 Kanäle' },
      { label: 'Verkabelung', value: 'CAT5E Netzwerkkabel (ein Kabel)' },
      { label: 'Übertragung', value: 'Digital und störungsfrei' },
      { label: 'Anwendung', value: 'Bühne zum Frontplatz' },
      { label: 'Kompatibilität', value: 'Allen & Heath Digital Mischpulte' },
      { label: 'Inklusive', value: '50m CAT5E Netzwerkkabel auf Trommel' },
    ],
  },
  {
    id: 'yamaha-dm3',
    name: 'Yamaha DM-3',
    description: 'Digitales Mischpult mit innovativer Bedienoberfläche. Fertige Presets für unterschiedliche Live- oder Recording Anwendungen machen dieses Mischpult zum professionellen Werkzeug auch für Laien. Die überragende Soundqualität wurde von den zum Industriestandard zählenden Yamaha Live Consolen übernommen.',
    detailDescription: `Yamaha DM-3
Digitales Mischpult mit innovativer Bedienoberfläche
Digitales Mischpult mit innovativer Bedienoberfläche. Fertige Presets für unterschiedliche Live- oder Recording Anwendungen machen dieses Mischpult zum professionellen Werkzeug auch für Laien. Die überragende Soundqualität wurde von den zum Industriestandard zählenden Yamaha Live Consolen übernommen.

Technische Daten:
16 IN / 8 OUT
2 FX Engines
9" Touchdisplay
DANTE
Wifi ja mit ext. Router
USB Audio Playback, USB Interface, Stereo USB Recording
15 kg inkl. Flightcase`,
    images: ['/images/dm3_2-1920w.webp'],
    pricePerUnit: 70,
    priceOptions: [
      { label: 'DM-3 Standard', price: 70 },
      { label: 'DM-3 Dante', price: 90 },
    ],
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Yamaha' },
      { label: 'Typ', value: 'Digital Mixer' },
      { label: 'Channels', value: '16 IN / 8 OUT' },
      { label: 'Effects', value: '2 FX Engines' },
      { label: 'Display', value: '9" Touchdisplay' },
      { label: 'Network', value: 'DANTE' },
      { label: 'Wifi', value: 'ja mit ext. Router' },
      { label: 'USB', value: 'USB Audio Playback, USB Interface, Stereo USB Recording' },
      { label: 'Gewicht', value: '15 kg inkl. Flightcase' },
    ],
  },
  {
    id: 'yamaha-tio-1608d',
    name: 'Yamaha TIO-1608D',
    description: 'Dante-fähige digitale Stagebox mit 16 Inputs und 8 Outputs. Kaskadierbar mit weiteren Einheiten. Die Signale werden somit störungsfrei von der Bühne zum Mischpult transportiert über ein CAT6E Netzwerkkabel, 50m Kabel sind im Mietpreis enthalten.',
    detailDescription: `Yamaha TIO-1608D
Dante-fähige digitale Stagebox
Dante-fähige digitale Stagebox mit 16 Inputs und 8 Outputs. Kaskadierbar mit weiteren Einheiten. Die Signale werden somit störungsfrei von der Bühne zum Mischpult transportiert über ein CAT6E Netzwerkkabel, 50m Kabel sind im Mietpreis enthalten.`,
    images: ['/images/tio1608D-1920w.webp'],
    pricePerUnit: 35,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Yamaha' },
      { label: 'Typ', value: 'Digitale Stagebox' },
      { label: 'Technologie', value: 'Dante-fähig' },
      { label: 'Inputs', value: '16' },
      { label: 'Outputs', value: '8' },
      { label: 'Verkabelung', value: 'CAT6E Netzwerkkabel' },
      { label: 'Übertragung', value: 'Störungsfrei von der Bühne zum Mischpult' },
      { label: 'Kaskadierbar', value: 'Ja, mit weiteren Einheiten' },
      { label: 'Inklusive', value: '50m CAT6E Netzwerkkabel' },
    ],
  },
  {
    id: 'dynacord-cms-1600-3',
    name: 'DYNACORD CMS 1600-3',
    description: 'Analoges Live Mischpult der Profiklasse. Bewährter "Dynacord Sound" mit 2 digitalen Effektgeräten und einem 4-Band EQ pro Kanal, sowie zusätzlichen Filtern machen dieses Mischpult zum Garant für einen guten, analogen Live Sound!',
    detailDescription: `DYNACORD CMS 1600-3
Analoges Live Mischpult der Profiklasse
Analoges Live Mischpult der Profiklasse. Bewährter "Dynacord Sound" mit 2 digitalen Effektgeräten und einem 4-Band EQ pro Kanal, sowie zusätzlichen Filtern machen dieses Mischpult zum Garant für einen guten, analogen Live Sound!

Technische Daten:
16/20 IN / 4 OUT
2 FX Engines
OLED Display
Network nein
Wifi nein
2x2 USB Interface
22 kg inkl. Flightcase`,
    images: ['/images/cms1600_1-1920w.webp'],
    pricePerUnit: 60,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'DYNACORD' },
      { label: 'Typ', value: 'Analoges Live Mischpult' },
      { label: 'Channels', value: '16/20 IN / 4 OUT' },
      { label: 'Effects', value: '2 FX Engines' },
      { label: 'Display', value: 'OLED Display' },
      { label: 'Network', value: 'nein' },
      { label: 'Wifi', value: 'nein' },
      { label: 'USB', value: '2x2 USB Interface' },
      { label: 'Gewicht', value: '22 kg inkl. Flightcase' },
    ],
  },
  {
    id: 'pioneer-djm-900-nexus',
    name: 'Pioneer DJM-900 Nexus',
    description: 'Professionelles 4-Kanal DJ Mischpult. Vermietung im Flightcase mit passenden Kabeln (USB / Netzwerk).',
    detailDescription: `Pioneer DJM-900 Nexus
Professionelles 4-Kanal DJ Mischpult
Professionelles 4-Kanal DJ Mischpult. Vermietung im Flightcase mit passenden Kabeln (USB / Netzwerk).

Technische Daten:
4 Stereo-IN / 3 Stereo-OUT
dig. Special FX
Beat/FX Display
Pioneer ProDJ Link
Wifi nein
4x4 USB Interface
12,5 kg inkl. Flightcase`,
    images: ['/images/djm900_2-edae2eca-1920w.webp'],
    pricePerUnit: 60,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Pioneer' },
      { label: 'Typ', value: '4-Kanal DJ Mischpult' },
      { label: 'Channels', value: '4 Stereo-IN / 3 Stereo-OUT' },
      { label: 'Effects', value: 'dig. Special FX' },
      { label: 'Display', value: 'Beat/FX Display' },
      { label: 'Network', value: 'Pioneer ProDJ Link' },
      { label: 'Wifi', value: 'nein' },
      { label: 'USB', value: '4x4 USB Interface' },
      { label: 'Gewicht', value: '12,5 kg inkl. Flightcase' },
    ],
  },
  {
    id: 'mackie-analog-mixer',
    name: 'Analoge MACKIE Mischpulte',
    description: 'Die ProFX Serie von Mackie zählt seit Jahren zu den zuverlässigsten und robusten Analog Mischpulten. Rauscharme Mikrofonvorverstärker und pegelfeste Summenverstärker sorgen für einen glasklaren Sound. Eingebaute Digitaleffekte und USB/Bluetooth Funktionalität.',
    detailDescription: `Analoge MACKIE Mischpulte
Die ProFX Serie von Mackie
Die ProFX Serie von Mackie zählt seit Jahren zu den zuverlässigsten und robusten Analog Mischpulten. Rauscharme Mikrofonvorverstärker und pegelfeste Summenverstärker sorgen für einen glasklaren Sound. Eingebaute Digitaleffekte und USB/Bluetooth Funktionalität.

Technische Daten:
4-12 IN / 2 OUT
1 Digital FX
Display nein
Network nein
Wifi nein
2x2 USB Interface
ab 5 kg inkl. Koffer`,
    images: ['/images/E8734E62-1976-463C-8087-B75D6B73138C-1920w.webp'],
    pricePerUnit: 20,
    priceOptions: [
      { label: '4-Kanal', price: 20 },
      { label: '8-Kanal', price: 25 },
      { label: '12-Kanal', price: 30 },
    ],
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'MACKIE' },
      { label: 'Serie', value: 'ProFX Serie' },
      { label: 'Typ', value: 'Analog Mixer' },
      { label: 'Channels', value: '4-12 IN / 2 OUT' },
      { label: 'Effects', value: '1 Digital FX' },
      { label: 'Display', value: 'nein' },
      { label: 'Network', value: 'nein' },
      { label: 'Wifi', value: 'nein' },
      { label: 'USB', value: '2x2 USB Interface' },
      { label: 'Gewicht', value: 'ab 5 kg inkl. Koffer' },
    ],
  },
  {
    id: 'shure-mikrofon-set-sm58-sm57',
    name: 'Shure Mikrofon Set SM58 / SM57',
    description: 'Die Standardausstattung, die auf keiner Bühne fehlen darf. Robuste dynamische Mikrofone. Wahlweise für Gesang/Sprache (Shure Beta58a) oder Instrument, Amp, Blasinstrumente (Shure SM-57) jeweils mit Mikrofonständer von König & Meyer und 10m XLR Kabel.',
    detailDescription: `Shure Mikrofon Set SM58 / SM57
Die Standardausstattung, die auf keiner Bühne fehlen darf
Die Standardausstattung, die auf keiner Bühne fehlen darf. Robuste dynamische Mikrofone. Wahlweise für Gesang/Sprache (Shure Beta58a) oder Instrument, Amp, Blasinstrumente (Shure SM-57) jeweils mit Mikrofonständer von König & Meyer und 10m XLR Kabel.

Technische Daten:
Robuste dynamische Mikrofone
Wahlweise für Gesang/Sprache (Shure Beta58a)
Oder Instrument, Amp, Blasinstrumente (Shure SM-57)
Inkl. Mikrofonständer von König & Meyer
Inkl. 10m XLR Kabel`,
    images: ['/images/micstandset-1920w.webp'],
    pricePerUnit: 10,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Shure' },
      { label: 'Typ', value: 'Dynamische Mikrofone' },
      { label: 'Option 1', value: 'Shure Beta58a - Gesang/Sprache' },
      { label: 'Option 2', value: 'Shure SM-57 - Instrument, Amp, Blasinstrumente' },
      { label: 'Anwendung', value: 'Wahlweise für Gesang/Sprache oder Instrument/Amp/Blasinstrumente' },
      { label: 'Inklusive', value: 'Mikrofonständer von König & Meyer + 10m XLR Kabel' },
    ],
  },
  {
    id: 'mikrofon-set-drums',
    name: 'Mikrofon Set für Drums / Schlagzeug',
    description: 'Zur Abnahme eines Standard Drumsets erhalten Sie hier ein Komplettpaket mit 7 Mikrofonen:\n\n- 1 x Bassdrum Shure Beta52\n- 4 x Snare/Tom Clipmikros Beyerdynamic TG D58\n- 2 x Kondensatormikro für Hi Hat / Overhead), Lewitt LCL40\n- inkl. Stativen und XLR Kabeln',
    detailDescription: `Mikrofon Set für Drums / Schlagzeug
Komplettpaket für Standard Drumsets
Zur Abnahme eines Standard Drumsets erhalten Sie hier ein Komplettpaket mit 7 Mikrofonen:

- 1 x Bassdrum Shure Beta52
- 4 x Snare/Tom Clipmikros Beyerdynamic TG D58
- 2 x Kondensatormikro für Hi Hat / Overhead), Lewitt LCL40
- inkl. Stativen und XLR Kabeln

Technische Daten:
7 Mikrofone insgesamt
1 x Bassdrum Mikrofon (Shure Beta52)
4 x Snare/Tom Clipmikros (Beyerdynamic TG D58)
2 x Kondensatormikro (Lewitt LCL40) für Hi Hat / Overhead
Inkl. Stativen und XLR Kabeln`,
    images: ['/images/3A8023FD-AB53-4131-800A-A54D3D9CAEF8-1920w.webp'],
    pricePerUnit: 45,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Typ', value: 'Drum-Mikrofon Set' },
      { label: 'Anwendung', value: 'Standard Drumsets' },
      { label: 'Anzahl Mikrofone', value: '7 Mikrofone' },
      { label: 'Bassdrum', value: '1 x Shure Beta52' },
      { label: 'Snare/Toms', value: '4 x Beyerdynamic TG D58 Clipmikros' },
      { label: 'Hi Hat/Overhead', value: '2 x Lewitt LCL40 Kondensatormikro' },
      { label: 'Inklusive', value: 'Stative + XLR Kabel' },
    ],
  },
  {
    id: 'funkmikrofon-sprache-moderation',
    name: 'Funkmikrofon für Sprache / Moderation',
    description: 'Unsere Funkstrecken von Beyerdynamic wahlweise mit Handsender oder Headset / Kopfbügelmikrofon eigenen sich perfekt für Ansprachen, Reden, Moderation und Konferenzen. Sprache wird sauber und störungsfrei übertragen. Wahlweise Handmikrofon oder Headset mit Taschensender. Batterien (AA) sind nicht im Mietpreis enthalten.',
    detailDescription: `Funkmikrofon für Sprache / Moderation
Funkstrecken von Beyerdynamic
Unsere Funkstrecken von Beyerdynamic wahlweise mit Handsender oder Headset / Kopfbügelmikrofon eigenen sich perfekt für Ansprachen, Reden, Moderation und Konferenzen. Sprache wird sauber und störungsfrei übertragen. Wahlweise Handmikrofon oder Headset mit Taschensender.

Batterien (AA) sind nicht im Mietpreis enthalten.

Technische Daten:
Funkstrecken von Beyerdynamic
Wahlweise mit Handsender oder Headset / Kopfbügelmikrofon
Saubere und störungsfreie Übertragung
Varianten: Handmikrofon oder Headset mit Taschensender
Anwendung: Ansprachen, Reden, Moderation und Konferenzen`,
    images: ['/images/beyertg550-c1a0fc40-1920w.webp'],
    pricePerUnit: 25,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Typ', value: 'Funkmikrofon' },
      { label: 'Hersteller', value: 'Beyerdynamic' },
      { label: 'Anwendung', value: 'Ansprachen, Reden, Moderation und Konferenzen' },
      { label: 'Varianten', value: 'Handsender oder Headset / Kopfbügelmikrofon' },
      { label: 'Option 1', value: 'Handmikrofon' },
      { label: 'Option 2', value: 'Headset mit Taschensender' },
      { label: 'Übertragung', value: 'Sauber und störungsfrei' },
      { label: 'Batterien', value: 'AA Batterien nicht im Mietpreis enthalten' },
    ],
  },
  {
    id: 'profi-funkmikrofon-shure-slxd2',
    name: 'Profi Funkmikrofon Shure SLXD2',
    description: 'Shure stellt mit den neuen SLXD Funkstrecken zuverlässige Arbeitstiere für den Bühneneinsatz zur Verfügung. Erstklassige Übertragungssicherheit in Kombination mit dynamischer, rauscharmer Audioqualität sind für den Profieinsatz gewährleistet. Mehrere Funkstrecken lassen sich parallel betreiben. Wahlweise auch mit Taschensender und Kopfbügelmikrofon (Nieren- oder Kugelcharakteristik). Batterien (AA) sind nicht im Mietpreis enthalten.',
    detailDescription: `Profi Funkmikrofon Shure SLXD2
Zuverlässige Arbeitstiere für den Bühneneinsatz
Shure stellt mit den neuen SLXD Funkstrecken zuverlässige Arbeitstiere für den Bühneneinsatz zur Verfügung. Erstklassige Übertragungssicherheit in Kombination mit dynamischer, rauscharmer Audioqualität sind für den Profieinsatz gewährleistet. Mehrere Funkstrecken lassen sich parallel betreiben.

Wahlweise auch mit Taschensender und Kopfbügelmikrofon (Nieren- oder Kugelcharakteristik).

Batterien (AA) sind nicht im Mietpreis enthalten.

Technische Daten:
Shure SLXD Funkstrecken
Erstklassige Übertragungssicherheit
Dynamische, rauscharme Audioqualität
Mehrere Funkstrecken parallel betreibbar
Varianten: Handmikrofon oder Taschensender mit Kopfbügelmikrofon (Nieren- oder Kugelcharakteristik)
Profieinsatz geeignet`,
    images: ['/images/slxd4e86-1920w (1).webp'],
    pricePerUnit: 40,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Shure' },
      { label: 'Typ', value: 'Funkmikrofon' },
      { label: 'Modell', value: 'SLXD2' },
      { label: 'Anwendung', value: 'Bühneneinsatz, Profieinsatz' },
      { label: 'Übertragungssicherheit', value: 'Erstklassig' },
      { label: 'Audioqualität', value: 'Dynamisch, rauscharm' },
      { label: 'Parallelbetrieb', value: 'Mehrere Funkstrecken möglich' },
      { label: 'Varianten', value: 'Handmikrofon oder Taschensender mit Kopfbügelmikrofon (Nieren- oder Kugelcharakteristik)' },
      { label: 'Batterien', value: 'AA Batterien nicht im Mietpreis enthalten' },
    ],
  },

  // Statische Scheinwerfer / LED Spots
  {
    id: 'akku-spot-indoor-rgb',
    name: 'Akku Spot Indoor RGB',
    description: 'Praktisches LED Akku Uplight zur stimmungsvollen Beleuchtung von Innenräumen, Ecken, Wänden/Säulen. Die Spots können einzeln via Fernbedienung oder synchronisiert über Wireless DMX gesteuert werden.',
    detailDescription: `Akku Spot Indoor RGB
Praktisches LED Akku Uplight
Praktisches LED Akku Uplight zur stimmungsvollen Beleuchtung von Innenräumen, Ecken, Wänden/Säulen. Die Spots können einzeln via Fernbedienung oder synchronisiert über Wireless DMX gesteuert werden.

Technische Daten:
3 x 3 Watt
5-10 h
Indoor
RGB
ja, eingeb. Mikrofon
Fernbedienung / Wireless DMX
1,2 kg / Stck`,
    images: ['/images/akku-spot-indoor.webp'],
    pricePerUnit: 8,
    priceOptions: [
      { label: 'Einzeln', price: 8 },
      { label: '4er Set', price: 30 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '3 x 3 Watt' },
      { label: 'Akkulaufzeit', value: '5-10 h' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'RGB' },
      { label: 'Music', value: 'ja, eingeb. Mikrofon' },
      { label: 'Wifi', value: 'Fernbedienung / Wireless DMX' },
      { label: 'Gewicht', value: '1,2 kg / Stck' },
    ],
  },
  {
    id: 'akku-spot-outdoor-rgbw-ip65',
    name: 'Akku Spot Outdoor RGBW, IP65',
    description: 'Mit 4-in-1 LEDs ausgestattet, bietet dieses Uplight eine hohe Lichtleistung bei gleichzeitig kompakten und praktischen Abmessungen. Der Spot kann geneigt und mit dem mitgelieferten Diffus-Filter in der Abstrahlung angepasst werden. Wetterfest nach IP65, für Verwendung auch im Außenbereich.',
    detailDescription: `Akku Spot Outdoor RGBW, IP65
Mit 4-in-1 LEDs ausgestattet
Mit 4-in-1 LEDs ausgestattet, bietet dieses Uplight eine hohe Lichtleistung bei gleichzeitig kompakten und praktischen Abmessungen. Der Spot kann geneigt und mit dem mitgelieferten Diffus-Filter in der Abstrahlung angepasst werden. Wetterfest nach IP65, für Verwendung auch im Außenbereich.

Technische Daten:
4 x 12 Watt
6-12 h
Indoor / Outdoor IP65
RGB/W
ja, eingeb. Mikrofon
Fernbedienung / Wireless DMX
3,8 kg / Stck`,
    images: ['/images/akku-spot-outdoor.webp'],
    pricePerUnit: 12.5,
    priceOptions: [
      { label: 'Einzeln', price: 12.5 },
      { label: '4er Set', price: 40 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '4 x 12 Watt' },
      { label: 'Akkulaufzeit', value: '6-12 h' },
      { label: 'Outdoor', value: 'Indoor / Outdoor IP65' },
      { label: 'Farbmischung', value: 'RGB/W' },
      { label: 'Music', value: 'ja, eingeb. Mikrofon' },
      { label: 'Wifi', value: 'Fernbedienung / Wireless DMX' },
      { label: 'Gewicht', value: '3,8 kg / Stck' },
    ],
  },
  {
    id: 'led-outdoor-fluter-ip65',
    name: 'LED Outdoor Fluter, IP65',
    description: 'Lichtstarker Outdoor Fluter zum Beleuchten von Gebäudeteilen, Bäumen/Büschen, u.v.m. Gleich 16 LEDs sorgen für den nötigen Output und eine gleichmäßige Abstrahlung. Die Scheinwerfer können manuell über das Menü (Automatikprogramme) oder via DMX gesteuert werden. Sie sind wetterfest laut IP65.',
    detailDescription: `LED Outdoor Fluter, IP65
Lichtstarker Outdoor Fluter
Lichtstarker Outdoor Fluter zum Beleuchten von Gebäudeteilen, Bäumen/Büschen, u.v.m. Gleich 16 LEDs sorgen für den nötigen Output und eine gleichmäßige Abstrahlung. Die Scheinwerfer können manuell über das Menü (Automatikprogramme) oder via DMX gesteuert werden. Sie sind wetterfest laut IP65.

Technische Daten:
4 x 12 Watt
Indoor / Outdoor IP65
RGB/W
nein
manuell / DMX
3,5 kg / Stck`,
    images: ['/images/led-outdoor-fluter.webp'],
    pricePerUnit: 15,
    priceOptions: [
      { label: 'Einzeln', price: 15 },
      { label: '4er Set', price: 50 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '4 x 12 Watt' },
      { label: 'Outdoor', value: 'Indoor / Outdoor IP65' },
      { label: 'Farbmischung', value: 'RGB/W' },
      { label: 'Music', value: 'nein' },
      { label: 'Wifi', value: 'manuell / DMX' },
      { label: 'Gewicht', value: '3,5 kg / Stck' },
    ],
  },
  {
    id: 'led-verfolgerspot-follow-spot',
    name: 'LED Verfolgerspot Follow Spot',
    description: 'Mit 120W reinweißer LED genügt dieser Follow Spot für Theater- / Bühnenanwendung mittlerer Distanz. Redner, Künstler, Schauspieler setzen Sie so akzentvoll in Szene. Der Spot ermöglicht verschiedene Weißtöne (von 2.800 bis 5.000K), manueller Zoom und motorgesteuerte Iris/Blende und Dimmer. Inkl. Verfolgerstativ und Flightcase.',
    detailDescription: `LED Verfolgerspot Follow Spot
Mit 120W reinweißer LED
Mit 120W reinweißer LED genügt dieser Follow Spot für Theater- / Bühnenanwendung mittlerer Distanz. Redner, Künstler, Schauspieler setzen Sie so akzentvoll in Szene. Der Spot ermöglicht verschiedene Weißtöne (von 2.800 bis 10.000K), manueller Zoom und motorgesteuerte Iris/Blende und Dimmer. Inkl. Verfolgerstativ und Flightcase.

Technische Daten:
120 Watt
Indoor
weiß, 2.800 – 10.000 K (5 Stufen)
nein
nein
ca 10 kg inkl. Stativ`,
    images: ['/images/follow-sot.webp'],
    pricePerUnit: 60,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '120 Watt' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'weiß, 2.800 – 10.000 K (5 Stufen)' },
      { label: 'Music', value: 'nein' },
      { label: 'Wifi', value: 'nein' },
      { label: 'Gewicht', value: 'ca 10 kg inkl. Stativ' },
    ],
  },
  {
    id: 'led-pll-panel-power-strobe',
    name: 'LED PLL Panel / Power Strobe',
    description: 'Das mit insgesamt 480 LEDs ausgestattet Power Panel eignet sich dank einstellbarer Farbtemperatur (warm weiß / kalt weiß) für Foto, Video, Grundbeleuchtung oder als hochwertiges Stroboskop. Inkl. Stativ oder Theaterhaken.',
    detailDescription: `LED PLL Panel / Power Strobe
Das mit insgesamt 480 LEDs ausgestattet Power Panel
Das mit insgesamt 480 LEDs ausgestattet Power Panel eignet sich dank einstellbarer Farbtemperatur (warm weiß / kalt weiß) für Foto, Video, Grundbeleuchtung oder als hochwertiges Stroboskop. Inkl. Stativ oder Theaterhaken.

Technische Daten:
480 x 0,5 W
Indoor
WW/CW, 3.200 – 5.600 K
nein
manuell / DMX
12,5 kg`,
    images: ['/images/led-ppl.webp'],
    pricePerUnit: 30,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '480 x 0,5 W' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'WW/CW, 3.200 – 5.600 K' },
      { label: 'Music', value: 'nein' },
      { label: 'Wifi', value: 'manuell / DMX' },
      { label: 'Gewicht', value: '12,5 kg' },
    ],
  },
  {
    id: 'party-lichtset-kompakt',
    name: 'Party Lichtset kompakt',
    description: 'Das KLS-120 ist ein ultrakompaktes Licht Set im Hosentaschenformat. Es besteht aus 2 farbigen LED Spots und 2 LED Derbys. Die Ansteuerung der Lichteffekte erfolgt soundgesteuert über das eingebaute Mikrofon. Stecker in die Steckdose, fertig. Inkl. Leuchtenstativ.',
    detailDescription: `Party Lichtset kompakt
Das KLS-120 ist ein ultrakompaktes Licht Set
Das KLS-120 ist ein ultrakompaktes Licht Set im Hosentaschenformat. Es besteht aus 2 farbigen LED Spots und 2 LED Derbys. Die Ansteuerung der Lichteffekte erfolgt soundgesteuert über das eingebaute Mikrofon. Stecker in die Steckdose, fertig. Inkl. Leuchtenstativ.

Technische Daten:
4 x 3 W (Derbys) + 3 x 8 W (Spots)
Indoor
RGB/W
ja, eingeb. Mikrofon
Fernbedienung, DMX
ca 12 kg inkl. Stativ`,
    images: ['/images/kls120_1-1920w.webp'],
    pricePerUnit: 25,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '4 x 3 W (Derbys) + 3 x 8 W (Spots)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'RGB/W' },
      { label: 'Music', value: 'ja, eingeb. Mikrofon' },
      { label: 'Wifi', value: 'Fernbedienung, DMX' },
      { label: 'Gewicht', value: 'ca 12 kg inkl. Stativ' },
    ],
  },
  {
    id: 'led-pro-lichtbar-rgb',
    name: 'LED Pro Lichtbar RGB',
    description: 'Die KLS 902 Next von eurolite ist eine mit 4 lichtstarken RGB PAR Spots ausgestattete LED Bar. Sie wird zur farbigen Beleuchtung von Bühne, Live-Band oder Tanzflächen eingesetzt. Die Steuerung erfolgt wahlweise Stand-Alone via Fernbedienung oder per DMX. Wir bieten auch passende DMX Controller an. Inkl. Leuchtenstativ.',
    detailDescription: `LED Pro Lichtbar RGB
Die KLS 902 Next von eurolite
Die KLS 902 Next von eurolite ist eine mit 4 lichtstarken RGB PAR Spots ausgestattete LED Bar. Sie wird zur farbigen Beleuchtung von Bühne, Live-Band oder Tanzflächen eingesetzt. Die Steuerung erfolgt wahlweise Stand-Alone via Fernbedienung oder per DMX. Wir bieten auch passende DMX Controller an. Inkl. Leuchtenstativ.

Technische Daten:
5 x 7 W (pro Spot)
Indoor
RGB/W
ja, eingeb. Mikrofon
Fernbedienung, DMX
ca. 17 kg inkl. Stativ`,
    images: ['/images/led-pro.webp'],
    pricePerUnit: 30,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '5 x 7 W (pro Spot)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'RGB/W' },
      { label: 'Music', value: 'ja, eingeb. Mikrofon' },
      { label: 'Wifi', value: 'Fernbedienung, DMX' },
      { label: 'Gewicht', value: 'ca. 17 kg inkl. Stativ' },
    ],
  },
  {
    id: 'led-effekt-bar-mit-scannern',
    name: 'LED Effekt Bar mit Scannern',
    description: 'Mit diesem raumgreifenden Lichteffekt zaubern Sie für ihre Gäste eine beeindruckende Light-Show. Gleich 4 unterschiedliche Effekte stehen in einem dennoch kompakten Querträger bereit. 4 farbige Spots, 4 UV LEDs, 2 Scanner mit beweglichen Spiegeln und 1 zentraler Derby Effekt. Gesteuert wird das ganze per Fernbedienung oder einfach im Sound-to-Light Modus. Inkl. Leuchtenstativ.',
    detailDescription: `LED Effekt Bar mit Scannern
Mit diesem raumgreifenden Lichteffekt
Mit diesem raumgreifenden Lichteffekt zaubern Sie für ihre Gäste eine beeindruckende Light-Show. Gleich 4 unterschiedliche Effekte stehen in einem dennoch kompakten Querträger bereit. 4 farbige Spots, 4 UV LEDs, 2 Scanner mit beweglichen Spiegeln und 1 zentraler Derby Effekt. Gesteuert wird das ganze per Fernbedienung oder einfach im Sound-to-Light Modus. Inkl. Leuchtenstativ.

Technische Daten:
15 W (Scanner), 3 x 7 W (Spots), 2 x 3 W (Derby)
Indoor
RGB/W+UV
ja, eingeb. Mikrofon
Fernbedienung, DMX
ca. 21 kg inkl. Stativ`,
    images: ['/images/led-spot-scanner.webp'],
    pricePerUnit: 40,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '15 W (Scanner), 3 x 7 W (Spots), 2 x 3 W (Derby)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'RGB/W+UV' },
      { label: 'Music', value: 'ja, eingeb. Mikrofon' },
      { label: 'Wifi', value: 'Fernbedienung, DMX' },
      { label: 'Gewicht', value: 'ca. 21 kg inkl. Stativ' },
    ],
  },
  {
    id: 'high-power-led-effekt-bar-mit-laser',
    name: 'High-Power LED Effekt Bar mit Laser',
    description: 'Die ultrahellen Spots und Derbys sorgen in Kombination mit dem zentralen Laser für ein eindrucksvolles Lichtspektakel. Perfekt für DJs, Partys und Hochzeiten kann mit nur einer dieser Leisten eine komplette Tanzfläche bespielt werden. Die Ansteuerung erfolgt soundgesteuert oder via Fußleiste, die sich per Funk verbindet. Inkl. Leuchtenstativ.',
    detailDescription: `High-Power LED Effekt Bar mit Laser
Die ultrahellen Spots und Derbys
Die ultrahellen Spots und Derbys sorgen in Kombination mit dem zentralen Laser für ein eindrucksvolles Lichtspektakel. Perfekt für DJs, Partys und Hochzeiten kann mit nur einer dieser Leisten eine komplette Tanzfläche bespielt werden. Die Ansteuerung erfolgt soundgesteuert oder via Fußleiste, die sich per Funk verbindet. Inkl. Leuchtenstativ.

Technische Daten:
6 x 6 W (Spots), 6 x 2 W (Derby)
Indoor
RGB+UV
ja, eingeb. Mikrofon
Fernbedienung, DMX
ca. 18 kg inkl. Stativ`,
    images: ['/images/led-spot-laser.webp'],
    pricePerUnit: 45,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Leistung', value: '6 x 6 W (Spots), 6 x 2 W (Derby)' },
      { label: 'Indoor', value: 'Indoor' },
      { label: 'Farbmischung', value: 'RGB+UV' },
      { label: 'Music', value: 'ja, eingeb. Mikrofon' },
      { label: 'Wifi', value: 'Fernbedienung, DMX' },
      { label: 'Schutzklasse', value: '2M' },
      { label: 'Gewicht', value: 'ca. 18 kg inkl. Stativ' },
    ],
  },
  {
    id: 'led-lichterketten-innen-aussen',
    name: 'LED Lichterketten für innen und außen',
    description: 'Sie können zwischen 2 Varianten wählen:\n\n- Deko Lichterkette LED farbig, Länge: 15m für innen\n- IP44 Lichterkette LED warmweiß, Länge: 10m für innen und außen',
    detailDescription: `LED Lichterketten für innen und außen
Dekorative Beleuchtung für jeden Anlass

Sie können zwischen 2 Varianten wählen:

Variante 1: Deko Lichterkette LED farbig
- Länge: 15m
- Für innen
- Farbige LED-Beleuchtung

Variante 2: IP44 Lichterkette LED warmweiß
- Länge: 10m
- Für innen und außen
- Wetterfest (IP44)
- Warmweiße LED-Beleuchtung

Beide Varianten eignen sich perfekt zur dekorativen Ausleuchtung von Räumen, Gärten, Zelten oder Veranstaltungsorten.`,
    images: ['/images/led-kette.webp'],
    pricePerUnit: 10,
    priceOptions: [
      { label: 'Pro Strang', price: 10 },
      { label: '2er Set', price: 15 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'LED Lichterkette' },
      { label: 'Anwendung', value: 'Indoor & Outdoor' },
      { label: 'Variante 1', value: 'Deko LED farbig, 15m, Indoor' },
      { label: 'Variante 2', value: 'IP44 LED warmweiß, 10m, Indoor/Outdoor' },
    ],
  },

  // Moving Heads / Lichteffekte
  {
    id: 'led-derby-effekt-mit-strobe',
    name: 'LED Derby Effekt mit Strobe',
    description: 'Einfacher aber effektvoller Derby-Effekt, der Leben in die Bude bringt. Optimal für Partys kann dieser einfach auf den Boden oder Tisch gestellt werden und läuft dann soundgesteuert. Mehrere dieser Effekte sind via DMX synchronisierbar.',
    detailDescription: `LED Derby Lichteffekt
Vielseitiger Strahleneffekt für kleine Tanzflächen/Räume mit Strobo-Funktion

Dieser coole und kompakte LED Effekt, bringt Bewegung und Dynamik auf jede Tanzfläche. Über 48 Linsen werden verschieden farbige LED Strahlen durch den Raum geschleudert. Die zusätzlichen weißen Strobe-LEDs sorgen für eine abwechslungsreiche Lightshow.`,
    images: ['/images/led-derby.webp'],
    pricePerUnit: 15,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'LED Derby Lichteffekt' },
      { label: 'Linsen', value: '40 Linsen' },
      { label: 'LEDs', value: '4 x 3 W Multicolor-LEDs' },
      { label: 'Strobe-LEDs', value: '16 weiße SMD LEDs' },
      { label: 'Programme', value: 'Automatikprogramme, Sound-to-Light Modus' },
      { label: 'Steuerung', value: 'DMX-steuerbar oder Stand-Alone Betrieb' },
      { label: 'Montage', value: 'Stehende oder hängende Montage' },
      { label: 'Fernbedienung', value: 'Zur Programmsteuerung' },
      { label: 'Gewicht', value: '2 kg' },
    ],
  },
  {
    id: 'led-triple-flower',
    name: 'LED Triple Flower',
    description: 'Wie der Derby ist auch die Flower ein klassischer Diskoeffekt. Hier gleich in 3-Facher Version mit drehenden Prismen und verschiedenen Farbwechseln. Die 3 x 30W COB LEDs haben ordentlich Lichtleistung und können somit auch große Räume / Tanzflächen füllen. Mehrere dieser Effekte können via DMX synchronisiert werden.',
    detailDescription: `LED Triple Flower
Heller und dynamischer Lichteffekt bringt Bewegung auf den Dancefloor

Dieser Multieffekt liefert beeindruckende raumfüllende Flowereffekte in Partyräumen, kleineren Clubs und mehr. Die drei rotierenden Prismen und 132 SMD-LEDs erzeugen flickerfreie Farbmischungen, Lauflichter und Strobe-Effekte, die im Soundmodus automatisch zur Musik passen.`,
    images: ['/images/led-flower.webp'],
    pricePerUnit: 22.5,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'LED Triple Flower' },
      { label: 'Prismen', value: '3 rotierende Prismen (Strahlenbündel)' },
      { label: 'COB-LEDs', value: '3 x 30 Watt COB-LEDs' },
      { label: 'SMD-LEDs', value: '132 SMD LEDs' },
      { label: 'Programme', value: 'Automatikprogramme, Sound-to-Light Modus' },
      { label: 'Steuerung', value: 'DMX-steuerbar oder Stand-Alone Betrieb' },
      { label: 'Montage', value: 'Stehende oder hängende Montage' },
      { label: 'Gewicht', value: '4,5 kg' },
    ],
  },
  {
    id: 'mirror-ball-saturn-led-effekt',
    name: 'Mirror Ball / Saturn LED Effekt',
    description: 'Angelehnt an eine Spiegelkugel bietet dieser beeindruckende Lichteffekt sich drehende Strahlenbündel, die den ganzen Raum erfüllen. Verschiedene Showprogramme oder ein statisch langsam drehender Effekt verzaubern die Gäste. Bei uns in weiß zu mieten, perfekt für Hochzeiten oder Motto-Partys.',
    detailDescription: `Mirror Ball / Saturn LED Effekt
Beeindruckender Lichteffekt angelehnt an Spiegelkugel
Angelehnt an eine Spiegelkugel bietet dieser beeindruckende Lichteffekt sich drehende Strahlenbündel, die den ganzen Raum erfüllen. Verschiedene Showprogramme oder ein statisch langsam drehender Effekt verzaubern die Gäste. Bei uns in weiß zu mieten, perfekt für Hochzeiten oder Motto-Partys.

Technische Daten:
Sich drehende Strahlenbündel
Verschiedene Showprogramme
Statisch langsam drehender Effekt
Farbe: Weiß
Optimal für Hochzeiten oder Motto-Partys`,
    images: ['/images/mirror-ball.webp'],
    pricePerUnit: 25,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Mirror Ball / Saturn LED' },
      { label: 'Features', value: 'Drehende Strahlenbündel' },
      { label: 'Programme', value: 'Verschiedene Showprogramme, statisch' },
      { label: 'Farbe', value: 'Weiß' },
      { label: 'Anwendung', value: 'Hochzeiten, Motto-Partys' },
    ],
  },
  {
    id: 'led-moving-head-spot-100w',
    name: 'LED Moving Head Spot 100W',
    description: 'Dank einer hochwertigen Optik holt der Briteq Meteor viel Lichtausbeute aus der reinweißen 100W COB LED. Neben verschiedenen Gobos (statisch und rotierend) und RGB Farbwechsel verfügt der Spot auch über ein sich drehendes 3-Fach-Prisma. Stand-Alone Modus und Soundsteuerung. Die volle Funktion entfaltet der Spot aber erst durch Ansteuerung via DMX.',
    detailDescription: `Moving Head LED
Immer einen kühlen Kopf bewahren - mit LED Moving Heads kein Problem.

Der BT-Meteor des belgischen Herstellers Briteq ist ein wahrer Hingucker. Die kraftvolle 100W LED wird durch die hochwertige Optik in idealerweise in Szene gesetzt. Helle, durchsetzungsfähige Farben und ruckelfreie Bewegungen zeichnen dieses Moving Head aus.`,
    images: ['/images/moving-head-spot.webp'],
    pricePerUnit: 30,
    priceOptions: [
      { label: 'Einzeln', price: 30 },
      { label: '2er Set (im Flightcase)', price: 50 },
    ],
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Moving Head LED' },
      { label: 'Modell', value: 'BT-Meteor (Briteq)' },
      { label: 'Spannungsversorgung', value: '100-240 V 50/60Hz' },
      { label: 'Leistungsaufnahme', value: '160 Watt' },
      { label: 'Pan/Tilt Movement', value: '540° / 270°' },
      { label: 'Leuchtmittel', value: '100 Watt weiße LED (9000K Farbtemperatur)' },
      { label: 'Abstrahlwinkel', value: '12° - 16°' },
      { label: 'Goborad', value: '6 rotierenden Gobos (austauschbar)' },
      { label: 'Farbrad', value: '8 Farben / weiß' },
      { label: 'Prisma', value: 'Rotierendes 3-Facetten Prisma' },
      { label: 'Programme', value: 'Automode und Sound-to-Light' },
      { label: 'DMX Kanäle', value: '5, 11 und 14-Kanal Betrieb' },
      { label: 'DMX Anschlüsse', value: '3pin-XLR male / female' },
      { label: 'Stromanschlüsse', value: 'Neutrik® PowerCON®' },
      { label: 'Abmessungen', value: '290 x 180 x 434 mm (Kopf in vertikaler Position)' },
      { label: 'Gewicht', value: '8,36 kg' },
    ],
  },
  {
    id: 'led-moving-head-beam-200w',
    name: 'LED Moving Head Beam 200W',
    description: 'Sehr lichtstarker Moving Head BEAM mit einer 200W Hochleistungs-LED. Für große Bühnen / Hallen / Outdoor geeignet. Erzeugt beeindruckende Beam-Effekte oder breite Strahlenbündel dank der rotierenden Prismen. Es lassen sich mehrere Spots auch Stand-Alone synchroniseren, steuerbar über DMX oder das eingebaute Mikrofon (Sound-to-Light).',
    detailDescription: `Moving Head BEAM
Power auf Reichweite - die gebündelten Strahlen "zersägen" den Nachthimmel

Mit den 200W starken LED Moving Heads Beam von JB Systems erzeugen Sie atemberaubende Lichtshows auf großen Bühnen, Hallen oder Outdoor. Ein farbiger LED Ring (AURA-Effekt) sorgt für zusätzliche Begeisterung.`,
    images: ['/images/moving-head-beam.webp'],
    pricePerUnit: 39,
    priceOptions: [
      { label: 'Einzeln', price: 39 },
      { label: '2er Set (im Flightcase)', price: 60 },
    ],
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Moving Head BEAM' },
      { label: 'Hersteller', value: 'JB Systems' },
      { label: 'Spannungsversorgung', value: '100-240 V 50/60Hz' },
      { label: 'Leistungsaufnahme', value: '285 Watt' },
      { label: 'Pan/Tilt Movement', value: '540° / 270°' },
      { label: 'Leuchtmittel', value: '200 Watt LED' },
      { label: 'Abstrahlwinkel', value: '2,8°' },
      { label: 'Helligkeit', value: 'bis zu 110.500 Lux auf 5m' },
      { label: 'AURA LEDs', value: '36 pixelgesteuerte RGB LEDs' },
      { label: 'Goborad', value: '13 Gobos' },
      { label: 'Farbrad', value: '14 Farben + Multicolor' },
      { label: 'Prismen', value: 'Rotierende 8-Facetten und 24-Facetten Prismen' },
      { label: 'Dimmer', value: '0-100%' },
      { label: 'Programme', value: 'Automode und Sound-to-Light' },
      { label: 'DMX Kanäle', value: '5, 23 und 27-Kanal Betrieb' },
      { label: 'DMX Anschlüsse', value: '3pin-XLR male / female' },
      { label: 'Stromanschlüsse', value: 'Neutrik® PowerCON®' },
      { label: 'Abmessungen', value: '330 x 245 x 453 mm (Kopf in vertikaler Position)' },
      { label: 'Gewicht', value: '14 kg' },
    ],
  },
  {
    id: 'led-moving-head-wash-7x40w',
    name: 'LED Moving Head WASH 7 x 40W',
    description: 'Dank 7 leistungsstarker 40W LEDs gehört dieser Washer zu den helleren seiner Klasse. Die vielfältigen Farbkombinationen und der motorisierte ZOOM machen diesen Moving Head zu einem ambitionierten Werkzeug für Bühnen-, Theater- und Live-Events aller Art.',
    detailDescription: `Moving Head Wash LED
Ein Multitalent und Leisetreter für Bühne, DJ und Event

Der Challenger Wash von JB Systems ist ein universell einsetzbarer, heller Washer, der dank eingebauter Automatikprogramme für DJs / Party ebenso geeignet ist, wie für anspruchsvolle Bühnenanwendungen.`,
    images: ['/images/challenger1-1920w.webp'],
    pricePerUnit: 39,
    priceOptions: [
      { label: 'Einzeln', price: 39 },
      { label: '2er Set (im Flightcase)', price: 60 },
    ],
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Moving Head Wash LED' },
      { label: 'Modell', value: 'Challenger Wash (JB Systems)' },
      { label: 'Spannungsversorgung', value: 'AC 100 - 240 V, 50/60 Hz' },
      { label: 'Stromanschluss', value: 'Neutrik® PowerCON® - 16 A in/out' },
      { label: 'DMX Anschlüsse', value: '3pin-XLR & 5pin-XLR male / female' },
      { label: 'Abstrahlwinkel', value: '5°-60°' },
      { label: 'Leuchtmittel', value: '7 x 40 RGBW' },
      { label: 'Lichtstärke', value: 'Lux 545 (@5m, beam 60°) - 14335 (@5m, beam 5°)' },
      { label: 'DMX Modi', value: '5 / 15 oder 43 Kanäle' },
      { label: 'Abmessungen', value: '417 x 292 x 244 mm' },
      { label: 'Gewicht', value: '10 Kg' },
    ],
  },
  {
    id: 'jb-spyder-show-pattern-laser',
    name: 'JB Spyder Show- / Pattern Laser',
    description: 'Der Spyder ist ein leistungsstarker RGB Laser, der verschiedene Muster (Patterns) und Punktprojektionen mit Mehrfachprismen realisieren kann. Dadurch wird ein raumfüllender Lasereffekt erzielt, der auch Stand-Alone und soundgesteuert ablaufen kann. Dieser Laser gehört zur Schutzklasse 3B und darf nur unter Einhaltung von Sicherheitsabstand etc. genutzt werden. Sie erhalten von uns eine entsprechende Einweisung.',
    detailDescription: `RGB Showlaser von JB System
Heller und dynamischer Lasereffekt bringt Bewegung auf den Dancefloor

Dieser kompakte Showlaser liefert beeindruckende raumfüllende Lasereffekte auf Tanzflächen, in Partyräumen, kleineren Clubs und mehr. Optimal für den mobilen DJ verfügt der Effekt über einen Sound-to-Light Modus mit eingebautem Mikrofon.

WICHTIG - Sicherheitshinweis:
Dieser Laser gehört zur Schutzklasse 3B und darf nur unter Einhaltung von Sicherheitsabstand etc. genutzt werden. Sie erhalten von uns eine entsprechende Einweisung.`,
    images: ['/images/spyder1-1920w.webp'],
    pricePerUnit: 25,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'RGB Showlaser' },
      { label: 'Hersteller', value: 'JB System' },
      { label: 'Gesamtanschlusswert', value: '30 W' },
      { label: 'Schutzart', value: 'IP20' },
      { label: 'Stromanschluss', value: '230V / 50/60 Hz' },
      { label: 'Laserklasse', value: 'Klasse 3B' },
      { label: 'Laserfarbe', value: 'R/G/B' },
      { label: 'Leistung Gesamt', value: '400 mW (Rot 110 mW + Grün 50 mW + Blau 160 mW)' },
      { label: 'Lasermodul Rot (R)', value: '110 mW 650nm' },
      { label: 'Lasermodul Grün (G)', value: '50 mW 532nm' },
      { label: 'Lasermodul Blau (B)', value: '160 mW 445nm' },
      { label: 'Ansteuerung', value: 'Stand-alone; Musiksteuerung über Mikrofon; DMX' },
      { label: 'Gehäusefarbe', value: 'Schwarz' },
      { label: 'Maße', value: '25,5 cm * 24,5 cm * 10,0 cm (L*B*H)' },
      { label: 'Gewicht', value: '1,90 kg' },
    ],
  },
  {
    id: '2000mw-diodenlaser-showlaser',
    name: '2.000 mW Diodenlaser Showlaser',
    description: 'Für eine professionell anmutende Lasershow ist dieser reine Diodenlaser mit einem Output von 2 Watt die perfekte Wahl. Die Ansteuerung kann mit entsprechender Software oder einem einfachen DMX Controller im 5-Kanal-Modus erfolgen. Damit können sie die eingespeicherten Show-Programme abrufen. Dieser Laser gehört zur Schutzklasse 4 und darf nur unter Einhaltung von Sicherheitsabstand etc. genutzt werden. Sie erhalten von uns eine entsprechende, fachgerechte Einweisung.',
    detailDescription: `RGB Dioden Showlaser 2 Watt
Für atemberaubende Laser-Shows mit dem "WOW" Effekt

Dieser professionelle 2 Watt Diodenlaser von Laserworld liefert erstklassige Laser-Qualität in einem kompakten Gerät. Damit erstellen Sie individuelle Lasershows (Software nötig) oder nutzen Sie die Automatikprogramme für effektvolle Licht-Shows.

WICHTIG - Sicherheitshinweis:
Dieser Laser gehört zur Schutzklasse 4 und darf nur unter Aufsicht oder nach vorheriger Unterweisung durch einen Laserschutzbeauftragten betrieben werden. Sie erhalten von uns eine entsprechende, fachgerechte Einweisung.`,
    images: ['/images/ds2000_1-1920w.webp'],
    pricePerUnit: 50,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'RGB Dioden Showlaser' },
      { label: 'Hersteller', value: 'Laserworld' },
      { label: 'Gesamtanschlusswert', value: '45 W' },
      { label: 'Schutzart', value: 'IP4X' },
      { label: 'Stromanschluss', value: 'Stromeinspeisung über P-Con (blau), Einbauversion Stromanschlusskabel mit Schutzkontaktstecker (mitgeliefert)' },
      { label: 'Stromausgang', value: '1 x PowerCON (grau)' },
      { label: 'Laserklasse', value: '4' },
      { label: 'Laserfarbe', value: 'R/G/B' },
      { label: 'Leistung Gesamt', value: '2W (Rot 500mW + Grün 500mW + Blau 1.400mW)' },
      { label: 'Lasermodul Rot (R)', value: '500 mW 638nm' },
      { label: 'Lasermodul Grün (G)', value: '500 mW 520nm' },
      { label: 'Lasermodul Blau (B)', value: '1400 mW 450nm' },
      { label: 'Ansteuerung', value: 'ILDA; DMX; ArtNet; Master/Slave Funktion; Stand-alone' },
      { label: 'Gehäusefarbe', value: 'Schwarz' },
      { label: 'Maße', value: 'Länge: 21 cm, Breite: 17 cm, Höhe: 14,5 cm' },
      { label: 'Gewicht', value: '5,20 kg' },
    ],
  },
  {
    id: 'led-wasser-projektionseffekt',
    name: 'LED Wasser Projektionseffekt',
    description: 'Der Wassereffekt verfügt über eine sehr helle 40W LED Lichtquelle und projiziert einen fließenden, einer Wasseroberfläche ähnelnden Schimmer an Wände und Decken. Ein toller Effekt für Bars und Clubs oder den Party-Keller. Wir empfehlen eine Abstand von mindestens 4 Metern zur bestrahlenden Fläche um eine großflächige Projektion zu erzielen.',
    detailDescription: `LED Wasser Projektionseffekt
Fließender Wassereffekt für Wände und Decken
Der Wassereffekt verfügt über eine sehr helle 40W LED Lichtquelle und projiziert einen fließenden, einer Wasseroberfläche ähnelnden Schimmer an Wände und Decken. Ein toller Effekt für Bars und Clubs oder den Party-Keller. Wir empfehlen eine Abstand von mindestens 4 Metern zur bestrahlenden Fläche um eine großflächige Projektion zu erzielen.

Technische Daten:
Sehr helle 40W LED Lichtquelle
Projiziert fließenden, wasseroberflächenähnlichen Schimmer
Projektion an Wände und Decken
Einsatz: Bars, Clubs, Party-Keller
Empfohlener Abstand: mindestens 4 Meter zur bestrahlenden Fläche`,
    images: ['/images/wf40_1-1920w.webp'],
    pricePerUnit: 30,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Wasser Projektion' },
      { label: 'Leistung', value: '40W LED' },
      { label: 'Effekt', value: 'Fließender, wasseroberflächenähnlicher Schimmer' },
      { label: 'Anwendung', value: 'Bars, Clubs, Party-Keller' },
      { label: 'Projektion', value: 'Wände und Decken' },
      { label: 'Empfohlener Abstand', value: 'mindestens 4 Meter' },
    ],
  },
  {
    id: '50cm-spiegelkugel-set',
    name: '50cm Spiegelkugel SET',
    description: 'Der wohl bekannteste aller Diskoeffekte darf auch bei uns nicht fehlen. Im Set mit Motor und einem leistungsstarken BEAM Spot LED vermieten wir diese klassische Spiegelkugel mit Durchmesser 50cm. Zur Aufhängung nötige Anschlagmittel erhalten Sie auf Anfrage.',
    detailDescription: `50cm Spiegelkugel SET
Klassischer Diskoeffekt - Der wohl bekannteste aller Diskoeffekte
Der wohl bekannteste aller Diskoeffekte darf auch bei uns nicht fehlen. Im Set mit Motor und einem leistungsstarken BEAM Spot LED vermieten wir diese klassische Spiegelkugel mit Durchmesser 50cm. Zur Aufhängung nötige Anschlagmittel erhalten Sie auf Anfrage.

Technische Daten:
Spiegelkugel mit Durchmesser 50cm
Motor für Rotation
Leistungsstarker BEAM Spot LED
Aufhängung: Anschlagmittel auf Anfrage`,
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 39,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Spiegelkugel Set' },
      { label: 'Größe', value: '50cm Durchmesser' },
      { label: 'Inhalt', value: 'Kugel + Motor + BEAM Spot LED' },
      { label: 'Aufhängung', value: 'Anschlagmittel auf Anfrage' },
    ],
  },


  // Nebelmaschinen & Bühneneffekte
  {
    id: 'party-nebelmaschine-800w',
    name: 'Party Nebelmaschine 800W',
    description: 'Kompakte Nebelmaschine mit 800W Heizelement und einfacher ON / OFF Fernbedienung. Optimal für Hobby / Partylkeller, kleine Tanzflächen, Vereinsheim. Bringt die Strahlen ihrer Lichteffekt toll zur Geltung. Eine Tankfüllung ist im Mietpreis enthalten.',
    detailDescription: `Nebelmaschine Antari Z-800 MKII
Der kompakte Nebler für Hobbykeller und Tanzfläche

Lichteffekte kommen erst durch eine Nebelmaschine richtig zur Geltung. Unsere kleine Partynebelmaschine sorgt mit 800W Leistung und kurzer Aufheizzeit für Nebel auf Tanzfläche und in kleinen Räumen.

Inkl. 1 Tankfüllung
Duftstoffe (z.B. Limette oder Kokos) auf Anfrage`,
    images: ['/images/antariz800-1920w.webp'],
    pricePerUnit: 20,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Modell', value: 'Antari Z-800 MKII' },
      { label: 'Typ', value: 'Party Nebelmaschine' },
      { label: 'Steuerung', value: 'Fernbedienung oder am Gerät selbst' },
      { label: 'Heizleistung', value: '800 W' },
      { label: 'Aufheizzeit', value: 'ca. 3 Minuten' },
      { label: 'Tankinhalt', value: '0,8 Liter' },
      { label: 'Ausstoßweite', value: 'ca. 5m' },
      { label: 'Nebelmenge', value: 'ca. 300 m3/Min.' },
      { label: 'Nebelfluid', value: 'Auf Wasserbasis' },
      { label: 'Gewicht', value: '5,8 kg' },
      { label: 'Inklusive', value: '1 Tankfüllung' },
      { label: 'Zusatz', value: 'Duftstoffe (z.B. Limette oder Kokos) auf Anfrage' },
    ],
  },
  {
    id: 'nebelmaschine-1500w',
    name: 'Nebelmaschine 1.500W',
    description: 'Leistungsstarke Nebelmaschine mit bis zu 8m Ausstoßweite geeignet für Bühnen, Dancefloors, Rauchsimulation / Dichtigkeitsprüfungen. Mit Volumen- / Timercontroller. Steuerbar auch per DMX. Eine Tankfüllung ist im Mietpreis enthalten.',
    detailDescription: `Nebelmaschine Antari Z-1200
Discofeeling im Partykeller und Lichtzauber auf der Bühne

Die professionelle Nebelmaschine mit 1.200W Heizleistung sorgt für kräftigen Nebelausstoß auf der Tanzfläche, im Partykeller oder auf der Bühne.

Inkl. 1 Tankfüllung
Duftstoffe (z.B. Limette oder Kokos) auf Anfrage`,
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 30,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Modell', value: 'Antari Z-1200' },
      { label: 'Typ', value: 'Nebelmaschine' },
      { label: 'Steuerung', value: 'Fernbedienung (Ausstoßmenge und Intervall einstellbar) oder DMX' },
      { label: 'Heizleistung', value: '1.200 W' },
      { label: 'Aufheizzeit', value: '5 Minuten' },
      { label: 'Tankinhalt', value: '2,5 Liter' },
      { label: 'Ausstoßweite', value: '7m' },
      { label: 'Nebelmenge', value: 'ca. 600 m3/Min.' },
      { label: 'Nebelfluid', value: 'Auf Wasserbasis' },
      { label: 'Gewicht', value: '11,5 kg' },
      { label: 'Inklusive', value: '1 Tankfüllung' },
      { label: 'Zusatz', value: 'Duftstoffe (z.B. Limette oder Kokos) auf Anfrage' },
    ],
  },
  {
    id: 'vertikal-nebelmaschine-spray-fogger',
    name: 'Vertikal Nebelmaschine / Spray Fogger',
    description: 'Sehr leistungsstarke 3kW Nebelmaschine mit bis zu 15m Ausstoßhöhe und farbigen LEDs für einen spektakulären Bühneneffekt, wie man ihn von sehr teuren CO2 Geräten her kennt. Mit Funkfernbedienung. Steuerbar auch per DMX. Eine Tankfüllung mit Extrem Fluid ist im Mietpreis enthalten.',
    detailDescription: `Vertikal Nebelmaschine FOG 3.0
Beeindruckender Nebeleffekt für Bühne und Outdoor

Ein 3kW Hochleistungsgerät für einen CO2-artigen Nebeleffekt verleiht jeder Bühnenshow das gewisse etwas.

Inkl. 1 Tankfüllung mit Spezialfluid`,
    images: ['/images/WhatsApp-Image-2025-07-02-at-13.46.33-1920w.webp'],
    pricePerUnit: 40,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Modell', value: 'FOG 3.0' },
      { label: 'Typ', value: 'Vertikal Nebelmaschine' },
      { label: 'Steuerung', value: 'Funk-Fernbedienung oder DMX (6 Kanäle)' },
      { label: 'Heizleistung', value: '3.100 W' },
      { label: 'Aufheizzeit', value: '9 Minuten' },
      { label: 'Tankinhalt', value: '3,8 Liter' },
      { label: 'Ausstoßhöhe', value: '12-15m' },
      { label: 'Features', value: 'Anordnung aus mehrfarbigen LEDs für einen beeindruckenden Show-Effekt' },
      { label: 'Nebelfluid', value: 'Auf Wasserbasis' },
      { label: 'Gewicht', value: '18 kg' },
      { label: 'Inklusive', value: '1 Tankfüllung mit Spezialfluid' },
    ],
  },
  {
    id: 'hazer',
    name: 'Hazer',
    description: 'Anders als Nebelmaschinen erzeugt ein Hazer einen feinen, raumgreifenden Dunst. Dieser setzt Strahleneffekte wie Laser, Derby oder Moving Heads perfekt in Szene ohne aber den Raum einzunebeln. Die Steuerung erfolgt wahlweise per Funkfernbedienung oder DMX. Eine Tankfüllung ist im Mietpreis enthalten.',
    detailDescription: `HAZER - Dunstnebelgerät
Für effektvolle Lightshows und Laserprojektionen unverzichtbar

Erzeugt feinen, gleichmäßigen und lichtdurchlässigen Dunst ohne Nebelwolken und bringt damit Lichteffekte zur Geltung.

Inkl. 1 Tankfüllung`,
    images: ['/images/hz350-1920w.webp'],
    pricePerUnit: 40,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'HAZER - Dunstnebelgerät' },
      { label: 'Steuerung', value: 'Funk-Fernbedienung oder DMX' },
      { label: 'Aufheizzeit', value: 'Kurze Aufheizzeit' },
      { label: 'Tankinhalt', value: '2,8 Liter' },
      { label: 'Ausstoßmenge', value: 'ca. 70 m3/Min.' },
      { label: 'Spezialfluid', value: 'Auf Ölbasis' },
      { label: 'Gewicht', value: '14 kg' },
      { label: 'Inklusive', value: '1 Tankfüllung' },
    ],
  },
  {
    id: 'bodennebelmaschine',
    name: 'Bodennebelmaschine',
    description: 'Dieses Nebelgerät erzeugt einen bodentiefen Nebelschleier ganz ohne gefährliches Trockeneis. Durch Ultraschall Zerstäubung wird der Nebel mit Wasser angereichert und somit schwerer aus Luft. Optimal für Hochzeiten, Theater / Musical oder die Halloween Party. Eine Tankfüllung mit Spezialfluid ist im Mietpreis enthalten. Sie benötigen 5l destilliertes Wasser.',
    detailDescription: `Low Fog - Bodennebelmaschine
Dichter Bodennebel für Tanzfläche, Bühne und Video.

Vergessen Sie aufwändiges Einfüllen von Eiswürfeln oder das Hantieren mit gefährlichem Trockeneis. Unsere Low Fog Geräte erzeugen Bodennebel mit destilliertem Wasser.

Inkl. 1 Tankfüllung Nebelfluid
Destilliertes Wasser muss von Ihnen eingefüllt und nach Gebrauch entleert werden

WICHTIG: Bitte befolgen Sie die Aufbau-Anleitung und leeren Sie das Gerät sorgfältig nach Benutzung!`,
    images: ['/images/wlf1-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'Low Fog - Bodennebelmaschine' },
      { label: 'Erzeugt', value: 'Bodennebel aus destilliertem Wasser und Fluid' },
      { label: 'Aufheizzeit', value: 'Nur ca. 4 Minuten' },
      { label: 'Nebelmenge', value: 'ca. 250 m³ pro Minute' },
      { label: 'Spezialfluid', value: 'Mit Spezialfluid: Nebel löst sich auf bevor er nach oben steigt' },
      { label: 'Gewicht', value: '38 kg' },
      { label: 'Inklusive', value: '1 Tankfüllung Nebelfluid, Fernbedienung' },
      { label: 'Benötigt', value: 'Destilliertes Wasser (muss von Ihnen eingefüllt und nach Gebrauch entleert werden)' },
      { label: 'Hinweis', value: 'WICHTIG: Bitte befolgen Sie die Aufbau-Anleitung und leeren Sie das Gerät sorgfältig nach Benutzung!' },
    ],
  },
  {
    id: 'kaltfunkenmaschine-cold-spark',
    name: 'Kaltfunkenmaschine "Cold Spark"',
    description: 'Dieser sehr beliebte Fontäneneffekt erfreut sich bei Hochzeiten aber auch Bühnenshows aller Art größter Beliebtheit. Denn durch ein spezielles Verfahren entsteht hier keine große Hitze und damit keine Feuergefahr. Die Höhe der Fontäne lässt sich zwischen 2-5m einstellen, der Effekt ist für Drinnen und Draußen geeignet. Das Spezialgranulat können Sie bei uns erwerben. Preis pro Beutel (200gr) = 39,- € reicht für ca. 8 min Fontäne.',
    detailDescription: `Kaltfunkenmaschine "Cold Spark"
Der "Must Have" Effekt für effektvolles Auftreten.

Ein Fontäneneffekt ohne Brandgefahr? Gibt es. Dank Spezialgranulat und einer patentierten Technik wird auch ihr Auftritt perfekt inszeniert - mit dem gewissen "Sparkeffekt"

Mietpreis: 50,- € / Stck

Das Spezialgranulat können Sie bei uns erwerben. Pro Beutel (200gr) 39,- €, reicht für ca. 8 Minuten Fontäne.`,
    images: ['/images/coldspark3-1920w.webp'],
    pricePerUnit: 50,
    priceOptions: [
      { label: 'Einzeln', price: 50 },
      { label: 'Paar', price: 80 },
    ],
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'Kaltfunkenmaschine "Cold Spark"' },
      { label: 'Steuerung', value: 'Funk-Fernbedienung oder DMX' },
      { label: 'Leistungsaufnahme', value: '700 W' },
      { label: 'Aufheizzeit', value: 'ca. 3 Minuten' },
      { label: 'Tankinhalt für Granulat', value: '180g reicht für 5-7 Minuten Betriebsdauer' },
      { label: 'Ausstoßhöhe', value: '2-5m einstellbar' },
      { label: 'Verfahren', value: 'Patentiertes Kaltfunkenverfahren' },
      { label: 'Gewicht', value: '7 kg' },
      { label: 'Spezialgranulat', value: 'Bei uns erhältlich, 39,- € pro Beutel (200gr, ca. 8 min Fontäne)' },
    ],
  },

  // Medien & Konferenztechnik
  {
    id: 'lcd-dlp-beamer',
    name: 'LCD DLP Beamer',
    description: 'Universeller Beamer mit einer herkömmlichen Lampe, aber enormer Helligkeit. Präsentationen, Videos und Bilder sind auch tagsüber (in geschlossenen Räumen) gut sichtbar.',
    detailDescription: `LCD DLP Beamer
Universeller Beamer mit enormer Helligkeit
Universeller Beamer mit einer herkömmlichen Lampe, aber enormer Helligkeit. Präsentationen, Videos und Bilder sind auch tagsüber (in geschlossenen Räumen) gut sichtbar.

Merkmale:
4000 Ansi-Lumen max. Helligkeit
DLP Beamer
20.000:1 Kontrastverhältnis
4:3 oder 16:9 Bildformate
HD Auflösung (1280x720)
2,8 kg Gewicht`,
    images: ['/images/acer1-1920w (1).webp'],
    pricePerUnit: 30,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: 'DLP Beamer' },
      { label: 'Helligkeit', value: '4000 Ansi-Lumen max.' },
      { label: 'Kontrastverhältnis', value: '20.000:1' },
      { label: 'Bildformate', value: '4:3 oder 16:9' },
      { label: 'Auflösung', value: 'HD (1280x720)' },
      { label: 'Gewicht', value: '2,8 kg' },
    ],
  },
  {
    id: 'laser-dlp-beamer',
    name: 'Laser DLP Beamer',
    description: 'Dieser moderne und kompakte Tageslicht-Projektor eignet sich für universelle Anwendungen bis zu einer Bildbreite von 3 Metern in Full-HD Auflösung. Auch bei nicht abgedunkelter Umgebung in Innenräumen, kann der Beamer durch die helle Laserlichtquelle mit DLP Technologie überzeugen.',
    detailDescription: `Laser DLP Beamer
Moderner und kompakter Tageslicht-Projektor
Dieser moderne und kompakte Tageslicht-Projektor eignet sich für universelle Anwendungen bis zu einer Bildbreite von 3 Metern in Full-HD Auflösung.

Auch bei nicht abgedunkelter Umgebung in Innenräumen, kann der Beamer durch die helle Laserlichtquelle mit DLP Technologie überzeugen.

Merkmale:
4500 Ansi-Lumen max. Helligkeit
Laser DLP Beamer
300.000:1 Kontrastverhältnis
4:3 oder 16:9 Bildformate
3D aktiv
Full-HD Auflösung
5,5 kg Gewicht`,
    images: ['/images/beamer1-1920w.webp'],
    pricePerUnit: 50,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: 'Laser DLP Beamer' },
      { label: 'Helligkeit', value: '4500 Ansi-Lumen max.' },
      { label: 'Kontrastverhältnis', value: '300.000:1' },
      { label: 'Bildformate', value: '4:3 oder 16:9' },
      { label: 'Features', value: '3D aktiv' },
      { label: 'Auflösung', value: 'Full-HD' },
      { label: 'Bildbreite', value: 'bis zu 3 Metern' },
      { label: 'Gewicht', value: '5,5 kg' },
    ],
  },
  {
    id: 'laser-dlp-beamer-pro',
    name: 'Laser DLP Beamer Pro',
    description: 'Bei diesem Panasonic Projektor handelt es sich um einen fortschrittlichen und sehr hellen Laser-LCD Beamer. Trotz der enormen Helligkeit ist er kompakt und leicht.',
    detailDescription: `Laser DLP Beamer Pro - Panasonic
Fortschrittlicher und sehr heller Laser-LCD Beamer
Bei diesem Panasonic Projektor handelt es sich um einen fortschrittlichen und sehr hellen Laser-LCD Beamer. Trotz der enormen Helligkeit ist er kompakt und leicht.

Merkmale:
6.200 Ansi-Lumen 
Laser Lichtquelle
1,6 Facher optischer ZOOM
Lensshift für verzerrrungsfreie Projektion
3.000.000 : 1 Kontrastverhältnis
WUXGA Auflösung (1.920 x 1.200 Bildpunkte)
Bildformat 16:10
nur 7 kg Gewicht`,
    images: ['/images/panasonic1-1920w.webp'],
    pricePerUnit: 100,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Hersteller', value: 'Panasonic' },
      { label: 'Technologie', value: 'Laser-LCD Beamer' },
      { label: 'Helligkeit', value: '6.200 Ansi-Lumen' },
      { label: 'Lichtquelle', value: 'Laser' },
      { label: 'Zoom', value: '1,6 Facher optischer ZOOM' },
      { label: 'Lensshift', value: 'Für verzerrungsfreie Projektion' },
      { label: 'Kontrastverhältnis', value: '3.000.000 : 1' },
      { label: 'Auflösung', value: 'WUXGA (1.920 x 1.200 Bildpunkte)' },
      { label: 'Bildformat', value: '16:10' },
      { label: 'Gewicht', value: '7 kg' },
    ],
  },
  {
    id: '4k-laser-dlp-beamer',
    name: '4K Laser DLP Beamer',
    description: 'Dieser fortschrittliche 1-Chip DLP Beamer mit Laser Lichtquelle überzeugt durch eine amtliche Lichtleistung und 4K (UHD) Auflösung. Der weite Zoom Ratio von 1.46-2.93:1 sorgt für variable Positionierung.',
    detailDescription: `4K Laser DLP Beamer
Fortschrittlicher 1-Chip DLP Beamer mit Laser Lichtquelle
Dieser fortschrittliche 1-Chip DLP Beamer mit Laser Lichtquelle überzeugt durch eine amtliche Lichtleistung und 4K (UHD) Auflösung. Der weite Zoom Ratio von 1.46-2.93:1 sorgt für variable Positionierung.

Merkmale:
5.200 Ansi-Lumen 
Laser Lichtquelle
24/7 Dauerbetriebstauglich
2 Facher optischer ZOOM
Lensshift für verzerrungsfreie Projektion
20.000 : 1 Kontrastverhältnis
UHD Auflösung (3.840 x 2.160 Bildpunkte)
Bildformat 16:9
16 kg Gewicht`,
    images: ['/images/frq50wangledrhigh-1920w.webp'],
    pricePerUnit: 150,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: '1-Chip DLP Beamer mit Laser' },
      { label: 'Helligkeit', value: '5.200 Ansi-Lumen' },
      { label: 'Lichtquelle', value: 'Laser' },
      { label: 'Dauerbetrieb', value: '24/7 tauglich' },
      { label: 'Zoom', value: '2 Facher optischer ZOOM (Ratio 1.46-2.93:1)' },
      { label: 'Lensshift', value: 'Für verzerrungsfreie Projektion' },
      { label: 'Kontrastverhältnis', value: '20.000 : 1' },
      { label: 'Auflösung', value: 'UHD 4K (3.840 x 2.160 Bildpunkte)' },
      { label: 'Bildformat', value: '16:9' },
      { label: 'Gewicht', value: '16 kg' },
    ],
  },
  {
    id: '4k-signature-display-65zoll',
    name: '4K Signature Display - 65 Zoll',
    description: 'Unsere 4K / UHD Mediendisplays sind für professionelle Anwendungen (24/7) geeignet. Ob für Konferenz, TV/Live-Übertragungen oder als Werbedisplay im Quer- oder Hochformat. Mit dem höhenverstellbaren Standfuß (optional mit Rollen), lässt sich dieses Display universell einsetzen.',
    detailDescription: `4K Signature Display - 65 Zoll
Professionelles 4K / UHD Mediendisplay für 24/7 Einsatz
Unsere 4K / UHD Mediendisplays sind für professionelle Anwendungen (24/7) geeignet. Ob für Konferenz, TV/Live-Übertragungen oder als Werbedisplay im Quer- oder Hochformat. Mit dem höhenverstellbaren Standfuß (optional mit Rollen), lässt sich dieses Display universell einsetzen.

Mietpreis: 200,- € (inkl. höhenverstellbarem Stativ)`,
    images: ['/images/displayportrait-1920w.webp'],
    pricePerUnit: 200,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Größe', value: '65 Zoll' },
      { label: 'Auflösung', value: '4K / UHD' },
      { label: 'Typ', value: 'Signature Display' },
      { label: 'Einsatz', value: '24/7 professionelle Anwendungen' },
      { label: 'Anwendung', value: 'Konferenz, TV/Live-Übertragungen, Werbedisplay' },
      { label: 'Ausrichtung', value: 'Quer- oder Hochformat' },
      { label: 'Zubehör', value: 'Höhenverstellbarer Standfuß (optional mit Rollen)' },
    ],
  },
  {
    id: 'speech-100-konferenzsystem',
    name: 'Speech 100 - Konferenzsystem',
    description: 'Fortschrittliche Tischmikrofone / Sprechstellen für Konferenzen mit mehreren Teilnehmern. Bis zu 50 Sprechstellen können mit einer Steuereinheit betrieben werden. Die Verkabelung erfolgt seriell via CAT5 Netzwerkkabel. Neben der Sprechfunktion, können die Geräte auch für Abstimmungen/Votings genutzt werden. Preis auf Anfrage.',
    detailDescription: `Speech 100 - Konferenzsystem
Fortschrittliche Tischmikrofone / Sprechstellen für Konferenzen
Fortschrittliche Tischmikrofone / Sprechstellen für Konferenzen mit mehreren Teilnehmern. Bis zu 50 Sprechstellen können mit einer Steuereinheit betrieben werden. Die Verkabelung erfolgt seriell via CAT5 Netzwerkkabel. Neben der Sprechfunktion, können die Geräte auch für Abstimmungen/Votings genutzt werden.

Preis auf Anfrage`,
    images: ['/images/speech100-1920w (1).webp'],
    pricePerUnit: 9999,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'Konferenzsystem' },
      { label: 'Modell', value: 'Speech 100' },
      { label: 'Komponenten', value: 'Tischmikrofone / Sprechstellen' },
      { label: 'Kapazität', value: 'Bis zu 50 Sprechstellen pro Steuereinheit' },
      { label: 'Verkabelung', value: 'Seriell via CAT5 Netzwerkkabel' },
      { label: 'Funktionen', value: 'Sprechfunktion, Abstimmungen/Votings' },
      { label: 'Anwendung', value: 'Konferenzen mit mehreren Teilnehmern' },
      { label: 'Preis', value: 'Auf Anfrage' },
    ],
  },
  {
    id: 'leinwand-projection-screen-4m',
    name: 'Leinwand / Projection Screen 4m',
    description: 'Mobile Rahmenleinwand mit einer sichtbaren Bilddiagonale von 188 Zoll im Bildformat 16:10. Mit 2 Personen ohne Werkzeug im Handumdrehen aufzubauen.',
    detailDescription: `Leinwand / Projection Screen 4m

Mobile Rahmenleinwand mit einer sichtbaren Bilddiagonale von 188 Zoll im Bildformat 16:10. Mit 2 Personen ohne Werkzeug im Handumdrehen aufzubauen.

Merkmale:

Projektionsfläche 400 x 258 cm (sichtbares Bild)

Frontprojektion

Gainfaktor 1,2

Faltbarer Aluminiumrahmen

Transportgewicht ca. 40kg

verstellbare Höhe

inkl. Flighcase

Mietpreis: 99,- €`,
    images: ['/images/leinwannd4m.webp'],
    pricePerUnit: 99,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Projektionsfläche', value: '400 x 258 cm (sichtbares Bild)' },
      { label: 'Bilddiagonale', value: '188 Zoll' },
      { label: 'Bildformat', value: '16:10' },
      { label: 'Projektion', value: 'Frontprojektion' },
      { label: 'Gainfaktor', value: '1,2' },
      { label: 'Rahmen', value: 'Faltbarer Aluminiumrahmen' },
      { label: 'Transportgewicht', value: 'ca. 40kg' },
      { label: 'Höhe', value: 'verstellbar' },
      { label: 'Zubehör', value: 'inkl. Flighcase' },
    ],
  },
  {
    id: 'leinwand-projection-screen-3m',
    name: 'Leinwand / Projection Screen 3m',
    description: 'Mobile Rahmenleinwand mit einer sichtbaren Bilddiagonale von 143 Zoll im Bildformat 16:10. Mit 2 Personen ohne Werkzeug im Handumdrehen aufzubauen.',
    detailDescription: `Leinwand / Projection Screen 3m

Mobile Rahmenleinwand mit einer sichtbaren Bilddiagonale von 143 Zoll im Bildformat 16:10. Mit 2 Personen ohne Werkzeug im Handumdrehen aufzubauen.

Merkmale:

Projektionsfläche 300 x 188 cm (sichtbares Bild)

Frontprojektion

Gainfaktor 1,2

Faltbarer Aluminiumrahmen

Transportgewicht ca. 30kg

verstellbare Höhe

inkl. Flightcase

Mietpreis: 50,- €`,
    images: ['/images/leinwand3m.webp'],
    pricePerUnit: 50,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Projektionsfläche', value: '300 x 188 cm (sichtbares Bild)' },
      { label: 'Bilddiagonale', value: '143 Zoll' },
      { label: 'Bildformat', value: '16:10' },
      { label: 'Projektion', value: 'Frontprojektion' },
      { label: 'Gainfaktor', value: '1,2' },
      { label: 'Rahmen', value: 'Faltbarer Aluminiumrahmen' },
      { label: 'Transportgewicht', value: 'ca. 30kg' },
      { label: 'Höhe', value: 'verstellbar' },
      { label: 'Zubehör', value: 'inkl. Flightcase' },
    ],
  },
  {
    id: 'leinwand-projection-screen-2m',
    name: 'Leinwand / Projection Screen 2m',
    description: 'Standard Leinwand im Format 4:3 mit Stativ. Perfekt für Diashows und Videopräsentationen.',
    detailDescription: `Leinwand / Projection Screen 2m

Standard Leinwand im Format 4:3 mit Stativ. Perfekt für Diashows und Videopräsentationen.

Merkmale:

Projektionsfläche ca. 2m x 1,8m

Gainfaktor 1,2

Dreibeinstativ

Höhe einstellbar

Einfacher und schneller Aufbau

Mietpreis: 25,- €`,
    images: ['/images/leinwand_2m.webp'],
    pricePerUnit: 25,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Projektionsfläche', value: 'ca. 2m x 1,8m' },
      { label: 'Bildformat', value: '4:3' },
      { label: 'Gainfaktor', value: '1,2' },
      { label: 'Stativ', value: 'Dreibeinstativ' },
      { label: 'Höhe', value: 'einstellbar' },
      { label: 'Aufbau', value: 'Einfacher und schneller Aufbau' },
    ],
  },
  {
    id: 'stativ-projektor-laptop',
    name: 'Stativ für Projektor / Laptop',
    description: 'Stabiles Stativ für einen Beamer oder Laptop. Neigungswinkel und Höhe verstellbar. Rutschfeste Auflage.',
    detailDescription: `Stativ für Projektor / Laptop

Stabiles Stativ für einen Beamer oder Laptop. Neigungswinkel und Höhe verstellbar. Rutschfeste Auflage.

Mietpreis: 5,- €`,
    images: ['/images/beamerstand.webp'],
    pricePerUnit: 5,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'Stativ' },
      { label: 'Anwendung', value: 'Beamer / Laptop' },
      { label: 'Höhe', value: 'Verstellbar' },
      { label: 'Neigungswinkel', value: 'Verstellbar' },
      { label: 'Auflage', value: 'Rutschfeste Auflage' },
    ],
  },
  {
    id: 'pro-av-mixer',
    name: 'Pro AV Mixer',
    description: 'Vielseitiger, professionaller A/V Mischpult für Streaming, Konferenz, Contentproduction, u.v.m.',
    detailDescription: `Pro AV Mixer

Vielseitiger, professionaller A/V Mischpult für Streaming, Konferenz, Contentproduction, u.v.m.

Merkmale:

3 Video Eingänge (Multiformat) HDMI

Monitor - und Mix Ausgang (HDMI)

USB 3.0 für Streaming direkt zum PC

3 Audio-Eingänge mit Auto-Mix

Automatisierte Übergänge, Split Screen, PiP

Video Switcher

Mietpreis: 50,- €`,
    images: ['/images/pro-av-mixer.webp'],
    pricePerUnit: 50,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'A/V Mischpult' },
      { label: 'Video Eingänge', value: '3 Video Eingänge (Multiformat) HDMI' },
      { label: 'Video Ausgänge', value: 'Monitor - und Mix Ausgang (HDMI)' },
      { label: 'USB', value: 'USB 3.0 für Streaming direkt zum PC' },
      { label: 'Audio Eingänge', value: '3 Audio-Eingänge mit Auto-Mix' },
      { label: 'Funktionen', value: 'Automatisierte Übergänge, Split Screen, PiP' },
      { label: 'Video Switcher', value: 'Ja' },
    ],
  },
  {
    id: 'wireless-hdmi-funk-set',
    name: 'Wireless HDMI Funk-Set',
    description: 'Mit dem kabellosem HDMI Funkset WHD30M - 4K von celexon können Sie Bild und Ton ohne lästige Verkabelung vom Abspielgerät auf Ihren Projektor oder Display übertragen.',
    detailDescription: `Wireless HDMI Funk-Set

Mit dem kabellosem HDMI Funkset WHD30M - 4K von celexon können Sie Bild und Ton ohne lästige Verkabelung vom Abspielgerät auf Ihren Projektor oder Display übertragen.

Merkmale:

latenzfreie Übertragung von Video und Audio-Signal

HDMI In / Out

Auflösung bis 4K / UHD

Reichweite max 30m

inkl. Ladeschale

Mietpreis: 25,- €`,
    images: ['/images/hdmi_wireless.webp'],
    pricePerUnit: 25,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Modell', value: 'WHD30M - 4K (celexon)' },
      { label: 'Übertragung', value: 'latenzfreie Übertragung von Video und Audio-Signal' },
      { label: 'Anschlüsse', value: 'HDMI In / Out' },
      { label: 'Auflösung', value: 'bis 4K / UHD' },
      { label: 'Reichweite', value: 'max 30m' },
      { label: 'Zubehör', value: 'inkl. Ladeschale' },
    ],
  },

  // Stromerzeuger / Generatoren
  {
    id: 'inverter-stromerzeuger-2kw',
    name: 'Inverter Stromerzeuger 2 kW',
    description: 'Das HY-2000Si ist ein kompaktes und leises Qualitätsaggregat von Hyundai. Dauerleistung 1.600 Watt.',
    detailDescription: `Inverter Stromerzeuger 2 kW

Das HY-2000Si ist ein kompaktes und leises Qualitätsaggregat von Hyundai. Dauerleistung 1.600 Watt.

Merkmale:

1-Zyl, 4-Takt Benzinmotor

2 x 230V Schuko Steckdose

50 Hz Schwankungsfrei (Invertertechnik)

Laufgeräusch ca. 57 dB (max. 90 dB bei Volllast)

3,8 Liter Tank (reicht bis zu 8 Std)

Geräuschgedämmtes Gehäuse

ECO Modus

Gewicht: 20kg (Leergewicht)

Wichtig: Bitte nur Super E5 tanken!

Mietpreis: 35,- €`,
    images: ['/images/hy2000_1.webp'],
    pricePerUnit: 35,
    categorySlug: 'stromerzeuger',
    specs: [
      { label: 'Modell', value: 'HY-2000Si (Hyundai)' },
      { label: 'Dauerleistung', value: '1.600 Watt' },
      { label: 'Motor', value: '1-Zyl, 4-Takt Benzinmotor' },
      { label: 'Steckdosen', value: '2 x 230V Schuko Steckdose' },
      { label: 'Frequenz', value: '50 Hz Schwankungsfrei (Invertertechnik)' },
      { label: 'Laufgeräusch', value: 'ca. 57 dB (max. 90 dB bei Volllast)' },
      { label: 'Tank', value: '3,8 Liter (reicht bis zu 8 Std)' },
      { label: 'Gehäuse', value: 'Geräuschgedämmtes Gehäuse' },
      { label: 'ECO Modus', value: 'Ja' },
      { label: 'Gewicht', value: '20kg (Leergewicht)' },
      { label: 'Kraftstoff', value: 'Super E5 (wichtig!)' },
    ],
  },
  {
    id: 'inverter-stromerzeuger-3-2kw',
    name: 'Inverter Stromerzeuger 3,2 kW',
    description: 'Leistungsstark und leise: Das Qualitäts-Aggregat HY-3200Si von Hyundai. Dauerleistung 2.800 Watt.',
    detailDescription: `Inverter Stromerzeuger 3,2 kW

Leistungsstark und leise: Das Qualitäts-Aggregat HY-3200Si von Hyundai. Dauerleistung 2.800 Watt.

Merkmale:

1-Zyl, 4-Takt Benzinmotor

2 x 230V Schuko Steckdose

3.200W Maximalleistung

50Hz schwankungsfrei

Laufgeräusch ca. 73dB (max. 96dB bei Volllast)

7,8 Liter Tank (ca. 7h Betriebsdauer bei Teillast)

ECO Modus

Gewicht: 42kg (Leergewicht)

Wichtig: Bitte nur Super E5 tanken!

Mietpreis: 50,- €`,
    images: ['/images/hy3200si_1-1920w.webp'],
    pricePerUnit: 50,
    categorySlug: 'stromerzeuger',
    specs: [
      { label: 'Modell', value: 'HY-3200Si (Hyundai)' },
      { label: 'Dauerleistung', value: '2.800 Watt' },
      { label: 'Maximalleistung', value: '3.200W' },
      { label: 'Motor', value: '1-Zyl, 4-Takt Benzinmotor' },
      { label: 'Steckdosen', value: '2 x 230V Schuko Steckdose' },
      { label: 'Frequenz', value: '50Hz schwankungsfrei' },
      { label: 'Laufgeräusch', value: 'ca. 73dB (max. 96dB bei Volllast)' },
      { label: 'Tank', value: '7,8 Liter (ca. 7h Betriebsdauer bei Teillast)' },
      { label: 'ECO Modus', value: 'Ja' },
      { label: 'Gewicht', value: '42kg (Leergewicht)' },
      { label: 'Kraftstoff', value: 'Super E5 (wichtig!)' },
    ],
  },
  {
    id: 'inverter-stromerzeuger-6kw',
    name: 'Inverter Stromerzeuger 6 kW',
    description: 'Mit 6,5 kW Maximalleistung genügt dieser leise und sparsame Stromerzeuger für die meisten Anwendungen im Freien. Dank Inverter Technologie können auch empfindliche Elektrogeräte betrieben werden.',
    detailDescription: `Inverter Stromerzeuger 6 kW

Mit 6,5 kW Maximalleistung genügt dieser leise und sparsame Stromerzeuger für die meisten Anwendungen im Freien. Dank Inverter Technologie können auch empfindliche Elektrogeräte betrieben werden.

Merkmale:

1-Zyl, 4-Takt Benzinmotor

2 x 230V Schuko Steckdose

1 x 230V CEE Steckdose

50 Hz Schwankungsfrei

Laufgeräusch ca. 65 dB

18,5l Tank (7h Betriebsdauer bei Volllast)

ECO Modus

Elektrostart

Gewicht 89 kg (Leergewicht)

ACHTUNG: Bitte nur Super E5 tanken!

Zum Transport ist ein geeigntes Fahrzeug nötig (Transporter/Anhänger), planen Sie bitte einen 2ten Helfer zum Verladen bei der Abholung ein. Die Betankung sollte nach dem Transport erfolgen.

Mietpreis: 99,- €`,
    images: ['/images/hyundai-invertergenerator-hy6500sei-d.webp'],
    pricePerUnit: 99,
    categorySlug: 'stromerzeuger',
    specs: [
      { label: 'Maximalleistung', value: '6,5 kW' },
      { label: 'Motor', value: '1-Zyl, 4-Takt Benzinmotor' },
      { label: 'Schuko Steckdosen', value: '2 x 230V Schuko Steckdose' },
      { label: 'CEE Steckdose', value: '1 x 230V CEE Steckdose' },
      { label: 'Frequenz', value: '50 Hz Schwankungsfrei' },
      { label: 'Laufgeräusch', value: 'ca. 65 dB' },
      { label: 'Tank', value: '18,5l (7h Betriebsdauer bei Volllast)' },
      { label: 'ECO Modus', value: 'Ja' },
      { label: 'Start', value: 'Elektrostart' },
      { label: 'Gewicht', value: '89 kg (Leergewicht)' },
      { label: 'Kraftstoff', value: 'Super E5 (wichtig!)' },
      { label: 'Transport', value: 'Transporter/Anhänger nötig, 2. Helfer empfohlen' },
    ],
  },

  // Bühnenpodeste & Traversen
  {
    id: 'rednerpodest-drumriser',
    name: 'Rednerpodest / Drumriser',
    description: 'Einfach zu transportierendes und aufzubauendes Podest für Innen und Außen (ebener Untergrund vorausgesetzt). Sogar in einem PKW zu transportieren.',
    detailDescription: `Rednerpodest / Drumriser

Einfach zu transportierendes und aufzubauendes Podest für Innen und Außen (ebener Untergrund vorausgesetzt). Sogar in einem PKW zu transportieren.

Merkmale:

Abmessungen: 2x2m, bestehend aus 4x1m Elementen

Geniales, faltbares Ständersystem wahlweise 20 oder 40cm hoch (bitte bei Buchung angeben)

Belastbarkeit: 500kg/m2

Oberfläche: schwarz mit Anti-Rutschbeschichtung

mit Skirt (schwarzer Stoff) zur Verkleidung der Front

Gesamttransportgewicht: ca. 70kg

Mietpreis: 70,- €`,
    images: ['/images/ixstage5-1920w.webp'],
    pricePerUnit: 70,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Abmessungen', value: '2x2m, bestehend aus 4x1m Elementen' },
      { label: 'Ständersystem', value: 'Geniales, faltbares Ständersystem wahlweise 20 oder 40cm hoch (bitte bei Buchung angeben)' },
      { label: 'Belastbarkeit', value: '500kg/m2' },
      { label: 'Oberfläche', value: 'schwarz mit Anti-Rutschbeschichtung' },
      { label: 'Skirt', value: 'mit Skirt (schwarzer Stoff) zur Verkleidung der Front' },
      { label: 'Transportgewicht', value: 'ca. 70kg' },
      { label: 'Anwendung', value: 'Innen und Außen (ebener Untergrund vorausgesetzt)' },
    ],
  },
  {
    id: 'buehne-4x3m',
    name: 'Bühne 4x3 m',
    description: 'Mit unseren praktischen und sehr leicht zu transportierenden iX Stage Bühnenelementen lassen sich unterschiedliche Bühnen- und Podestgrößen realisieren. Die 4 x 3 m große Bühnenfläche reicht für DJs, Alleinunterhalter, kleine Ensembles, u.v.m.',
    detailDescription: `Bühne 4x3 m

Mit unseren praktischen und sehr leicht zu transportierenden iX Stage Bühnenelementen lassen sich unterschiedliche Bühnen- und Podestgrößen realisieren. Die 4 x 3 m große Bühnenfläche reicht für DJs, Alleinunterhalter, kleine Ensembles, u.v.m.

Merkmale:

12 Stck 1x1 m Stage Elemente

Bühnenkonfiguration: z.B. 4 x 3 m, 6 x 2 m, etc.

Höhe: 40cm

Einfacher Aufbau dank Klappfüßen

Belastbarkeit 500kg/m²

strapzierfähige Siebdruckoberfläche

Transportgewicht: ca. 200kg

Mietpreis: 200,- €

weitere Größen/Konfigurationen auf Anfrage`,
    images: ['/images/drumriser2x2.webp'],
    pricePerUnit: 200,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Elemente', value: '12 Stck 1x1 m Stage Elemente' },
      { label: 'Bühnenkonfiguration', value: 'z.B. 4 x 3 m, 6 x 2 m, etc.' },
      { label: 'Höhe', value: '40cm' },
      { label: 'Aufbau', value: 'Einfacher Aufbau dank Klappfüßen' },
      { label: 'Belastbarkeit', value: '500kg/m²' },
      { label: 'Oberfläche', value: 'strapzierfähige Siebdruckoberfläche' },
      { label: 'Transportgewicht', value: 'ca. 200kg' },
      { label: 'Anwendung', value: 'DJs, Alleinunterhalter, kleine Ensembles, u.v.m.' },
    ],
  },
  {
    id: 'faltpavillion',
    name: 'Faltpavillion',
    description: 'Mit 2 Personen ruck-zuck aufgebaut bietet dieser Faltpavillion Platz für Gäste, Buffet oder dient als Bühnenüberdachung.',
    detailDescription: `Faltpavillion

Mit 2 Personen ruck-zuck aufgebaut bietet dieser Faltpavillion Platz für Gäste, Buffet oder dient als Bühnenüberdachung.

Merkmale:

Abmessungen Grundfläche: 3x3m oder 3x6m

faltbares, patentiertes Gestell

Höhe verstellbar

Max. Firsthöhe: 3,20m

Auf Wunsch mit Seitenteilen

Gewicht: ca. 40kg

Mietpreis 3x3m: 39,- €

Mietpreis 6x3m: 50,- €`,
    images: ['/images/pavillion.webp'],
    pricePerUnit: 39,
    priceOptions: [
      { label: '3x3m', price: 39 },
      { label: '6x3m', price: 50 },
    ],
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Abmessungen Grundfläche', value: '3x3m oder 3x6m' },
      { label: 'Gestell', value: 'faltbares, patentiertes Gestell' },
      { label: 'Höhe', value: 'verstellbar' },
      { label: 'Max. Firsthöhe', value: '3,20m' },
      { label: 'Seitenteile', value: 'Auf Wunsch mit Seitenteilen' },
      { label: 'Gewicht', value: 'ca. 40kg' },
      { label: 'Anwendung', value: 'Platz für Gäste, Buffet oder Bühnenüberdachung' },
    ],
  },
  {
    id: 'alutruss-trilock-e-gl33',
    name: 'Alutruss Trilock E-GL33',
    description: 'Professionelle Alutruss mit Trilock-System. Stabile Konstruktion für Licht- und Tontechnik.',
    images: ['/images/stative.webp'],
    pricePerUnit: 40,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Alutruss' },
      { label: 'System', value: 'Trilock E-GL33' },
      { label: 'Material', value: 'Aluminium' },
    ],
  },
  {
    id: 'traversenlift-150kg',
    name: 'Traversenlift 150Kg',
    description: 'Elektrischer Traversenlift mit 150kg Tragkraft. Für sicheren Aufbau von Traversen.',
    images: ['/images/stative.webp'],
    pricePerUnit: 80,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Traversenlift' },
      { label: 'Tragkraft', value: '150 kg' },
      { label: 'Antrieb', value: 'Elektrisch' },
    ],
  },
  {
    id: 'lautsprecherstativ-21450',
    name: 'Lautsprecherstativ 21450',
    description: 'Stabiles Lautsprecherstativ für PA-Anlagen. Höhenverstellbar und robust.',
    images: ['/images/stative.webp'],
    pricePerUnit: 25,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Lautsprecherstativ' },
      { label: 'Modell', value: '21450' },
      { label: 'Anwendung', value: 'PA-Anlagen' },
    ],
  },
  {
    id: 'leuchtenstativ-24630',
    name: 'Leuchtenstativ 24630',
    description: 'Professionelles Leuchtenstativ für Scheinwerfer und Moving Heads. Stabil und höhenverstellbar.',
    images: ['/images/stative.webp'],
    pricePerUnit: 20,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Leuchtenstativ' },
      { label: 'Modell', value: '24630' },
      { label: 'Anwendung', value: 'Lichttechnik' },
    ],
  },
  {
    id: 'mikrofonstativ-21090',
    name: 'Mikrofonstativ 21090',
    description: 'Zuverlässiges Mikrofonstativ für Studio und Live-Einsatz. Höhenverstellbar mit Teleskopstange.',
    images: ['/images/stative.webp'],
    pricePerUnit: 15,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Mikrofonstativ' },
      { label: 'Modell', value: '21090' },
      { label: 'Anwendung', value: 'Mikrofone' },
    ],
  },
  
  // Upgrade-Kits für PA-Anlagen
  {
    id: 'upgrade-kit-bluetooth-mixer',
    name: 'Upgrade Kit: Mixer mit Bluetooth',
    description: 'Audiomischpult mit Bluetooth-Funktion für kabellose Musikübertragung. Ideal als Upgrade für PA-Sets ohne Bluetooth.',
    detailDescription: `Audiomischpult mit Bluetooth-Funktion für kabellose Musikübertragung. Ideal als Upgrade für PA-Sets ohne Bluetooth. Ermöglicht die drahtlose Übertragung von Musik von Smartphone, Tablet oder Laptop.`,
    images: ['/images/mixer-bluetooth.webp'],
    pricePerUnit: 15,
    categorySlug: 'pa-anlagen',
    isUpgradeKit: true,
    specs: [
      { label: 'Typ', value: 'Audiomischpult' },
      { label: 'Bluetooth', value: 'Ja, Audio Streaming' },
      { label: 'Kanäle', value: '4-8 Kanäle' },
      { label: 'Eingänge', value: 'XLR, Klinke, Bluetooth' },
    ],
  },
  {
    id: 'upgrade-kit-mikrofon',
    name: 'Upgrade Kit: Mikrofon',
    description: 'Professionelles Mikrofon für Sprachbeschallung und Gesang. Ideal als Zusatz für PA-Sets.',
    detailDescription: `Professionelles Mikrofon für Sprachbeschallung und Gesang. Ideal als Zusatz für PA-Sets. Kabelgebunden oder drahtlos verfügbar.`,
    images: ['/images/mikrofon.webp'],
    pricePerUnit: 10,
    categorySlug: 'pa-anlagen',
    isUpgradeKit: true,
    specs: [
      { label: 'Typ', value: 'Mikrofon' },
      { label: 'Ausführung', value: 'Kabelgebunden oder Drahtlos' },
      { label: 'Anwendung', value: 'Sprache, Gesang' },
    ],
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.categorySlug === categorySlug && !product.isUpgradeKit);
}

export function getUpgradeKitsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.categorySlug === categorySlug && product.isUpgradeKit === true);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
