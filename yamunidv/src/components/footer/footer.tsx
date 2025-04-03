"use client";
import { showSuccessAlert } from "@/helpers/alerts/alert.helper";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
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
    <footer className="bottom-0  w-full h-[10vh] z-50 static bg-white flex justify-center items-center text-primary font-bold border-t-2 border-primaryB font-yk">
      <div className="max-w-4xl w-full grid grid-cols-3 items-center">
        <button onClick={() => scrollToSection("inicio")}>
          <Image src="/image.png" alt="" width={180} height={180} />
        </button>
        <div></div>
        <div className="flex flex-row space-x-2 justify-end">
          <Link href={"https://www.instagram.com/"} target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-primaryB stroke-2 cursor-pointer hover:rotate-6 hover:scale-110 ease-in-out duration-300"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </Link>
          <div className="relative group">
            <svg
              onClick={copyToClipboard}
              aria-label="Copiar dirección de correo electrónico"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 100 100"
              fill="none"
              className="cursor-pointer hover:rotate-6 hover:scale-110 ease-in-out duration-300"
            >
              <path
                d="M11.4584 84.375H88.5417C92.5688 84.375 95.8334 81.1104 95.8334 77.0833V22.9167C95.8334 18.8896 92.5688 15.625 88.5417 15.625H11.4584C7.43127 15.625 4.16669 18.8896 4.16669 22.9167V77.0833C4.16669 81.1104 7.43127 84.375 11.4584 84.375Z"
                className="fill-white"
              />
              <path
                d="M54.1667 84.375H88.5417C92.5688 84.375 95.8334 81.1104 95.8334 77.0833V22.9167C95.8334 18.8896 92.5688 15.625 88.5417 15.625H11.4584C7.43127 15.625 4.16669 18.8896 4.16669 22.9167L54.1667 84.375Z"
                className="fill-white"
              />
              <path
                d="M14.0521 84.375H88.5416C92.5687 84.375 95.8333 81.1104 95.8333 77.0833V23.9583L14.0521 84.375Z"
                className="fill-white"
              />
              <path
                d="M53.6354 84.375H88.5417C92.5688 84.375 95.8333 81.1104 95.8333 77.0833V23.9583L39.1063 65.8667L53.6354 84.375Z"
                className="fill-white"
              />
              <path
                d="M88.5417 19.7917H11.4584C7.43127 19.7917 4.16669 18.8896 4.16669 22.9167V77.0833C4.16669 81.1104 7.43127 84.375 11.4584 84.375H14.5834V25H85.4167V84.375H88.5417C92.5688 84.375 95.8334 81.1104 95.8334 77.0833V22.9167C95.8334 18.8896 92.5688 19.7917 88.5417 19.7917Z"
                className="fill-primaryB"
              />
              <path
                d="M88.5417 15.625H50H11.4584C7.43127 15.625 4.16669 18.825 4.16669 22.9167C4.16669 25.4292 7.32919 27.6208 7.32919 27.6208L50 57.825L92.6708 27.6229C92.6708 27.6229 95.8334 25.4292 95.8334 22.9188C95.8334 18.825 92.5688 15.625 88.5417 15.625Z"
                className="fill-white"
              />
              <path
                d="M90.0958 15.7958L50 43.75L9.90419 15.7958C6.62502 16.4979 4.16669 19.3688 4.16669 22.9167C4.16669 25.4292 7.32919 27.6208 7.32919 27.6208L50 57.825L92.6708 27.6229C92.6708 27.6229 95.8334 25.4292 95.8334 22.9188C95.8334 19.3688 93.375 16.4979 90.0958 15.7958Z"
                className="fill-primaryB"
              />
            </svg>
            <span className="absolute left-0 top-full mt-2 hidden w-max bg-gray-800 text-white text-xs rounded py-1 px-2 group-hover:block">
              <h1>Copiar dirección de correo electrónico</h1>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
