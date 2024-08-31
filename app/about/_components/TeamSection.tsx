import React from "react"
import { Data, TeamSectionMember } from "../../types"

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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {data.members.map((member: TeamSectionMember, index: number) => (
              <div key={index}>
                <div className="rounded-lg border border-yellow-400 bg-transparent p-3 shadow-xl hover:border-green-500 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-6">
                    {/* <img src={member.image} alt={member.name} className="h-32 rounded-xl" /> */}
                    <div className="h-32 rounded-xl" />
                    <div>
                      <h2 className="mb-1 text-lg font-medium text-white">{member.name}</h2>
                      <p className="text-base font-medium text-gray-400">{member.position}</p>
                      <div className="mt-4 flex items-center gap-1 sm:gap-3">
                        {member.socialLinks.map((link) => (
                          <a
                            key={link.platform}
                            href={link.link}
                            className="flex size-8 items-center justify-center rounded-full border fill-gray-400 transition-all duration-300 hover:bg-sky-700 hover:fill-white"
                            aria-label={`Connect with ${member.name} on ${link.platform}`} // Accessibility
                          >
                            <link.platform className={`size-4`} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
