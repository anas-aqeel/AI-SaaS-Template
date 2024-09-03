import React from "react"
import { PricingPlan } from "../types"
import { CheckCircle } from "lucide-react"

interface PricingPlansProps {
  data: PricingPlan[]
  isYearly: boolean
}

const PricingPlans: React.FC<PricingPlansProps> = ({ data, isYearly }) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {data.map((plan) => (
      <div
        key={plan.name}
        className={`rounded-lg border border-yellow-400 bg-[#0F0F24] p-8 text-start transition duration-300 ease-in-out hover:border-green-500 hover:shadow-lg ${plan.popular ? "relative" : ""
          }`}
      >
        {plan.popular && (
          <span className="absolute right-2 top-2 rounded-md bg-yellow-500 px-2 py-1 text-xs font-bold">Popular</span>
        )}
        <h3 className="mb-8 text-xl font-medium text-yellow-500 text-center">{plan.name}</h3>
        <p className="mb-4 font-semibold text-white text-4xl text-center">
          ${isYearly ? (parseFloat(plan.price) * 9.6).toFixed(0) : plan.price}
        </p>
       
        <p className="mb-6 text-base text-center font-medium text-gray-500">{plan.billingInfo}</p>
        <ul className="mb-5 list-none space-y-2  font-medium text-sm text-gray-100">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">

              <CheckCircle className="text-yellow-500" size={20} />
              {feature}</li>
          ))}
        </ul>
        <button className="mb-4 w-full text-center rounded-md border border-yellow-400 hover:border-green-500  px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:scale-105">
          {plan.buttonText}
        </button>
      </div>
    ))}
  </div>
)

export default PricingPlans
