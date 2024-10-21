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
    <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A]"
      >
        <span>
          {Others ? <FaArrowDown></FaArrowDown> : <FaArrowRight></FaArrowRight>}
        </span>
        <span> Others Setting </span> 
      </button>
      {Others && (
        <div className="">
          <Link href="/dashboard/add_all_subjects">
            <button className={`${pathName.includes('add_all_subjects') && 'bg-[#0f1d10]  border-r-[4px] border-r-[#00A12A]' } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] `}>
              Add All Subject
            </button>
          </Link>
          <Link href="/dashboard/manage-session">
            <button className={`${pathName.includes('manage-session') && 'bg-[#0f1d10]  border-r-[4px] border-r-[#00A12A]' } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] `}>
              Manage Session
            </button>
          </Link>
          <Link href="/dashboard/institution-info">
            <button className={`${pathName.includes('institution-info') && 'bg-[#0f1d10]  border-r-[4px] border-r-[#00A12A]' } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] `}>
              Institution Info
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Others;
