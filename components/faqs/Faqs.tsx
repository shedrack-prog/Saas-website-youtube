import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
  return (
    <div id='faqs' className="pt-[6rem] p-[1rem]">
      <div>
        <p className="px-[10px] py-[6px] font-semibold border border-[#151515] w-[120px] text-center text-[#151515]">
          FAQs
        </p>

        <div className="flex flex-col space-y-4 mt-[1rem]">
          <h2 className="text-[#151515] text-[44px] leading-[56px] tracking-[-4px]">
            Common Questions
          </h2>

          <p className="text-[18px] text-[#151515] leading-[24px] tracking-[0px]">
            The online form also provides links to a set of frequently asked
            questions, other information materials related to the financial
            disclosure programme.
          </p>
          <div className="flex items-start">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How much does a Teams subscription cost?
                </AccordionTrigger>
                <AccordionContent>
                  Contributors are members of your team who need access to use
                  the Mac app to create and edit Sketch documents. These prices
                  don’t include sales tax, which may still apply. Head over to
                  our pricing page to get full details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I still need to purchase licenses for the Mac app?
                </AccordionTrigger>
                <AccordionContent>
                  Contributors are members of your team who need access to use
                  the Mac app to create and edit Sketch documents. These prices
                  don’t include sales tax, which may still apply. Head over to
                  our pricing page to get full details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What are the differences between Contributors and Viewers?
                </AccordionTrigger>
                <AccordionContent>
                  Contributors are members of your team who need access to use
                  the Mac app to create and edit Sketch documents. These prices
                  don’t include sales tax, which may still apply. Head over to
                  our pricing page to get full details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How long does the free Teams subscription trial last?
                </AccordionTrigger>
                <AccordionContent>
                  Contributors are members of your team who need access to use
                  the Mac app to create and edit Sketch documents. These prices
                  don’t include sales tax, which may still apply. Head over to
                  our pricing page to get full details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Will program for teams replace volume licensing?
                </AccordionTrigger>
                <AccordionContent>
                  Contributors are members of your team who need access to use
                  the Mac app to create and edit Sketch documents. These prices
                  don’t include sales tax, which may still apply. Head over to
                  our pricing page to get full details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
