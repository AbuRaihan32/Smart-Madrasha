import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const SubAdminManagement = () => {
  const [SubAdminManage, setSubAdminManage] = useState(false);

  const handleClassManageToggle = () => {
    setSubAdminManage(!SubAdminManage);
  };

  return (
    <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A]"
      >
        <span>
          {SubAdminManage ? (
            <FaArrowDown></FaArrowDown>
          ) : (
            <FaArrowRight></FaArrowRight>
          )}
        </span>
        <span> Sub Admin Management </span>
      </button>
      {SubAdminManage && (
        <div className="">
          <Link href="/dashboard/create-sub-admin">
            <button className="pl-5 w-full flex items-center text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
              Create Sub Admin
            </button>
          </Link>
          <Link href="/dashboard/manage-page-access">
            <button className="pl-5 w-full flex items-center text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
              Manage Page Access
            </button>
          </Link>
          <Link href="/dashboard/active-deActive">
            <button className="pl-5 w-full flex items-center text-[#C9E7ED] space-x-3 p-2 hover:bg-[#0f1d10]  hover:border-r-[4px] hover:border-r-[#00A12A] border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
              Active & DeActive 
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubAdminManagement;
