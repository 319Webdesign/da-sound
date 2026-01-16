'use client';

import { useState } from 'react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RentalCart from '@/components/RentalCart';
import { motion } from 'framer-motion';

// Test-Daten für Reviews
const reviewData = [
  {
    id: 1,
    name: 'Michael Schmidt',
    rating: 5,
    text: 'Absolut professionell! Die PA-Anlage war perfekt für unser Firmenevent. Sehr zuverlässiger Service und kompetente Beratung. Gerne wieder!',
    timestamp: 'vor 2 Wochen',
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah Müller',
    rating: 5,
    text: 'Wir haben für unsere Hochzeit die komplette Beschallung gemietet. Alles hat perfekt funktioniert, der Sound war fantastisch und das Team sehr freundlich. Kann ich nur weiterempfehlen!',
    timestamp: 'vor 1 Monat',
    verified: true,
  },
  {
    id: 3,
    name: 'Thomas Weber',
    rating: 5,
    text: 'Top Service! Schnelle Lieferung, professioneller Aufbau und sehr gute Qualität der Technik. Preis-Leistung stimmt absolut.',
    timestamp: 'vor 3 Wochen',
    verified: true,
  },
  {
    id: 4,
    name: 'Lisa Hoffmann',
    rating: 5,
    text: 'Für unser Stadtfest haben wir die große PA-Anlage gemietet. Die Beratung war sehr kompetent, die Technik erstklassig und der Service unschlagbar. Vielen Dank!',
    timestamp: 'vor 2 Monaten',
    verified: true,
  },
  {
    id: 5,
    name: 'Andreas Fischer',
    rating: 5,
    text: 'Sehr zufrieden mit der gesamten Abwicklung. Von der Anfrage bis zur Abholung alles reibungslos. Die Technik ist auf höchstem Niveau.',
    timestamp: 'vor 1 Woche',
    verified: true,
  },
  {
    id: 6,
    name: 'Julia Becker',
    rating: 5,
    text: 'Wir haben für unsere Geburtstagsfeier die kleine PA-Anlage gemietet. Perfekt für unsere Zwecke, einfach zu bedienen und der Preis war fair. Sehr empfehlenswert!',
    timestamp: 'vor 4 Wochen',
    verified: true,
  },
  {
    id: 7,
    name: 'Markus Klein',
    rating: 5,
    text: 'Professionelle Veranstaltungstechnik aus einer Hand. Die Beratung war sehr hilfreich und wir haben genau das bekommen, was wir brauchten. Top!',
    timestamp: 'vor 5 Wochen',
    verified: true,
  },
  {
    id: 8,
    name: 'Nina Wagner',
    rating: 5,
    text: 'Absolut begeistert! Die Lichttechnik hat unsere Veranstaltung auf ein ganz neues Level gehoben. Sehr kompetente Beratung und tolle Umsetzung.',
    timestamp: 'vor 6 Wochen',
    verified: true,
  },
  {
    id: 9,
    name: 'Stefan Bauer',
    rating: 5,
    text: 'Wir haben für unser Konzert die komplette Beschallung inklusive Mischpult gemietet. Alles hat perfekt funktioniert, der Sound war fantastisch. Sehr professionelles Team!',
    timestamp: 'vor 3 Monaten',
    verified: true,
  },
  {
    id: 10,
    name: 'Anna Schneider',
    rating: 5,
    text: 'Sehr zuverlässiger Partner für unsere regelmäßigen Events. Immer pünktlich, immer professionell und die Technik ist immer top. Kann ich nur weiterempfehlen!',
    timestamp: 'vor 2 Monaten',
    verified: true,
  },
];

// Funktion zum Erstellen von Initialen
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Funktion zum Generieren einer Farbe basierend auf dem Namen
const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-teal-500',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

// Review Card Komponente
function ReviewCard({ review, index }: { review: typeof reviewData[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = review.text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? review.text : review.text.slice(0, maxLength) + '...';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header mit Avatar, Name und Badge */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-semibold text-sm">{getInitials(review.name)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            {review.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verifizierter Kunde
              </span>
            )}
          </div>
          {/* Sterne */}
          <div className="flex items-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? 'fill-[#FFC107] text-[#FFC107]'
                    : 'fill-gray-200 text-gray-200'
                }`}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500">{review.timestamp}</p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed mb-2">
        {displayText}
      </p>

      {/* Mehr lesen Button */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
        >
          {isExpanded ? 'Weniger anzeigen' : 'Mehr lesen'}
        </button>
      )}
    </motion.div>
  );
}

export default function GoogleReviewPage() {
  const googleReviewUrl = 'https://g.page/r/YOUR_GOOGLE_REVIEWS_LINK';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      {/* Header / Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 via-blue-50/50 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
          >
            {/* Google Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <svg
                className="w-20 h-20 md:w-24 md:h-24"
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
            </motion.div>

            {/* Überschrift und Sterne */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Stimmen unserer Kunden
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 fill-[#FFC107] text-[#FFC107]"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Cards - Masonry Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviewData.map((review, index) => (
              <div key={review.id} className="break-inside-avoid mb-6">
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Hatten Sie ein tolles Event mit uns?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Hinterlassen Sie uns eine Bewertung auf Google und helfen Sie anderen Kunden bei der Entscheidung!
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary px-8 py-6 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl group"
            >
              <Star className="w-6 h-6 fill-primary text-primary" />
              Jetzt auf Google bewerten
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Sticky Warenkorb */}
      <RentalCart />
    </div>
  );
}
