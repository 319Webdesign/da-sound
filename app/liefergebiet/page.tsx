'use client';

import { data } from '@/lib/data';
import { MapPin, Truck, Clock, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { motion } from 'framer-motion';

export default function LiefergebietPage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Frage zu Ihrem Liefergebiet.')}`;

  // Beispiel-Städte im Liefergebiet
  const cities = [
    { name: 'Pfungstadt', distance: '0 km', highlight: true },
    { name: 'Darmstadt', distance: '8 km', highlight: true },
    { name: 'Weiterstadt', distance: '12 km' },
    { name: 'Griesheim', distance: '15 km' },
    { name: 'Dieburg', distance: '18 km' },
    { name: 'Langen', distance: '20 km' },
    { name: 'Ober-Ramstadt', distance: '22 km' },
    { name: 'Reinheim', distance: '25 km' },
    { name: 'Groß-Gerau', distance: '28 km' },
    { name: 'Rüsselsheim', distance: '30 km' },
    { name: 'Frankfurt am Main', distance: '35 km', highlight: true },
    { name: 'Offenbach', distance: '38 km' },
    { name: 'Hanau', distance: '42 km' },
    { name: 'Aschaffenburg', distance: '55 km' },
    { name: 'Mainz', distance: '45 km' },
    { name: 'Wiesbaden', distance: '50 km' },
  ];

  const regions = [
    {
      name: 'Kerngebiet',
      description: 'Pfungstadt, Darmstadt und direkte Umgebung',
      cities: ['Pfungstadt', 'Darmstadt', 'Weiterstadt', 'Griesheim'],
      deliveryTime: '1-2 Stunden',
      deliveryCost: 'Kostenlos',
    },
    {
      name: 'Erweitertes Gebiet',
      description: 'Südhessen und Rhein-Main-Gebiet',
      cities: ['Dieburg', 'Langen', 'Ober-Ramstadt', 'Reinheim', 'Groß-Gerau', 'Rüsselsheim'],
      deliveryTime: '2-4 Stunden',
      deliveryCost: 'Ab 50€',
    },
    {
      name: 'Weiteres Gebiet',
      description: 'Frankfurt, Mainz, Wiesbaden und Umgebung',
      cities: ['Frankfurt am Main', 'Offenbach', 'Hanau', 'Mainz', 'Wiesbaden', 'Aschaffenburg'],
      deliveryTime: '4-6 Stunden',
      deliveryCost: 'Auf Anfrage',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/95 backdrop-blur-sm relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.webp"
                alt="da-sound Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                quality={90}
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/ueber-uns"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/leistungen"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Eventservice
              </Link>
              <Link
                href="/liefergebiet"
                className="text-sm font-medium text-primary transition-colors"
              >
                Liefergebiet
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unser Liefergebiet
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Professionelle Event-Technik direkt zu Ihnen geliefert – in Pfungstadt, Darmstadt und ganz Südhessen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Liefergebiete Übersicht */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Wir liefern in ganz Südhessen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von Pfungstadt bis Frankfurt – wir bringen die Technik direkt zu Ihrem Event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border-2 border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{region.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{region.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Lieferzeit: <strong>{region.deliveryTime}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Truck className="w-4 h-4 text-primary" />
                    <span>Lieferkosten: <strong>{region.deliveryCost}</strong></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Städte:</p>
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city, cityIndex) => (
                      <span
                        key={cityIndex}
                        className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Städte-Liste */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alle Städte im Liefergebiet
            </h2>
            <p className="text-lg text-gray-600">
              Eine Übersicht aller Städte, in die wir liefern
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-colors ${
                    city.highlight
                      ? 'bg-primary/5 border-2 border-primary/20'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 flex-shrink-0 ${
                      city.highlight ? 'text-primary' : 'text-gray-400'
                    }`}
                  />
                  <div>
                    <p className={`font-medium ${city.highlight ? 'text-primary' : 'text-gray-900'}`}>
                      {city.name}
                    </p>
                    <p className="text-xs text-gray-500">{city.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lieferinformationen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-blue-50/50 rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Wichtige Informationen zur Lieferung
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lieferung & Aufbau</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir liefern die Technik direkt zu Ihrem Veranstaltungsort und übernehmen auf Wunsch 
                    auch den kompletten Aufbau. So können Sie sich voll und ganz auf Ihr Event konzentrieren.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lieferzeiten</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Lieferzeiten variieren je nach Entfernung. Im Kerngebiet (Pfungstadt, Darmstadt) 
                    können wir meist innerhalb von 1-2 Stunden liefern. Für weiter entfernte Orte planen 
                    wir die Lieferung individuell mit Ihnen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Außerhalb des Liefergebiets</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Auch wenn Ihre Stadt nicht in der Liste steht, kontaktieren Sie uns gerne. 
                    Wir finden für fast jedes Event eine Lösung und können auch außerhalb unseres 
                    Standard-Liefergebiets liefern.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Fragen zum Liefergebiet?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns gerne, wenn Sie unsicher sind, ob wir zu Ihnen liefern können. 
              Wir finden für fast jedes Event eine Lösung!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Jetzt anfragen
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Weitere Kontaktmöglichkeiten
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Sticky Warenkorb */}
      <RentalCart />
    </div>
  );
}
