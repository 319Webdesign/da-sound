import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Datenschutzerklärung da-sound. Schutz Ihrer Daten bei Anmietung von Veranstaltungstechnik in Pfungstadt & Darmstadt.',
  alternates: { canonical: '/datenschutz' },
  openGraph: {
    title: 'Datenschutz | da-sound',
    description: 'Informationen zum Schutz Ihrer persönlichen Daten.',
    url: '/datenschutz',
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
