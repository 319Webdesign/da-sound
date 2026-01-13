'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PartnerLogo {
  name: string;
  logoPath: string;
  alt: string;
}

interface PartnerLogosProps {
  partners?: PartnerLogo[];
}

// Standard-Partner (Platzhalter, bis echte Logos verfügbar sind)
const defaultPartners: PartnerLogo[] = [
  { name: 'Telespazio', logoPath: '/images/logo.webp', alt: 'Telespazio Logo' },
  { name: 'UPS', logoPath: '/images/logo.webp', alt: 'UPS Logo' },
  { name: 'Wella', logoPath: '/images/logo.webp', alt: 'Wella Logo' },
  { name: 'Bechtle', logoPath: '/images/logo.webp', alt: 'Bechtle Logo' },
  { name: 'rp-darmstadt', logoPath: '/images/logo.webp', alt: 'rp-darmstadt Logo' },
  { name: 'ASB', logoPath: '/images/logo.webp', alt: 'ASB Logo' },
];

export default function PartnerLogos({ partners = defaultPartners }: PartnerLogosProps) {
  // Dupliziere die Partner-Liste für nahtlose Loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden relative py-8 md:py-12 bg-gray-50/50">
      {/* Gradient Overlays für sanften Fade-Effekt an den Rändern */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      {/* Marquee Container */}
      <div className="relative group hover:[&>div]:pause-animation">
        <div className="flex animate-marquee-smooth">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12 flex items-center justify-center"
            >
              <div className="relative w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 group/item">
                {/* Platzhalter für echte Logos */}
                <div className="w-full h-full flex items-center justify-center bg-white rounded-lg p-3 md:p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="text-gray-400 text-xs md:text-sm font-semibold text-center filter grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-300">
                    {partner.name}
                  </span>
                </div>
                
                {/* Für echte Logos - auskommentiert, bis Logos verfügbar sind:
                <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
                  <Image
                    src={partner.logoPath}
                    alt={partner.alt}
                    fill
                    className="object-contain filter grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-300"
                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                  />
                </div>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
