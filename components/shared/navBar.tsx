// components/Navbar.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          
<Link href="/" className="flex items-center space-x-2 group">
           
            <Image
              src="/logo2.svg" // ← CAMBIA POR TU ARCHIVO
              alt="Absolute Timer Logo"
              width={32}
              height={32}
              className="group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-white font-bold text-lg hidden sm:block">
              Absolute Timer
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link href="/policy" className="text-gray-300 hover:text-white transition">
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            <Link href="/about" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/privacy-policy" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}