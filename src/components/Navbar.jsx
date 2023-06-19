import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* main */}
      <div className="container mx-auto flex justify-between items-center mt-5">
        {/* logo and Nav-items */}
        <div className="flex justify-start items-center">
          <img
            src={logo}
            className={`w-[50px] ${isOpen ? "hidden" : "block"}`}
            alt=""
          />

          {/* navitems */}

          <div className="md:flex space-x-7 text-detaillight space-y-0 mx-7 hidden ">
            <a href="">Wallet</a>
            <a href="">Exchange</a>
            <a href="">Explore</a>
            <a href="">Institutional</a>
          </div>
          <div
            className={`flex flex-col space-x-0 space-y-3 mt-5 px-5  ${
              isOpen ? "block" : "hidden"
            } md:hidden `}
          >
            <a href="">Explore</a>
            <a href="">Exchange</a>
            <a href="">Institutional</a>
            <a href="">Wallet</a>
            <div className="flex flex-col space-x-0 space-y-3">
              <button className="mr-7">Signup</button>
              <button className="mr-7">Login</button>
            </div>
          </div>
        </div>
        <div className="md:flex space-x-3 hidden">
          <button className="text-blacklight font-medium">Login</button>
          <button className="text-blacklight rounded-full border-2 px-3 border-blacklight font-medium">SignUp</button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={hamburger}
            alt=""
            className={`${isOpen ? "hidden" : "block"} md:hidden  h-6`}
          />
          <img
            src={close}
            alt=""
            className={`${isOpen ? "block" : "hidden"} md:hidden h-6`}
          />
        </button>
      </div>
    </>
  );
}

export default Navbar;
