import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking & Anfrage',
  description:
    'Veranstaltungstechnik buchen bei da-sound Pfungstadt. Einfach Termin und Equipment auswählen – wir liefern in Pfungstadt, Darmstadt und Südhessen.',
  openGraph: {
    title: 'Booking & Anfrage | da-sound Veranstaltungstechnik',
    description:
      'Veranstaltungstechnik buchen bei da-sound Pfungstadt. Termin und Equipment auswählen – Lieferung in Südhessen.',
    url: 'https://da-sound.de/booking',
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
