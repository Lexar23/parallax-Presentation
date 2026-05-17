import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mauritania | An Immersive Journey Through the Sahara",
  description: "Explore the geographic marvels, rich nomadic culture, bimetallic currency, epic Iron Ore Train, and sacred desert libraries of Mauritania in West Africa.",
  keywords: ["Mauritania", "Sahara Desert", "West Africa", "Iron Ore Train", "Chinguetti Libraries", "Ataya Tea", "Ouguiya Currency"],
  authors: [{ name: "Alexander" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#0b0704] text-[#f5efe6] selection:bg-sahara-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}

