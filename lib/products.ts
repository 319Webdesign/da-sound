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
}

export const products: Product[] = [
  // Party-Sets Ton & Licht
  {
    id: 'party-set-small',
    name: 'Party-Set SMALL',
    description: `Bestehend aus:
1 x Aktives Lautsprechersystem mit 700W RMS
12-Zoll Subwoofer
2 Satelliten
Bluetooth Verbindung direkt mit dem Handy
2 x Lautsprecherstativ
1 x LED Kompakt Licht-Set m. Stativ + Fernbedienung
1 x Nebelmaschine (800W) + Fernbedienung
Alle benötigten Anschlusskabel`,
    detailDescription: `Mit Freunden feiern? - Mit dem Party Set SMALL geht's ab.
Für die spontane Party oder die Geburtstagsfeier - mit unserem kleinsten Set können bis zu 50 Gäste bestens unterhalten werden. Deine Playlist oder Spotify vom Smartphone kann kabellos über Bluetooth gespielt werden. Und das Beste: alles passt ganz easy in den Kofferraum eines Kleinwagens.

Set bestehend aus:
Aktives Lautsprechersystem:
12-Zoll Subwoofer mit 500W RMS
2 x Satellitenlautsprecher mit 150W RMS
DSP mit 4 Klangpresets
Bluetooth Empfänger zum direkten Streamen von Musik über Smartphone oder Tablet
inkl. Transporttaschen
2 x Lautsprecherstative
1 x LED Licht-Set mit 2 leistungsstarken RGB Spots, 2 Multi-Lens LED Strahleneffekten, Fernbedienung
1 x Lichtstativ
1 x Party-Nebelmaschine m. Fernbedienung
Alle benötigten Anschlusskabel
Transportgewicht insgesamt ca. 40 kg`,
    images: ['/images/partysetsmall.webp'],
    pricePerUnit: 80,
    pricePerPair: 120,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: 'bis 70 (Indoor)' },
      { label: 'Leistung', value: '500W RMS Sub + 2x 150W RMS Satelliten' },
      { label: 'Transportgewicht', value: 'ca. 40 kg' },
    ],
  },
  {
    id: 'party-set-medium',
    name: 'Party-Set MEDIUM',
    description: `Bestehend aus:
Profi PA System 2.1
1 x Subwoofer 15-Zoll, 1.200W
2 x Satelliten 400W 
2 x Lautsprecherstative
1 x Audiomischpult mit Bluetooth
1 x Mikrofon mit Schalter, 10m Kabel
1 x LED FX Scan Licht-Set m. Stativ + Fernbedienung
1 x Nebelmaschine (800W) + Fernbedienung
Alle benötigten Anschlusskabel`,
    detailDescription: `Top-Sound und effektvolles Licht für deine nächste Feier.
Wenn es mal so richtig schön werden soll: Das Party-Set MEDIUM ist die perfekte Wahl für Feierlichtkeiten aller Art bis ca. 100 Personen. Dabei ist alles einfach zu transportieren und auch für Laien problemlos anzuschließen.

Set bestehend aus:
2 x Aktive Lautsprecherbox 8/1 (400 Watt RMS)
1 x Aktivsubwoofer 15-Zoll (1.200 Watt)
2 x Lautsprecherstative
1 x 2-Kanal Mischpult mit MP3 Player und Bluetooth
1 x Aux-Kabel (Miniklinke)
1 x Mikrofon mit Kabel
1 x professionelles LED Licht-Set mit:
4 leistungsstarken LED Spots
1 dynamischen Strahleneffekt
2 LED Scanner mit Farbwechsel, Gobo und Spiegelbewegung
4 Strobe/UV Leds
Stativ
Funkfernbedienung
1 x Nebelmaschine (1.500W) mit Fernbedienung
alle benötigten Anschlusskabel
Transportgewicht insgesamt ca. 85 kg`,
    images: ['/images/partysetmedium.webp'],
    pricePerUnit: 140,
    pricePerPair: 200,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '100-120 (Indoor)' },
      { label: 'Leistung', value: '1.200W Sub + 2x 400W RMS' },
      { label: 'Transportgewicht', value: 'ca. 85 kg' },
    ],
  },
  {
    id: 'party-set-white',
    name: 'Party-Set WHITE',
    description: `Bestehend aus:
2 x Säulen-PA in weiß, 2.000W Bluetooth
1 x Mikrofon mit Kabel
1 x Licht-Set in weiß mit passendem Ständer für die  Lichtshow auf der Tanzfläche
8 x LED Uplight in weiß zur stimmungsvollen Hintergrundbeleuchtung des Saales/Zeltes`,
    detailDescription: `Party-Set "White Wedding"
Für eine unvergessliche Hochzeitsfeier "ganz in weiß"
Neben hochwertigem Sound und tollen Lichteffekte, stimmt bei diesem Paket auch die Optik. Alle Kompomenten (bis auf das Mikrofon), sind in weiß gehalten. Noch dazu sind die Komponenten einfach zu transportieren und auch für Laien kinderleicht aufzubauen und zu bedienen.

Set bestehend aus:
2 x Aktive Säulen PA in weiß mit je 1.000 W RMS
Musikstreaming via Bluetooth von jedem Handy aus möglich (keine zusätzliche Verkabelung erforderlich)
1 x Mikrofon mit Kabel
1 x professionelles LED Licht-Set in weiß mit:
2 leistungsstarken LED Spots
2 dynamischen Derby Strahleneffekten
4 Strobe/UV Leds
Stativ
Funkfernbedienung / Musikgesteuert
8 x Akku LED Strahler in weiß zur effektvollen Hintergrund / Ambiente Beleuchtung des Saals / Zeltes
Transport in einem normalen PKW möglich`,
    images: ['/images/partysetwhite.webp'],
    pricePerUnit: 150,
    pricePerPair: 220,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: '70-100 (max 120) (Indoor)' },
      { label: 'Leistung', value: '2 x 1.000W RMS' },
      { label: 'Farbe', value: 'Weiß' },
    ],
  },
  {
    id: 'party-set-large',
    name: 'Party-Set LARGE',
    description: `Bestehend aus:
2 x PA Subwoofer 15-Zoll 1.200W aktiv
2 x PA Lautsprecher 12/1-Zoll 750W aktiv, bi-amped
2 x Distanzstange
1 x 2-Kanal Audiomixer mit Bluetooth
1 x Funk-Mikrofon 
1 x LED Pro-FX Lichtset mit Laser (inkl. Stativ)
1 x Nebelmaschine 1,25 KW mit Timer-/Volumen-Controller
Alle benötigten Anschlusskabel`,
    detailDescription: `Beste Unterhaltung mit tollem Sound und effektvoller Lichtanlage.
Dieses umfangreiche Set bietet hochwertige Komponenten für optimalen Sound & Light. Sie unterhalten hiermit mühelos bis zu 150 Gäste und dennoch ist alles in einem PKW Kombi zu transportieren und notfalls auch alleine problemlos aufzubauen.

Set bestehend aus:
2 x Aktive Lautsprecherbox (1.500 Watt max)
2 x Aktiver Subwoofer 15-Zoll (1.200 Watt max)
2 x Distanzrohre
1 x 4-Kanal Audio-Mischpult inkl. Aux-Kabel für Smartphone/Laptop (Bluetooth-Adapter optional)
1 x Funk-Mikrofon
1 x LED Pro-FX Lichtset mit Laser, Strobe-Effekt inkl. Stativ + Fußcontroller  
1 x Nebelmaschine 1,5 KW mit Volumen / Timer - Fernbedienung
Alle benötigten Anschlusskabel
Transportgewicht insgesamt ca. 120 kg`,
    images: ['/images/partysetlarge.webp'],
    pricePerUnit: 180,
    pricePerPair: 250,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: 'bis 150 (nur Indoor)' },
      { label: 'Leistung', value: '2 x 1.500W + 2 x 1.200W' },
      { label: 'Transportgewicht', value: 'ca. 120 kg' },
    ],
  },
  {
    id: 'party-set-xlarge',
    name: 'Party-Set X-LARGE',
    description: `Bestehend aus:
2 x PA Subwoofer 18-Zoll 2.000W aktiv
2 x PA Lautsprecher 12/1-Zoll 1.000W aktiv, bi-amped
2 x Distanzstange
1 x 4-Kanal Audiomixer inkl. Aux-Kabel
1 x Funk-Mikrofon
2 x LED Pro-FX Lichtset mit Laser (inkl. Stativ)
1 x Hazer (Dunstnebelmaschine) + Funkfernbedienung
Alle benötigten Anschlusskabel`,
    detailDescription: `Das ultimative Set für die Mega-Party.
Mit diesem Set sind Sie ganz weit vorne. Beste Soundqualität dank hochwertiger Lautsprecher, druckvolle Wiedergabe, die zum Tanzen animiert, sowie eine einzigartige Lightshow mit Lasereffekten. Glauben Sie nicht? - ist aber so!

Set bestehend aus:
2 x Profi PA Lautsprecherbox DAS Audio VANTEC 12-Zoll aktiv (1.100 Watt)
2 x Profi PA Subwoofer DAS Audio VANTEC 18-Zoll (1.000 Watt)
2 x Distanzrohre
1 x MACKIE ProFX Mischpult m. Aux-Kabel und Bluetooth Adapter
1 x Funkmikrofon für Moderation, Reden und Gesangseinlagen
2 x LED PRO Lichtanlage mit insgesamt:
4 LED PAR Spots Multicolor
4 LED Derby Strahleneffekte
2 Laser-Effekteinheiten
Funk-Fernbedienung
1 x Hazer (Dunstnebelgerät) für optimale Sichtbarkeit der Lichteffekte 
Alle benötigten Anschlusskabel
Transportgewicht insgesamt ca. 160 kg`,
    images: ['/images/profx3-1920w.webp'],
    pricePerUnit: 249,
    pricePerPair: 350,
    categorySlug: 'party-sets-ton-licht',
    specs: [
      { label: 'Personen', value: 'bis 250 (nur Indoor)' },
      { label: 'Leistung', value: '2 x 1.100W + 2 x 1.000W' },
      { label: 'Transportgewicht', value: 'ca. 160 kg' },
    ],
  },

  // PA-Anlagen / Lautsprecher
  {
    id: 'akku-lautsprecher-compact',
    name: 'Akku Lautsprecher Compact',
    description: 'Hochwertiger Akkulautsprecher mit Bluetooth von Electro Voice mit einer Batterielaufzeit von bis zu 12 Stunden. Optimal zur Übertragung von Playback- und Live-Musik wenn kein Stromanschluss vorhanden ist. Mit nur 7kg Gewicht ein echtes Leichtgewicht mit MEGA Sound.',
    detailDescription: `AKKU Lautsprecher EV Everse 8
Mobiler Sound immer und überall.
Die akkubetriebene Electro-Voice Everse8 ist die perfekte Aktivbox zur mobilen Beschallung überall dort, wo kein Stromanschluss vorhanden ist. Dabei ist sie leicht zu transportieren und für die Größe sehr laut. Dank Schutzabdeckung sogar wetterfest!

Technische Daten:
Hoher Schalldruck bei 121 dB+
6+ Stunden bei maximaler Leistung
12+ Stunden @ 95 dB SPL
Bluetooth 5.0 Audio Streaming und Koppeln von 2 Everse 8 zum Stereo-Paar
Frequenzbereich 50 Hz – 20 kHz
Abstrahlverhalten 100 x 100 Grad
8-Zoll-Tieftöner mit SST-Anschluss
1" Hochleistungs-Titankalotten-Hochtöner mit Neodym-Magnet und ferro-fluid-gekühlter Schwingspule
4-Kanal-Mixer
FX Sektion – Dynacord Digitaleffekte (Reverb, Chorus, Delay usw.)
Delay-Funktion
EQ – 3-Band-EQ an den Eingängen, 7-Band-Main-GEQ, 7-Band-PEQ, Low Shelf, High Shelf, Low Pass, High Pass
2 XLR/TRS-Combo-Klinkeneingänge
Einfach zu tragender Griff mit Soft-Touch-Gummi
Leichtgewicht 7,6 kg
witterungsbeständig nach IP43 mit der mitgelieferten wetterfesten Spritzschutzabdeckung (nur im Bluetooth Betrieb)`,
    images: ['/images/akkuLautsprecherCompact.webp'],
    pricePerUnit: 30,
    pricePerPair: 50,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Typ', value: 'Akku-Lautsprecher' },
      { label: 'Personen', value: 'bis 30' },
      { label: 'Laufzeit', value: 'bis 12h' },
      { label: 'Gewicht', value: '7,6 kg' },
      { label: 'Schalldruck', value: '121 dB+' },
      { label: 'Bluetooth', value: '5.0' },
    ],
  },
  {
    id: 'akku-lautsprecher-maxi',
    name: 'Akku Lautsprecher Maxi',
    description: 'Der wohl berühmt und berüchtigste unter der Akku Lautsprechern jetzt bei uns im Verleih: Teufel Rockster XL. Unglaubliche Leistung bei gleichzeitig langer Akkulaufzeit von bis zu 20 Stunden. Neueste Bluetooth Technologie plus zahlreiche Eingänge mit EQ machen diese stattliche Box zum Allroundtalent.',
    detailDescription: `AKKU Lautsprecher Maxi
Kraftvolles Soundpaket für unterwegs.
Die akkubetriebene Teufel ROCKSTER ist die angesagt Aktivbox für Partys on the Air, wo kein Stromanschluss vorhanden ist. Die gewaltige Basswiedergabe ist DJ-tauglich und kann selbst bei höheren Pegeln locker 6 Std ohne Aufladen durchpowern.

Technische Daten:
Hoher Schalldruck bis zu 131dB
Akkulaufzeit ca. 6 Stunden bei hoher Leistung, 12+ Stunden bei niedrigeren Lautstärken (Hintergrundmusik)
fortschrittliches Bluetooth 5.0 Audio Streaming, 2 Devices koppelbar
Frequenzbereich 38 Hz – 20 kHz
Abstrahlverhalten Omni
15-Zoll-Tieftöner, Bassreflex
1" Hochleistungs-Hochtöner
2-Kanal-Mixer mit Crossfader
3-Band-EQ 
Robustes Gehäusedesign schützt optimal bei Transport
Gewicht ca. 30kg`,
    images: ['/images/akkuLautsprecherMaxi.webp'],
    pricePerUnit: 40,
    pricePerPair: 70,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Typ', value: 'Akku-Lautsprecher' },
      { label: 'Personen', value: 'bis 80' },
      { label: 'Laufzeit', value: '6-12+ Stunden' },
      { label: 'Gewicht', value: 'ca. 30 kg' },
      { label: 'Schalldruck', value: 'bis 131 dB' },
      { label: 'Bluetooth', value: '5.0' },
    ],
  },
  {
    id: 'aktivlautsprecher-bluetooth',
    name: 'Aktivlautsprecher Bluetooth',
    description: 'Der aktive Lautsprecher von DAS Audio (Made in Spain) überzeugt durch hohe Leistungsreserven (max. 1500W) und professionellen Klang. Das robuste Kunststoffgehäuse sorgt für ein transportfreundliches Gewicht. Auch als Monitorbox einsetzbar. Lautsprecherstativ inkl.',
    detailDescription: `Aktiv Lautsprecher Bluetooth
Solide 2-Wege Aktivlautsprecher mit Power ohne Ende
Die Aktivboxen von D.A.S. Audio sind mit 12-Zoll Basslautsprecher und einem 1-Zoll Hochtöner bestückt. Die Endstufe leistet satte 750 Watt (RMS). Die beiden Lautsprecher lassen sich über Bluetooth koppeln, somit kann Musik vom Handy direkt in Stereo gestreamt werden.

Technische Daten:
12-Zoll (30cm) oder 15-Zoll Tieftonlautsprecher
1-Zoll Hochtonhorn
Leistung: 750 Watt RMS / 1.500 Watt MAX
Max. Schalldruck: 130 dB
Eingänge für Mikrofon/Line und Aux
Bluetooth (mit Stereo-Koppelung)
Gewicht: 17-26 kg / Stck (je nach Ausführung)`,
    images: ['/images/akkulautsprecherbt.webp'],
    pricePerUnit: 35,
    pricePerPair: 60,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Typ', value: 'Aktiv Bluetooth' },
      { label: 'Personen', value: 'bis 200 (Sprache), bis 150 (Musik), bis 100 (Live)' },
      { label: 'Anschlüsse', value: 'Bluetooth, XLR, Klinke' },
      { label: 'Leistung', value: '750W RMS / 1.500W MAX' },
      { label: 'Schalldruck', value: '130 dB' },
      { label: 'Gewicht', value: '17-26 kg / Stck' },
    ],
  },
  {
    id: 'sub-sat-set-bluetooth',
    name: 'Sub-Sat Set Bluetooth',
    description: 'Dieses kompakte aber kraftvolle 2.1 System besteht aus einem 12-Zoll Aktiv-Subwoofer mit 700W RMS Leistung (500W Sub + 2x 100W Satelliten). Es stehen verschiedene EQ Presets zur Verfügung, die Verbindung zu eurem Smartphone oder Tablet erfolgt via Bluetooth.',
    detailDescription: `Sub-Sat Set Bluetooth
Kompaktes 2.1 System mit kraftvollem Bass
Dieses kompakte aber kraftvolle 2.1 System besteht aus einem 12-Zoll Aktiv-Subwoofer mit 700W RMS Leistung (500W Sub + 2x 100W Satelliten). Es stehen verschiedene EQ Presets zur Verfügung, die Verbindung zu eurem Smartphone oder Tablet erfolgt via Bluetooth.

Technische Daten:
12-Zoll (30cm) oder 15-Zoll Tieftonlautsprecher
1-Zoll Hochtonhorn
Leistung: 750 Watt RMS / 1.500 Watt MAX
Max. Schalldruck: 130 dB
Eingänge für Mikrofon/Line und Aux
Bluetooth (mit Stereo-Koppelung)
Gewicht: 17-26 kg / Stck (je nach Ausführung)`,
    images: ['/images/Sub-SatSet Bluetooth.webp'],
    pricePerUnit: 49,
    pricePerPair: 70,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Typ', value: 'Sub-Sat Set' },
      { label: 'Personen', value: 'bis 200 (Sprache), bis 150 (Musik), bis 100 (Live)' },
      { label: 'Anschlüsse', value: 'Bluetooth, XLR' },
      { label: 'Leistung', value: '750W RMS / 1.500W MAX' },
      { label: 'Schalldruck', value: '130 dB' },
      { label: 'Gewicht', value: '17-26 kg / Stck' },
    ],
  },
  {
    id: 'pa-saeule-bluetooth',
    name: 'PA Säule Bluetooth',
    description: 'Das Altea-DUO-20 ist ein kompaktes und mit 2000W Power gleichzeitig sehr leistungsstarkes Beschallungssystem und lässt sich extrem einfach und schnell ohne weiteres Zubehör wie Stative oder Lautsprecherkabel montieren. Stecker in die Steckdose, fertig!',
    detailDescription: `Säulen PA Bluetooth
Universelles, kompaktes PA-System bis 100 Personen für Party, DJ und Live!
Das leistungsstarke aktive Säulen PA-System der DAS Audio Altea Serie besticht durch hohe Pegelreserven, einfaches Handling und universelle Einsatzmöglichkeiten bei einem sehr breiten Abstrahlverhalten von 100°

System bestehend aus:
2 x 10-Zoll (25cm) Subwoofer, dient gleichzeitig als Sockel/Basis
4 x 3-Zoll Neodym Mitteltöner PLUS 1-Zoll Druckkammertreiber
Gleichmäßige Abstrahlung von 100° x 50°
Class D Endstufe mit 1.000W RMS (2.000W Musikleistung)
3 Eingänge (XLR, Klinke) und Bluetooth 
Max System-Schalldruck: 127 dB
24 Bit DSP-Steuerung mit Display und FIR Filter
keine Verkabelung nötig, in die Steckdose, fertig
Gesamtgewicht ca. 32 kg`,
    images: ['/images/PASaeuleBluetooth.webp'],
    pricePerUnit: 60,
    pricePerPair: 100,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Typ', value: 'PA Säule' },
      { label: 'Personen', value: 'bis 70 (bis 100-120 mit 2 Säulen)' },
      { label: 'Anschlüsse', value: 'Bluetooth, XLR, Klinke' },
      { label: 'Leistung', value: '1.000W RMS / 2.000W Musikleistung' },
      { label: 'Schalldruck', value: '127 dB' },
      { label: 'Gewicht', value: 'ca. 32 kg' },
    ],
  },
  {
    id: 'pa-set-small',
    name: 'PA Set SMALL',
    description: 'Die Action 508A von DAS Audio sind kompakte aber sehr robuste Multifunktionslautsprecher. Mit bis zu 700W Leistung eignet sich das Set für Hintergrundmusik, Sprachbeschallung und Monitoranwendungen. Stative sind im Mietpreis enthalten.',
    detailDescription: `PA Set Small
Kompaktes und dezentes Lautsprecherset
Mit den Action 508A des spanischen Herstellers DAS Audio haben wir 2 kompakte, universell einsetzbare Aktivlautsprecher zu einem Stereo-Set geschnürt, das optimal für Sprach- und Hintergrundbeschallung geeignet ist.

Set besteht aus:
2 x Aktivlautsprecher 
8-Zoll (20 cm) Bass / 1-Zoll Hochtonhorn
Leistung: 720 Watt (360 W RMS)
Max. Schalldruck: 121 dB
2 Eingangskanäle XLR oder Miniklinke
EQ-Klangpresets
2 x Lautsprecherstativ
2 x XLR Anschlusskabel 10m`,
    images: ['/images/pasetsmall1.webp', '/images/pasetsmall2.webp'],
    pricePerUnit: 50,
    pricePerPair: 80,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Leistung', value: '720W (360W RMS)' },
      { label: 'Personen', value: 'bis 100 (Sprache), bis 80 (Musik/Live)' },
      { label: 'Typ', value: 'Aktiv' },
      { label: 'Schalldruck', value: '121 dB' },
    ],
  },
  {
    id: 'pa-set-medium',
    name: 'PA Set MEDIUM',
    description: 'Dieses kompakte 2.1 Lautsprecher Set von DAS Audio kann problemlos in einem PKW transportiert werden und beschallt bis zu 100 Personen. Bestehend aus einem kräftigen 15er Subwoofer mit passenden aktiven Topteilen. Mit 2.000W Systemleistung eignet es sich perfekt für kleine bis mittlere Räume.',
    detailDescription: `Lautsprecher Set M
Leicht und kompakt aber GROß im Sound
Die Altea Serie von DAS Audio - entwickelt und hergestellt in Spanien - ist eine kompakte aber kraftvolle PA-Anlage. Durch die eingebauten Verstärker und DSP sind Aufbau und Bedienung kein Problem. Das transportfreundliche Gewicht ermöglicht es auch einer einzelnen Person diese Anlage zu manövrieren und aufzubauen.

Set bestehend aus je 2:
Topteile DAS Audio Altea 408A:
8-Zoll (20cm) Tief-/Mitteltonlautsprecher
1-Zoll Hochtonhorn
Leistung: 400 Watt RMS / 800W Max
Max. Schalldruck: 123 dB
Abstrahlwinkel: 90°x90°
24-Bit-DSP mit 5 verschiedene EQ Presets
FIR Filter
2 regelbare Mic/Line Eingänge
ABS Kunststoffgehäuse
Gewicht: 13 kg
Subwoofer DAS Audio Altea S15A:
15" Langhub-Tieftonlautsprecher
Leistung: 600W RMS / 1.200W Max
Satte Basswiedergabe ab 40 Hz
Max. Schalldruck: 131 dB 
DSP-Steuerung mit variablen Trennfrequenzen
Deep oder Loud Preset für wahlweise mehr Tiefgang oder druckvollere Wiedergabe
solides Holzgehäuse mit widerstandsfähigem Strukturlack
Gewicht: 30 kg`,
    images: ['/images/PaSetMedium.webp'],
    pricePerUnit: 90,
    pricePerPair: 120,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Leistung', value: '2.000W System (2x 400W + 2x 600W RMS)' },
      { label: 'Personen', value: 'bis 150 (Sprache), bis 100 (Musik/Live)' },
      { label: 'Typ', value: '2.1 Aktiv Set' },
      { label: 'Schalldruck', value: '123 dB (Top) / 131 dB (Sub)' },
      { label: 'Gewicht', value: '2x 13 kg + 2x 30 kg' },
    ],
  },
  {
    id: 'pa-set-large',
    name: 'PA Set LARGE',
    description: 'Mit einer maximalen Systemleistung von 5.400W lassen sich mittlere Räume, kleine Hallen und Zelte adäquat beschallen. Wir empfehlen es für bis zu 150 Personen. Die 15er Subs spielen sehr definiert im Bassbereich, wodurch das Set auch hervorragend für Live-Sound geeignet ist.',
    detailDescription: `Lautsprecher Set Large
Universelles PA-System bis 150 Personen für Party, DJ und Live!
Das leistungsstarke aktive PA-System der DAS Audio Altea Serie besticht durch hohe Pegelreserven, einfaches Handling und universelle Einsatzmöglichkeiten.

Set bestehend aus:
2 x 15-Zoll (40cm) Subwoofer mit 1.200W 
2 x 12-Zoll (bi-amped) Aktivlautsprecher mit 1.500W
Max System-Schalldruck: 134 dB
DSP-Steuerung mit Display
Stabiles Holz/ABS-Gehäuse mit robustem Frontgitter
Subwoofer mit Transportrollen
Schutzhüllen
Distanzstangen
Anschlusskabel
Gesamtgewicht ca. 110 kg`,
    images: ['/images/PaSetLarge.webp'],
    pricePerUnit: 120,
    pricePerPair: 180,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Leistung', value: '5.400W System (2x 1.200W + 2x 1.500W)' },
      { label: 'Personen', value: 'bis 150' },
      { label: 'Typ', value: 'Aktiv + Sub' },
      { label: 'Schalldruck', value: '134 dB' },
      { label: 'Gewicht', value: 'ca. 110 kg' },
    ],
  },
  {
    id: 'pa-set-xlarge',
    name: 'PA Set X-LARGE',
    description: 'Für anspruchsvolle DJ- und Live-Anwendungen bis 250 Personen. Präzise und druckvolle Wiedergabe in allen Frequenzbereichen. Sie benötigen 2 Personen für den Aufbau und einen kleinen Kastenwagen oder Van zum Transport.',
    detailDescription: `Lautsprecher Set X Large
Universelles PA-System bis max 250 Personen für Party, DJ und Live!
Das professionelle aktive PA-System von DAS Audio (Made in Spain) ist das Non-Plus-Ultra eines leistungsfähigen, mittleren PA Systems. Satte Bässe, kristallklare Höhen sorgen für einen ausgewogenen Sound für alle Andwendungsbereiche.

Set bestehend aus je 2:
Topteile DAS Audio VANTEC 12A:
12-Zoll (25cm) Tieftonlautsprecher
1,4-Zoll Hochtonhorn
Leistung: 750W RMS / 1.500 Watt Peak
Schalldruck: 135 dB Peak
Abstrahlwinkel: 90°x50°
DSP mit FIR Filtern
Bluetooth Audio
Gehäuse aus Birkenmultiplexholz mit widerstandsfähigem Strukturlack
Gewicht: 21,5 kg
Subwoofer DAS Audio VANTEC 18A:
18" Langhub-Tieftonlautsprecher
Leistung: 1.000W RMS / 2,000W Peak
Satte Basswiedergabe ab 35 Hz (Deep Einstellung ab 30 Hz)
Schalldruck: 134 dB Peak
Eingebaute digitale Frequenzweiche, regelbar
DSP-Steuerung 
Massives Holzgehäuse mit widerstandsfähigem Strukturlack
Gewicht: 40 kg`,
    images: ['/images/PaSetXLarge.webp'],
    pricePerUnit: 150,
    pricePerPair: 220,
    categorySlug: 'pa-anlagen',
    offerInfo: 'Für noch mehr "POWER" kann das System durch 2 weitere 18er Subbässe erweitert werden. Damit lassen sich dann bis zu 300 Personen mit massivem Basspegel beschallen. Aufpreis für 2 weitere Subs: 70,- €',
    specs: [
      { label: 'Leistung', value: '3.500W RMS (2x 750W + 2x 1.000W)' },
      { label: 'Personen', value: 'bis 250 (bis 300 mit Erweiterung)' },
      { label: 'Typ', value: 'Aktiv + Sub' },
      { label: 'Schalldruck', value: '135 dB (Top) / 134 dB (Sub)' },
      { label: 'Gewicht', value: '2x 21,5 kg + 2x 40 kg' },
    ],
  },
  {
    id: 'pa-set-premium',
    name: 'PA Set PREMIUM',
    description: 'Exklusiv für hochwertige Acts, wo dezente Optik bei maximalem Sound entscheidend sind, ist unsere neue Gala/Concert PA von Zenit Audio (Designed and Made in Germany) die richtige Wahl. Trotz kompakter Abmessungen und geringem Transportgewicht (passt spielen in einen PKW Kombi), lassen sich bis zu 250 Personen adäquat beschallen.',
    detailDescription: `PA Set PREMIUM
Dieses kompakte System überzeugt auf ganzer Linie!
Die Lautsprecher der NeoLite Serie von Zenit Audio (Made in Germany) zeichnen sich durch maximalen Sound, bei minimaler Optik aus. Durch feines, digitales Processing gepaart mit extra ausgesuchten, hochwertigen Komponenten erreicht die PA ein audiophiles Klangbild, welches man sonst nur von HiFi Lautsprechern kennt.

System bestehend aus:
1 x Audio Zenit NLW 212 A
Aktiver Systemsubwoofer mit 2 x 12 Zoll Hochleistungs Chassis
2.500W + 800W + 800W RMS Class D Endstufe
DSP 
versorgt alle übrigen Systemkomponenten
1 x Audio Zenit NLW 212
Passiver Subwoofer mit 2 x 12 Zoll Hochleistungs Chassis
2.000W RMS
2 x Audio Zenit NL 208
passiver High Performance PA Speaker mit 2 x 8 Zoll Tief/Mitteltöner + 1 Zoll Hochtonhorn
600W RMS
Abstrahlung: 90 x 60 Grad
sehr schlankes und ansprechendes Design
2 x Distanzstange 
Komplette Verkabelung 
Gesamtgewicht nur ca. 100 kg`,
    images: ['/images/pasetpremium2.webp', '/images/audiozenit-1920w.webp'],
    pricePerUnit: 180,
    pricePerPair: 250,
    categorySlug: 'pa-anlagen',
    offerInfo: 'Für noch mehr "POWER" kann das System durch 2 weitere Doppel-12er Bässe erweitert werden. Mit 5kW RMS Bassleistung lassen sich dann bis zu 400 Personen mit massivem Basspegel beschallen. Aufpreis für 2 weitere Subs: 90,- €',
    specs: [
      { label: 'Leistung', value: '4.100W RMS (2.500W + 800W + 800W + 2.000W + 1.200W)' },
      { label: 'Personen', value: 'bis 250 (bis 400 mit Erweiterung)' },
      { label: 'Typ', value: 'Premium Line Array' },
      { label: 'Gewicht', value: 'ca. 100 kg' },
    ],
  },
  {
    id: 'pa-set-outdoor',
    name: 'PA Set OUTDOOR',
    description: 'Wenn es größere Flächen im Außenbereich zu beschallen gilt, wo längere Strecken überbrückt werden müssen, empfehlen sich passive Lautsprecher, die mit einem einzigen Kabel anschließbar sind. Die spritzwasser-geschützten Lautsprecher halten auch Regen und Wind stand und sind somit auch bei ungünstigem Wetter einsetzbar. Das Set kann einfach durch weitere Lautsprecher erweitert werden.',
    detailDescription: `PA Set Outdoor
Arbeitstiere für Beschallungen aller Art im Freien
Dieses Set eignet sich für alle Anwendungen im Freien, wo Aktivboxen aufgrund der eingebauten Elektronik nicht verwendet werden können. Die Boxen sind mit spritzwassergeschütztem Frontgitter und strapazierfähiger Oberfläche ausgestattet und halten somit auch mal einen Regenschauer aus. - Erweiterbar durch weitere Boxen -

Technische Daten:
Topteile:
12-Zoll (30cm) oder 15-Zoll Tieftonlautsprecher
1-Zoll Hochtonhorn
Leistung: 500 (1.000) Watt
Max. Schalldruck: 131 dB
Sehr robuste Lautsprecherbox
Spritzwassergeschütztes, stabiles Frontgitter
Gewicht: 12,5 kg
Endstufe:
Leistung: 2 x 500W (8 Ohm) bei 2 Lautsprechern / 2x 1.000W (4 Ohm) bei 4 Lautsprechern.
Lüfterkühlung
Schutzschaltungen
Gewicht: 14,5 kg`,
    images: ['/images/pasetoutdoor.webp'],
    pricePerUnit: 70,
    pricePerPair: 105,
    categorySlug: 'pa-anlagen',
    specs: [
      { label: 'Leistung', value: '2x 500W (8 Ohm) / 2x 1.000W (4 Ohm)' },
      { label: 'Personen', value: 'bis 200 (Sprache), bis 150 (Musik), bis 100 (Live)' },
      { label: 'Typ', value: 'Outdoor-geeignet' },
      { label: 'Schalldruck', value: '131 dB' },
      { label: 'Gewicht', value: '12,5 kg (Top) + 14,5 kg (Endstufe)' },
    ],
  },
  {
    id: 'profi-pa-line-array-event-26a',
    name: 'Profi PA / Line-Array Event 26A',
    description: 'Das professionelle Line Array Event 26 von DAS Audio begeistert durch hochwertigen Sound und präzises Abstrahlverhalten. Ob für Live-Musik, Messe-Events oder Gala, das System kann je nach Bedarf skaliert werden durch zufügen weiterer Topteile / Bässe. Sie benötigen 2 Personen für den Aufbau und einen kleinen Kastenwagen oder Minibus zum Transport.',
    detailDescription: `Profi PA / Line-Array Event 26A
Line Array D.A.S. Audio EVENT
Das Universalgenie - skalierbares Line Array mit Pro Sound - Made in Spain
Es ist kein Geheimnis mehr, der spanische Lautsprecherbauer D.A.S. Audio zählt mittlerweile zu den angesagten Brands in Europa. Mit dem EVENT 26A Line Array ist ein kompaktes aber klanglich überzeugendes System am Start, das auch Sie begeistern wird.

Mögliche Konfigurationen:
4 Tops / 2 Bässe: 250 bis max. 300 Personen
8 Tops / 4 Bässe: 500 Personen
12 Tops / 6 Bässe: 750 bis max. 1.000 Personen
16 Tops / 8 Bässe: bis max. 1.500 Personen (nur auf Anfrage verfügbar)

Technische Daten:
Topteile Event 26A:
2 x 6-Zoll Tief-/Mitteltonlautsprecher mit PhasePlug
1 x 1,75-Zoll Hochtonhorn mit Waveformer
Leistung: 400W RMS / 800W Peak
Max. Schalldruck: 131 dB
Abstrahlwinkel 100° horizontal (vertikal abhängig von der Anzahl der Einheiten)
Gewicht: 16,5 kg
Bässe Event 115A:
Professioneller 15" Langhub-Tieftonlautsprecher
Leistung: 600W RMS / 1.200W Peak
Max Schalldruck: 131 dB
Programierbare 24-Bit DSP mit FIR-Filterung
Gewicht: 37 kg`,
    images: ['/images/paprofi1.webp', '/images/paprofi2.webp'],
    pricePerUnit: 225,
    categorySlug: 'pa-anlagen',
    priceOptions: [
      { label: 'Set Small (4 Tops, 2 Bässe)', price: 225 },
      { label: 'Set Medium (8 Tops, 4 Bässe)', price: 350 },
      { label: 'Set Large (12 Tops, 6 Bässe)', price: 500 },
    ],
    specs: [
      { label: 'Typ', value: 'Line-Array System' },
      { label: 'Personen', value: '250-1.500 (je nach Konfiguration)' },
      { label: 'Leistung', value: '400W RMS (Top) / 600W RMS (Bass)' },
      { label: 'Schalldruck', value: '131 dB' },
      { label: 'Gewicht', value: '16,5 kg (Top) / 37 kg (Bass)' },
      { label: 'Outdoor', value: 'Ja (IP44)' },
    ],
  },

  // Mischpulte & Mikrofone
  {
    id: 'allen-heath-sq5',
    name: 'Allen & Heath SQ-5',
    description: 'Professionelles Digital-Mischpult mit Touchscreen und umfangreichen Features.',
    detailDescription: `Digitalmischpult Allen & Heath SQ5
Perfektes Allroundpult für Live, Theater, Studio.
Kompromisslos in Qualität, Sound und Bedienung. Das SQ5 ist ein sehr gut ausgestattetes Digitalpult, das für alle Anwendungen geeignet ist. Auch wenn Sie noch nie mit dem Pult gearbeitet haben, finden Sie sich schnell zurecht.

Technische Daten:
16 Mono Mic Eingangskanäle XLR (erweiterbar auf bis zu 48 Kanäle via Digital Snake)
96 kHz FPGA-Verarbeitung
2 Stereo Eingänge (Klinke)
12 Mix Ausgänge (XLR)
3 Stereo Matrix Ausgänge
8 Effektblöke
7-Zoll Touchscreen
AES Digital Out
32×32 USB Audio Interface
17 Motor Fader
Trim, Phase, HPF, Gate, Insert, 4-band PEQ, Compressor, Delay für alle Eingänge
Insert, 4-band PEQ, GEQ, Compressor, Delay für alle Ausgänge
Im Flightcase
Talkback Mikro
Gewicht ca. 22 Kg (inkl. Flightcase)`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 250,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Allen & Heath' },
      { label: 'Typ', value: 'Digital Mixer' },
      { label: 'Kanäle', value: '16 (erweiterbar auf 48)' },
      { label: 'Eingänge', value: '16 XLR + 2 Stereo' },
      { label: 'Ausgänge', value: '12 Mix + 3 Matrix' },
      { label: 'Effekte', value: '8 Blöcke' },
      { label: 'Gewicht', value: 'ca. 22 kg' },
    ],
  },
  {
    id: 'allen-heath-ar2412',
    name: 'Allen & Heath AR2412',
    description: 'Professionelles Analog-Mischpult mit 24 Eingangskanälen.',
    detailDescription: `Allen & Heath AR2412
Perfektes Allroundpult für Live, Theater, Studio.
Kompromisslos in Qualität, Sound und Bedienung. Das AR2412 ist ein sehr gut ausgestattetes Analogpult, das für alle Anwendungen geeignet ist. Auch wenn Sie noch nie mit dem Pult gearbeitet haben, finden Sie sich schnell zurecht.

Technische Daten:
16 Mono Mic Eingangskanäle XLR (erweiterbar auf bis zu 48 Kanäle via Digital Snake)
96 kHz FPGA-Verarbeitung
2 Stereo Eingänge (Klinke)
12 Mix Ausgänge (XLR)
3 Stereo Matrix Ausgänge
8 Effektblöke
7-Zoll Touchscreen
AES Digital Out
32×32 USB Audio Interface
17 Motor Fader
Trim, Phase, HPF, Gate, Insert, 4-band PEQ, Compressor, Delay für alle Eingänge
Insert, 4-band PEQ, GEQ, Compressor, Delay für alle Ausgänge
Im Flightcase
Talkback Mikro
Gewicht ca. 22 Kg (inkl. Flightcase)`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 150,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Allen & Heath' },
      { label: 'Typ', value: 'Analog Mixer' },
      { label: 'Kanäle', value: '24' },
      { label: 'Eingänge', value: '16 XLR + 2 Stereo' },
      { label: 'Ausgänge', value: '12 Mix + 3 Matrix' },
      { label: 'Effekte', value: '8 Blöcke' },
      { label: 'Gewicht', value: 'ca. 22 kg' },
    ],
  },
  {
    id: 'yamaha-dm3',
    name: 'Yamaha DM-3',
    description: 'Kompaktes Digital-Mischpult mit moderner Bedienoberfläche.',
    detailDescription: `Yamaha DM-3
16-Kanal Digitalmischpult von Yamaha
Kompromissloser Profi-Sound im Kompaktformat
Das neue DM-3S von Yamaha liefert professionellen Sound und Features und hohen Bedienkomfort durch werkseigene Quick-Presets. Soundcheck in Minuten erledigt. Sie steuern dann das Pult dann vor der Bühne bequem über ihr Tablet oder Smartphone. Kein Verlegen von Multicores oder Netzwerkkabeln erforderlich.

Technische Daten:
16 Eingangskanäle (12xXLR, 4x XLR Kombibuchsen, Stereo Line-In Analog/Digital)
8 Ausgänge XLR (Master L7R, 6x Mix/Aux)
2 Multi-Effektprozessoren (Reverb, Delay, etc.)
EQ und Dynamikprozessor pro Kanal
Großes Multitouch-Display zur einfachen Bedienung
9 präzise 100mm Fader (8x Channel / 1x Master)
Remote-Bedienung über Tablet oder Smartphone (Stagemix App) - Wifi-Router erforderlich
Mehrspur-Aufnahmemöglichkeit direkt auf USB-Stick 
48/96 kHz Audio-Streaming über USB`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 200,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Yamaha' },
      { label: 'Typ', value: 'Digital Mixer' },
      { label: 'Kanäle', value: '16' },
      { label: 'Eingänge', value: '12x XLR + 4x Kombi + Stereo' },
      { label: 'Ausgänge', value: '8x XLR (Master + 6x Mix/Aux)' },
      { label: 'Effekte', value: '2 Multi-Effektprozessoren' },
      { label: 'Remote', value: 'Tablet/Smartphone (Stagemix App)' },
    ],
  },
  {
    id: 'yamaha-tio-1608d',
    name: 'Yamaha TIO-1608D',
    description: 'Stagebox für digitale Mischpulte mit 16 Eingängen.',
    detailDescription: `Yamaha TIO-1608D
16-Kanal Stagebox von Yamaha
Professionelle Stagebox für digitale Mischpulte
Die TIO-1608D Stagebox von Yamaha ermöglicht die professionelle Übertragung von Audio-Signalen von der Bühne zum Mischpult. Perfekt für den Einsatz mit Yamaha Digitalmischpulten wie dem DM-3. Kein Verlegen von Multicores oder Netzwerkkabeln erforderlich.

Technische Daten:
16 Eingangskanäle (12xXLR, 4x XLR Kombibuchsen, Stereo Line-In Analog/Digital)
8 Ausgänge XLR (Master L7R, 6x Mix/Aux)
2 Multi-Effektprozessoren (Reverb, Delay, etc.)
EQ und Dynamikprozessor pro Kanal
Großes Multitouch-Display zur einfachen Bedienung
9 präzise 100mm Fader (8x Channel / 1x Master)
Remote-Bedienung über Tablet oder Smartphone (Stagemix App) - Wifi-Router erforderlich
Mehrspur-Aufnahmemöglichkeit direkt auf USB-Stick 
48/96 kHz Audio-Streaming über USB`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 180,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Yamaha' },
      { label: 'Typ', value: 'Stagebox' },
      { label: 'Eingänge', value: '16' },
      { label: 'Ausgänge', value: '8x XLR' },
      { label: 'Kompatibilität', value: 'Yamaha Digital Mixer' },
    ],
  },
  {
    id: 'dynacord-cms-1600-3',
    name: 'DYNACORD CMS 1600-3',
    description: 'Professionelles Digital-Mischpult mit umfangreichen Features.',
    detailDescription: `Dynacord CMS 1600-3 Prof. Analogmischpult
Das Non-Plus-Ultra für ehrlichen Live-Sound 
Die Marke Dynacord stellt hochwertige, elektroakustische Werkzeuge her. Seit vielen Jahr ein Synonym für guten, professionellen Sound, Robustheit und intuitiver Bedienung. Einfach gut.

Technische Daten:
Intuitiv bedienbarer Mixerteil: 
20 Eingangskanäle (12 Mic/Line, 4 Mic/Stereo-Line)
Voicing-Filter für präsente Vocals Kanal 1-12
Low-Cut Filter, schaltbar
3-Band EQ mit parametrischen Mitten
2 Effektwege
2 Aux-Wege
2 Monitorwege
Phantomspeisung 
Zwei editierbare digitale Effekt-Geräte mit je 100 Presets und je 20 User-Memories
Stereo-Cinch Eingänge für CD-Player/Smartphone
Professionelles 4x4 24bit/49kHz USB Interface, Recording Software und MIDI-Interface
11-Band Stereo-Summen-Equalizer 
ALPS Fader und Potentiometer
Großes, kontraststarkes OLED-Display
Gewicht: 18.5kg (zzgl. Flightcase)`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 300,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'DYNACORD' },
      { label: 'Typ', value: 'Digital Mixer' },
      { label: 'Kanäle', value: '20 (12 Mic/Line, 4 Mic/Stereo-Line)' },
      { label: 'Effekte', value: '2 digitale Effekt-Geräte' },
      { label: 'USB Interface', value: '4x4 24bit/48kHz' },
      { label: 'Gewicht', value: '18,5 kg (zzgl. Flightcase)' },
    ],
  },
  {
    id: 'pioneer-djm-900-nexus',
    name: 'Pioneer DJM-900 Nexus',
    description: 'Professioneller DJ-Mixer mit erweiterten Mixing-Features und Effekten.',
    detailDescription: `Pioneer DJM-900 NXS
Der ultimative DJ Mixer für Profis und Anspruchsvolle
Der vielseitige DJM-900 Nexus verfügt neben 4 voll ausgestatteten Kanälen (Line/Digital) unter anderem auch über einen unabhängigen Send/Return, 4 Phono-Eingänge und 2 USB-Anschlüsse – bietet dir also viel Flexibilität beim Einrichten deines indviduellen Setups

Technische Daten:
4 Stereo-Eingangskanäle
Line- / Coax-Digital oder Phono (umschaltbar)
3 Band Klangregelung / EQ plus Isolator
Hochwertiger, super präziser Cross-Fader
Digital-Effekte in Studioqualität (96kHz, 24bit)
Kompatibel mit Traktor und Serato Pro
Master- und SUB (DJ Booth) / Monitor Ausgang
USB Audio für Laptops
Mikrofon-Eingang mit Talk-Over Funktion, Klangregelung und Effekten
Kopfhörerausgang
Gewicht: ca. 11 kg (inkl. Flightcase)`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 120,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Pioneer' },
      { label: 'Typ', value: 'DJ Mixer' },
      { label: 'Kanäle', value: '4 Stereo' },
      { label: 'Eingänge', value: 'Line/Digital/Phono, 4x Phono, 2x USB' },
      { label: 'Effekte', value: 'Digital-Effekte (96kHz, 24bit)' },
      { label: 'Kompatibilität', value: 'Traktor, Serato Pro' },
      { label: 'Gewicht', value: 'ca. 11 kg (inkl. Flightcase)' },
    ],
  },
  {
    id: 'mackie-analog-mixer',
    name: 'Analoge MACKIE Mischpulte',
    description: 'Zuverlässige analoge Mischpulte von MACKIE in verschiedenen Größen.',
    detailDescription: `Analoge Mischpulte von MACKIE
Robuste und leicht zu bedienender Mixer mit Digitaleffekten
Die MACKIE ProFx 8 Serie bietet hochwertige Mikrofonvorverstärker und alle nötigen Features, die für guten Live-Sound notwendig sind. Durch das eingebaute Effektgerät ist es die perfekte All-in-One Lösung für kleinere Beschallungsaufgaben.

Features:
4-12 Eingangskanäle insgesamt
extrem rauscharme Mikrofonvorverstärker
Stereo Kanäle mit extra Stereo Return für externe Effektgeräte
Digitaleffekt mit 16 Effekten wie Reverb, Delay und Chorus
7 Band Grafik EQ für Summe oder Monitore (nur ProFX8 und ProFX12)
1 Aux-Weg für Monitor
2 bzw. 3 Band EQ pro Kanal
Hi-Z Eingang für Gitarre/Bass
100 Hz Low Cut Filter
48V Phantomspeisung schaltbar
USB Audiointerface 
Bluetooth 5.0 Audio Streaming (nur ProFX 6)
Kopfhörerausgang`,
    images: ['/images/chorkonzert-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'MACKIE' },
      { label: 'Typ', value: 'Analog Mixer' },
      { label: 'Varianten', value: '16/24/32 Kanäle' },
      { label: 'Eingangskanäle', value: '4-12' },
      { label: 'Effekte', value: '16 Digitaleffekte' },
      { label: 'Bluetooth', value: '5.0 (nur ProFX 6)' },
      { label: 'USB', value: 'Audiointerface' },
    ],
  },
  {
    id: 'shure-mikrofon-set-sm58-sm57',
    name: 'Shure Mikrofon Set SM58 / SM57',
    description: 'Professionelles Mikrofon-Set mit Shure SM58 für Gesang und SM57 für Instrumente.',
    detailDescription: `Shure Mikrofon Set SM58 / SM57
Die Standardausstattung, die auf keiner Bühne fehlen darf. Robuste dynamische Mikrofone. Wahlweise für Gesang/Sprache (Shure Beta58a) oder Instrument, Amp, Blasinstrumente (Shure SM-57) jeweils mit Mikrofonständer von König & Meyer und 10m XLR Kabel.

Mietpreis: 10,- €`,
    images: ['/images/slxd4e86-1920w.webp'],
    pricePerUnit: 40,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Shure' },
      { label: 'Typ', value: 'Dynamisch Kabel' },
      { label: 'Set', value: 'SM58 + SM57' },
      { label: 'Anwendung', value: 'Gesang/Sprache oder Instrument' },
      { label: 'Zubehör', value: 'Mikrofonständer + 10m XLR Kabel' },
    ],
  },
  {
    id: 'mikrofon-set-drums',
    name: 'Mikrofon Set für Drums / Schlagzeug',
    description: 'Komplettes Mikrofon-Set für professionelle Schlagzeug-Aufnahme.',
    detailDescription: `Mikrofon Set für Drums / Schlagzeug
Zur Abnahme eines Standard Drumsets erhalten Sie hier ein Komplettpaket mit 7 Mikrofonen:

- 1 x Bassdrum Shure Beta52
- 4 x Snare/Tom Clipmikros Beyerdynamic TG D58
- 2 x Kondensatormikro für Hi Hat / Overhead), Lewitt LCL40
- inkl. Stativen und XLR Kabeln

Mietpreis: 45,- €`,
    images: ['/images/slxd4e86-1920w.webp'],
    pricePerUnit: 100,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Typ', value: 'Drum-Mikrofon Set' },
      { label: 'Anwendung', value: 'Schlagzeug' },
      { label: 'Komponenten', value: 'Kick, Snare, Toms, Overhead' },
      { label: 'Anzahl Mikrofone', value: '7' },
      { label: 'Zubehör', value: 'Stative + XLR Kabel' },
    ],
  },
  {
    id: 'funkmikrofon-sprache-moderation',
    name: 'Funkmikrofon für Sprache / Moderation',
    description: 'Professionelles Funkmikrofon speziell für Sprache und Moderation.',
    detailDescription: `Funkmikrofon für Sprache / Moderation
Unsere Funkstrecken von Beyerdynamic wahlweise mit Handsender oder Headset / Kopfbügelmikrofon eigenen sich perfekt für Ansprachen, Reden, Moderation und Konferenzen. Sprache wird sauber und störungsfrei übertragen. Wahlweise Handmikrofon oder Headset mit Taschensender.

Batterien (AA) sind nicht im Mietpreis enthalten.

Mietpreis: 25,- €`,
    images: ['/images/slxd4e86-1920w.webp'],
    pricePerUnit: 35,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Typ', value: 'Funkmikrofon' },
      { label: 'Anwendung', value: 'Sprache/Moderation' },
      { label: 'Frequenz', value: 'UHF' },
      { label: 'Varianten', value: 'Handmikrofon oder Headset' },
      { label: 'Hersteller', value: 'Beyerdynamic' },
    ],
  },
  {
    id: 'profi-funkmikrofon-shure-slxd2',
    name: 'Profi Funkmikrofon Shure SLXD2',
    description: 'Professionelles Funkmikrofon von Shure für höchste Ansprüche.',
    detailDescription: `Profi Funkmikrofon Shure SLXD2
Shure stellt mit den neuen SLXD Funkstrecken zuverlässige Arbeitstiere für den Bühneneinsatz zur Verfügung. Erstklassige Übertragungssicherheit in Kombination mit dynamischer, rauscharmer Audioqualität sind für den Profieinsatz gewährleistet. Mehrere Funkstrecken lassen sich parallel betreiben.

Wahlweise auch mit Taschensender und Kopfbügelmikrofon (Nieren- oder Kugelcharakteristik). 

Batterien (AA) sind nicht im Mietpreis enthalten.

Mietpreis: 40,- €`,
    images: ['/images/slxd4e86-1920w.webp'],
    pricePerUnit: 60,
    categorySlug: 'mischpulte-mikrofone',
    specs: [
      { label: 'Hersteller', value: 'Shure' },
      { label: 'Typ', value: 'Funkmikrofon' },
      { label: 'Modell', value: 'SLXD2' },
      { label: 'Varianten', value: 'Handmikrofon oder Kopfbügelmikrofon' },
      { label: 'Parallelbetrieb', value: 'Mehrere Strecken möglich' },
    ],
  },

  // Statische Scheinwerfer / LED Spots
  {
    id: 'akku-spot-indoor-rgb',
    name: 'Akku Spot Indoor RGB',
    description: 'Praktisches LED Akku Uplight zur stimmungsvollen Beleuchtung von Innenräumen, Bühnen, Wänden/Säulen. Die Spots können einzeln via Fernbedienung oder synchronisiert über Wireless DMX gesteuert werden. Die Akkulaufzeit beträgt je nach Intensität 5-10 Stunden.',
    detailDescription: `LED Akku Uplight RGB
Dekoratives Licht - auch ohne Kabelsalat
Praktisches LED Akku Uplight zur stimmungsvollen Beleuchtung von Innenräumen, Bühnen, Wänden/Säulen. Die Spots können einzeln via Fernbedienung oder synchronisiert über Wireless DMX gesteuert werden. Die Akkulaufzeit beträgt je nach Intensität 5-10 Stunden.

Technische Daten:
3 Hochleistungs-LEDs mit 3 Watt
Stufenlose RGB Farbmischung
5-10 Stunden Akkubetrieb (je nach Intensität)
Statische Farben oder Automatikprogramme
DMX-steuerbar oder Stand-Alone Betrieb
Steuerung via Fernbedienung oder Wireless DMX
sehr kompakte, robuste Bauweise 
passive Kühlung, absolut Geräuschlos
Gewicht nur 1,2 kg`,
    images: ['/images/akku-spot-indoor.webp'],
    pricePerUnit: 8,
    priceOptions: [
      { label: 'Einzeln', price: 8 },
      { label: '4er Set', price: 30 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'Akku Spot' },
      { label: 'Farben', value: 'RGB' },
      { label: 'Anwendung', value: 'Indoor' },
      { label: 'Leistung', value: '3x 3W LEDs' },
      { label: 'Laufzeit', value: '5-10 Stunden (je nach Intensität)' },
      { label: 'Steuerung', value: 'Fernbedienung oder Wireless DMX' },
      { label: 'Gewicht', value: '1,2 kg' },
    ],
  },
  {
    id: 'akku-spot-outdoor-rgbw-ip65',
    name: 'Akku Spot Outdoor RGBW, IP65',
    description: 'Mit 4 x 12W 4-in-1 LEDs ausgestattet, bietet dieses Uplight eine hohe Lichtleistung bei gleichzeitig kompakten und praktischen Abmessungen. Der Spot kann geneigt und mit dem mitgelieferten Diffus-Filter in der Abstrahlung angepasst werden. Betrieb ist Stand-Alone, via Fernbedienung oder Wireless DMX möglich. Wetterfest nach IP65, für Verwendung auch im Außenbereich.',
    detailDescription: `Akku LED Uplight IP65 
Schnell aufgebaut und lichtstark!
Mit 4 x 12W 4-in-1 LEDs ausgestattet, bietet dieses Uplight eine hohe Lichtleistung bei gleichzeitig kompakten und praktischen Abmessungen. Der Spot kann geneigt und mit dem mitgelieferten Diffus-Filter in der Abstrahlung angepasst werden. Betrieb ist Stand-Alone, via Fernbedienung oder Wireless DMX möglich. Wetterfest nach IP65, für Verwendung auch im Außenbereich.

Technische Daten:
4 Hochleistungs-LEDs mit 12 Watt (4-in-1 LEDs)
RGBW LEDs mit flickerfreier Farbmischung
Wetterfest Schutzklasse IP65
Abstrahlwinkel durch Diffus-Filter (beiliegend) veränderbar
Verschiedene Anstellwinkel, stufenlos justierbar
Steuerung: Stand-Alone, Fernbedienung oder Wireless DMX
lautlos
Gewicht ca. 4 kg`,
    images: ['/images/akku-spot-outdoor.webp'],
    pricePerUnit: 12.5,
    priceOptions: [
      { label: 'Einzeln', price: 12.5 },
      { label: '4er Set', price: 40 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'Akku Spot' },
      { label: 'Farben', value: 'RGBW' },
      { label: 'Schutz', value: 'IP65' },
      { label: 'Leistung', value: '4x 12W 4-in-1 LEDs' },
      { label: 'Steuerung', value: 'Stand-Alone, Fernbedienung oder Wireless DMX' },
      { label: 'Features', value: 'Geneigbar, Diffus-Filter, Wetterfest' },
      { label: 'Gewicht', value: 'ca. 4 kg' },
    ],
  },
  {
    id: 'led-outdoor-fluter-ip65',
    name: 'LED Outdoor Fluter, IP65',
    description: 'Lichtstarker Outdoor Fluter zum Beleuchten von Gebäudeteilen, Bäumen/Büschen, u.v.m. 16 Stck 8 Watt LEDs sorgen für den nötigen Output mit RGBW Farbmischung. Die Scheinwerfer können manuell über das Menü oder via DMX gesteuert werden. Sie sind wetterfest laut IP65.',
    detailDescription: `Outdoor LED Spot / Fluter
Wetterfeste und helle RGBW Scheinwerfer für Außenanwendungen
Lichtstarker Outdoor Fluter zum Beleuchten von Gebäudeteilen, Bäumen/Büschen, u.v.m. 16 Stck 8 Watt LEDs sorgen für den nötigen Output mit RGBW Farbmischung. Die Scheinwerfer können manuell über das Menü oder via DMX gesteuert werden. Sie sind wetterfest laut IP65.

Technische Daten:
16 Hochleistungs-LEDs mit 8 Watt
Schutzklasse IP65
Stufenlose RGBW Farbmischung
Steuerung: Manuell über Menü oder via DMX
Flache Bauweise 
Abstrahlwinkel 19° (40° Feldwinkel)
Konvektionsgekühlt
Gewicht ca. 3,5 kg`,
    images: ['/images/led-outdoor-fluter.webp'],
    pricePerUnit: 15,
    priceOptions: [
      { label: 'Einzeln', price: 15 },
      { label: '4er Set', price: 50 },
    ],
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'LED Fluter' },
      { label: 'Schutz', value: 'IP65' },
      { label: 'Anwendung', value: 'Outdoor' },
      { label: 'Leistung', value: '16x 8W LEDs' },
      { label: 'Farben', value: 'RGBW' },
      { label: 'Abstrahlwinkel', value: '19° (40° Feldwinkel)' },
      { label: 'Steuerung', value: 'Manuell über Menü oder via DMX' },
      { label: 'Gewicht', value: 'ca. 3,5 kg' },
    ],
  },
  {
    id: 'led-verfolgerspot-follow-spot',
    name: 'LED Verfolgerspot Follow Spot',
    description: 'Mit 120W reinweißer LED genügt dieser Follow Spot für Theater- / Bühnenanwendung mittlerer Distanz. Redner, Künstler, Schauspieler setzen Sie so akzentvoll in Szene. Der Spot ermöglicht verschiedene Weißtöne (von 2.800 bis 5.000K), manueller Zoom und motorgesteuerte Iris/Blende und Dimmer. Inkl. Verfolgerstativ und Flightcase.',
    detailDescription: `LED Verfolgerspot Follow Spot
Mit 120W reinweißer LED genügt dieser Follow Spot für Theater- / Bühnenanwendung mittlerer Distanz. Redner, Künstler, Schauspieler setzen Sie so akzentvoll in Szene. Der Spot ermöglicht verschiedene Weißtöne (von 2.800 bis 5.000K), manueller Zoom und motorgesteuerte Iris/Blende und Dimmer. Inkl. Verfolgerstativ und Flightcase.

Mietpreis: 60,- €`,
    images: ['/images/follow-sot.webp'],
    pricePerUnit: 60,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'Follow Spot' },
      { label: 'Technologie', value: 'LED' },
      { label: 'Anwendung', value: 'Bühne' },
      { label: 'Leistung', value: '120W reinweiß' },
      { label: 'Farbtemperatur', value: '2.800 - 5.000K' },
      { label: 'Features', value: 'Zoom, Iris/Blende, Dimmer' },
      { label: 'Zubehör', value: 'Verfolgerstativ + Flightcase' },
    ],
  },
  {
    id: 'led-pll-panel-power-strobe',
    name: 'LED PLL Panel / Power Strobe',
    description: 'Das mit insgesamt 480 LEDs ausgestattet Power Panel eignet sich dank einstellbarer Farbtemperatur (warm weiß / kalt weiß) für Foto, Video, Grundbeleuchtung oder als hochwertiges Stroboskop. Inkl. Stativ oder Theaterhaken.',
    detailDescription: `eurolite High-Power LED Panel WW/CW
Gleichmäßiges, flimmerfreies Licht mit stufenlos veränderbarer Farbtemperatur
Das mit insgesamt 480 LEDs ausgestattet Power Panel eignet sich dank einstellbarer Farbtemperatur (warm weiß / kalt weiß) für Foto, Video, Grundbeleuchtung oder als hochwertiges Stroboskop. Inkl. Stativ oder Theaterhaken.

Technische Daten:
480 leistungsstarke LEDs (240 kaltweiß + 240 warmweiß)
Variable Farbtemperatur 3200 K - 5600 K
Einsatz als Foto-/Videolicht, Bühnenbeleuchtung oder Power-Stroboskop
Frostfilter für homogenes und weiches Licht
Blend- und Transportschutz durch 4 Torblenden
Geräuschloser Betrieb durch Konvektionskühlung
Dimmer elektronisch; Dimmergeschwindigkeit (Sprungantwort) einstellbar
Ansteuerbar über DMX; Master/Slave Funktion
Flimmerfrei
Abstrahlwinkel 120°
Sehr hoher Farbwiedergabeindex (CRI <90)
Mit Montagebügel
Stativ- oder Traversenmontage (Theaterhaken)
Gewicht: ca. 12 kg`,
    images: ['/images/led-ppl.webp'],
    pricePerUnit: 30,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'LED Panel' },
      { label: 'Features', value: 'Stroboskop' },
      { label: 'Leistung', value: 'High Power' },
      { label: 'LEDs', value: '480 (240 CW + 240 WW)' },
      { label: 'Farbtemperatur', value: '3.200K - 5.600K' },
      { label: 'Abstrahlwinkel', value: '120°' },
      { label: 'CRI', value: '<90' },
      { label: 'Steuerung', value: 'DMX, Master/Slave' },
      { label: 'Gewicht', value: 'ca. 12 kg' },
    ],
  },
  {
    id: 'party-lichtset-kompakt',
    name: 'Party Lichtset kompakt',
    description: 'Das KLS-120 ist ein ultrakompaktes Licht Set im Hosentaschenformat. Es besteht aus 2 farbigen LED Spots und 2 LED Derbys. Die Ansteuerung der Lichteffekte erfolgt soundgesteuert über das eingebaute Mikrofon. Stecker in die Steckdose, fertig. Inkl. Leuchtenstativ.',
    detailDescription: `LED Party Lichtset KLS-120
Komplette Lichtanlage im Hosentaschenformat
Das KLS-120 ist ein ultrakompaktes Licht Set im Hosentaschenformat. Es besteht aus 2 farbigen LED Spots und 2 LED Derbys. Die Ansteuerung der Lichteffekte erfolgt soundgesteuert über das eingebaute Mikrofon. Stecker in die Steckdose, fertig. Inkl. Leuchtenstativ.

Technische Daten:
2 farbige LED Spots
2 LED Derbys
RGB Farbmischung
Soundgesteuerte Ansteuerung über eingebautes Mikrofon
Automatikprogramme
DMX-steuerbar oder Stand-Alone Betrieb
Ultrakompakt und leicht zu transportieren 
Gewicht: ca. 9 kg inkl. Stativ`,
    images: ['/images/kls120_1-1920w.webp'],
    pricePerUnit: 25,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'Lichtset' },
      { label: 'Größe', value: 'Kompakt' },
      { label: 'Anwendung', value: 'Party' },
      { label: 'Spots', value: '2x mit je 3x 8W COB LEDs' },
      { label: 'Derbys', value: '2x rotierend, 4x3W' },
      { label: 'Farben', value: 'RGB' },
      { label: 'Steuerung', value: 'DMX, Sound-to-Light, Automatik' },
      { label: 'Gewicht', value: 'ca. 9 kg inkl. Stativ' },
    ],
  },
  {
    id: 'led-pro-lichtbar-rgb',
    name: 'LED Pro Lichtbar RGB',
    description: 'Die KLS 902 Next von eurolite ist eine mit 4 lichtstarken RGB PAR Spots ausgestattete LED Bar. Sie wird zur farbigen Beleuchtung von Bühne, Live-Band oder Tanzflächen eingesetzt. Die Steuerung erfolgt wahlweise Stand-Alone via Fernbedienung oder per DMX. Wir bieten auch passende DMX Controller an. Inkl. Leuchtenstativ.',
    detailDescription: `Eurolite LED Pro PAR-Lichtset KLS 902 Next
LED Beleuchtung auf professionellem Niveau.
Die KLS 902 Next von eurolite ist eine mit 4 lichtstarken RGB PAR Spots ausgestattete LED Bar. Sie wird zur farbigen Beleuchtung von Bühne, Live-Band oder Tanzflächen eingesetzt. Die Steuerung erfolgt wahlweise Stand-Alone via Fernbedienung oder per DMX. Wir bieten auch passende DMX Controller an. Inkl. Leuchtenstativ.

Technische Daten:
4 lichtstarke RGB PAR Spots
RGB Farbmischung
Steuerung: Stand-Alone via Fernbedienung oder per DMX
DMX Controller optional verfügbar
Einsatz: Bühne, Live-Band, Tanzflächen
Ultrakompakt und leicht zu transportieren 
inkl. Leuchtenstativ
Gewicht: ca. 14 kg (inkl. Stativ)`,
    images: ['/images/led-pro.webp'],
    pricePerUnit: 30,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'LED Lichtbar' },
      { label: 'Farben', value: 'RGB' },
      { label: 'Klasse', value: 'Pro' },
      { label: 'PAR Spots', value: '4x lichtstark RGB' },
      { label: 'Steuerung', value: 'Stand-Alone via Fernbedienung oder DMX' },
      { label: 'Anwendung', value: 'Bühne, Live-Band, Tanzflächen' },
      { label: 'Zubehör', value: 'Leuchtenstativ, DMX Controller optional' },
      { label: 'Gewicht', value: 'ca. 14 kg (inkl. Stativ)' },
    ],
  },
  {
    id: 'led-effekt-bar-mit-scannern',
    name: 'LED Effekt Bar mit Scannern',
    description: 'Mit dieser raumgreifenden Lichteffekt Leiste zaubern für ihre Gäste eine beeindruckende Light-Show. Gleich 4 unterschiedliche Effekte stehen in einem dennoch kompakten Querträger bereit. 4 farbige Spots, 4 UV LEDs, 2 Scanner mit beweglichen Spiegeln und 1 zentraler Derby Effekt. Gesteuert wird das ganze per Fernbedienung oder einfach im Sound-to-Light Modus mittels eingebautem Mikrofon. Inkl. Leuchtenstativ.',
    detailDescription: `Eurolite LED Scan FX Lichtset
Beeindruckend abwechslungsreiche Lightshow im Kompaktformat
Mit dieser raumgreifenden Lichteffekt Leiste zaubern für ihre Gäste eine beeindruckende Light-Show. Gleich 4 unterschiedliche Effekte stehen in einem dennoch kompakten Querträger bereit. 4 farbige Spots, 4 UV LEDs, 2 Scanner mit beweglichen Spiegeln und 1 zentraler Derby Effekt. Gesteuert wird das ganze per Fernbedienung oder einfach im Sound-to-Light Modus mittels eingebautem Mikrofon. Inkl. Leuchtenstativ.

Technische Daten:
4 farbige LED Spots
1 zentraler Derby Effekt
4 UV LEDs
2 Scanner mit beweglichen Spiegeln
RGB Farbmischung
Steuerung: Fernbedienung oder Sound-to-Light Modus (eingebautes Mikrofon)
DMX-steuerbar oder Stand-Alone Betrieb
Ultrakompakt und leicht zu transportieren 
inkl. Leuchtenstativ
Gewicht: ca. 15 kg (inkl. Stativ)`,
    images: ['/images/led-spot-scanner.webp'],
    pricePerUnit: 40,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'LED Effekt Bar' },
      { label: 'Features', value: '4 unterschiedliche Effekte' },
      { label: 'Anwendung', value: 'Lichtshow' },
      { label: 'Spots', value: '4x farbige Spots' },
      { label: 'Derby', value: '1x zentraler Derby Effekt' },
      { label: 'Scanner', value: '2x mit beweglichen Spiegeln' },
      { label: 'Zusatz', value: '4x UV LEDs' },
      { label: 'Steuerung', value: 'Fernbedienung oder Sound-to-Light (eingebautes Mikrofon)' },
      { label: 'Zubehör', value: 'Leuchtenstativ' },
      { label: 'Gewicht', value: 'ca. 15 kg (inkl. Stativ)' },
    ],
  },
  {
    id: 'high-power-led-effekt-bar-mit-laser',
    name: 'High-Power LED Effekt Bar mit Laser',
    description: 'Die ultrahellen Spots und Derbys sorgen in Kombination mit dem zentralen Klasse 2B Laser für ein eindrucksvolles Lichtspektakel. Perfekt für DJs, Partys und Hochzeiten kann mit nur einer dieser Leisten eine komplette Tanzfläche bespielt werden. Die Ansteuerung erfolgt soundgesteuert oder via Fußleiste, die sich per Funk verbindet. Inkl. Leuchtenstativ.',
    detailDescription: `Eurolite LED Pro-FX BAR mit Laser
Die Lightshow zum Mitnehmen.
Die ultrahellen Spots und Derbys sorgen in Kombination mit dem zentralen Klasse 2B Laser für ein eindrucksvolles Lichtspektakel. Perfekt für DJs, Partys und Hochzeiten kann mit nur einer dieser Leisten eine komplette Tanzfläche bespielt werden. Die Ansteuerung erfolgt soundgesteuert oder via Fußleiste, die sich per Funk verbindet. Inkl. Leuchtenstativ.

Technische Daten:
Ultrahelle LED Spots
LED Derbys
Klasse 2B Laser (zentral)
abgestimmte Automatikprogramme
Sound-to-Light Modus
Steuerung: Soundgesteuert oder via Fußleiste (Funkverbindung)
DMX-steuerbar oder Stand-Alone Betrieb
Ultrakompakt und leicht zu transportieren 
inkl. Leuchtenstativ
Gewicht: ca. 12,5 kg (inkl. Stativ)`,
    images: ['/images/led-spot-laser.webp'],
    pricePerUnit: 45,
    categorySlug: 'statische-scheinwerfer-led-spots',
    specs: [
      { label: 'Typ', value: 'LED Effekt Bar' },
      { label: 'Features', value: 'Laser' },
      { label: 'Leistung', value: 'High Power' },
      { label: 'Spots', value: 'Ultrahelle LED Spots' },
      { label: 'Derbys', value: 'LED Derbys' },
      { label: 'Laser', value: 'Klasse 2B (zentral)' },
      { label: 'Anwendung', value: 'DJs, Partys, Hochzeiten' },
      { label: 'Steuerung', value: 'Soundgesteuert oder via Fußleiste (Funkverbindung)' },
      { label: 'Zubehör', value: 'Leuchtenstativ' },
      { label: 'Gewicht', value: 'ca. 12,5 kg (inkl. Stativ)' },
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
    description: 'Dynamischer LED-Derby-Effekt mit integriertem Stroboskop. Für intensive Lichtshows.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 40,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'LED Derby' },
      { label: 'Features', value: 'Stroboskop' },
      { label: 'Anwendung', value: 'Lichtshow' },
    ],
  },
  {
    id: 'led-triple-flower',
    name: 'LED Triple Flower',
    description: 'LED-Effektgerät mit drei rotierenden Blüten. Atmosphärische Beleuchtungseffekte.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 35,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'LED Flower' },
      { label: 'Anzahl', value: '3 Blüten' },
      { label: 'Effekt', value: 'Rotierend' },
    ],
  },
  {
    id: 'mirror-ball-saturn-led-effekt',
    name: 'Mirror Ball / Saturn LED Effekt',
    description: 'Spiegelkugel mit LED-Saturn-Effekt. Klassischer Disco-Effekt mit moderner LED-Technologie.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 30,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Mirror Ball' },
      { label: 'Features', value: 'LED Saturn' },
      { label: 'Anwendung', value: 'Disco/Party' },
    ],
  },
  {
    id: 'led-moving-head-spot-100w',
    name: 'LED Moving Head Spot 100W',
    description: 'Professioneller LED Moving Head Spot mit 100W Leistung. Präzise Bewegungen und vielfältige Effekte.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 50,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Moving Head Spot' },
      { label: 'Leistung', value: '100W' },
      { label: 'Technologie', value: 'LED' },
    ],
  },
  {
    id: 'led-moving-head-beam-200w',
    name: 'LED Moving Head Beam 200W',
    description: 'Scharf gebündelter LED Moving Head Beam mit 200W. Dramatische Lichtstrahlen für große Events.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 70,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Moving Head Beam' },
      { label: 'Leistung', value: '200W' },
      { label: 'Beam-Winkel', value: 'Narrow' },
    ],
  },
  {
    id: 'led-moving-head-wash-7x40w',
    name: 'LED Moving Head WASH 7 x 40W',
    description: 'Weitwinkliger LED Moving Head Wash mit 7 x 40W. Gleichmäßige Ausleuchtung mit Bewegungsmöglichkeit.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Moving Head Wash' },
      { label: 'Leistung', value: '7 x 40W' },
      { label: 'Beam-Winkel', value: 'Weitwinklig' },
    ],
  },
  {
    id: 'jb-spyder-show-pattern-laser',
    name: 'JB Spyder Show- / Pattern Laser',
    description: 'Professioneller Show-Laser mit Pattern-Funktion. Atemberaubende Laser-Effekte für Events.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 150,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Show Laser' },
      { label: 'Features', value: 'Pattern' },
      { label: 'Hersteller', value: 'JB Spyder' },
    ],
  },
  {
    id: '2000mw-diodenlaser-showlaser',
    name: '2.000 mW Diodenlaser Showlaser',
    description: 'Hochleistungs-Diodenlaser mit 2000mW für professionelle Laser-Shows. Intensive Laser-Effekte.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 200,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Diodenlaser' },
      { label: 'Leistung', value: '2000 mW' },
      { label: 'Anwendung', value: 'Show Laser' },
    ],
  },
  {
    id: 'led-wasser-projektionseffekt',
    name: 'LED Wasser Projektionseffekt',
    description: 'LED-Projektionseffekt für Wasser-Oberflächen. Atmosphärische Beleuchtung für Events.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 60,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Wasser Projektion' },
      { label: 'Technologie', value: 'LED' },
      { label: 'Anwendung', value: 'Wasser-Effekte' },
    ],
  },
  {
    id: '50cm-spiegelkugel-set',
    name: '50cm Spiegelkugel SET',
    description: 'Komplettes Set mit 50cm Spiegelkugel und Motor. Klassischer Disco-Effekt.',
    images: ['/images/sk3-1920w.webp'],
    pricePerUnit: 45,
    categorySlug: 'moving-heads',
    specs: [
      { label: 'Typ', value: 'Spiegelkugel Set' },
      { label: 'Größe', value: '50cm' },
      { label: 'Inhalt', value: 'Kugel + Motor' },
    ],
  },


  // Nebelmaschinen & Bühneneffekte
  {
    id: 'party-nebelmaschine-800w',
    name: 'Party Nebelmaschine 800W',
    description: 'Kompakte Party-Nebelmaschine mit 800W Leistung. Ideal für kleine bis mittlere Veranstaltungen.',
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 25,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Leistung', value: '800W' },
      { label: 'Typ', value: 'Party Nebelmaschine' },
      { label: 'Anwendung', value: 'Kleine bis mittlere Events' },
    ],
  },
  {
    id: 'nebelmaschine-1500w',
    name: 'Nebelmaschine 1.500W',
    description: 'Professionelle Nebelmaschine mit 1500W Leistung. Starker Nebelausstoß für große Events.',
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 45,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Leistung', value: '1500W' },
      { label: 'Typ', value: 'Nebelmaschine' },
      { label: 'DMX', value: 'Ja' },
    ],
  },
  {
    id: 'vertikal-nebelmaschine-spray-fogger',
    name: 'Vertikal Nebelmaschine / Spray Fogger',
    description: 'Vertikale Nebelmaschine für spezielle Effekte. Spray Fogger für eindrucksvolle Nebelwände.',
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 55,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'Vertikal / Spray Fogger' },
      { label: 'Richtung', value: 'Vertikal' },
      { label: 'Anwendung', value: 'Spezialeffekte' },
    ],
  },
  {
    id: 'hazer',
    name: 'Hazer',
    description: 'Dezenter Haze für subtile Lichteffekte. Erzeugt gleichmäßigen Dunst ohne starke Wolken.',
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 50,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'Hazer' },
      { label: 'Ausstoß', value: 'Kontinuierlich' },
      { label: 'DMX', value: 'Ja' },
    ],
  },
  {
    id: 'bodennebelmaschine',
    name: 'Bodennebelmaschine',
    description: 'Spezielle Nebelmaschine für Bodeneffekte. Erzeugt Nebel, der am Boden bleibt.',
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 40,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'Bodennebelmaschine' },
      { label: 'Effekt', value: 'Bodennebel' },
      { label: 'Anwendung', value: 'Bühnen-Effekte' },
    ],
  },
  {
    id: 'kaltfunkenmaschine-cold-spark',
    name: 'Kaltfunkenmaschine "Cold Spark"',
    description: 'Kaltfunkenmaschine für spektakuläre Funken-Effekte. Sicher und eindrucksvoll.',
    images: ['/images/z1200_1-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'nebelmaschinen-buehneneffekte',
    specs: [
      { label: 'Typ', value: 'Cold Spark' },
      { label: 'Effekt', value: 'Kaltfunken' },
      { label: 'Sicherheit', value: 'Kalt, sicher' },
    ],
  },

  // Medien & Konferenztechnik
  {
    id: 'lcd-dlp-beamer',
    name: 'LCD DLP Beamer',
    description: 'Professioneller LCD DLP Beamer für Präsentationen und Videowände.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: 'LCD DLP' },
      { label: 'Auflösung', value: 'Full HD' },
      { label: 'Anschlüsse', value: 'HDMI, VGA, USB' },
    ],
  },
  {
    id: 'laser-dlp-beamer',
    name: 'Laser DLP Beamer',
    description: 'Laser DLP Beamer mit langer Lebensdauer und konstanter Helligkeit.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 150,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: 'Laser DLP' },
      { label: 'Auflösung', value: 'Full HD' },
      { label: 'Vorteil', value: 'Lange Lebensdauer' },
    ],
  },
  {
    id: 'laser-dlp-beamer-pro',
    name: 'Laser DLP Beamer Pro',
    description: 'Professioneller Laser DLP Beamer mit erweiterten Features für anspruchsvolle Präsentationen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 200,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: 'Laser DLP Pro' },
      { label: 'Auflösung', value: 'Full HD / WUXGA' },
      { label: 'Helligkeit', value: 'Hoch' },
    ],
  },
  {
    id: '4k-laser-dlp-beamer',
    name: '4K Laser DLP Beamer',
    description: 'Ultra HD 4K Laser DLP Beamer für höchste Bildqualität. Ideal für Premium-Präsentationen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 300,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Technologie', value: '4K Laser DLP' },
      { label: 'Auflösung', value: '4K UHD (3840x2160)' },
      { label: 'HDR', value: 'Ja' },
    ],
  },
  {
    id: '4k-signature-display-65zoll',
    name: '4K Signature Display - 65 Zoll',
    description: 'Professionelles 4K Signature Display mit 65 Zoll. Höchste Bildqualität für Konferenzen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 250,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Größe', value: '65 Zoll' },
      { label: 'Auflösung', value: '4K UHD' },
      { label: 'Typ', value: 'Signature Display' },
    ],
  },
  {
    id: 'speech-100-konferenzsystem',
    name: 'Speech 100 - Konferenzsystem',
    description: 'Professionelles Konferenzsystem für klare Kommunikation in Meetings und Präsentationen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 120,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'Konferenzsystem' },
      { label: 'Modell', value: 'Speech 100' },
      { label: 'Anwendung', value: 'Konferenzen' },
    ],
  },
  {
    id: 'leinwand-projection-screen-4m',
    name: 'Leinwand / Projection Screen 4m',
    description: 'Professionelle Projektionsleinwand 4 Meter Breite. Für große Präsentationen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 60,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Größe', value: '4 Meter' },
      { label: 'Typ', value: 'Projection Screen' },
      { label: 'Format', value: '16:9' },
    ],
  },
  {
    id: 'leinwand-projection-screen-3m',
    name: 'Leinwand / Projection Screen 3m',
    description: 'Professionelle Projektionsleinwand 3 Meter Breite. Standard-Größe für Präsentationen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 45,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Größe', value: '3 Meter' },
      { label: 'Typ', value: 'Projection Screen' },
      { label: 'Format', value: '16:9' },
    ],
  },
  {
    id: 'leinwand-projection-screen-2m',
    name: 'Leinwand / Projection Screen 2m',
    description: 'Kompakte Projektionsleinwand 2 Meter Breite. Ideal für kleine Räume.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 30,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Größe', value: '2 Meter' },
      { label: 'Typ', value: 'Projection Screen' },
      { label: 'Format', value: '16:9' },
    ],
  },
  {
    id: 'stativ-projektor-laptop',
    name: 'Stativ für Projektor / Laptop',
    description: 'Stabiles Stativ für Projektor oder Laptop. Höhenverstellbar und flexibel einsetzbar.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 20,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'Stativ' },
      { label: 'Anwendung', value: 'Projektor / Laptop' },
      { label: 'Höhe', value: 'Verstellbar' },
    ],
  },
  {
    id: 'pro-av-mixer',
    name: 'Pro AV Mixer',
    description: 'Professioneller AV-Mixer für Audio- und Video-Signale. Ideal für Konferenzen und Events.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 100,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'AV Mixer' },
      { label: 'Klasse', value: 'Pro' },
      { label: 'Signale', value: 'Audio & Video' },
    ],
  },
  {
    id: 'wireless-hdmi-funk-set',
    name: 'Wireless HDMI Funk-Set',
    description: 'Drahtloses HDMI-Funk-Set für kabellose Übertragung von Audio- und Video-Signalen.',
    images: ['/images/acer1-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'medien-konferenztechnik',
    specs: [
      { label: 'Typ', value: 'Wireless HDMI' },
      { label: 'Reichweite', value: 'bis 30m' },
      { label: 'Auflösung', value: 'Full HD' },
    ],
  },

  // Stromerzeuger / Generatoren
  {
    id: 'inverter-stromerzeuger-2kw',
    name: 'Inverter Stromerzeuger 2 kW',
    description: 'Kompakter Inverter-Stromerzeuger mit 2 kW Leistung. Leise und sparsam für kleine Veranstaltungen.',
    images: ['/images/hy3200si_1-1920w.webp'],
    pricePerUnit: 60,
    categorySlug: 'stromerzeuger',
    specs: [
      { label: 'Leistung', value: '2 kW' },
      { label: 'Typ', value: 'Inverter' },
      { label: 'Vorteil', value: 'Leise & sparsam' },
    ],
  },
  {
    id: 'inverter-stromerzeuger-3-2kw',
    name: 'Inverter Stromerzeuger 3,2 kW',
    description: 'Mittlerer Inverter-Stromerzeuger mit 3,2 kW Leistung. Ideal für mittlere Events.',
    images: ['/images/hy3200si_1-1920w.webp'],
    pricePerUnit: 80,
    categorySlug: 'stromerzeuger',
    specs: [
      { label: 'Leistung', value: '3,2 kW' },
      { label: 'Typ', value: 'Inverter' },
      { label: 'Anwendung', value: 'Mittlere Events' },
    ],
  },
  {
    id: 'inverter-stromerzeuger-6kw',
    name: 'Inverter Stromerzeuger 6 kW',
    description: 'Leistungsstarker Inverter-Stromerzeuger mit 6 kW Leistung. Für große Veranstaltungen.',
    images: ['/images/hy3200si_1-1920w.webp'],
    pricePerUnit: 120,
    categorySlug: 'stromerzeuger',
    specs: [
      { label: 'Leistung', value: '6 kW' },
      { label: 'Typ', value: 'Inverter' },
      { label: 'Anwendung', value: 'Große Events' },
    ],
  },

  // Bühnenpodeste & Traversen
  {
    id: 'rednerpodest-drumriser',
    name: 'Rednerpodest / Drumriser',
    description: 'Vielseitiges Podest für Redner oder als Drumriser für Schlagzeuger. Höhenverstellbar.',
    images: ['/images/ixstage5-1920w.webp'],
    pricePerUnit: 30,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Rednerpodest / Drumriser' },
      { label: 'Anwendung', value: 'Redner / Schlagzeug' },
      { label: 'Höhe', value: 'Verstellbar' },
    ],
  },
  {
    id: 'buehne-4x3m',
    name: 'Bühne 4x3 m',
    description: 'Modulare Bühne mit 4x3 Meter Grundfläche. Professionelle Bühnenkonstruktion.',
    images: ['/images/ixstage5-1920w.webp'],
    pricePerUnit: 200,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Größe', value: '4x3 Meter' },
      { label: 'Fläche', value: '12 m²' },
      { label: 'Typ', value: 'Modular' },
    ],
  },
  {
    id: 'faltpavillion',
    name: 'Faltpavillion',
    description: 'Praktischer Faltpavillion für Outdoor-Events. Schnell auf- und abbaubar.',
    images: ['/images/ixstage5-1920w.webp'],
    pricePerUnit: 150,
    categorySlug: 'buehlenpodeste-traversen',
    specs: [
      { label: 'Typ', value: 'Faltpavillion' },
      { label: 'Aufbau', value: 'Schnell' },
      { label: 'Anwendung', value: 'Outdoor' },
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
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
