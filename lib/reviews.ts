export interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

export interface ReviewsResponse {
  reviews: Review[];
  rating: number;
  user_ratings_total: number;
}

const normalizeReview = (review: any): Review => ({
  author_name: review.authorAttribution?.displayName || review.author_name || 'Anonym',
  rating: review.rating ?? 0,
  text: review.text?.text || review.text || '',
  time: review.publishTime
    ? Math.floor(new Date(review.publishTime).getTime() / 1000)
    : review.time ?? 0,
});

export async function fetchGoogleReviews(): Promise<ReviewsResponse> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error('Google Maps API Key oder Place ID fehlt');
  }

  let reviews: Review[] = [];
  let rating = 0;
  let user_ratings_total = 0;

  const tryNewApi = async () => {
    const newApiUrl = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&languageCode=de`;
    const response = await fetch(newApiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Neue Places API Fehler: ${response.status}`);
    }

    const data = await response.json();
    if (data.reviews && data.reviews.length > 0) {
      const all = data.reviews.map(normalizeReview);
      reviews = all.filter((r: Review) => r.rating >= 4).slice(0, 6);
      rating = data.rating ?? 0;
      user_ratings_total = data.userRatingCount ?? 0;
    }
  };

  try {
    await tryNewApi();
  } catch {
    // Fallback wird unten versucht
  }

  if (reviews.length === 0) {
    const oldApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=de`;
    const oldApiResponse = await fetch(oldApiUrl, {
      next: { revalidate: 86400 },
    });

    if (!oldApiResponse.ok) {
      throw new Error(`Google Places API Fehler: ${oldApiResponse.status}`);
    }

    const oldData = await oldApiResponse.json();
    if (oldData.status !== 'OK') {
      throw new Error(`Google Places API Fehler: ${oldData.status}`);
    }

    const result = oldData.result;
    const all = (result.reviews || []).map(normalizeReview);
    reviews = all.filter((r) => r.rating >= 4).slice(0, 6);
    rating = result.rating ?? 0;
    user_ratings_total = result.user_ratings_total ?? 0;
  }

  return { reviews, rating, user_ratings_total };
}
