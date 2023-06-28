import transaction from "../assets/transaction.png";
import trade from "../assets/trade.png";
import app from "../assets/mobileapp.png";
import appfeature from "../assets/mobileappfeature.png";
import google from "../assets/google.png";
import bit from "../assets/bitcoin.png";
import apple from "../assets/Apple-icon.png";
import money from "../assets/money.png";
import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";
import { motion } from "framer-motion";

function Features() {
  
  
  return (
    <>
      <div className="container mx-auto mt-24 flex flex-col spaxex-x-0 space-y-4 relative">
        <div  className=" flex flex-col md:flex-row   ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale:1 , x: 30 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-blacklight text-4xl md:text-5xl font-bold text-left">
              Best way to buy
              <img src={transaction} className="w-8 inline" alt="" /> <br />
            </h1>
            <h1 className="text-blacklight text-4xl md:text-5xl font-bold ml-32 mt-5 px-3">
              trade <img src={trade} alt="" className="inline" /> crypto
            </h1>
          </motion.div>
        </div>

        <div className="flex flex-col space-y-3 space-x-0  md:flex-row md:space-x-3 md:space-y-0 items-center justify-around">
          <motion.div whileInView={{opacity:1 , x:30}} transition={{duration:1.5}} >
            <img src={app} alt="" className="" />
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1 , x:30 }} transition={{duration:1.5}} className="flex flex-col space-y-3 space-x-0">
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
          </motion.div>
        </div>
        <div className="rounded-lg flex flex-col md:flex-row px-7 pt-3 justify-center md:justify-between bg-white">
          <div>
            <h1 className="text-blacklight text-4xl font-bold  ">
              Borrowing, Trading And <br /> Custodial Operations To <br />{" "}
              Individual Needs
            </h1>
            <p className="mt-5 text-start text-detaillight font-light">
              Blockchain.com Institutional Markets is a fullfeatured
              cryptocurrency <br /> services platform designed to connect with
              companies with their own <br /> crypto assets and institutional
              clients to lend. trade. and custodial <br /> bractivities tailored
              to your needs.
            </p>
            <button className="mt-5 bg-blacklight text-white font-semibold p-2 ">
              Become a customer
            </button>
          </div>

          <img src={appfeature} alt="" className="mt-3" />
        </div>
        <div className=" flex flex-col text-left space-x-o space-y-3 md:flex-row md:justify-around md:space-x-3 md:space-y-0">
          <div className="flex flex-col space-x-0 space-y-3 justify-evenly">
            <div className=" border-blacklight border-2 bg-lightYellow py-3 px-2  rounded-2xl text-center">
              <h2 className="text-5xl font-bold">100%</h2>
              <span className="font-semibold text-xl ">Original materials</span>
            </div>
            <div className=" border-blacklight border-2 flex space-x-3 justify-evenly  items-center rounded-2xl text-center">
              <h2 className="text-5xl font-bold text-blacklight ">45% </h2>
              <span className="text-3xl font-semibold">
                Discounts for <br /> our Clients{" "}
              </span>
            </div>
          </div>
          <div className="rounded-lg bg-backgroundcolor md:w-1/2 px-3  border-2 border-blacklight">
            <h2 className="text-2xl mt-3 capitalize font-medium text-blacklight">
              Blockchain data is in our DNA
            </h2>
            <p className="text-detaillight mt-5 ">
              Confirm transactions, analyse the market, or simply more about
              cryptocurrencies. From hash rote and block information to minin
              information and more.
            </p>
            <button className="   text-blacklight rounded border-2 mt-5 px-3 ">
              Explore Library
            </button>
          </div>
        </div>
        <div className="rounded-full  p-10 bg-white ">
          <motion.div whileInView={{x:30}} transition={{duration:1}} className="mt-10 ">
            <h1 className="text-4xl text-blacklight font-bold  ">
              From Zero <img src={money} alt="" className="inline" /> to
            </h1>
            <h1 className="text-4xl text-blacklight font-bold  ml-10 mt-3">
              Cryptyo <img src={bit} alt="" className="inline" /> &nbsp; in
              minutes
            </h1>
          </motion.div>
          <div className="flex  flex-col space-y-3 space-x-0 md:flex-row md:space-x-3 md:space-y-0 justify-evenly">
            <motion.div whileInView={{x:-30}} transition={{duration:1}}>
              <p className="text-left text-detaillight">
                Bl@ckchain.com Institutional Markets is a full-featured
                cryptoocurrency <br /> services platform designed to connect.
              </p>
            </motion.div>
            <motion.div whileHover={{x:20}}>
              <button className="text-center inline-block bg-blacklight text-white rounded-lg px-3 py-2 ">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
