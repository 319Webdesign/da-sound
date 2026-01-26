'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Volume2,
  Monitor,
  Zap,
  Speaker,
  Lightbulb,
  ShoppingBag,
} from 'lucide-react';
import Image from 'next/image';
import { data } from '@/lib/data';
import { useRentalCart } from '@/context/RentalCartContext';

interface TechSpec {
  label: string;
}

interface TechHighlight {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  specs: TechSpec[];
  image?: string;
  imageAlt?: string;
  isNew?: boolean;
  isSpecial?: boolean; // Für Stromerzeuger mit Ratgeber
  productUrl?: string;
  productId: string; // ID für Warenkorb
}

const techHighlights: TechHighlight[] = [
  {
    id: 1,
    icon: Volume2,
    title: 'Profi-PA von D.A.S. Audio',
    specs: [
      { label: '200-1.500 Personen' },
      { label: 'Line Array' },
      { label: 'wetterfest IP44' },
      { label: 'Made in Europe' },
    ],
    image: '/images/images highlights/event_4er.webp',
    imageAlt: 'Profi-PA von D.A.S. Audio',
    productId: 'profi-pa-das-audio',
  },
  {
    id: 2,
    icon: Monitor,
    title: '4K Beamer von Panasonic',
    specs: [
      { label: '4K UHD Auflösung' },
      { label: '1-Chip Laser DLP Technik' },
      { label: '5.200 Ansi-Lumen' },
      { label: '2-Fache ZOOM Optik' },
    ],
    image: '/images/acer1-1920w.webp',
    imageAlt: '4K Beamer von Panasonic',
    isNew: true,
    productId: '4k-beamer-panasonic',
  },
  {
    id: 3,
    icon: Speaker,
    title: 'Universell einsetzbare PA-Säulen',
    specs: [
      { label: 'Dezente Optik' },
      { label: '1.000W RMS' },
      { label: 'Bluetooth' },
      { label: 'in schwarz und weiß erhältlich' },
    ],
    image: '/images/images highlights/alteaduo.webp',
    imageAlt: 'Universell einsetzbare PA-Säulen',
    productId: 'pa-saeulen',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Cold Spark Indoorfeuerwerk',
    specs: [
      { label: 'ungefährliche Kaltfunken' },
      { label: 'Fontäne 2-5m' },
      { label: 'spektakulärer Effekt' },
      { label: 'beliebt für Hochzeiten' },
    ],
    image: '/images/images highlights/Kopie von coldspark2.webp',
    imageAlt: 'Cold Spark Indoorfeuerwerk',
    isSpecial: true,
    productId: 'cold-spark-indoorfeuerwerk',
  },
];

export default function TechHighlights() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich hätte gerne Details zu einem Technik-Highlight.')}`;

  return (
    <section className="bg-white pt-0 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technik-Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ausgesuchte Top-Geräte aus unserem Sortiment – professionelle Technik für Ihre Veranstaltung
          </p>
        </motion.div>

        {/* Produkt-Grid / Scroll-Container */}
        <div className="relative">
          {/* Desktop: 4-Spalten-Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {techHighlights.map((product, index) => (
              <TechCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Tablet & Mobile: Horizontales Scroll */}
          <div className="lg:hidden overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {techHighlights.map((product, index) => (
                <div key={product.id} className="w-[280px] flex-shrink-0">
                  <TechCard product={product} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ product, index }: { product: TechHighlight; index: number }) {
  const IconComponent = product.icon;
  const { addItem } = useRentalCart();

  const handleAddToCart = () => {
    addItem({
      id: product.productId,
      name: product.title,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ scale: 1.02 }}
      className={`
        group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full
        ${product.isSpecial ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200' : 'border border-gray-100'}
      `}
    >
      {/* NEU Badge */}
      {product.isNew && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white uppercase tracking-wide shadow-md">
            NEU
          </span>
        </div>
      )}

      {/* Header: Icon oder Bild */}
      <div className="mb-6 flex items-center justify-center h-32 bg-gray-50 rounded-xl overflow-hidden relative">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt || product.title}
            fill
            className={`${product.id === 1 || product.id === 3 ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-500`}
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 25vw, 250px"
            quality={75}
            loading="lazy"
            onError={(e) => {
              console.error('Failed to load image:', product.image);
              const target = e.currentTarget as HTMLImageElement;
              target.style.opacity = '1';
            }}
            onLoad={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.opacity = '1';
            }}
          />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-primary" />
          </div>
        )}
      </div>

      {/* Titel */}
      <h3 className="text-xl font-bold text-primary mb-4 leading-tight min-h-[3rem]">
        {product.title}
      </h3>

      {/* Specs als Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.specs.map((spec, specIndex) => (
          <span
            key={specIndex}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
          >
            {spec.label}
          </span>
        ))}
      </div>

      {/* Spacer um CTA nach unten zu drücken */}
      <div className="flex-grow"></div>

      {/* CTA Button - Zum Warenkorb hinzufügen */}
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg mt-auto text-sm"
      >
        <ShoppingBag className="w-4 h-4" />
        Zum Warenkorb
      </button>
    </motion.div>
  );
}
