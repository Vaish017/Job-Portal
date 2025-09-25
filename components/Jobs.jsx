/*import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import JobCard from "./JobCard";
const Jobs = () => {
  const { jobsData } = useContext(AppContext);
  return (
    <div className="py-16">
      <h1 className="text=2xl md:text-5xl font-semibold text-gray-800">Jobs</h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12">
        {jobsData.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
*/
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobCard from "./JobCard";

const Jobs = () => {
  const { jobsData } = useContext(AppContext);

  return (
    <div className="py-16 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
        Latest Job Openings
      </h1>
      <p className="text-center text-gray-600 mt-2 text-sm md:text-base">
        Explore the most recent job opportunities tailored for you
      </p>

      {/* Jobs Grid */}
      {jobsData && jobsData.length > 0 ? (
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobsData.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500 text-lg">No jobs available right now.</p>
        </div>
      )}
    </div>
  );
};

export default Jobs;
