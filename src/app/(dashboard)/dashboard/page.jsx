'use client'
import DashboardContent from "@/components/Dashboard/DashboardContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const page = () => {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <DashboardContent />
      </QueryClientProvider>
    </div>
  );
};

export default page;
