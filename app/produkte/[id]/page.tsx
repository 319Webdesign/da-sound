import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { getCategoryBySlug } from '@/lib/categories';
import { data } from '@/lib/data';
import { MapPin, Clock, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import AddToCartButton from '@/components/AddToCartButton';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  // Diese Funktion wird zur Build-Zeit aufgerufen
  // Für dynamische Generierung müssten wir alle Produkt-IDs haben
  return [];
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);

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
                href="/liefergebiet"
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

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/kategorien/${category.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {category.title}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {(product.id === 'pa-set-small' || product.id === 'pa-set-premium' || product.id === 'profi-pa-line-array-event-26a') && product.images && product.images.length >= 2 ? (
                <div className="grid grid-cols-2 gap-2">
                  <div className={`relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm p-2 ${product.images[1]?.includes('audiozenit') ? 'aspect-square' : 'aspect-square'}`}>
                    <Image
                      src={product.images[0]}
                      alt={`${product.name} - Bild 1`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      quality={90}
                      priority
                    />
                  </div>
                  <div className={`relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm p-2 ${product.images[1]?.includes('audiozenit') ? 'aspect-[3/4]' : 'aspect-square'}`}>
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} - Bild 2`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      quality={90}
                      priority
                    />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className={
                        product.id === 'akku-lautsprecher-compact' ||
                        product.id === 'aktivlautsprecher-bluetooth' ||
                        product.id === 'pa-saeule-bluetooth'
                          ? 'object-contain p-8'
                          : 'object-cover'
                      }
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={90}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ShoppingBag className="w-24 h-24" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div>
                {/* Back Button */}
                <Link
                  href={category ? `/kategorien/${category.slug}` : '/'}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zur Kategorie
                </Link>

                {/* Product Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  {product.priceOptions && product.priceOptions.length > 0 ? (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">Mietpreise</h2>
                      <div className="space-y-2">
                        {product.priceOptions.map((option, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                            <span className="text-gray-700 font-medium">{option.label}:</span>
                            <span className="text-2xl font-bold text-primary">
                              {option.price.toFixed(2).replace('.', ',')} €
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        Alle Preise verstehen sich inkl. 19% MwSt.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {product.pricePerUnit.toFixed(2).replace('.', ',')} € / {(product.id === 'sub-sat-set-bluetooth' || product.id === 'pa-set-small' || product.id === 'pa-set-medium' || product.id === 'pa-set-large' || product.id === 'pa-set-xlarge' || product.id === 'pa-set-premium' || product.id === 'pa-set-outdoor') ? 'Tag' : 'Stück'}
                      </div>
                      {product.pricePerPair && (
                        <div className="text-lg text-gray-600">
                          {product.pricePerPair.toFixed(2).replace('.', ',')} € / {(product.id === 'sub-sat-set-bluetooth' || product.id === 'pa-set-small' || product.id === 'pa-set-medium' || product.id === 'pa-set-large' || product.id === 'pa-set-xlarge' || product.id === 'pa-set-premium' || product.id === 'pa-set-outdoor') ? 'Wochenende' : 'Paar'}
                        </div>
                      )}
                      <p className="text-sm text-gray-500 mt-2">
                        Alle Preise verstehen sich inkl. 19% MwSt.
                      </p>
                    </>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Beschreibung</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Offer Info */}
                {product.offerInfo && (
                  <div className="mb-6 bg-primary/10 border-l-4 border-primary p-5 rounded-r-lg">
                    <div className="text-base font-semibold text-primary mb-2">Angebot extra:</div>
                    <p className="text-gray-700 leading-relaxed">
                      {product.offerInfo}
                    </p>
                  </div>
                )}

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Features</h2>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specs */}
                {product.specs && product.specs.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Technische Daten</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.specs
                        .filter((spec) => spec.label !== 'Personen')
                        .map((spec, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4">
                            <div className="text-sm font-semibold text-gray-700 mb-1">
                              {spec.label}
                            </div>
                            <div className="text-lg text-gray-900">{spec.value}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-6 border-t border-gray-200">
                  <AddToCartButton productId={product.id} productName={product.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Fragen zu diesem Produkt?
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

            <div className="text-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RentalCart />
    </div>
  );
}
