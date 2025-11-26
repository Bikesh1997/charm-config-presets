import { Outlet } from "react-router-dom";
import { RMSidebar } from "@/components/rm/RMSidebar";
import { RMHeader } from "@/components/rm/RMHeader";

const RMPortalLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <RMSidebar />
      <div className="flex-1 flex flex-col">
        <RMHeader />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RMPortalLayout;
