/*import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { jobsData, isJobApplied, setIsJobApplied, saveJob, savedJobs } =
    useContext(AppContext);
  const { id } = useParams();
  const job = jobsData.find((job) => job._id === parseInt(id));
  console.log("job", job);

  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
        JobDetails
      </h1>
      <div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-5">
              <img src={job.image} alt="" className="w-[86px] h-[86px]" />
              <div>
                <h2 className="text-lg  md:text-2xl font-semibold">
                  {job.title}
                </h2>
                <p className="text-xs sm:text-base">
                  at {job.company}{" "}
                  <span className="bg-green-200/40 p-1 rounded ml-2">
                    {job.type}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="my-5 flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Job description
              </h4>
              <p>{job.description}</p>
            </div>

            <div className="my-1 flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Job Requirements
              </h4>
              <ul className="list-disc">
                {job.requirements.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
        
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Job Benefits
              </h4>
              <ul className="list-disc">
                {job.benefits.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div onClick={() => saveJob(job)}>
                <img
                  src={assets.save_later_icon}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
              <button
                onClick={() => {
                  setIsJobApplied(!isJobApplied);
                  toast.success("Job applied successfully");
                }}
                disabled={isJobApplied}
                className={`cursor-pointer px-10 py-1 bg-primary transition  text-white rounded-full`}
              >
                {isJobApplied ? "Applied" : "Apply Now"}
              </button>
            </div>

  

            <div className="my-5 flex flex-wrap gap-3 border-gray-300 p-4">
              <p className="text-base text-gray-800 font-medium">
                Salary:{job.salary}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-base text-gray-800 font-medium">
                  Job location :{" "}
                </p>
                <p>{job.location}</p>
              </div>
            </div>

            <div>
              <p className="text-xl text-gray-800 font-bold">Job Overview</p>
              <div className="flex flex-wrap items-center gap-2 ">
                <p>posted date:{job.postedDate}</p>
                <p>Job level:{job.jobLevel}</p>
                <p>Education:{job.education}</p>
                <p>Experience:{job.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default JobDetails;*/

import React, { useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { jobsData, isJobApplied, setIsJobApplied, saveJob, savedJobs } =
    useContext(AppContext);
  const { id } = useParams();

  // Safer job lookup
  const job = jobsData.find((job) => String(job._id) === String(id));

  if (!job) {
    return (
      <div className="py-20 flex justify-center">
        <p className="text-lg text-red-500 font-medium">Job not found ❌</p>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-10 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
        Job Details
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col">
          {/* Job Header */}
          <div className="flex items-center gap-5">
            <img
              src={job.image}
              alt={`${job.company} logo`}
              className="w-[86px] h-[86px] object-contain rounded-md border"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">{job.title}</h2>
              <p className="text-sm md:text-base text-gray-600">
                at <span className="font-medium">{job.company}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded ml-2 text-xs">
                  {job.type}
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="my-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Job Description
            </h4>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="my-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Requirements
            </h4>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="my-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Benefits
            </h4>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          {/* Actions */}
          <div className="flex gap-4 items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                saveJob(job);
                toast.success("Job saved!");
              }}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <img
                src={assets.save_later_icon}
                alt="Save Job"
                className="w-6 h-6"
              />
            </button>

            <button
              onClick={() => {
                setIsJobApplied(true);
                toast.success("Job applied successfully ✅");
              }}
              disabled={isJobApplied}
              className={`px-8 py-2 rounded-full font-medium transition ${
                isJobApplied
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              {isJobApplied ? "Applied" : "Apply Now"}
            </button>
          </div>

          {/* Salary & Location */}
          <div className="p-4 border rounded-lg space-y-2">
            <p className="text-gray-800 font-medium">
              💰 Salary: <span className="text-gray-700">{job.salary}</span>
            </p>
            <p className="text-gray-800 font-medium">
              📍 Location: <span className="text-gray-700">{job.location}</span>
            </p>
          </div>

          {/* Job Overview */}
          <div className="p-4 border rounded-lg space-y-2">
            <p className="text-lg font-semibold text-gray-800">Job Overview</p>
            <p className="text-gray-700">📅 Posted: {job.postedDate}</p>
            <p className="text-gray-700">📌 Level: {job.jobLevel}</p>
            <p className="text-gray-700">🎓 Education: {job.education}</p>
            <p className="text-gray-700">🧑‍💻 Experience: {job.experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
