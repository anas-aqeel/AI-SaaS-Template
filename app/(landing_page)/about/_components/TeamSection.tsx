import React from "react"
import { Data, TeamSectionMember } from "../../../types"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface TeamSectionProps {
  data: Data["team"]
}

const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
  return (
    <section className={`bg-${data.backgroundColor} py-20 xl:py-44 2xl:py-52 text-${data.textColor}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-3 text-4xl font-bold text-yellow-400">{data.title}</h1>
          <p className="text-green-200">{data.description}</p>
        </div>

        <div className="mt-14 px-3 2xl:mb-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.members.map((member: TeamSectionMember, index: number) => (
              <div
                key={index}
                className="flex flex-col rounded-xl p-4 md:p-6 border border-[#3C3C77] "
              >
                <div className="flex items-center gap-x-4">
                  <Image
                    className="rounded-full w-20 h-20"
                    placeholder="blur"
                    src={member.image.src}
                    alt={member.image.alt}
                  />
                  <div className="grow">
                    <h3 className="font-medium text-neutral-200">{member.name}</h3>
                    <p className="text-xs uppercase text-neutral-500">
                      {member.position}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laboriosam ut obcaecati?</p>
                <div className="mt-3 space-x-1">
                  {member.socialLinks.map((social, i) => (
                    <a
                      key={i}
                      className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-neutral-700 text-neutral-400 hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700"
                      href={social.link}
                    >
                      <social.platform className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

            ))}
            <a
              className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-neutral-700 hover:shadow-sm focus:outline-none focus:shadow-sm"
              href="#"
            >
              <h3 className="text-lg text-neutral-200">We are hiring!</h3>
              <div>
                <span className="inline-flex items-center gap-x-2 text-blue-500 group-hover:text-blue-400 group-focus:text-blue-400">
                  See all opening positions
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>



      </div>
    </section >
  )
}

export default TeamSection
