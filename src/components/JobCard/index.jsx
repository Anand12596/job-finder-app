import React from "react";
import dayjs from "dayjs";

function JobCard(props) {
  const postedDate = dayjs(props.postedOn);
  const today = dayjs();
  const diffInDays = today.diff(postedDate, "day");

  return (
    <div className="mx-20 mb-6">
      <div className="flex justify-between items-start px-10 py-6 bg-zinc-200 rounded-xl border border-gray-300 shadow-md hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all">
        
        {/* LEFT SECTION */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold mb-1">
            {props.title} - {props.company}
          </h1>

          <p className="text-sm text-gray-600 mb-3">
            {props.type} • {props.experience} • {props.location}
          </p>

          {/* SKILL TAGS */}
          <div className="flex flex-wrap gap-3 mt-1">
            {props.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-300 px-3 py-1 rounded-md text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-right flex flex-col items-end">
          <p className="text-sm text-gray-700 mb-4">
            Posted {diffInDays} days ago
          </p>

          <a href={props.job_link} target="_blank">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Apply
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default JobCard;
