import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FaqSection = () => {
  return (
    <div className="mt-24 flex justify-center px-4 relative">
      <div className="absolute top-[5rem] -left-[25rem] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,100,0.1)_0%,_rgba(255,255,120,0)_70%)]  max-md:left-[-20rem] max-md:w-[30rem] max-md:h-[30rem]"></div>
   

      <div className="w-full max-w-4xl min-h-[60vh] bg-[#0C1B28] rounded-lg">
        <h1 className="text-[3rem] max-md:text-[2rem] text-[#F9D423] text-center font-bold py-6">
          FAQS
        </h1>

        <Accordion type="single" collapsible className="w-full text-white">
          <AccordionItem
            value="item-1"
            className="border-b border-t border-[#212F39] py-4"
          >
            <AccordionTrigger className="text-[1.2rem] max-md:text-[1rem] px-8 max-md:px-4 font-medium hover:no-underline">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-[#BAB8B8] px-8 max-md:px-4 text-[1rem] max-md:text-[0.9rem]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-b border-[#212F39] py-4"
          >
            <AccordionTrigger className="text-[1.2rem] max-md:text-[1rem] px-8 max-md:px-4 font-medium hover:no-underline">
              How do I get rewards in tokens or ETH when I refer buyers?
            </AccordionTrigger>
            <AccordionContent className="text-[#BAB8B8] px-8 max-md:px-4 text-[1rem] max-md:text-[0.9rem]">
              Rewards will be distributed based on successful referrals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-b border-[#212F39] py-4"
          >
            <AccordionTrigger className="text-[1.2rem] max-md:text-[1rem] px-8 max-md:px-4 font-medium hover:no-underline">
              How do I get a referral Code?
            </AccordionTrigger>
            <AccordionContent className="text-[#BAB8B8] px-8 max-md:px-4 text-[1rem] max-md:text-[0.9rem]">
              Referral codes can be generated from your profile settings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
