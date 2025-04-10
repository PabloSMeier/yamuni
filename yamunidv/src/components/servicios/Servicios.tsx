/* eslint-disable @next/next/no-img-element */
"use client";

import {
  IImageSet,
  IServicio,
  ITrabajo,
  servicios,
  trabajos,
} from "@/helpers/servicios/servicios.helper";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TarjetaServicios from "./TarjetaServicios";

const Servicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<IServicio | null>(
    null
  );
  const [selectedTrabajo, setSelectedTrabajo] = useState<ITrabajo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isBoxOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isBoxOpen]);

  const openBox = (servicio: IServicio) => {
    setSelectedService(servicio);
    setIsBoxOpen(true);
    setSelectedTrabajo(null);
  };
  const closeBox = () => {
    setIsBoxOpen(false);
    setSelectedService(null);
    setSelectedTrabajo(null);
  };

  const prevImage = () => {
    if (selectedTrabajo) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + selectedTrabajo.imgs.length) % selectedTrabajo.imgs.length
      );
    }
  };

  const nextImage = () => {
    if (selectedTrabajo) {
      setCurrentIndex((prev) => (prev + 1) % selectedTrabajo.imgs.length);
    }
  };

  return (
    <section
      id="servicios"
      className="min-h-[100vh] py-[17vh] w-[100vw] bg-white flex flex-col space-y-10 items-center justify-center"
    >
      <motion.h1
        className={`text-3xl transition-all duration-1000 font-bold ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        SERVICIOS
      </motion.h1>

      <motion.div
        className={`flex transition-all delay-300 duration-1000 flex-col space-y-4 ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        <div className="max-w-4xl flex flex-wrap justify-center gap-6">
          {servicios.map((servicio: IServicio) => {
            return (
              <TarjetaServicios
                key={servicio.id}
                servicio={servicio}
                onOpen={openBox}
              />
            );
          })}
        </div>
        {/* Cuadro flotante */}
        {isBoxOpen && selectedService && (
          <div
            className="z-10 pt-8 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeBox}
          >
            <div
              className="relative w-3/4 h-3/4 bg-white rounded-md border-2 border-primaryB flex flex-col items-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeBox}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                X
              </button>

              {/* Datos del servicio */}
              <div className="h-1/4 px-4 text-center space-y-2">
                <h2 className="text-2xl font-bold text-primaryB">
                  {selectedService.name}
                </h2>
                <p className="text-gray-600">{selectedService.description}</p>
              </div>

              {/* Trabajos relacionados */}
              <div className="h-1/4 flex flex-wrap justify-center gap-2 overflow-auto">
                {trabajos
                  .filter(
                    (trabajo) => trabajo.workType === selectedService.name
                  )
                  .map((trabajo) => (
                    <button
                      key={trabajo.id}
                      onClick={() => {
                        setSelectedTrabajo(trabajo);
                        setCurrentIndex(0);
                      }}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      {trabajo.name}
                    </button>
                  ))}
              </div>

              {/* Carrusel */}
              {selectedTrabajo && (
                <div className="relative flex-1 w-full flex items-center justify-center">
                  <button
                    onClick={() => setSelectedTrabajo(null)}
                    className="absolute z-30 top-2 right-2 bg-white text-primaryB border border-primaryB px-[6px] rounded"
                  >
                    X
                  </button>

                  <button
                    onClick={prevImage}
                    className="absolute left-4 bg-gray-300 p-2 z-10 rounded"
                  >
                    ⬅
                  </button>

                  <Image
                    src={selectedTrabajo.imgs[currentIndex].src}
                    fill
                    className="object-contain"
                    alt="Imagen"
                  />

                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-gray-300 p-2 z-10 rounded"
                  >
                    ➡
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
export default Servicios;
