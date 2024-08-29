import React from 'react';
import { Statistic } from '../types';

interface StatisticsProps {
  data: Statistic[];
}

const Statistics: React.FC<StatisticsProps> = ({ data }) => (
  <>
    {data.map((stat, index) => (
      <div
        key={index}
        className="group flex flex-col items-center justify-center rounded-lg bg-[#15152c] p-8 transition duration-300 ease-in-out hover:bg-[#21243e]"
      >
        <div className="mb-4">
          <i className={`fas fa-${stat.icon} h-12 w-12 text-[#5772fd] group-hover:animate-bounce`}></i>{' '}
          {/* Assuming Font Awesome is used for icons */}
        </div>
        <h4 className="mb-2 text-4xl font-bold">{stat.value}</h4>
        <p className="text-center text-gray-400">{stat.description}</p>
      </div>
    ))}
  </>
);

export default Statistics;