import React from "react"
import { FAQ } from "../types"
import { ChevronsUpDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQsProps {
  data: FAQ[]
}

const FAQs: React.FC<FAQsProps> = ({ data }) => {


  return (
    <section className="bg-[#111022] py-12 font-sans text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-xl font-bold text-[#ACDA49] md:text-2xl">Frequently Asked Questions</h2>
          <h3 className="mb-8 text-3xl font-bold md:mb-16 md:text-4xl lg:text-5xl">
            Questions About our AIMug? We have Answers!
          </h3>
        </div>
        <div className="mx-auto max-w-5xl space-y-4">
          {data.map((faq, index) => (
            <>
              {/* <button
                className="group w-full text-left transition-all duration-300 ease-in-out rounded-md border border-[#3C3C77] overflow-hidden"
              >
                <div className="flex items-center justify-between bg-[#15152c] px-6 py-4 transition duration-300 ease-in-out hover:bg-[#21243e]">
                  <span className="text-lg font-semibold md:text-xl">{faq.question}</span>
                  <ChevronsUpDown />
                </div>

                <div className="max-h-0 overflow-hidden bg-[#15152c] px-6 text-left group-focus:max-h-[1000px] group-focus:py-4 transition-[max-height] duration-300 ease-in-out">
                  <p
                    className="font-medium text-gray-400"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                </div>
              </button> */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="rounded-md border border-[#3C3C77]">
                  <AccordionTrigger className="hover:bg-[#21243e] bg-[#15152c]  px-6 py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="font-medium text-gray-400 text-start pt-4 px-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </>

          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
