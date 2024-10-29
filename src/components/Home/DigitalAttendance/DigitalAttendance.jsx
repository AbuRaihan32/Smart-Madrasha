import LottieFile from "@/components/Shared/LottieFile";
import React from "react";
import { FaBell } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Att from "../../../../public/LottieJson/Attendance.json";

const DigitalAttendance = () => {
  return (
    <section className=" max-w-6xl mx-auto py-8 px-5 md:px-0">
      <div className="  w-[94%] mx-auto flex flex-col sm:flex-row items-center ">
        <div className="w-full">
          <LottieFile data={Att}></LottieFile>
        </div>

        <div className="w-full">
          <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
            <span className="mr-2">
              <FaBell></FaBell>
            </span>{" "}
            Digital Attendance System
          </h2>

          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Attendance Display System</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Student, Teacher & Staff Report</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Entry SMS Confirmation</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Exit SMS Confirmation</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Late SMS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Absent And Bunk SMS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Manage Schedule</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DigitalAttendance;
