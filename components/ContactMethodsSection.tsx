'use client';

import { data } from '@/lib/data';
import { MessageCircle, Phone, Mail, Send } from 'lucide-react';

export default function ContactMethodsSection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  const phoneNumber = data.phoneNumber;
  const email = 'info@da-sound.de';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            So sind wir erreichbar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie die für Sie passende Kontaktmöglichkeit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center md:text-left"
          >
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
            </div>
            <p className="text-white/90 mb-4">
              Die schnellste Möglichkeit, um uns zu erreichen. Erhalten Sie eine Antwort in wenigen Minuten.
            </p>
            <div className="flex items-center gap-2 text-white font-semibold justify-center md:justify-start">
              <span>Jetzt schreiben</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Telefon */}
          <a
            href={`tel:${phoneNumber}`}
            className="group bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center md:text-left"
          >
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Telefon</h3>
            </div>
            <p className="text-white/90 mb-4">
              Rufen Sie uns an, tgl. zwischen 9-21 Uhr, außer an Sonn- und Feiertagen.
            </p>
            <div className="flex items-center gap-2 text-white font-semibold text-lg justify-center md:justify-start">
              <span>015735451130</span>
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
          </a>

          {/* E-Mail */}
          <a
            href={`mailto:${email}`}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center md:text-left"
          >
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">E-Mail</h3>
            </div>
            <p className="text-white/90 mb-4">
              Schreiben Sie uns eine Nachricht, wir antworten innerhalb von 24 Stunden.
            </p>
            <div className="flex items-center gap-2 text-white font-semibold text-sm break-all justify-center md:justify-start">
              <span>{email}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
