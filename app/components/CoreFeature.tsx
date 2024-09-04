import React from "react"
import { Feature } from "../types"

const CoreFeature: React.FC<Feature> = ({
  title,
  highlightedWord,
  description,
  features,
  buttonText,
  image,
  direction = "normal",
}) => (
  <div
    className={`my-16 flex items-center gap-4 ${
      direction === "normal" ? "flex-col md:flex-row " : "flex-col-reverse md:flex-row-reverse"
    }  md:gap-14`}
    key={title}
  >
    <div className="md:w-1/2">
      <div className="mb-4 flex items-start">
        <span className="text-lg font-semibold text-[#fedc78]">Feature {title.split(" ")[1]}</span>
      </div>
      <h3 className="mb-6 text-3xl font-bold md:text-4xl lg:text-4xl">
        {title.split(" ").map((word, index) => (
          <span key={index} className={word === highlightedWord ? "text-[#fedc78]" : ""}>
            {word}{" "}
          </span>
        ))}
      </h3>
      <p className="mb-6 text-base text-gray-300 md:text-lg">{description}</p>
      <ul className="list-disc space-y-3 pl-6 text-gray-400">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="mt-8 rounded-lg bg-[#5772fd] px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600">
        {buttonText}
      </button>
    </div>

    <div className="w-full md:w-1/2">
      <img src={image.src} alt={image.alt} className="flex h-auto w-full items-center justify-center rounded-md bg-gray-200 text-4xl font-bold" />
    </div>
  </div>
)

export default CoreFeature
