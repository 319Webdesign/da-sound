import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipment & DJ buchen',
  description:
    'Equipment und DJ buchen: PA, Licht, Solomusiker, Live-Band. Unverbindliche Anfrage für Events in Pfungstadt & Darmstadt.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Equipment & DJ buchen | da-sound',
    description: 'Equipment oder DJ buchen – unverbindliche Anfrage für Pfungstadt & Darmstadt.',
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
