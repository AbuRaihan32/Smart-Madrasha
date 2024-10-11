'use client'
import Link from "next/link";
import SidebarProfile from "../DashboardHome/SidebarProfile";
import useToggle from "@/components/Hooks/useToggle";
import { useState } from "react";

const Sidebar = () => {
  const { toggle } = useToggle();
  const [admissionOpen, setAdmissionOpen] = useState(false);

  // Toggle admission submenu
  const handleAdmissionToggle = () => {
    setAdmissionOpen(!admissionOpen);
  };

  return (
    <div
      className={`bg-[#273A28] py-5 flex flex-col h-screen justify-between fixed text-white overflow-y-auto shadow-2xl ${
        toggle ? "hidden md:w-1/6 md:block" : "block w-1/6"
      }`}
    >
      {/* Profile Picture Component */}
      <SidebarProfile />

      <nav className="space-y-4">
        {/* Basic Settings */}
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Basic Settings</span>
        </Link>

        {/* Teacher & Staff */}
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Teacher & Staff</span>
        </Link>

        {/* Admission with Submenu */}
        <div className="border-t border-b border-[#1d2c1e]">
          <button
            onClick={handleAdmissionToggle}
            className="w-full flex items-center justify-between px-2 py-2 hover:bg-[#182c19] rounded-lg"
          >
            <span>Admission</span>
            <span>{admissionOpen ? "▼" : "▶"}</span>
          </button>
          {admissionOpen && (
            <div className="space-y-2 pl-4 pt-2">
              <Link href="#">
                <button className="block px-2 py-1 hover:bg-[#247983] rounded-lg">
                  Admit New Student
                </button>
              </Link>
              <Link href="#">
                <button className="block px-2 py-1 hover:bg-[#247983] rounded-lg">
                  Single Re-Admission
                </button>
              </Link>
              <Link href="#">
                <button className="block px-2 py-1 hover:bg-[#247983] rounded-lg">
                  Multiple Re-Admission
                </button>
              </Link>
              <Link href="#">
                <button className="block px-2 py-1 hover:bg-[#247983] rounded-lg">
                  Online Admission Form
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Students Info</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Student Management</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Attendances</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Accounts</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Exam</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>SMS</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Routines</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>Committee</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-3 p-2 hover:bg-[#182c19] rounded-lg"
        >
          <span>SIKKHALOY INVOICE</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
