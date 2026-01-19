'use client';

import { data } from '@/lib/data';
import { MapPin, Clock, Users, Award, Heart, Zap, MessageCircle, Volume2, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import PartnerLogos from '@/components/PartnerLogos';
import { motion } from 'framer-motion';

export default function UeberUnsPage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich hätte gerne mehr Informationen über da-sound.')}`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Über da-sound
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Professionelle Veranstaltungstechnik aus Pfungstadt. Wir machen ihr Event zum Erfolg.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Moderne About-Sektion */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Links: Bild */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/chorkonzert-1920w.webp"
                alt="Professionelle Veranstaltungstechnik bei einem Event"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            {/* Rechts: Text-Inhalt */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Subline */}
              <div className="inline-block">
                <span className="text-primary font-semibold text-lg">
                  Individuelle Lösungen für Events bis 1.500 Personen
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Equipment und Know-How für Ihr Event in Südhessen aus einer Hand
              </h2>

              {/* Fließtext */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Wir von da-sound setzen auf Qualität und Zuverlässigkeit. Von privaten Geburtstags-
                  und Hochzeitsfeiern, über Firmenevents und Konferenzen, bis hin zu größeren
                  Stadtfesten und Konzertveranstaltungen – wir passen unsere professionelle
                  Veranstaltungstechnik Ihren Bedürfnissen an.
                </p>
                <p>
                  Unser Fokus liegt dabei auf bezahlbaren und bedarfsgerechten Lösungen für Events von
                  50 bis 1.500 Personen. Bei uns finden Sie bewährte und günstige Event-Pakete, wie auch
                  maßgeschneiderte Lösungen, die ihr Event einzigartig und unvergesslich machen.
                  Oder möchten Sie einfach einzelne Komponenten wie Lautsprecher, Mikrofone, LED
                  Spots oder Lichteffekte mieten? – dann nutzen Sie unser umfassendes Dry-Hire Angebot
                  an Ton- und Lichttechnik.
                </p>
                <p>
                  Als Ihr regionaler Veranstaltungstechnik Partner aus Pfungstadt garantieren wir Ihnen
                  regionale und zuverlässige Dienstleistungen zu fairen und transparenten Konditionen.
                </p>
              </div>

              {/* Info-Boxen */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 justify-items-center lg:justify-items-start items-stretch">
                {/* Bis 1.500 Personen */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10 text-center lg:text-left flex flex-col h-full w-full max-w-sm sm:max-w-none"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Bis 1.500 Personen</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Beschallung & Beleuchtung für kleine und mittlere Events
                  </p>
                </motion.div>

                {/* Premium Equipment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10 text-center lg:text-left flex flex-col h-full w-full max-w-sm sm:max-w-none"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Premium Equipment</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Hochwertige Lautsprecher Made in Europe
                  </p>
                </motion.div>

                {/* Regional stark */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10 text-center lg:text-left flex flex-col h-full w-full max-w-sm sm:max-w-none"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Regional stark</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Veranstaltungstechnik im Großraum Darmstadt
                  </p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  href="/#miet-kategorien"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg group"
                >
                  Jetzt Technik anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Was uns ausmacht und worauf wir bei da-sound Wert legen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Qualität',
                description: 'Wir arbeiten ausschließlich mit hochwertiger, professioneller Technik von führenden Herstellern.',
              },
              {
                icon: Eye,
                title: 'Transparenz',
                description: 'Unsere klare und faire Preispolitik gibt ihnen Planungssicherheit für ihr Event.',
              },
              {
                icon: Users,
                title: 'Zuverlässigkeit',
                description: 'Sie können sich auf uns verlassen. Pünktlichkeit, Professionalität und Service stehen bei uns an erster Stelle.',
              },
              {
                icon: Zap,
                title: 'Flexibilität',
                description: 'Kurzfristige Änderungen, spontane Anfragen? – wir bieten Ihnen Lösungen, auch an Wochenenden.',
              },
              {
                icon: MapPin,
                title: 'Regional',
                description: 'Wir sind in Pfungstadt zu Hause und kennen unsere Kunden. Kurze Wege, persönlicher Service, günstige Lieferpauschalen.',
              },
              {
                icon: Award,
                title: 'Erfahrung',
                description: 'Jahrelange Erfahrung in der Event-Branche – profitieren Sie von unserer Expertise.',
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center md:text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Sektion */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Die Menschen hinter da-sound – für Sie vor Ort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Carsten Helfrich */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Carsten Helfrich
              </h3>
              <p className="text-primary font-semibold mb-3">
                Inhaber, Geschäftsführer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Verwaltung, Eventplanung, Audio Engineer, Laserschutzbeauftragter
              </p>
            </motion.div>

            {/* Demian Wörl */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Demian Wörl
              </h3>
              <p className="text-primary font-semibold mb-3">
                Mitarbeiter Logistik
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lagerverwaltung, Kommissionierung, Kundenbetreuung
              </p>
            </motion.div>

            {/* János Gede */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                János Gede
              </h3>
              <p className="text-primary font-semibold mb-3">
                Event-Service
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Auslieferungen, Veranstaltungstechniker, Service
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referenzen / Gallery */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unsere Referenzen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Einblicke in unsere erfolgreich umgesetzten Events und Veranstaltungen
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
              (hier die Bilder aus dem Ordner Best Practice: mindestens 15 auswählen, Bildbeschreibungen folgen)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Galerie Bild 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src="/images/audiozenit-1920w.webp"
                alt="Event-Referenz: Audiozenit Veranstaltung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Galerie Bild 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src="/images/palive2-1920w.webp"
                alt="Event-Referenz: PA Live Veranstaltung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Galerie Bild 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src="/images/profx3-1920w.webp"
                alt="Event-Referenz: Profx3 Veranstaltung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Galerie Bild 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src="/images/IMG-20250720-WA0049-1920w.webp"
                alt="Event-Referenz: Veranstaltung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Galerie Bild 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src="/images/kls120_1-1920w.webp"
                alt="Event-Referenz: KLS120 Veranstaltung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Galerie Bild 6 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src="/images/ixstage5-1920w.webp"
                alt="Event-Referenz: IXStage5 Veranstaltung"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner-Logos */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Auszug unserer geschätzten Firmenkunden:
            </h3>

            {/* Infinite Logo Marquee Komponente */}
            <PartnerLogos />
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
              Bereit für Ihr nächstes Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir beraten Sie gerne!
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
                href="/"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Zur Startseite
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
