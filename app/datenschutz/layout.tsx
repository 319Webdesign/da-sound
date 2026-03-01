import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz – Datenschutzerklärung | da-sound',
  description:
    'Datenschutzerklärung von da-sound Veranstaltungstechnik. Informationen zum Schutz Ihrer Daten bei der Anmietung von PA-Anlagen und Event-Technik in Pfungstadt.',
  alternates: { canonical: '/datenschutz' },
  openGraph: {
    title: 'Datenschutz | da-sound Veranstaltungstechnik',
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
