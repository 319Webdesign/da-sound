import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – da-sound Veranstaltungstechnik Pfungstadt',
  description:
    'Impressum und Anbieterkennzeichnung: da-sound, Inh. Carsten Helfrich, Wormser Str. 23, 64319 Pfungstadt. Veranstaltungstechnik mieten in Südhessen.',
  alternates: { canonical: '/impressum' },
  openGraph: {
    title: 'Impressum | da-sound Veranstaltungstechnik',
    description: 'Angaben gemäß § 5 TMG – da-sound Veranstaltungstechnik.',
    url: '/impressum',
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
