import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB',
  description:
    'AGB da-sound: Mietbedingungen, Zahlung, Rückgabe für Veranstaltungstechnik in Pfungstadt & Darmstadt.',
  alternates: { canonical: '/agb' },
  openGraph: {
    title: 'AGB | da-sound',
    description: 'Allgemeine Geschäftsbedingungen für die Anmietung von Veranstaltungstechnik.',
    url: '/agb',
  },
};

export default function AGBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
