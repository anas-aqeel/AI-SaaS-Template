import React from 'react';
import { UseCase } from '../types';

interface WritingUseCasesProps {
    data: UseCase[];
}

const WritingUseCases: React.FC<WritingUseCasesProps> = ({ data }) => (
    <section className="bg-[#111022] py-12 font-sans text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 text-xl font-bold text-[#ACDA49] md:text-2xl">
                Writing Use Cases
            </h2>
            <h3 className="mb-8 text-3xl font-bold md:mb-16 md:text-4xl">
                Write Better Content 🚀 Faster, <br className="hidden md:block" />A
                Journey of Discovery & Growth
            </h3>
            <div className="grid grid-cols-1 gap-6 text-start sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {data.map((useCase, index) => (
                    <div
                        key={index}
                        className="group relative rounded-lg border border-[#3C3C77] p-8"
                    >
                        <div className="mb-6 flex items-center justify-start">
                            <useCase.icon
                                className={`h-8 w-8 text-[#fedc78]`}
                            />
                        </div>
                        <h4 className="mb-4 text-xl font-bold text-white md:text-lg">
                            {useCase.title}
                        </h4>
                        <p className="mb-6 text-sm text-gray-400 md:text-base">
                            {useCase.description}
                        </p>
                        <button className="font-semibold text-[#919191] transition duration-300 ease-in-out hover:text-gray-400">
                            Get Started →
                        </button>

                        {/* Gradient Hover Effect (You can customize or remove this) */}
                        <div className="absolute bottom-0 right-0 h-[107px] w-[107px] rounded-full bg-transparent opacity-0 blur-[90px] transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#6243FF] group-hover:to-[#FF2828] group-hover:opacity-80"></div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <button className="rounded-md bg-[#5772fd] px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600">
                    Show All Use Cases →
                </button>
            </div>
        </div>
    </section>
);

export default WritingUseCases;