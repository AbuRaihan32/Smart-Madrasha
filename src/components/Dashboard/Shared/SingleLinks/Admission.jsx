import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Admission = () => {
  const [Admission, setAdmission] = useState(false);

  const handleAdmissionToggle = () => {
    setAdmission(!Admission);
  };

  return (
    <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
    <button
      onClick={handleAdmissionToggle}
      className="w-full flex items-center gap-1 px-2 py-2 hover:bg-[#0f1d10] "
    >
      <span>
        {Admission ? (
          <FaArrowDown></FaArrowDown>
        ) : (
          <FaArrowRight></FaArrowRight>
        )}
      </span>
      <span>Admission Settings</span>
    </button>
    {Admission && (
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

export default Admission;
