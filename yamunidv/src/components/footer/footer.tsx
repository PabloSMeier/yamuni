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
    <footer className="bottom-0 px-3 w-full h-[15vh] z-50 static bg-white flex justify-center items-center text-primary font-bold border-t-2 border-primaryB font-yk">
      <div className="max-w-4xl w-full grid grid-cols-3 items-center">
        <button onClick={() => scrollToSection("inicio")}>
          <Image src="/logo.jpg" alt="" width={140} height={140} />
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
          <Link href={"https://www.linkedin.com"} target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 100 100"
              fill="none"
              className="cursor-pointer hover:rotate-6 hover:scale-110 ease-in-out duration-300"
            >
              <path
                d="M87.5 77.0833C87.5 82.8375 82.8375 87.5 77.0833 87.5H22.9167C17.1646 87.5 12.5 82.8375 12.5 77.0833V22.9167C12.5 17.1625 17.1646 12.5 22.9167 12.5H77.0833C82.8375 12.5 87.5 17.1625 87.5 22.9167V77.0833Z"
                className="fill-primaryB"
              />
              <path
                opacity="0.05"
                d="M62.5 77.0833V56.0437C62.5 52.525 60.7938 50.4229 57.9334 50.4229C56.2354 50.4229 54.9875 51.3792 54.2271 53.2646C54.1917 53.3979 54.1417 53.9417 54.1625 55.5854L54.1667 77.0833H39.5834V37.5H54.1667V39.7104C56.2959 38.2417 58.9063 37.5 61.9542 37.5C71.4271 37.5 77.0813 43.9437 77.0813 54.7375L77.0834 77.0833H62.5ZM22.9167 77.0833V37.5H30.1188C25.9459 37.5 22.9167 34.4333 22.9167 30.2062C22.9167 25.9833 25.9959 22.9167 30.2375 22.9167C34.4292 22.9167 37.4146 25.8979 37.5 30.1646C37.5 34.4229 34.4188 37.5 30.1771 37.5H37.5V77.0833H22.9167Z"
                fill="black"
              />
              <path
                opacity="0.07"
                d="M63.5416 76.0417V56.0438C63.5416 51.9333 61.3937 49.3813 57.9333 49.3813C55.2354 49.3813 53.9021 51.2813 53.2604 52.875C53.0896 53.2896 53.1125 54.9354 53.1208 55.6375L53.125 76.0417H40.625V38.5417H53.125V41.9542C54.7812 40.2396 57.4479 38.5417 61.9541 38.5417C70.7729 38.5417 76.0396 44.5958 76.0396 54.7375L76.0416 76.0417H63.5416ZM23.9583 76.0417V38.5417H36.4583V76.0417H23.9583ZM30.1187 36.4583C26.55 36.4583 23.9583 33.8292 23.9583 30.2063C23.9583 26.5854 26.6 23.9583 30.2375 23.9583C33.8291 23.9583 36.3854 26.5188 36.4583 30.1854C36.4583 33.8292 33.8166 36.4583 30.1771 36.4583H30.1187Z"
                fill="black"
              />
              <path
                d="M25 39.5833H35.4167V75H25V39.5833ZM30.1771 35.4167H30.1187C27.0104 35.4167 25 33.1 25 30.2062C25 27.25 27.0729 25 30.2375 25C33.4062 25 35.3583 27.25 35.4167 30.2062C35.4167 33.0979 33.4062 35.4167 30.1771 35.4167ZM75 75H64.5833V56.0437C64.5833 51.4646 62.0312 48.3396 57.9333 48.3396C54.8062 48.3396 53.1146 50.4479 52.2937 52.4854C51.9937 53.2146 52.0833 55.2312 52.0833 56.25V75H41.6667V39.5833H52.0833V45.0333C53.5854 42.7083 55.9375 39.5833 61.9542 39.5833C69.4083 39.5833 74.9979 44.2708 74.9979 54.7375L75 75Z"
                fill="white"
              />
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
