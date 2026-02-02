import { NextResponse } from 'next/server';
import { fetchGoogleReviews } from '@/lib/reviews';

// ISR: 24 Stunden Cache – API-Key bleibt server-side
export const revalidate = 86400;

export async function GET() {
  try {
    const reviewsData = await fetchGoogleReviews();
    return NextResponse.json(reviewsData);
  } catch (error) {
    console.error('Fehler beim Abrufen der Google Reviews:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Fehler beim Abrufen der Rezensionen' },
      { status: 500 }
    );
  }
}
