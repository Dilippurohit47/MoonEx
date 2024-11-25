import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
const FaqSection = () => {
  return (
    <div className=" mt-52  flex justify-center ">
      <div className="absolute top-[80rem] -left-[25rem]  h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,100,0.1)_0%,_rgba(255,255,120,0)_70%)] " ></div>
      <div className="w-3/4 h-[60vh] bg-[#0C1B28] rounded-lg  ">
        <h1 className="text-[3rem] text-[#F9D423]  text-center   font-bold  py-6">
          FAQS
        </h1>
        <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem
            value="item-1"
            className=" border-b border-[#212F39] border-t py-4 "
          >
            <AccordionTrigger className="text-[1.2rem] px-12 font-medium hover:no-underline ">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-[#BAB8B8]   px-12 text-[1rem]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className=" border-b border-[#212F39] border-t py-4 "
          >
            <AccordionTrigger className="text-[1.2rem] px-12 font-medium hover:no-underline ">
              How do I get rewards in tokens or ETH when I refer buyers?
            </AccordionTrigger>
            <AccordionContent className="text-[#BAB8B8]   px-12 text-[1rem]">
              How do I get rewards in tokens or ETH when I refer buyers?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className=" border-b border-[#212F39] border-t py-4 "
          >
            <AccordionTrigger className="text-[1.2rem] px-12 font-medium hover:no-underline ">
              How do I get a referral Code?
            </AccordionTrigger>
            <AccordionContent className="text-[#BAB8B8]   px-12 text-[1rem]">
              How do I get a referral Code?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
