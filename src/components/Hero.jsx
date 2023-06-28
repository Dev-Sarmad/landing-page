import React from "react";
import transaction from "../assets/transaction.png";
import heroimage from "../assets/hero_image.png";
import {motion} from "framer-motion"
function Hero() {
  return (
    <>
      <div className="container mx-auto max-w-6xl mt-10 flex flex-col space-x-0 space-y-5">
        <div className=" flex flex-col md:flex-row px-3 md:items-center  justify-evenly">
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale:1 , x: 30 }}
            transition={{ duration: 1.5 }}>
            <h1 className="text-blacklight text-4xl md:text-5xl font-bold">
              The Best Lightning <br /> cryptyo
              <img
                src={transaction}
                className="w-8 inline"
                alt=""
              /> trading{" "}
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale:1 , x: 30 }}
            transition={{ duration: 1.5 }}>
            <p className="text-detaillight mt-3">
              Trusted by millions since 2010 with <br /> over $1 Trillion in
              crypto transactions.
            </p>
            <div className="flex space-x-3 space-y-0 mt-3 ">
              <button className="text-white rounded-lg px-4  bg-blacklight">
                Get Started
              </button>
              <button className="text-blacklight text-xl">Explore</button>
            </div>
          </motion.div>
        </div>
        <div className="items-center rounded-lg border-blacklight border-2 flex flex-col mx-auto container md:flex-row  md:justify-between">
          <div className="   ">
            <h1 className="px-5 text-blacklight text-2xl font-medium ">
              The Most Trusted <br /> Crypto Platform
            </h1>
            <p className="text-detaillight px-5">
              Blockchain is the easiest place to buy and sell cryptocurrency.
              <br /> Sign up and get started today.
            </p>
            <button className="bg-blacklight text-white mt-3 p-3 ml-5 ">Get Started Now</button>
          </div>
          <div className="">
            <img src={heroimage} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
