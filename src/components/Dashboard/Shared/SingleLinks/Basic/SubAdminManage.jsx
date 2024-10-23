import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const SubAdminManagement = () => {
  const pathName = usePathname();
  const [SubAdminManage, setSubAdminManage] = useState(false);

  const handleClassManageToggle = () => {
    setSubAdminManage(!SubAdminManage);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleClassManageToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
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
          <Link href="/dashboard/basic-settings/create-sub-admin">
            <button
              className={`${
                pathName.includes("create-sub-admin") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Create Sub Admin
            </button>
          </Link>
          <Link href="/dashboard/basic-settings/manage-page-access">
            <button
              className={`${
                pathName.includes("manage-page-access") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Manage Page Access
            </button>
          </Link>
          <Link href="/dashboard/basic-settings/active-deActive">
            <button
              className={`${
                pathName.includes("active-deActive") &&
                "bg-[#051416]  border-r-[4px] border-r-[#0098A8]"
              } pl-5 text-start w-full text-[#C9E7ED] space-x-3 p-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8] border-t border-b border-t-[#05171a] border-b-[#0b3236] `}
            >
              Active & DeActive
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubAdminManagement;
