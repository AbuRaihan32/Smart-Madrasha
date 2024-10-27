"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const TeacherAccount = () => {
  const pathName = usePathname();
  const [TeacherAccount, setTeacherAccount] = useState(false);

  const handleClassManageToggle = () => {
    setTeacherAccount(!TeacherAccount);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {TeacherAccount ? (
            <FaArrowDown></FaArrowDown>
          ) : (
            <FaArrowRight></FaArrowRight>
          )}
        </span>
        <span>Accounts</span>
      </button>
      {TeacherAccount && (
        <div className="">
          <Link href="/dashboard/teachers-and-staff/paid-and-due-salary">
            <button
              className={`${
                pathName.includes("paid-and-due-salary") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Paid & Deu Salary
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TeacherAccount;
