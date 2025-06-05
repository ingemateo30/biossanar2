"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormacionOpen, setIsFormacionOpen] = useState(false);
  const [isMobileFormacionOpen, setIsMobileFormacionOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    // Limpiar cualquier timeout pendiente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsFormacionOpen(true);
  };

  const handleMouseLeave = () => {
    // Agregar un pequeño delay antes de cerrar
    timeoutRef.current = setTimeout(() => {
      setIsFormacionOpen(false);
    }, 150); // 150ms de delay
  };

  // Limpiar timeout cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
            <Link href="/" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">
              Nosotros
            </Link>
            
            {/* Dropdown de Formación */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">
                Formación
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isFormacionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isFormacionOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Invisible bridge para conexión suave */}
                  <div className="absolute -top-1 left-0 right-0 h-1 bg-transparent"></div>
                  
                  {/* Carreras Técnicas */}
                  <div className="px-4 pb-3 border-b border-gray-100">
                    <h3 className="text-sm font-bold text-[#003366] mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Carreras Técnicas
                    </h3>
                    <div className="space-y-2">
                      <Link 
                        href="/programas/auxiliar-enfermeria" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00B140] rounded-lg transition-all duration-200"
                        onClick={() => setIsFormacionOpen(false)}
                      >
                        <div className="font-medium">Auxiliar de Enfermería</div>
                        <div className="text-xs text-gray-500">3 semestres • Múltiples horarios</div>
                      </Link>
                      <Link 
                        href="/programas/auxiliar-salud-oral" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#00B140] rounded-lg transition-all duration-200"
                        onClick={() => setIsFormacionOpen(false)}
                      >
                        <div className="font-medium">Auxiliar de Salud Oral</div>
                        <div className="text-xs text-gray-500">3 semestres • Jornada diurna</div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Cursos Complementarios */}
                  <div className="px-4 pt-3">
                    <h3 className="text-sm font-bold text-[#003366] mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Cursos Complementarios
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        href="/cursos#inyectologia" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#003366] rounded-lg transition-all duration-200"
                        onClick={() => setIsFormacionOpen(false)}
                      >
                        <div className="font-medium text-xs">Inyectología</div>
                        <div className="text-xs text-gray-500">40 horas</div>
                      </Link>
                      <Link 
                        href="/cursos#laboratorio" 
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#003366] rounded-lg transition-all duration-200"
                        onClick={() => setIsFormacionOpen(false)}
                      >
                        <div className="font-medium text-xs">Toma de Muestras</div>
                        <div className="text-xs text-gray-500">35 horas</div>
                      </Link>
                    </div>
                    
                    {/* Ver todos los cursos */}
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link 
                        href="/cursos" 
                        className="block w-full text-center bg-gradient-to-r from-[#003366] to-[#00B140] text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200"
                        onClick={() => setIsFormacionOpen(false)}
                      >
                        Ver todos los cursos
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/politica-calidad" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">
              Política de Calidad
            </Link>
            <Link href="/contacto" className="text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all">
              Contacto
            </Link>
            <a
              href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas"
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
            <Link 
              href="/" 
              className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/nosotros" 
              className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            
            {/* Mobile Formación Dropdown */}
            <div>
              <button 
                onClick={() => setIsMobileFormacionOpen(!isMobileFormacionOpen)}
                className="flex items-center justify-between w-full text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all"
              >
                Formación
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileFormacionOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileFormacionOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#00B140] pl-4">
                  {/* Carreras Técnicas Mobile */}
                  <div>
                    <div className="text-sm font-bold text-[#003366] mb-2">Carreras Técnicas</div>
                    <div className="space-y-1 ml-2">
                      <Link 
                        href="/programas/auxiliar-enfermeria" 
                        className="block text-sm text-gray-700 hover:text-[#00B140] transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Auxiliar de Enfermería
                      </Link>
                      <Link 
                        href="/programas/auxiliar-salud-oral" 
                        className="block text-sm text-gray-700 hover:text-[#00B140] transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Auxiliar de Salud Oral
                      </Link>
                    </div>
                  </div>
                  
                  {/* Cursos Mobile */}
                  <div>
                    <div className="text-sm font-bold text-[#003366] mb-2">Cursos Complementarios</div>
                    <div className="space-y-1 ml-2">
                      <Link 
                        href="/cursos" 
                        className="block text-sm text-gray-700 hover:text-[#00B140] transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Inyectología
                      </Link>
                      <Link 
                        href="/cursos" 
                        className="block text-sm text-gray-700 hover:text-[#00B140] transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Toma de Muestras
                      </Link>
                      <Link 
                        href="/cursos" 
                        className="block text-sm text-gray-700 hover:text-[#00B140] transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Ver todos los cursos
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/politica-calidad" 
              className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Política de Calidad
            </Link>
            <Link 
              href="/contacto" 
              className="block text-[#0B4D75] hover:text-[#14A44D] font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <a
              href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas"
              className="block w-full mt-3 px-5 py-2 rounded-md text-white bg-gradient-to-r from-[#14A44D] to-[#0B4D75] hover:opacity-90 transition-all text-center"
            >
              Inscríbete ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}