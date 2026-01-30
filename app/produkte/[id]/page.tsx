import { notFound } from 'next/navigation';
import { getAllProductIds, getProductById } from '@/lib/products';
import { getCategoryBySlug } from '@/lib/categories';
import { data } from '@/lib/data';
import { MapPin, Clock, ArrowLeft, ArrowRight, Users, Bluetooth, Wrench, Volume2, Lightbulb, Cloud, Cable } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { ProductImageSlider, ProductTabs } from '@/components/ProductDetailClient';
import OpeningHours from '@/components/OpeningHours';
import AddToCartButton from '@/components/AddToCartButton';
import AufbauLegendTooltip from '@/components/AufbauLegendTooltip';
import { DEFAULT_BLUR_DATA_URL } from '@/lib/blurDataUrl';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// ISR: Incremental Static Regeneration fÃƒÂ¼r Produktseiten
export const revalidate = 3600; // 1 Stunde - Preise kÃƒÂ¶nnen sich ÃƒÂ¤ndern

export async function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);

  // Verwende detailDescription fÃƒÂ¼r Detailseite, sonst description
  const detailText = product.detailDescription || product.description;

  const setProductIds = new Set([
    'sub-sat-set-bluetooth',
    'pa-set-small',
    'pa-set-medium',
    'pa-set-large',
    'pa-set-xlarge',
    'pa-set-premium',
    'pa-set-outdoor',
    'party-set-small',
    'party-set-medium',
    'party-set-white',
    'party-set-large',
    'party-set-xlarge',
    'rednerpodest-drumriser',
    'buehne-4x3m',
    'faltpavillion',
    'alutruss-trilock-e-gl33',
    'traversenlift-150kg',
    'lautsprecherstativ-21450',
    'leuchtenstativ-24630',
    'mikrofonstativ-21090',
  ]);

  const aufbauSchwierigkeitMap: Record<string, string> = {
    'party-set-small': 'Einfach',
    'party-set-medium': 'Machbar',
    'party-set-white': 'Einfach',
    'party-set-large': 'Machbar',
    'party-set-xlarge': 'Machbar',
    'pa-set-medium': 'Machbar',
    'pa-set-large': 'Machbar',
    'pa-set-xlarge': 'Machbar',
    'pa-set-premium': 'Machbar',
    'pa-set-outdoor': 'Machbar',
    'profi-pa-line-array-event-26a': 'Komplex',
    'allen-heath-sq5': 'Pro',
    'allen-heath-ar2412': 'Pro',
    'yamaha-dm3': 'Komplex',
    'yamaha-tio-1608d': 'Komplex',
    'dynacord-cms-1600-3': 'Machbar',
    'pioneer-djm-900-nexus': 'Komplex',
    'mackie-analog-mixer': 'Einfach',
    'shure-mikrofon-set-sm58-sm57': 'Einfach',
    'mikrofon-set-drums': 'Komplex',
    'funkmikrofon-sprache-moderation': 'Machbar',
    'profi-funkmikrofon-shure-slxd2': 'Machbar',
    'akku-spot-indoor-rgb': 'Einfach',
    'akku-spot-outdoor-rgbw-ip65': 'Einfach',
    'led-outdoor-fluter-ip65': 'Machbar',
    'theatre-spot-led': 'Machbar',
    'led-verfolgerspot-follow-spot': 'Einfach',
    'led-pll-panel-power-strobe': 'Machbar',
    'party-lichtset-kompakt': 'Einfach',
    'led-pro-lichtbar-rgb': 'Machbar',
    'led-effekt-bar-mit-scannern': 'Einfach',
    'high-power-led-effekt-bar-mit-laser': 'Einfach',
    'led-lichterketten-innen-aussen': 'Einfach',
    'led-derby-effekt-mit-strobe': 'Einfach',
    'led-triple-flower': 'Einfach',
    'mirror-ball-saturn-led-effekt': 'Machbar',
    'led-moving-head-spot-100w': 'Machbar',
    'led-moving-head-beam-200w': 'Komplex',
    'led-moving-head-wash-7x40w': 'Komplex',
    'jb-spyder-show-pattern-laser': 'Machbar',
    '2000mw-diodenlaser-showlaser': 'Pro',
    'led-wasser-projektionseffekt': 'Einfach',
    '50cm-spiegelkugel-set': 'Einfach',
    'party-nebelmaschine-800w': 'Einfach',
    'nebelmaschine-1500w': 'Einfach',
    'vertikal-nebelmaschine-spray-fogger': 'Einfach',
    'hazer': 'Einfach',
    'bodennebelmaschine': 'Machbar',
    'kaltfunkenmaschine-cold-spark': 'Machbar',
    'lcd-dlp-beamer': 'Einfach',
    'laser-dlp-beamer': 'Einfach',
    'laser-dlp-beamer-pro': 'Machbar',
    '4k-laser-dlp-beamer': 'Machbar',
    '4k-signature-display-65zoll': 'Machbar',
    'speech-100-konferenzsystem': 'Pro',
    'leinwand-projection-screen-4m': 'Einfach',
    'leinwand-projection-screen-3m': 'Einfach',
    'leinwand-projection-screen-2m': 'Einfach',
    'stativ-projektor-laptop': 'Einfach',
    'pro-av-mixer': 'Komplex',
    'wireless-hdmi-funk-set': 'Machbar',
    'rednerpodest-drumriser': 'Machbar',
    'buehne-4x3m': 'Machbar',
    'faltpavillion': 'Einfach',
    'alutruss-trilock-e-gl33': 'Komplex',
    'traversenlift-150kg': 'Pro',
    'lautsprecherstativ-21450': 'Einfach',
    'leuchtenstativ-24630': 'Einfach',
    'mikrofonstativ-21090': 'Einfach',
    'inverter-stromerzeuger-2kw': 'Machbar',
    'inverter-stromerzeuger-3-2kw': 'Machbar',
    'inverter-stromerzeuger-6kw': 'Machbar',
  };

  const isSetProduct = setProductIds.has(product.id);
  const quickFactLabel = isSetProduct ? 'Aufbau-Schwierigkeit' : 'Bedienung';

  const quickFacts = {
    personen: product.specs?.find(s => s.label === 'Personen')?.value || 'bis 70',
    bluetooth: detailText?.toLowerCase().includes('bluetooth') || false,
    aufbauSchwierigkeit: aufbauSchwierigkeitMap[product.id] ?? 'Einfach', // Kann spÃƒÂ¤ter aus Produkt-Daten kommen
  };

  // Lieferumfang aus Beschreibung extrahieren oder definieren
  const getLieferumfang = () => {
    const items: Array<{ iconName: string; label: string; description: string }> = [];
    const desc = detailText?.toLowerCase() || '';
    
    if (desc.includes('lautsprecher') || desc.includes('pa') || desc.includes('subwoofer') || desc.includes('satellit')) {
      items.push({ iconName: 'Volume2', label: 'Lautsprecher', description: 'Aktives Lautsprechersystem' });
    }
    if (desc.includes('licht') || desc.includes('led')) {
      items.push({ iconName: 'Lightbulb', label: 'Licht', description: 'LED Kompakt Licht-Set' });
    }
    if (desc.includes('nebel') || desc.includes('hazer')) {
      items.push({ iconName: 'Cloud', label: 'Nebel', description: 'Nebelmaschine' });
    }
    if (desc.includes('kabel') || desc.includes('anschluss')) {
      items.push({ iconName: 'Cable', label: 'Kabel', description: 'Alle benÃƒÂ¶tigten Anschlusskabel' });
    }
    
    // Fallback falls nichts gefunden wird
    if (items.length === 0) {
      return [
        { iconName: 'Volume2', label: 'Lautsprecher', description: 'Aktives Lautsprechersystem' },
        { iconName: 'Lightbulb', label: 'Licht', description: 'LED Kompakt Licht-Set' },
        { iconName: 'Cloud', label: 'Nebel', description: 'Nebelmaschine' },
        { iconName: 'Cable', label: 'Kabel', description: 'Alle benÃƒÂ¶tigten Anschlusskabel' },
      ];
    }
    
    return items;
  };
  
  const lieferumfang = getLieferumfang();

  // Cross-Selling Produkte
  const crossSellingProducts = [
    { id: 'funkmikrofon-sprache-moderation', name: 'Funkmikrofon fÃƒÂ¼r Reden', price: 35 },
    { id: 'akku-spot-indoor-rgb', name: 'ZusÃƒÂ¤tzliche Akku-Strahler', price: 20 },
  ];

  const galleryImages =
    product.isUpgradeKit
      ? []
      : product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : product.images && product.images.length > 1
      ? product.images.slice(1)
      : [];
  const galleryTab = galleryImages.length > 0 ? { images: galleryImages } : undefined;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/kategorien/${category.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {category.title}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Section - Zwei-Spalten-Layout */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Links: Einzelnes Produktbild */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-4 md:p-8"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  priority
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Volume2 className="w-24 h-24" />
                </div>
              )}
            </div>

            {/* Rechts: Verkaufs-Box */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              {/* Back Button */}
              <Link
                href={category ? `/kategorien/${category.slug}` : '/'}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Kategorie
              </Link>

              {/* Titel */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Preis */}
              <div className="mb-6">
                {(() => {
                  const priceSpec = product.specs?.find(s => s.label === 'Preis' && s.value === 'Auf Anfrage');
                  const isPriceOnRequest = !!priceSpec;
                  
                  if (product.priceOptions && product.priceOptions.length > 0) {
                    const priceLabel = product.priceUnitLabel ?? (isSetProduct ? 'Tag' : 'Stück');
                    return (
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">
                          {product.priceOptions[0].price.toFixed(2).replace('.', ',')} € / {priceLabel}
                        </div>
                        <p className="text-sm text-gray-500">
                          Alle Preise verstehen sich inkl. 19% MwSt.
                        </p>
                      </div>
                    );
                  } else if (isPriceOnRequest) {
                    return (
                      <>
                        <div className="text-4xl font-bold text-primary mb-2">
                          Preis auf Anfrage
                        </div>
                        <p className="text-sm text-gray-500">
                          Kontaktieren Sie uns für ein individuelles Angebot.
                        </p>
                      </>
                    );
                  } else {
                    const priceLabel = product.priceUnitLabel ?? (isSetProduct ? 'Tag' : 'Stück');
                    return (
                      <>
                        <div className="text-4xl font-bold text-primary mb-2">
                          {product.pricePerUnit.toFixed(2).replace('.', ',')} € / {priceLabel}
                        </div>
                        {product.pricePerPair && (
                          <div className="text-lg text-gray-600 mb-2">
                            {product.pricePerPair.toFixed(2).replace('.', ',')} € / {isSetProduct ? 'Wochenende' : 'Paar'}
                          </div>
                        )}
                        <p className="text-sm text-gray-500">
                          Alle Preise verstehen sich inkl. 19% MwSt.
                        </p>
                      </>
                    );
                  }
                })()}
              </div>

              {/* Quick-Facts */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick-Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Personenanzahl</div>
                      <div className="font-semibold text-gray-900">{quickFacts.personen}</div>
                    </div>
                  </div>
                  {quickFacts.bluetooth && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Bluetooth className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Bluetooth</div>
                        <div className="font-semibold text-gray-900">Ja, integriert</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <span>{quickFactLabel}</span>
                        <AufbauLegendTooltip label={quickFactLabel} />
                      </div>
                      <div className="font-semibold text-gray-900">{quickFacts.aufbauSchwierigkeit}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <AddToCartButton productId={product.id} productName={product.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductTabs
              productId={product.id}
              productName={product.name}
              tabs={{
                beschreibung: product.detailDescription ? {
                  text: product.detailDescription,
                } : undefined,
                bildergalerie: galleryTab,
                anwendung: {
                text: product.id === 'party-set-small' 
                  ? 'Partys, Geburtstagsfeiern, Studentenpartys, Weihnachtsfeier, etc.\nFÃƒÂ¼r max 70 Personen (Indoor)'
                  : product.id === 'party-set-medium'
                  ? 'Partys, Geburtstagsfeiern, Studentenpartys, Weihnachtsfeier, Hochzeiten, DJs\nFÃƒÂ¼r 100-120 Personen (Indoor)'
                  : product.id === 'party-set-white'
                  ? 'Hochzeiten, Motto-Partys, Firmenevents, Weihnachtsfeier, auch fÃƒÂ¼r DJs geeignet\nEmpfohlen fÃƒÂ¼r 70-100 (max 120) Personen (Indoor)'
                  : product.id === 'party-set-large'
                  ? 'Hochzeitsfeier, Partys, runde Geburtstage und groÃƒÂŸe Familienfeiern, Studentenpartys, Firmenevents (Sommerfest, Weihnachtsfeier)\nBis zu 150 Personen (nur Indoor)'
                  : product.id === 'party-set-xlarge'
                  ? 'Hochzeitsfeier, Partys, runde Geburtstage und groÃƒÂŸe Familienfeiern, Studentenpartys, Firmenevents (Sommerfest, Weihnachtsfeier), kleine Zeltveranstaltungen (Kerb)\nBis zu 250 Personen (nur Indoor)'
                  : product.id === 'akku-lautsprecher-compact'
                  ? 'Mobiler Akku-Lautsprecher fÃƒÂ¼r StraÃƒÂŸenmusik, Trauungen, SchulauffÃƒÂ¼hrungen, Konferenzen, Gottesdienste, Sportveranstaltungen, PrÃƒÂ¤sentationen oder Grillpartys - ÃƒÂ¼berall dort, wo kein Stromanschluss vorhanden oder die Verlegung von Kabeln nicht mÃƒÂ¶glich ist. Wetterfest bei Verwendung der Schutzabdeckung.'
                  : product.id === 'akku-lautsprecher-maxi'
                  ? 'Sehr leistungsstarker Akku-Lautsprecher fÃƒÂ¼r StraÃƒÂŸenmusik, Trauungen, SchulauffÃƒÂ¼hrungen, Sportveranstaltungen, Grill- und Gartenpartys - ÃƒÂ¼berall dort, wo kein Stromanschluss vorhanden oder die Verlegung von Kabeln nicht mÃƒÂ¶glich ist.'
                  : product.id === 'aktivlautsprecher-bluetooth'
                  ? 'Anwendung (bei 2 Stck):\nSprachbeschallung bis max. 200 Personen\nPlayback Musikbeschallung bis max. 150 Personen mit mittlerem Basspegel\nLive-Musik akustisch fÃƒÂ¼r bis zu 100 Personen'
                  : product.id === 'sub-sat-set-bluetooth'
                  ? 'Anwendung (bei 2 Stck):\nSprachbeschallung bis max. 200 Personen\nPlayback Musikbeschallung bis max. 150 Personen mit mittlerem Basspegel\nLive-Musik akustisch fÃƒÂ¼r bis zu 100 Personen'
                  : product.id === 'pa-saeule-bluetooth'
                  ? 'PA-System fÃƒÂ¼r Hochzeiten, Corporate Events, Konferenz, kleine Ensembles und DJs\nUniversell einsetzbar fÃƒÂ¼r Beschallungen bis ca. 70 Personen (100-120 Personen mit 2 SÃƒÂ¤ulen)\nSehr gute SprachverstÃƒÂ¤ndlichkeit\nAuch in weiÃƒÂŸ verfÃƒÂ¼gbar fÃƒÂ¼r eine noch dezentere Optik, White Weddings, etc.'
                  : product.id === 'pa-set-small'
                  ? 'Sprachbeschallung bis max. 100 Personen\nMusikbeschallung bis max. 80 Personen mit geringem Basspegel\nLive-Musik akustisch / dezent bis max. 80 Personen'
                  : product.id === 'pa-set-medium'
                  ? 'Sprachbeschallung bis max. 150 Personen\nLive-Musik (akustisch / dezent) bis max. 100 Personen mit mittlerem Basspegel\nDruckvolle Playbackmusik Beschallung bis ca. 100 Personen in geschlossenen RÃƒÂ¤umen'
                  : product.id === 'pa-set-large'
                  ? 'PA-System fÃƒÂ¼r Live-Bands, DJs, Clubs und Events aller Art\nUniversell einsetzbar fÃƒÂ¼r Beschallungen bis ca. 150 Personen'
                  : product.id === 'pa-set-xlarge'
                  ? 'PA-System fÃƒÂ¼r Live-Bands, DJs, Clubs und Events aller Art\nUniversell einsetzbar fÃƒÂ¼r Beschallungen bis zu max. 250 Personen'
                  : product.id === 'pa-set-premium'
                  ? 'hochwertiges PA-System fÃƒÂ¼r Hochzeiten, Corporate Events, Konferenz, Live Bands und DJs\nUniversell einsetzbar fÃƒÂ¼r Beschallungen bis max. 250 Personen\nSehr gute Audioeigenschaften bei minimalem Platzbedarf, einfach im PKW Kombi zu transportieren und an einer Haushaltssteckdose zu betreiben'
                  : product.id === 'pa-set-outdoor'
                  ? 'Sprachbeschallung bis ca. 200 Personen\nMusikbeschallung bis ca. 150 Personen mit geringem Basspegel\nLive-Musik akustisch/dezent (Gesang, Gitarre, Piano) bis 100 Personen'
                  : product.id === 'profi-pa-line-array-event-26a'
                  ? 'Anzahl der Personen richtet sich nach der Konfiguration des Arrays:\nSprachbeschallung mit sehr hoher SprachverstÃƒÂ¤ndlichkeit und groÃƒÂŸer Reichweite\nDruckvolle Playback Musikbeschallung mit klarem Sound\nLive-Musik Indoor oder Outdoor mit gleichmÃƒÂ¤ÃƒÂŸiger horizontaler Abstrahlung und hervorragender DurchsetzungsfÃƒÂ¤higkeit der Vocals\nOutdoor geeignet (wetterfest IP44)'
                  : product.id === 'allen-heath-sq5'
                  ? 'Zum professionellen Abmischen und Aufnehmen von Bands, Ensembles, etc.\nAllround-Mischpult fÃƒÂ¼r viele EinsatzmÃƒÂ¶glichkeiten'
                  : product.id === 'allen-heath-ar2412'
                  ? 'Zum professionellen Abmischen und Aufnehmen von Bands, Ensembles, etc.\nAllround-Mischpult fÃƒÂ¼r viele EinsatzmÃƒÂ¶glichkeiten'
                  : product.id === 'yamaha-dm3'
                  ? 'Zum Abmischen von Bands, kleinen Ensembles, Sprechermikrofonen (Konferenz / PrÃƒÂ¤sentation) und Recording / Streaming'
                  : product.id === 'yamaha-tio-1608d'
                  ? 'Zum Abmischen von Bands, kleinen Ensembles, Sprechermikrofonen (Konferenz / PrÃƒÂ¤sentation) und Recording / Streaming'
                  : product.id === 'dynacord-cms-1600-3'
                  ? 'Zum professionellen Abmischen und Aufnehmen von kleinen Bands / Ensembles.\nAllround-Mischpult fÃƒÂ¼r viele EinsatzmÃƒÂ¶glichkeiten'
                  : product.id === 'pioneer-djm-900-nexus'
                  ? 'Professionelles und kreatives Mixen fÃƒÂ¼r DJs\nAnschluss und Abmischen von CD-Playern, Plattenspielern, USB-Audioquellen'
                  : product.id === 'mackie-analog-mixer'
                  ? 'kleine Allround-Mischpulte fÃƒÂ¼r viele EinsatzmÃƒÂ¶glichkeiten'
                  : product.id === 'akku-spot-indoor-rgb'
                  ? 'Punktuelle Beleuchtung von FlÃƒÂ¤chen, WÃƒÂ¤nden, VorhÃƒÂ¤ngen oder Objekten'
                  : product.id === 'akku-spot-outdoor-rgbw-ip65'
                  ? 'Punktuelle Beleuchtung von FlÃƒÂ¤chen, WÃƒÂ¤nden, VorhÃƒÂ¤ngen oder Objekten wo Kabel nur stÃƒÂ¶ren wÃƒÂ¼rden'
                  : product.id === 'led-outdoor-fluter-ip65'
                  ? 'Beleuchtung von GebÃƒÂ¤uden oder Objekten im Freien, Festzelten (natÃƒÂ¼rlich auch in InnenrÃƒÂ¤umen anwendbar)'
                  : product.id === 'theatre-spot-led'
                  ? 'Frontale Ausleuchtung von BÃƒÂ¼hnen fÃƒÂ¼r Theater, Konzerte und Events\nPerfekt fÃƒÂ¼r professionelle BÃƒÂ¼hnenproduktionen\nTheaterauffÃƒÂ¼hrungen und KonzertbÃƒÂ¼hnen\nHochzeiten und Corporate Events'
                  : product.id === 'led-pll-panel-power-strobe'
                  ? 'GleichmÃƒÂ¤ÃƒÂŸige Ausleuchtung von WÃƒÂ¤nden, BÃƒÂ¼hnen, Objekten fÃƒÂ¼r Foto- / Film und Theaterproduktionen\nEinsetzbar als Hochleistungs-Stroboskop'
                  : product.id === 'party-lichtset-kompakt'
                  ? 'Farbige und effektvolle Ausleuchtung von TanzflÃƒÂ¤che oder kleinen SÃƒÂ¤len\nLichteffekt fÃƒÂ¼r TanzflÃƒÂ¤chen/Dancefloors, der ideale Party-Effekt'
                  : product.id === 'led-pro-lichtbar-rgb'
                  ? 'Ausleuchtung von kleinen bis mittleren BÃƒÂ¼hnen, TanzflÃƒÂ¤chen oder RÃƒÂ¤umen.\nLichteffekt fÃƒÂ¼r Parties, Live-Bands oder Clubs.'
                  : product.id === 'led-effekt-bar-mit-scannern'
                  ? 'Kombinationseffekt zur dynamischen Beleuchtung von TanzflÃƒÂ¤che, PartyrÃƒÂ¤umen oder kleinen SÃƒÂ¤len\nLichteffekt fÃƒÂ¼r TanzflÃƒÂ¤chen/Dancefloors, der ideale Party-Effekt'
                  : product.id === 'high-power-led-effekt-bar-mit-laser'
                  ? 'Kombinationseffekt zur dynamischen Beleuchtung von BÃƒÂ¼hnen und RÃƒÂ¤umen\nLichteffekt fÃƒÂ¼r TanzflÃƒÂ¤chen/Dancefloors, der ideale Party-Effekt'
                  : product.id === 'led-lichterketten-innen-aussen'
                  ? 'Dekorative Ausleuchtung von RÃƒÂ¤umen, GÃƒÂ¤rten, Zelten oder Veranstaltungsorten\nPerfekt fÃƒÂ¼r stimmungsvolle Beleuchtung bei Partys, Hochzeiten und Events'
                  : product.id === 'led-derby-effekt-mit-strobe'
                  ? 'Dynamischer Strahleneffekt fÃƒÂ¼r Party auf der TanzflÃƒÂ¤che'
                  : product.id === 'led-triple-flower'
                  ? 'Dynamischer und heller Flowereffekt fÃƒÂ¼r Party auf der TanzflÃƒÂ¤che'
                  : product.id === 'led-moving-head-spot-100w'
                  ? 'Kompaktes aber lichtstarkes Moving Head\nFÃƒÂ¼r dynamisches Licht auf mittleren BÃƒÂ¼hnen\nProfessionelle Lightshows fÃƒÂ¼r TanzflÃƒÂ¤che und mobile DJs'
                  : product.id === 'led-moving-head-beam-200w'
                  ? 'Kompaktes aber lichtstarkes Moving Head\nFÃƒÂ¼r dynamisches Licht auf groÃƒÂŸen BÃƒÂ¼hnen oder Outdoor'
                  : product.id === 'led-moving-head-wash-7x40w'
                  ? 'Kompaktes aber lichtstarkes Moving Head Wash\nFlÃƒÂ¤chige bis punktuelle Ausleuchtung von BÃƒÂ¼hnen, HintergrÃƒÂ¼nden oder TanzflÃƒÂ¤chen\nProfessionelle Lightshows fÃƒÂ¼r Events und mobile DJs'
                  : product.id === 'jb-spyder-show-pattern-laser'
                  ? 'Showlaser der Klasse 3 mit 400 mW Leistung in Rot, GrÃƒÂ¼n und Blau\nOptimaler Effekt fÃƒÂ¼r die TanzflÃƒÂ¤che / Dancefloor, kleinere Clubs oder Partys'
                  : product.id === '2000mw-diodenlaser-showlaser'
                  ? 'Showlaser der Klasse 4 mit 2W Leistung in Rot (500mW), GrÃƒÂ¼n (500mW) und Blau (1.400mW)\nNur unter Aufsicht oder nach vorheriger Unterweisung durch einen Laserschutzbeauftragten zu betreiben'
                  : product.id === 'party-nebelmaschine-800w'
                  ? 'Lokale Vernebelung von TanzflÃƒÂ¤chen und kleinen RÃƒÂ¤umen fÃƒÂ¼r Parties, Geburtstagsfeiern, etc.\nDichtigkeitsprÃƒÂ¼fung von GebÃƒÂ¤uden, Dachstuhl, etc.\nVorsicht: Nicht anwenden in RÃƒÂ¤umen mit Rauchmeldeanlagen!!!'
                  : product.id === 'nebelmaschine-1500w'
                  ? 'Vernebelung von RÃƒÂ¤umen, als "Rauch-Effekt" Indoor und Outdoor, sowie zur Sichtbarmachung von Licht-Beams.\nDichtigkeitsprÃƒÂ¼fung von GebÃƒÂ¤uden, Dachstuhl, etc.\nSimulation von Rauch fÃƒÂ¼r BrandschutzÃƒÂ¼bungen\nVorsicht: Nicht anwenden in RÃƒÂ¤umen mit Rauchmeldeanlagen!!!'
                  : product.id === 'vertikal-nebelmaschine-spray-fogger'
                  ? 'Senkrecht aufsteigende RauchsÃƒÂ¤ule ahmt Pyroeffekte nach\nZur Gestaltung von Licht- und BÃƒÂ¼hnenshows\nSpezialeffekt fÃƒÂ¼r Video / Theater'
                  : product.id === 'hazer'
                  ? 'Zur Sichtbarmachung von Lichteffekten und Laserstrahlen auf BÃƒÂ¼hne und TanzflÃƒÂ¤che'
                  : product.id === 'bodennebelmaschine'
                  ? 'FÃƒÂ¼r dichten Bodennebel auf TanzflÃƒÂ¤che, BÃƒÂ¼hne und Saal\nMit Spezialfluid: Nebel lÃƒÂ¶st sich auf bevor er nach oben steigt'
                  : product.id === 'kaltfunkenmaschine-cold-spark'
                  ? 'Senkrecht aufsteigende FontÃƒÂ¤neneffekt mit patentiertem Kaltfunkenverfahren\nSpezialeffekt fÃƒÂ¼r Events, Hochzeiten, Video / Theater, u.v.m.'
                  : 'Ideal fÃƒÂ¼r private Partys, Hochzeiten im kleinen Kreis oder Vereinsfeste. Dieses kompakte Set bietet alles, was Sie fÃƒÂ¼r eine gelungene Feier benÃƒÂ¶tigen - von kraftvollem Sound bis hin zu stimmungsvollem Licht.',
              },
              technischeDetails: {
                specs: product.specs || [],
              },
            }}
          />
        </div>
      </section>

      {/* Cross-Selling Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Oft dazu gebucht</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crossSellingProducts.map((item) => {
              const crossProduct = getProductById(item.id);
              if (!crossProduct) return null;
              const isSetProduct = setProductIds.has(item.id);
              return (
                <Link
                  key={item.id}
                  href={`/produkte/${item.id}`}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-lg font-bold text-primary">
                        {item.price.toFixed(2).replace('.', ',')} € / {isSetProduct ? 'Tag' : (getProductById(item.id)?.priceUnitLabel ?? 'Stück')}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Fragen zu diesem Produkt?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Standort */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    Wormser Str. 23<br />
                    64319 Pfungstadt
                  </p>
                </div>
              </div>

              {/* ÃƒÂ–ffnungszeiten */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ÃƒÂ–ffnungszeiten</h3>
                  <div className="text-gray-700">
                    <OpeningHours />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RentalCart />
    </div>
  );
}
