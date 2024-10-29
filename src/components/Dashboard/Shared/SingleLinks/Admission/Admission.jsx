'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Admission = () => {
  const [Admission, setAdmission] = useState(false);
  const pathName = usePathname();

  const handleAdmissionToggle = () => {
    setAdmission(!Admission);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleAdmissionToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {Admission ? (
            <FaArrowDown></FaArrowDown>
          ) : (
            <FaArrowRight></FaArrowRight>
          )}
        </span>
        <span>Admission Settings</span>
      </button>
      {Admission && (
        <div className="">
          <Link href="/dashboard/admission/admit-new-student">
            <button
              className={`${
                pathName.includes("admit-new-student") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#2fd0e2] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Admit New Student
            </button>
          </Link>
          <Link href="/dashboard/admission/single-re-admition">
            <button
              className={`${
                pathName.includes("single-re-admition") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#2fd0e2] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Single Re-Admission
            </button>
          </Link>
          <Link href="#">
            <button
              className={`${
                pathName.includes("add-class-group-section-shift") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#2fd0e2] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Multiple Re-Admission
            </button>
          </Link>
          <Link href="#">
            <button
              className={`${
                pathName.includes("add-class-group-section-shift") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#2fd0e2] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Online Admission Form
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Admission;
