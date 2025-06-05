"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function CursosDetalle() {
    const [activeTab, setActiveTab] = useState('inyectologia');

    const cursos = {
        inyectologia: {
            id: 'inyectologia',
            titulo: 'Curso Integral de Inyectología',
            docente: 'JUAN JOSÉ ORTIZ',
            duracion: '40 horas (30 teóricas + 10 prácticas)',
            precio: '$130.000',
            modalidad: 'Presencial',
            certificacion: 'Certificado de Participación',
            objetivo: 'Capacitar a los estudiantes en las técnicas de inyectología, para que adquieran los conocimientos teóricos y habilidades prácticas necesarias para administrar inyecciones de manera segura y efectiva.',
            metodologia: [
                'Clases teóricas con presentaciones, discusiones y actividades prácticas',
                'Sesiones de práctica en un entorno controlado con supervisión de instructores experimentados'
            ],
            evaluacion: [
                'Exámenes teóricos',
                'Evaluación práctica de la administración de inyecciones'
            ],
            modulos: [
                {
                    nombre: 'Fundamentos de Inyectología',
                    horas: 6,
                    contenido: [
                        'Introducción a la inyectología',
                        'Anatomía y fisiología de la piel y músculos en contexto de inyectología',
                        'Partes de la jeringa, tipos de jeringas y sus indicaciones',
                        'Tipos de inyecciones y sus indicaciones',
                        'Material necesario para la inyectología',
                        'Normas de higiene y seguridad'
                    ]
                },
                {
                    nombre: 'Farmacología',
                    horas: 4,
                    contenido: [
                        'Clasificación de medicamentos',
                        'Preparación y dosificación de medicamentos',
                        'Interacciones medicamentosas y efectos adversos',
                        'Manejo de residuos y desechos de inyectología'
                    ]
                },
                {
                    nombre: 'Técnicas de Administración',
                    horas: 10,
                    contenido: [
                        'Técnica de asepsia',
                        'Técnica de inyección intramuscular (IM)',
                        'Técnica de inyección subcutánea (SC)',
                        'Técnica de inyección intradérmica (ID)',
                        'Técnica de inyección intravenosa (IV)',
                        'Técnica de administración de insulina y heparina'
                    ]
                },
                {
                    nombre: 'Complicaciones y Cuidados Posteriores',
                    horas: 2,
                    contenido: [
                        'Identificación y manejo de complicaciones',
                        'Cuidados posteriores a la administración de inyecciones',
                        'Educación al paciente sobre la administración de inyecciones en el hogar'
                    ]
                },
                {
                    nombre: 'Práctica Clínica',
                    horas: 10,
                    contenido: [
                        'Práctica supervisada de las técnicas de inyectología en un entorno clínico',
                        'Simulación de situaciones reales',
                        'Retroalimentación y corrección de habilidades'
                    ]
                },
                {
                    nombre: 'Consideraciones Éticas y Legales',
                    horas: 2,
                    contenido: [
                        'Ética en la administración de inyecciones',
                        'Responsabilidades legales y deontológicas'
                    ]
                },
                {
                    nombre: 'Actualización y Avances en Inyectología',
                    horas: 2,
                    contenido: [
                        'Nuevas tecnologías y tendencias en inyectología',
                        'Actualización sobre vacunas y protocolos'
                    ]
                },
                {
                    nombre: 'Evaluación Final y Certificación',
                    horas: 4,
                    contenido: [
                        'Examen teórico',
                        'Evaluación práctica',
                        'Entrega de certificados aprobados'
                    ]
                }
            ],
            recursos: [
                'Material de lectura y referencia actualizado',
                'Equipo y suministros médicos para prácticas',
                'Aulas de clases y entorno clínico simulado'
            ]
        },
        laboratorio: {
            id: 'laboratorio',
            titulo: 'Toma de Muestras para Laboratorio Clínico',
            docente: 'Profesional Especializado',
            duracion: '40 horas',
            precio: '$170.000',
            modalidad: 'Presencial',
            certificacion: 'Certificado de Participación',
            objetivo: 'Capacitar al personal de salud en las técnicas correctas de toma, manejo y transporte de muestras biológicas para análisis de laboratorio clínico, siguiendo protocolos de bioseguridad y calidad.',
            metodologia: [
                'Clases teóricas con metodología participativa',
                'Prácticas supervisadas en laboratorio simulado',
                'Estudio de casos clínicos reales',
                'Simulaciones de procedimientos'
            ],
            evaluacion: [
                'Evaluaciones teóricas por módulo',
                'Evaluación práctica de toma de muestras',
                'Estudio de casos clínicos'
            ],
            modulos: [
                {
                    nombre: 'Introducción al Laboratorio Clínico',
                    horas: 3,
                    contenido: [
                        'Importancia del laboratorio en el diagnóstico clínico',
                        'Rol del personal de salud en la toma de muestras',
                        'Ética y confidencialidad en el manejo de información clínica'
                    ]
                },
                {
                    nombre: 'Tipos de Pruebas Diagnósticas',
                    horas: 4,
                    contenido: [
                        'Clasificación general de las pruebas de laboratorio',
                        'Pruebas hematológicas (hemograma, recuento plaquetario, etc.)',
                        'Pruebas químicas (glucosa, perfil lipídico, pruebas hepáticas, etc.)',
                        'Pruebas bacteriológicas (cultivos, antibiogramas)',
                        'Pruebas hormonales (TSH, cortisol, etc.)',
                        'Pruebas inmunológicas (VIH, pruebas de anticuerpos, etc.)'
                    ]
                },
                {
                    nombre: 'Técnicas de Toma de Muestras',
                    horas: 8,
                    contenido: [
                        'Muestras sanguíneas: venopunción y punción capilar',
                        'Muestras de orina: recolección de muestra aleatoria, de 24 horas, etc.',
                        'Muestras fecales: instrucciones para pacientes',
                        'Muestras respiratorias: esputo y hisopados',
                        'Otros tipos de muestras: líquidos corporales, raspados, etc.'
                    ]
                },
                {
                    nombre: 'Preparación del Paciente y del Personal',
                    horas: 3,
                    contenido: [
                        'Instrucciones preanalíticas (ayuno, suspensión de medicamentos)',
                        'Identificación del paciente y rotulación de muestras',
                        'Equipamiento básico y preparación del área de trabajo'
                    ]
                },
                {
                    nombre: 'Bioseguridad en el Laboratorio Clínico',
                    horas: 4,
                    contenido: [
                        'Principios de bioseguridad',
                        'Uso adecuado de elementos de protección personal (EPP)',
                        'Protocolos ante accidentes laborales (punción, salpicaduras)'
                    ]
                },
                {
                    nombre: 'Manejo de Desechos Biológicos',
                    horas: 3,
                    contenido: [
                        'Clasificación de residuos: biológicos, cortopunzantes, comunes',
                        'Métodos de segregación, almacenamiento y disposición',
                        'Normativa nacional e institucional'
                    ]
                },
                {
                    nombre: 'Conservación y Transporte de Muestras',
                    horas: 3,
                    contenido: [
                        'Requisitos de temperatura y tiempo para cada tipo de muestra',
                        'Técnicas de embalaje seguro',
                        'Registro y trazabilidad'
                    ]
                },
                {
                    nombre: 'Registro y Control de Resultados',
                    horas: 2,
                    contenido: [
                        'Llenado correcto de formularios y sistemas informáticos',
                        'Control de los resultados de exámenes con la persona tratante',
                        'Seguimiento de resultados críticos o anómalos'
                    ]
                },
                {
                    nombre: 'Calidad en la Toma de Muestras',
                    horas: 2,
                    contenido: [
                        'Errores preanalíticos comunes y cómo evitarlos',
                        'Criterios de aceptación y rechazo de muestras',
                        'Indicadores de calidad'
                    ]
                },
                {
                    nombre: 'Simulaciones y Prácticas Supervisadas',
                    horas: 3,
                    contenido: [
                        'Prácticas de toma de muestras en laboratorio simulado',
                        'Estudio de casos clínicos',
                        'Evaluación práctica de habilidades'
                    ]
                }
            ],
            recursos: [
                'Material didáctico especializado',
                'Laboratorio simulado completamente equipado',
                'Insumos y materiales para prácticas',
                'Biblioteca virtual especializada'
            ]
        }
    };

    const cursoActivo = cursos[activeTab];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#002347] to-[#003366] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <svg className="w-5 h-5 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                            </svg>
                            <span className="text-sm font-medium">Cursos de Formación Especializada</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Cursos Complementarios</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed text-center">
                        Desarrolla habilidades específicas con nuestros cursos especializados en el área de la salud
                    </p>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="bg-white border-b shadow-sm sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('inyectologia')}
                            className={`py-4 px-8 font-medium border-b-3 transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${activeTab === 'inyectologia'
                                    ? 'border-[#00B140] text-[#00B140] bg-green-50'
                                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#00B140]'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.5,2C5.67,2 5,2.67 5,3.5V4.31L2.5,5.81C1.84,6.2 1.84,7.18 2.5,7.58L5,9.08V10C5,10.55 5.45,11 6,11C6.55,11 7,10.55 7,10V8.58L15.21,4.42L15.79,5.58L8.21,9.42L8.79,10.58L16.37,6.74C17.04,6.35 17.04,5.36 16.37,4.97L15.79,4.42L8.21,3.26L7.63,2.1L15.21,6L6.5,5.5C6.22,5.22 5.78,5.22 5.5,5.5S5.22,6.28 5.5,6.56L6.05,7.11L6.5,6.86V22L17.5,22C18.33,22 19,21.33 19,20.5V3.5C19,2.67 18.33,2 17.5,2H6.5M15,13V14H16V15H15V16H14V15H13V14H14V13H15Z" />
                            </svg>
                            <span>Inyectología</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('laboratorio')}
                            className={`py-4 px-8 font-medium border-b-3 transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${activeTab === 'laboratorio'
                                    ? 'border-[#00B140] text-[#00B140] bg-green-50'
                                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#00B140]'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5,2V8H6.5V22H17.5V8H19V2H5M7,4H17V6H7V4M8.5,10H15.5V12H8.5V10M8.5,14H15.5V16H8.5V14M8.5,18H15.5V20H8.5V18Z" />
                            </svg>
                            <span>Toma de Muestras</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Course Content */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Course Header */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                        <div className="bg-gradient-to-r from-[#003366] to-[#00B140] p-8 text-white">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">{cursoActivo.titulo}</h2>
                                    <p className="text-blue-100 text-lg leading-relaxed">{cursoActivo.objetivo}</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{cursoActivo.duracion.split(' ')[0]}</div>
                                            <div className="text-sm text-blue-200">Horas</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{cursoActivo.precio}</div>
                                            <div className="text-sm text-blue-200">Inversión</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold">{cursoActivo.modalidad}</div>
                                            <div className="text-sm text-blue-200">Modalidad</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold">Certificado</div>
                                            <div className="text-sm text-blue-200">Al finalizar</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Details Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Modules */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-[#003366] mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Contenido del Curso
                                </h3>

                                <div className="space-y-6">
                                    {cursoActivo.modulos.map((modulo, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 border-l-4 border-[#00B140]">
                                                <div className="flex justify-between items-center">
                                                    <h4 className="text-lg font-semibold text-[#003366]">
                                                        Módulo {index + 1}: {modulo.nombre}
                                                    </h4>
                                                    <span className="bg-[#00B140] text-white px-3 py-1 rounded-full text-sm font-medium">
                                                        {modulo.horas} horas
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2">
                                                    {modulo.contenido.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="flex items-start">
                                                            <svg className="w-4 h-4 text-[#00B140] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Methodology and Evaluation */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-[#003366] mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        Metodología
                                    </h4>
                                    <ul className="space-y-2">
                                        {cursoActivo.metodologia.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-4 h-4 text-[#00B140] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h4 className="text-xl font-bold text-[#003366] mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                        Evaluación
                                    </h4>
                                    <ul className="space-y-2">
                                        {cursoActivo.evaluacion.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg className="w-4 h-4 text-[#00B140] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">

                            {/* Course Info Card */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
                                <h4 className="text-xl font-bold text-[#003366] mb-4">Información del Curso</h4>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Docente:</span>
                                        <span className="font-medium text-[#003366]">{cursoActivo.docente}</span>
                                    </div>

                                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Duración:</span>
                                        <span className="font-medium text-[#003366]">{cursoActivo.duracion}</span>
                                    </div>

                                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Modalidad:</span>
                                        <span className="font-medium text-[#003366]">{cursoActivo.modalidad}</span>
                                    </div>

                                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Certificación:</span>
                                        <span className="font-medium text-[#003366]">{cursoActivo.certificacion}</span>
                                    </div>

                                    <div className="pt-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-[#00B140] mb-2">{cursoActivo.precio}</div>
                                            <p className="text-gray-600 text-sm mb-4">Inversión total del curso</p>
                                        </div>

                                        <div className="space-y-3">
                                            <a
                                                href={`https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20el%20curso%20de%20${cursoActivo.titulo}`}
                                                className="block w-full bg-[#00B140] hover:bg-[#009935] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 text-center"
                                            >
                                                Inscribirme ahora
                                            </a>
                                            <a
                                                href="/contacto"
                                                className="block w-full bg-white border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 text-center"
                                            >
                                                Más información
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Resources */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h4 className="text-lg font-bold text-[#003366] mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    Recursos Incluidos
                                </h4>
                                <ul className="space-y-2">
                                    {cursoActivo.recursos.map((recurso, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-4 h-4 text-[#00B140] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-sm">{recurso}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick Benefits */}
                            <div className="bg-gradient-to-br from-[#003366] to-[#00B140] rounded-2xl p-6 text-white">
                                <h4 className="text-lg font-bold mb-4">¿Por qué elegir este curso?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">Certificación oficial</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">Práctica supervisada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">Docentes especializados</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">Aplicación inmediata</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#003366] mb-4">Preguntas Frecuentes</h2>
                        <div className="w-20 h-1 bg-[#00B140] mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#003366] mb-3">¿Qué requisitos necesito para inscribirme?</h3>
                            <p className="text-gray-700">
                                Solo necesitas tener formación básica en el área de la salud o estar estudiando algún programa relacionado.
                                También aceptamos personas con experiencia práctica en el sector salud.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#003366] mb-3">¿El certificado tiene validez oficial?</h3>
                            <p className="text-gray-700">
                                Sí, todos nuestros cursos otorgan certificación oficial que es reconocida en el sector salud
                                y cumple con los estándares de calidad establecidos.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#003366] mb-3">¿Cuándo inician las próximas clases?</h3>
                            <p className="text-gray-700">
                                Tenemos convocatorias mensuales. Contáctanos para conocer las fechas exactas de inicio
                                y asegurar tu cupo en el curso de tu interés.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#003366] mb-3">¿Ofrecen facilidades de pago?</h3>
                            <p className="text-gray-700">
                                Sí, manejamos diferentes opciones de financiación. Puedes pagar en cuotas o solicitar
                                información sobre nuestros planes de financiamiento directo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-[#003366]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Desarrolla tus habilidades profesionales
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Nuestros cursos especializados te brindan las competencias necesarias para destacar en el sector salud
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20cursos%20disponibles"
                            className="inline-block bg-[#00B140] hover:bg-[#009935] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Solicitar información
                        </a>
                        <a
                            href="/contacto"
                            className="inline-block bg-white text-[#003366] hover:bg-blue-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Contactar asesor
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}