import type { Metadata } from "next";

import Roboto from "next/font/local";
import Graphik from "next/font/local";

import "./globals.css";

const roboto = Roboto({
  src: "../public/fonts/roboto-flex-latin.woff2",
  display: "swap",
  variable: "--font-roboto",
  weight: "550",
});

const graphik = Graphik({
  src: "../public/fonts/graphik-lcg-regular.woff2",
  display: "swap",
  variable: "--font-graphik",
  weight: " 400",
});

export const metadata: Metadata = {
  title: "Minibricks – Creating museums, exhibition objects, and architectural models",
  description: "We specialise in creating museums, exhibition objects, and architectural models, regardless of their complexity. We stand out for our creative approach and the level of detail in our miniatures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} ${graphik.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
