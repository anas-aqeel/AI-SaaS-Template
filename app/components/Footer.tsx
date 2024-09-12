import React from "react"
import { NavLink } from "../types"
import Link from "next/link"

interface FooterProps {
  data: {
    companyName: string
    logo: { src: string; alt: string }
    description: string
    companyLinks: NavLink[]
    resourceLinks: NavLink[]
    socialLinks: { platform: string; link: string }[]
    copyright: string
  }
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-[#111022] py-12 font-sans text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-10">
          {/* Company Info */}
          <div className="md:col-span-3">
            <div className="mb-3 flex items-center">
              <div className="size-10 rounded-full bg-yellow-400 object-contain" />
              {/* <img
                src={data.logo.src}
                alt={data.logo.alt}
                className="size-10 rounded-full bg-yellow-400 object-contain"
              /> */}
            </div>
            <h4 className="mb-4 text-xl font-semibold">{data.companyName}</h4>
            <p className="max-w-[360px] text-sm text-gray-400">{data.description}</p>
          </div>

          <div className="flex justify-between gap-5 md:col-span-3">
            {/* Company Links */}
            <div>
              <h5 className="mb-4 text-lg font-semibold">Company</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {data.companyLinks.map((link: NavLink) => (
                  <li key={link.text}>
                    <Link href={link.link} className="font-medium hover:text-[#fedc78]">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource Links */}
            <div>
              <h5 className="mb-4 text-lg font-semibold">Resources</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {data.resourceLinks.map((link: NavLink) => (
                  <li key={link.text}>
                    <Link href={link.link} className="font-medium hover:text-[#fedc78]">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="md:col-span-4">
            <h5 className="mb-4 text-lg font-semibold">Stay Connected</h5>

            {/* Email Signup  */}
            <form className="mb-4 flex w-full items-center overflow-hidden rounded-lg border border-[#4B4B70]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 rounded-l-md bg-[#0F0F24] px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="rounded-r-md bg-[#5772fd] px-4 py-2.5 text-white hover:bg-blue-600">
                <span className="sr-only">Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>

            <div className="flex space-x-4">
              {data.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.link}
                  className="font-medium text-gray-400 hover:text-[#fedc78]"
                  aria-label={`Connect on ${link.platform}`}
                >
                  <i className={`fab fa-${link.platform}`}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-sm text-gray-400">{data.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
