'use client';

import { data } from '@/lib/data';
import { MapPin, Clock, Users, Award, Heart, Zap, MessageCircle, Volume2, ArrowRight } from 'lucide-react';
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
              Professionelle Event-Technik aus Pfungstadt. Wir bringen Ihre Veranstaltung zum Klingen.
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
              className="space-y-8"
            >
              {/* Subline */}
              <div className="inline-block">
                <span className="text-primary font-semibold text-lg">
                  Individuelle Lösungen für Events bis 1000 Personen
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professioneller Sound für Ihr Event in Südhessen
              </h2>

              {/* Fließtext */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Wir von da-sound setzen auf Qualität und individuelle Lösungen. Ob kleine Privatfeier, 
                  mittelgroßes Firmenevent oder großes Stadtfest – wir passen unsere professionelle Veranstaltungstechnik 
                  genau an Ihre Bedürfnisse an.
                </p>
                <p>
                  Unser Fokus liegt auf bezahlbaren, hochwertigen Lösungen für Events bis zu 1000 Personen. 
                  Wir verstehen, dass jedes Event einzigartig ist und benötigt maßgeschneiderte Technik – 
                  von der kompletten Beschallung bis hin zu einzelnen Komponenten.
                </p>
                <p>
                  Als Ihr regionaler Partner aus Pfungstadt und Darmstadt kennen wir die Region und bringen 
                  die Technik direkt zu Ihnen – inklusive Aufbau und professioneller Betreuung vor Ort.
                </p>
              </div>

              {/* Info-Boxen */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {/* Bis 1000 Personen */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Bis 1000 Personen</h3>
                  <p className="text-sm text-gray-600">
                    Beschallung für kleine und mittlere Events
                  </p>
                </motion.div>

                {/* Premium D.A.S. Audio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Premium D.A.S. Audio</h3>
                  <p className="text-sm text-gray-600">
                    Exklusiv hochwertige Lautsprecher
                  </p>
                </motion.div>

                {/* Regionaler Partner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Regionaler Partner</h3>
                  <p className="text-sm text-gray-600">
                    Pfungstadt & Darmstadt
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
                icon: Heart,
                title: 'Leidenschaft',
                description: 'Unsere Leidenschaft für Event-Technik spiegelt sich in jedem Projekt wider – von der Planung bis zur Umsetzung.',
              },
              {
                icon: Users,
                title: 'Zuverlässigkeit',
                description: 'Sie können sich auf uns verlassen. Pünktlichkeit, Professionalität und Service stehen bei uns an erster Stelle.',
              },
              {
                icon: Zap,
                title: 'Flexibilität',
                description: 'Kurzfristige Änderungen? Kein Problem. Wir passen uns Ihren Bedürfnissen an und finden immer eine Lösung.',
              },
              {
                icon: MapPin,
                title: 'Regional',
                description: 'Wir sind in Pfungstadt zu Hause und kennen die Region. Schnelle Anlieferung und persönlicher Service inklusive.',
              },
              {
                icon: Award,
                title: 'Erfahrung',
                description: 'Jahrelange Erfahrung in der Event-Branche – von kleinen Privatfeiern bis hin zu großen Firmenveranstaltungen.',
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
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
              Die Menschen hinter da-sound – Ihre Experten für professionelle Veranstaltungstechnik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Platzhalter Teammitglied 1 */}
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
                Max Mustermann
              </h3>
              <p className="text-primary font-semibold mb-3">
                Geschäftsführer
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Platzhalter: Kurze Beschreibung der Person, Expertise und Rolle im Team]
              </p>
            </motion.div>

            {/* Platzhalter Teammitglied 2 */}
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
                Maria Musterfrau
              </h3>
              <p className="text-primary font-semibold mb-3">
                Event-Technikerin
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Platzhalter: Kurze Beschreibung der Person, Expertise und Rolle im Team]
              </p>
            </motion.div>

            {/* Platzhalter Teammitglied 3 */}
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
                Thomas Beispiel
              </h3>
              <p className="text-primary font-semibold mb-3">
                Tontechniker
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                [Platzhalter: Kurze Beschreibung der Person, Expertise und Rolle im Team]
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

      {/* Über uns & Vertrauen */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Über uns Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                Sound with Soul – Veranstaltungstechnik für Südhessen
              </h2>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Text */}
                <div className="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Wir bieten individuelle und bezahlbare Lösungen, damit Ihre Veranstaltung zum Erfolg wird. 
                    Von der privaten Party bis zum Firmenevent mit 1.000 Personen setzen wir kompromisslos 
                    auf High-End-Sound von D.A.S. Audio.
                  </p>
                  <p>
                    Unsere Leidenschaft für professionelle Veranstaltungstechnik spiegelt sich in jedem Projekt wider. 
                    Wir verstehen, dass jedes Event einzigartig ist und benötigt maßgeschneiderte Lösungen, 
                    die perfekt auf Ihre Bedürfnisse zugeschnitten sind.
                  </p>
                </div>
                
                {/* D.A.S. Logo als Qualitätssiegel */}
                <div className="flex-shrink-0">
                  <div className="bg-gray-50 rounded-xl p-8 border-2 border-primary/10 shadow-sm">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-white rounded-lg flex items-center justify-center border border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-primary mb-2">D.A.S.</div>
                        <div className="text-sm md:text-base font-semibold text-gray-600">AUDIO</div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4 font-medium">
                      Unser Partner<br />für Premium-Sound
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Logo-Wall (Referenzen) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Vertrauen namhafter Partner
            </h3>

            {/* Infinite Logo Marquee Komponente */}
            <PartnerLogos />
          </motion.div>

          {/* 3. Lokaler Akzent */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg italic">
              Ihr regionaler Partner in Pfungstadt, Darmstadt und Umgebung.
            </p>
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
