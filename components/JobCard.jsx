/*import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

import { assets } from "../assets/assets";
const JobCard = ({ job }) => {
  const { navigate } = useContext(AppContext);
  return (
    <div
      onClick={() => navigate(`/job-details/${job._id}`)}
      className="p-5 flex flex-col gap-1 rounded-md border border-gray-300 w-auto
    lg:w-[424px] bg-gradient-to-r from-purple-200/80 cursor-pointer"
    >
      <h1 className="text-2xl font-medium text-gray-800">{job.title}</h1>
      <div className="flex gap-4 items-center">
        <p className="text-sm bg-green-300/40 p-1">{job.type}</p>
        <p className="text-sm text-gray-800">Salary{job.salary}</p>
      </div>
      <div className="flex gap-4 items-center my-2">
        <img src={job.image} alt="" className="w-[48px] h-[48px]" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <h3>{job.company}</h3>
          <h3>{job.location}</h3>
        </div>
        <div>
          <img src={assets.save_later_icon} alt="" className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default JobCard;*/

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  const { navigate } = useContext(AppContext);

  return (
    <div
      onClick={() => navigate(`/job-details/${job._id}`)}
      className="p-5 flex flex-col gap-3 rounded-xl border border-gray-200 
      bg-white hover:shadow-md transition-shadow cursor-pointer w-full lg:w-[424px]"
    >
      {/* Job Title */}
      <h1 className="text-xl font-semibold text-gray-900 truncate">
        {job.title}
      </h1>

      {/* Job Type & Salary */}
      <div className="flex flex-wrap gap-3 items-center text-sm">
        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md">
          {job.type}
        </span>
        <span className="text-gray-700 font-medium">
          💰 Salary: {job.salary}
        </span>
      </div>

      {/* Company Info */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-3">
          <img
            src={job.image}
            alt={`${job.company} logo`}
            className="w-12 h-12 object-contain rounded-md border"
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-800">{job.company}</span>
            <span className="text-gray-600 text-sm">{job.location}</span>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Saved job:", job._id); // Replace with save handler
          }}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <img
            src={assets.save_later_icon}
            alt="Save Job"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
