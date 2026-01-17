'use client';

import { data } from '@/lib/data';
import { MapPin, Truck, Clock, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LiefergebietPage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Frage zu Ihrem Liefergebiet.')}`;

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
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, y: 20 }}
            animate={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
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
          
          {/* Liefergebiet Bild */}
          <motion.div
            initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, scale: 0.95 }}
            animate={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, scale: 1 }}
            transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.6, delay: 0.3 }}
            className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/liefergebiet-021a7ce5-1920w.webp"
              alt="Liefergebiet von da-sound Veranstaltungstechnik"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain rounded-2xl"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px"
              onError={(e) => {
                console.error('Failed to load image:', '/images/liefergebiet-021a7ce5-1920w.webp');
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
              }}
              onLoad={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.opacity = '1';
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Zonen-Boxen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Zone 1 - Kerngebiet grün */}
            <motion.div
              initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, y: 20 }}
              whileInView={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={!isMounted || isMobile === null || isMobile ? undefined : { once: true, amount: 0.2 }}
              transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border-4 border-green-500 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zone 1</h3>
              </div>
              <p className="text-sm font-semibold text-green-600 mb-4">
                Kerngebiet grün
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                Lieferung nach Pfungstadt (und Ortsteile), Darmstadt (Stadtgebiet), Griesheim, Riedstadt, Seeheim-Jugenheim, Weiterstadt, Bensheim, Gernsheim, Mühltal, Ober-Ramstadt
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-gray-900">
                  Lieferpauschale 75€
                </p>
                <p className="text-sm text-gray-600">
                  zzgl. 19% MwSt.
                </p>
              </div>
            </motion.div>

            {/* Zone 2 - Blauer Ring */}
            <motion.div
              initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, y: 20 }}
              whileInView={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={!isMounted || isMobile === null || isMobile ? undefined : { once: true, amount: 0.2 }}
              transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border-4 border-blue-500 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zone 2</h3>
              </div>
              <p className="text-sm font-semibold text-blue-600 mb-4">
                Blauer Ring
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                Lieferung z.B. nach Lorsch, Weinheim, Dieburg, Rüsselsheim, Dreieich, Heppenheim, Biblis, etc.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-gray-900">
                  Lieferpauschale 100€
                </p>
                <p className="text-sm text-gray-600">
                  zzgl. 19% MwSt.
                </p>
              </div>
            </motion.div>

            {/* Zone 3 - Oranger Ring */}
            <motion.div
              initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, y: 20 }}
              whileInView={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={!isMounted || isMobile === null || isMobile ? undefined : { once: true, amount: 0.2 }}
              transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border-4 border-orange-500 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zone 3</h3>
              </div>
              <p className="text-sm font-semibold text-orange-600 mb-4">
                Oranger Ring
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                Lieferung z.B. nach Frankfurt, Mainz, Mannheim, Hanau, Aschaffenburg, Frankenthal, Erbach, etc.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-lg font-bold text-gray-900">
                  Lieferpauschale 150€
                </p>
                <p className="text-sm text-gray-600">
                  zzgl. 19% MwSt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lieferinformationen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, y: 20 }}
            whileInView={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={!isMounted || isMobile === null || isMobile ? undefined : { once: true, amount: 0.2 }}
            transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.6 }}
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
            initial={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 0, y: 20 }}
            whileInView={!isMounted || isMobile === null || isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={!isMounted || isMobile === null || isMobile ? undefined : { once: true, amount: 0.2 }}
            transition={!isMounted || isMobile === null || isMobile ? undefined : { duration: 0.6 }}
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
