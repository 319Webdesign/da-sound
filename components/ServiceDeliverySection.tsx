'use client';

import { MapPin, Truck, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  category: 'nahbereich' | 'erweitert';
}

export default function ServiceDeliverySection() {
  // Städte im Liefergebiet
  const cities: City[] = [
    // Nahbereich
    { name: 'Pfungstadt', category: 'nahbereich' },
    { name: 'Darmstadt', category: 'nahbereich' },
    { name: 'Griesheim', category: 'nahbereich' },
    { name: 'Weiterstadt', category: 'nahbereich' },
    { name: 'Dieburg', category: 'nahbereich' },
    { name: 'Langen', category: 'nahbereich' },
    { name: 'Ober-Ramstadt', category: 'nahbereich' },
    { name: 'Reinheim', category: 'nahbereich' },
    // Erweitert
    { name: 'Frankfurt am Main', category: 'erweitert' },
    { name: 'Offenbach', category: 'erweitert' },
    { name: 'Hanau', category: 'erweitert' },
    { name: 'Mainz', category: 'erweitert' },
    { name: 'Wiesbaden', category: 'erweitert' },
    { name: 'Groß-Gerau', category: 'erweitert' },
    { name: 'Rüsselsheim', category: 'erweitert' },
    { name: 'Aschaffenburg', category: 'erweitert' },
  ];

  const nahbereichCities = cities.filter(city => city.category === 'nahbereich');
  const erweitertCities = cities.filter(city => city.category === 'erweitert');

  // Scroll zum Formular
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Liefergebiete */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Wir liefern direkt zu Ihrem Event
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schnelle und zuverlässige Lieferung in ganz Südhessen und dem Rhein-Main-Gebiet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Nahbereich */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Nahbereich</h3>
                  <p className="text-sm text-gray-600">Kostenlose Lieferung</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {nahbereichCities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 justify-center sm:justify-start"
                  >
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{city.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Erweitert */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Erweitertes Gebiet</h3>
                  <p className="text-sm text-gray-600">Ab 100€ Aufpreis</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg mb-4">
                  <span className="text-xs font-semibold text-amber-800">ℹ️</span>
                  <span className="text-xs font-medium text-amber-800">
                    Ab 100,- € Aufpreis für Lieferung & Abholung
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {erweitertCities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 justify-center sm:justify-start"
                  >
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{city.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
