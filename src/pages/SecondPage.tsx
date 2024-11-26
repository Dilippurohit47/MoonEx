import Table from "../components/Table";
import FeaturesComponent from "../components/FeaturesComponent";
import FaqSection from "../components/FaqSection";
const SecondPage = () => {
  return (
    <div className="  pb-48 relative lg:mt-20 2xl:px-32 px-3 sm:px-5 md:px-8 lg:px-16 ">
      <h1 className=" lg:text-[3rem] text-[1.8rem] 2xl:ml-16 font-bold text-white 2xl:mt-12">
        Why <span className="text-[#F9D423]">MoonEx </span>?
      </h1>
      <Table />
      <FeaturesComponent />
      <FaqSection />
    </div>
  );
};

export default SecondPage;
