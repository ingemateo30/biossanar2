"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      title: "Formación en Salud",
      subtitle: "Para un futuro brillante",
      description: "Programas diseñados para satisfacer las necesidades del sector de la salud con altos estándares de calidad.",
      image: "/hero1.jpeg",
      ctaText: "Explorar programas",
      ctaLink: "/programas",
    },
    {
      title: "Educación con Calidad",
      subtitle: "Profesionales comprometidos con el bienestar",
      description: "Nuestro equipo docente cuenta con amplia experiencia en el sector salud para una formación integral.",
      image: "/hero2.jpeg",
      ctaText: "Nosotros",
      ctaLink: "/nosotros",
    },
    {
      title: "Crecimiento Profesional",
      subtitle: "Descubre nuevas oportunidades en el sector salud",
      description: "Nuestros egresados se destacan por su excelente desempeño en el campo laboral de la salud.",
      image: "/hero3.jpeg",
      ctaText: "Ver convenios practicas",
      ctaLink: "/convenios",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Función para manejar el scroll hacia abajo
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002347]/30 via-transparent to-[#002347]/70 z-10"></div>

      {/* Shape divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,42.7C384,32,480,32,576,48C672,64,768,96,864,96C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !w-3 !h-3 !bg-white !opacity-70 hover:!opacity-100"></span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#003366]/40 mix-blend-multiply"></div>
            </div>

            {/* Content with visibility controlled by activeIndex */}
            <div className={`absolute inset-0 flex items-center z-20 px-6 md:px-20 lg:px-28 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
              <div className="max-w-4xl">
                <div className={`transform transition-transform duration-700 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                  <span className="inline-block py-1 px-3 rounded-full bg-[#00B140]/90 text-white text-sm font-semibold mb-4 backdrop-blur-sm">
                    {slide.subtitle}
                  </span>
                </div>

                <div className={`transform transition-transform duration-700 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                </div>

                <div className={`mt-6 transform transition-transform duration-700 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                  <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>

                <div className={`mt-10 flex flex-wrap gap-4 transform transition-transform duration-700 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '900ms' }}>
                  <Link
                    href={slide.ctaLink}
                    className="inline-block px-8 py-3.5 text-base font-medium rounded-full bg-[#00B140] text-white hover:bg-[#00a038] shadow-lg shadow-[#00B140]/20 transform hover:translate-y-[-2px] transition-all duration-300 pointer-events-auto"
                  >
                    {slide.ctaText}
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-block px-8 py-3.5 text-base font-medium rounded-full bg-white/90 backdrop-blur-sm text-[#003366] hover:bg-white transform hover:translate-y-[-2px] transition-all duration-300 pointer-events-auto"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev !text-white !opacity-70 hover:!opacity-100 !w-12 !h-12 !rounded-full !bg-[#003366]/30 backdrop-blur-sm hidden md:flex items-center justify-center transition-all duration-300 hover:!bg-[#003366]/50"></div>
      <div className="swiper-button-next !text-white !opacity-70 hover:!opacity-100 !w-12 !h-12 !rounded-full !bg-[#003366]/30 backdrop-blur-sm hidden md:flex items-center justify-center transition-all duration-300 hover:!bg-[#003366]/50"></div>

      {/* Scroll down indicator */}
      <div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        onClick={scrollDown}
      >
        <div className="animate-bounce flex flex-col items-center text-white/80 hover:text-white cursor-pointer transition-colors">
          <span className="text-sm font-medium mb-2">Desliza hacia abajo</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}