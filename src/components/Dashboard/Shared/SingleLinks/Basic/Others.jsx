import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Others = () => {
  const pathName = usePathname();
  const [Others, setOthers] = useState(false);

  const handleClassManageToggle = () => {
    setOthers(!Others);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {Others ? <FaArrowDown></FaArrowDown> : <FaArrowRight></FaArrowRight>}
        </span>
        <span> Others Setting </span>
      </button>
      {Others && (
        <div className="">
          <Link href="/dashboard/add_all_subjects">
            <button
              className={`${
                pathName.includes("add_all_subjects") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Add All Subject
            </button>
          </Link>
          <Link href="/dashboard/manage-session">
            <button
              className={`${
                pathName.includes("manage-session") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Manage Session
            </button>
          </Link>
          <Link href="/dashboard/institution-info">
            <button
              className={`${
                pathName.includes("institution-info") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Institution Info
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Others;
