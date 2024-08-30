import React from "react"
import { PricingPlan } from "../types"

interface PricingPlansProps {
  data: PricingPlan[]
  isYearly: boolean
}

const PricingPlans: React.FC<PricingPlansProps> = ({ data, isYearly }) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {data.map((plan) => (
      <div
        key={plan.name}
        className={`rounded-lg border border-[#3C3C77] bg-[#0F0F24] p-8 text-start transition duration-300 ease-in-out hover:border-[#ACDA49] hover:shadow-lg ${
          plan.popular ? "relative" : ""
        }`}
      >
        {plan.popular && (
          <span className="absolute right-2 top-2 rounded-md bg-[#fedc78] px-2 py-1 text-xs font-bold">Popular</span>
        )}
        <h3 className="mb-4 text-2xl font-bold text-[#5772fd] md:text-3xl">{plan.name}</h3>
        <p className="mb-4 text-5xl font-bold text-white md:text-6xl">
          ${isYearly ? (parseFloat(plan.price) * 9.6).toFixed(0) : plan.price}
        </p>
        <button className="mb-4 rounded-md border border-[#3C3C77] bg-[#15152c] px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-[#ACDA49]">
          {plan.buttonText}
        </button>
        <p className="mb-6 text-lg font-bold text-gray-50">{plan.billingInfo}</p>
        <ul className="mt-5 list-inside list-disc space-y-2 text-base font-semibold text-gray-50">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export default PricingPlans
