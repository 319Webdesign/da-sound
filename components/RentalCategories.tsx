'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Plus, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRentalCart } from '@/context/RentalCartContext';
import { categories } from '@/lib/categories';

export default function RentalCategories() {
  const handleDownload = () => {
    // Hier würde normalerweise der PDF-Download ausgelöst werden
    alert('PDF-Download wird vorbereitet...\n\nIn der finalen Version wird hier die Mietpreisliste als PDF heruntergeladen.');
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16"
        >
          Miet-Kategorien
        </motion.h2>

        {/* Grid mit Bild-Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            if (!IconComponent) return null;
            
            return (
              <Link
                href={`/kategorien/${category.slug}`}
                key={`${category.title}-${index}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
                  className="group relative aspect-[4/5] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                >
                {/* Hintergrundbild */}
                <div className="absolute inset-0 bg-gray-800">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    quality={75}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    priority={index < 3}
                    unoptimized={category.image === '/images/slxd4e86-1920w.webp' || category.image === '/images/z1200_1-1920w.webp'}
                    onError={(e) => {
                      console.error('Failed to load image:', category.image, 'for category:', category.title);
                      const target = e.currentTarget as HTMLImageElement;
                      // Versuche unoptimized zu laden
                      if (!target.src.includes('?')) {
                        target.src = category.image + '?unoptimized=true&t=' + Date.now();
                      }
                    }}
                    onLoad={(e) => {
                      // Stelle sicher, dass das Bild sichtbar ist
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.opacity = '1';
                      target.style.display = 'block';
                    }}
                  />
                </div>

                {/* Gradient Overlay - Reduziert für bessere Sichtbarkeit */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent sm:from-black/70 sm:via-black/30 sm:to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-500" />

                {/* Inhalt - Unten links positioniert, feste Position */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8">
                  {/* Icon und Titel - konsistente Baseline für alle Titel */}
                  <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg bg-white/30 sm:bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 sm:border-white/30 mt-0.5 sm:mt-1">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-h-[2.5rem] sm:min-h-[3rem] flex items-start pt-0.5 sm:pt-1">
                      <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white leading-tight m-0">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Beschreibung - Sichtbar auf Mobile, fadet beim Hover auf Desktop */}
                  <p className="text-white/90 sm:text-white/0 sm:group-hover:text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-base leading-snug sm:leading-relaxed transition-all duration-300 mt-1 sm:mt-2 line-clamp-2">
                    {category.description}
                  </p>

                </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={handleDownload}
            className="group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Gesamte Mietpreisliste als PDF laden
          </button>
        </motion.div>
      </div>
    </section>
  );
}
