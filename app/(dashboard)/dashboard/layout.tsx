import React from "react"
import PromptInput from "./_components/PromptInput"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col justify-between bg-neutral-900 text-white">
      <div className="hide h-[calc(100vh-190px)] overflow-x-scroll">{children}</div>
      <div className="h-[125px]">
        <PromptInput />
      </div>
    </div>
  )
}

export default layout
