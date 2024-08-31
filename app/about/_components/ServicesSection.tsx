import React from "react"
import { Data, Service } from "../../types"

interface ServicesSectionProps {
  data: Data["services"]
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => (
  <section className={`bg-${data.backgroundColor} py-12 font-sans text-${data.textColor} md:py-20`}>
    <div className="mx-auto max-w-7xl px-4 text-center">
      <h2 className="mx-auto mb-8 max-w-3xl text-3xl font-bold md:mb-16 md:max-w-4xl md:text-4xl lg:max-w-5xl lg:text-4xl">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 gap-6 text-start sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {data.servicesList.map((service: Service, index: number) => (
          <div key={index} className="group relative rounded-lg border border-[#3C3C77] p-8">
            <div className="mb-6 flex items-center justify-start">
              <service.icon className={`size-8 text-[#fedc78]`} />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white md:text-lg">{service.title}</h4>
            <p className="mb-6 text-sm text-gray-400 md:text-base">{service.description}</p>

            {/* Gradient Hover Effect (You can customize or remove this) */}
            <div className="absolute bottom-0 right-0 size-[107px] rounded-full bg-transparent opacity-0 blur-[90px] transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#6243FF] group-hover:to-[#FF2828] group-hover:opacity-80"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesSection
