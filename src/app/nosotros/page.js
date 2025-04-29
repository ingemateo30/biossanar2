"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-900">Sobre Nosotros</h2>
          <p className="mt-4 text-lg text-gray-600">
            En <span className="font-semibold text-green-600">Biossanar</span>, nos dedicamos a la formación de profesionales en salud con altos estándares de calidad y compromiso.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <div className="relative">
            <img
              src="/nosotros1.png"
              alt="Equipo Biossanar"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Contenido */}
          <div className="text-gray-700 space-y-6">
            <h3 className="text-3xl font-semibold text-blue-900">Nuestra Historia</h3>
            <p>
              Desde nuestra fundación, hemos trabajado para brindar educación de calidad en el área de la salud. Nuestro enfoque se basa en la excelencia académica y el desarrollo integral de nuestros estudiantes.
            </p>
            <h3 className="text-3xl font-semibold text-blue-900">Nuestro Equipo</h3>
            <p>
              Contamos con un equipo de profesionales altamente capacitados, comprometidos con la enseñanza y la formación de futuros líderes en el sector salud.
            </p>
          </div>
        </div>
      </section>
       <Footer />
      </>
      );
}
