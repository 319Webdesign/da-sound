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
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="da-sound Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                quality={90}
                priority
              />
            </div>
            <p className="text-sm leading-relaxed">
              Professionelle Event-Lösungen für Pfungstadt, Darmstadt und ganz Südhessen.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
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
          <div>
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
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEWS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-primary transition-colors"
              >
                Google Reviews
              </a>
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
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              KONTAKT
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Wormser Str. 23<br />
                  64319 Pfungstadt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a
                  href="tel:015735451130"
                  className="text-sm hover:text-primary transition-colors"
                >
                  0157-35451130
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a
                  href="mailto:info@da-sound.de"
                  className="text-sm hover:text-primary transition-colors"
                >
                  info@da-sound.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <OpeningHoursCompact />
                </div>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Zahlungsarten */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              ZAHLUNG
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span>💵</span>
                <span>Barzahlung</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>💳</span>
                <span>Kartenzahlung</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>📱</span>
                <span>Kontaktlos</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>🅿️</span>
                <span>PayPal</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
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
