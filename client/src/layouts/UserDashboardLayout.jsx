
import UserSidebar from "components/navigation/UserSidebar";
import UserTopbar from "components/navigation/UserTopbar";
import React from "react";
import { Outlet } from "react-router";

function UserDashboardLayout() {
  return (
        <div className="flex h-screen">
          <UserSidebar />
          <div className="flex flex-col  w-full flex-grow overflow-hidden">
            <div className="">
              <UserTopbar/>
            </div>
    
            <div className="overflow-y-auto">
              <Outlet/>
            </div>
          </div>
        </div>
  );
}

export default UserDashboardLayout;
