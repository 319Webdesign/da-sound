import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipment & DJ buchen – Veranstaltungstechnik mieten Pfungstadt & Darmstadt',
  description:
    'Veranstaltungstechnik und DJ-Service buchen: PA-Anlagen, Licht, DJ, Solomusiker oder Live-Band. Unverbindliche Anfrage für Events in Pfungstadt, Darmstadt und Südhessen.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Equipment & DJ buchen | da-sound Veranstaltungstechnik',
    description: 'Equipment mieten oder DJ-Service buchen – Ihre unverbindliche Anfrage.',
    url: '/booking',
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
