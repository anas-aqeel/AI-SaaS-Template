import React from "react"
import { Data, TrustedBrand } from "../../../types"

interface TrustedBySectionProps {
  data: Data["trustedBy"]
}

const TrustedBySection: React.FC<TrustedBySectionProps> = ({ data }) => (
  <section className={`bg-${data.backgroundColor} py-12 font-sans text-${data.textColor} md:py-20`}>
    <div className="mx-auto max-w-7xl text-center">
      <div>
        <h3 className="mb-6 px-4 text-lg font-semibold md:text-xl">{data.title}</h3>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        {data.brands.map((brand: TrustedBrand, index: number) => (
          <div
            key={index}
            className="flex items-center justify-start rounded-lg gap-2  p-4 w-fit"
          >
            <img src={brand.src} alt={brand.alt} className="h-12 w-auto" />
            <span className="ml-2 text-sm font-medium text-white">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TrustedBySection
