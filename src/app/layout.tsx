import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
