'use client';

import React from 'react';
import { Volume2, Sparkles, Layers, Disc } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExpertiseCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}

const expertiseCards: ExpertiseCard[] = [
  {
    icon: Volume2,
    title: 'Druckvoller Sound',
    text: 'Professionelle PA- & Musikanlagen für jede Eventgröße.',
  },
  {
    icon: Sparkles,
    title: 'Tolle Lichteffekte',
    text: 'Von der Ambientebeleuchtung bis zur dynamischen Show.',
  },
  {
    icon: Layers,
    title: 'Sichere Bühnentechnik',
    text: 'Stabile Podest- und Traversensysteme für deinen Auftritt.',
  },
  {
    icon: Disc,
    title: 'DJ-Equipment',
    text: 'Pioneer-Standards und modernes Zubehör für Profis.',
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16"
        >
          Dein Event. Unser Sound. Unvergesslich.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-md text-center md:text-left"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center md:justify-start">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Titel */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
