import { data } from '@/lib/data';
import { Volume2, Lightbulb, Package, MessageCircle, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HighlightProduct from '@/components/HighlightProduct';
import ExpertiseSection from '@/components/ExpertiseSection';
import TechHighlights from '@/components/TechHighlights';
import RentalCategories from '@/components/RentalCategories';
import AboutServiceSection from '@/components/AboutServiceSection';
import dynamic from 'next/dynamic';

// Dynamic Import für schwere Komponenten - Lazy Loading
const GoogleReviewsSection = dynamic(
  () => import('@/components/GoogleReviewsSection'),
  { 
    loading: () => <div className="h-96 bg-white" />, // Placeholder während des Ladens
    ssr: false // Client-side only, da es fetch verwendet
  }
);
import CTASection from '@/components/CTASection';
import DryHireServiceSection from '@/components/DryHireServiceSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import OpeningHours from '@/components/OpeningHours';

// ISR: Incremental Static Regeneration für bessere Performance
export const revalidate = 60;

export default function HomePage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  
  // Sicherstellen, dass die Seite gerendert wird
  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero-Bereich */}
      <Hero
        headline="Professionelle Veranstaltungstechnik"
        highlight="Einfach gemietet"
        images={data.heroImages}
        socialProof={data.socialProof}
      />

      {/* Unsere Expertise */}
      <ExpertiseSection />

      {/* Highlight-Artikel */}
      <HighlightProduct
        title={data.highlightProduct.title}
        image={data.highlightProduct.image}
        imageAlt={data.highlightProduct.imageAlt}
        description={data.highlightProduct.description}
        features={data.highlightProduct.features}
        price={data.highlightProduct.price}
        pricePeriod={data.highlightProduct.pricePeriod}
        ctaText={data.highlightProduct.ctaText}
        productUrl={data.highlightProduct.productUrl}
      />

      {/* Miet-Kategorien */}
      <section id="miet-kategorien">
        <RentalCategories />
      </section>

      {/* Über uns & Service */}
      <section id="about">
        <AboutServiceSection />
      </section>

      {/* Technik-Highlights */}
      <TechHighlights />

      {/* Kundenbewertungen */}
      <GoogleReviewsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Dry-Hire vs. Service */}
      <DryHireServiceSection />

      {/* FAQ Section */}
      <FAQSection />

   

      {/* Über uns / Kontakt */}
      <section id="kontakt" className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl card-shadow p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Kontakt & Öffnungszeiten
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Öffnungszeiten */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">Öffnungszeiten</h3>
                </div>
                <div className="text-gray-700">
                  <OpeningHours />
                </div>
              </div>

              {/* Standort */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">Standort</h3>
                </div>
                <p className="text-gray-700">
                  Wormser Str. 23<br />
                  64319 Pfungstadt
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-8 border-t border-gray-100">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Direkt-Anfrage via WhatsApp
              </a>
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
