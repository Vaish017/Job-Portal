import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={assets.hero_img} alt="" />
        </div>
        <div>
          <h2 className="text-3xl  font-semibold  text-gray-800">About Us"</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit .
            Perspiciatis libero temporibus ex quia rem laudantium odio, odit
            atque placeat consequatur. Corrupti soluta accusantium distinctio
            quasi doloribus neque quo impedit? Amet?
          </p>
        </div>
      </div>
      <div className="mt-12 bg-gray-100 rounded-xl p-6 shadow-inner">
        <h3 className="text=2xl text-gray-700 mb-3 font-semibold">
          Why choose us?
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Thousands of verified job listing
          <br />
          Easy application process <br />
          Personalized job recommendations
          <br /> Secure and trustworthy Platform
        </p>
      </div>
    </div>
  );
};

export default About;
