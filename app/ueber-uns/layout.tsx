import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Über da-sound Veranstaltungstechnik in Pfungstadt. Professionelle Ton- und Lichttechnik zum Mieten – Erfahrung und Service für Ihr Event.',
  openGraph: {
    title: 'Über uns | da-sound Veranstaltungstechnik Pfungstadt',
    description: 'Erfahren Sie mehr über da-sound – Ihr Partner für Veranstaltungstechnik in Südhessen.',
    url: 'https://da-sound.de/ueber-uns',
  },
};

export default function UeberUnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
