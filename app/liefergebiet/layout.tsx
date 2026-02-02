import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liefergebiet',
  description:
    'Liefergebiet von da-sound: Pfungstadt, Darmstadt, Südhessen und Umgebung. Veranstaltungstechnik liefern wir zu Ihnen.',
  openGraph: {
    title: 'Liefergebiet | da-sound Veranstaltungstechnik',
    description: 'Pfungstadt, Darmstadt, Südhessen – wir liefern Ihre Veranstaltungstechnik.',
    url: 'https://da-sound.de/liefergebiet',
  },
};

export default function LiefergebietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
