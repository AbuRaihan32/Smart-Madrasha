"use client";
import React, { useEffect, useState } from "react";
import Sessions from "../../../../../public/Temporary/Session.json";
import SessionsRow from "./SessionsRow";
import Button from "@/components/Shared/Button";

const ManageSession = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Only set to true after the component is mounted
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <p>loading...</p>
      </div>
    ); // Avoid rendering anything until the component has mounted
  }

  return (
    <>
      {Sessions?.length < 1 ? (
        <div className="w-full h-[300px] flex items-center justify-center font-semibold text-4xl">
          <div className="text-center">No Session Available</div>
        </div>
      ) : (
        <>
          <div className="bg-white md:mx-5 md:my-5 p-5 rounded-lg min-h-10 shadow-sm ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
              <form className="">
                <input
                  type="text"
                  name="session year"
                  className="p-2 mr-4 border outline-0 rounded-md w-full md:w-[20%]  mb-2 md:mb-0"
                  placeholder="Enter Session Year"
                />
                <input
                  type="text"
                  name="start date"
                  className="p-2 mr-4 border outline-0 rounded-md w-full md:w-[20%]  mb-2 md:mb-0"
                  placeholder="Start Date"
                />
                <input
                  type="text"
                  name="end date"
                  className="p-2 mr-4 border outline-0 rounded-md w-full md:w-[20%]  mb-2 md:mb-0"
                  placeholder="End Date"
                />
                <Button text={"Submit"}></Button>
              </form>
            </div>
          </div>
          <div className="overflow-x-auto bg-white md:mx-5 md:my-5 p-5 rounded-lg text-center shadow-sm mt-5">
            <table className="table text-center">
              {/* head */}
              <thead className="bg-[#0098A8] text-white">
                <tr className="">
                  <th>SN.</th>
                  <th>Session Year</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>End Date</th>
                  <th>
                    <div className="flex items-center justify-around gap-3">
                      <span>Edit</span> <span>Delete</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {Sessions?.map((session, index) => (
                  <SessionsRow
                    key={index}
                    index={index + 1}
                    session={session}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default ManageSession;
