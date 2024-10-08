"use client";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const Account = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure lottie-player only renders on the client-side
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-0">
      <div className=" w-[94%] mx-auto flex flex-col sm:flex-row items-center ">
        <div className="w-full">
          <div className="w-[80%] mx-auto">
            {isClient && (
              <>
                <script
                  src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
                  async
                ></script>
                <lottie-player
                  src="https://lottie.host/3127308b-96c3-470e-9055-c77edeadad19/3gsKIt4xeo.json"
                  background="##fff"
                  speed="1"
                  style={{ width: "300px", height: "300px" }}
                  loop
                  autoplay
                ></lottie-player>
              </>
            )}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-[#0098A8] text-2xl font-bold flex items-center">
            <span className="mr-2">
              <FaMoneyBill1Wave></FaMoneyBill1Wave>
            </span>{" "}
            Accounts Management
          </h2>

          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Easy Step Payment Collection</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span>Income & Expense Report</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span> Accounts Summary</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span>Daily,Monthly,Yearly Analysis</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span>Paid Notification by SMS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span>Due Notification by SMS</span>
            </li>
            <li className="flex items-center gap-2 bg-slate-50 shadow rounded-lg p-[9px] text-[14px] text-[#0098A8] hover:bg-[#0098A8] hover:text-white transition duration-200">
              <RiCheckboxCircleFill></RiCheckboxCircleFill>{" "}
              <span>Online Money Receipt</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Account;
