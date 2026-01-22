import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 86400; // 24 Stunden Cache

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'Google Maps API Key oder Place ID nicht konfiguriert' },
        { status: 500 }
      );
    }

    // Versuche zuerst die neue Places API (New) für mehr Rezensionen
    // Falls das fehlschlägt, falle zurück auf die alte API
    let reviews = [];
    let rating = 0;
    let user_ratings_total = 0;

    try {
      // Neue Places API (New) - gibt standardmäßig nur 5 Rezensionen zurück
      // Versuche mit verschiedenen Sortierungen, um eventuell unterschiedliche Rezensionen zu bekommen
      const newApiUrl = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&languageCode=de`;
      const newApiResponse = await fetch(newApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
        },
        next: { revalidate: 86400 },
      });

      if (newApiResponse.ok) {
        const newApiData = await newApiResponse.json();
        if (newApiData.reviews && newApiData.reviews.length > 0) {
          reviews = newApiData.reviews.map((review: any) => ({
            author_name: review.authorAttribution?.displayName || 'Anonym',
            rating: review.rating || 0,
            text: review.text?.text || '',
            time: review.publishTime ? Math.floor(new Date(review.publishTime).getTime() / 1000) : 0,
          }));
          rating = newApiData.rating || 0;
          user_ratings_total = newApiData.userRatingCount || 0;
          console.log(`Neue Places API: ${reviews.length} Rezensionen erhalten`);
          
          // Wenn wir weniger als 6 haben, versuche die alte API für zusätzliche Rezensionen
          if (reviews.length < 6) {
            console.log(`Nur ${reviews.length} Rezensionen von neuer API, versuche alte API für mehr...`);
          }
        }
      }
    } catch (newApiError) {
      console.log('Neue Places API nicht verfügbar, verwende alte API');
    }

    // Fallback auf alte Places API Details (gibt nur 5 Rezensionen zurück)
    if (reviews.length === 0) {
      const oldApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=de`;
      const oldApiResponse = await fetch(oldApiUrl, {
        next: { revalidate: 86400 },
      });

      if (!oldApiResponse.ok) {
        throw new Error(`Google Places API Fehler: ${oldApiResponse.status}`);
      }

      const oldApiData = await oldApiResponse.json();

      if (oldApiData.status !== 'OK') {
        return NextResponse.json(
          { error: `Google Places API Fehler: ${oldApiData.status}` },
          { status: 500 }
        );
      }

      const result = oldApiData.result;
      reviews = result.reviews || [];
      rating = result.rating || 0;
      user_ratings_total = result.user_ratings_total || 0;
      console.log(`Alte Places API: ${reviews.length} Rezensionen erhalten`);
    }

    return NextResponse.json({
      reviews: reviews,
      rating: rating,
      user_ratings_total: user_ratings_total,
    });
  } catch (error) {
    console.error('Fehler beim Abrufen der Google Reviews:', error);
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Rezensionen' },
      { status: 500 }
    );
  }
}
