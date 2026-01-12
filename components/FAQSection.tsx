'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Minus,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { data } from '@/lib/data';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Wie wird der Mietpreis berechnet?',
    answer: 'Der Mietpreis wird als Tagessatz inkl. 19% MwSt. berechnet. Bei Wochenend-Buchungen (Freitag bis Montag) gelten spezielle Wochenend-Tarife. Alle Preise sind transparent aufgeführt und beinhalten die Grundausstattung.',
  },
  {
    question: 'Wo / Wann kann ich die Sachen abholen?',
    answer: 'Die Abholung erfolgt in unserem Lager in Pfungstadt. Nach Vereinbarung können Sie die Geräte zu unseren Öffnungszeiten abholen: Montag bis Freitag 9:00 - 18:00 Uhr, Samstag 10:00 - 16:00 Uhr. Eine Terminvereinbarung ist empfehlenswert.',
  },
  {
    question: 'Wie kann ich bezahlen?',
    answer: 'Sie können per Vorkasse, Rechnung oder Barzahlung bei Abholung bezahlen. Bei größeren Buchungen ist eine Anzahlung üblich. Genaue Zahlungsmodalitäten besprechen wir individuell mit Ihnen.',
  },
  {
    question: 'Kann ich eine Buchung stornieren?',
    answer: 'Stornierungen sind bis 7 Tage vor dem Mietbeginn kostenfrei möglich. Bei späteren Stornierungen können Stornogebühren anfallen. Im Falle höherer Gewalt besprechen wir individuelle Lösungen.',
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
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
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
