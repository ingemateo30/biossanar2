import Navbar from "@/components/navbar";
import Footer from '@/components/footer';

export default function ProgramasAcademicos() {
  const programas = [
    {
      nombre: "Auxiliar en Enfermería",
      descripcion: "Formación integral para el cuidado de la salud y el bienestar de los pacientes.",
      duracion: "3 semestres",
      imagen: "/images/enfermeria.jpg",
    },
    {
      nombre: "Auxiliar en Salud Oral",
      descripcion: "Capacitación en prevención y asistencia en procedimientos odontológicos.",
      duracion: "2 semestres",
      imagen: "/images/salud-oral.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-[#0B4D75] text-center">Programas Académicos</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Descubre nuestros programas de formación en el área de la salud.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {programas.map((programa, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={programa.imagen} alt={programa.nombre} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#0B4D75]">{programa.nombre}</h2>
                <p className="mt-2 text-gray-600">{programa.descripcion}</p>
                <p className="mt-2 text-[#14A44D] font-medium">Duración: {programa.duracion}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
