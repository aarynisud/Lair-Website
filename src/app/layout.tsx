import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { MeshGradient } from "@/components/global/GradientMesh";
import { Navbar } from "@/components/global/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'transparent',
};

export const metadata: Metadata = {
  title: "lair",
  description: "An all in one bot dedicated to providing the best experience to the best servers on Discord. ",
  twitter: {
    site: 'https://lair.rocks',
    card: 'player'
  },
  openGraph: {
    url: 'https://lair.rocks',
    type: 'website',
    title: 'lair',
    siteName: 'lair.rocks',
    description: 'An all in one bot dedicated to providing the best experience to the best servers on Discord. ',
    images: [
      {
        url: 'https://r2.lair.rocks/lair.webp',
        width: 500,
        height: 500,
        alt: 'Loti'
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-loti-100`}>
        <MeshGradient />
        <Navbar /> 
        {children}
        </body>
    </html>
  );
}
