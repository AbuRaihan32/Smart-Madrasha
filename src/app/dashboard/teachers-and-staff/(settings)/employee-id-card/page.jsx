import EmployeeIdCard from "@/components/Dashboard/PagesAboutTeacher&Staff/Setting/EmployeeIdCard";
import Button from "@/components/Shared/Button";
import React from "react";

const EmployeeIdCardPage = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return (
    <div className="mt-10">
      <div className="bg-slate-50 my-10 md:mt-8 p-3 pb-4 rounded-lg min-h-10 shadow-sm ">
        <div className="flex flex-col lg:flex-row items-center space-x-3 space-y-3 lg:space-y-0 text-[14px] sm:text-[16px]">
          <div className="flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <input
              type="radio"
              name="employeeType"
              value="all employee"
              className="mr-2"
            />
            <label className="mr-4">All Employee</label>
            <input
              type="radio"
              name="employeeType"
              value="teachers"
              className="mr-2"
            />
            <label className="mr-4">Teachers</label>
            <input
              type="radio"
              name="employeeType"
              value="staff"
              className="mr-2"
            />
            <label>Staff</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Search Keyword"
              className="px-3 py-2 w-44 border border-gray-300 rounded-md shadow-sm outline-none"
              name="search-Key"
              id=""
            />
          </div>
          <div className="flex gap-3">
            <Button text={"Find"}></Button>
            <Button text={"PRINT"}></Button>
            <Button text={"Color"}></Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-5 gap-3 bg-slate-50  p-3 py-6 rounded-lg min-h-10 shadow-sm items-center justify-center">
        {data.map((dt) => (
          <EmployeeIdCard key={dt.id}></EmployeeIdCard>
        ))}
      </div>
    </div>
  );
};

export default EmployeeIdCardPage;
