'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Volume2, Lightbulb, Cloud, Cable, Users, Home, CloudRain, Zap, Bluetooth, Weight, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEFAULT_BLUR_DATA_URL } from '@/lib/blurDataUrl';

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Preload next and previous images
  const nextIndex = (currentImageIndex + 1) % images.length;
  const prevIndex = (currentImageIndex - 1 + images.length) % images.length;

  return (
      <div>
        {/* Hauptbild */}
        <div className="relative aspect-[4/3] max-h-[500px] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
          {images.length > 0 ? (
            <>
              {/* Preload next and previous images */}
              <div className="hidden">
                {images[nextIndex] && (
                  <Image
                    src={images[nextIndex]}
                    alt=""
                    width={800}
                    height={600}
                    quality={85}
                    priority={false}
                  />
                )}
                {images[prevIndex] && (
                  <Image
                    src={images[prevIndex]}
                    alt=""
                    width={800}
                    height={600}
                    quality={85}
                    priority={false}
                  />
                )}
              </div>

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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    priority={currentImageIndex === 0}
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
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
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
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
              <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {tabs.beschreibung.text}
                </p>
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
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {tabs.anwendung.text}
                </p>
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
                    {tabs.technischeDetails.specs.map((spec, index) => {
                      const isPartySet = productId === 'party-set-small' || productId === 'party-set-medium' || productId === 'party-set-white' || productId === 'party-set-large' || productId === 'party-set-xlarge';
                      let icon = null;
                      
                      if (isPartySet) {
                        // Party-Set spezifische Icons
                        if (spec.label === 'Personen') {
                          icon = <Users className="w-4 h-4" />;
                        } else if (spec.label === 'Indoor') {
                          icon = <Home className="w-4 h-4" />;
                        } else if (spec.label === 'Outdoor') {
                          icon = <CloudRain className="w-4 h-4" />;
                        } else if (spec.label === 'Leistung') {
                          icon = <Zap className="w-4 h-4" />;
                        } else if (spec.label === 'Schalldruck') {
                          icon = <Volume2 className="w-4 h-4" />;
                        } else if (spec.label === 'Bluetooth') {
                          icon = <Bluetooth className="w-4 h-4" />;
                        } else if (spec.label === 'Gewicht') {
                          icon = <Weight className="w-4 h-4" />;
                        } else if (spec.label === 'Transport') {
                          icon = <Truck className="w-4 h-4" />;
                        }
                      }
                      
                      return (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            <div className="flex items-center gap-2">
                              {icon && <span className="text-primary">{icon}</span>}
                              {spec.label}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{spec.value}</td>
                        </tr>
                      );
                    })}
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
