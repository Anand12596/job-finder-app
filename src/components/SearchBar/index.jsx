import React, { useState } from "react";

function SearchBar({ fetchJobsCustom, resetFilters }) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  });

  const handleChange = (e) => {
    setJobCriteria((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const search = async () => {
    await fetchJobsCustom(jobCriteria);
  };

  const clear = () => {
    setJobCriteria({
      title: "",
      location: "",
      experience: "",
      type: ""
    });
    resetFilters(); // Reload all jobs
  };

  return (
    <div className="flex gap-4 my-10 justify-center px-10">

      {/* TITLE */}
      <select
        name="title"
        value={jobCriteria.title}
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="React Native Developer">React Native Developer</option>
        <option value="Data Analyst">Data Analyst</option>
      </select>

      {/* TYPE */}
      <select
        name="type"
        value={jobCriteria.type}
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      {/* LOCATION */}
      <select
        name="location"
        value={jobCriteria.location}
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      {/* EXPERIENCE */}
      <select
        name="experience"
        value={jobCriteria.experience}
        onChange={handleChange}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option value="" disabled hidden>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior">Junior</option>
        <option value="Mid-Level">Mid-Level</option>
        <option value="Senior">Senior</option>
      </select>

      <button
        onClick={search}
        className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md"
      >
        Search
      </button>

      <button
        onClick={clear}
        className="w-32 bg-gray-500 text-white font-bold py-3 rounded-md"
      >
        Reset
      </button>
    </div>
  );
}

export default SearchBar;
