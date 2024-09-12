import { BadgeCheck, Star } from "lucide-react"
import React from "react"
import { Data, TestimonialSection } from "../../../types"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

interface TestimonialsSectionProps {
  data: Data["testimonials"]
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data }) => (
  <section className={`bg-${data.backgroundColor} py-12 font-sans text-${data.textColor} md:py-20`}>
    <div className="mx-auto max-w-7xl px-4 text-center">
      <h2 className="mx-auto mb-16 max-w-3xl text-3xl  font-bold  md:text-4xl">{data.title}</h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full flex  flex-row items-center gap-5"
      >
        <CarouselPrevious className="static m-0 size-10 rounded-full border-none p-3 bg-black" />

        <CarouselContent className="flex-1">
          {data.testimonials.map((testimonial: TestimonialSection, index: number) => (
            <CarouselItem key={index} className="basis-[100%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div key={index} className="rounded-lg bg-[#15152c] p-8 transition duration-300 ease-in-out hover:shadow-lg">
                <div className="mb-4 flex items-start">
                  <Image
                    src={testimonial.author.image.src}
                    alt={testimonial.author.name}
                    className="mr-4 size-12 rounded-full object-cover"
                  />
                  <div className="text-start">
                    <h4 className="text-lg font-semibold text-white">{testimonial.author.name}</h4>
                    <p className="text-sm font-medium text-gray-400">{testimonial.author.position}</p>
                  </div>
                </div>
                <p className="mb-4 text-xl font-bold text-yellow-300">
                  <span className="font-bold text-green-600">“</span> {testimonial.quote}{" "}
                  <span className="font- text-green-600">”</span>
                </p>
                <p className="text-sm text-gray-400">{testimonial.comment}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Trustpilot Icon - replace if needed */}

                    <BadgeCheck className="fab fa-trustpilot mr-2 size-5 text-[#00E3F2]" />
                    <span className="ml-2 text-sm font-medium text-white">{testimonial.platform}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1 text-xl text-yellow-400">{testimonial.rating}</span>
                    {/* Star Icon */}
                    <Star className="size-5 text-yellow-400" />
                  </div>
                </div>
              </div>

            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselNext className="static m-0 size-10 rounded-full border-none p-3 bg-black " />
      </Carousel>
    </div>
  </section>
)

export default TestimonialsSection
