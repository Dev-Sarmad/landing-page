import React from "react";
import transaction from "../assets/transaction.png";
import trade from "../assets/trade.png";
import app from "../assets/mobileapp.png";
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
              <p className="">Increased purchasing power means up to 5 times more profit.</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
