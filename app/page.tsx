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
import LazyRender from '@/components/LazyRender';
import CTASection from '@/components/CTASection';
import { fetchGoogleReviews, type ReviewsResponse } from '@/lib/reviews';

const GoogleReviewsSection = dynamic(
  () => import('@/components/GoogleReviewsSection'),
  {
    loading: () => (
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 md:h-80 rounded-2xl bg-gray-100 animate-pulse" />
        </div>
      </section>
    ),
    ssr: true,
  }
);
import DryHireServiceSection from '@/components/DryHireServiceSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import OpeningHours from '@/components/OpeningHours';
// ISR: Incremental Static Regeneration für bessere Performance
export const revalidate = 60;

const SITE_URL = 'https://da-sound.de';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'da-sound Veranstaltungstechnik',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.svg` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'da-sound PA-Verleih & Veranstaltungstechnik',
      image: `${SITE_URL}/images/logo.svg`,
      url: SITE_URL,
      telephone: '+49-157-35451130',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wormser Str. 23',
        addressLocality: 'Pfungstadt',
        postalCode: '64319',
        addressRegion: 'Hessen',
        addressCountry: 'DE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.8032823,
        longitude: 8.5901795,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:30', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:30', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:30', closes: '14:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '15:00' },
      ],
      sameAs: [],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default async function HomePage() {
  const whatsappLink = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Veranstaltungstechnik.')}`;
  const googleBusinessUrl =
    process.env.GOOGLE_BUSINESS_URL ||
    'https://www.google.com/maps/place/?q=place_id:ChIJ5c3RqQ57vUcR790xWEv0vQo';

  if (!data) {
    return null;
  }

  let reviewsData: ReviewsResponse | null = null;
  try {
    reviewsData = await fetchGoogleReviews();
  } catch (error) {
    console.error('Google Reviews nicht verfügbar:', error);
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero-Bereich */}
      <Hero
        headline="Professionelle Veranstaltungstechnik"
        highlight="Einfach gemietet"
        images={data.heroImages}
        socialProof={data.socialProof}
        googleBusinessUrl={googleBusinessUrl}
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
      <LazyRender minHeight="20rem">
        <TechHighlights />
      </LazyRender>

      {/* Kundenbewertungen */}
      <GoogleReviewsSection reviewsData={reviewsData} googleBusinessUrl={googleBusinessUrl} />

      {/* CTA Section */}
      <CTASection />

      {/* Dry-Hire vs. Service */}
      <LazyRender minHeight="20rem">
        <DryHireServiceSection />
      </LazyRender>

      {/* FAQ Section */}
      <LazyRender minHeight="22rem">
        <FAQSection />
      </LazyRender>

   

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
