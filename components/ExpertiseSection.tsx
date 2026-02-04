'use client';

import React from 'react';
import { Volume2, Sparkles, Layers, Disc } from 'lucide-react';

interface ExpertiseCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}

const expertiseCards: ExpertiseCard[] = [
  {
    icon: Volume2,
    title: 'Druckvoller Sound',
    text: 'Professionelle PA- & Musikanlagen für Events bis 1.500 Personen.',
  },
  {
    icon: Sparkles,
    title: 'Tolle Lichteffekte',
    text: 'Von der Ambiente beleuchtung bis zur dynamischen Light-Show',
  },
  {
    icon: Layers,
    title: 'Zuverlässige Bühnentechnik',
    text: 'Equipment für ihre Veranstaltung von namhaften Herstellern wie Shure, Allen Heath, Yamaha, u.v.m.',
  },
  {
    icon: Disc,
    title: 'Zubehör von A-Z',
    text: 'Mobile Bühnenpodeste, Stative und Stromerzeuger – alles aus einer Hand.',
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          Dein Event. Unser Sound. Unvergesslich.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
