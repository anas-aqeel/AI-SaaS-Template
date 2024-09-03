"use client"
import React, { useState } from "react"
import PricingPlans from "./PricingPlans"
import data from "../data"
import { Switch } from "@/components/ui/switch"
// import * as Switch from '@radix-ui/react-switch';

const PricingContainer = () => {
  const [isYearly, setIsYearly] = useState(false)

  const handlePricingToggle = () => {
    setIsYearly(!isYearly)
  }
  return (
    <section className="relative bg-[#111022] py-12 font-sans text-white md:py-20">
      <div className="absolute inset-0 z-0 mx-auto h-[70%] w-full max-w-[1180px] bg-gradient-to-br from-[#00E3F2] via-[#FF9B00] to-[#E6F85E] opacity-15 blur-[75px]"></div>
      <div className="relative z-50 mx-auto max-w-6xl px-4 text-center">
        {/* ... (pricing plan title remains the same) ... */}
        <div className="mb-10 flex items-center justify-center space-x-4">
          <span className="text-gray-400">Pay Monthly</span>


          <Switch
            onClick={handlePricingToggle}
            value={Number(isYearly)}
            className="w-[42px] h-[25px] rounded-full cursor-pointer relative bg-white data-[state=checked]:bg-green-500 outline-none transition-all duration-300 "
            id="airplane-mode"
          />


          <span className="font-semibold text-yellow-400">Pay Yearly</span>
          <span className="font-medium text-green-500">Save 20%</span>
        </div>
        <PricingPlans data={data.components.pricingPlans} isYearly={isYearly} />
      </div>
    </section>
  )
}

export default PricingContainer
