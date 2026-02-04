'use client';

import { data } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building2, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import ContactMethodsSection from '@/components/ContactMethodsSection';

const ContactSection = dynamic(
  () => import('@/components/ContactSection'),
  {
    loading: () => (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-96 rounded-2xl bg-gray-100 animate-pulse" />
      </div>
    ),
    ssr: true,
  }
);
import FAQSection from '@/components/FAQSection';

// Dynamic Import für Google Maps - Lazy Loading
const LocationSection = dynamic(
  () => import('@/components/LocationSection'),
  { 
    loading: () => (
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] md:h-[700px] bg-gray-100 rounded-2xl animate-pulse" />
        </div>
      </div>
    ),
    ssr: false,
  }
);

export default function KontaktPage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  const phoneNumber = data.phoneNumber;
  const email = 'info@da-sound.de';
  const address = {
    street: 'Wormser Str. 23',
    city: '64319 Pfungstadt',
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Wir sind für Sie da! Kontaktieren Sie uns gerne – wir beraten Sie persönlich zu Ihrer Veranstaltung.
            </p>
          </div>
        </div>
      </section>

      {/* So sind wir erreichbar */}
      <ContactMethodsSection />

      {/* Kontaktformular und Öffnungszeiten */}
      <div id="contact-form">
        <ContactSection />
      </div>

      {/* Anfahrt & Standort */}
      <Suspense fallback={
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[400px] md:h-[700px] bg-gray-100 rounded-2xl animate-pulse" />
          </div>
        </div>
      }>
        <LocationSection />
      </Suspense>

      {/* FAQ / Häufige Fragen - von Hauptseite übernommen */}
      <FAQSection />

      <Footer />

      {/* Sticky Warenkorb */}
      <RentalCart />
    </div>
  );
}
