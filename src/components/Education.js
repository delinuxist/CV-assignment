import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col mt-8 max-w-3xl mx-auto shadow-lg ring-1 ring-slate-500 rounded-lg p-3">
      <h1 className=" text-center p-2 text-2xl">Education</h1>
      {/* school */}
      <div className="flex flex-row justify-between">
        {/* schoolName */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="schoolName">
            School Name
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md max-w-xs"
            type="text"
            placeholder="e.g Kwame Nkrumah University of Science and Technology "
          />
        </div>
        {/* schoolLocation */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="schoolLocation">
            School Location
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g Kumasi, Ghana"
          />
        </div>
      </div>
      {/* degree */}
      <div className="flex flex-col w-ful">
        <label className="p-2 " htmlFor="degree">
          Degree
        </label>
        <input
          className="p-2 ring-1 mx-2 rounded-md"
          type="text"
          placeholder="e.g Masters"
        />
      </div>
      {/* field */}
      <div className=" flex flex-row ">
        {/* field of study */}
        <div className=" flex flex-col w-full">
          <label className="p-2 " htmlFor="fied">
            Field of Study
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g Computer Science"
          />
        </div>
        {/* startDate */}
        <div className=" flex flex-col w-full basis-1/4">
          <label className="p-2 " htmlFor="startDate">
            Start Date
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="date"
            placeholder="Select"
          />
        </div>
        {/* endDate */}
        <div className=" flex flex-col basis-1/4 w-full">
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

export default Education;
