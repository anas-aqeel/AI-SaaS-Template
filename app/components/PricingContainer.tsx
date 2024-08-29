"use client"
import React, { useState } from 'react'
import PricingPlans from './PricingPlans';
import data from '../data';

const PricingContainer = () => {
    const [isYearly, setIsYearly] = useState(false);

    const handlePricingToggle = () => {
        setIsYearly(!isYearly);
    };
    return (
        <section className="relative bg-[#111022] py-12 font-sans text-white md:py-20">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-0 mx-auto h-[70%] w-full max-w-[1180px] bg-gradient-to-br from-[#00E3F2] via-[#FF9B00] to-[#E6F85E] opacity-15 blur-[75px]"></div>
            <div className="relative z-50 mx-auto max-w-7xl px-4 text-center">
                {/* ... (pricing plan title remains the same) ... */}
                <div className="mb-10 flex items-center justify-center space-x-4">
                    <span className="text-gray-400">Pay Monthly</span>
                    <button
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isYearly ? 'bg-[#fedc78]' : 'bg-white'
                            }`}
                        onClick={handlePricingToggle}
                        role="switch"
                        aria-checked={isYearly}
                    >
                        <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isYearly ? 'translate-x-5' : 'translate-x-0'
                                }`}
                        ></span>
                    </button>
                    <span className="font-semibold text-[#fedc78]">Pay Yearly</span>
                    <span className="font-medium text-green-500">Save 20%</span>
                </div>
                <PricingPlans data={data.pricingPlans} isYearly={isYearly} />
            </div>
        </section>
    )
}

export default PricingContainer