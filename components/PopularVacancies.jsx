/*import React from "react";
import { vacancies } from "../assets/assets";

const PopularVacancies = () => {
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-indigo-100 text-indigo-800",
    "bg-teal-100 text-teal-800",

    "bg-pink-100 text-pink-800",
    "bg-red-100 text-red-800",
  ];
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
        PopularVacancies
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 gap-4 mt-10"
      >
        {vacancies.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`flex flex-col max-w-[250px]
          items-center justify-center gap-1 border border-gray-300 rounded-xl py-6 px-4 shadow ${colorClass} `}
            >
              <h3 className="text-lg font-semibold ">{item.title}</h3>
              <p className="text-sm">{item.count} open Positions</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularVacancies;
*/

import React from "react";
import { vacancies } from "../assets/assets";

const PopularVacancies = () => {
  const colors = [
    "bg-blue-100 text-blue-900",
    "bg-green-100 text-green-900",
    "bg-yellow-100 text-yellow-900",
    "bg-purple-100 text-purple-900",
    "bg-indigo-100 text-indigo-900",
    "bg-teal-100 text-teal-900",
    "bg-pink-100 text-pink-900",
    "bg-red-100 text-red-900",
  ];

  return (
    <div className="py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Popular Vacancies
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Browse the most in-demand job categories right now
        </p>
      </div>

      {/* Vacancy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vacancies.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center gap-2 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out ${colorClass}`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.count} open positions</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularVacancies;
