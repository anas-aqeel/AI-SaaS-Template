"use client"
import React, { useEffect, useRef, useState } from "react"
import { FAQ } from "../types"

interface FAQsProps {
  data: FAQ[]
}

const FAQs: React.FC<FAQsProps> = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [height, setHeight] = useState<string>("0px")
  const contentRefs = useRef<any>([])

  const handleClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  useEffect(() => {
    if (expandedIndex !== null && contentRefs.current[expandedIndex]) {
      setHeight(`${contentRefs.current[expandedIndex]?.scrollHeight}px`)
    } else {
      setHeight("0px")
    }
  }, [expandedIndex])

  return (
    <section className="bg-[#111022] py-12 font-sans text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-xl font-bold text-[#ACDA49] md:text-2xl">Frequently Asked Questions</h2>
          <h3 className="mb-8 text-3xl font-bold md:mb-16 md:text-4xl lg:text-5xl">
            Questions About our AIMug? We have Answers!
          </h3>
        </div>
        <ul className="mx-auto max-w-5xl space-y-4">
          {data.map((faq, index) => (
            <li key={index} className="overflow-hidden rounded-md border border-[#3C3C77] transition-all">
              <button
                className="group w-full text-left"
                aria-expanded={expandedIndex === index}
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center justify-between bg-[#15152c] px-6 py-4 transition duration-300 ease-in-out hover:bg-[#21243e]">
                  <span className="text-lg font-semibold md:text-xl">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-6 text-gray-400 transition duration-300 ease-in-out group-hover:text-[#fedc78]${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el) as any}
                className="overflow-hidden transition-max-height duration-300 ease-in-out"
                style={{
                  maxHeight: expandedIndex === index ? height : "0px",
                }}
              >
                <div className="bg-[#15152c] px-6 py-4 text-left">
                  <p className="font-medium text-gray-400" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQs
