import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const PostJob = () => {
  const { navigate } = useContext(AppContext);
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    image: null,
    requirements: "",
    benefits: "",
    jobLevel: "",
    education: "",
    experience: "",
  });
  const [preview, setPreview] = useState(null);
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setJobData({ ...jobData, logo: selectedFile });
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("jobData", jobData);
    navigate("/employer/jobs-list");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-500 max-w-3xl w-full mx-4 md:p-6 p-4 text-left text-sm
      rounded shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Post a new job
      </h2>

      {preview && (
        <div>
          <img
            src={preview}
            alt=""
            className="w-24 h-24 object-cover rounded-full border shadow"
          />
        </div>
      )}

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          name="image"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0 file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
        />
      </div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        placeholder="Enter job title"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      />
      <label htmlFor="title">Company Name</label>
      <input
        type="text"
        name="title"
        value={jobData.company}
        onChange={handleChange}
        placeholder="Enter job title"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      />
      <label>Job Description</label>
      <textarea
        type="text"
        name="description"
        value={jobData.description}
        onChange={handleChange}
        rows="3"
        placeholder="Describe the job role"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      ></textarea>
      <label>Location</label>
      <input
        type="text"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        placeholder="Enter job title"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      />
      <label>Job Type</label>
      <select
        name="type"
        value={jobData.type}
        onChange={handleChange}
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
      >
        <option value="">Select job type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option>
      </select>
      <label>Job Description</label>
      <textarea
        type="text"
        name="requirements"
        value={jobData.requirements}
        onChange={handleChange}
        rows="2"
        placeholder="Seperate with comma"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      ></textarea>
      <label>Benefits</label>
      <textarea
        type="text"
        name="description"
        value={jobData.benefits}
        onChange={handleChange}
        rows="3"
        placeholder="Seperate with comma"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      ></textarea>
      <label>Education</label>
      <input
        type="text"
        name="education"
        value={jobData.education}
        onChange={handleChange}
        placeholder="e.g. Bachelor's degree"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
        required
      />
      <label>Experience</label>
      <input
        type="text"
        name="experience"
        value={jobData.experience}
        onChange={handleChange}
        placeholder="e.g. Bachelor's degree"
        className="w-full border mt-1 border-gray-500/3 focus:border-indigo-500  outline-none rounded py-2.5 px-4 mb-4"
      />
      <button
        type="submit"
        className="w-full my-3 bg-primary active:scale-95 transition py-2.5
      rounded text-white"
      >
        Post Job
      </button>
    </form>
  );
};

export default PostJob;
