import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// 🧩 Fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🧠 METADATA SEO OPTIMIZADA
export const metadata: Metadata = {
  title: "Absolute DC Comics Countdown – Live Release Timers & Progress Bars",
  description:
    "Track every upcoming Absolute DC comic release with live countdown timers, progress bars, and official covers. Batman, Superman, Wonder Woman and more.",
  
  // ❌ keywords: Google las ignora desde 2009 → BORRADAS
  authors: [{ name: "Jhon Mario Durango Rodríguez" }],

  // Open Graph (redes sociales)
  openGraph: {
    title: "Absolute DC Countdown – Live Release Timers",
    description: "Live countdowns for Absolute Batman, Superman, Wonder Woman and more DC comics.",
    url: "https://absolute-timer.vercel.app",
    siteName: "Absolute Timer",
    images: [
      {
        url: "https://jhon-opt.github.io/absolute-timer/images/og-preview.webp",
        width: 1200,
        height: 630,
        alt: "Absolute DC Comics Countdown Timer Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Íconos
  icons: { icon: "/favicon.ico" },

  // ROBOTS: Permitir indexación
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

// VIEWPORT: Mobile-first (Core Web Vitals)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Espacio para AdSense (descomenta cuando quieras) */}
        
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-950 to-gray-800 flex flex-col`}
      >
        {/* 🧭 Encabezado */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-extrabold text-white tracking-wide font-gotham">
            Absolute Timer
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Live countdowns for upcoming Absolute DC releases
          </p>
        </header>

        {/* 🧩 Contenido principal */}
        <main className="flex-1 flex flex-wrap justify-center gap-6 px-4 pb-12">
          {children}
        </main>

        {/* ANUNCIO: Opcional, entre cards y footer */}
        

        {/* ⚙️ Pie de página + SEO TEXT (invisible para usuarios, visible para Google) */}
        <footer className="text-center text-gray-500 py-4 border-t border-gray-700 text-sm">
          <p className="max-w-4xl mx-auto px-4">
            © {new Date().getFullYear()} Absolute Timer — Created by{" "}
            <span className="text-gray-300">Jhon Mario Durango Rodríguez</span>
          </p>

          {/* Texto SEO: ayuda a Google a entender el contenido */}
          <p className="mt-3 text-xs text-gray-600 opacity-0 md:opacity-100">
            Absolute DC Comics release schedule: Absolute Batman, Absolute Superman, Absolute Wonder Woman, 
            Absolute Flash, and more. Live countdown timers updated daily with official DC release dates 
            and comic cover art. Track progress bars for every upcoming issue.
          </p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}