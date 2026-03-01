import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liefergebiet',
  description:
    'Liefergebiet: Pfungstadt, Darmstadt, Frankfurt, Mainz. Kostenlose Lieferung im Kerngebiet. Südhessen & Rhein-Main.',
  alternates: { canonical: '/liefergebiet' },
  openGraph: {
    title: 'Liefergebiet | da-sound',
    description:
      'PA, Licht und Event-Technik nach Pfungstadt, Darmstadt und Südhessen liefern.',
    url: '/liefergebiet',
  },
};

export default function LiefergebietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
