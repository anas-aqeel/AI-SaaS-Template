import React from 'react';
import { NavLink } from '../types';

interface FooterProps {
    data: {
        companyName: string;
        logo: { src: string; alt: string };
        description: string;
        companyLinks: NavLink[];
        resourceLinks: NavLink[];
        socialLinks: { platform: string; link: string }[];
        copyright: string;
    };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-[#111022] py-12 md:py-20 font-sans text-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-12">
                    {/* Company Info */}
                    <div className='md:col-span-3'>
                        <div className="flex items-center mb-3">
                            <img
                                src={data.logo.src}
                                alt={data.logo.alt}
                                className="h-10 w-10 rounded-full bg-yellow-400 object-contain"
                            />
                        </div>
                        <h4 className="text-xl font-semibold mb-4">{data.companyName}</h4>
                        <p className="text-sm text-gray-400 max-w-[360px]">
                            {data.description}
                        </p>
                    </div>

                    <div className='md:col-span-3 flex gap-5 justify-between'>
                        {/* Company Links */}
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Company</h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {data.companyLinks.map((link: NavLink) => (
                                    <li key={link.text}>
                                        <a href={link.link} className="hover:text-[#fedc78] font-medium">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resource Links */}
                        <div>
                            <h5 className="text-lg font-semibold mb-4">Resources</h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {data.resourceLinks.map((link: NavLink) => (
                                    <li key={link.text}>
                                        <a href={link.link} className="hover:text-[#fedc78] font-medium">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                    {/* Stay Connected */}
                    <div className='md:col-span-4'>
                        <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>

                        {/* Email Signup  */}
                        <form className="mb-4 flex items-center w-full border border-[#4B4B70] rounded-lg overflow-hidden">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="rounded-l-md flex-1 bg-[#0F0F24] py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-[#5772fd] hover:bg-blue-600 text-white rounded-r-md px-4 py-2.5"
                            >
                                <span className="sr-only">Subscribe</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                                <a
                                    key={link.platform}
                                    href={link.link}
                                    className="text-gray-400 hover:text-[#fedc78] font-medium"
                                    aria-label={`Connect on ${link.platform}`}
                                >
                                    <i className={`fab fa-${link.platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-12">
                    {data.copyright}
                </p>
            </div>
        </footer>
    );
};

export default Footer;