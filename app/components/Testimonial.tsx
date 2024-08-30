import React from "react"

interface TestimonialProps {
  data: { quote: string; author: string }
}

const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <div className="rounded-lg bg-[#15152c] p-8 text-center sm:col-span-2">
      <p className="mb-6 text-lg italic text-gray-300">{data.quote}</p>
      <p className="font-semibold text-white">{data.author}</p>
    </div>
  )
}

export default Testimonial
