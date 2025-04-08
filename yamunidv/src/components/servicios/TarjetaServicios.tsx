" use client";

import { IImageSet, IServicio } from "@/helpers/servicios/servicios.helper";
import { useState } from "react";

type PropsServicio = {
  servicio: IServicio;
  onOpen: (name: IServicio["name"]) => void;
};
const TarjetaServicios = ({ servicio, onOpen }: PropsServicio) => {
  return (
    <div
      key={servicio.id}
      className="group relative h-96 w-72 [perspective:1000px]"
    >
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-primaryB to-accent2 p-6 text-white [backface-visibility:hidden] items-center flex justify-center">
          <div className="text-3xl font-bold">{servicio.name}</div>
        </div>
        <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-accent2 to-primaryB p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4">
              {servicio.description}
            </div>
            <div className="flex-grow">
              <p className="text-lg">....</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <button
                onClick={() => onOpen(servicio.name)}
                className="px-4 py-2 bg-white text-accent2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Saber más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarjetaServicios;
