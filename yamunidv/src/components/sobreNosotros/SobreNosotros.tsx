/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SobreNosotros = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="proyectos"
      className={`min-h-[100vh] w-[100vw] flex flex-col space-y-10 items-center py-[12vh]`}
    >
      <motion.h1
        className={`text-3xl transition-all  duration-1000 font-bold ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
      >
        SOBRE NOSOTROS
      </motion.h1>

      <motion.div
        className={`flex flex-col w-full max-w-4xl transition-all delay-300 duration-1000 space-y-10 items-center ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        <div className="max-w-[90vw] grid md:grid-cols-2 justify-center gap-6 m-0 text-white">
          <div className="w-full min-w-[80vw] sm:min-w-[35vw] xl:min-w-[20vw] max-w-[90vw] flex items-center justify-center bg-gradient-to-br from-accent2 to-primaryB h-[40vh] hover:border-4 hover:border-white duration-75 transition-all rounded-md">
            <h2 className="text-2xl font-bold">Misión</h2>
          </div>
          <div className="w-full min-w-[80vw] sm:min-w-[35vw] xl:min-w-[20vw] max-w-[90vw] flex items-center justify-center bg-gradient-to-br from-accent2 to-primaryB h-[40vh] hover:border-4 hover:border-white duration-75 transition-all rounded-md">
            <h2 className="text-2xl font-bold">Visión</h2>
          </div>
          <div className="w-full min-w-[80vw] sm:min-w-[35vw] xl:min-w-[20vw] max-w-[90vw] flex items-center justify-center bg-gradient-to-br from-accent2 to-primaryB h-[40vh] hover:border-4 hover:border-white duration-75 transition-all rounded-md">
            <h2 className="text-2xl font-bold">Visión</h2>
          </div>
          <div className="w-full min-w-[80vw] sm:min-w-[35vw] xl:min-w-[20vw] max-w-[90vw] flex items-center justify-center bg-gradient-to-br from-accent2 to-primaryB h-[40vh] hover:border-4 hover:border-white duration-75 transition-all rounded-md">
            <h2 className="text-2xl font-bold">Misión</h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default SobreNosotros;
