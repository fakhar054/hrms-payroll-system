
import AdminSidebar from 'components/navigation/AdminSidebar'
import AdminTopbar from 'components/navigation/AdminTopbar'
import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen ">
       <AdminTopbar/>
       
        <div className="flex  w-full flex-grow overflow-hidden">
          <AdminSidebar className=" bg-gray-800 text-white flex-shrink-0"/>
        
            
            <div className="flex-grow overflow-y-auto  "
            
            >
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout