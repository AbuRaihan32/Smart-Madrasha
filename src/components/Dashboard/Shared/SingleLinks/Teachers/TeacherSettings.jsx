"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const TeacherSetting = () => {
  const pathName = usePathname();
  const [TeacherSetting, setTeacherSetting] = useState(false);

  const handleClassManageToggle = () => {
    setTeacherSetting(!TeacherSetting);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {TeacherSetting ? (
            <FaArrowDown></FaArrowDown>
          ) : (
            <FaArrowRight></FaArrowRight>
          )}
        </span>
        <span>Settings</span>
      </button>
      {TeacherSetting && (
        <div className="">
          <Link href="/dashboard/add-class-group-section-shift">
            <button
              className={`${
                pathName.includes("add-class-group-section-shift") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Add Teacher
            </button>
          </Link>
          <Link href="/dashboard/specify-group-section-shift-for-class">
            <button
              className={`${
                pathName.includes("specify-group-section-shift-for-class") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Add Staff
            </button>
          </Link>
          <Link href="/dashboard/specify-group-section-shift-for-class">
            <button
              className={`${
                pathName.includes("specify-group-section-shift-for-class") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Employee List
            </button>
          </Link>
          <Link href="/dashboard/specify-group-section-shift-for-class">
            <button
              className={`${
                pathName.includes("specify-group-section-shift-for-class") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Active & DeActive Teacher
            </button>
          </Link>
          <Link href="/dashboard/specify-group-section-shift-for-class">
            <button
              className={`${
                pathName.includes("specify-group-section-shift-for-class") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Teacher Subject Assign
            </button>
          </Link>
          <Link href="/dashboard/specify-group-section-shift-for-class">
            <button
              className={`${
                pathName.includes("specify-group-section-shift-for-class") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Employee ID Card
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TeacherSetting;
