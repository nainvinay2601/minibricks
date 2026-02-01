import type { Metadata } from "next";

import localFont from "next/font/local";
import Graphik from "next/font/local";

import "./globals.css";

import { ClientLayout } from "@/components/elements/client-layout";

const fgrok = localFont({
  src: "../public/fonts/founders-grotesk-condensed-medium.woff2",
  display: "swap",
  variable: "--font-fgrok",
  weight: "550",
});

const graphik = Graphik({
  src: "../public/fonts/graphik-lcg-regular.woff2",
  display: "swap",
  variable: "--font-graphik",
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Minibricks – Creating museums, exhibition objects, and architectural models",
  description:
    "We specialise in creating museums, exhibition objects, and architectural models, regardless of their complexity. We stand out for our creative approach and the level of detail in our miniatures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${fgrok.variable} ${graphik.variable}  antialiased`}>
        <ClientLayout> {children}</ClientLayout>
      </body>
    </html>
  );
}
