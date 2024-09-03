import React from "react"
import HeroSection from "@/app/components/HeroSection"
import PricingContainer from "@/app/components/PricingContainer"
import data from "../../data"

const page = () => {
  return (
    <div>
      <HeroSection data={data.page.pricing.hero} title={"Check Pricing"} />
      <PricingContainer />
    </div>
  )
}

export default page
