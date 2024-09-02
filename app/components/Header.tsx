import React from "react"
import { Button, NavLink } from "../types" // Adjust the import path as necessary

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
    <header className="sticky inset-x-0 top-0 z-[5000] flex  w-full flex-wrap backdrop-blur-[99999999px] md:flex-nowrap md:justify-start">
      <nav className="relative mx-auto w-full max-w-[85rem] px-4 py-3 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:px-8">
        {/* Logo w/ Collapse Button */}
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-white focus:opacity-80 focus:outline-none"
            href="/"
            aria-label="Brand"
          >
            {data.companyName}
          </a>

          {/* Collapse Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="relative flex items-center justify-center rounded-lg border border-neutral-700 text-sm font-semibold text-white hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              id="hs-header-classic-collapse"
              aria-expanded="false"
              aria-controls="hs-header-classic"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-classic"
            >
              <svg
                className="hs-collapse-open:hidden size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        {/* End Logo w/ Collapse Button */}

        {/* Collapse */}
        <div
          id="hs-header-classic"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
          aria-labelledby="hs-header-classic-collapse"
        >
          <div className="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
            <div className="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:justify-end md:gap-1 md:py-0">
              {data.navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="flex items-center p-2 text-sm text-gray-300 hover:text-[#fedc78] focus:outline-none"
                >
                  {/* Add SVG or icon if needed */}
                  {link.text}
                </a>
              ))}

              {/* Button Group */}
              <div className="relative mt-1 flex flex-wrap items-center gap-x-1.5 before:absolute before:-start-px before:top-1/2 before:block before:h-4 before:w-px before:-translate-y-1/2 before:bg-neutral-700 md:ms-1.5 md:mt-0 md:ps-2.5">
                {data.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    className="flex  h-8 w-24 items-center justify-center rounded-md border border-transparent text-sm text-gray-300 transition-all duration-500 hover:border-yellow-400 hover:text-[#fedc78] focus:outline-none"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
              {/* End Button Group */}
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  )
}

export default Header
