'use client';

import { useState, useEffect } from 'react';
import { data } from '@/lib/data';
import { MapPin, Clock, MessageCircle, Send, Loader2, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>('');

  // Leistungsspektrum Badges
  const services = [
    'Musikanlagen',
    'Akku Lautsprecher',
    'Beamer & Leinwand',
    'Lichteffekte',
    'Theaterbeleuchtung',
    'Mikrofone',
    'DJ-Equipment',
    'PA-Anlagen',
    'Konferenztechnik',
    'Nebelmaschinen',
    'Stromerzeuger',
  ];

  // Öffnungszeiten
  const openingHours = [
    { day: 'Montag', time: '09:30 - 18:00 Uhr', isOpen: true },
    { day: 'Dienstag', time: 'geschlossen', isOpen: false },
    { day: 'Mittwoch', time: 'geschlossen', isOpen: false },
    { day: 'Donnerstag', time: '09:30 - 18:00 Uhr', isOpen: true },
    { day: 'Freitag', time: '09:30 - 14:00 Uhr', isOpen: true },
    { day: 'Samstag', time: '10:00 - 14:00 Uhr', isOpen: true },
    { day: 'Sonntag', time: '12:00 - 15:00 Uhr', isOpen: true },
  ];

  // Aktuellen Tag ermitteln
  useEffect(() => {
    const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const today = new Date().getDay();
    setCurrentDay(days[today]);
  }, []);

  // Service-Badge klicken
  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    // Service zum Nachrichtenfeld hinzufügen
    const serviceText = `Ich interessiere mich für: ${service}\n\n`;
    setFormData(prev => ({
      ...prev,
      message: prev.message ? `${serviceText}${prev.message}` : serviceText,
    }));
  };

  // Formular-Validierung
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Formular absenden
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simuliere API-Aufruf
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Hier würde normalerweise die E-Mail versendet werden
    // z.B. via API Route: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    setIsSubmitting(false);
    setIsSuccess(true);

    // Formular zurücksetzen
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSelectedService('');
      setIsSuccess(false);
    }, 5000);
  };

  // Input-Änderungen
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Fehler beim Tippen entfernen
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo Maik, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Linke Spalte: Info & Öffnungszeiten */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Besuchen Sie uns im Lager Pfungstadt
            </h2>

            {/* Öffnungszeiten - Mobile Accordion */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-gray-900">Öffnungszeiten Lager Pfungstadt</span>
                </div>
                {isMobileOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {isMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-2">
                      {openingHours.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            item.day === currentDay
                              ? 'bg-primary/10 border-2 border-primary/30'
                              : 'bg-white border border-gray-200'
                          }`}
                        >
                          <span
                            className={`font-medium ${
                              item.day === currentDay ? 'text-primary' : 'text-gray-900'
                            }`}
                          >
                            {item.day}
                          </span>
                          <span
                            className={`text-sm ${
                              item.day === currentDay ? 'text-primary font-semibold' : 'text-gray-600'
                            }`}
                          >
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Öffnungszeiten - Desktop */}
            <div className="hidden lg:block mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">Öffnungszeiten Lager Pfungstadt</h3>
                </div>
                <div className="space-y-2">
                  {openingHours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        item.day === currentDay
                          ? 'bg-primary/10 border-2 border-primary/30'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          item.day === currentDay ? 'text-primary' : 'text-gray-900'
                        }`}
                      >
                        {item.day}
                      </span>
                      <span
                        className={`text-sm ${
                          item.day === currentDay ? 'text-primary font-semibold' : 'text-gray-600'
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Leistungsspektrum */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Unser Mietangebot
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceClick(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedService === service
                        ? 'bg-primary text-white shadow-md scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">da-sound Veranstaltungstechnik</p>
                  <p className="text-gray-700">
                    Wormser Str. 23<br />
                    64319 Pfungstadt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Formular */}
          <div className="order-1 lg:order-2">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Kontaktformular
              </h2>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">
                      Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 top-2 text-xs font-medium transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                        errors.name
                          ? 'text-red-600 peer-focus:text-red-600'
                          : 'text-gray-500 peer-focus:text-primary'
                      }`}
                    >
                      Name *
                    </label>
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* E-Mail */}
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 top-2 text-xs font-medium transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                        errors.email
                          ? 'text-red-600 peer-focus:text-red-600'
                          : 'text-gray-500 peer-focus:text-primary'
                      }`}
                    >
                      E-Mail *
                    </label>
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Telefon */}
                <div>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors ${
                        errors.phone
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className={`absolute left-4 top-2 text-xs font-medium transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                        errors.phone
                          ? 'text-red-600 peer-focus:text-red-600'
                          : 'text-gray-500 peer-focus:text-primary'
                      }`}
                    >
                      Telefonnummer *
                    </label>
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Nachricht */}
                <div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors resize-none ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 top-2 text-xs font-medium transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs ${
                        errors.message
                          ? 'text-red-600 peer-focus:text-red-600'
                          : 'text-gray-500 peer-focus:text-primary'
                      }`}
                    >
                      Nachricht *
                    </label>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
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
                      <span>Nachricht senden</span>
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Button - Mobile prominent */}
              <div className="mt-6 lg:hidden">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Direkt mit Maik chatten (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
