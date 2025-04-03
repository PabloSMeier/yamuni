"use client";
/* eslint-disable @next/next/no-img-element */
import Contacto from "../contacto/Contacto";
import Inicio from "../Inicio/Inicio";
import Servicios from "../servicios/Servicios";
import SobreNosotros from "../sobreNosotros/SobreNosotros";

export const HomeContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <Inicio />
      <Servicios />
      <SobreNosotros />
      <Contacto />
    </div>
  );
};
export default HomeContainer;
