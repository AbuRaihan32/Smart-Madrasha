import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import TeacherSetting from "./TeacherSettings";
import TeacherAccount from "./TeacherAccount";

const Teacher = () => {
  const [Teacher, setTeacher] = useState(false);

  const handleToggle = () => {
    setTeacher(!Teacher);
  };

  return (
    <div className="border-t border-b border-t-[#05171a] border-b-[#0b3236] ">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#051416]  hover:border-r-[4px] hover:border-r-[#0098A8]"
      >
        <span>
          {Teacher ? (
            <FaArrowDown></FaArrowDown>
          ) : (
            <FaArrowRight></FaArrowRight>
          )}
        </span>
        <span>Teachers & Staff</span>
      </button>
      {Teacher && (
        <div className="ml-5">
          <TeacherSetting></TeacherSetting>
          <TeacherAccount></TeacherAccount>
        </div>
      )}
    </div>
  );
};

export default Teacher;
