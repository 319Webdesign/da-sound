'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  Users, 
  Heart, 
  Briefcase, 
  Music,
  Volume2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { data } from '@/lib/data';

interface EventType {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const eventTypes: EventType[] = [
  { icon: Heart, label: 'Privatfeiern' },
  { icon: Music, label: 'Hochzeiten' },
  { icon: Briefcase, label: 'Firmenevents' },
  { icon: Users, label: 'Stadtfeste' },
];

const cities = [
  'Darmstadt',
  'Pfungstadt',
  'Frankfurt',
  'Mainz',
  'Mannheim',
  'Heidelberg',
  'Hanau',
];

export default function AboutServiceSection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich hätte gerne ein unverbindliches Angebot für meine Region.')}`;

  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-50/50 to-white py-16 md:py-20 lg:py-24 pb-8 md:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Links: Text & Keywords */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Veranstaltungstechnik & Full-Service aus einer Hand
            </h2>

            {/* Text */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Wir bieten Ihnen nicht nur hochwertige Veranstaltungstechnik zum Mieten, sondern einen 
                umfassenden Full-Service für Ihre Events. Unser Lieferservice bringt die komplette 
                Technik direkt zu Ihnen – inklusive Aufbau und professioneller Betreuung vor Ort.
              </p>
              <p>
                Ob Sie eine komplette Eventpauschale oder einzelne Komponenten benötigen: Wir stellen 
                Ihnen maßgeschneiderte Lösungen zusammen und sorgen dafür, dass Ihre Veranstaltung 
                reibungslos verläuft.
              </p>
            </div>

            {/* Event-Typen Checkliste */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Unsere Expertise für:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {eventTypes.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="text-gray-900 font-medium">{event.label}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Rechts: Region & Trust */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Einsatzgebiet-Karte / Städte-Grid */}
            <div id="liefergebiet" className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Unsere Einsatzgebiete
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-primary/5 rounded-lg border border-gray-200 hover:border-primary/20 transition-all cursor-pointer group"
                  >
                    <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 font-medium text-sm md:text-base">
                      {city}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlight-Elemente */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Beschallung */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Beschallung</h4>
                    <p className="text-white/90 text-lg font-semibold">
                      bis 1.000 Personen
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stromerzeuger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-accent to-accent-light rounded-2xl p-6 text-white shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Stromerzeuger</h4>
                    <p className="text-white/90 text-lg font-semibold">
                      bis 6,5 KW
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg group"
          >
            Jetzt unverbindliches Angebot für meine Region anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
