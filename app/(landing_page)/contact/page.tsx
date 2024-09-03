import React from "react"
import ContactFormSection from "@/app/components/ContactSection"
import HeroSection from "@/app/components/HeroSection"
import data from "../../data"

const page = () => {
  return (
    <div>
      <HeroSection data={data.page.contact.hero} title={"Contact Now"} />
      <ContactFormSection {...data.page.contact.contactSection} />
    </div>
  )
}

export default page
