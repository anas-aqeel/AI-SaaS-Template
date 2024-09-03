"use client"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React from "react"

const Header = () => {
  let currentRoute = usePathname().split('/')[2]
  return (
    <div className="flex h-16  w-full items-center justify-between border-b border-b-neutral-800 bg-black px-4">
      <div className="hidden items-center gap-x-1 text-sm font-medium text-gray-300 lg:flex">
        <a
          className="border-b border-transparent pb-0.5 transition-all hover:border-blue-500 hover:text-blue-500"
          href="/dashboard"
        >
          Dashboard
        </a>
        <ChevronRight className="text-gray-300 mb-1.5" size={18} />
        <p className="border-b border-transparent pb-0.5 text-white">{currentRoute}</p>
      </div>
      <div className={`text-xl font-semibold text-white`}>CodingStella</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="hidden rounded-md bg-neutral-800 px-3 py-2 outline-none placeholder:text-neutral-100 focus:bg-neutral-50 focus:text-black focus:placeholder:text-neutral-800 md:flex"
        />
        <button className="size-10 rounded-full text-neutral-400 hover:text-white focus:outline-none">
          <Image
            height={"40"}
            width={"40"}
            className="size-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/71166989?v=4"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export default Header
