import { Cloud, ImagePlus, SendHorizontal } from "lucide-react"
import React from "react"

const PromptInput = () => {
  return (
    <div className="bg-neutral-850 border-t border-neutral-800 p-4 pb-1">
      <div className=" mx-auto max-w-4xl">
        <div className="flex items-center rounded-lg bg-neutral-800 px-4 py-2 text-sm focus-within:ring-2 focus-within:ring-neutral-700">
          <span className="mr-3 text-xl text-neutral-400">
            <Cloud />
          </span>
          <input
            type="text"
            placeholder="Send a message..."
            className="grow bg-transparent text-white placeholder:text-neutral-500 focus:outline-none"
          />
          <div className="ml-3 flex items-center gap-x-1">
            <button className="flex size-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-600 hover:text-white">
              <ImagePlus size={20} />
            </button>
            <button className="flex size-10 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white hover:text-black">
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-4xl text-center  text-xs text-neutral-600">
          AiWave can make mistakes. Consider checking important information.
        </div>
      </div>
    </div>
  )
}

export default PromptInput
