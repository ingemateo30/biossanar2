"use client";

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useEffect, useState } from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />


      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 opacity-0 transform translate-y-4"
            style={{
              animation: 'fadeInUp 0.8s ease forwards',
              animationDelay: '0.2s'
            }}>
            <h2 className="text-3xl font-bold text-[#003366]">Nuestra Institución</h2>
            <div className="w-20 h-1 bg-[#00B140] mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#00B140] opacity-0 transform translate-y-8"
              style={{
                animation: 'fadeInUp 0.8s ease forwards',
                animationDelay: '0.4s'
              }}>
              <h3 className="text-xl font-bold text-[#003366] mb-4">Misión</h3>
              <p className="text-gray-700">
                La fundación Educativa Biossanar contribuye al mejoramiento de la calidad de vida de los estudiantes con su propuesta pedagógica en la medida en que los va dotando de las competencias necesarias para el desempeño laboral y para que asuman su proyecto de vida.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#00B140] opacity-0 transform translate-y-8"
              style={{
                animation: 'fadeInUp 0.8s ease forwards',
                animationDelay: '0.6s'
              }}>
              <h3 className="text-xl font-bold text-[#003366] mb-4">Visión</h3>
              <p className="text-gray-700">
                La Fundación educativa Biossanar forjará progresivamente en los próximos años un plantel sólido y próspero que tenga en cuenta los adelantos científicos, las nuevas técnicas en materia de autoevaluación y planeamiento y los procesos pedagógicos más convenientes, para brindarle a la comunidad educativa la mejor formación integral
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#00B140] opacity-0 transform translate-y-8"
              style={{
                animation: 'fadeInUp 0.8s ease forwards',
                animationDelay: '0.8s'
              }}>
              <h3 className="text-xl font-bold text-[#003366] mb-4">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Ética profesional</li>
                <li>• Compromiso social</li>
                <li>• Excelencia académica</li>
                <li>• Innovación</li>
                <li>• Responsabilidad</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Estilos CSS para las animaciones */}
        <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
      </section>


      {/* Sección de Programas Académicos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366]">Programas Académicos</h2>
            <div className="w-20 h-1 bg-[#00B140] mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Nuestros programas cuentan con reconocimiento oficial y están diseñados para responder a las necesidades del sector salud.
            </p>
          </div>

          {/* Sección de Tarjetas Centradas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
            {/* Tarjeta 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 relative">
                <img src="/enfermeria3.png" alt="Auxiliar de Enfermería" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-[#003366] text-white font-medium py-1 px-3 text-sm">
                  3 semestres
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003366] mb-3">Auxiliar de Enfermería</h3>
                <p className="text-gray-700 mb-4">
                  Forma parte del equipo de atención médica, con un enfoque integral en el cuidado del paciente.
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-[#00B140] mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Certificación Oficial
                  </span>
                  <span className="text-[#00B140] font-medium">
                    Jornadas: Diurna/Nocturna/fines de semana
                  </span>
                </div>
                <a
                  href="/programas/auxiliar-enfermeria"
                  className="block w-full bg-[#003366] hover:bg-[#002347] text-white font-medium py-2 px-4 rounded transition duration-300 text-center"
                >
                  Más información
                </a>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 relative">
                <img src="/saludoral.png" alt="Auxiliar de Salud Oral" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-[#003366] text-white font-medium py-1 px-3 text-sm">
                  3 semestres
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003366] mb-3">Auxiliar de Salud Oral</h3>
                <p className="text-gray-700 mb-4">
                  Aprende a asistir en procedimientos odontológicos y a gestionar la higiene bucal de pacientes.
                </p>
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-[#00B140] mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Certificación Oficial
                  </span>
                  <span className="text-[#00B140] font-medium">
                    Jornadas: Diurna
                  </span>
                </div>
                <a
                  href="/programas/auxiliar-salud-oral"
                  className="block w-full bg-[#003366] hover:bg-[#002347] text-white font-medium py-2 px-4 rounded transition duration-300 text-center"
                >
                  Más información
                </a>
              </div>
            </div>
          </div>

          {/* Botón centrado */}
          <div className="text-center mt-10">
            <button className="bg-[#00B140] hover:bg-[#009935] text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center">
              Conocer más
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Infraestructura con animaciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="text-center mb-12 opacity-0 transform translate-y-4"
            style={{
              animation: 'fadeInUp 0.8s ease forwards',
              animationDelay: '0.2s'
            }}
          >
            <h2 className="text-3xl font-bold text-[#003366]">Nuestra Infraestructura</h2>
            <div className="w-20 h-1 bg-[#00B140] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Columna de texto */}
            <div>
              <h3
                className="text-2xl font-bold text-[#003366] mb-4 opacity-0 transform translate-y-4"
                style={{
                  animation: 'fadeInUp 0.8s ease forwards',
                  animationDelay: '0.4s'
                }}
              >
                Instalaciones diseñadas para el aprendizaje
              </h3>
              <p
                className="text-gray-700 mb-6 opacity-0 transform translate-y-4"
                style={{
                  animation: 'fadeInUp 0.8s ease forwards',
                  animationDelay: '0.5s'
                }}
              >
                Contamos con modernas instalaciones especialmente diseñadas para brindar una formación práctica de calidad, simulando entornos reales del sector salud.
              </p>

              <div className="space-y-4">
                {/* Primer ítem */}
                <div
                  className="flex items-start opacity-0 transform translate-x-4"
                  style={{
                    animation: 'fadeInLeft 0.7s ease forwards',
                    animationDelay: '0.6s'
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#003366]">Laboratorios especializados</h4>
                    <p className="text-gray-600">Equipados con tecnología de última generación.</p>
                  </div>
                </div>

                {/* Segundo ítem */}
                <div
                  className="flex items-start opacity-0 transform translate-x-4"
                  style={{
                    animation: 'fadeInLeft 0.7s ease forwards',
                    animationDelay: '0.8s'
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#003366]">Sala informatica</h4>
                    <p className="text-gray-600">Para manejo tecnologico de calidad.</p>
                  </div>
                </div>

                {/* Tercer ítem */}
                <div
                  className="flex items-start opacity-0 transform translate-x-4"
                  style={{
                    animation: 'fadeInLeft 0.7s ease forwards',
                    animationDelay: '1s'
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#00B140]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#003366]">Biblioteca especializada</h4>
                    <p className="text-gray-600">Con recursos físicos y digitales actualizados.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna de imágenes */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/sede1.jpeg"
                alt="Laboratorio"
                className="rounded-lg shadow-md opacity-0"
                style={{
                  animation: 'zoomIn 0.8s ease forwards',
                  animationDelay: '0.7s'
                }}
              />
              <img
                src="/sede4.jpeg"
                alt="Simulador"
                className="rounded-lg shadow-md opacity-0"
                style={{
                  animation: 'zoomIn 0.8s ease forwards',
                  animationDelay: '0.9s'
                }}
              />
              <img
                src="/sede3.jpeg"
                alt="Biblioteca"
                className="rounded-lg shadow-md opacity-0"
                style={{
                  animation: 'zoomIn 0.8s ease forwards',
                  animationDelay: '1.1s'
                }}
              />
              <img
                src="/sede5.jpeg"
                alt="Aula"
                className="rounded-lg shadow-md opacity-0"
                style={{
                  animation: 'zoomIn 0.8s ease forwards',
                  animationDelay: '1.3s'
                }}
              />
            </div>
          </div>
        </div>

                {/* Definición de las animaciones */}
                <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes fadeInLeft {
              from {
                opacity: 0;
                transform: translateX(20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
      </section>

      {/* Sección de Convenios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366]">Convenios Institucionales</h2>
            <div className="w-20 h-1 bg-[#00B140] mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Contamos con convenios para prácticas profesionales con las principales instituciones de salud de la región
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-1 rounded-lg shadow-lg flex items-center justify-center h-64">
              <img
                src="/sangil.png"
                alt="Hospital Regional de Sangil"
                className="w-11/12 h-64 object-contain"
              />
            </div>
            <div className="bg-white p-1 rounded-lg shadow-lg flex items-center justify-center h-64">
              <img
                src="esp.png"
                alt="espsalud ips"
                className="w-11/12 h-56 object-contain"
              />
            </div>
            <div className="bg-white p-1 rounded-lg shadow-lg flex items-center justify-center h-64">
              <img
                src="/hea.png"
                alt="heath"
                className="w-11/12 h-56 object-contain"
              />
            </div>
            <div className="bg-white p-1 rounded-lg shadow-lg flex items-center justify-center h-64">
              <img
                src="/bios.png"
                alt="Ibiossanar ips"
                className="w-11/12 h-56 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Call-to-Action */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Inicia tu futuro profesional con nosotros</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Inscripciones abiertas para todos nuestros programas académicos. Da el primer paso hacia tu carrera en el sector salud.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas"
              className="inline-block bg-[#00B140] hover:bg-[#009935] text-white font-medium py-3 px-8 rounded-lg transition duration-300 text-center"
            >
              Inscríbete ahora
            </a>
            <a
              href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas"
              className="inline-block bg-white text-[#003366] hover:bg-blue-100 font-medium py-3 px-8 rounded-lg transition duration-300 text-center ml-4"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Contáctanos</h2>
              <div className="w-20 h-1 bg-[#00B140] mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-[#003366] rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#003366]">Dirección</h4>
                    <p className="text-gray-700"> cra 9 #10-33 piso 5 edificio biossanar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-[#003366] rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#003366]">Teléfono</h4>
                    <p className="text-gray-700">+57 3246723624</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-[#003366] rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#003366]">Correo Electrónico</h4>
                    <p className="text-gray-700">fundacioneducativabiossanar@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-[#003366] rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#003366]">Horario de Atención</h4>
                    <p className="text-gray-700">Lunes a Viernes: 7:00am - 05:30pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Escríbenos</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    Nombre completo
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    id="name"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                    Correo electrónico
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    id="email"
                    type="email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                    Teléfono
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    id="phone"
                    type="tel"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="program">
                    Programa de interés
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    id="program"
                  >
                    <option value="">Selecciona un programa</option>
                    <option value="enfermeria">Auxiliar de Enfermería</option>
                    <option value="salud-oral">Auxiliar de Salud Oral</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  className="w-full bg-[#003366] hover:bg-[#002347] text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                  type="submit"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
        {/* Botón de WhatsApp */}
        <FloatingWhatsApp
          phoneNumber="+573246723624"
          accountName="Biossanar"
          avatar="/biossanar2.png"
          darkMode={true}
          statusMessage="Normalmente responde en 1 hora"
          chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
          placeholder="Escribe un mensaje"
          notification={true}
          chatboxHeight={340}
        />
      </div>
      <div className="fixed bottom-5 left-0 z-50 flex flex-col">
        <a
          href="https://wa.me/573246723624?text=Hola%20quiero%20más%20información%20sobre%20los%20programas"
          className="group flex items-center bg-[#28a745] text-white p-3 rounded-r-lg shadow-md transition-all duration-300 hover:pl-6"
        >
          <svg className="w-5 h-5 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 14l6-8H6l6 8z"></path>
          </svg>
          <span className="opacity-0 w-0 text-white text-sm font-semibold ml-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-auto group-hover:ml-2">
            Estudia Ahora
          </span>
        </a>
      </div>


    </div>
  );
}