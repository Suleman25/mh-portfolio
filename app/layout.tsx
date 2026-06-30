import type { Metadata } from "next";
import { Mona_Sans, Allura } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Signature script — used only for the footer credit.
const signature = Allura({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
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
    <html
      lang="en"
      className={`${monaSans.variable} ${signature.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply stored theme before paint to avoid a flash. Light is default. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
