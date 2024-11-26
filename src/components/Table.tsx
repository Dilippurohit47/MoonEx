const Table = () => {
  return (
    <div className=" rounded-2xl h-[75vh] relative w-full mt-8 bg-[#0D1B28] lg:p-2 ">
      <div className="absolute top-[5rem] left-[5rem] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,100,0.1)_0%,_rgba(255,255,120,0)_70%)]"></div>

      <div className="flex 2xl:text-[2rem]  items-center justify-between">
        {/* First colimn */}
        <div className="flex flex-col text-[#AFB3B5]  items-center justify-center py-3  w-1/3">
          <div className="2xl:text-[2rem] 2xl:py-10  fira-code-custom text-center text-[#F9D423]  border-b border-[#212F39] border-r 2xl:pl-16 w-full">
            Comparison
          </div>

          {Array(5)
            .fill(5)
            .map((item, index) => (
              <div
                key={index}
                className="2xl:text-[1.5rem]  text-[1rem] lg:py-6 py-5 border-b border-r  border-[#212F39]  lg:pl-6 pl-1 whitespace-nowrap overflow-hidden w-full"
              >
                1.Point no one
              </div>
            ))}
        </div>
        {/* second column */}
        <div className="flex   flex-col items-center  w-1/3">
          <div className="2xl:text-[2rem] fira-code-custom  text-center 2xl:hidden text-[#F9D423]  border-b border-[#212F39] border-r w-full">
            MoonEx
          </div>

          <div className=" max-2xl:hidden 2xl:py-7  border-b border-r border-[#212F39] 2xl:pl-16 2xl:w-full">
            <img
              src="/logo.png"
              alt="logo"
              className="object-cover max-lg:w-20 "
            />
          </div>
          {Array(5)
            .fill(5)
            .map((item, index) => (
              <div
                key={index}
                className="text-[1.5rem] flex justify-center max-lg:py-4  2xl:py-[1.6rem] lg:py-[1.2rem] border-b border-[#212F39]  pl-6 w-full border-r"
              >
                <img src="/basic/check_bold.png" />
              </div>
            ))}
        </div>
        {/* third column */}
        <div className="flex flex-col text-gray-500 items-center  w-1/3">
          <div className="2xl:text-[2rem] 2xl:py-10   fira-code-custom text-center text-[#FF007A]  border-b border-[#212F39] border-r 2xl:pl-16 w-full">
          Uniswap
          </div>
          {Array(5)
            .fill(5)
            .map((item, index) => (
              <div
                key={index}
                className="text-[1.5rem] flex justify-center max-lg:py-[0.3rem]  2xl:py-[0.9rem] lg:py-[0.9rem] border-b border-[#212F39]  pl-6 w-full"
              >
                <img src="/menu/close_small.png" alt="cross" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
