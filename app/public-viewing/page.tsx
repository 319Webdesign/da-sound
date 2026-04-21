import { getProductsByCategory } from '@/lib/products';
import { data } from '@/lib/data';
import { MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import CategoryHero from '@/components/CategoryHero';
import CategoryContent from '@/components/CategoryContent';
import CategoryCTA from '@/components/CategoryCTA';
import ProductList from '@/components/ProductList';
import OpeningHours from '@/components/OpeningHours';

export const revalidate = 3600;

export const metadata = {
  title: 'Public Viewing mieten | Public Viewing Sets in Darmstadt & Umgebung',
  description:
    'Public Viewing mieten bei da-sound: 3 Public Viewing Sets mit Leinwand, Beamer und Sound. Ideal für Garten, Kneipe und Biergarten in Darmstadt & Umgebung.',
  keywords: [
    'Public Viewing',
    'Public Viewing mieten',
    'Public Viewing Set',
    'Public Viewing Darmstadt',
    'Leinwand mieten',
    'Beamer mieten',
  ],
  alternates: { canonical: '/public-viewing' },
  openGraph: {
    title: 'Public Viewing mieten | da-sound',
    description:
      'Public Viewing Sets mieten: Leinwand, Beamer und Sound für Garten, Kneipe und Biergarten.',
    url: '/public-viewing',
    type: 'website',
  },
};

const pageContent = {
  title: 'Public Viewing Sets',
  description: 'Komplett-Pakete für echtes WM Live-Feeling bei deinem Event.',
  image: '/images/wm-bg-stadium.png',
  iconName: 'Monitor',
  longDescription:
    'Unsere Public Viewing Sets sind fertig zusammengestellte Pakete aus Leinwand, Projektor und Sound. So bekommst du schnell ein stabiles Public Viewing Setup für Spieltage in Garten, Kneipe oder Biergarten.',
  features: [
    'Komplett abgestimmte Sets für verschiedene Eventgrößen',
    'Leinwand, Beamer und Beschallung in einem Paket',
    'Schneller Aufbau mit klarer HDMI-Anbindung',
    'Optionale Erweiterungen für große Gruppen',
  ],
  typicalUseCases: ['Zuhause im Garten', 'Kneipe', 'Biergarten', 'Vereinsheim', 'Firmenevent'],
};

export default function PublicViewingPage() {
  const products = getProductsByCategory('public-viewing');

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Navigation />

      <CategoryHero
        title={pageContent.title}
        description={pageContent.description}
        image={pageContent.image}
        iconName={pageContent.iconName}
      />

      <CategoryContent
        longDescription={pageContent.longDescription}
        features={pageContent.features}
        typicalUseCases={pageContent.typicalUseCases}
      />

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Echtes WM Live-Feeling für Zuhause, Kneipe, Biergarten
            </h2>
            <p className="text-gray-600">
              Rechtzeitig zum Start in die WM bieten wir ihnen 3 exklusive Public Viewing Sets. Alles was Sie
              benötigen, ist ein Empfangsgerät mit HDMI Ausgang (z.B. Laptop, SAT Receiver oder TV Top-Box)
            </p>
            <p className="text-sm text-gray-500 mt-3">
              *bitte erfragen Sie auch unsere attraktiven Konditionen für Langzeitmiete
            </p>
          </div>
          <ProductList products={products} />
        </div>
      </section>

      <CategoryCTA title={pageContent.title} />

      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Kontakt & Öffnungszeiten</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    Wormser Str. 23
                    <br />
                    64319 Pfungstadt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Öffnungszeiten</h3>
                  <div className="text-gray-700">
                    <OpeningHours />
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
