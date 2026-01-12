'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Truck,
  Volume2,
  Lightbulb,
  Monitor,
  Mic,
  Zap,
  Settings,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { data } from '@/lib/data';

const mietbareGeraete = [
  { icon: Volume2, label: 'PA-Systeme' },
  { icon: Lightbulb, label: 'Licht' },
  { icon: Monitor, label: 'Beamer' },
  { icon: Mic, label: 'Mikrofone' },
  { icon: Zap, label: 'Strom' },
  { icon: Settings, label: 'Steuerung' },
  { icon: Layers, label: 'Bühne' },
];

const lieferStaedte = ['Darmstadt', 'Bensheim', 'Pfungstadt', 'Riedstadt', 'Griesheim', 'Weiterstadt'];

export default function DryHireServiceSection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich möchte eine Mietanfrage stellen.')}`;

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20 lg:py-24">
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
            Dry-Hire vs. Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie die Variante, die zu Ihrem Event passt
          </p>
        </motion.div>

        {/* Zwei Karten */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Karte 1: Dry-Hire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Dry-Hire: Selbst abholen & sparen
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                Empfohlen für Technik-Affine
              </span>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-gray-700">Günstigste Konditionen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-gray-700">Abholung im Lager Pfungstadt</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-gray-700">Eigenständiger Aufbau (Video-Anleitung inkl.)</span>
              </li>
            </ul>
          </motion.div>

          {/* Karte 2: Full-Service */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 shadow-lg text-white"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Full-Service: Wir kümmern uns
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                Rundum-Sorglos
              </span>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-white/90">Lieferung & Abholung (Raum DA, MZ, GG)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-white/90">Fachgerechter Aufbau & Verkabelung</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-white/90">Technische Einweisung vor Ort</span>
              </li>
            </ul>

            {/* SEO: Liefergebiet-Städte */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs mb-2">Liefergebiet:</p>
              <p className="text-white/80 text-sm">
                {lieferStaedte.join(', ')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Icon-Band für mietbare Geräte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl p-6 md:p-8 shadow-md mb-8"
        >
          <p className="text-center text-sm text-gray-500 mb-4 font-medium">
            Mietbare Geräte
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {mietbareGeraete.map((geraet, index) => {
              const IconComponent = geraet.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-gray-600 text-center">
                    {geraet.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg group"
          >
            Jetzt Mietanfrage stellen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
