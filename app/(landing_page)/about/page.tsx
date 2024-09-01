import React from "react"
import HeroSection from "app/components/HeroSection"
import AboutSection from "./_components/AboutSection"
import ServicesSection from "./_components/ServicesSection"
import TeamSection from "./_components/TeamSection"
import TestimonialsSection from "./_components/TestimonialsSection"
import TrustedBySection from "./_components/TrustedBySection"
import data from "../../data" // Adjust the path as needed

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#111022]">
      <HeroSection data={data.page.about.hero} title={"About AIMug"} />
      <AboutSection data={data.page.about.aboutSection} />
      <TrustedBySection data={data.components.trustedBySection} />
      <TeamSection data={data.components.teamSection} />
      <TestimonialsSection data={data.components.testimonialsSection} />
      <ServicesSection data={data.components.Services} />
    </div>
  )
}

export default AboutPage
