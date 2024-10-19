"use client";
import React, { useEffect, useState } from "react";
import allSubjects from "../../../../../public/allSubjects.json";
import AllSubjectsRow from "./AllSubjectsRow";

const AddAllSubjects = () => {
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
      {allSubjects?.length < 1 ? (
        <div className="w-full h-[300px] flex items-center justify-center font-semibold text-4xl">
          <div className="text-center">No Subjects Available</div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white md:mx-9 md:my-5 p-5 rounded-lg text-center">
          <table className="table text-center">
            {/* head */}
            <thead className="bg-[#00A12A]  text-white">
              <tr className="">
                <th>No.</th>
                <th>Subject Name</th>
                <th>Subject Serial</th>
                <th>
                  <div className="flex items-center justify-around gap-3">
                    <span>Edit</span> <span>Delete</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              {allSubjects?.map((subject, index) => (
                <AllSubjectsRow
                  key={index}
                  index={index + 1}
                  subject={subject}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AddAllSubjects;
