import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="container mx-auto mt-24 max-w-xs text-center">
        <div className="flex space-x-3 items-center justify-center">
          <img src={logo} alt="" className="w-10" />
          <h1 className="text-blacklight text-2xl md:text-3xl font-bold">
            Sarmad Crypto traders
          </h1>
        </div>
        <p className="mt-4 text-detaillight">
          For furlhor dolails soe our Oisctosurcs. By using this website you
          accept our Terms and conditions and Privacy Policy..
        </p>
        <p className="mt-3 font-bold text-detaillight">
          Copyright 2023 by Sarmad Crypto LLC.
        </p>
        <ul className="flex flex-col space-x-0 mt-3 space-y-3 md:flex-row md:space-x-3 md:space-y-0 items-center justify-center">
          <li className="rounded-md cursor-pointer hover:text-white border-b-2 border-blacklight px-3 font-semibold hover:bg-violet-600 duration-300 shadow-lg shadow-black">
            Wallet{" "}
          </li>
          <li className="rounded-md cursor-pointer hover:text-white border-b-2 border-blacklight px-3 font-semibold hover:bg-violet-600 duration-300 shadow-lg shadow-black">
            Explore{" "}
          </li>
          <li className="rounded-md cursor-pointer hover:text-white border-b-2 border-blacklight px-3 font-semibold hover:bg-violet-600 duration-300 shadow-lg shadow-black">
            Exchange{" "}
          </li>
          <li className="rounded-md cursor-pointer hover:text-white border-b-2 border-blacklight px-3 font-semibold hover:bg-violet-600 duration-300 shadow-lg shadow-black">
            Products{" "}
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
