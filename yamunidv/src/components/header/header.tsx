"use client";
import Image from "next/image";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full h-[10vh] p-3 z-50 fixed bg-white text-primary font-bold border-b-2 border-primaryB font-yk flex items-center justify-center">
      <div className="w-full max-w-4xl flex items-center justify-between flex-row">
        <button onClick={() => scrollToSection("inicio")}>
          <Image src="/image.png" alt="" width={180} height={180} />
        </button>

        <div className="flex items-center justify-center sm:hidden sm:absolute">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none z-10 transition-all duration-300"
          >
            <label>
              <div
                className={`w-9 h-14 cursor-pointer flex flex-col items-center ${
                  isOpen
                    ? "justify-evenly  space-y-0"
                    : "justify-center space-y-1"
                }`}
              >
                <div
                  className={` ${
                    isOpen && "w-[80%] rotate-[45deg] "
                  } w-[75%] h-[3px] bg-primaryB rounded-md transition-all
                   duration-400 origin-left`}
                ></div>
                <div
                  className={`w-[75%] h-[3px] bg-primaryB rounded-md transition-all duration-400 origin-center ${
                    isOpen && "hidden"
                  }`}
                ></div>
                <div
                  className={`${isOpen && "w-[80%] rotate-[-45deg] "}
                  w-[75%] h-[3px] bg-primaryB rounded-md transition-all duration-400 origin-left 
                  `}
                ></div>
              </div>
            </label>
          </button>
          {isOpen ? (
            <div
              className={`h-[90vh] w-full flex flex-col items-center text-xl pt-6 space-y-6 bg-white absolute top-[10vh] right-0 z-10`}
            >
              <button
                onClick={() => scrollToSection("inicio")}
                className="flex flex-row items-center space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23b253"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <h1>Inicio</h1>
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="flex flex-row items-center space-x-1"
              >
                <h1>Servicios</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23b253"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                  <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
                  <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="flex flex-row items-center space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23b253"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <h1>Sobre nosotros</h1>
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="flex flex-row items-center space-x-1"
              >
                <h1>Contacto</h1>
                <svg
                  className="stroke-primaryB"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>

        <div className="sm:flex hidden absolute items-center sm:relative justify-center flex-row space-x-4">
          <button
            onClick={() => scrollToSection("inicio")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23b253"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <h1>Inicio</h1>
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23b253"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
              <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />
              <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            </svg>
            <h1>Servicios</h1>
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23b253"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <h1>Sobre nosotros</h1>
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              className="stroke-primaryB"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <h1>Contacto</h1>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
