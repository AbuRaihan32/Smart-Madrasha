import React from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Account = () => {
  return (
    <section className="max-w-6xl mx-auto py-8">
      <div className=" w-[94%] mx-auto flex items-center ">
        <div className="w-full">
          <img
            src="/Accounts.png"
            alt="Digital Attendance System"
            className="w-96 mx-auto"
          />
        </div>

        <div className="w-full">
          <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
            <span className="mr-2">
              <FaMoneyBill1Wave></FaMoneyBill1Wave>
            </span>{" "}
            Accounts Management
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
    </section>
  );
};

export default Account;
