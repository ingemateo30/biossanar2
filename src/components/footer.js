import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#002347] to-[#003366] text-white">
      {/* Wave Separator */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              {/* Logo placeholder - replace with your actual logo */}
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-[#003366] font-bold text-xl">B</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Biossanar</h2>
            </div>
            <p className="text-gray-300 max-w-md">
              Formando profesionales de la salud con principios éticos y compromiso social
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/people/Fundacion-Educativa-Biossanar/100082398106645/" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 text-[#00B140] hover:text-white hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/fundacioneducativabiossanar/" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 text-[#00B140] hover:text-white hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 text-[#00B140] hover:text-white hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 text-[#00B140] hover:text-white hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6 border-t border-b border-blue-400 border-opacity-30">
          <div>
            <h3 className="text-[#00B140] font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00B140] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span> cra 9 #10-33 piso 5 edificio biossanar</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00B140] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+57 3246723624</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00B140] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>fundacioneducativabiossanar@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#00B140] font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/programas" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Programas Académicos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/admisiones" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Admisiones
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#00B140] font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Biblioteca
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Prácticas Profesionales
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Bienestar Estudiantil
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block hover:text-[#00B140] transition-colors duration-300 py-1 border-b border-transparent hover:border-[#00B140]">
                  Egresados
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[#00B140] font-bold text-lg mb-4">Horario de Atención</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>7:00am - 05:30pm</span>
              </li>
              <li className="mt-4 pt-4 border-t border-blue-400 border-opacity-30">
                <Link href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas" className="inline-block bg-[#00B140] hover:bg-[#009935] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm text-center w-full">
                  Contáctanos Ahora
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Biossanar | Institución de Educación para el Trabajo y Desarrollo Humano</p>
          <div className="mt-2 text-xs text-gray-400">
            <Link href="#" className="hover:text-[#00B140] mx-2 transition-colors duration-300">Política de Privacidad</Link>
            <Link href="#" className="hover:text-[#00B140] mx-2 transition-colors duration-300">Términos de Uso</Link>
            <Link href="#" className="hover:text-[#00B140] mx-2 transition-colors duration-300">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
  