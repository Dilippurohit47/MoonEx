
const Links = ["home", "About us", "Roadmap", "FAQ", "Contact Us"];

const Navbar = () => {
  return (
    <div className="py-11 flex   items-center  justify-between w-full px-[5.5rem]">
      <div className="flex items-center  gap-28 w-3/4">
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
      <button className="py-3 px-7 font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full">
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
