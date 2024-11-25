import { BsMessenger } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
const Links = ["About us", "Roadmap", "FAQ", "Contact Us"];
const Footer = () => {
  return (
    <div className="bg-[#051422] h-[43vh] px-10 w-full flex items-center justify-center">
      <div className="flex items-center  gap-48 w-3/4">
        <img src="/logo.png" alt="logo" />
        <div className="flex gap-20">
          {Links.map((item, index) => (
            <a
              className="text-white text-[1.2rem] capitalize font-medium"
              key={index}
              href=""
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-5 -translate-y-10">
        <button className="py-3 px-7 font-bold text-white text-3xl">
          Contact <span className="text-yellow-500">Us</span>
        </button>
        <div className=" flex gap-10 justify-center items-center text-white">
          <BsMessenger size={30} />
          <FaReddit size={30} />
          <PiBirdFill size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
