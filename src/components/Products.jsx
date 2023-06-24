
import wallet from "../assets/wallet.png";

function Products() {
  return (
    <>
      <h1 className="container  mx-auto mt-3 mr-3 text-4xl font-bold capitalize ">
        Our Products
      </h1>
      <div className="mt-5 container mx-auto flex flex-col text-left space-x-o space-y-3 md:flex-row md:justify-around md:space-x-3 md:space-y-0">
        <div className="rounded-lg bg-blacklight px-6 ">
          <div className="bg-iconcolor w-1/3  flex justify-center items-center rounded-lg mt-4 ">
            <img src={wallet} alt="" />
            <span className="">wallet</span>
          </div>
          <h2 className="text-2xl mt-3 capitalize font-medium text-white">
            the easiest and the most <br /> powerfull crypto wallet
          </h2>
          <p className="text-detaillight mt-5 ">
            Buy Bitcoin instantly with a credit card. debit card. <br /> or by
            linking your bank.
          </p>
          <button className=" hover:bg-violet-400 hover:text-blacklight hover:duration-500 text-white rounded border-2 mt-5 px-3 ">Start here </button>
        </div>
        <div className="flex flex-col space-x-0 space-y-3 justify-evenly">
          <div className=" border-blacklight border-2 flex space-x-3 justify-evenly p-10 items-center rounded-2xl text-center">
            <h2 className="text-5xl font-bold text-blacklight ">10% </h2>
            <span className="text-3xl font-semibold">Earn with Us <br /> in rewards </span>
          </div>
          <div className=" border-blacklight border-2 bg-iconcolor rounded-2xl p-10 text-center">
            <h2 className="text-5xl font-bold">100%</h2>
            <span className="font-semibold text-xl ">your crypto in one place</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
