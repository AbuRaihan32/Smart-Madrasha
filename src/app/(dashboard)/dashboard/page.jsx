import DashboardContent from "@/components/Dashboard/DashboardContent";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default page;
