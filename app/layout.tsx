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

export const metadata: Metadata = {
  title: "da-sound Veranstaltungstechnik | Pfungstadt",
  description: "Professionelle Veranstaltungstechnik in Pfungstadt & Umgebung. Tontechnik, Lichttechnik und Event-Zubehör zum Mieten.",
  keywords: "Veranstaltungstechnik, PA-Anlage, Tontechnik, Lichttechnik, Pfungstadt",
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
};

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
    <html lang="de" className={`overflow-x-hidden ${inter.variable}`}>
      <body className="overflow-x-hidden w-full font-sans">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
