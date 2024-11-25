import Table from "../components/Table";
import FeaturesComponent from "../components/FeaturesComponent";
import FaqSection from "../components/FaqSection";
const SecondPage = () => {
  return (
    <div className=" pb-48 mt-20 px-32">
      <h1 className="text-[3rem] ml-16 font-bold text-white mt-12">
        Why <span className="text-[#F9D423]">MoonEx </span>?
      </h1>
      <Table />
      <FeaturesComponent />
      <FaqSection />
    </div>
  );
};

export default SecondPage;
