
const Table = () => {
  return (
    <div className=" rounded-2xl h-[75vh] relative w-full mt-8 bg-[#0D1B28] p-10 ">
      <div className="absolute top-[5rem] left-[5rem] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,0,0.1)_0%,_rgba(255,255,255,0)_70%)]"></div>

      <div className="flex text-[2rem]  items-center justify-between">
        {/* First colimn */}
        <div className="flex flex-col text-[#AFB3B5]  items-center  w-1/3">
        <div className="text-[2rem] fira-code-custom text-[#F9D423] py-4 border-b border-[#212F39] border-r pl-16 w-full">
            Comparison
          </div>
          <div className="text-[1.5rem]  py-6 border-b border-r  border-[#212F39]  pl-6 w-full">
            1.Point no one
          </div>
          <div className="text-[1.5rem]  py-6 border-b border-r  border-[#212F39] pl-6 w-full">
            1.Point no two this
          </div>
          <div className="text-[1.5rem]  py-6 border-b border-r border-[#212F39]  pl-6 w-full">
            1.Point no two this
          </div>
          <div className="text-[1.5rem]  py-6 border-b border-r  border-[#212F39] pl-6 w-full">
            1.Point no two this
          </div>
          <div className="text-[1.5rem]  py-6 border-b border-r border-[#212F39]  pl-6 w-full">
            1.Point no two this
          </div>
        </div>
        {/* second column */}
        <div className="flex  flex-col items-center  w-1/3">
          <div className=" py-1 border-b border-r border-[#212F39] pl-16 w-full">
            <img src="/logo.png" alt="logo" className="object-cover " />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[1.6rem] border-b border-[#212F39]  border-r pl-6 w-full">
            <img src="/basic/check_bold.png" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[1.6rem] border-b border-[#212F39]  border-r pl-6 w-full">
            <img src="/basic/check_bold.png" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[1.6rem] border-b border-[#212F39] border-r pl-6 w-full">
            <img src="/basic/check_bold.png" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[1.6rem] border-b border-[#212F39] border-r pl-6 w-full">
            <img src="/basic/check_bold.png" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[1.6rem] border-b border-[#212F39] border-r pl-6 w-full">
            <img src="/basic/check_bold.png" />
          </div>
        </div>
        {/* third column */}
        <div className="flex flex-col text-gray-500 items-center  w-1/3">
          <div className="text-[2rem] text-center fira-code-custom text-[#FF007A]  border-[#212F39] py-4 border-b  w-full">
            UNISWAP
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[0.9rem] border-b border-[#212F39]  pl-6 w-full">
            <img src="/menu/close_small.png" alt="cross" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[0.9rem] border-b border-[#212F39]  pl-6 w-full">
            <img src="/menu/close_small.png" alt="cross" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[0.9rem] border-b border-[#212F39]  pl-6 w-full">
            <img src="/menu/close_small.png" alt="cross" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[0.9rem] border-b border-[#212F39]  pl-6 w-full">
            <img src="/menu/close_small.png" alt="cross" />
          </div>
          <div className="text-[1.5rem] flex justify-center  py-[0.9rem] border-b border-[#212F39]  pl-6 w-full">
            <img src="/menu/close_small.png" alt="cross" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
