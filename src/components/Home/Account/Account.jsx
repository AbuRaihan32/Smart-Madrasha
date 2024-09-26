import React from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Account = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className=" w-[94%] mx-auto flex items-center ">
        <div className="w-full">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://lottie.host/6b7886ab-c8f1-410d-bafe-22b19e8af83d/bXyRRGxeJL.json"
            background="##FFFFFF"
            speed="1"
            className="width: 300px; height: 300px"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>

        <div className="w-full">
          <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
            <span className="mr-2">
              <FaMoneyBill1Wave></FaMoneyBill1Wave>
            </span>{" "}
            Accounts Management
          </h2>

          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span> Easy Step Payment Collection</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span>Income & Expense Report</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span> Accounts Summary</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span>Daily,Monthly,Yearly Analysis</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span>Paid Notification by SMS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span>Due Notification by SMS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px]">
              <RiCheckboxCircleFill className="text-[#0098A8]"></RiCheckboxCircleFill>{" "}
              <span>Online Money Receipt</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Account;
