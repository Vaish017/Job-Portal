import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import JobCard from "../components/JobCard";
const AllJobs = () => {
  const { jobsData, query } = useContext(AppContext);
  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
        Available Jobs
      </h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12">
        {filteredJobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;

/*import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const { jobsData, query } = useContext(AppContext);

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-16 px-4 md:px-16 lg:px-36 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
        Available Jobs
      </h1>

      {filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No jobs"
            className="w-40 h-40 mb-6"
          />
          <p className="text-gray-500 text-lg">
            No jobs found for{" "}
            <span className="font-semibold text-gray-800">"{query}"</span>.
          </p>
          <p className="text-gray-400 mt-2">
            Try adjusting your search or check back later.
          </p>
        </div>
      ) : (
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-shadow duration-300"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllJobs;

*/
