import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen (AGB) von da-sound Veranstaltungstechnik, Pfungstadt.',
  robots: { index: false, follow: true },
};

export default function AGBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
