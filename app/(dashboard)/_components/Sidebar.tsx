"use client"
import {
  CircleGauge,
  CodeXml,
  FileCode,
  FileText,
  Heart,
  Image as ImageIcon,
  LogOut,
  Menu,
  Search,
  Settings,
  Text,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const menuItems = [
  { name: "Prompt Generation", icon: Text },
  { name: "Image to HTML", icon: ImageIcon },
  { name: "Image to Text", icon: FileText },
  { name: "Text to HTML", icon: CodeXml },
  { name: "HTML to JSX", icon: FileCode },
  { name: "Code Optimization", icon: CircleGauge },
  { name: "Saved", icon: Heart },
  { name: "Setting", icon: Settings },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`fixed left-0 top-0 flex h-full flex-col justify-between text-nowrap border-r border-neutral-900 bg-[#000000] p-4 transition-all duration-500 lg:static ${
        isOpen ? "w-64" : "w-[74px]"
      }`}
    >
      <div>
        <div className={`relative flex items-center`}>
          <div className="relative flex items-center space-x-2">
            <div
              className={`text-white transition-all duration-500 ${
                isOpen ? "max-w-full opacity-100" : "max-w-0 overflow-hidden opacity-0"
              }`}
            >
              <span className="text-xl font-semibold">CodingStella</span>
            </div>
          </div>
          <button onClick={toggleSidebar} className="absolute right-2 text-white">
            <span className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
              <Menu />
            </span>
          </button>
        </div>
        <ul className="mt-10">
          <li className="group relative">
            <button
              className={`${
                isOpen ? "justify-start" : ""
              } flex w-full items-center rounded-md bg-neutral-800 p-2 py-3 pl-[10px] text-white transition-none hover:bg-gray-50 hover:text-black`}
            >
              <Search size={20} />
              <span
                className={` text-sm font-medium transition-all duration-500 hover:transition-none ${
                  isOpen ? "ml-4 max-w-full opacity-100" : "max-w-0 overflow-hidden opacity-0"
                }`}
              >
                Search
              </span>
            </button>
          </li>
          {menuItems.map((item, index) => (
            <li className="group relative mt-4" key={index}>
              <button
                className={`${
                  isOpen ? "justify-start" : ""
                } flex w-full items-center rounded-md p-2 pl-[11px] text-white  hover:bg-gray-50 hover:text-black`}
              >
                <item.icon size={20} />
                <span
                  className={`text-sm font-medium transition-state duration-500 ${
                    isOpen ? "ml-4 max-w-full opacity-100" : "max-w-0 overflow-hidden opacity-0"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="group relative mt-4 flex items-center">
        <div
          className={`${isOpen ? "justify-start" : ""} flex w-full items-center rounded-md p-2 pl-[11px] text-white`}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/71166989?v=4" // update the path to your profile image
            alt="Profile"
            width={40}
            height={40}
            className={`rounded-full ${isOpen ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`ml-4 transition-all duration-500 ${
              isOpen ? "max-w-full opacity-100" : "max-w-0 overflow-hidden opacity-0"
            }`}
          >
            <div className="text-sm font-medium">Stella Army</div>
            <div className="text-xs font-light">Web Designer</div>
          </div>
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
          <LogOut size={20} className="text-white hover:text-red-500" />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
