import React from "react";

const HomePage = () => {
  return (
    <div className="  h-screen  flex flex-col px-32 justify-center">
      <div className="  flex items-start flex-col  justify-start  ">
        <h1 className="text-[5.5rem] leading-[0.9] text-white mt-10 fira-code-custom ">
          Trusted Multi-Chain <br /> <span className="text-[#F9D423]">DEX</span>{" "}
          Platform
        </h1>
        <h6 className="  text-gray-500 mt-2 text-[1.8rem]">
          Trade, earn, and own crypto on the all-one-one multi-chain DEX
        </h6>
        <div className="flex gap-7 mt-10">
          <button className="py-3 px-7 font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full">
            Connect Wallet
          </button>

          <button className="py-3 px-7 font-bold text-yellow-400 border border-yellow-400 rounded-full">
            Trade Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
