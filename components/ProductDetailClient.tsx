'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Volume2, Lightbulb, Cloud, Cable } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSpecDisplayLabel } from '@/lib/specDisplayLabels';

/** Erster Absatz = Header. Produktname (1. Zeile) wird übersprungen – H1 ist der Satz danach. Rest = Fließtext. */
function ProductDescriptionWithHeader({ text }: { text: string }) {
  const trimmed = text.trim();
  const firstBreak = trimmed.indexOf('\n\n');
  const header = firstBreak >= 0 ? trimmed.slice(0, firstBreak).trim() : trimmed;
  const body = firstBreak >= 0 ? trimmed.slice(firstBreak + 2).trim() : '';

  const headerLines = header.split('\n').filter(Boolean);
  // Produktname (1. Zeile) entfernen, da oben bereits angezeigt – H1 = Satz danach
  const h1Line = headerLines.length >= 2 ? headerLines[1] : headerLines[0] ?? '';
  const headerRest = headerLines.length >= 2 ? headerLines.slice(2).join('\n') : '';

  return (
    <div className="space-y-1 min-w-0">
      <div className="space-y-1 min-w-0">
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          {h1Line}
        </p>
        {headerRest ? (
          <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line break-words min-w-0">
            {headerRest}
          </p>
        ) : null}
      </div>
      {body ? (
        <div className="space-y-4 min-w-0">
          {body.split(/\n\n+/).map((paragraph, i) => {
            const boldPhrases = ['Lautsprecher mieten leicht gemacht:', 'Digital Mischpult mieten bei da-sound:', 'Analoge Mischpulte mieten bei da-sound:', 'Veranstaltungstechnik mieten leicht gemacht:'];
            const boldPhrase = boldPhrases.find(p => paragraph.startsWith(p));
            if (boldPhrase) {
              const rest = paragraph.slice(boldPhrase.length).trim();
              return (
                <div key={i} className="space-y-1 min-w-0 border-t-2 border-gray-300 pt-6 mt-6">
                  <p className="text-xl font-semibold text-gray-900">
                    {boldPhrase}
                  </p>
                  {rest ? (
                    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line break-words overflow-visible">
                      {rest}
                    </p>
                  ) : null}
                </div>
              );
            }
            return (
              <p key={i} className="text-base text-gray-700 leading-relaxed whitespace-pre-line break-words min-w-0 overflow-visible">
                {paragraph}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

// Icon-Mapping für Client-Komponente
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Volume2,
  Lightbulb,
  Cloud,
  Cable,
};

interface ProductImageSliderProps {
  images: string[];
  productName: string;
}

export function ProductImageSlider({ images, productName }: ProductImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Preload adjacent images
  useEffect(() => {
    const preloadImages = () => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      
      [nextIndex, prevIndex].forEach((index) => {
        if (!loadedImages.has(index)) {
          const img = new window.Image();
          img.src = images[index];
          setLoadedImages((prev) => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        }
      });
    };
    
    preloadImages();
  }, [currentImageIndex, images, loadedImages]);

  return (
      <div>
        {/* Hauptbild */}
        <div className="relative aspect-[4/3] max-h-[500px] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
          {images.length > 0 ? (
            <>
              <AnimatePresence mode="sync">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${productName} - Bild ${currentImageIndex + 1}`}
                    fill
                    className="object-contain p-2 md:p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                    {...(currentImageIndex === 0 
                      ? { priority: true, fetchPriority: 'high' as const } 
                      : { loading: 'lazy' }
                    )}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
                    aria-label="Vorheriges Bild"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-900" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all z-10"
                    aria-label="Nächstes Bild"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-900" />
                  </button>
                </>
              )}

              {/* Bild-Counter oben rechts */}
              {images.length > 1 && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-semibold z-10 backdrop-blur-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Volume2 className="w-24 h-24" />
            </div>
          )}
        </div>
      </div>
  );
}

interface ProductTabsProps {
  tabs: {
    beschreibung?: {
      text: string;
    };
    bildergalerie?: {
      images: string[];
    };
    anwendung?: {
      text: string;
    };
    technischeDetails?: {
      specs: Array<{ label: string; value: string }>;
    };
  };
  productId?: string;
  productName?: string;
}

export function ProductTabs({ tabs, productId, productName = '' }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'beschreibung' | 'bildergalerie' | 'anwendung' | 'technischeDetails'>(
    tabs.beschreibung ? 'beschreibung' : 'bildergalerie'
  );

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-gray-300">
        {tabs.beschreibung && (
          <button
            onClick={() => setActiveTab('beschreibung')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'beschreibung'
                ? 'text-primary border-primary'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            Beschreibung
          </button>
        )}
        {tabs.bildergalerie && (
          <button
            onClick={() => setActiveTab('bildergalerie')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'bildergalerie'
                ? 'text-primary border-primary'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            Bildergalerie
          </button>
        )}
        <button
          onClick={() => setActiveTab('anwendung')}
          className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
            activeTab === 'anwendung'
              ? 'text-primary border-primary'
              : 'text-gray-600 border-transparent hover:text-gray-900'
          }`}
        >
          Anwendung
        </button>
        <button
          onClick={() => setActiveTab('technischeDetails')}
          className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
            activeTab === 'technischeDetails'
              ? 'text-primary border-primary'
              : 'text-gray-600 border-transparent hover:text-gray-900'
          }`}
        >
          Technische Details
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === 'beschreibung' && tabs.beschreibung && (
            <motion.div
              key="beschreibung"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 space-y-8">
                <div className="max-w-3xl min-w-0">
                  <h2 className="sr-only">Beschreibung</h2>
                  <ProductDescriptionWithHeader text={tabs.beschreibung.text} />
                </div>
                <div className="max-w-3xl min-w-0 border-t-2 border-gray-300 pt-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Service-Vorteile</h2>
                  <p className="text-gray-700 leading-relaxed break-words min-w-0">
                    Mit da-sound mieten Sie professionelle <strong>Veranstaltungstechnik</strong> in Südhessen – 
                    bequem per <strong>Abholung</strong> ab unserem Lager in Pfungstadt oder Lieferung in Darmstadt 
                    und Umgebung. Ob Ton, Licht oder Bühne: Wir liefern alles aus einer Hand. Transparente Preise, 
                    kompetente Beratung und technische Unterstützung inklusive.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'bildergalerie' && tabs.bildergalerie && (
            <motion.div
              key="bildergalerie"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200">
                <h2 className="sr-only">Bildergalerie</h2>
                <ProductImageSlider images={tabs.bildergalerie.images} productName={productName} />
              </div>
            </motion.div>
          )}

          {activeTab === 'anwendung' && tabs.anwendung && (
            <motion.div
              key="anwendung"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200">
                <h2 className="sr-only">Anwendung</h2>
                <div className="max-w-3xl min-w-0">
                  <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line break-words min-w-0">
                    {tabs.anwendung.text}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'technischeDetails' && tabs.technischeDetails && (
            <motion.div
              key="technischeDetails"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <h2 className="sr-only">Technische Daten</h2>
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Spezifikation
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Wert
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(() => {
                      const specs = tabs.technischeDetails.specs;
                      const displayValue = (spec: { label: string; value: string }) => {
                        if (spec.label === 'Indoor' && spec.value === 'Ja') return 'Indoor';
                        if (spec.label === 'Outdoor' && spec.value === 'Ja') return 'Outdoor';
                        return (spec.value || '').replace(/\s*\(bluetooth\)\s*/gi, '').trim();
                      };
                      return specs.map((spec, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {getSpecDisplayLabel(spec.label)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{displayValue(spec)}</td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Default export für Rückwärtskompatibilität
export default function ProductDetailClient({ images, productName, tabs }: { images: string[]; productName: string; tabs?: ProductTabsProps['tabs'] }) {
  if (tabs) {
    return <ProductTabs tabs={tabs} />;
  }
  return <ProductImageSlider images={images} productName={productName} />;
}
