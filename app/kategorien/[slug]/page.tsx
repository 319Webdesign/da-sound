import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllCategorySlugs } from '@/lib/categories';
import { getProductsByCategory } from '@/lib/products';
import { data } from '@/lib/data';
import { MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import CategoryHero from '@/components/CategoryHero';
import CategoryContent from '@/components/CategoryContent';
import CategoryCTA from '@/components/CategoryCTA';
import ProductList from '@/components/ProductList';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/95 backdrop-blur-sm relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.webp"
                alt="da-sound Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                quality={90}
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/ueber-uns"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/leistungen"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Eventservice
              </Link>
              <Link
                href="/#liefergebiet"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Liefergebiet
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <CategoryHero 
        title={category.title}
        description={category.description}
        image={category.image}
        iconName={category.iconName}
      />

      {/* Content Section */}
      <CategoryContent 
        longDescription={category.longDescription}
        features={category.features}
        typicalUseCases={category.typicalUseCases}
      />

      {/* Produktliste */}
      {categoryProducts.length > 0 && (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Verfügbare Produkte
              </h2>
              <p className="text-gray-600">
                Alle Preise verstehen sich inkl. 19% MwSt. Selbstabholung ab Lager Pfungstadt.
              </p>
            </div>
            <ProductList products={categoryProducts} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CategoryCTA title={category.title} />

      {/* Kontakt Box */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Kontakt & Öffnungszeiten
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Standort */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    Wormser Str. 23<br />
                    64319 Pfungstadt
                  </p>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
                  <div className="text-gray-700 space-y-1">
                    <p>{data.openingHours.weekdays}</p>
                    <p>{data.openingHours.saturday}</p>
                    <p>{data.openingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RentalCart />
    </div>
  );
}
