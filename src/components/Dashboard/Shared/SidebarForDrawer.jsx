"use client";
import SidebarProfile from "./SidebarProfile";
import NavLinksForSidebar from "./NavLinksForSidebar";

const SidebarForDrawer = () => {
  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div
          className={`w-[75%] sm:w-3/6 bg-[#082427] pt-5 pb-10 h-screen justify-between fixed text-white overflow-y-auto shadow-2xl no-scrollbar md:flex flex-col text-[16px]`}
        >
          {/* Profile Picture Component */}
          <SidebarProfile />

          <NavLinksForSidebar></NavLinksForSidebar>
        </div>
      </div>
    </>
  );
};

export default SidebarForDrawer;
