import React from 'react';

interface CallToActionProps {
    data: {
        trialInfo: string;
        title: string;
        highlightedWord: string;
        description: string;
        buttonText: string;
    };
}

const CallToAction: React.FC<CallToActionProps> = ({ data }) => {
    return (
        <section
            className="relative rounded-lg bg-[#111022] px-4 py-12 font-sans text-white md:py-20"
        >
            <div
                className="absolute inset-0 z-10 mx-auto h-full w-full bg-gradient-to-br from-[#00E3F2] via-[#FF9B00] to-[#BD00FF] opacity-10 blur-[75px]"
            ></div>

            <div
                className="relative z-10 mx-auto max-w-6xl rounded-lg border border-[#ACDA49] px-4 py-20 text-center"
            >
                <div className="mb-8 text-sm font-medium text-yellow-500">
                    {data.trialInfo}
                </div>

                <h2
                    className="mx-auto mb-6 max-w-2xl text-2xl font-medium text-white sm:text-4xl"
                >
                    {data.title.split(' ').map((word, index) => (
                        <span key={index} className={word === data.highlightedWord ? 'text-yellow-500' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h2>
                <p
                    className="mx-auto mb-8 max-w-xl text-sm font-medium text-[#A1AAC9] sm:text-base"
                >
                    {data.description}
                </p>
                <button
                    className="rounded-md bg-[#5772fd] px-6 py-2.5 font-bold text-white hover:bg-blue-700"
                >
                    {data.buttonText}
                </button>
            </div>
        </section>
    );
};

export default CallToAction;