import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen | da-sound',
  description:
    'Allgemeine Geschäftsbedingungen von da-sound Veranstaltungstechnik. Mietbedingungen, Zahlung, Rückgabe für PA-Anlagen, Lichttechnik und Equipment in Pfungstadt.',
  alternates: { canonical: '/agb' },
  openGraph: {
    title: 'AGB | da-sound Veranstaltungstechnik',
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
