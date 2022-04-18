import React from "react";

const Personal = () => {
  return (
    <div className="flex flex-col mt-8 max-w-3xl mx-auto shadow-lg ring-1 ring-slate-500 rounded-lg p-3">
      <h1 className=" text-center p-2 text-2xl">Personal Information </h1>
      {/* Name */}
      <div className="flex flex-row justify-between">
        {/* firstName */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="firstname">
            Firstname
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md max-w-xs"
            type="text"
            placeholder="e.g John"
          />
        </div>
        {/* surName */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="name">
            Surname
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g Doe"
          />
        </div>
      </div>
      {/* end of name */}
      {/* profession */}
      <div className="flex flex-col w-ful">
        <label className="p-2 " htmlFor="profession">
          Profession
        </label>
        <input
          className="p-2 ring-1 mx-2 rounded-md"
          type="text"
          placeholder="e.g Software Engineer"
        />
      </div>
      {/* end of profession */}
      {/* residence */}
      <div className=" flex flex-row ">
        {/* city */}
        <div className=" flex flex-col w-full">
          <label className="p-2 " htmlFor="city">
            City
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g Accra"
          />
        </div>
        {/* country */}
        <div className=" flex flex-col w-full basis-1/4">
          <label className="p-2 " htmlFor="country">
            Country
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g Ghana"
          />
        </div>
        {/* postal code */}
        <div className=" flex flex-col basis-1/4 w-full">
          <label className="p-2 " htmlFor="post-code">
            Postal Code
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g 00233"
          />
        </div>
      </div>
      {/* end of residence */}
      {/* contact */}
      <div className=" flex flex-row">
        {/* phone */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="phone">
            Phone
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g +233-(345)-(235)-(234)"
          />
        </div>
        {/* email */}
        <div className="flex flex-col w-full">
          <label className="p-2 " htmlFor="email">
            Email
          </label>
          <input
            className="p-2 ring-1 mx-2 rounded-md"
            type="text"
            placeholder="e.g johnDoe@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
