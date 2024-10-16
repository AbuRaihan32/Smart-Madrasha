import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const StudentsManage = () => {
  const [StManage, setStManage] = useState(false);

  const handleToggle = () => {
    setStManage(!StManage);
  };

  return (
    <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
    <button
      onClick={handleToggle}
      className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#0f1d10] "
    >
      <span>
        {StManage ? (
          <FaArrowDown></FaArrowDown>
        ) : (
          <FaArrowRight></FaArrowRight>
        )}
      </span>
      <span>Students Management</span>
    </button>
    {StManage && (
      <div className="">
        <Link href="#">
          <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
            Admit New Student
          </button>
        </Link>
        <Link href="#">
          <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
            Single Re-Admission
          </button>
        </Link>
        <Link href="#">
          <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
            Multiple Re-Admission
          </button>
        </Link>
        <Link href="#">
          <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
            Online Admission Form
          </button>
        </Link>
      </div>
    )}
  </div>

  );
};

export default StudentsManage;
