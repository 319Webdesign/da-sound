'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  Radio,
} from 'lucide-react';
import { data } from '@/lib/data';

export default function CTASection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  const phoneNumber = data.phoneNumber;
  const email = 'info@da-sound.de';

  return (
    <section className="bg-[#0a192f] py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Linke Seite: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Veranstaltungstechnik ohne Kopfschmerzen.
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Kurzentschlossen? Technik-Ausfall? Bei uns erreichst du 7 Tage die Woche echte
              Experten aus Pfungstadt. Wir lassen dich nicht im Stich.
            </p>

            {/* Badge: Jetzt Online & Erreichbar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-green-500/20 border border-green-500/30 backdrop-blur-sm"
                >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-3 h-3 rounded-full bg-green-500"
              />
              <span className="text-green-400 font-semibold text-sm md:text-base">
                Jetzt Online & Erreichbar
              </span>
            </motion.div>
          </motion.div>

          {/* Rechte Seite: Quick-Connect Boxen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:space-y-4 flex flex-col items-center lg:items-stretch"
          >
            {/* WhatsApp Box - Desktop zuerst, Mobile zweite */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
            className="group relative block bg-green-600/20 border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 overflow-hidden order-2 lg:order-1 w-full max-w-md lg:max-w-none mt-6 lg:mt-0"
            >
              {/* Neon-Glow Effekt */}
              <motion.div
                className="absolute inset-0 bg-green-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg md:text-xl mb-1">
                    WhatsApp Chat
                  </div>
                  <div className="text-gray-400 text-sm">
                    7 Tage erreichbar
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Telefon Box - Mobile zuerst, Desktop zweite */}
            <motion.a
              href={`tel:${phoneNumber}`}
              whileHover={{ scale: 1.02 }}
              className="group relative block bg-blue-600/20 border-2 border-blue-500/30 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 overflow-hidden order-1 lg:order-2 w-full max-w-md lg:max-w-none"
            >
              {/* Neon-Glow Effekt */}
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg md:text-xl mb-1">
                    Telefon
                  </div>
                  <div className="text-gray-400 text-sm">
                    Hotline täglich von 9-21 Uhr (außer an Sonn- und Feiertagen)
                  </div>
                </div>
              </div>
            </motion.a>

            {/* E-Mail Box */}
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.02 }}
              className="group relative block bg-white/5 border-2 border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden order-3 w-full max-w-md lg:max-w-none"
            >
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-lg md:text-xl mb-1">
                    Mail
                  </div>
                  <div className="text-gray-400 text-sm">
                    Erhalten Sie eine Antwort innerhalb 24 Std
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
