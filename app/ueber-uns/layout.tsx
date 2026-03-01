import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über da-sound – Veranstaltungstechnik in Pfungstadt & Darmstadt',
  description:
    'Professionelle Veranstaltungstechnik aus Pfungstadt für Events bis 1.500 Personen. Ton, Licht, Bühne – Abholung oder Lieferung in Südhessen. Jetzt beraten lassen!',
  alternates: { canonical: '/ueber-uns' },
  openGraph: {
    title: 'Über da-sound | da-sound Veranstaltungstechnik',
    description:
      'Professionelle Veranstaltungstechnik aus Pfungstadt. Equipment und Know-How für Ihr Event in Südhessen.',
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
