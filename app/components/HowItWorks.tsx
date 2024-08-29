import React from 'react';
import { HowItWorkStep } from '../types';

interface HowItWorksProps {
  data: {
    title: string;
    highlightedWord: string;
    steps: HowItWorkStep[];
  };
}

const HowItWorks: React.FC<HowItWorksProps> = ({ data }) => {
  return (
    <section className="mx-auto max-w-6xl bg-[#111022] py-12 font-sans text-white md:py-20">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold md:mb-16 md:text-4xl lg:text-5xl">
        {data.title.split(' ').map((word, index) => (
          <span key={index} className={word === data.highlightedWord ? 'text-[#fedc78]' : ''}>
            {word}{' '}
          </span>
        ))}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {data.steps.map((step, index) => (
          <div 
            key={index} 
            className="group h-fit rounded-lg border border-[#3C3C77] bg-[#111022]"
          >
            <div className="p-3">
              <div className="mb-6 flex h-[220px] w-full items-center justify-center rounded-md bg-gray-300 text-4xl font-bold">
                {step.imageDimensions}
              </div>
            </div>
            <div className="relative rounded-b-lg bg-[#15152c] px-4 py-6 text-center">
              <h3 className="mb-4 text-xl font-bold md:text-xl">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 md:text-base">
                {step.description}
              </p>
              {/* Gradient Hover Effect (You can customize or remove this) */}
              <div className="absolute bottom-0 right-0 h-[107px] w-[107px] rounded-full bg-transparent opacity-0 blur-[90px] transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#6243FF] group-hover:to-[#FF2828] group-hover:opacity-80"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default HowItWorks;