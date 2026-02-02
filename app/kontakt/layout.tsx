import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt zu da-sound Veranstaltungstechnik in Pfungstadt. Öffnungszeiten, Anfahrt, WhatsApp und Kontaktformular – wir beraten Sie gerne.',
  openGraph: {
    title: 'Kontakt | da-sound Veranstaltungstechnik Pfungstadt',
    description: 'Kontakt, Öffnungszeiten und Anfahrt – da-sound in Pfungstadt.',
    url: 'https://da-sound.de/kontakt',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
