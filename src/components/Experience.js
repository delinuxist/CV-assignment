import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col mt-8 max-w-3xl mx-auto shadow-lg ring-1 ring-slate-500 rounded-lg p-3">
      <h1 className=" text-center p-2 text-2xl">Work Experience </h1>
      {/* job */}
      <div className="flex flex-row justify-between">
        {/* job title*/}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="jobTitle">
            Job Title
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md max-w-xs"
            type="text"
            placeholder="e.g Amazon"
          />
        </div>
        {/* employer */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="employer">
            Employer
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g H&amp;M"
          />
        </div>
      </div>

      {/* location */}
      <div className="flex flex-row justify-between">
        {/* city */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="city">
            City
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md max-w-xs"
            type="text"
            placeholder="e.g Accra"
          />
        </div>
        {/* country*/}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="country">
            Country
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g Ghana"
          />
        </div>
      </div>

      {/* date */}
      <div className="flex flex-row justify-between">
        {/* startDate */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="startDate">
            Start Date
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md max-w-xs"
            type="date"
            placeholder="Select"
          />
        </div>
        {/* endDate */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="endDate">
            End Date
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="date"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
