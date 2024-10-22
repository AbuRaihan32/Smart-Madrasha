import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import ClassManagement from "./ClassManagement";
import SubAdminManagement from "./SubAdminManage";
import Others from "./Others";

const Basic = () => {
  const [Basic, setBasic] = useState(false);

  const handleToggle = () => {
    setBasic(!Basic);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {Basic ? <FaArrowDown></FaArrowDown> : <FaArrowRight></FaArrowRight>}
        </span>
        <span>Basic Settings</span>
      </button>
      {Basic && (
        <div className="ml-5">
          {/* Class Management */}
          <ClassManagement></ClassManagement>

          {/* Sub Admin Manage */}
          <SubAdminManagement></SubAdminManagement>

          {/* Others */}
          <Others></Others>
        </div>
      )}
    </div>
  );
};

export default Basic;
