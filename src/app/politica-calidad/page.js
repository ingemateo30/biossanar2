"use client";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function PoliticaCalidad() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#002347] to-[#003366] text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                            <svg className="w-5 h-5 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium">Certificación ISO 9001:2015</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Calidad</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Nuestro compromiso con la excelencia educativa y el mejoramiento continuo
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* Texto de la Política */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border-l-4 border-[#00B140]">
                                <h2 className="text-2xl font-bold text-[#003366] mb-6 flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-[#00B140]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Nuestra Política de Calidad
                                </h2>
                                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        El compromiso de <strong className="text-[#003366]">FUNDACIÓN EDUCATIVA BIOSSANAR</strong>, es satisfacer los requerimientos de sus estudiantes, otorgando un servicio confiable, íntegro, oportuno y participativo, dirigido a mejorar continuamente.
                                    </p>
                                    <p>
                                        Para lograr el compromiso la fundación educativa aplica la norma <strong className="text-[#00B140]">ISO 9001:2015</strong> y <strong className="text-[#00B140]">NTC 5555</strong>, asegurando el mejoramiento continuo de los procesos y la minimización de riesgos a los que puedan estar expuestos, así como la concientización de la protección del medio ambiente y la evaluación de los cambios climáticos en el proceso formativo, para mantener el sistema Gestión de Calidad; proporcionando al estudiante una formación consistente a los requisitos y poder contar con su preferencia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Certificación ISO */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl text-center">
                                <h3 className="text-2xl font-bold text-[#003366] mb-6">Certificación ISO 9001:2015</h3>

                                {/* Imagen del certificado - reemplaza con tu certificado real */}
                                <div className="relative mb-6">
                                    <div className="bg-white p-6 rounded-xl shadow-lg">
                                        <Image
                                            src="/iso-certification.jpeg"
                                            alt="Certificación ISO 9001:2015 - Biossanar"
                                            width={400}
                                            height={500}
                                            className="w-full h-auto object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback en caso de que no exista la imagen */}
                                        <div className="hidden flex-col items-center justify-center h-96 bg-gradient-to-br from-[#003366] to-[#00B140] text-white rounded-lg">
                                            <svg className="w-20 h-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.3C16,16.9 15.4,17.5 14.8,17.5H9.2C8.6,17.5 8,16.9 8,16.3V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                                            </svg>
                                            <h3 className="text-2xl font-bold mb-2">ISO 9001:2015</h3>
                                            <p className="text-center text-blue-100">Sistema de Gestión de Calidad</p>
                                            <p className="text-sm text-blue-200 mt-2">Fundación Educativa Biossanar</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center space-x-2 text-[#00B140] font-semibold">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Certificación Vigente</span>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Nuestro Sistema de Gestión de Calidad está certificado bajo la norma internacional ISO 9001:2015
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Normas Aplicadas */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#003366] mb-4">Normas y Estándares Aplicados</h2>
                        <div className="w-20 h-1 bg-[#00B140] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* ISO 9001:2015 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#00B140]">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#00B140] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.3C16,16.9 15.4,17.5 14.8,17.5H9.2C8.6,17.5 8,16.9 8,16.3V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#003366]">ISO 9001:2015</h3>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Sistema de Gestión de Calidad que nos permite demostrar nuestra capacidad para proporcionar servicios educativos que satisfagan los requisitos del estudiante y los reglamentarios aplicables.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Enfoque basado en procesos
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Mejora continua
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Satisfacción del cliente
                                </li>
                            </ul>
                        </div>

                        {/* NTC 5555 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#003366]">
                            <div className="flex items-center mb-6">
                                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#003366]">NTC 5555</h3>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Norma Técnica Colombiana que establece los requisitos para el diseño, desarrollo e implementación de un sistema de gestión de calidad en instituciones de educación para el trabajo y desarrollo humano.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Gestión académica especializada
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Recursos educativos adecuados
                                </li>
                                <li className="flex items-center text-sm text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Evaluación y seguimiento
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-[#003366]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Nuestro Compromiso con la Excelencia
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        En Biossanar trabajamos día a día para mantener los más altos estándares de calidad en la educación para el trabajo y desarrollo humano
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contacto"
                            className="inline-block bg-[#00B140] hover:bg-[#009935] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Conoce nuestros programas
                        </a>
                        <a
                            href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20la%20certificación%20de%20calidad"
                            className="inline-block bg-white text-[#003366] hover:bg-blue-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            Solicitar información
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}