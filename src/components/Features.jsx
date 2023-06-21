import React from 'react'

function Features() {
  return (
    <>
    <div className='container mx-auto mt-28 flex flex-col spaxex-x-0 space-y-4'>
    <div className=" flex flex-col md:flex-row px-3 md:items-center  justify-evenly">
          <div>
            <h1 className="text-blacklight text-4xl md:text-5xl font-bold">
              The Best Lightning <br /> cryptyo
              <img
                src={transaction}
                className="w-8 inline"
                alt=""
              /> trading{" "}
            </h1>
          </div>

          <div>
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
          </div>
        </div>
    </div>
    </>
  )
}

export default Features