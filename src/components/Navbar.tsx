import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";

const Links = ["home", "About us", "Roadmap", "FAQ", "Contact Us"];

const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="2xl:py-11 flex z-40   items-center overflow-hidden   justify-between w-full 2xl:px-[5.5rem] px-4 md:px-8 md:py-4  max-lg:py-5">
      <div className="flex items-center  2xl:gap-28 gap-14 w-3/4 ">
        <img
          src="/logo.png"
          alt="logo"
          className="max-lg:w-32 md:w-44  lg:w-36"
        />

        <div className="flex 2xl:gap-20 gap-12  max-lg:hidden">
          {Links.map((item, index) => (
            <a
              className="text-white 2xl:text-[1.2rem] whitespace-nowrap  capitalize font-medium cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-200"
              key={index}
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <button className="py-2  px-4 2xl:py-3  2xl:px-7 font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full max-lg:hidden">
        Connect Wallet
      </button>
      <div
        className="lg:hidden text-white cursor-pointer"
        onClick={() => setOpenSideBar(!openSideBar)}
      >
        <IoMenu size={30} />
      </div>

      <SideBar open={openSideBar} setOpen={setOpenSideBar} />
    </div>
  );
};

export default Navbar;
