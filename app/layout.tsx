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

// 🧠 Metadata global
export const metadata: Metadata = {
  title: "Absolute Timer – Comic Releases",
  description:
    "Check upcoming Absolute DC comic releases with timers, progress bars, and updated covers.",
  keywords: [
    "comics",
    "timer",
    "Absolute DC",
    "Absolute Batman",
    "releases",
    "countdown",
  ],
  authors: [{ name: "Jhon Mario Durango Rodríguez" }],
  openGraph: {
    title: "Absolute Timer – Comic Releases",
    description:
      "View upcoming Absolute DC comic releases and their progress with a dynamic and clean design.",
    url: "https://absolute-timer.vercel.app",
    siteName: "Absolute Timer",
    images: [
      {
        url: "https://jhon-opt.github.io/absolute-timer/images/og-preview.webp",
        width: 1200,
        height: 630,
        alt: "Absolute Timer Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-950 to-gray-800 flex flex-col`}
      >
        {/* 🧭 Encabezado */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-extrabold text-white tracking-wide font-gotham">
            Absolute Timer
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Counters for upcoming Absolute DC releases
          </p>
        </header>

        {/* 🧩 Contenido principal */}
        <main className="flex-1 flex flex-wrap justify-center gap-6 px-4 pb-12">
          {children}
        </main>

        {/* ⚙️ Pie de página */}
        <footer className="text-center text-gray-500 py-4 border-t border-gray-700 text-sm">
          © {new Date().getFullYear()} Absolute Timer — Created by{" "}
          <span className="text-gray-300">Jhon Mario Durango Rodríguez</span>
        </footer>

         <Analytics />
      </body>
    </html>
  );
}
