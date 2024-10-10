'use client'
import Header from "@/components/Dashboard/Shared/Header";
import Sidebar from "@/components/Dashboard/Shared/Sidebar";
import Footer from "@/components/Shared/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <nav className="z-50 sticky top-0">
        <Header></Header>
        <Sidebar></Sidebar>
      </nav>
      <div className="w-5/6 absolute right-0 top-20 p-10 overflow-auto bg-[#EEF5F9]">
        {children}
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
