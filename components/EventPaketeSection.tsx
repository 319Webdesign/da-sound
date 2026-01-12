'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  Utensils,
  Settings,
  Sliders,
  Heart,
  Music,
  Check,
  ArrowRight,
  Download,
} from 'lucide-react';
import { data } from '@/lib/data';
import Link from 'next/link';

interface Paket {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: number;
  priceNote?: string;
  features: string[];
  emotional?: boolean;
  anchor: string; // Anchor-Link für die Leistungen-Seite
}

const pakete: Paket[] = [
  {
    icon: Settings,
    title: 'Technik Service',
    price: 400,
    priceNote: 'Tagespauschale',
    features: [
      'Anlieferung',
      'Aufbau',
      'Bedienung',
      'Abbau',
    ],
    anchor: 'technik-service',
  },
  {
    icon: Sliders,
    title: 'Eventpaket Live-Sound',
    price: 800,
    features: [
      'PA bis 500 Personen',
      '24-Kanal Mixer',
      'Tontechniker inkl.',
    ],
    anchor: 'live-sound',
  },
  {
    icon: Heart,
    title: 'Eventpaket Wedding',
    price: 1200,
    features: [
      'Trauung',
      'Location-Beleuchtung',
      'DJ-Service',
    ],
    emotional: true,
    anchor: 'wedding',
  },
];

const staedte = ['Darmstadt', 'Pfungstadt', 'Riedstadt', 'Griesheim', 'Weiterstadt'];

export default function EventPaketeSection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage zu einem Event-Paket.')}`;

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unsere Event-Pakete
          </h2>
        </motion.div>

        {/* Lieferservice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-50 rounded-xl p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Lieferservice</h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {staedte.map((stadt, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {stadt}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-primary font-semibold text-sm md:text-base">
              Ab 75,- € zzgl. MwSt.
            </p>
            <Link
              href="/leistungen#lieferservice"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm group/btn"
            >
              Details ansehen
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* EDEKA Festanhänger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-10 mb-8 text-white shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">EDEKA Festanhänger</h3>
                  <p className="text-white/90 text-lg">
                    Komplett ausgestattet (Zelt, Grill, Kühlschrank)
                  </p>
                </div>
              </div>
              
              {/* Rechts: 25% Rabatt Badge & Details Button */}
              <div className="flex flex-col items-end gap-3 flex-shrink-0">
                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-bold text-lg shadow-md">
                  25% Rabatt-Vorteil *
                </span>
                <Link
                  href="/leistungen#edeka-festanhaenger"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm group/btn"
                >
                  Details ansehen
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Paket-Liste */}
        <div className="space-y-4 mb-8">
          {pakete.map((paket, index) => {
            const IconComponent = paket.icon;
            return (
              <Link
                href={`/leistungen#${paket.anchor}`}
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="group relative bg-white border-2 border-gray-100 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 cursor-pointer"
                >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Links: Icon & Titel */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${paket.emotional ? 'bg-pink-100' : 'bg-primary/10'}`}>
                      <IconComponent className={`w-7 h-7 ${paket.emotional ? 'text-pink-600' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {paket.title}
                      </h3>
                      {paket.priceNote && (
                        <p className="text-sm text-gray-500">{paket.priceNote}</p>
                      )}
                      <ul className="mt-3 space-y-2">
                        {paket.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Rechts: Preis & Button */}
                  <div className="flex flex-col items-end gap-4 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-right"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary">
                        {paket.price}€
                      </div>
                      {paket.priceNote && (
                        <div className="text-xs text-gray-500 mt-1">{paket.priceNote}</div>
                      )}
                    </motion.div>
                    <div className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm group/btn">
                      Details ansehen
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Künstlervermittlung */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-slate-50 rounded-xl p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Music className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Künstlervermittlung
                </h3>
                <ul className="space-y-2">
                  {['DJ', 'Party Band', 'Jazz', 'Solo-Künstler'].map((genre, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm md:text-base">{genre}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 flex-shrink-0">
              <div className="text-right">
                <div className="text-xl md:text-2xl font-bold text-primary">
                  Preis auf Anfrage
                </div>
              </div>
              <Link
                href="/leistungen#kuenstlervermittlung"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm group/btn"
              >
                Details ansehen
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer: Alle Dienstleistungen Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg group"
          >
            Alle Dienstleistungen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
