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
  const [selectedSet, setSelectedSet] = useState<string>("");
  const [currentSet, setCurrentSet] = useState<IImageSet[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [service, setService] = useState<IServicio["name"]>();

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

  const openBox = (name: IServicio["name"]) => {
    setIsBoxOpen(true);
    setService(name);
  };
  const closeBox = () => {
    setIsBoxOpen(false);
    setCurrentSet([]);
  };

  const showCarousel = (images: IImageSet[]) => {
    if (images.length > 0) {
      setCurrentSet(images);
      setCurrentIndex(0);
    }
  };

  const hideCarousel = () => {
    setCurrentSet([]);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentSet.length) % currentSet.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentSet.length);
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
        {isBoxOpen && (
          <div
            className="z-10 pt-8 fixed inset-0 flex items-center 
            justify-center bg-black bg-opacity-50"
            onClick={closeBox}
          >
            <div
              className="relative w-3/4 h-3/4 bg-white rounded-md border-2
               border-primaryB flex flex-col 
              items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeBox}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                X
              </button>
              <div className=" h-3/4">
                <h1></h1>
              </div>
              <div className=" h-1/4 flex space-x-4 mt-4">
                {trabajos
                  .filter((trabajo) => trabajo.workType === service)
                  .map((trabajo: ITrabajo) => {
                    return (
                      <button
                        key={trabajo.id}
                        onClick={() => showCarousel(trabajo.imgs)}
                        className="bg-gray-200 p-2 h-10"
                      >
                        {trabajo.name}
                      </button>
                    );
                  })}
              </div>
              {/* Carrusel */}
              {currentSet.length > 0 && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <button
                    onClick={hideCarousel}
                    className="absolute z-30 top-2 right-2 bg-white
                     text-primaryB border border-primaryB px-[6px] rounded"
                  >
                    X
                  </button>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 bg-gray-300 p-2 z-10"
                  >
                    ⬅
                  </button>
                  <Image
                    src={currentSet[currentIndex].src}
                    fill
                    className="object-cover"
                    alt="Imagen"
                  />
                  <button
                    onClick={nextImage}
                    className="absolute right-4 bg-gray-300 p-2 z-10"
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
