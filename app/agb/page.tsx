'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { motion } from 'framer-motion';
import { FileText, Scale } from 'lucide-react';

export default function AGBPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AGB
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Allgemeine Geschäftsbedingungen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-8"
          >
            {/* Geltungsbereich */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  § 1 Geltungsbereich
                </h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Vermietung von Veranstaltungstechnik (Ton-, Licht- und Bühnenequipment) zwischen da-sound (Inh. Carsten Helfrich, Wormser Str. 23, 64319 Pfungstadt) und dem Mieter. Abweichende Bedingungen des Mieters werden nicht anerkannt, sofern nicht ausdrücklich schriftlich zugestimmt wird.
                </p>
              </div>
            </div>

            {/* Vertragsschluss */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 2 Vertragsschluss
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Der Mietvertrag kommt durch schriftliche Bestätigung (Angebot, Auftragsbestätigung, E-Mail) seitens da-sound zustande. Mündliche Zusagen bedürfen der schriftlichen Bestätigung. Die Vermietung erfolgt nur an Volljährige und nur für den privaten oder gewerblichen Gebrauch im vereinbarten Zeitraum.
                </p>
              </div>
            </div>

            {/* Preise und Zahlung */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 3 Preise und Zahlung
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Die vereinbarten Mietpreise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht ausdrücklich anders angegeben. Preise für Lieferung, Auf- und Abbau werden separat vereinbart. Die Zahlung erfolgt nach Rechnungsstellung; bei längerer Mietdauer kann eine Anzahlung vereinbart werden. Bei Zahlungsverzug können Verzugszinsen in gesetzlicher Höhe berechnet werden.
                </p>
              </div>
            </div>

            {/* Mietdauer und Rückgabe */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 4 Mietdauer und Rückgabe
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Die Mietdauer beginnt und endet zu den vereinbarten Zeiten. Eine vorzeitige Rückgabe berechtigt nicht zur Mietminderung. Bei verspäteter Rückgabe kann da-sound pauschalierten Mehrpreis für die Überziehungszeit berechnen; weitergehende Schadensersatzansprüche bleiben unberührt. Das Mietgut ist in dem Zustand zurückzugeben, in dem es übergeben wurde (ordnungsgemäßer Gebrauch abzugerechnen).
                </p>
              </div>
            </div>

            {/* Haftung des Mieters */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 5 Haftung des Mieters
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Der Mieter haftet für alle Schäden am Mietgut, die während der Mietzeit entstehen (z.B. Beschädigung, Verlust, Diebstahl), sofern sie nicht auf einem vom Vermieter zu vertretenden Grund beruhen. Die Haftung umfasst auch Folgeschäden. Der Mieter hat das Mietgut pfleglich zu behandeln und nur bestimmungsgemäß zu nutzen. Reparaturen oder Änderungen am Mietgut sind ohne Zustimmung des Vermieters nicht gestattet.
                </p>
              </div>
            </div>

            {/* Haftung des Vermieters */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 6 Haftung des Vermieters
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Der Vermieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Bei leichter Fahrlässigkeit haftet der Vermieter nur bei Verletzung wesentlicher Vertragspflichten und nur in Höhe des vorhersehbaren, typischerweise eintretenden Schadens. Die Haftung für entgangenen Gewinn und mittelbare Schäden ist ausgeschlossen, soweit nicht zwingend gehaftet wird.
                </p>
              </div>
            </div>

            {/* Stornierung */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 7 Stornierung
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Stornierungen durch den Mieter sind schriftlich (E-Mail genügt) mitzuteilen. Bei Stornierung bis zu 14 Tagen vor Mietbeginn entstehen keine Stornokosten. Bei späterer Stornierung kann da-sound eine Pauschale für entgangenen Ertrag und Aufwand berechnen; Einzelheiten werden bei Buchung mitgeteilt bzw. können auf Anfrage genannt werden.
                </p>
              </div>
            </div>

            {/* Schlussbestimmungen */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                § 8 Schlussbestimmungen
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten ist, soweit gesetzlich zulässig, der Sitz des Vermieters in Pfungstadt. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
                <p className="leading-relaxed mt-4">
                  Stand: Januar 2025. da-sound behält sich vor, die AGB anzupassen; für bereits geschlossene Verträge gelten die zum Zeitpunkt des Vertragsschlusses gültigen AGB.
                </p>
              </div>
            </div>

            {/* Verweis Impressum & Datenschutz */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Weitere rechtliche Informationen:{' '}
                <Link href="/impressum" className="text-primary hover:text-primary-dark underline">
                  Impressum
                </Link>
                {' · '}
                <Link href="/datenschutz" className="text-primary hover:text-primary-dark underline">
                  Datenschutz
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <RentalCart />
    </div>
  );
}
