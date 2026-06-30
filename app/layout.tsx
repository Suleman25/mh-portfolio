import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moiez Hayee — Architectural Drafting & Visualization",
  description:
    "Portfolio of Moiez Hayee. Supporting architects and developers with production drawings, SketchUp modeling, and photorealistic visualizations — full permit-ready construction document sets, not just renders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={`${monaSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
