/*import React from "react";
import { howWorks } from "../assets/assets";

const HowWorks = () => {
  return (
    <div className="py-16 bg-[#F1F2F4]">
      <h1
        className="text-2xl md:text-5xl font-semibold text-gray-800
        text-center"
      >
        How Job portal works
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:fgrid-cols-4 gap-4 mt-10 items-center justify-center"
      >
        {howWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4"
          >
            <img src={item.icon} alt="" />
            <div className="flex flex-col items-center justify-center text-gray-800">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
*/
import React from "react";
import { howWorks } from "../assets/assets";

const HowWorks = () => {
  return (
    <div className="py-16 bg-[#F1F2F4] px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          How Job Portal Works
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          A simple process to land your dream job in just a few steps
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {howWorks.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
