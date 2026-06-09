import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://addis-furniture.vercel.app"),
  title: "Addis Furniture | Premium Modern Furniture in Addis Ababa",
  description: "Experience luxury simplified. Ethiopian-crafted sofas, bedroom sets, and executive office furniture. Custom designs with 48h delivery in Addis Ababa.",
  keywords: ["Furniture Addis Ababa", "Modern Sofas Ethiopia", "Luxury Beds Addis", "Custom Furniture Ethiopia", "Office Furniture Addis Ababa"],
  openGraph: {
    title: "Addis Furniture | Premium Modern Furniture",
    description: "Handcrafted luxury for modern Ethiopian homes. Custom designs, professional delivery.",
    images: ["/images/hero.png"],
    type: "website",
    locale: "en_ET",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
