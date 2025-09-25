/*import React from "react";
import { assets } from "../assets/assets";
import { heroData } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-16 bg-[#F1F2F4]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="max-w-[450px] e-full flex flex-col px-4 gap-5">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
            Find a job that suits your interest & skill
          </h1>
          <p className="text-sm text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        
        <div>
          <img src={assets.hero_img} alt="" />
        </div>
      </div>

      <div className=" flex flex-wrap items-center justify-center gap-2 mt-10">
        {heroData.map((item) => (
          <div
            key={item._id}
            className="bg-white w-[270px] h-[112px] flex items-center gap-4 justify-center"
          >
            <img src={item.icon} alt="" />
            <div className=" flex flex-col gap-1">
              <p>{item.count}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
*/

import React from "react";
import { assets, heroData } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-16 bg-[#F1F2F4]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12">
        {/* Left Section */}
        <div className="max-w-[500px] w-full flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find a job that suits your interest & skill
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end w-full">
          <img
            src={assets.hero_img}
            alt="Hero"
            className="max-w-[400px] md:max-w-[500px] w-full"
          />
        </div>
      </div>

      {/* Hero Data Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-12 px-6">
        {heroData.map((item) => (
          <div
            key={item._id}
            className="bg-white w-[260px] h-[120px] flex items-center gap-4 p-4 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12" />
            <div className="flex flex-col">
              <p className="text-xl font-bold text-gray-800">{item.count}</p>
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
