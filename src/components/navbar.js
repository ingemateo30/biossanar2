"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img className="h-36 w-auto" src="/biossanar2.png" alt="Logo Biossanar" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Inicio</Link>
            <Link href="/nosotros" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Nosotros</Link>
            <Link href="/programas" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Programas academicos</Link>
            <Link href="/contacto" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Contacto</Link>
            <a
              href="/ruta-de-inscripcion"
              className="px-5 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#14A44D] to-[#0B4D75] hover:opacity-90 transition-all inline-block"
            >
              Inscríbete ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#0B4D75]">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="px-6 py-4 space-y-3">
            <Link href="/" className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Inicio</Link>
            <Link href="/nosotros" className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Nosotros</Link>
            <Link href="/programas" className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Programas academicos</Link>
            <Link href="/contacto" className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">Contacto</Link>
            <button className="w-full mt-3 px-5 py-2 rounded-md text-white bg-gradient-to-r from-[#14A44D] to-[#0B4D75] hover:opacity-90 transition-all">
              Inscríbete ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}


