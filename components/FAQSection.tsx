'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  MessageCircle,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { data } from '@/lib/data';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: 'Wie wird der Mietpreis berechnet?',
    answer: 'Die in unserer Preisliste angegebenen Mietpreise verstehen sich pro Tag inklusive 19% MwSt (in der Regel 24 Stunden).\n\nFür jeden weiteren Tag berechnen wir 50% des Tagespreises. Für ein Wochenende Fr-Mo werden grundsätzlich 2 Miettage (also das 1,5-fache des Mietpreises) berechnet. Auch Langzeitmieten sind möglich, bitte erfragen Sie ihr individuelles Angebot.',
  },
  {
    question: 'Wo / Wann kann ich die Sachen abholen?',
    answer: (
      <div className="space-y-4">
        <p>
          Abholung und Rückgabe erfolgen ausschließlich in unserem Lager: Wormser Str. 23, 64319 Pfungstadt. Eine Wegbeschreibung finden Sie auf unserer Kontaktseite.
        </p>
        <p>
          Zeitpunkte der Abholung und Rückgabe werden vorab mit Ihnen vereinbart.
        </p>
        <p>
          Auf Wunsch und gegen Aufpreis liefern wir Ihnen das Equipment inkl. Aufbau und Abholung.
        </p>
        <p>
          Unsere Lageröffnungszeiten und Wegbeschreibung finden Sie hier:
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg group mt-2"
        >
          Zur Kontaktseite
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    ),
  },
  {
    question: 'Wie kann ich bezahlen?',
    answer: 'Grundsätzlich erfolgt die Zahlung bei Abholung oder Anlieferung in bar oder per Karte (wir akzeptieren alle gänigen Zahlungsarten).\n\nAuf Rechnung können Sie zahlen als Gewerbetreibende oder Vereine ab einem Auftragswert von 100€.\n\nIn manchen Fällen wird eine Kaution fällig, wir informieren Sie rechtzeitig vor der Abholung falls dies der Fall sein sollte.',
  },
  {
    question: 'Kann ich eine Buchung stornieren?',
    answer: 'Ihre Buchung für die Miete von Material (Dry-Hire) können Sie bis 48 Stunden vor Mietbeginn kostenfrei stornieren.\n\nBis zu 24 Stunden vor Mietbeginn berechnen wir lediglich 50% des Auftragswertes.\n\nSollten Sie uns zu spät informieren oder nicht erscheinen berechnen wir den vollen Betrag als Mietausfall / Schadenersatz.\n\nFür Veranstaltungstechnik Dienstleistungen gelten andere Stornobedingungen (siehe AGB)',
  },
  {
    question: 'Sind die Mietgegenstände versichert?',
    answer: 'Ja, unsere Veranstaltungstechnik ist gegen Diebstahl, Feuer, technische / elektrische Defekte versichert.\n\nSelbst verursachte Schäden durch Fehlbedienung, unsachgemäßen Anschluss / Handhabung oder grobe Fahrlässigkeit sind selbstredend davon ausgenommen.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Frage zu Ihrer Veranstaltungstechnik.')}`;
  const email = 'info@da-sound.de';

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
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
            Häufig gestellte Fragen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Linke Seite: FAQ Akkordeon (60%) */}
          <div className="lg:col-span-3 space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 md:py-8 px-0 text-left flex items-center justify-between gap-4 group"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex-1 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 pr-12">
                        {typeof faq.answer === 'string' ? (
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        ) : (
                          <div className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Rechte Seite: Hilfe-Box (40%) - Sticky auf Desktop */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:sticky lg:top-8 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ihre Frage war nicht dabei?
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Wir helfen Ihnen gerne persönlich weiter. Melden Sie sich einfach bei uns!
              </p>

              <div className="space-y-4">
                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>WhatsApp Chat</span>
                </a>

                {/* Mail Button */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span>E-Mail schreiben</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
