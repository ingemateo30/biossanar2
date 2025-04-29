'use client';

import { useParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DetallePrograma() {
  const params = useParams();
  const id = params.id;
  const [activeTab, setActiveTab] = useState('descripcion');

  // Normalmente, estos datos vendrían de una API o CMS
  const programas = {
    "auxiliar-enfermeria": {
      id: "auxiliar-enfermeria",
      nombre: "Auxiliar en Enfermería",
      descripcion: "Formación integral para el cuidado de la salud y el bienestar de los pacientes. Nuestro programa de Auxiliar en Enfermería te prepara para asistir al personal médico y de enfermería en la atención integral del paciente, con conocimientos técnicos y un enfoque humanizado.",
      duracion: "3 semestres",
      modalidad: "Presencial",
      horarios: ["Lunes a viernes: 7:00 AM - 12:00 PM", "Lunes a viernes: 6:00 PM - 10:00 PM", "Sábados: 7:00 AM - 5:00 PM"],
      titulo: "Técnico Auxiliar en Enfermería",
      imagen: "/enfermeria.png",
      imagenCover: "/enfermeria.png",
      resolucion: "Resolución MEN 12345 de 2023",
      proximasConvocatorias: ["Marzo 2025", "Agosto 2025"],
      precio: "$1,500,000 por semestre",
      descuentos: ["10% pago anticipado", "5% egresados", "15% convenios empresariales"],
      perfilEgresado: [
        "Brindar cuidado básico al paciente según asignación y guías de manejo",
        "Asistir al profesional de enfermería en procedimientos especiales",
        "Aplicar técnicas de primeros auxilios según protocolos establecidos",
        "Administrar medicamentos según delegación y protocolos del establecimiento"
      ],
      campoLaboral: [
        "Hospitales y clínicas",
        "Centros de atención primaria",
        "Hogares geriátricos",
        "Atención domiciliaria",
        "Empresas de servicios de salud"
      ],
      requisitosAdmision: [
        "Ser mayor de 16 años",
        "Título de bachiller o acta de grado",
        "Documento de identidad",
        "2 fotos tamaño documento",
        "Certificado médico reciente",
        "Certificado de vacunas (Hepatitis B, Tétanos)"
      ],
      proceso: [
        { paso: "Inscripción online", descripcion: "Completa el formulario de inscripción y paga el valor correspondiente" },
        { paso: "Entrevista", descripcion: "Agendamiento y presentación de entrevista personal con coordinación académica" },
        { paso: "Prueba psicotécnica", descripcion: "Evaluación de aptitudes y competencias básicas para el programa" },
        { paso: "Matrícula", descripcion: "Entrega de documentos y pago del valor del semestre" }
      ],
      pensum: [
        {
          semestre: "Primer semestre",
          materias: [
            { nombre: "Anatomía Básica", creditos: 4, horas: 64 },
            { nombre: "Admisión al usuario", creditos: 4, horas: 64 },
            { nombre: "Atención integral al usuario", creditos: 3, horas: 48 },
            { nombre: "Administración de medicamentos ", creditos: 2, horas: 32 },
            { nombre: "Bienestar del usuario", creditos: 2, horas: 32 },
            { nombre: "Control de infecciones", creditos: 4, horas: 64 },
            { nombre: "Técnicas de Estudio ", creditos: 4, horas: 64 },
            { nombre: "Tecnologías de la información y comunicación (TICS I)", creditos: 3, horas: 48 },
            { nombre: "Lúdica I ", creditos: 2, horas: 32 },
            { nombre: "Práctica Hospitalización", creditos: 2, horas: 32 },
            { nombre: "Práctica Geriátrica ", creditos: 4, horas: 64 },
            { nombre: "Práctica Comunitaria", creditos: 4, horas: 64 },
            { nombre: "Práctica Administrativa", creditos: 3, horas: 48 }
          ]
        },
        {
          semestre: "Segundo semestre",
          materias: [
            { nombre: "Atención de enfermería en área quirúrgica ", creditos: 5, horas: 80 },
            { nombre: "Apoyo Diagnóstico ", creditos: 3, horas: 48 },
            { nombre: "Ética Profesional ", creditos: 3, horas: 48 },
            { nombre: "Laboratorio clínico ", creditos: 4, horas: 64 },
            { nombre: "Salud Mental ", creditos: 4, horas: 64 },
            { nombre: "Farmacología Básica ", creditos: 3, horas: 48 },
            { nombre: "Fisiopatología  ", creditos: 2, horas: 32 },
            { nombre: "Plan Ampliado de Inmunización (PAI) ", creditos: 2, horas: 32 },
            { nombre: "Promoción y Prevención I ", creditos: 4, horas: 64 },
            { nombre: "Tecnologías de la información y comunicación (TICS II)  ", creditos: 4, horas: 64 },
            { nombre: "Lúdica II ", creditos: 3, horas: 48 },
            { nombre: "Práctica en el área de Cirugía  ", creditos: 2, horas: 32 },
            { nombre: "Práctica en el área de Vacunación PAI", creditos: 2, horas: 32 },
            { nombre: "Práctica de promoción y prevención  ", creditos: 4, horas: 64 },
            { nombre: "Práctica de Salud Mental ", creditos: 4, horas: 64 },
            { nombre: "Practica de laboratorio clínico ", creditos: 3, horas: 48 }
          ]
        },
        {
          semestre: "Tercer semestre",
          materias: [
            { nombre: "Atención Pediátrica ", creditos: 4, horas: 64 },
            { nombre: "Cuidado a la madre y al recién nacido ", creditos: 4, horas: 64 },
            { nombre: "promoción y prevención II ", creditos: 3, horas: 48 },
            { nombre: "Seminario de Primeros Auxilios  ", creditos: 2, horas: 32 },
            { nombre: "Valoración y Semiología ", creditos: 2, horas: 32 },
            { nombre: "Salud Ocupacional", creditos: 4, horas: 64 },
            { nombre: "Seminario de Procesos Básicos de Enfermería", creditos: 4, horas: 64 },
            { nombre: "Lúdica III", creditos: 3, horas: 48 },
            { nombre: "Prácticas en el área de Urgencias  ", creditos: 2, horas: 32 },
            { nombre: "Prácticas en el área de Pediatría ", creditos: 2, horas: 32 },
            { nombre: "Prácticas en el área de Ginecobstetricia  ", creditos: 4, horas: 64 },
            { nombre: "prácticas de promoción y prevención II", creditos: 4, horas: 64 },
            { nombre: "200H de práctica formativa integral  ", creditos: 3, horas: 200 }
          ]
        }
      ],
      conveniosPracticas: [
        "Hospital Universitario San José",
        "Clínica Los Rosales",
        "Centro de Salud Villa Santana",
        "IPS Salud Total",
        "Hogar del Anciano San José"
      ],
      testimonios: [
        {
          nombre: "María Rodríguez",
          rol: "Egresada 2023",
          foto: "/images/testimonios/maria.jpg",
          comentario: "El programa me dio todas las herramientas para desarrollarme profesionalmente. Ahora trabajo en el Hospital Universitario y me siento preparada para cualquier reto."
        },
        {
          nombre: "Carlos Martínez",
          rol: "Egresado 2022",
          foto: "/images/testimonios/carlos.jpg",
          comentario: "Las prácticas profesionales fueron fundamentales para mi formación. Los profesores tienen amplia experiencia en el campo y siempre están dispuestos a enseñar."
        }
      ],
      coordinador: {
        nombre: "Dra. Patricia Gutiérrez",
        titulo: "Enfermera Jefe, Esp. en Docencia Universitaria",
        foto: "/images/coordinadores/patricia.jpg"
      },
      faqs: [
        { 
          pregunta: "¿Puedo trabajar mientras estudio?", 
          respuesta: "Sí, ofrecemos horarios flexibles incluidos nocturnos y fines de semana para que puedas combinar tus estudios con otras actividades." 
        },
        { 
          pregunta: "¿El programa tiene certificación oficial?", 
          respuesta: "Sí, nuestro programa está aprobado por el Ministerio de Educación Nacional mediante Resolución 12345 de 2023." 
        },
        { 
          pregunta: "¿Cómo son las prácticas profesionales?", 
          respuesta: "Las prácticas se realizan en instituciones de salud con convenio, bajo supervisión de instructores calificados, y comienzan desde el segundo semestre." 
        }
      ]
    },
    "auxiliar-salud-oral": {
      id: "auxiliar-salud-oral",
      nombre: "Auxiliar en Salud Oral",
      descripcion: "Capacitación en prevención y asistencia en procedimientos odontológicos. Nuestro programa te prepara para apoyar al odontólogo en la atención de pacientes y manejo del consultorio dental.",
      duracion: "2 semestres",
      modalidad: "Presencial",
      horarios: ["Lunes a viernes: 7:00 AM - 12:00 PM", "Lunes a viernes: 6:00 PM - 10:00 PM"],
      titulo: "Técnico Auxiliar en Salud Oral",
      imagen: "/images/salud-oral.jpg",
      imagenCover: "/images/salud-oral-cover.jpg",
      resolucion: "Resolución MEN 12346 de 2023",
      proximasConvocatorias: ["Abril 2025", "Septiembre 2025"],
      precio: "$1,300,000 por semestre",
      descuentos: ["10% pago anticipado", "5% egresados", "15% convenios empresariales"],
      perfilEgresado: [
        "Brindar cuidado básico al paciente según asignación y guías de manejo",
        "Asistir al profesional de enfermería en procedimientos especiales",
        "Aplicar técnicas de primeros auxilios según protocolos establecidos",
        "Administrar medicamentos según delegación y protocolos del establecimiento"
      ],
    campoLaboral: [
      "Hospitales y clínicas",
      "Centros de atención primaria",
      "Hogares geriátricos",
      "Atención domiciliaria",
      "Empresas de servicios de salud"
    ],
    requisitosAdmision: [
      "Ser mayor de 16 años",
      "Título de bachiller o acta de grado",
      "Documento de identidad",
      "2 fotos tamaño documento",
      "Certificado médico reciente",
      "Certificado de vacunas (Hepatitis B, Tétanos)"
    ],
    proceso: [
      { paso: "Inscripción online", descripcion: "Completa el formulario de inscripción y paga el valor correspondiente" },
      { paso: "Entrevista", descripcion: "Agendamiento y presentación de entrevista personal con coordinación académica" },
      { paso: "Prueba psicotécnica", descripcion: "Evaluación de aptitudes y competencias básicas para el programa" },
      { paso: "Matrícula", descripcion: "Entrega de documentos y pago del valor del semestre" }
    ],
    pensum: [
      {
        semestre: "Primer semestre",
        materias: [
          { nombre: "Anatomía y fisiología", creditos: 4, horas: 64 },
          { nombre: "Fundamentos de enfermería", creditos: 4, horas: 64 },
          { nombre: "Bioseguridad", creditos: 3, horas: 48 },
          { nombre: "Comunicación asertiva", creditos: 2, horas: 32 },
          { nombre: "Ética y valores", creditos: 2, horas: 32 }
        ]
      },
      {
        semestre: "Segundo semestre",
        materias: [
          { nombre: "Técnicas de enfermería I", creditos: 5, horas: 80 },
          { nombre: "Farmacología básica", creditos: 3, horas: 48 },
          { nombre: "Primeros auxilios", creditos: 3, horas: 48 },
          { nombre: "Administración en salud", creditos: 2, horas: 32 },
          { nombre: "Práctica clínica I", creditos: 4, horas: 96 }
        ]
      },
      {
        semestre: "Tercer semestre",
        materias: [
          { nombre: "Técnicas de enfermería II", creditos: 4, horas: 64 },
          { nombre: "Atención al adulto mayor", creditos: 3, horas: 48 },
          { nombre: "Promoción y prevención", creditos: 3, horas: 48 },
          { nombre: "Sistemas de información", creditos: 2, horas: 32 },
          { nombre: "Práctica clínica II", creditos: 6, horas: 144 }
        ]
      }
    ],
    conveniosPracticas: [
      "Hospital Universitario San José",
      "Clínica Los Rosales",
      "Centro de Salud Villa Santana",
      "IPS Salud Total",
      "Hogar del Anciano San José"
    ],
    testimonios: [
      {
        nombre: "María Rodríguez",
        rol: "Egresada 2023",
        foto: "/images/testimonios/maria.jpg",
        comentario: "El programa me dio todas las herramientas para desarrollarme profesionalmente. Ahora trabajo en el Hospital Universitario y me siento preparada para cualquier reto."
      },
      {
        nombre: "Carlos Martínez",
        rol: "Egresado 2022",
        foto: "/images/testimonios/carlos.jpg",
        comentario: "Las prácticas profesionales fueron fundamentales para mi formación. Los profesores tienen amplia experiencia en el campo y siempre están dispuestos a enseñar."
      }
    ],
    coordinador: {
      nombre: "Dra. Patricia Gutiérrez",
      titulo: "Enfermera Jefe, Esp. en Docencia Universitaria",
      foto: "/images/coordinadores/patricia.jpg"
    },
    faqs: [
      { 
        pregunta: "¿Puedo trabajar mientras estudio?", 
        respuesta: "Sí, ofrecemos horarios flexibles incluidos nocturnos y fines de semana para que puedas combinar tus estudios con otras actividades." 
      },
      { 
        pregunta: "¿El programa tiene certificación oficial?", 
        respuesta: "Sí, nuestro programa está aprobado por el Ministerio de Educación Nacional mediante Resolución 12345 de 2023." 
      },
      { 
        pregunta: "¿Cómo son las prácticas profesionales?", 
        respuesta: "Las prácticas se realizan en instituciones de salud con convenio, bajo supervisión de instructores calificados, y comienzan desde el segundo semestre." 
      }
    ]
    }

    // Aquí irían los demás programas con estructura similar
  };

  if (!id || !programas[id]) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Cargando información...</h1>
          {id && !programas[id] && <p>Programa no encontrado</p>}
        </div>
        <Footer />
      </>
    );
  }

  const programa = programas[id];

  return (
    <>
      <Navbar />  
      {/* Información rápida */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-sm text-gray-500 uppercase">Duración</h3>
              <p className="font-semibold">{programa.duracion}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-sm text-gray-500 uppercase">Modalidad</h3>
              <p className="font-semibold">{programa.modalidad}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-sm text-gray-500 uppercase">Próxima convocatoria</h3>
              <p className="font-semibold">{programa.proximasConvocatorias[0]}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <h3 className="text-sm text-gray-500 uppercase">Inversión</h3>
              <p className="font-semibold">{programa.precio}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navegación por tabs */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto whitespace-nowrap">
            <button 
              onClick={() => setActiveTab('descripcion')}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'descripcion' ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              Descripción
            </button>
            <button 
              onClick={() => setActiveTab('pensum')}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'pensum' ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              Plan de Estudios
            </button>
            <button 
              onClick={() => setActiveTab('admisiones')}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'admisiones' ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              Admisiones
            </button>
            <button 
              onClick={() => setActiveTab('practicas')}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'practicas' ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              Prácticas
            </button>
            <button 
              onClick={() => setActiveTab('testimonios')}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'testimonios' ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              Testimonios
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'faq' ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              Preguntas Frecuentes
            </button>
          </div>
        </div>
      </div>
      
      {/* Contenido según Tab seleccionado */}
      <div className="container mx-auto py-12 px-4">
        {/* Descripción general */}
        {activeTab === 'descripcion' && (
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Acerca del Programa</h2>
              <p className="text-lg mb-8">{programa.descripcion}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Perfil del Egresado</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {programa.perfilEgresado.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Campo Laboral</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {programa.campoLaboral.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="relative w-32 h-32 mx-auto">
                      <Image 
                        src={programa.coordinador.foto} 
                        alt={programa.coordinador.nombre}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2">Coordinador(a) del Programa</h3>
                    <p className="text-lg mb-1">{programa.coordinador.nombre}</p>
                    <p className="text-gray-600">{programa.coordinador.titulo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Plan de Estudios */}
        {activeTab === 'pensum' && (
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Plan de Estudios</h2>
              <p className="text-lg mb-8">Nuestro programa está estructurado para brindarte las competencias necesarias de manera progresiva, combinando teoría y práctica desde el inicio de tu formación.</p>
              
              <div className="mb-12">
                {programa.pensum.map((semestre, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 bg-blue-50 p-3 border-l-4 border-blue-500">
                      {semestre.semestre}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Asignatura</th>
                            <th className="border p-3 text-center">Créditos</th>
                            <th className="border p-3 text-center">Horas</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semestre.materias.map((materia, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="border p-3">{materia.nombre}</td>
                              <td className="border p-3 text-center">{materia.creditos}</td>
                              <td className="border p-3 text-center">{materia.horas}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Horarios Disponibles</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {programa.horarios.map((horario, index) => (
                    <li key={index}>{horario}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">¿Listo para empezar tu formación profesional?</h3>
                <button 
                  onClick={() => setActiveTab('admisiones')}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
                >
                  Iniciar proceso de admisión
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Admisiones */}
        {activeTab === 'admisiones' && (
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Proceso de Admisión</h2>
              <p className="text-lg mb-8">Te guiamos en cada paso para que inicies tu formación profesional de manera simple y rápida.</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Requisitos</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {programa.requisitosAdmision.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Proceso</h3>
                  <ol className="list-decimal pl-5 space-y-4">
                    {programa.proceso.map((item, index) => (
                      <li key={index}>
                        <span className="font-medium">{item.paso}:</span> {item.descripcion}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-3">Inversión y Financiación</h3>
                <p className="mb-4"><span className="font-medium">Valor del semestre:</span> {programa.precio}</p>
                <h4 className="font-medium mb-2">Descuentos disponibles:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {programa.descuentos.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">¿Listo para dar el primer paso?</h3>
                <Link 
                  href="/contacto" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
                >
                  Inscribirme ahora
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Prácticas */}
        {activeTab === 'practicas' && (
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Prácticas Profesionales</h2>
              <p className="text-lg mb-8">Desde el inicio de la formación, combinamos la teoría con la práctica para garantizar el desarrollo de tus habilidades profesionales en escenarios reales.</p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Convenios con Instituciones de Salud</h3>
                <p className="mb-4">Contamos con alianzas estratégicas con las principales instituciones de salud de la región, donde nuestros estudiantes realizan sus prácticas profesionales bajo supervisión calificada:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {programa.conveniosPracticas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Proceso de Prácticas</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Preparación</h4>
                    <p className="text-sm">Inducción, capacitación en protocolos y normativas de seguridad.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Desarrollo</h4>
                    <p className="text-sm">Aplicación de conocimientos bajo supervisión de instructores calificados.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Evaluación</h4>
                    <p className="text-sm">Retroalimentación continua y evaluación de competencias adquiridas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Testimonios */}
        {activeTab === 'testimonios' && (
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Testimonios de Egresados</h2>
              <p className="text-lg mb-8">Conoce las experiencias de quienes ya completaron su formación en nuestro programa.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {programa.testimonios.map((testimonio, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 mr-4">
                        <Image 
                          src={testimonio.foto} 
                          alt={testimonio.nombre}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonio.nombre}</h3>
                        <p className="text-gray-600 text-sm">{testimonio.rol}</p>
                      </div>
                    </div>
                    <p className="italic text-gray-700">"{testimonio.comentario}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* FAQ */}
        {activeTab === 'faq' && (
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
              <p className="text-lg mb-8">Resolvemos las dudas más comunes sobre nuestro programa de {programa.nombre}.</p>
              
              <div className="space-y-6">
                {programa.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-3">{faq.pregunta}</h3>
                    <p className="text-gray-700">{faq.respuesta}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold mb-4">¿Tienes más preguntas?</h3>
                <Link 
                  href="/contacto" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </>
  );
}