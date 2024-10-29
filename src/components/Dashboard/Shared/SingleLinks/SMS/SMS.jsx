import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const SMS = () => {
  const [SMS, setSMS] = useState(false);

  const handleToggle = () => {
    setSMS(!SMS);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {SMS ? <FaArrowDown></FaArrowDown> : <FaArrowRight></FaArrowRight>}
        </span>
        <span>SMS</span>
      </button>
      {SMS && (
        <div className="">
          <Link href="#">
            <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
              Admit New Student
            </button>
          </Link>
          <Link href="#">
            <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
              Single Re-Admission
            </button>
          </Link>
          <Link href="#">
            <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
              Multiple Re-Admission
            </button>
          </Link>
          <Link href="#">
            <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
              Online Admission Form
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SMS;
