'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Volume2, MapPin, Phone, Mail, Clock, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { data } from '@/lib/data';
import OpeningHoursCompact from '@/components/OpeningHoursCompact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-slate-400 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Spalte 1: Brand & Region */}
          <div className="space-y-4 text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Image
                src="/images/logo.svg"
                alt="da-sound Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                quality={100}
                priority
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </div>
            <p className="text-sm leading-relaxed">
              Professionelle Event-Lösungen für Pfungstadt, Darmstadt und ganz Südhessen.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <a
                href="mailto:info@da-sound.de"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="E-Mail"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@dasound"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/dasound"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spalte 2: Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              NAVIGATION
            </h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-sm hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/ueber-uns"
                className="block text-sm hover:text-primary transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/liefergebiet"
                className="block text-sm hover:text-primary transition-colors"
              >
                Liefergebiet
              </Link>
              <Link
                href="/kontakt"
                className="block text-sm hover:text-primary transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Spalte 3: Kontakt Quick-Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              KONTAKT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Wormser Str. 23<br />
                  64319 Pfungstadt
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a
                  href={`tel:${data.phoneNumber}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {data.phoneNumberFormatted}
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a
                  href="mailto:info@da-sound.de"
                  className="text-sm hover:text-primary transition-colors"
                >
                  info@da-sound.de
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <OpeningHoursCompact />
                </div>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Zahlungsarten */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              ZAHLUNG
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <span>💵</span>
                <span>Barzahlung</span>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <span>💳</span>
                <span>Kartenzahlung</span>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <span>📱</span>
                <span>Kontaktlos</span>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <span>🅿️</span>
                <span>PayPal</span>
              </div>
              <div className="flex items-center gap-2 text-sm justify-center md:justify-start">
                <span>🏦</span>
                <span>Überweisung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Rechtliches */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-500">
              © {currentYear} da-sound Veranstaltungstechnik. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/impressum"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-700 text-center text-sm text-slate-500">
            <p>
              Designed by{' '}
              <a
                href="https://319webdesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors font-semibold"
              >
                319Webdesign
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
