'use client';

import { Star, ExternalLink } from 'lucide-react';

// Test-Daten für Bewertungen
const reviews = [
  {
    id: 1,
    text: 'Absolut professionell! Die PA-Anlage war perfekt für unser Firmenevent. Sehr zuverlässiger Service und kompetente Beratung.',
    name: 'Michael Schmidt',
    eventType: 'Firmenfeier',
  },
  {
    id: 2,
    text: 'Wir haben für unsere Hochzeit die komplette Beschallung gemietet. Alles hat perfekt funktioniert, der Sound war fantastisch!',
    name: 'Sarah Müller',
    eventType: 'Hochzeit',
  },
  {
    id: 3,
    text: 'Top Service! Schnelle Lieferung, professioneller Aufbau und sehr gute Qualität der Technik. Preis-Leistung stimmt absolut.',
    name: 'Thomas Weber',
    eventType: 'Vereinsfest',
  },
];


export default function CustomerReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Einfach gemietet. Begeisternd gefeiert.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Über 20+ Bewertungen aus der Region Darmstadt & Pfungstadt.
          </p>
        </div>

        {/* Desktop: 3-Spalten-Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Mobile & Tablet: Horizontaler Slider */}
        <div className="lg:hidden overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {reviews.map((review, index) => (
              <div key={review.id} className="w-[320px] flex-shrink-0">
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Button: Weitere Bewertungen */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJ5c3RqQ57vUcR790xWEv0vQo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Weitere Bewertungen
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Review Card Komponente
function ReviewCard({ review }: { review: typeof reviews[0]; index: number }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      {/* Header: Google Icon und Sterne */}
      <div className="flex items-center gap-2 mb-4">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>

      {/* Body: Bewertungstext */}
      <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-base">
        {review.text}
      </p>

      {/* Footer: Name und Event-Typ Badge */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900">{review.name}</p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {review.eventType}
        </span>
      </div>
    </div>
  );
}

