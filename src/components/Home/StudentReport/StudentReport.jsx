import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { GrDocumentUser } from "react-icons/gr";

const StudentReport = () => {
  return (
    <section className="bg-slate-50 py-5 mb-10">
      <div className="max-w-6xl mx-auto py-8">
        <div className=" w-[94%] mx-auto flex items-center flex-row-reverse">
          <div className="w-full">
            <img
              src="/StudentReport.png"
              alt="Digital Attendance System"
              className="w-96 mx-auto"
            />
          </div>

          <div className="w-full">
            <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
              <span className="mr-2">
                <GrDocumentUser></GrDocumentUser>
              </span>{" "}
              Student Report
            </h2>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Attendance Activities</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Exam Report</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span>Accounts Activities</span>
              </li>
              <li className="flex items-center gap-2 bg-white shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentReport;
