'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Volume2, Lightbulb, Cloud, Cable } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
      <div className="space-y-4">
        {/* Hauptbild */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
          {images.length > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${productName} - Bild ${currentImageIndex + 1}`}
                    fill
                    className="object-contain p-4 md:p-8"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    priority={currentImageIndex === 0}
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

              {/* Bild-Indikatoren */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Bild ${index + 1} anzeigen`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Volume2 className="w-24 h-24" />
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-primary shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 12.5vw"
                  quality={75}
                />
              </button>
            ))}
          </div>
        )}
      </div>
  );
}

interface ProductTabsProps {
  tabs: {
    beschreibung?: {
      text: string;
    };
    lieferumfang?: {
      items: Array<{
        iconName: string;
        label: string;
        description: string;
      }>;
    };
    anwendung?: {
      text: string;
    };
    technischeDetails?: {
      specs: Array<{ label: string; value: string }>;
    };
  };
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'beschreibung' | 'lieferumfang' | 'anwendung' | 'technischeDetails'>(
    tabs.beschreibung ? 'beschreibung' : 'lieferumfang'
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
        <button
          onClick={() => setActiveTab('lieferumfang')}
          className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
            activeTab === 'lieferumfang'
              ? 'text-primary border-primary'
              : 'text-gray-600 border-transparent hover:text-gray-900'
          }`}
        >
          Lieferumfang
        </button>
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

          {activeTab === 'lieferumfang' && tabs.lieferumfang && (
            <motion.div
              key="lieferumfang"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tabs.lieferumfang.items.map((item, index) => {
                  const IconComponent = iconMap[item.iconName] || Volume2;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all"
                    >
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.label}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  );
                })}
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
                    {tabs.technischeDetails.specs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
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
