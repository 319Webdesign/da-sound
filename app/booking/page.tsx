'use client';

import { useState, useMemo } from 'react';
import { data } from '@/lib/data';
import { 
  Music, 
  Users, 
  Calendar, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  XCircle,
  Send,
  Loader2,
  Volume2,
  Zap,
  Award
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { motion } from 'framer-motion';

interface BookingFormData {
  date: string;
  eventType: string;
  location: string;
  act: string;
  duration: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  date?: string;
  eventType?: string;
  location?: string;
  act?: string;
  name?: string;
  email?: string;
  phone?: string;
}

export default function BookingPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    eventType: '',
    location: '',
    act: '',
    duration: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const eventTypes = [
    'Hochzeit',
    'Geburtstag',
    'Firmenfeier',
    'Jubiläum',
    'Weihnachtsfeier',
    'Sommerfest',
    'Konzert',
    'Andere',
  ];

  const acts = [
    {
      id: 'dj',
      title: 'DJ Service',
      description: 'Last night a DJ saved my life! Wir arbeiten mit zwei professionellen und engagierten DJs zusammen, die garantiert auch für ihr Event den passenden Sound finden.',
      price: 'Preisspanne 350-900€',
      icon: Music,
      image: '/images/palive2-1920w.webp',
    },
    {
      id: 'solo-musician',
      title: 'Solo Musiker / Alleinunterhalter',
      description: 'Dezente Klaviermusik zum Essen, Partysongs zum Feiern oder unterhaltsame Tanzmusik - mit Solomusiker sind sie maximal flexibel. Geringer Platzbedarf, problemlose Kontrolle der Lautstärke. Optimal für z.B. Privatfeiern und Events aller Art mit geringerem Budget.',
      price: 'Preisspanne 550-1.000€',
      icon: Volume2,
      image: '/images/best practice/bp1.webp',
    },
    {
      id: 'country-oldie-band',
      title: 'Country & Oldie Band',
      description: 'Für die Firmen- oder Mottoparty, für Westernbarbeques, Oldtimertreffen, u.v.m. empfiehlt sich unsere C&O Band - in flexiblen Besetzungen, je nach Eventgröße und Budget. Authentische Countrymusic und stimmungsvolle Pop/Rock Klassiker erwarten ihre Gäste.',
      price: 'Preisspanne 1.000-2.000€',
      icon: Users,
      image: '/images/chorkonzert-1920w.webp',
    },
    {
      id: 'party-event-band',
      title: 'Party & Event Band',
      description: 'Für die gehobenen Ansprüche und das echte "Live-Music" Erlebnis, vermitteln wir ihnen eine professionelle 3-5 köpfige Band mit erfahrenen Musiker/innen. Das Repertoire reicht von Pop&Rock über Soul&Disco bis hin zu fetzigen Party-Krachern.',
      price: 'Preisspanne 2.500€-5.000€',
      icon: Music,
      image: '/images/best practice/bp2.webp',
    },
  ];

  // WhatsApp-Link mit Formulardaten
  const whatsappLink = useMemo(() => {
    const selectedAct = acts.find(act => act.id === formData.act);
    
    let message = 'Hallo, ich interessiere mich für ein Booking.\n\n';
    message += '📅 *Datum:* ' + (formData.date || 'Nicht angegeben') + '\n';
    message += '🎉 *Event-Art:* ' + (formData.eventType || 'Nicht angegeben') + '\n';
    message += '📍 *Veranstaltungsort:* ' + (formData.location || 'Nicht angegeben') + '\n';
    message += '🎵 *Gewünschter Act:* ' + (selectedAct?.title || formData.act || 'Nicht angegeben') + '\n';
    
    if (formData.duration) {
      message += '⏱️ *Dauer:* ' + formData.duration + '\n';
    }
    
    message += '\n*Kontaktdaten:*\n';
    message += '👤 *Name:* ' + (formData.name || 'Nicht angegeben') + '\n';
    message += '📧 *E-Mail:* ' + (formData.email || 'Nicht angegeben') + '\n';
    message += '📞 *Telefon:* ' + (formData.phone || 'Nicht angegeben') + '\n';
    
    if (formData.message) {
      message += '\n*Weitere Informationen:*\n' + formData.message;
    }
    
    return `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.date.trim()) {
      newErrors.date = 'Bitte wählen Sie ein Datum';
    }

    if (!formData.eventType.trim()) {
      newErrors.eventType = 'Bitte wählen Sie eine Event-Art';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Bitte geben Sie den Veranstaltungsort ein';
    }

    if (!formData.act.trim()) {
      newErrors.act = 'Bitte wählen Sie einen Act';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simuliere API-Aufruf
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Formular zurücksetzen nach 5 Sekunden
    setTimeout(() => {
      setFormData({
        date: '',
        eventType: '',
        location: '',
        act: '',
        duration: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/palive2-1920w.webp"
            alt="DJ Event Hintergrund"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Wir vermitteln DJs, Musiker & Live Bands
          </h1>
        </motion.div>
      </section>

      {/* Service-Versprechen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Unsere Serviceleistung für eine gelungene Veranstaltung
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              ...alles aus einer Hand. Ohne zusätzliche Agentur-Provision - und das Beste: 
              <span className="font-semibold text-primary"> der Preis für die benötigte Veranstaltungstechnik ist bereits inklusive.</span>
            </p>
          </motion.div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Volume2,
                title: 'Technik inklusive',
                description: 'Professionelle Veranstaltungstechnik ist im Preis enthalten',
              },
              {
                icon: XCircle,
                title: 'Keine Provision',
                description: 'Direktvermittlung ohne zusätzliche Agentur-Kosten',
              },
              {
                icon: Award,
                title: 'Profi-Equipment',
                description: 'Hochwertige Technik von führenden Herstellern',
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acts Sektion */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Unsere Acts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {acts.map((act, index) => {
              const IconComponent = act.icon;
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Bild */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Preis-Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                        <span className="text-primary font-bold text-lg">{act.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{act.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{act.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Formular */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Booking-Anfrage
            </h2>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">
                  Vielen Dank! Ihre Anfrage wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Datum */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Datum *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                      errors.date ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                </div>

                {/* Event-Art */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event-Art *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                      errors.eventType ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                  >
                    <option value="">Bitte wählen...</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && <p className="mt-1 text-sm text-red-600">{errors.eventType}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ort */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Veranstaltungsort *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="z.B. Pfungstadt, Darmstadt"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                        errors.location ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                      }`}
                    />
                  </div>
                  {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                </div>

                {/* Gewünschter Act */}
                <div>
                  <label htmlFor="act" className="block text-sm font-medium text-gray-700 mb-2">
                    Gewünschter Act *
                  </label>
                  <select
                    id="act"
                    name="act"
                    value={formData.act}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                      errors.act ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                  >
                    <option value="">Bitte wählen...</option>
                    {acts.map(act => (
                      <option key={act.id} value={act.id}>
                        {act.title}
                      </option>
                    ))}
                  </select>
                  {errors.act && <p className="mt-1 text-sm text-red-600">{errors.act}</p>}
                </div>
              </div>

              {/* Event-Dauer */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                  Dauer des Events
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="z.B. 4 Stunden, 18:00-22:00 Uhr"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                      errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* E-Mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                      errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                    errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-primary'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Weitere Informationen (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none"
                  placeholder="z.B. Anzahl der Gäste, besondere Wünsche, etc."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Anfrage senden</span>
                  </>
                )}
              </button>
            </form>

            {/* WhatsApp Alternative */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Oder kontaktieren Sie uns direkt:</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Per WhatsApp kontaktieren</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Sticky Warenkorb */}
      <RentalCart />
    </div>
  );
}
