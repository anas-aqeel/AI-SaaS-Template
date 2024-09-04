import React from "react"
import { AboutSectionFeature, Data } from "../../../types"

interface AboutSectionProps {
  data: Data["about"]
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section className={`bg-${data.backgroundColor} py-12 font-sans text-${data.textColor} md:py-20`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          {/* Text Content */}
          <div className="sm:text-center md:w-2/5 md:pr-16 md:text-left">
            <h2 className="mx-auto mb-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl md:max-w-2xl ">
              {data.title}
            </h2>
            <p className="md:text-md mx-auto mb-6 max-w-xl text-sm font-semibold text-gray-400 md:max-w-3xl">
              {data.description}
            </p>

            {/* Features */}
            <div className="flex flex-row items-center space-x-6 space-y-0 sm:justify-center md:justify-start">
              {data.features.map((feature: AboutSectionFeature, index: number) => (
                <div key={index} className="flex items-center">
                  <feature.icon className={`size-6 text-[${feature.color}]`} />

                  <div className="ml-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((e) => (
                        <span key={e} className="mr-1 text-sm text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-gray-400">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-8 rounded-md bg-[#5772fd] px-6 py-3 font-bold text-white hover:bg-blue-700">
              {data.buttonText}
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="w-full md:w-3/5">
            {/* <div className="h-[60vh] w-full rounded-md bg-gray-100 shadow-md"></div> */}
            <img 
              src={data.image.src} 
              alt="About Section Illustration" 
              className="rounded-md shadow-lg w-full h-auto" 
            /> 
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
