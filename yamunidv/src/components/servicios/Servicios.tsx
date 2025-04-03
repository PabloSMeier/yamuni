/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Servicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="servicios"
      className="min-h-[100vh] py-[12vh] w-[100vw] bg-white flex flex-col space-y-10 items-center justify-center"
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
