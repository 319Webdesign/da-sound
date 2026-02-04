'use client';

import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Users, 
  Heart, 
  Briefcase, 
  Music,
  Volume2,
  Zap,
  ArrowRight,
  Mic,
  PartyPopper,
  Truck
} from 'lucide-react';
import { data } from '@/lib/data';

interface EventType {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  mobileLabel?: string;
}

const eventTypes: EventType[] = [
  { icon: Heart, label: 'Privatfeiern' },
  { icon: Music, label: 'Hochzeiten' },
  { icon: Briefcase, label: 'Firmenevents' },
  { icon: Users, label: 'Stadtfeste' },
  { icon: Mic, label: 'Live-Konzerte' },
  { icon: PartyPopper, label: 'Faschingsveranstaltungen', mobileLabel: 'Faschings-\nveranstaltungen' },
];

const cities = [
  'Darmstadt',
  'Pfungstadt',
  'Bensheim',
  'Kreis Bergstraße',
  'Odenwaldkreis',
  'Frankfurt',
  'Mainz',
  'Mannheim',
  'Hanau',
];

export default function AboutServiceSection() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich hätte gerne ein unverbindliches Angebot für meine Region.')}`;

  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-50/50 to-white py-16 md:py-20 lg:py-24 pb-8 md:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Links: Text & Keywords */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Veranstaltungstechnik & Full-Service aus einer Hand
            </h2>

            {/* Text */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Wir bieten Ihnen nicht nur hochwertige Veranstaltungstechnik zum Mieten, sondern auf
                Wunsch auch einen umfassenden Full-Service für Ihre Events. Unser optionaler Lieferservice bringt die komplette Technik direkt zu Ihnen – inklusive betriebsfertiger
                Übergabe.
              </p>
              <p>
                Ob für eine private Familienfeier, ein Vereinsfest oder Firmenevent: Wir stellen Ihnen
                maßgeschneiderte Lösungen zusammen und sorgen dafür, dass Ihre Veranstaltung
                reibungslos verläuft.
              </p>
            </div>

            {/* Event-Typen Checkliste */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
                Wir sind Experten für
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4 justify-items-start">
                {eventTypes.map((event, index) => {
                  const IconComponent = event.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 md:gap-3 w-full justify-start"
                    >
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 min-w-0 flex-1">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        {event.mobileLabel ? (
                          <>
                            <span className="text-gray-900 font-medium text-sm md:text-base break-words leading-tight whitespace-pre-line md:hidden">
                              {event.mobileLabel}
                            </span>
                            <span className="hidden md:inline text-gray-900 font-medium text-base leading-tight">
                              {event.label}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-900 font-medium text-sm md:text-base break-words leading-tight">
                            {event.label}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Rechts: Region & Trust */}
          <div className="space-y-6">
            {/* Einsatzgebiet-Karte / Städte-Grid */}
            <div id="liefergebiet" className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Unsere Einsatzgebiete
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-primary/5 rounded-lg border border-gray-200 hover:border-primary/20 transition-all cursor-pointer group"
                  >
                    <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-gray-900 font-medium text-sm md:text-base">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight-Elemente */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Beschallung */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Volume2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Beschallung</h4>
                    <p className="text-white/90 text-lg font-semibold">
                      bis 1.500 Personen
                    </p>
                  </div>
                </div>
              </div>

              {/* Lieferservice */}
              <div className="bg-gradient-to-br from-accent to-accent-light rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Lieferservice</h4>
                    <p className="text-white/90 text-lg font-semibold">
                      ab 75€ zzgl. MwSt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg group"
          >
            Jetzt unverbindliches Angebot für meine Region anfragen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
