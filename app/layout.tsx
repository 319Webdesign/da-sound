import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "da-sound Veranstaltungstechnik | Pfungstadt",
  description: "Professionelle Veranstaltungstechnik in Pfungstadt & Umgebung. Tontechnik, Lichttechnik und Event-Zubehör zum Mieten.",
  keywords: "Veranstaltungstechnik, PA-Anlage, Tontechnik, Lichttechnik, Event-Technik, Pfungstadt",
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
    <html lang="de" className="overflow-x-hidden">
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
