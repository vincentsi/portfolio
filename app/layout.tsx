import clsx from "clsx";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ParticlesBackground } from "./components/animations/particles-background";
import { ScrollProgress } from "./components/animations/scroll-progress";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css"; // Ton fichier CSS global

import { Anek_Telugu } from "next/font/google"; // Correct importation

// Importation des polices de Geist et Anek_Telugu
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const GeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Simonpieri Développeur Full Stack",
  description: "Je me fais une description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={clsx(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <ThemeProvider>
          <ScrollProgress />
          <ParticlesBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
