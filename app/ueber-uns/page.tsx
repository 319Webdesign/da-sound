'use client';

import { data } from '@/lib/data';
import { MapPin, Clock, Users, Award, Heart, Zap, MessageCircle, Volume2, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import PartnerLogos from '@/components/PartnerLogos';

export default function UeberUnsPage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich hätte gerne mehr Informationen über da-sound.')}`;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Über da-sound
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Professionelle Veranstaltungstechnik aus Pfungstadt. Wir machen ihr Event zum Erfolg.
            </p>
          </div>
        </div>
      </section>

      {/* Moderne About-Sektion */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Links: Bild */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/chorkonzert-1920w.webp"
                alt="Professionelle Veranstaltungstechnik bei einem Event"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Rechts: Text-Inhalt */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Subline */}
              <div className="inline-block">
                <span className="text-primary font-semibold text-lg">
                  Individuelle Lösungen für Events bis 1.500 Personen
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Equipment und Know-How für Ihr Event in Südhessen.
              </h2>

              {/* Fließtext */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Wir von da-sound setzen auf Qualität und Zuverlässigkeit. Von privaten Geburtstags-
                  und Hochzeitsfeiern, über Firmenevents und Konferenzen, bis hin zu größeren
                  Stadtfesten und Konzertveranstaltungen – wir passen unsere professionelle
                  Veranstaltungstechnik Ihren Bedürfnissen an.
                </p>
                <p>
                  Unser Fokus liegt dabei auf bezahlbaren und bedarfsgerechten Lösungen für Events von
                  50 bis 1.500 Personen. Bei uns finden Sie bewährte und günstige Event-Pakete, wie auch
                  maßgeschneiderte Lösungen, die ihr Event einzigartig und unvergesslich machen.
                  Oder möchten Sie einfach einzelne Komponenten wie Lautsprecher, Mikrofone, LED
                  Spots oder Lichteffekte mieten? – dann nutzen Sie unser umfassendes Dry-Hire Angebot
                  an Ton- und Lichttechnik.
                </p>
                <p>
                  Als Ihr regionaler Veranstaltungstechnik Partner aus Pfungstadt garantieren wir Ihnen
                 zuverlässige Dienstleistungen zu fairen und transparenten Konditionen.
                </p>
              </div>

              {/* Info-Boxen */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 justify-items-center lg:justify-items-start items-stretch">
                {/* Bis 1.500 Personen */}
                <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10 text-center lg:text-left flex flex-col h-full w-full max-w-sm sm:max-w-none">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Bis 1.500 Personen</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Beschallung & Beleuchtung für kleine und mittlere Events
                  </p>
                </div>

                {/* Premium Equipment */}
                <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10 text-center lg:text-left flex flex-col h-full w-full max-w-sm sm:max-w-none">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Premium Equipment</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Hochwertige Lautsprecher Made in Europe
                  </p>
                </div>

                {/* Regional stark */}
                <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/10 text-center lg:text-left flex flex-col h-full w-full max-w-sm sm:max-w-none">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Regional stark</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Veranstaltungstechnik im Großraum Darmstadt
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/#miet-kategorien"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-lg group"
                >
                  Jetzt Technik anfragen
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Was uns ausmacht und worauf wir bei da-sound Wert legen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Qualität',
                description: 'Wir arbeiten ausschließlich mit hochwertiger, professioneller Technik von führenden Herstellern.',
              },
              {
                icon: Eye,
                title: 'Transparenz',
                description: 'Unsere klare und faire Preispolitik gibt ihnen Planungssicherheit für ihr Event.',
              },
              {
                icon: Users,
                title: 'Zuverlässigkeit',
                description: 'Sie können sich auf uns verlassen. Pünktlichkeit, Professionalität und Service stehen bei uns an erster Stelle.',
              },
              {
                icon: Zap,
                title: 'Flexibilität',
                description: 'Kurzfristige Änderungen, spontane Anfragen? – wir bieten Ihnen Lösungen, auch an Wochenenden.',
              },
              {
                icon: MapPin,
                title: 'Regional',
                description: 'Wir sind in Pfungstadt zu Hause und kennen unsere Kunden. Kurze Wege, persönlicher Service, günstige Lieferpauschalen.',
              },
              {
                icon: Award,
                title: 'Erfahrung',
                description: 'Jahrelange Erfahrung in der Event-Branche – profitieren Sie von unserer Expertise.',
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center md:text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Sektion – vorübergehend ausgeblendet; zum Einblenden "false" durch "true" ersetzen */}
      {false && (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Unser Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die Menschen hinter da-sound – für Sie vor Ort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Carsten Helfrich */}
              <div className="text-center">
                <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Carsten Helfrich
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Inhaber, Geschäftsführer
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Verwaltung, Eventplanung, Audio Engineer, Laserschutzbeauftragter
                </p>
              </div>

              {/* Demian Wörl */}
              <div className="text-center">
                <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Demian Wörl
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Mitarbeiter Logistik
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lagerverwaltung, Kommissionierung, Kundenbetreuung
                </p>
              </div>

              {/* János Gede */}
              <div className="text-center">
                <div className="relative mb-6 w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200 border-4 border-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  János Gede
                </h3>
                <p className="text-primary font-semibold mb-3">
                  Event-Service
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Auslieferungen, Veranstaltungstechniker, Service
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Referenzen / Gallery */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unsere Referenzen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Einblicke in unsere erfolgreich umgesetzten Events und Veranstaltungen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: '/images/best practice/bp25.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp30.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp26.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp23.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp18.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp19.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp17.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
              { src: '/images/best practice/bp14.webp', alt: 'Event-Referenz: Professionelle Veranstaltungstechnik' },
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner-Logos */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Auszug unserer geschätzten Firmenkunden:
            </h3>

            {/* Infinite Logo Marquee Komponente */}
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für Ihr nächstes Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir beraten Sie gerne!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Jetzt anfragen
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Warenkorb */}
      <RentalCart />
    </div>
  );
}
