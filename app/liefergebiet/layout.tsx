import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liefergebiet – Veranstaltungstechnik in Pfungstadt, Darmstadt & Südhessen',
  description:
    'Veranstaltungstechnik liefern oder abholen: Pfungstadt, Darmstadt, Weiterstadt, Frankfurt, Mainz, Wiesbaden. Professionelle Lieferung in Südhessen & Rhein-Main. Kostenlose Lieferung im Kerngebiet.',
  alternates: { canonical: '/liefergebiet' },
  openGraph: {
    title: 'Liefergebiet | da-sound Veranstaltungstechnik',
    description:
      'PA-Anlagen, Licht und Event-Technik liefern wir nach Pfungstadt, Darmstadt und ganz Südhessen.',
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
