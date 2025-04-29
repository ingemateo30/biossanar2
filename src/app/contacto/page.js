"use client";


import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    contactPreference: 'email',
    howDidYouHear: []
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          howDidYouHear: [...prev.howDidYouHear, value]
        };
      } else {
        return {
          ...prev,
          howDidYouHear: prev.howDidYouHear.filter(item => item !== value)
        };
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a backend
    console.log(formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: '',
        contactPreference: 'email',
        howDidYouHear: []
      });
    }, 5000);
  };
  
  return (
    <>
        <Navbar />
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Info */}
        <div className="bg-gradient-to-br from-[#002347] to-[#003366] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B140] opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00B140] opacity-10 rounded-full transform -translate-x-20 translate-y-20"></div>
          
          <h2 className="text-3xl font-bold mb-6 relative">Comunícate con Biossanar</h2>
          <p className="text-gray-200 mb-8 max-w-md relative">
            ¿Tienes preguntas sobre nuestros programas, admisiones o servicios? Estamos aquí para ayudarte en cada paso de tu formación profesional.
          </p>
          
          <div className="space-y-6 relative">
            <div className="flex items-start">
              <div className="bg-[#00B140] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dirección</h3>
                <p className="text-gray-300">Carrera 9 10 39,san gil,santander</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#00B140] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Teléfono</h3>
                <p className="text-gray-300">+57 311 5716504</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#00B140] p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-300">fundacioneducativabiossanar@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative">
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-green bg-opacity-10 hover:bg-[#00B140] p-3 rounded-full transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="#" className="bg-green bg-opacity-10 hover:bg-[#00B140] p-3 rounded-full transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="bg-green bg-opacity-10 hover:bg-[#00B140] p-3 rounded-full transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="#" className="bg-green bg-opacity-10 hover:bg-[#00B140] p-3 rounded-full transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="p-8 md:p-12">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="bg-green-100 text-green-800 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-600 mb-6">Gracias por contactarnos. Nos comunicaremos contigo lo más pronto posible.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-[#003366] hover:bg-[#002347] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B140] focus:border-[#00B140] transition duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B140] focus:border-[#00B140] transition duration-200"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B140] focus:border-[#00B140] transition duration-200"
                    placeholder="(+57) XXX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Programa de interés</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B140] focus:border-[#00B140] transition duration-200"
                  >
                    <option value="">Seleccionar programa</option>
                    <option value="enfermeria">Auxiliar de Enfermería</option>
                    <option value="salud_oral">Auxiliar en Salud Oral</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00B140] focus:border-[#00B140] transition duration-200"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">Preferencia de contacto</p>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="email"
                      checked={formData.contactPreference === 'email'}
                      onChange={handleChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="phone"
                      checked={formData.contactPreference === 'phone'}
                      onChange={handleChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">Teléfono</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactPreference"
                      value="whatsapp"
                      checked={formData.contactPreference === 'whatsapp'}
                      onChange={handleChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">WhatsApp</span>
                  </label>
                </div>
              </div>
              
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">¿Cómo te enteraste de nosotros?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="howDidYouHear"
                      value="search"
                      checked={formData.howDidYouHear.includes('search')}
                      onChange={handleCheckboxChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">Motores de búsqueda</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="howDidYouHear"
                      value="social"
                      checked={formData.howDidYouHear.includes('social')}
                      onChange={handleCheckboxChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">Redes sociales</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="howDidYouHear"
                      value="friend"
                      checked={formData.howDidYouHear.includes('friend')}
                      onChange={handleCheckboxChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">Recomendación</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="howDidYouHear"
                      value="event"
                      checked={formData.howDidYouHear.includes('event')}
                      onChange={handleCheckboxChange}
                      className="text-[#00B140] focus:ring-[#00B140]"
                    />
                    <span className="ml-2">Evento/Feria</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#003366] to-[#00B140] hover:from-[#002347] hover:to-[#009935] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                * Campos requeridos. Al enviar este formulario, aceptas nuestra 
                <a href="#" className="text-[#003366] hover:text-[#00B140]"> política de privacidad</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactForm;
