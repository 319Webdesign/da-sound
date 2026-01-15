'use client';

import { data } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building2, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import ContactSection from '@/components/ContactSection';
import ServiceDeliverySection from '@/components/ServiceDeliverySection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import LocationSection from '@/components/LocationSection';
import { motion } from 'framer-motion';

export default function KontaktPage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  const phoneNumber = '015735451130';
  const email = 'info@da-sound.de';
  const address = {
    street: 'Wormser Str. 23',
    city: '64319 Pfungstadt',
  };

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
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Wir sind für Sie da! Kontaktieren Sie uns gerne – wir beraten Sie persönlich zu Ihrer Veranstaltung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* So sind wir erreichbar */}
      <ContactMethodsSection />

      {/* Kontaktformular und Öffnungszeiten */}
      <div id="contact-form">
        <ContactSection />
      </div>

      {/* Wir liefern direkt zu Ihrem Event */}
      <ServiceDeliverySection />

      {/* Anfahrt & Standort */}
      <LocationSection />

      {/* FAQ / Häufige Fragen */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-lg text-gray-600">
              Antworten auf die am häufigsten gestellten Fragen
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: 'Wie schnell kann ich eine Anfrage stellen?',
                answer: 'Sie können uns jederzeit über WhatsApp, Telefon oder E-Mail kontaktieren. Wir antworten in der Regel innerhalb weniger Stunden, oft sogar sofort.',
              },
              {
                question: 'Kann ich auch außerhalb der Öffnungszeiten anrufen?',
                answer: 'Für Notfälle und dringende Anfragen erreichen Sie uns auch außerhalb der Öffnungszeiten über WhatsApp. Wir bemühen uns, so schnell wie möglich zu antworten.',
              },
              {
                question: 'Wie läuft eine Beratung ab?',
                answer: 'Wir besprechen mit Ihnen Ihre Anforderungen, die Anzahl der Teilnehmer, den Veranstaltungsort und Ihre Wünsche. Daraufhin erstellen wir Ihnen ein individuelles Angebot.',
              },
              {
                question: 'Kann ich vor Ort vorbeikommen?',
                answer: 'Ja, gerne! Bitte kontaktieren Sie uns vorher telefonisch oder per WhatsApp, damit wir sicherstellen können, dass jemand für Sie da ist.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Warenkorb */}
      <RentalCart />
    </div>
  );
}
