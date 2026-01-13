'use client';

import { data } from '@/lib/data';
import { MessageCircle, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactMethodsSection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  const phoneNumber = '015735451130';
  const email = 'info@da-sound.de';

  return (
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
            So sind wir erreichbar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie die für Sie passende Kontaktmöglichkeit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* WhatsApp */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
            </div>
            <p className="text-white/90 mb-4">
              Schnelle Antworten und direkte Kommunikation
            </p>
            <div className="flex items-center gap-2 text-white font-semibold">
              <span>Jetzt schreiben</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Telefon */}
          <motion.a
            href={`tel:${phoneNumber}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Telefon</h3>
            </div>
            <p className="text-white/90 mb-4">
              Rufen Sie uns direkt an
            </p>
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <span>{phoneNumber}</span>
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
          </motion.a>

          {/* E-Mail */}
          <motion.a
            href={`mailto:${email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">E-Mail</h3>
            </div>
            <p className="text-white/90 mb-4">
              Schreiben Sie uns eine Nachricht
            </p>
            <div className="flex items-center gap-2 text-white font-semibold text-sm break-all">
              <span>{email}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
