import React from "react";
import { FaBell } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Exam = () => {
  return (
    <section className="bg-slate-50 my-10">
      <div className="max-w-6xl mx-auto py-8">
        <div className=" w-[94%] mx-auto flex items-center flex-row-reverse">
          <div className="w-full">
            <img
              src="/Exam.png"
              alt="Digital Attendance System"
              className="w-96 mx-auto"
            />
          </div>

          <div className="w-full">
            <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
              <span className="mr-2">
                <FaBell></FaBell>
              </span>{" "}
              Digital Attendance System
            </h2>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Attendance Display System</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Student, Teacher & Staff Report</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Entry SMS Confirmation</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Exit SMS Confirmation</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Late SMS</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Absent And Bunk SMS</span>
              </li>
              <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
                <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
                <span> Manage Schedule</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exam;
