import { Star, ExternalLink } from 'lucide-react';
import ReviewCard from './ReviewCard';
import type { ReviewsResponse } from '@/lib/reviews';

interface GoogleReviewsSectionProps {
  reviewsData?: ReviewsResponse | null;
}

export default function GoogleReviewsSection({ reviewsData }: GoogleReviewsSectionProps) {
  if (!reviewsData || !reviewsData.reviews || reviewsData.reviews.length === 0) {
    return null;
  }

  const { reviews, rating, user_ratings_total } = reviewsData;
  const displayReviews = reviews.slice(0, 3);
  const googleBusinessUrl =
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ||
    'https://www.google.com/maps/place/?q=place_id:ChIJ5c3RqQ57vUcR790xWEv0vQo';

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Einfach gemietet. Begeisternd gefeiert.
          </h2>

          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.round(rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">
                {rating.toFixed(1)}
              </span>
            </div>

            <p className="text-lg text-gray-600">
              von {user_ratings_total} {user_ratings_total === 1 ? 'Bewertung' : 'Bewertungen'}
            </p>
          </div>

          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Auf Google bewerten
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review, index) => (
            <div key={`${review.time}-${index}`} className="h-full">
              <ReviewCard
                authorName={review.author_name}
                rating={review.rating}
                text={review.text}
                time={review.time}
              />
            </div>
          ))}
        </div>

        <div className="md:hidden overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {displayReviews.map((review, index) => (
              <div key={`${review.time}-${index}`} className="w-[85vw] flex-shrink-0 snap-center">
                <ReviewCard
                  authorName={review.author_name}
                  rating={review.rating}
                  text={review.text}
                  time={review.time}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
