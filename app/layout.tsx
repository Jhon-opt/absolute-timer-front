import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/shared/navBar";

// Fuentes
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// NUEVO DOMINIO
const SITE_URL = "https://absolutetimer.dev"; // CAMBIA AQUÍ DESPUÉS DE COMPRAR

export const metadata: Metadata = {
  title: "Absolute DC Countdown – Live Timers for Batman, Superman, Wonder Woman",
  description:
    "Live countdowns, progress bars, and official covers for every Absolute DC comic release. Updated daily.",

  authors: [{ name: "Jhon Mario Durango Rodríguez" }],

  // OPEN GRAPH (para Google + redes)
  openGraph: {
    title: "Absolute DC Countdown – Live Release Timers",
    description: "Track Absolute Batman, Superman, Wonder Woman with live countdowns.",
    url: SITE_URL,
    siteName: "Absolute Timer",
    images: [
      {
        url: `${SITE_URL}/og-preview.webp`, // IMAGEN EN TU DOMINIO
        width: 1200,
        height: 630,
        alt: "Absolute DC Comics Countdown Timer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ÍCONOS (favicon + apple)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* FAVICON EXTRA (forzar carga) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* OG IMAGE (forzar carga si no se detecta) */}
        <meta property="og:image" content={`${SITE_URL}/og-preview.webp`} />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8570250065184709"
     crossOrigin="anonymous"></Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-950 to-gray-800 flex flex-col`}
      >
        <Navbar/>
        <header className="text-center py-10">
          <h1 className="text-4xl font-extrabold text-white tracking-wide font-gotham">
            Absolute Timer
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Live countdowns for upcoming Absolute DC releases
          </p>
        </header>

        <main className="flex-1 flex flex-wrap justify-center gap-6 px-4 pb-12">
          {children}
        </main>

        <footer className="text-center text-gray-500 py-4 border-t border-gray-700 text-sm">
          <p className="max-w-4xl mx-auto px-4">
            © {new Date().getFullYear()} Absolute Timer — By{" "}
            <span className="text-gray-300">Jhon Mario Durango </span>
            <a href="/policy" className="text-gray-300 hover:underline ml-4">
              Privacy Policy
            </a>
          </p>
          <p className="mt-3 text-xs text-gray-600 opacity-0 md:opacity-100">
            Absolute DC Comics release schedule: Batman, Superman, Wonder Woman, Flash. Official covers and live countdowns.
          </p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}