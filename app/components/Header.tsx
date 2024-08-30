import React from "react"
import { Button, NavLink } from "../types" // Assuming types.ts is in the parent directory

interface HeaderProps {
  data: {
    logo: { src: string; alt: string }
    companyName: string
    navLinks: NavLink[]
    buttons: Button[]
  }
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
      {/* Logo and Company Name */}
      <div className="flex items-center">
        <div className="mr-3 size-10 rounded-full bg-yellow-400">
          <img src={data.logo.src} alt={data.logo.alt} className="size-full object-contain" />
        </div>
        <span className="text-xl font-semibold">{data.companyName}</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden space-x-6 font-medium text-gray-300 md:flex">
        {data.navLinks.map((link, index) => (
          <a key={index} href={link.link} className="hover:text-[#fedc78]">
            {link.text}
          </a>
        ))}
      </nav>

      {/* Buttons */}
      <div className="hidden space-x-0 font-medium text-gray-300 md:flex">
        {data.buttons.map((button, index) => (
          <a
            key={index}
            href={button.link}
            className="rounded-md border border-transparent px-6 py-1.5 hover:border-[#fedc78] hover:text-[#fedc78]"
          >
            {button.text}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button (You can add logic for this) */}
      <button className="md:hidden">{/* ... SVG for menu icon ... */}</button>
    </header>
  )
}

export default Header
