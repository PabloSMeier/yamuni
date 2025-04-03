/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type ImageSets = {
  [key: string]: string[];
};

const imageSets: ImageSets = {
  set1: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
  set2: ["/img2.jpg", "/img1.jpg", "/img3.jpg"],
};
const Servicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [selectedSet, setSelectedSet] = useState<string>("");
  const [currentSet, setCurrentSet] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openBox = () => setIsBoxOpen(true);
  const closeBox = () => {
    setIsBoxOpen(false);
    setCurrentSet([]);
  };

  const showCarousel = (set: string) => {
    if (imageSets[set]) {
      setCurrentSet(imageSets[set]);
      setCurrentIndex(0);
    }
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

      {/* Cuadro flotante */}
      {isBoxOpen && (
        <div
          className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeBox}
        >
          <div
            className="relative w-3/4 h-3/4 bg-white shadow-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeBox}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              X
            </button>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => showCarousel("set1")}
                className="bg-gray-200 p-2"
              >
                Conjunto 1
              </button>
              <button
                onClick={() => showCarousel("set2")}
                className="bg-gray-200 p-2"
              >
                Conjunto 2
              </button>
            </div>
            {/* Carrusel */}
            {currentSet.length > 0 && (
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  onClick={prevImage}
                  className="absolute left-4 bg-gray-300 p-2 z-10"
                >
                  ⬅
                </button>
                <Image
                  src={currentSet[currentIndex]}
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

      <motion.div
        className={`flex transition-all delay-300 duration-1000 flex-col space-y-4 ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        <div className="max-w-4xl flex flex-wrap justify-center gap-6">
          <div className="group relative h-96 w-72 [perspective:1000px]">
            <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-primaryB to-accent2 p-6 text-white [backface-visibility:hidden] items-center flex justify-center">
                <div className="text-3xl font-bold">
                  Pintura de interiores y exteriores
                </div>
              </div>

              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-accent2 to-primaryB p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="text-2xl font-bold mb-4">Detalles</div>
                  <div className="flex-grow">
                    <p className="text-lg">....</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <button
                      onClick={openBox}
                      className="px-4 py-2 bg-white text-accent2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Saber más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-72 [perspective:1000px]">
            <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-primaryB to-accent2 p-6 text-white [backface-visibility:hidden] items-center flex justify-center">
                <div className="text-3xl font-bold">
                  Pintura de interiores y exteriores
                </div>
              </div>

              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-accent2 to-primaryB p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="text-2xl font-bold mb-4">Detalles</div>
                  <div className="flex-grow">
                    <p className="text-lg">....</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <button className="px-4 py-2 bg-white text-accent2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Saber más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-72 [perspective:1000px]">
            <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-primaryB to-accent2 p-6 text-white [backface-visibility:hidden] items-center flex justify-center">
                <div className="text-3xl font-bold">
                  Pintura de interiores y exteriores
                </div>
              </div>

              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-accent2 to-primaryB p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="text-2xl font-bold mb-4">Detalles</div>
                  <div className="flex-grow">
                    <p className="text-lg">....</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <button className="px-4 py-2 bg-white text-accent2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Saber más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 w-72 [perspective:1000px]">
            <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-primaryB to-accent2 p-6 text-white [backface-visibility:hidden] items-center flex justify-center">
                <div className="text-3xl font-bold">
                  Pintura de interiores y exteriores
                </div>
              </div>

              <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-accent2 to-primaryB p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col h-full">
                  <div className="text-2xl font-bold mb-4">Detalles</div>
                  <div className="flex-grow">
                    <p className="text-lg">....</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <button className="px-4 py-2 bg-white text-accent2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Saber más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Servicios;
