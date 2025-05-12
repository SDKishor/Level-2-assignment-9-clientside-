import DeshboardSidebar from "@/components/modules/dashboard/DeshboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DeshboardSidebar />
        <div className="flex-1">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default DashboardLayout;
