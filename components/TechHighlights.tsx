'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Volume2,
  Monitor,
  Zap,
  Speaker,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { data } from '@/lib/data';

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
}

const techHighlights: TechHighlight[] = [
  {
    id: 1,
    icon: Volume2,
    title: 'D.A.S. Audio PA-System',
    specs: [
      { label: '1.000W RMS' },
      { label: 'D.A.S. Audio' },
      { label: 'Line Array' },
    ],
    image: '/images/palive2-1920w.webp',
    imageAlt: 'D.A.S. Audio PA-System',
  },
  {
    id: 2,
    icon: Monitor,
    title: 'UHD Display 4K',
    specs: [
      { label: '4K UHD' },
      { label: '65 Zoll' },
      { label: 'HDR' },
    ],
    image: '/images/acer1-1920w.webp',
    imageAlt: 'UHD Display 4K',
    isNew: true,
  },
  {
    id: 3,
    icon: Speaker,
    title: 'AudioZenit Komplettset',
    specs: [
      { label: '500W RMS' },
      { label: 'Subwoofer' },
      { label: 'Mischpult' },
    ],
    image: '/images/audiozenit-1920w.webp',
    imageAlt: 'AudioZenit Komplettset',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Stromerzeuger 6,5 KW',
    specs: [
      { label: '6,5 KW' },
      { label: 'Diesel' },
      { label: 'Outdoor' },
    ],
    image: '/images/hy3200si_1-1920w.jpg',
    imageAlt: 'Stromerzeuger 6,5 KW',
    isSpecial: true,
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
            Unsere Top-Geräte für Ihre Veranstaltung – professionelle Technik in Premium-Qualität
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
          <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-4 min-w-max">
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
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hallo, ich interessiere mich für: ${product.title}`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 25vw, 250px"
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

      {/* CTA Link - fest unten */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors group/cta mt-auto pt-4 border-t border-gray-100"
      >
        Details & Mietanfrage
        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}
