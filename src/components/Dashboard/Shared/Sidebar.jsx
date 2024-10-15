"use client";
import Link from "next/link";
import SidebarProfile from "../DashboardHome/SidebarProfile";
import useToggle from "@/components/Hooks/useToggle";
import { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const { toggle } = useToggle();
  const [admissionOpen, setAdmissionOpen] = useState(false);

  // Toggle admission submenu
  const handleAdmissionToggle = () => {
    setAdmissionOpen(!admissionOpen);
  };

  return (
    <div
      className={`w-1/6 bg-[#273A28] py-5 h-screen hidden justify-between fixed text-white overflow-y-auto shadow-2xl no-scrollbar md:flex flex-col ${
        toggle ? "md:hidden" : "md:flex"
      }`}
    >
      {/* Profile Picture Component */}
      <SidebarProfile />

      <nav className=" mt-5">
        {/* Basic Settings */}
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Basic Settings</span>
        </Link>

        {/* Teacher & Staff */}
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Teacher & Staff</span>
        </Link>

        {/* Admission with Submenu */}
        <div className="border-t border-b border-t-[#1d2c1e] border-b-[#144918] ">
          <button
            onClick={handleAdmissionToggle}
            className="w-full flex items-center gap-3 px-2 py-2 hover:bg-[#182c19] "
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
                <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] ">
                  Admit New Student
                </button>
              </Link>
              <Link href="#">
                <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] ">
                  Single Re-Admission
                </button>
              </Link>
              <Link href="#">
                <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] ">
                  Multiple Re-Admission
                </button>
              </Link>
              <Link href="#">
                <button className="pl-6 w-full flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] ">
                  Online Admission Form
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Students Info</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Student Management</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Attendances</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Accounts</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Exam</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>SMS</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Routines</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>Committee</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19]  border-t border-b border-t-[#1d2c1e] border-b-[#144918] "
        >
          <span>SIKKHALOY INVOICE</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
