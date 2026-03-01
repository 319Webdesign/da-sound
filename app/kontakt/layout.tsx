import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt da-sound: Veranstaltungstechnik mieten in Pfungstadt & Darmstadt. Telefon, E-Mail, WhatsApp. Wormser Str. 23.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt | da-sound',
    description:
      'Beratung zu Ton, Licht und Bühne für Events in Pfungstadt, Darmstadt und Südhessen.',
    url: '/kontakt',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
