import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function ProgramasAcademicos() {
  const programas = [
    {
      id: "auxiliar-enfermeria",
      nombre: "Auxiliar en Enfermería",
      descripcion: "Formación integral para el cuidado de la salud y el bienestar de los pacientes.",
      duracion: "3 semestres",
      modalidad: "Presencial",
      titulo: "Técnico Laboral Auxiliar en Enfermería",
      imagen: "/sede2.jpeg",
      proximasConvocatorias: ["Mayo 2025", "Octubre 2025"],
      precio: "$1.930.000 por semestre",
      detalles: [
        "Asistencia en cuidados básicos",
        "Administración de medicamentos",
        "Técnicas de primeros auxilios",
        "Atención al paciente"
      ]
    },
    {
      id: "auxiliar-salud-oral",
      nombre: "Auxiliar en Salud Oral",
      descripcion: "Capacitación en prevención y asistencia en procedimientos odontológicos.",
      duracion: "3 semestres",
      modalidad: "Presencial",
      titulo: "Técnico Laboral Auxiliar en Salud Oral",
      imagen: "/oral.jpeg",
      proximasConvocatorias: ["Mayo 2025", "Octubre 2025"],
      precio: "$ 1.685.000 por semestre",
      detalles: [
        "Asistencia en procedimientos odontológicos",
        "Esterilización de instrumentos",
        "Prevención de enfermedades bucales",
        "Educación en higiene oral"
      ]
    },
  ];

  return (
    <>
      <Navbar />
    

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Programas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {programas.map((programa) => (
            <div key={programa.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src={programa.imagen} 
                  alt={programa.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    {programa.duracion}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide ml-2">
                    {programa.modalidad}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{programa.nombre}</h2>
                <p className="text-gray-700 mb-4">{programa.descripcion}</p>
                
                <div className="mb-4">
                  <p className="font-medium mb-1">Título otorgado: {programa.titulo}</p>
                  <p className="font-medium mb-1">Próximas convocatorias: {programa.proximasConvocatorias.join(", ")}</p>
                  <p className="font-medium">Inversión: {programa.precio}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Lo que aprenderás:</h3>
                  <ul className="list-disc pl-5">
                    {programa.detalles.map((detalle, i) => (
                      <li key={i} className="text-gray-700">{detalle}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href={`/programas/${programa.id}`}
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    Ver detalles completos
                  </Link>
                  <Link 
                    href={`/programas/${programa.id}`}
                    className="inline-block bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-50 transition"
                  >
                    Proceso de admisión
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
          <p className="text-lg mb-6">Nuestros asesores están listos para resolver todas tus dudas y guiarte en el proceso de inscripción.</p>
          <Link 
            href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition text-lg"
          >
            Contáctanos
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}