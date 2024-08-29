import React from 'react';

interface HeroProps {
  data: {
    title: string;
    highlightedWord: string;
    primaryButton: { text: string; link: string };
    secondaryButton: { text: string; link: string };
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className='relative'>
      <div style={{ animationDuration: "5s" }} className="absolute top-[58%] left-[0px] h-[40%] w-[40%] rounded-full opacity-30 bg-gradient-to-r from-[#B324D7] to-[#FE577F] blur-[114px]  animate-pulse duration-500"></div>
      <div style={{ animationDuration: "5s" }} className="absolute bottom-[-60%] right-[0px] h-[40%] w-[40%] rounded-full opacity-30 bg-gradient-to-r from-[#B324D7] to-[#FE577F] blur-[114px]  animate-pulse duration-500"></div>

      <section className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-20 lg:py-24 z-50">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {data.title.split(' ').map((word, index) => (
            <span key={index} className={word === data.highlightedWord ? 'text-[#fedc78]' : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
          <a
            href={data.primaryButton.link}
            className="rounded-md bg-[#5772fd] px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600"
          >
            {data.primaryButton.text}
          </a>
          <a
            href={data.secondaryButton.link}
            className="rounded-md border border-[#3a4074] px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:border-[#fedc78]"
          >
            {data.secondaryButton.text}
          </a>
        </div>


      </section>
    </div>
  );
};

export default Hero;