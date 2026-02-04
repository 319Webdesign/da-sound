'use client';

import React from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
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
          <div className="space-y-6 text-center lg:text-left">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Veranstaltungstechnik ohne Kopfschmerzen.
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Kurzentschlossen? Technik-Ausfall? Bei uns erreichen Sie 7 Tage die Woche echte
            Experten aus Pfungstadt. Wir lassen Sie nicht im Stich.
            </p>

            {/* Badge: Jetzt Online & Erreichbar */}
                <div className="inline-flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-green-400 font-semibold text-sm md:text-base">
                Jetzt Online & Erreichbar
              </span>
            </div>
          </div>

          {/* Rechte Seite: Quick-Connect Boxen */}
          <div className="space-y-6 lg:space-y-4 flex flex-col items-center lg:items-stretch">
            {/* WhatsApp Box - Desktop zuerst, Mobile zweite */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-green-600/20 border-2 border-green-500/30 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 overflow-hidden order-2 lg:order-1 w-full max-w-md lg:max-w-none mt-6 lg:mt-0"
            >
              
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
            </a>

            {/* Telefon Box - Mobile zuerst, Desktop zweite */}
            <a
              href={`tel:${phoneNumber}`}
              className="group relative block bg-blue-600/20 border-2 border-blue-500/30 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 overflow-hidden order-1 lg:order-2 w-full max-w-md lg:max-w-none"
            >
              
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
            </a>

            {/* E-Mail Box */}
            <a
              href={`mailto:${email}`}
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
