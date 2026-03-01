import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt – da-sound Veranstaltungstechnik Pfungstadt & Darmstadt',
  description:
    'Kontakt zu da-sound: Veranstaltungstechnik mieten in Pfungstadt & Darmstadt. Beratung per Telefon, E-Mail oder WhatsApp. Wormser Str. 23, 64319 Pfungstadt.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt | da-sound Veranstaltungstechnik',
    description:
      'Wir beraten Sie persönlich zu Ihrer Veranstaltung – Ton, Licht und Bühne für Events in Südhessen.',
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
