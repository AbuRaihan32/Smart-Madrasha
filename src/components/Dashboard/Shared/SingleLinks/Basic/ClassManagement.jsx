import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const ClassManagement = () => {
  const [classManagement, setClassManagement] = useState(false);

  const handleClassManageToggle = () => {
    setClassManagement(!classManagement);
  };

  return (
    <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A]"
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
          <Link href="/dashboard/add-class-group-section-shift">
            <button className="pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
              Add Class, Group, <br /> Section, Shift
            </button>
          </Link>
          <Link href="#">
            <button className="pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
              Specify- Group Section <br /> Shift For Class
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ClassManagement;
