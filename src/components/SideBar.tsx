const Links = ["home", "About us", "Roadmap", "FAQ", "Contact Us"];
import { RxCross2 } from "react-icons/rx";
const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
}) => {
  return (
    <div
      className={`bg-[#101E29] h-screen w-full absolute top-0  transition-all ease-in-out duration-300 px-3 py-3 ${
        open ? "right-0 " : "-right-[100%] w-0"
      } `}
    >
      <div
        className="text-end bg-white rounded-full inline-block text-black p-1"
        onClick={() => setOpen(!open)}
      >
        <RxCross2 size={20} />
      </div>
      <div className="flex flex-col text-2xl font-semibold capitalize mt-5 gap-2 ">
        {Links.map((item, index) => (
          <a key={index} href="#" className="text-white">
            {item}
          </a>
        ))}
      </div>
    <div className=" h-full flex justify-center  items-center">
    <button className="py-2  px-4 2xl:py-3 min-w-[300px]  2xl:px-7 font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full text-center">
        Connect Wallet
      </button>
    </div>
    </div>
  );
};

export default SideBar;
