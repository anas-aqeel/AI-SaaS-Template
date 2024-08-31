import React from "react"
import { Data } from "../types" // Adjust path if needed

interface HeroSectionProps {
  data: Data["hero"]
  title: String
}

const HeroSection: React.FC<HeroSectionProps> = ({ data, title }) => {
  return (
    <section className={`bg-${data.backgroundColor} py-12 text-center font-sans text-${data.textColor} pb-0 md:pt-8`}>
      <div className="mx-auto max-w-7xl px-4">
        <h3 className="mb-8 text-base font-semibold text-[#FF9B00]">{title}</h3>
        <h1 className="mx-auto mb-6 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
          {data.title.split(" ").map((word, index) => (
            <span key={index} className={word === data.highlightedWord ? "text-green-600" : ""}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="mx-auto mb-12 max-w-md text-base font-medium text-gray-400 ">{data.description}</p>
        {/* Add buttons or other elements from the hero section here */}
      </div>
    </section>
  )
}

export default HeroSection
