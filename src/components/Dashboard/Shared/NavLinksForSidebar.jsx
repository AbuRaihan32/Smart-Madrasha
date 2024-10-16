import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const NavLinksForSidebar = () => {
 
  // const [Teacher, setTeacher] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  // const [StudentsInfo, setStudentsInfo] = useState(false);
  // const [StudentManagement, setStudentManagement] = useState(false);
  // const [Attendance, setAttendance] = useState(false);
  // const [Accounts, setAccounts] = useState(false);
  // const [Exam, setExam] = useState(false);
  // const [SMS, setSMS] = useState(false);

  // Toggle admission submenu
  const handleAdmissionToggle = () => {
    setAdmissionOpen(!admissionOpen);
  };

  return (
    <nav className=" mt-5">
      {/* Basic Settings */}
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Basic Settings</span>
      </Link>

      {/* Teacher & Staff */}
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Teacher & Staff</span>
      </Link>

      {/* Admission with Submenu */}
      <div className="border-t border-b border-t-[#112012] border-b-[#0c3a0e] ">
        <button
          onClick={handleAdmissionToggle}
          className="w-full flex items-center gap-3 px-2 py-2 hover:bg-[#0f1d10] "
        >
          <span>
            {admissionOpen ? (
              <FaArrowDown></FaArrowDown>
            ) : (
              <FaArrowRight></FaArrowRight>
            )}
          </span>
          <span>Admission</span>
        </button>
        {admissionOpen && (
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

      {/* Other Links */}
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Students Info</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Student Management</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Attendances</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Accounts</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Exam</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>SMS</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Routines</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>Committee</span>
      </Link>
      <Link
        href="#"
        className="flex items-center space-x-3 p-2 hover:bg-[#0f1d10]  border-t border-b border-t-[#112012] border-b-[#0c3a0e] "
      >
        <span>SIKKHALOY INVOICE</span>
      </Link>
    </nav>
  );
};

export default NavLinksForSidebar;
