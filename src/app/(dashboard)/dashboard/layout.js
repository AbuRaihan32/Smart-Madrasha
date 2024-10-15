"use client";
import Header from "@/components/Dashboard/Shared/Header";
import Sidebar from "@/components/Dashboard/Shared/Sidebar";
import Footer from "@/components/Shared/Footer";
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
        <nav className="z-50 sticky top-0">
          <Header></Header>
          <Sidebar></Sidebar>
        </nav>
        <div
          className={`${
            toggle ? " w-full" : "w-full md:w-5/6"
          } absolute right-0 top-20 p-3 pt-48 md:pt-10 overflow-auto bg-[#EEF5F9]`}
        >
          {children}
        </div>
        <Footer />
      </QueryClientProvider>
    </ToggleContext.Provider>
  );
}
