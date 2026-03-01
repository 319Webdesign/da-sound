import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum da-sound: Inh. Carsten Helfrich, Wormser Str. 23, 64319 Pfungstadt. § 5 TMG.',
  alternates: { canonical: '/impressum' },
  openGraph: {
    title: 'Impressum | da-sound',
    description: 'Impressum da-sound – Angaben gemäß § 5 TMG.',
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
