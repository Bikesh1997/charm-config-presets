import { ClientHeader } from "@/components/client/ClientHeader";
import { ClientSidebar } from "@/components/client/ClientSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Client = () => {
  return (
    <div className="min-h-screen bg-background">
      <ClientHeader />
      
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)] w-full">
          <ClientSidebar />
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="mb-4">
              <SidebarTrigger />
            </div>
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Client;
