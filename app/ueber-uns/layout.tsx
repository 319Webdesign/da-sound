import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Veranstaltungstechnik aus Pfungstadt & Darmstadt. Events bis 1.500 Personen. Ton, Licht, Bühne. Abholung oder Lieferung in Südhessen.',
  alternates: { canonical: '/ueber-uns' },
  openGraph: {
    title: 'Über uns | da-sound',
    description:
      'Veranstaltungstechnik aus Pfungstadt. Ton, Licht, Bühne für Ihr Event in Südhessen.',
    url: '/ueber-uns',
  },
};

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
