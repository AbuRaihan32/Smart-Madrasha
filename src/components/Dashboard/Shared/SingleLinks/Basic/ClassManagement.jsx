"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const ClassManagement = () => {
  const pathName = usePathname();
  const [classManagement, setClassManagement] = useState(false);

  const handleClassManageToggle = () => {
    setClassManagement(!classManagement);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {classManagement ? (
            <FaArrowDown></FaArrowDown>
          ) : (
            <FaArrowRight></FaArrowRight>
          )}
        </span>
        <span>class Management </span>
      </button>
      {classManagement && (
        <div className="">
          <Link href="/dashboard/basic-settings/add-class-group-section-shift">
            <button
              className={`${
                pathName.includes("add-class-group-section-shift") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#2fd0e2] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Add Class, Group, <br /> Section, Shift
            </button>
          </Link>
          <Link href="/dashboard/basic-settings/specify-group-section-shift-for-class">
            <button
              className={`${
                pathName.includes("specify-group-section-shift-for-class") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#2fd0e2] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Specify- Group Section <br /> Shift For Class
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ClassManagement;
