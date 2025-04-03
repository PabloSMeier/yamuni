"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { showSuccessAlert } from "@/helpers/alerts/alert.helper";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("yamuni@gmail.com");
    showSuccessAlert(
      'Dirección "yamuni@gmail.com" de correo electrónico copiada al portapapeles.'
    );
  };
  return (
    <section
      id="inicio"
      className="h-[100vh] flex flex-col  justify-center items-center w-full space-y-4 space-x-4"
    >
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Carrusel de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative h-full"
                >
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capa oscura para mejorar visibilidad */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido sobre el carrusel */}
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido/a a Empresa Yamuni
          </h1>
          <motion.div
            className="flex flex-col space-y-3 items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => scrollToSection("contacto")}
              className="px-6 py-3  text-white font-semibold rounded-md hover:bg-transparent border-2 border-primaryB hover:text-white hover:bg-primaryB ease-in-out duration-300 flex flex-row items-center space-x-2"
            >
              <h2>
                ¿Querés contratar <br /> nuestros servicios?
              </h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${
                  isHovered
                    ? "stroke-white duration-300"
                    : "stroke-primaryB duration-300 -rotate-90"
                }`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M18 13l-6 6" />
                <path d="M6 13l6 6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Inicio;
