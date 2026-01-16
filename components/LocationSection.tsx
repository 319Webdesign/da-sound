'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocationSection() {
  const address = 'Wormser Straße 23, 64319 Pfungstadt';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  
  // Google Maps Embed Code (echter Embed von Google Maps)
  const mapEmbedCode = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.317031327539!2d8.587604576020047!3d49.80328573375024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7b0ea9d1cde5%3A0xabdf44b5831ddef!2sda-sound%20PA-Verleih%20%26%20Veranstaltungstechnik!5e1!3m2!1sde!2sde!4v1768337523009!5m2!1sde!2sde';

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop: 2-Spalten Layout - Karte links, Info rechts */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[70%_30%] gap-8 min-h-[700px]">
            {/* Links: Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src={mapEmbedCode}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) brightness(0.95) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </motion.div>

            {/* Rechts: Info-Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                {/* Headline */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Besuchen Sie uns in Pfungstadt
                    </h2>
                  </div>
                </div>

                {/* Adresse */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Adresse
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    Wormser Straße 23<br />
                    64319 Pfungstadt
                  </p>
                </div>

                {/* Wegbeschreibung */}
                <div className="mb-6 flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Wegbeschreibung
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>In der Nähe von McDonald's</strong> – leicht zu finden
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Direkt am Autobahnanschluss A67 Pfungstadt</strong> – perfekte Anbindung
                      </p>
                    </div>
                  </div>
                </div>

                {/* Anbindung */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Verkehrsanbindung
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['A67', 'A5', 'B3', 'B426'].map((route, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-semibold"
                      >
                        {route}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Gute Erreichbarkeit über alle wichtigen Verkehrswege
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile: Karte oben, Info-Card darunter */}
        <div className="lg:hidden space-y-6">
          {/* Karte mit festem Seitenverhältnis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-square"
          >
            <iframe
              src={mapEmbedCode}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) brightness(0.95) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Info-Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
          >
            {/* Headline */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Besuchen Sie uns in Pfungstadt
                </h2>
              </div>
            </div>

            {/* Adresse */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Adresse
              </h3>
              <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                Wormser Straße 23<br />
                64319 Pfungstadt
              </p>
            </div>

            {/* Wegbeschreibung */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Wegbeschreibung
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <strong>In der Nähe von McDonald's</strong> – leicht zu finden
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <strong>Direkt am Autobahnanschluss A67 Pfungstadt</strong> – perfekte Anbindung
                  </p>
                </div>
              </div>
            </div>

            {/* Anbindung */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Verkehrsanbindung
              </h3>
              <div className="flex flex-wrap gap-2">
                {['A67', 'A5', 'B3', 'B426'].map((route, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-semibold"
                  >
                    {route}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Gute Erreichbarkeit über alle wichtigen Verkehrswege
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
