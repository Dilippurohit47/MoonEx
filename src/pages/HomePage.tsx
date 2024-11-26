
const HomePage = () => {
  return (
    <div className="  h-screen  flex flex-col 2xl:px-32 lg:justify-center px-2   sm:px-4 lg:px-16">
      <div className="  flex items-start flex-col max-lg:mt-[18rem]  justify-start  ">
        <h1 className=" text-[2.5rem] 2xl:text-[5.5rem] lg:text-[4rem] leading-[0.9] text-white 2xl:mt-10 fira-code-custom ">
          Trusted Multi-Chain <br /> <span className="text-[#F9D423]">DEX</span>{" "}
          Platform
        </h1>
        <h6 className=" text-[1.2rem] text-gray-500 mt-2 max-lg:mt-4  lg:text-[1.4rem] 2xl:text-[1.8rem]">
          Trade, earn, and own crypto on the all-one-one multi-chain DEX
        </h6>
        <div className="flex lg:gap-7 gap-4 mt-10">
          <button className=" px-3 py-2 lg:py-3   lg:px-7 font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full">
            Connect Wallet
          </button>

          <button className=" px-3 py-2  lg:py-3 lg:px-7 font-bold text-yellow-400 border border-yellow-400 rounded-full">
            Trade Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
