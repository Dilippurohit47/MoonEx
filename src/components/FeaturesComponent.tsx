const FeaturesComponent = () => {
  return (
    <div className="w-full">
      <h1 className="text-[3rem] max-md:text-[1.8rem] text-center font-bold text-white mt-16">
        Our <span className="text-[#F9D423]">Features</span>?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 lg:px-0 mt-8">
          {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-start px-6 py-7 border border-[#212F39] rounded-2xl bg-[#101E29] w-full"
            >
              <img src="/Group 19.png" alt="dollar" className="w-12 h-12" />
              <div className="mt-6 space-y-3">
                <h3 className="text-white text-[1.3rem]">Cheapest TXs</h3>
                <p className="text-gray-400 font-normal leading-tight text-[1.1rem]">
                  Exchange popular digital currencies at the cheapest possible
                  transaction price.
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
