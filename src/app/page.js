import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: 'Auxiliar de Enfermería',
      image: '/enfermeria2.jpg',
      description: 'Forma parte del equipo de atención médica, con un enfoque integral en el cuidado del paciente.',
      duration: '12 meses'
    },
    {
      id: 2,
      title: 'Auxiliar de Salud Oral',
      image: '/images/dental.jpg',
      description: 'Aprende a asistir en procedimientos odontológicos y a gestionar la higiene bucal de pacientes.',
      duration: '10 meses'
    },
    {
      id: 3,
      title: 'Técnico en Farmacia',
      image: '/images/pharmacy.jpg',
      description: 'Especialízate en la dispensación de medicamentos y atención farmacéutica.',
      duration: '14 meses'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      
      {/* Sección de Cursos Destacados */}
      <section className="py-12 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Nuestros Programas Educativos
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700">
              Formación práctica y teórica con profesionales de excelencia.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard 
                key={course.id}
                title={course.title}
                image={course.image}
                description={course.description}
                duration={course.duration}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Ventajas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <h3 className="mt-3 text-xl font-medium text-primary">Docentes Expertos</h3>
              <p className="mt-2 text-base text-gray-700">
                Profesionales con amplia experiencia en el sector salud.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mt-3 text-xl font-medium text-primary">Práctica Garantizada</h3>
              <p className="mt-2 text-base text-gray-700">
                Convenios con instituciones de salud para prácticas profesionales.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mt-3 text-xl font-medium text-primary">Instalaciones Modernas</h3>
              <p className="mt-2 text-base text-gray-700">
                Laboratorios equipados con tecnología de última generación.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mt-3 text-xl font-medium text-primary">Bolsa de Empleo</h3>
              <p className="mt-2 text-base text-gray-700">
                Apoyo en la inserción laboral para nuestros egresados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
