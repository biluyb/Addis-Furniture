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
  title: "Addis Furniture | Premium Furniture for Modern Ethiopian Homes",
  description:
    "Discover premium furniture crafted for comfort, beauty, and durability. Transform your home with elegant living room, bedroom, office, and dining furniture. Showroom in Addis Ababa.",
  keywords:
    "furniture Addis Ababa, Ethiopian furniture, premium furniture, sofa, bedroom set, dining table, office furniture, luxury furniture Ethiopia",
  openGraph: {
    title: "Addis Furniture | Premium Furniture for Modern Ethiopian Homes",
    description:
      "Transform your home with premium furniture crafted for comfort, beauty, and durability.",
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
