import { Outlet } from 'react-router'
import AdminSidebar from 'components/navigation/AdminSidebar'
import AdminTopbar from 'components/navigation/AdminTopbar'


import React from 'react'


function SAdminDashboardLayout() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex flex-col  w-full flex-grow overflow-hidden">
        <div className="">
          <AdminTopbar/>
        </div>

        <div className="overflow-y-auto">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default SAdminDashboardLayout