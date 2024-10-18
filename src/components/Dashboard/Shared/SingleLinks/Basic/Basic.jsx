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
    <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#0f1d10] "
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
