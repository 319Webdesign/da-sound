'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Speaker, 
  Sliders, 
  Lightbulb, 
  Sparkles, 
  Mic, 
  Cloud, 
  Monitor, 
  Zap, 
  Settings, 
  Layers, 
  Boxes,
  Download
} from 'lucide-react';
import Image from 'next/image';

interface CategoryCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    icon: Package,
    title: 'Komplett-Sets',
    description: 'All-inclusive Event-Pakete mit Ton, Licht und Bühne',
    image: '/images/profx3-1920w.webp',
  },
  {
    icon: Speaker,
    title: 'PA-Anlagen',
    description: 'Druckvoller Sound für bis zu 500 Personen',
    image: '/images/audiozenit-1920w.webp',
  },
  {
    icon: Sliders,
    title: 'Mischpulte',
    description: 'Professionelle Audio-Mischpulte',
    image: '/images/chorkonzert-1920w.webp',
  },
  {
    icon: Lightbulb,
    title: 'LED Spots',
    description: 'Energieeffiziente LED-Beleuchtung für jeden Raum',
    image: '/images/kls120_1-1920w.webp',
  },
  {
    icon: Sparkles,
    title: 'Moving Heads',
    description: 'Professionelles Show-Licht für deine Bühne',
    image: '/images/sk3-1920w.webp',
  },
  {
    icon: Mic,
    title: 'Mikrofone',
    description: 'Funk- und Kabelmikrofone für klare Kommunikation',
    image: '/images/slxd4e86-1920w.webp',
  },
  {
    icon: Cloud,
    title: 'Nebelmaschinen',
    description: 'Atmosphärische Nebel- und Dunsteffekte',
    image: '/images/z1200_1-1920w.webp',
  },
  {
    icon: Monitor,
    title: 'Beamer',
    description: 'Hochauflösende Projektion für Präsentationen',
    image: '/images/acer1-1920w.webp',
  },
  {
    icon: Zap,
    title: 'Stromerzeuger',
    description: 'Mobile Stromversorgung für Outdoor-Events',
    image: '/images/hy3200si_1-1920w.jpg',
  },
  {
    icon: Settings,
    title: 'Lichtsteuerung',
    description: 'DMX-Controller und Steuerungssysteme',
    image: '/images/quickq10_1-1920w.webp',
  },
  {
    icon: Layers,
    title: 'Traversen',
    description: 'Stabile Traversensysteme für sichere Installation',
    image: '/images/stative.jpg',
  },
  {
    icon: Boxes,
    title: 'Bühnenpodeste',
    description: 'Modulare Podestsysteme in verschiedenen Höhen',
    image: '/images/ixstage5-1920w.jpg',
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            if (!IconComponent) return null;
            
            return (
              <motion.div
                key={`${category.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Hintergrundbild */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover object-center brightness-90 saturate-90 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                {/* Gradient Overlay - leichter für bessere Sichtbarkeit */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-all duration-500" />

                {/* Inhalt - Unten links positioniert, feste Position */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Icon und Titel - konsistente Baseline für alle Titel */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 mt-1">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-h-[3rem] flex items-start pt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight m-0">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Beschreibung - fadet beim Hover ein */}
                  <p className="text-white/0 group-hover:text-white/90 text-sm md:text-base leading-relaxed transition-all duration-300 mt-2">
                    {category.description}
                  </p>
                </div>
              </motion.div>
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
