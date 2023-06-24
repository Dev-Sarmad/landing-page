import React from "react";
import transaction from "../assets/transaction.png";
import trade from "../assets/trade.png";
import app from "../assets/mobileapp.png";
import google from "../assets/google.png";
import apple from "../assets/Apple-icon.png";
import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";
function Features() {
  return (
    <>
      <div className="container mx-auto mt-28 flex flex-col spaxex-x-0 space-y-4">
        <div className=" flex flex-col md:flex-row   ">
          <div>
            <h1 className="text-blacklight text-4xl md:text-5xl font-bold text-left">
              Best way to buy
              <img src={transaction} className="w-8 inline" alt="" /> <br />
            </h1>
            <h1 className="text-blacklight text-4xl md:text-5xl font-bold ml-32 mt-5 px-3">
              trade <img src={trade} alt="" className="inline" /> crypto
            </h1>
          </div>
        </div>
        <div className="flex flex-col space-y-3 space-x-0  md:flex-row md:space-x-3 md:space-y-0 items-center justify-around">
          <div>
            <img src={app} alt="" className="" />
          </div>
          <div className="flex flex-col space-y-3 space-x-0">
            <div className="text-left text-detaillight">
              <p>
                The world fastest crypto matching engine built by traders of
                traders.
              </p>
              <p className="">
                Increased purchasing power means up to 5 times more profit.
              </p>
            </div>
            <div className="flex space-x-5 space-y-0 ">
              <button className="flex items-center bg-blacklight text-white px-3 py-2 rounded-md font-bold">
                <img src={google} alt="" />
                Get app from
                <br /> playstore
              </button>
              <button className="flex  items-center  bg-blacklight text-white px-3 py-2  rounded-md font-bold">
                <img src={apple} alt="" />
                Get app from <br />
                App Store
              </button>
            </div>
            <div className="flex flex-col space-y-3 space-x-0 md:flex-row md:space-x-3 md:space-y-0 items-center justify-evenly">
              <div className="border-2 border-blacklight p-3 rounded-xl ">
                <img src={bitcoin} alt="" />
                <h1>Bitcoin BTC</h1>
                <h3>$1098345 &nbsp; +2.234% </h3>
              </div>
              <div className="border-2 border-blacklight p-3 rounded-xl ">
                <img src={ethereum} alt="" />
                <h1>Ethereum ETC</h1>
                <h3>$17458345 &nbsp; +0.234% </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
