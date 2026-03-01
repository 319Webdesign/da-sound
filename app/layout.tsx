import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

// Optimiertes Font Loading mit next/font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://www.da-sound.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Veranstaltungstechnik & DJ | da-sound",
    template: "%s | da-sound",
  },
  description:
    "Veranstaltungstechnik in Pfungstadt & Darmstadt mieten. PA-Anlagen, Licht, Ton. Abholung oder Lieferung. Jetzt prüfen!",
  keywords: [
    "Veranstaltungstechnik",
    "PA-Anlage",
    "Tontechnik",
    "Lichttechnik",
    "Pfungstadt",
    "Darmstadt",
    "Event-Technik",
    "Equipment mieten",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "da-sound Veranstaltungstechnik",
    title: "Veranstaltungstechnik & DJ | da-sound",
    description:
      "Veranstaltungstechnik in Pfungstadt & Darmstadt. PA, Licht, Ton mieten. Abholung oder Lieferung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veranstaltungstechnik & DJ | da-sound",
    description: "Veranstaltungstechnik in Pfungstadt & Darmstadt mieten. PA, Licht, Ton.",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

const htmlLang = "de-DE";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang} className={`overflow-x-hidden ${inter.variable}`}>
      <body className="overflow-x-hidden w-full font-sans">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
