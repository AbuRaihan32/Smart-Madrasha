"use client";
import useToggle from "@/components/Hooks/useToggle";
import SidebarProfile from "./SidebarProfile";
import NavLinksForSidebar from "./NavLinksForSidebar";

const Sidebar = () => {
  const { toggle } = useToggle();

  return (
    <div
      className={`w-[19%] bg-[#182c19] py-5 h-screen hidden justify-between fixed text-white overflow-y-auto shadow-2xl no-scrollbar md:flex flex-col ${
        toggle ? "md:hidden" : "md:flex"
      }`}
    >
      {/* Profile Picture Component */}
      <SidebarProfile />
      <NavLinksForSidebar/>
    </div>
  );
};

export default Sidebar;
