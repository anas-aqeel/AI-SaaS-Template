import React from "react"
import CoreFeature from "../components/CoreFeature"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import PlaceholderImage from "../components/PlaceholderImage"
import PricingContainer from "../components/PricingContainer"
import Statistics from "../components/Statistics"
import Testimonial from "../components/Testimonial"
import WritingUseCases from "../components/WritingUseCases"
import data from "../data"

export const metadata: any = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <Hero data={data.page.home.hero} />
      <PlaceholderImage data={data.page.home.placeholderImage} />
      <HowItWorks data={data.page.home.howItWorks} />

      <section className="mx-auto max-w-7xl px-4">
        {data.page.home.coreFeatures.map((feature, index) => (
          <CoreFeature key={index} {...feature} />
        ))}
      </section>

      <section className="bg-[#111022] py-12 font-sans text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-3">
            <div className="col-span-2 grid gap-5 sm:grid-cols-2">
              <Statistics data={data.page.home.statistics} />
              <Testimonial data={data.page.home.testimonial} />
            </div>
            <div className="size-full rounded-md bg-gray-300 lg:row-span-2"></div> {/* Placeholder Image */}
          </div>
        </div>
      </section>

      <WritingUseCases data={data.page.home.writingUseCases} />

      <PricingContainer />
    </>
  )
}
