import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kami Barbiere — Barberia a Gallarate",
  description:
    "Tagli di precisione, cura della barba e rasature con asciugamano caldo in Via Albricci 2, Gallarate. Prenota online il tuo appuntamento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" data-scroll-behavior="smooth"className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-[#0e0e0e] text-white antialiased">{children}</body>
    </html>
  );
}
