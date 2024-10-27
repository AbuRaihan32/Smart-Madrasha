"use client";
import DashboardFooter from "@/components/Dashboard/Shared/DashoardFooter";
import Header from "@/components/Dashboard/Shared/Header";
import Sidebar from "@/components/Dashboard/Shared/Sidebar";
import ScrollToTopButton from "@/components/Shared/ScrollToTopButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";

const queryClient = new QueryClient();
export const ToggleContext = createContext();

export default function DashboardLayout({ children }) {
  const [toggle, setToggle] = useState(false);

  const value = {
    toggle,
    setToggle,
  };

  return (
    <ToggleContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Sidebar></Sidebar>
          <nav className="z-50 sticky top-0">
            <Header></Header>
          </nav>
          <div
            className={`${
              toggle ? " w-full" : "w-full md:w-[81%]"
            } absolute right-0 top-20 `}
            >
            <div className="px-1 md:px-5 p-5 pt-48 md:pt-10 overflow-auto bg-[#EEF5F9] min-h-[500px]">
              {children}
            </div>
            <DashboardFooter></DashboardFooter>
            <ScrollToTopButton></ScrollToTopButton>
          </div>
        </div>
      </QueryClientProvider>
    </ToggleContext.Provider>
  );
}
